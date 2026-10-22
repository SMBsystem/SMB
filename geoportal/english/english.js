// English Hub — движок курса: путь по урокам, 6 навыков, озвучка, тест уровня.
(function () {
  'use strict';
  var ENG = window.ENG = window.ENG || { LESSONS: {} };

  /* ---------- хранилище ---------- */
  var KEY = 'english_progress_v1';
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  var P = (function () {
    var p = null;
    try { p = JSON.parse(lsGet(KEY) || 'null'); } catch (e) {}
    if (!p || typeof p !== 'object') p = {};
    p.v = 1; p.xp = p.xp || 0; p.level = p.level || 'a1'; p.streak = p.streak || 1;
    p.done = p.done || {}; p.score = p.score || {}; p.drafts = p.drafts || {}; p.spoken = p.spoken || {}; p.placement = p.placement || null;
    return p;
  })();
  function save() { lsSet(KEY, JSON.stringify(P)); }
  function today() { var d = new Date(); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); }
  (function streak() {
    var t = today();
    if (P.day === t) return;
    var y = new Date(); y.setDate(y.getDate() - 1);
    var ys = y.getFullYear() + '-' + (y.getMonth() + 1) + '-' + y.getDate();
    P.streak = (P.day === ys) ? (P.streak || 1) + 1 : 1;
    P.day = t; save();
  })();

  /* ---------- справочники ---------- */
  var LEVELS = [
    { id: 'a1', ready: true, name: 'A1', sub: { ru: 'Начальный', kz: 'Бастапқы' } },
    { id: 'a2', ready: false, name: 'A2', sub: { ru: 'Элементарный', kz: 'Негізгі' } },
    { id: 'b1', ready: false, name: 'B1', sub: { ru: 'Средний', kz: 'Орта' } },
    { id: 'b2', ready: false, name: 'B2', sub: { ru: 'Выше среднего', kz: 'Орташадан жоғары' } },
    { id: 'c1', ready: false, name: 'C1', sub: { ru: 'Продвинутый', kz: 'Жоғары' } }
  ];
  var SKILLS = [
    { id: 'vocab', icon: '📖', ac: 'emerald', xp: 20, pass: 0.8, en: 'Vocabulary', name: { ru: 'Лексика', kz: 'Лексика' } },
    { id: 'grammar', icon: '🧠', ac: 'violet', xp: 30, pass: 0.8, en: 'Grammar', name: { ru: 'Грамматика', kz: 'Грамматика' } },
    { id: 'reading', icon: '📚', ac: 'cyan', xp: 30, pass: 0.75, en: 'Reading', name: { ru: 'Чтение', kz: 'Оқу' } },
    { id: 'listening', icon: '🎧', ac: 'sky', xp: 30, pass: 0.75, en: 'Listening', name: { ru: 'Аудирование', kz: 'Тыңдау' } },
    { id: 'writing', icon: '✍️', ac: 'amber', xp: 40, pass: 1, en: 'Writing', name: { ru: 'Письмо', kz: 'Жазылым' } },
    { id: 'speaking', icon: '🎤', ac: 'teal', xp: 30, pass: 1, en: 'Speaking', name: { ru: 'Говорение', kz: 'Айтылым' } }
  ];
  var PARTS = ['path'].concat(SKILLS.map(function (s) { return s.id; }), ['test']);
  var T = {
    ru: {
      nav_path: 'Мой путь', nav_test: 'Тест уровня', start: 'Начать', cont: 'Продолжить', open: 'Открыть', lesson: 'Урок', search: 'Поиск...',
      track: 'выполнено', soon: 'Скоро', soon_title: 'Этот уровень готовится', soon_text: 'Сейчас открыт уровень A1. Остальные уровни добавляются партиями. Пройдите тест уровня, чтобы понять, с чего начать.',
      take_test: 'Пройти тест уровня', empty: 'Ничего не найдено', done: 'Выполнено',
      check: 'Проверить', again: 'Заново', next: 'Дальше', listen: 'Слушать', stop: 'Стоп', transcript: 'Показать текст', translations: 'Показывать переводы',
      score: 'Результат', passed: 'Задание выполнено!', not_yet: 'Нужно чуть больше: повторите и попробуйте снова.', model: 'Показать образец', hide_model: 'Скрыть образец',
      words: 'слов', needed: 'нужно', write_here: 'Напишите ответ здесь…', mic: 'Говорить', mic_stop: 'Остановить', no_mic: 'Распознавание речи недоступно в этом браузере. Введите ответ текстом.',
      no_tts: 'Озвучка недоступна в этом браузере.', read_aloud: 'Прочитать вслух', tip: 'Подсказка', your_answer: 'Ваш ответ',
      chk_words: 'Не меньше {n} слов', chk_sent: 'Минимум 3 предложения', chk_caps: 'Каждое предложение с заглавной буквы', chk_end: 'Текст заканчивается точкой', chk_vocab: 'Слова урока: не меньше 3 (сейчас {n})',
      sp_hint: 'Ответьте на каждый вопрос 1–2 предложениями (не меньше 4 слов).', sp_done: 'Отвечено', sp_need: 'Ответьте минимум на 3 вопроса.',
      vq_en: 'Выберите перевод: «{w}»', vq_tr: 'Как по-английски: «{w}»?', q_listen_pick: 'Выберите ответ',
      test_intro: 'Ответьте на 20 вопросов. Это поможет понять, с какого уровня начать. Результат ориентировочный.', test_result: 'Рекомендуемый уровень', test_ready: 'Открыт — можно начинать', test_soon: 'Уровень скоро появится; пока тренируйтесь на A1',
      set_level: 'Сделать текущим', logout_ask: 'Выйти из курса?', xp: 'XP',
      note: 'Тексты и переводы подготовлены с помощью ИИ и требуют проверки преподавателем. Озвучка — синтез речи вашего браузера.',
      b_path: ['Мой путь', 'Урок за уроком: слова, грамматика, чтение, аудио, письмо и речь. Выберите урок и идите по порядку.'],
      b_vocab: ['Vocabulary — слова урока', 'По 10 слов в каждом уроке: перевод, пример, озвучка и мини-тест.'],
      b_grammar: ['Grammar — правила и тренировка', 'Короткие объяснения на русском и казахском, примеры и тест из 5 вопросов.'],
      b_reading: ['Reading — чтение и понимание', 'Небольшие тексты по теме урока и вопросы к ним.'],
      b_listening: ['Listening — диалоги', 'Диалоги с озвучкой разными голосами, выбор скорости и вопросы.'],
      b_writing: ['Writing — письмо', 'Короткое задание, автоматическая проверка структуры и образец.'],
      b_speaking: ['Speaking — говорение', 'Вопросы по теме урока; можно отвечать голосом или текстом, затем сравнить с образцом.'],
      b_test: ['Level test — ваш уровень', '20 вопросов от A1 до C1. Результат подскажет, с какого уровня начать.'],
      bar_path: 'Уроки уровня', bar_sub_path: 'Каждый урок — 6 заданий. Зелёная отметка — задание выполнено.', bar_skill: 'Задания по навыку', bar_sub_skill: 'Выберите урок: откроется нужное задание.', bar_test: 'Определите уровень', bar_sub_test: '20 вопросов, около 10 минут.'
    },
    kz: {
      nav_path: 'Менің жолым', nav_test: 'Деңгей тесті', start: 'Бастау', cont: 'Жалғастыру', open: 'Ашу', lesson: 'Сабақ', search: 'Іздеу...',
      track: 'орындалды', soon: 'Жақында', soon_title: 'Бұл деңгей дайындалуда', soon_text: 'Қазір A1 деңгейі ашық. Қалған деңгейлер бөлім-бөлім қосылады. Қайдан бастау керегін білу үшін деңгей тестін тапсырыңыз.',
      take_test: 'Деңгей тестін тапсыру', empty: 'Ештеңе табылмады', done: 'Орындалды',
      check: 'Тексеру', again: 'Қайта', next: 'Әрі қарай', listen: 'Тыңдау', stop: 'Тоқтату', transcript: 'Мәтінді көрсету', translations: 'Аудармаларды көрсету',
      score: 'Нәтиже', passed: 'Тапсырма орындалды!', not_yet: 'Аздап жетпейді: қайталап, қайта көріңіз.', model: 'Үлгіні көрсету', hide_model: 'Үлгіні жасыру',
      words: 'сөз', needed: 'керек', write_here: 'Жауабыңызды осында жазыңыз…', mic: 'Сөйлеу', mic_stop: 'Тоқтату', no_mic: 'Бұл браузерде сөйлеуді тану жоқ. Жауапты мәтінмен енгізіңіз.',
      no_tts: 'Бұл браузерде дыбыстау жоқ.', read_aloud: 'Дауыстап оқу', tip: 'Кеңес', your_answer: 'Жауабыңыз',
      chk_words: 'Кемінде {n} сөз', chk_sent: 'Кемінде 3 сөйлем', chk_caps: 'Әр сөйлем бас әріптен басталады', chk_end: 'Мәтін нүктемен аяқталады', chk_vocab: 'Сабақ сөздері: кемінде 3 (қазір {n})',
      sp_hint: 'Әр сұраққа 1–2 сөйлеммен жауап беріңіз (кемінде 4 сөз).', sp_done: 'Жауап берілді', sp_need: 'Кемінде 3 сұраққа жауап беріңіз.',
      vq_en: 'Аудармасын таңдаңыз: «{w}»', vq_tr: 'Ағылшынша қалай: «{w}»?', q_listen_pick: 'Жауапты таңдаңыз',
      test_intro: '20 сұраққа жауап беріңіз. Қай деңгейден бастау керегін көрсетеді. Нәтиже — бағдар.', test_result: 'Ұсынылатын деңгей', test_ready: 'Ашық — бастауға болады', test_soon: 'Деңгей жақында шығады; әзірше A1-де жаттығыңыз',
      set_level: 'Ағымдағы ету', logout_ask: 'Курстан шығасыз ба?', xp: 'XP',
      note: 'Мәтіндер мен аудармалар жасанды интеллект көмегімен дайындалған, мұғалімнің тексеруін қажет етеді. Дыбыстау — браузердің сөйлеу синтезі.',
      b_path: ['Менің жолым', 'Сабақ сайын: сөздер, грамматика, оқу, тыңдау, жазылым және айтылым. Сабақты таңдап, ретімен жүріңіз.'],
      b_vocab: ['Vocabulary — сабақ сөздері', 'Әр сабақта 10 сөз: аудармасы, мысал, дыбыстау және шағын тест.'],
      b_grammar: ['Grammar — ережелер мен жаттығу', 'Орысша және қазақша қысқа түсіндірме, мысалдар және 5 сұрақтан тұратын тест.'],
      b_reading: ['Reading — оқу және түсіну', 'Сабақ тақырыбы бойынша шағын мәтіндер және сұрақтар.'],
      b_listening: ['Listening — диалогтар', 'Әртүрлі дауыспен дыбысталған диалогтар, жылдамдықты таңдау және сұрақтар.'],
      b_writing: ['Writing — жазылым', 'Қысқа тапсырма, құрылымды автоматты тексеру және үлгі.'],
      b_speaking: ['Speaking — айтылым', 'Сабақ тақырыбы бойынша сұрақтар; дауыспен немесе мәтінмен жауап беріп, үлгімен салыстырыңыз.'],
      b_test: ['Level test — деңгейіңіз', 'A1-ден C1-ге дейін 20 сұрақ. Қай деңгейден бастау керегін көрсетеді.'],
      bar_path: 'Деңгей сабақтары', bar_sub_path: 'Әр сабақта 6 тапсырма. Жасыл белгі — тапсырма орындалды.', bar_skill: 'Дағды бойынша тапсырмалар', bar_sub_skill: 'Сабақты таңдаңыз: қажетті тапсырма ашылады.', bar_test: 'Деңгейді анықтаңыз', bar_sub_test: '20 сұрақ, шамамен 10 минут.'
    }
  };

  /* ---------- состояние ---------- */
  var S = { lang: (lsGet('english_lang') === 'kz' ? 'kz' : (lsGet('english_lang') === 'ru' ? 'ru' : ((window.SMB && SMB.getLang && SMB.getLang() === 'kz') ? 'kz' : 'ru'))), part: 'path', level: P.level, lesson: null, vq: {}, showTr: true };
  function t(k) { var d = T[S.lang] || T.ru; return d[k] != null ? d[k] : T.ru[k]; }
  function tf(k, o) { return String(t(k)).replace(/\{(\w+)\}/g, function (m, n) { return o && o[n] != null ? o[n] : m; }); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function $(id) { return document.getElementById(id); }
  function skillById(id) { return SKILLS.filter(function (s) { return s.id === id; })[0]; }
  function lessons() { return ENG.LESSONS[S.level] || []; }
  function lkey(level, idx) { return level + ':' + (idx + 1); }
  function isDone(level, idx, skill) { var d = P.done[lkey(level, idx)]; return !!(d && d[skill]); }
  function lname(L) { return (L.title && (S.lang === 'kz' ? L.title.kk : L.title.ru)) || L.title.en; }
  function lgoal(L) { return S.lang === 'kz' ? L.goal.kk : L.goal.ru; }
  function trIndex() { return S.lang === 'kz' ? 1 : 2; }

  /* ---------- озвучка ---------- */
  var tts = { ok: 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window, token: 0 };
  function voices() { try { return window.speechSynthesis.getVoices() || []; } catch (e) { return []; } }
  function pickVoice(gender) {
    var en = voices().filter(function (v) { return /^en/i.test(v.lang); });
    if (!en.length) return null;
    var gb = en.filter(function (v) { return /en[-_]GB/i.test(v.lang); });
    var pool = gb.length ? gb : en;
    var fe = /(female|zira|hazel|susan|libby|sonia|aria|jenny|samantha|karen|moira|serena|fiona|natasha|catherine)/i;
    var ma = /(\bmale\b|david|george|mark|ryan|guy|daniel|alex|james|thomas|oliver|brian|eric|ralph|fred)/i;
    var re = gender === 'f' ? fe : gender === 'm' ? ma : null;
    var hit = re ? pool.filter(function (v) { return re.test(v.name) && !(gender === 'm' && /female/i.test(v.name)); })[0] : null;
    return hit || pool[0] || en[0];
  }
  function stopSpeak() { tts.token++; try { window.speechSynthesis.cancel(); } catch (e) {} }
  function speak(text, o, onend) {
    o = o || {};
    if (!tts.ok) { toast(t('no_tts')); return; }
    var my = ++tts.token;
    try { window.speechSynthesis.cancel(); } catch (e) {}
    var u = new SpeechSynthesisUtterance(String(text));
    u.lang = 'en-GB'; u.rate = o.rate || 0.95; u.pitch = o.gender === 'f' ? 1.12 : o.gender === 'm' ? 0.9 : 1;
    var v = pickVoice(o.gender); if (v) { u.voice = v; u.lang = v.lang; }
    u.onend = u.onerror = function () { if (my === tts.token && onend) onend(); };
    window.speechSynthesis.speak(u);
  }
  if (tts.ok && window.speechSynthesis) { try { window.speechSynthesis.onvoiceschanged = function () {}; } catch (e) {} }
  function parseScript(script, genders) {
    return String(script).split('\n').map(function (l) {
      var m = /^([^:]+):\s*(.*)$/.exec(l); return m ? { who: m[1].trim(), text: m[2].trim(), g: (genders || {})[m[1].trim()] || 'f' } : null;
    }).filter(Boolean);
  }
  function playDialog(lines, rate, onLine, onEnd) {
    var my = ++tts.token, i = 0;
    function next() {
      if (my !== tts.token) return;
      if (i >= lines.length) { if (onEnd) onEnd(); return; }
      var ln = lines[i]; if (onLine) onLine(i); i++;
      var u = new SpeechSynthesisUtterance(ln.text);
      u.lang = 'en-GB'; u.rate = rate; u.pitch = ln.g === 'f' ? 1.12 : 0.9;
      var v = pickVoice(ln.g); if (v) { u.voice = v; u.lang = v.lang; }
      u.onend = u.onerror = function () { setTimeout(next, 250); };
      window.speechSynthesis.speak(u);
    }
    try { window.speechSynthesis.cancel(); } catch (e) {}
    next();
  }

  /* ---------- интерфейс-утилиты ---------- */
  function toast(msg) {
    var b = $('toastBox'); if (!b) return;
    b.innerHTML = '<div class="toast">' + esc(msg) + '</div>';
    clearTimeout(toast._t); toast._t = setTimeout(function () { b.innerHTML = ''; }, 2600);
  }
  function xpPop(n) {
    var d = document.createElement('div'); d.className = 'xp-pop'; d.textContent = '+' + n + ' XP';
    d.style.left = (window.innerWidth / 2 - 30) + 'px'; d.style.top = (window.innerHeight / 2) + 'px';
    document.body.appendChild(d); setTimeout(function () { d.remove(); }, 1200);
  }
  function hud() { $('hudXp').textContent = P.xp + ' XP'; $('hudStreak').textContent = P.streak; }
  function markDone(level, idx, skill) {
    var k = lkey(level, idx); P.done[k] = P.done[k] || {};
    if (P.done[k][skill]) return false;
    P.done[k][skill] = 1; var xp = skillById(skill).xp; P.xp += xp; save(); hud(); xpPop(xp); return true;
  }

  /* ---------- общие блоки ---------- */
  function spk(text, g) { return '<button type="button" class="spk" data-say="' + esc(text) + '" data-g="' + (g || '') + '" aria-label="Listen">🔊</button>'; }
  function wireSay(root) {
    root.querySelectorAll('[data-say]').forEach(function (b) { b.addEventListener('click', function () { speak(b.getAttribute('data-say'), { gender: b.getAttribute('data-g') || undefined }); }); });
  }
  function explain(e) { if (!e) return ''; if (typeof e === 'string') return e; return (S.lang === 'kz' ? e.kk : e.ru) || e.ru || ''; }
  function quizHtml(id, qs) {
    return qs.map(function (q, i) {
      return '<div class="qbox" data-qi="' + i + '"><p class="lv-p" style="font-weight:700;margin-bottom:.3rem">' + (i + 1) + '. ' + esc(q.q) + '</p>' +
        q.o.map(function (o, j) { return '<label><input type="radio" name="' + id + '_' + i + '" value="' + j + '"><span>' + esc(o) + '</span></label>'; }).join('') +
        '<div class="qfb" style="display:none"></div></div>';
    }).join('');
  }
  function gradeQuiz(root, id, qs) {
    var right = 0;
    qs.forEach(function (q, i) {
      var sel = root.querySelector('input[name="' + id + '_' + i + '"]:checked');
      var ok = sel && parseInt(sel.value, 10) === q.a; if (ok) right++;
      var fb = root.querySelector('[data-qi="' + i + '"] .qfb');
      fb.style.display = 'block'; fb.className = 'qfb ' + (ok ? 'ok' : 'bad');
      fb.innerHTML = (ok ? '✅ ' : '❌ ' + (sel ? '' : '— ') + '<b>' + esc(q.o[q.a]) + '</b>. ') + esc(explain(q.e));
    });
    return right;
  }
  // универсальный блок «тест + проверка + результат»
  function mountQuiz(host, id, qs, skill, level, idx) {
    var sk = skillById(skill);
    host.innerHTML = '<div class="space-y-2.5">' + quizHtml(id, qs) + '</div>' +
      '<div class="flex flex-wrap gap-2 items-center mt-3"><button type="button" class="btn btn-primary" data-act="check">' + esc(t('check')) + '</button><button type="button" class="btn btn-ghost" data-act="reset">' + esc(t('again')) + '</button><span class="lv-muted" data-res></span></div>';
    host.querySelector('[data-act="check"]').addEventListener('click', function () {
      var right = gradeQuiz(host, id, qs), total = qs.length, ok = right / total >= sk.pass;
      P.score[lkey(level, idx) + ':' + skill] = right + '/' + total; save();
      host.querySelector('[data-res]').innerHTML = '<b style="color:' + (ok ? '#6ee7b7' : '#fcd34d') + '">' + esc(t('score')) + ': ' + right + '/' + total + '</b> — ' + esc(ok ? t('passed') : t('not_yet'));
      if (ok && markDone(level, idx, skill)) refreshTabs();
    });
    host.querySelector('[data-act="reset"]').addEventListener('click', function () { mountQuiz(host, id, qs, skill, level, idx); });
  }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }

  /* ---------- главные списки ---------- */
  function skillSub(L, skill) {
    if (skill === 'vocab') return L.vocab.slice(0, 5).map(function (v) { return v[0]; }).join(' · ') + ' …';
    if (skill === 'grammar') return S.lang === 'kz' ? L.grammar.title.kk : L.grammar.title.ru;
    if (skill === 'reading') return L.reading.title;
    if (skill === 'listening') return S.lang === 'kz' ? L.listening.context.kk : L.listening.context.ru;
    if (skill === 'writing') return L.writing.prompt;
    return L.speaking.prompts[0];
  }
  function cardHtml(L, idx, skill) {
    var lv = S.level, ac = skill ? skillById(skill).ac : 'sky';
    var doneCount = SKILLS.filter(function (s) { return isDone(lv, idx, s.id); }).length;
    var done = skill ? isDone(lv, idx, skill) : doneCount === SKILLS.length;
    var pct = skill ? (done ? 100 : 0) : Math.round(doneCount / SKILLS.length * 100);
    var first = SKILLS.filter(function (s) { return !isDone(lv, idx, s.id); })[0];
    var target = skill || (first ? first.id : 'vocab');
    var dots = skill ? '' : '<div class="dots">' + SKILLS.map(function (s) { return '<span class="dot ' + (isDone(lv, idx, s.id) ? 'on' : '') + '" title="' + esc(s.en) + '">' + s.icon + '</span>'; }).join('') + '</div>';
    var btn = skill ? t('open') : (doneCount === 0 ? t('start') : (done ? t('open') : t('cont')));
    return '<article class="gc ac-' + ac + (done ? ' done' : '') + '">' +
      '<div class="gc-top"><div class="gc-num">' + (L.icon || (idx + 1)) + '</div><div class="min-w-0 flex-1"><div class="gc-kicker">' + esc(t('lesson')) + ' ' + (idx + 1) + (skill ? ' · ' + esc(skillById(skill).en) : '') + '</div><h4 class="gc-title">' + esc(lname(L)) + '</h4></div>' +
      (done ? '<span class="gc-status">✓</span>' : (doneCount && !skill ? '<span class="gc-status">' + doneCount + '/6</span>' : '')) + '</div>' +
      '<p class="gc-sub">' + esc(skill ? skillSub(L, skill) : lgoal(L)) + '</p>' + dots +
      '<div class="gc-bar"><i style="width:' + pct + '%"></i></div>' +
      '<div class="gc-foot"><button type="button" class="gc-btn" onclick="ENG.openLesson(\'' + lv + '\',' + idx + ',\'' + target + '\')">' + esc(btn) + ' →</button></div></article>';
  }
  function soonHtml() {
    var lv = LEVELS.filter(function (l) { return l.id === S.level; })[0];
    return '<div class="gc ac-amber" style="grid-column:1/-1"><div class="gc-top"><div class="gc-num">🔒</div><div><div class="gc-kicker">' + esc(lv ? lv.name : '') + '</div><h4 class="gc-title">' + esc(t('soon_title')) + '</h4></div></div>' +
      '<p class="gc-sub">' + esc(t('soon_text')) + '</p><div class="gc-foot"><button class="gc-btn" onclick="ENG.go(\'test\')">' + esc(t('take_test')) + ' →</button></div></div>';
  }

  function renderNav() {
    var labels = { path: '🧭 ' + t('nav_path'), test: '🧪 ' + t('nav_test') };
    SKILLS.forEach(function (s) { labels[s.id] = s.icon + ' ' + s.en; });
    $('partNav').innerHTML = PARTS.map(function (p) {
      var on = p === S.part;
      return '<button type="button" onclick="ENG.go(\'' + p + '\')" class="shrink-0 whitespace-nowrap px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-extrabold transition flex items-center ' +
        (on ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25' : 'bg-space-850 text-slate-400 hover:text-white hover:bg-space-800') + '">' + esc(labels[p]) + '</button>';
    }).join('');
  }
  function renderBanner() {
    var info = t('b_' + S.part), icon = S.part === 'path' ? '🧭' : S.part === 'test' ? '🧪' : skillById(S.part).icon;
    var title = info[0]; if (S.part === 'path') title += ' — ' + (LEVELS.filter(function (l) { return l.id === S.level; })[0] || {}).name;
    $('bnIcon').textContent = icon; $('bnBadge').textContent = (PARTS.indexOf(S.part) + 1) + ' / ' + PARTS.length; $('bnTitle').textContent = title; $('bnDesc').textContent = info[1];
  }
  function renderBar() {
    var ac = S.part === 'path' ? 'sky' : S.part === 'test' ? 'amber' : skillById(S.part).ac;
    $('barBox').className = 'sec-bar ac-' + ac;
    $('barIcon').textContent = S.part === 'path' ? '🧭' : S.part === 'test' ? '🧪' : skillById(S.part).icon;
    $('barTitle').textContent = t(S.part === 'path' ? 'bar_path' : S.part === 'test' ? 'bar_test' : 'bar_skill');
    $('barSub').textContent = t(S.part === 'path' ? 'bar_sub_path' : S.part === 'test' ? 'bar_sub_test' : 'bar_sub_skill');
    $('searchInput').placeholder = t('search');
    $('searchInput').parentNode.style.display = S.part === 'test' ? 'none' : '';
    $('levelChips').innerHTML = LEVELS.map(function (l) {
      return '<button type="button" class="chip-btn ' + (l.id === S.level ? 'on' : '') + '" ' + (l.ready ? 'onclick="ENG.setLevel(\'' + l.id + '\')"' : 'disabled title="' + esc(t('soon')) + '"') + '>' + esc(l.name) + ' · ' + esc(l.sub[S.lang]) + (l.ready ? '' : ' 🔒') + '</button>';
    }).join('');
    var ls = lessons(), total, done;
    if (S.part === 'path') { total = ls.length * SKILLS.length; done = 0; ls.forEach(function (L, i) { SKILLS.forEach(function (s) { if (isDone(S.level, i, s.id)) done++; }); }); }
    else if (S.part === 'test') { total = ENG.PLACEMENT.length; done = P.placement ? total : 0; }
    else { total = ls.length; done = 0; ls.forEach(function (L, i) { if (isDone(S.level, i, S.part)) done++; }); }
    var pct = total ? Math.round(done / total * 100) : 0;
    $('track').innerHTML = '<div class="sec-track-top"><span><span class="sec-track-num">' + done + '<small>/ ' + total + '</small></span><span class="sec-track-lbl">' + esc(t('track')) + '</span></span><span class="sec-track-pct">' + pct + '%</span></div><div class="sec-track-bar"><i style="width:' + pct + '%"></i></div>';
  }
  function renderTest() {
    var res = P.placement;
    var html = '<div class="lv-card space-y-3"><p class="lv-p">' + esc(t('test_intro')) + '</p>';
    if (res) {
      var lv = LEVELS.filter(function (l) { return l.id === res.level; })[0];
      html += '<div class="qbox" style="border-color:rgba(251,191,36,.45)"><div class="lv-muted">' + esc(t('test_result')) + '</div><div style="font-size:1.6rem;font-weight:900;color:#fbbf24">' + esc(lv.name) + ' · ' + esc(lv.sub[S.lang]) + '</div>' +
        '<div class="lv-muted">' + res.score + '/' + ENG.PLACEMENT.length + ' · ' + esc(lv.ready ? t('test_ready') : t('test_soon')) + '</div>' +
        (lv.ready && S.level !== lv.id ? '<button class="btn btn-primary" style="margin-top:.6rem" onclick="ENG.setLevel(\'' + lv.id + '\')">' + esc(t('set_level')) + '</button>' : '') + '</div>';
    }
    html += '<div class="space-y-2.5" id="ptQuiz">' + quizHtml('pt', ENG.PLACEMENT) + '</div><div class="flex gap-2"><button class="btn btn-primary" id="ptCheck">' + esc(t('check')) + '</button><button class="btn btn-ghost" id="ptReset">' + esc(t('again')) + '</button></div></div>';
    $('content').innerHTML = html;
    $('ptCheck').addEventListener('click', function () {
      var qs = ENG.PLACEMENT, byLvl = {}, right = 0;
      qs.forEach(function (q, i) {
        var sel = document.querySelector('input[name="pt_' + i + '"]:checked'); var ok = sel && parseInt(sel.value, 10) === q.a;
        if (ok) { right++; byLvl[q.lvl] = (byLvl[q.lvl] || 0) + 1; }
        var fb = document.querySelector('#ptQuiz [data-qi="' + i + '"] .qfb'); fb.style.display = 'block'; fb.className = 'qfb ' + (ok ? 'ok' : 'bad'); fb.textContent = ok ? '✅' : '❌ ' + q.o[q.a];
      });
      var rec = 'c1';
      for (var i = 0; i < LEVELS.length; i++) { if ((byLvl[LEVELS[i].id] || 0) < 3) { rec = LEVELS[i].id; break; } }
      P.placement = { level: rec, score: right, at: Date.now() }; save(); renderBar();
      var lv = LEVELS.filter(function (l) { return l.id === rec; })[0];
      toast(t('test_result') + ': ' + lv.name);
      var box = document.createElement('div'); box.className = 'qbox'; box.style.borderColor = 'rgba(251,191,36,.45)';
      box.innerHTML = '<div class="lv-muted">' + esc(t('test_result')) + '</div><div style="font-size:1.6rem;font-weight:900;color:#fbbf24">' + esc(lv.name) + ' · ' + esc(lv.sub[S.lang]) + '</div><div class="lv-muted">' + right + '/' + qs.length + ' · ' + esc(lv.ready ? t('test_ready') : t('test_soon')) + '</div>' +
        (lv.ready && S.level !== lv.id ? '<button class="btn btn-primary" style="margin-top:.6rem" onclick="ENG.setLevel(\'' + lv.id + '\')">' + esc(t('set_level')) + '</button>' : '');
      var old = document.querySelector('#content .lv-card > .qbox'); if (old) old.remove();
      document.querySelector('#content .lv-card').insertBefore(box, $('ptQuiz'));
      box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    $('ptReset').addEventListener('click', renderTest);
  }
  function render() {
    renderNav(); renderBanner(); renderBar(); hud();
    $('note').textContent = t('note');
    if (S.part === 'test') { renderTest(); return; }
    var ls = lessons(), q = ($('searchInput').value || '').toLowerCase().trim();
    var lv = LEVELS.filter(function (l) { return l.id === S.level; })[0];
    if (!lv.ready || !ls.length) { $('content').innerHTML = '<div class="grid grid-cols-1 gap-3.5">' + soonHtml() + '</div>'; return; }
    var cards = [];
    ls.forEach(function (L, i) {
      var text = [L.title.en, L.title.ru, L.title.kk, lgoal(L), L.vocab.map(function (v) { return v[0] + ' ' + v[2] + ' ' + v[1]; }).join(' ')].join(' ').toLowerCase();
      if (q && text.indexOf(q) < 0) return;
      cards.push(cardHtml(L, i, S.part === 'path' ? null : S.part));
    });
    $('content').innerHTML = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">' + (cards.join('') || '<div class="sec-empty">🔍 ' + esc(t('empty')) + '</div>') + '</div>';
  }

  /* ---------- окно урока ---------- */
  function refreshTabs() {
    if (!S.lesson) return;
    var L = lessons()[S.lesson.idx];
    $('lvTabs').innerHTML = SKILLS.map(function (s) {
      var on = s.id === S.lesson.skill, d = isDone(S.lesson.level, S.lesson.idx, s.id);
      return '<button type="button" class="chip-btn ac-' + s.ac + ' ' + (on ? 'on' : '') + '" onclick="ENG.openLesson(\'' + S.lesson.level + '\',' + S.lesson.idx + ',\'' + s.id + '\')">' + s.icon + ' ' + esc(s.en) + (d ? ' ✓' : '') + '</button>';
    }).join('');
    $('lvPrev').disabled = S.lesson.idx <= 0; $('lvNext').disabled = S.lesson.idx >= lessons().length - 1;
  }
  function openLesson(level, idx, skill) {
    stopSpeak(); S.level = level; S.lesson = { level: level, idx: idx, skill: skill };
    var L = ENG.LESSONS[level][idx]; if (!L) return;
    $('lvKicker').textContent = t('lesson') + ' ' + (idx + 1) + ' · ' + skillById(skill).en;
    $('lvTitle').textContent = L.title.en + ' — ' + lname(L);
    refreshTabs();
    var body = $('lvBody'); body.innerHTML = '';
    ({ vocab: renderVocab, grammar: renderGrammar, reading: renderReading, listening: renderListening, writing: renderWriting, speaking: renderSpeaking })[skill](body, L, level, idx);
    $('lessonView').classList.remove('hidden'); $('lessonView').scrollTop = 0; document.body.style.overflow = 'hidden';
  }
  function closeLesson() { stopSpeak(); $('lessonView').classList.add('hidden'); document.body.style.overflow = ''; S.lesson = null; render(); }
  function stepLesson(d) { if (!S.lesson) return; var n = S.lesson.idx + d; if (n < 0 || n >= lessons().length) return; openLesson(S.lesson.level, n, S.lesson.skill); }

  function renderVocab(body, L, level, idx) {
    var ti = trIndex();
    var rows = L.vocab.map(function (v) {
      return '<div class="wordrow">' + spk(v[0]) + '<div><div style="font-weight:800;color:#fff">' + esc(v[0]) + ' <span class="tr" style="font-weight:600;color:#67e8f9">— ' + esc(v[ti]) + '</span></div>' +
        '<div class="lv-muted" style="display:flex;gap:.4rem;align-items:center;margin-top:.15rem"><i>' + esc(v[3]) + '</i> ' + spk(v[3]).replace('class="spk"', 'class="spk" style="width:1.6rem;height:1.6rem;font-size:.7rem"') + '</div></div></div>';
    }).join('');
    body.innerHTML = '<div class="lv-card"><div class="flex flex-wrap items-center justify-between gap-2 mb-2"><div class="lv-h">📖 ' + esc(L.title.en) + '</div><label class="lv-muted" style="display:flex;gap:.4rem;align-items:center;cursor:pointer"><input type="checkbox" id="trToggle" checked> ' + esc(t('translations')) + '</label></div>' + rows + '</div>' +
      '<div class="lv-card"><div class="lv-h mb-2">📝 Quiz</div><div id="vq"></div></div>';
    wireSay(body);
    $('trToggle').addEventListener('change', function () { body.querySelectorAll('.tr').forEach(function (e) { e.style.display = $('trToggle').checked ? '' : 'none'; }); });
    var k = lkey(level, idx), qs = S.vq[k];
    if (!qs) {
      qs = shuffle(L.vocab).slice(0, 5).map(function (v, i) {
        var others = shuffle(L.vocab.filter(function (x) { return x !== v; })).slice(0, 2);
        if (i % 2 === 0) { var opts = shuffle([v[ti]].concat(others.map(function (x) { return x[ti]; }))); return { q: tf('vq_en', { w: v[0] }), o: opts, a: opts.indexOf(v[ti]), e: v[0] + ' = ' + v[ti] }; }
        var o2 = shuffle([v[0]].concat(others.map(function (x) { return x[0]; }))); return { q: tf('vq_tr', { w: v[ti] }), o: o2, a: o2.indexOf(v[0]), e: v[0] + ' = ' + v[ti] };
      });
      S.vq[k] = qs;
    }
    mountQuiz($('vq'), 'vq', qs, 'vocab', level, idx);
  }
  function renderGrammar(body, L, level, idx) {
    var g = L.grammar;
    body.innerHTML = '<div class="lv-card"><div class="lv-h mb-2">🧠 ' + esc(S.lang === 'kz' ? g.title.kk : g.title.ru) + '</div><div class="lv-p">' + (S.lang === 'kz' ? g.explain.kk : g.explain.ru) + '</div></div>' +
      '<div class="lv-card"><div class="lv-h mb-2">💬 Examples</div>' + g.examples.map(function (e) { return '<div class="wordrow">' + spk(e[0]) + '<div><div style="font-weight:700;color:#fff">' + esc(e[0]) + '</div><div class="lv-muted">' + esc(e[1]) + '</div></div></div>'; }).join('') + '</div>' +
      '<div class="lv-card"><div class="lv-h mb-2">📝 Quiz</div><div id="gq"></div></div>';
    wireSay(body); mountQuiz($('gq'), 'gq', g.quiz, 'grammar', level, idx);
  }
  function highlightVocab(text, L) {
    var out = esc(text);
    L.vocab.forEach(function (v) {
      var w = v[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/’/g, "['’]");
      out = out.replace(new RegExp('\\b(' + w + ')\\b', 'gi'), '<span style="color:#67e8f9;font-weight:700">$1</span>');
    });
    return out;
  }
  function renderReading(body, L, level, idx) {
    var r = L.reading;
    body.innerHTML = '<div class="lv-card"><div class="flex items-center justify-between gap-2 mb-2"><div class="lv-h">📚 ' + esc(r.title) + '</div><button type="button" class="btn btn-ghost" id="rdSay">🔊 ' + esc(t('read_aloud')) + '</button></div><p class="lv-p" style="font-size:.95rem;line-height:1.8">' + highlightVocab(r.text, L) + '</p></div>' +
      '<div class="lv-card"><div class="lv-h mb-2">📝 Questions</div><div id="rq"></div></div>';
    $('rdSay').addEventListener('click', function () { speak(r.text, { gender: 'f', rate: 0.9 }); });
    mountQuiz($('rq'), 'rq', r.q, 'reading', level, idx);
  }
  function renderListening(body, L, level, idx) {
    var l = L.listening, lines = parseScript(l.script, l.genders);
    body.innerHTML = '<div class="lv-card space-y-3"><div class="lv-h">🎧 ' + esc(S.lang === 'kz' ? l.context.kk : l.context.ru) + '</div>' +
      '<div class="flex flex-wrap items-center gap-2"><button type="button" class="btn btn-primary" id="lsPlay">▶ ' + esc(t('listen')) + '</button><button type="button" class="btn btn-ghost" id="lsStop">■ ' + esc(t('stop')) + '</button>' +
      '<select id="lsRate" class="bg-space-850 text-xs text-slate-200 border border-slate-700 rounded-xl px-2 py-2"><option value="0.8">0.8×</option><option value="0.95" selected>1.0×</option><option value="1.1">1.2×</option></select>' +
      '<label class="lv-muted" style="display:flex;gap:.4rem;align-items:center;cursor:pointer"><input type="checkbox" id="lsShow"> ' + esc(t('transcript')) + '</label></div>' +
      '<div id="lsTr" style="display:none" class="space-y-1">' + lines.map(function (ln, i) { return '<div data-line="' + i + '" class="lv-p" style="padding:.35rem .5rem"><b style="color:#67e8f9">' + esc(ln.who) + ':</b> ' + esc(ln.text) + '</div>'; }).join('') + '</div></div>' +
      '<div class="lv-card"><div class="lv-h mb-2">📝 Questions</div><div id="lq"></div></div>';
    $('lsPlay').addEventListener('click', function () {
      if (!tts.ok) { toast(t('no_tts')); return; }
      body.querySelectorAll('[data-line]').forEach(function (e) { e.classList.remove('line-active'); });
      playDialog(lines, parseFloat($('lsRate').value), function (i) {
        body.querySelectorAll('[data-line]').forEach(function (e) { e.classList.remove('line-active'); });
        var el = body.querySelector('[data-line="' + i + '"]'); if (el) el.classList.add('line-active');
      }, function () { body.querySelectorAll('[data-line]').forEach(function (e) { e.classList.remove('line-active'); }); });
    });
    $('lsStop').addEventListener('click', stopSpeak);
    $('lsShow').addEventListener('change', function () { $('lsTr').style.display = $('lsShow').checked ? 'block' : 'none'; });
    mountQuiz($('lq'), 'lq', l.q, 'listening', level, idx);
  }
  function writingChecks(text, L) {
    var min = L.writing.min, words = (text.match(/[A-Za-z'’-]+/g) || []).length;
    var sents = text.split(/[.!?]+/).map(function (s) { return s.trim(); }).filter(Boolean);
    var low = text.toLowerCase(), used = L.vocab.filter(function (v) { return low.indexOf(v[0].toLowerCase()) >= 0; }).length;
    return {
      words: words, used: used,
      list: [
        { ok: words >= min, t: tf('chk_words', { n: min }) + ' (' + words + ')' },
        { ok: sents.length >= 3, t: t('chk_sent') },
        { ok: sents.length > 0 && sents.every(function (s) { return /^[A-Z]/.test(s); }), t: t('chk_caps') },
        { ok: /[.!?]\s*$/.test(text.trim()), t: t('chk_end') },
        { ok: used >= 3, t: tf('chk_vocab', { n: used }) }
      ]
    };
  }
  function renderWriting(body, L, level, idx) {
    var w = L.writing, dk = lkey(level, idx) + ':writing';
    body.innerHTML = '<div class="lv-card space-y-2"><div class="lv-h">✍️ ' + esc(w.prompt) + '</div><p class="lv-muted">💡 ' + esc(t('tip')) + ': ' + esc(S.lang === 'kz' ? w.tips.kk : w.tips.ru) + '</p></div>' +
      '<div class="lv-card space-y-3"><textarea class="tx" id="wrText" maxlength="1500" spellcheck="true" placeholder="' + esc(t('write_here')) + '"></textarea>' +
      '<div id="wrChecks"></div><div class="flex flex-wrap gap-2"><button type="button" class="btn btn-primary" id="wrCheck">' + esc(t('check')) + '</button><button type="button" class="btn btn-ghost" id="wrModel">' + esc(t('model')) + '</button></div>' +
      '<div id="wrModelBox" style="display:none" class="qbox"><p class="lv-p">' + esc(w.model) + '</p><div style="margin-top:.4rem">' + spk(w.model, 'f') + '</div></div><div id="wrRes" class="lv-muted"></div></div>';
    var ta = $('wrText'); ta.value = P.drafts[dk] || '';
    function paint() { var c = writingChecks(ta.value, L); $('wrChecks').innerHTML = c.list.map(function (x) { return '<div class="chk ' + (x.ok ? 'ok' : '') + '">' + (x.ok ? '✅' : '⬜') + ' ' + esc(x.t) + '</div>'; }).join(''); return c; }
    paint();
    ta.addEventListener('input', function () { P.drafts[dk] = ta.value; save(); paint(); });
    $('wrCheck').addEventListener('click', function () {
      var c = paint(), ok = c.list.every(function (x) { return x.ok; });
      $('wrRes').innerHTML = '<b style="color:' + (ok ? '#6ee7b7' : '#fcd34d') + '">' + esc(ok ? t('passed') : t('not_yet')) + '</b>';
      if (ok && markDone(level, idx, 'writing')) refreshTabs();
    });
    $('wrModel').addEventListener('click', function () { var b = $('wrModelBox'); var open = b.style.display === 'none'; b.style.display = open ? 'block' : 'none'; $('wrModel').textContent = open ? t('hide_model') : t('model'); });
    wireSay(body);
  }
  function renderSpeaking(body, L, level, idx) {
    var sp = L.speaking, dk = lkey(level, idx) + ':speaking';
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    P.spoken[dk] = P.spoken[dk] || {};
    body.innerHTML = '<div class="lv-card"><p class="lv-p">' + esc(t('sp_hint')) + (SR ? '' : ' ' + esc(t('no_mic'))) + '</p></div>' +
      sp.prompts.map(function (q, i) {
        return '<div class="lv-card space-y-2"><div class="flex items-center gap-2">' + spk(q, 'f') + '<div class="lv-h">' + (i + 1) + '. ' + esc(q) + '</div></div>' +
          '<textarea class="tx" style="min-height:4.5rem" data-sp="' + i + '" placeholder="' + esc(t('write_here')) + '"></textarea>' +
          (SR ? '<button type="button" class="btn btn-ghost" data-mic="' + i + '">🎤 ' + esc(t('mic')) + '</button>' : '') + '</div>';
      }).join('') +
      '<div class="lv-card space-y-3"><div class="flex flex-wrap gap-2"><button type="button" class="btn btn-primary" id="spCheck">' + esc(t('check')) + '</button><button type="button" class="btn btn-ghost" id="spModel">' + esc(t('model')) + '</button></div>' +
      '<div id="spModelBox" style="display:none" class="qbox"><p class="lv-p">' + esc(sp.model) + '</p><div style="margin-top:.4rem">' + spk(sp.model, 'f') + '</div></div><div id="spRes" class="lv-muted"></div></div>';
    body.querySelectorAll('[data-sp]').forEach(function (ta) {
      var i = ta.getAttribute('data-sp'); ta.value = P.spoken[dk][i] || '';
      ta.addEventListener('input', function () { P.spoken[dk][i] = ta.value; save(); });
    });
    var rec = null, recBtn = null;
    body.querySelectorAll('[data-mic]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (rec) { try { rec.stop(); } catch (e) {} return; }
        var i = b.getAttribute('data-mic'), ta = body.querySelector('[data-sp="' + i + '"]');
        rec = new SR(); rec.lang = 'en-US'; rec.interimResults = false; recBtn = b; b.textContent = '⏹ ' + t('mic_stop');
        rec.onresult = function (ev) { var txt = ''; for (var k = 0; k < ev.results.length; k++) txt += ev.results[k][0].transcript + ' '; ta.value = (ta.value ? ta.value + ' ' : '') + txt.trim(); ta.dispatchEvent(new Event('input')); };
        rec.onend = rec.onerror = function () { rec = null; if (recBtn) recBtn.textContent = '🎤 ' + t('mic'); };
        try { rec.start(); } catch (e) { rec = null; }
      });
    });
    $('spCheck').addEventListener('click', function () {
      var answered = 0;
      body.querySelectorAll('[data-sp]').forEach(function (ta) { if ((ta.value.match(/[A-Za-z'’-]+/g) || []).length >= 4) answered++; });
      var ok = answered >= 3;
      $('spRes').innerHTML = '<b style="color:' + (ok ? '#6ee7b7' : '#fcd34d') + '">' + esc(t('sp_done')) + ': ' + answered + '/' + sp.prompts.length + '</b> — ' + esc(ok ? t('passed') : t('sp_need'));
      if (ok && markDone(level, idx, 'speaking')) refreshTabs();
    });
    $('spModel').addEventListener('click', function () { var b = $('spModelBox'); var open = b.style.display === 'none'; b.style.display = open ? 'block' : 'none'; $('spModel').textContent = open ? t('hide_model') : t('model'); });
    wireSay(body);
  }

  /* ---------- публичное API ---------- */
  ENG.go = function (part) {
    if (PARTS.indexOf(part) < 0) part = 'path';
    S.part = part; lsSet('english_part', part);
    try { history.replaceState(null, '', location.pathname + location.search + '#' + part); } catch (e) {}
    render(); window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  ENG.render = render;
  ENG.setLang = function (l) { S.lang = l === 'kz' ? 'kz' : 'ru'; lsSet('english_lang', S.lang); $('langSelect').value = S.lang; document.documentElement.lang = S.lang === 'kz' ? 'kk' : 'ru'; S.vq = {}; render(); if (S.lesson) openLesson(S.lesson.level, S.lesson.idx, S.lesson.skill); };
  ENG.setLevel = function (l) { var lv = LEVELS.filter(function (x) { return x.id === l; })[0]; if (!lv || !lv.ready) return; S.level = l; P.level = l; save(); ENG.go('path'); };
  ENG.openLesson = openLesson; ENG.closeLesson = closeLesson; ENG.stepLesson = stepLesson;
  ENG.logout = function () { if (!confirm(t('logout_ask'))) return; try { if (window.SMB && SMB.clearSession) SMB.clearSession(); } catch (e) {} location.href = '../index.html'; };

  /* ---------- старт ---------- */
  $('langSelect').value = S.lang; document.documentElement.lang = S.lang === 'kz' ? 'kk' : 'ru';
  var h = (location.hash || '').replace('#', ''); var sp = PARTS.indexOf(h) >= 0 ? h : lsGet('english_part');
  S.part = PARTS.indexOf(sp) >= 0 ? sp : 'path';
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && S.lesson) closeLesson(); });
  render();
})();
