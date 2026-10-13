-- =====================================================================
--  SMB Portal — единая система курсов на Supabase
--  Запуск: Supabase → SQL Editor → New query → вставить весь файл → Run.
--  Файл можно запускать повторно: он ничего не удаляет из данных.
-- =====================================================================

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------------
-- Таблицы
-- ---------------------------------------------------------------------

-- Профиль появляется автоматически при первом входе (триггер ниже).
create table if not exists public.profiles (
  id          uuid primary key references auth.users on delete cascade,
  email       text,
  full_name   text,
  grade       text,
  lang        text not null default 'kz' check (lang in ('kz', 'ru')),
  role        text not null default 'student' check (role in ('student', 'teacher', 'admin')),
  created_at  timestamptz not null default now()
);

-- Каталог курсов. Материалы курса лежат в Storage: course-content/<slug>/<entry_file>
create table if not exists public.courses (
  id              uuid primary key default gen_random_uuid(),
  slug            text not null unique check (slug ~ '^[a-z0-9-]{2,40}$'),
  title_kz        text not null,
  title_ru        text,
  description_kz  text,
  description_ru  text,
  icon            text not null default '📚',
  entry_file      text not null default 'index.html',
  owner_id        uuid references public.profiles (id) on delete set null,
  is_published    boolean not null default true,
  allow_requests  boolean not null default true,
  sort_order      int not null default 0,
  created_at      timestamptz not null default now()
);

-- Коды доступа. Видят их только админ и автор курса.
create table if not exists public.access_codes (
  id          uuid primary key default gen_random_uuid(),
  code        text not null check (length(code) between 4 and 40),
  course_id   uuid not null references public.courses (id) on delete cascade,
  label       text,
  max_uses    int check (max_uses is null or max_uses > 0),
  uses        int not null default 0,
  expires_at  timestamptz,
  is_active   boolean not null default true,
  created_by  uuid references public.profiles (id) on delete set null,
  created_at  timestamptz not null default now()
);

-- Кто на какой курс записан и каким способом.
create table if not exists public.enrollments (
  user_id     uuid not null references public.profiles (id) on delete cascade,
  course_id   uuid not null references public.courses (id) on delete cascade,
  source      text not null check (source in ('code', 'request', 'admin')),
  code_id     uuid references public.access_codes (id) on delete set null,
  created_at  timestamptz not null default now(),
  primary key (user_id, course_id)
);

-- Запросы «пустите меня на курс».
create table if not exists public.access_requests (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references public.profiles (id) on delete cascade,
  course_id   uuid not null references public.courses (id) on delete cascade,
  message     text check (length(message) <= 500),
  status      text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at  timestamptz not null default now(),
  decided_at  timestamptz,
  decided_by  uuid references public.profiles (id) on delete set null
);

-- Неудачные попытки ввода кода (защита от перебора).
create table if not exists public.code_attempts (
  id          bigint generated always as identity primary key,
  user_id     uuid not null references public.profiles (id) on delete cascade,
  created_at  timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- Вспомогательные функции
-- ---------------------------------------------------------------------

-- Код сравнивается без учёта регистра, пробелов, «-» и «_».
create or replace function public.norm_code(p text) returns text
language sql immutable as $$
  select upper(regexp_replace(coalesce(p, ''), '[\s_-]', '', 'g'))
$$;

create unique index if not exists access_codes_norm_uniq on public.access_codes (public.norm_code(code));
create unique index if not exists access_requests_one_pending on public.access_requests (user_id, course_id) where status = 'pending';
create index if not exists code_attempts_user_time on public.code_attempts (user_id, created_at);

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from profiles where id = auth.uid() and role = 'admin')
$$;

-- Управлять курсом может админ или преподаватель — автор курса.
create or replace function public.can_manage_course(p_course uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select public.is_admin() or exists (
    select 1 from courses c join profiles p on p.id = c.owner_id
    where c.id = p_course and c.owner_id = auth.uid() and p.role = 'teacher'
  )
$$;

create or replace function public.can_manage_slug(p_slug text) returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce((select public.can_manage_course(id) from courses where slug = p_slug), public.is_admin())
$$;

create or replace function public.is_enrolled_slug(p_slug text) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from enrollments e join courses c on c.id = e.course_id
    where c.slug = p_slug and e.user_id = auth.uid()
  )
$$;

-- Профиль при первом входе.
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into profiles (id, email, full_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'))
  on conflict (id) do nothing;
  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------
-- Действия учеников и преподавателей (вызываются с сайта через rpc)
-- ---------------------------------------------------------------------

-- Ввод кода → запись на курс. Ошибки возвращаются в ответе, а не исключением,
-- чтобы неудачная попытка успела записаться в code_attempts.
create or replace function public.redeem_code(p_code text) returns json
language plpgsql security definer set search_path = public as $$
declare
  v_uid  uuid := auth.uid();
  v_code access_codes%rowtype;
  v_slug text;
begin
  if v_uid is null then return json_build_object('ok', false, 'error', 'not_authenticated'); end if;

  if (select count(*) from code_attempts where user_id = v_uid and created_at > now() - interval '1 hour') >= 10 then
    return json_build_object('ok', false, 'error', 'too_many_attempts');
  end if;

  select * into v_code from access_codes
   where norm_code(code) = norm_code(p_code)
     and is_active
     and (expires_at is null or expires_at > now())
     and (max_uses is null or uses < max_uses)
   for update;

  if not found or length(norm_code(p_code)) < 4 then
    insert into code_attempts (user_id) values (v_uid);
    return json_build_object('ok', false, 'error', 'code_not_found');
  end if;

  select slug into v_slug from courses where id = v_code.course_id;

  insert into enrollments (user_id, course_id, source, code_id)
  values (v_uid, v_code.course_id, 'code', v_code.id)
  on conflict do nothing;
  if found then
    update access_codes set uses = uses + 1 where id = v_code.id;
  end if;

  update access_requests set status = 'approved', decided_at = now()
   where user_id = v_uid and course_id = v_code.course_id and status = 'pending';

  return json_build_object('ok', true, 'course_id', v_code.course_id, 'slug', v_slug);
end $$;

create or replace function public.request_access(p_course uuid, p_message text default null) returns json
language plpgsql security definer set search_path = public as $$
declare v_uid uuid := auth.uid();
begin
  if v_uid is null then return json_build_object('ok', false, 'error', 'not_authenticated'); end if;
  if not exists (select 1 from courses where id = p_course and is_published and allow_requests) then
    return json_build_object('ok', false, 'error', 'requests_closed');
  end if;
  if exists (select 1 from enrollments where user_id = v_uid and course_id = p_course) then
    return json_build_object('ok', true, 'status', 'enrolled');
  end if;
  insert into access_requests (user_id, course_id, message)
  values (v_uid, p_course, nullif(left(trim(coalesce(p_message, '')), 500), ''))
  on conflict (user_id, course_id) where status = 'pending' do nothing;
  return json_build_object('ok', true, 'status', 'pending');
end $$;

create or replace function public.decide_request(p_request uuid, p_approve boolean) returns json
language plpgsql security definer set search_path = public as $$
declare v_req access_requests%rowtype;
begin
  select * into v_req from access_requests where id = p_request for update;
  if not found then return json_build_object('ok', false, 'error', 'not_found'); end if;
  if not can_manage_course(v_req.course_id) then return json_build_object('ok', false, 'error', 'forbidden'); end if;

  update access_requests
     set status = case when p_approve then 'approved' else 'rejected' end,
         decided_at = now(), decided_by = auth.uid()
   where id = p_request;

  if p_approve then
    insert into enrollments (user_id, course_id, source)
    values (v_req.user_id, v_req.course_id, 'request')
    on conflict do nothing;
  end if;
  return json_build_object('ok', true);
end $$;

-- ---------------------------------------------------------------------
-- Права доступа (Row Level Security)
-- ---------------------------------------------------------------------

alter table public.profiles        enable row level security;
alter table public.courses         enable row level security;
alter table public.access_codes    enable row level security;
alter table public.enrollments     enable row level security;
alter table public.access_requests enable row level security;
alter table public.code_attempts   enable row level security;

-- profiles: свой профиль; админ — все; автор курса — своих учеников и тех, кто просится.
drop policy if exists profiles_select on public.profiles;
create policy profiles_select on public.profiles for select using (
  id = auth.uid() or public.is_admin()
  or exists (select 1 from enrollments e where e.user_id = profiles.id and public.can_manage_course(e.course_id))
  or exists (select 1 from access_requests r where r.user_id = profiles.id and public.can_manage_course(r.course_id))
);
drop policy if exists profiles_update_own on public.profiles;
create policy profiles_update_own on public.profiles for update using (id = auth.uid()) with check (id = auth.uid());
-- Ученик может менять только имя, класс и язык — не роль.
revoke update on public.profiles from authenticated, anon;
grant update (full_name, grade, lang) on public.profiles to authenticated;
-- Роль меняет админ через SQL Editor (см. README).

-- courses: опубликованные видят все, даже без входа.
drop policy if exists courses_select on public.courses;
create policy courses_select on public.courses for select using (is_published or public.can_manage_course(id));
drop policy if exists courses_insert on public.courses;
create policy courses_insert on public.courses for insert with check (
  public.is_admin()
  or (owner_id = auth.uid() and exists (select 1 from profiles where id = auth.uid() and role = 'teacher'))
);
drop policy if exists courses_update on public.courses;
create policy courses_update on public.courses for update using (public.can_manage_course(id)) with check (public.can_manage_course(id));
drop policy if exists courses_delete on public.courses;
create policy courses_delete on public.courses for delete using (public.can_manage_course(id));

-- access_codes: только управляющие курсом.
drop policy if exists codes_all on public.access_codes;
create policy codes_all on public.access_codes for all
  using (public.can_manage_course(course_id)) with check (public.can_manage_course(course_id));

-- enrollments: ученик видит свои; записывает и удаляет только управляющий курсом.
drop policy if exists enroll_select on public.enrollments;
create policy enroll_select on public.enrollments for select using (user_id = auth.uid() or public.can_manage_course(course_id));
drop policy if exists enroll_insert on public.enrollments;
create policy enroll_insert on public.enrollments for insert with check (public.can_manage_course(course_id));
drop policy if exists enroll_delete on public.enrollments;
create policy enroll_delete on public.enrollments for delete using (public.can_manage_course(course_id));

-- access_requests: ученик видит свои; создаются и решаются только через функции выше.
drop policy if exists requests_select on public.access_requests;
create policy requests_select on public.access_requests for select using (user_id = auth.uid() or public.can_manage_course(course_id));

-- code_attempts: напрямую недоступна никому (пишет только redeem_code).

grant execute on function public.redeem_code(text), public.request_access(uuid, text), public.decide_request(uuid, boolean) to authenticated;
revoke execute on function public.redeem_code(text), public.request_access(uuid, text), public.decide_request(uuid, boolean) from anon;

-- ---------------------------------------------------------------------
-- Хранилище материалов: приватный bucket, файл курса видят только записанные
-- ---------------------------------------------------------------------

insert into storage.buckets (id, name, public)
values ('course-content', 'course-content', false)
on conflict (id) do nothing;

drop policy if exists content_read on storage.objects;
create policy content_read on storage.objects for select to authenticated using (
  bucket_id = 'course-content'
  and (public.is_enrolled_slug((storage.foldername(name))[1]) or public.can_manage_slug((storage.foldername(name))[1]))
);
drop policy if exists content_write on storage.objects;
create policy content_write on storage.objects for insert to authenticated with check (
  bucket_id = 'course-content' and public.can_manage_slug((storage.foldername(name))[1])
);
drop policy if exists content_update on storage.objects;
create policy content_update on storage.objects for update to authenticated using (
  bucket_id = 'course-content' and public.can_manage_slug((storage.foldername(name))[1])
);
drop policy if exists content_delete on storage.objects;
create policy content_delete on storage.objects for delete to authenticated using (
  bucket_id = 'course-content' and public.can_manage_slug((storage.foldername(name))[1])
);

-- ---------------------------------------------------------------------
-- Стартовые курсы
-- ---------------------------------------------------------------------

insert into public.courses (slug, icon, entry_file, sort_order, title_kz, title_ru, description_kz, description_ru) values
  ('geotanu', '🌍', 'geotanu.html', 1,
   'GeoTany: География ҰБТ/ЕНТ курсы', 'GeoTany: Курс географии ЕНТ',
   'Blooket жинақтары, 44 сабақ теориясы, ҰБТ нұсқалары және интерактивті карталар',
   'Наборы Blooket, теория 44 уроков, варианты ЕНТ и интерактивные карты'),
  ('geonish', '🌟', 'geonish.html', 2,
   'ГеоНИШ 6-сынып: Жаратылыстану & География (НЗМ)', 'ГеоНИШ 6 класс: Естествознание и география (НИШ)',
   'НЗМ-ге дайындық: 14 ғылыми блок, 42 сабақ',
   'Подготовка в НИШ: 14 научных блоков, 42 урока')
on conflict (slug) do nothing;

-- ---------------------------------------------------------------------
-- ПОСЛЕ первого входа на сайт сделайте себя админом (одна строка):
--   update public.profiles set role = 'admin' where email = 'ВАША_ПОЧТА';
-- ---------------------------------------------------------------------
