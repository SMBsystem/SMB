/* Общая логика платформы: подключение к Supabase, язык, вход, мелкие помощники. */
(function () {
  const cfg = window.SMB_CONFIG || {};
  const configured = !!(cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY && window.supabase);
  const sb = configured ? window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY) : null;

  const I18N = {
    kz: {
      brandSub: 'Білім беру платформасы',
      notConfigured: 'Платформа әлі қосылмаған: platform/config.js файлына Supabase деректерін енгізіңіз.',
      loginTitle: 'Платформаға кіру',
      loginDesc: 'Поштаңызға кіру сілтемесін жібереміз — құпиясөз қажет емес.',
      emailPh: 'сіздің@gmail.com',
      sendLink: 'Кіру сілтемесін алу',
      linkSent: 'Сілтеме жіберілді! Поштаңызды тексеріңіз (Спам қалтасын да).',
      orGoogle: 'Google арқылы кіру',
      logout: 'Шығу',
      admin: 'Басқару',
      myCourses: 'Менің курстарым',
      noCourses: 'Әзірге курс жоқ. Мұғалім берген кодты енгізіңіз немесе төмендегі курсқа сұраныс жіберіңіз.',
      enterCode: 'Курс коды',
      codePh: 'Мысалы: TANU-XXXX-XXXX',
      activate: 'Белсендіру',
      catalog: 'Барлық курстар',
      open: 'Ашу ↗',
      request: 'Қол жеткізуді сұрау',
      requested: 'Сұраныс жіберілді',
      closed: 'Тек код арқылы',
      reqMsgPh: 'Мұғалімге хабарлама (міндетті емес): сынып, мектеп…',
      send: 'Жіберу',
      cancel: 'Болдырмау',
      profileTitle: 'Өзіңіз туралы',
      fullName: 'Аты-жөніңіз',
      grade: 'Сынып',
      save: 'Сақтау',
      errors: {
        code_not_found: 'Код табылмады немесе мерзімі өтіп кеткен.',
        too_many_attempts: 'Тым көп әрекет. Бір сағаттан кейін қайталаңыз.',
        requests_closed: 'Бұл курсқа тек код арқылы кіруге болады.',
        not_authenticated: 'Алдымен кіріңіз.',
        generic: 'Қате орын алды. Қайталап көріңіз.'
      },
      codeOk: 'Курс ашылды!',
      loading: 'Жүктелуде…',
      noAccess: 'Бұл курсқа қол жеткізу жоқ.',
      back: '← Курстарға'
    },
    ru: {
      brandSub: 'Образовательная платформа',
      notConfigured: 'Платформа ещё не подключена: впишите данные Supabase в файл platform/config.js.',
      loginTitle: 'Вход на платформу',
      loginDesc: 'Пришлём ссылку для входа на почту — пароль не нужен.',
      emailPh: 'ваша@gmail.com',
      sendLink: 'Получить ссылку для входа',
      linkSent: 'Ссылка отправлена! Проверьте почту (и папку «Спам»).',
      orGoogle: 'Войти через Google',
      logout: 'Выйти',
      admin: 'Управление',
      myCourses: 'Мои курсы',
      noCourses: 'Пока нет курсов. Введите код от преподавателя или запросите доступ к курсу ниже.',
      enterCode: 'Код курса',
      codePh: 'Например: TANU-XXXX-XXXX',
      activate: 'Активировать',
      catalog: 'Все курсы',
      open: 'Открыть ↗',
      request: 'Запросить доступ',
      requested: 'Запрос отправлен',
      closed: 'Только по коду',
      reqMsgPh: 'Сообщение преподавателю (необязательно): класс, школа…',
      send: 'Отправить',
      cancel: 'Отмена',
      profileTitle: 'Расскажите о себе',
      fullName: 'Имя и фамилия',
      grade: 'Класс',
      save: 'Сохранить',
      errors: {
        code_not_found: 'Код не найден или срок его действия истёк.',
        too_many_attempts: 'Слишком много попыток. Попробуйте через час.',
        requests_closed: 'На этот курс можно попасть только по коду.',
        not_authenticated: 'Сначала войдите.',
        generic: 'Что-то пошло не так. Попробуйте ещё раз.'
      },
      codeOk: 'Курс открыт!',
      loading: 'Загрузка…',
      noAccess: 'У вас нет доступа к этому курсу.',
      back: '← К курсам'
    }
  };

  function getLang() {
    try { return localStorage.getItem('smb_lang') === 'ru' ? 'ru' : 'kz'; } catch (e) { return 'kz'; }
  }
  function setLang(l) {
    try { localStorage.setItem('smb_lang', l === 'ru' ? 'ru' : 'kz'); } catch (e) {}
  }
  function t(key) {
    const parts = key.split('.');
    let v = I18N[getLang()];
    for (const p of parts) v = v && v[p];
    return v == null ? key : v;
  }
  function errText(code) {
    return I18N[getLang()].errors[code] || I18N[getLang()].errors.generic;
  }
  function courseTitle(c) {
    return (getLang() === 'ru' ? c.title_ru : c.title_kz) || c.title_kz || c.title_ru || c.slug;
  }
  function courseDesc(c) {
    return (getLang() === 'ru' ? c.description_ru : c.description_kz) || c.description_kz || c.description_ru || '';
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>'"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[ch]));
  }

  function toast(msg, isError) {
    let box = document.getElementById('toastBox');
    if (!box) {
      box = document.createElement('div');
      box.id = 'toastBox';
      box.className = 'fixed top-20 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-2 pointer-events-none px-4';
      document.body.appendChild(box);
    }
    const el = document.createElement('div');
    el.setAttribute('role', 'status');
    el.className = 'px-5 py-2.5 rounded-2xl font-bold text-xs shadow-2xl transition-opacity duration-300 ' +
      (isError ? 'bg-rose-500 text-white' : 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950');
    el.textContent = msg;
    box.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; setTimeout(() => el.remove(), 400); }, 3500);
  }

  // Адрес текущей страницы без #… и ?… — сюда вернёт ссылка из письма.
  function hereUrl() {
    return location.origin + location.pathname;
  }

  async function currentUser() {
    if (!sb) return null;
    const { data } = await sb.auth.getSession();
    return data.session ? data.session.user : null;
  }

  async function loadProfile(userId) {
    const { data, error } = await sb.from('profiles').select('*').eq('id', userId).maybeSingle();
    if (error) console.warn(error);
    return data;
  }

  async function signInWithEmail(email) {
    return sb.auth.signInWithOtp({ email, options: { emailRedirectTo: hereUrl() } });
  }
  async function signInWithGoogle() {
    return sb.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: hereUrl() } });
  }
  async function signOut() {
    await sb.auth.signOut();
    location.href = 'index.html';
  }

  window.SMB = { sb, configured, I18N, t, errText, getLang, setLang, courseTitle, courseDesc, esc, toast,
                 currentUser, loadProfile, signInWithEmail, signInWithGoogle, signOut, cfg };
})();
