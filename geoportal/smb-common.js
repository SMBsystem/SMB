// Общая логика страниц входа: язык, курсы, запись входа, обращение к Google-скрипту.
// Подключается после smb-config.js.
(function () {
  var C = window.SMB_CONFIG;
  var SESSION_KEY = 'geotany_user_session';   // эту запись читают страницы курсов
  var PROFILE_KEY = 'geotany_user_profile';
  var LANG_KEY = 'geotany_lang';

  var MSG = {
    kz: {
      bad_code: 'Код қате. Мұғалімнен кодты тексеріңіз.',
      too_many: 'Тым көп әрекет. Бір сағаттан кейін қайталаңыз.',
      blocked: 'Бұл курсқа қолжетімділік мұғаліммен жабылған. Мұғалімге хабарласыңыз.',
      bad_name: 'Аты-жөніңізді толық жазыңыз.',
      bad_email: 'Пошта мекенжайын дұрыс жазыңыз.',
      bad_course: 'Курс табылмады.',
      server: 'Сервер қатесі. Қайталап көріңіз.',
      network: 'Байланыс жоқ. Интернетті тексеріңіз.',
      no_api: 'Сервер әлі қосылмаған (smb-config.js файлы).'
    },
    ru: {
      bad_code: 'Неверный код. Уточните код у преподавателя.',
      too_many: 'Слишком много попыток. Попробуйте через час.',
      blocked: 'Доступ к курсу закрыт преподавателем. Обратитесь к нему.',
      bad_name: 'Укажите имя и фамилию.',
      bad_email: 'Проверьте адрес почты.',
      bad_course: 'Курс не найден.',
      server: 'Ошибка сервера. Попробуйте ещё раз.',
      network: 'Нет связи. Проверьте интернет.',
      no_api: 'Сервер ещё не подключён (файл smb-config.js).'
    }
  };

  function getLang() {
    try { return localStorage.getItem(LANG_KEY) === 'ru' ? 'ru' : 'kz'; } catch (e) { return 'kz'; }
  }
  function setLang(l) {
    try { localStorage.setItem(LANG_KEY, l === 'ru' ? 'ru' : 'kz'); } catch (e) {}
  }

  function courseById(id) {
    for (var i = 0; i < C.COURSES.length; i++) if (C.COURSES[i].id === id) return C.COURSES[i];
    return null;
  }
  function courseTitle(c) { return getLang() === 'ru' ? c.title_ru : c.title_kz; }
  function courseDesc(c) { return getLang() === 'ru' ? c.desc_ru : c.desc_kz; }
  function courseLevel(c) { return getLang() === 'ru' ? c.level_ru : c.level_kz; }

  // Запись действительна, только если она новая (v:2) и срок не истёк.
  function readSession() {
    try {
      var s = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
      if (s && s.v === 2 && s.exp > Date.now()) return s;
    } catch (e) {}
    return null;
  }
  function clearSession() {
    try { localStorage.removeItem(SESSION_KEY); localStorage.removeItem(PROFILE_KEY); } catch (e) {}
  }
  function saveSession(course, d) {
    var exp = Date.now() + C.SESSION_HOURS * 3600 * 1000;
    var title = courseTitle(course);
    var session = {
      v: 2, role: 'student', email: d.email, name: d.name,
      courseCode: course.label, courseId: course.id, courseTitle: title,
      lang: d.lang, grade: d.grade, exp: exp
    };
    var profile = {
      v: 2, isRegistered: true, name: d.name, email: d.email,
      courseCode: course.label, courseId: course.id, courseTitle: title,
      lang: d.lang, grade: d.grade, city: '', school: '', targetScore: 48,
      contact: d.email, registeredAt: new Date().toISOString(), exp: exp, isAdmin: false
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
    setLang(d.lang);
  }

  // Запрос к Google-скрипту (POST как text/plain — без CORS-проверки).
  // timeoutMs — сколько ждать ответа (по умолчанию 12 с; результатам экзаменов даём больше).
  async function api(action, payload, timeoutMs) {
    if (!C.API_URL) throw new Error('no_api');
    var ctrl = new AbortController();
    var timer = setTimeout(function () { ctrl.abort(); }, timeoutMs || 12000);
    try {
      var res = await fetch(C.API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(Object.assign({ action: action }, payload || {})),
        signal: ctrl.signal
      });
      return await res.json();
    } finally {
      clearTimeout(timer);
    }
  }

  // Проверка, что допуск ещё открыт (учитель мог его закрыть в таблице).
  async function stillAllowed(session) {
    try {
      var r = await api('check', { email: session.email, course: session.courseId });
      return !!(r && r.status === 'success' && r.allowed);
    } catch (e) {
      return true; // нет связи — не выгоняем ученика, проверим при следующем входе
    }
  }

  function errorText(code) {
    var m = MSG[getLang()];
    return m[code] || m.server;
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }

  function toast(msg, isError) {
    var box = document.getElementById('smbToast');
    if (!box) {
      box = document.createElement('div');
      box.id = 'smbToast';
      box.setAttribute('role', 'status');
      box.className = 'fixed top-20 left-1/2 -translate-x-1/2 z-[100] px-5 py-2.5 rounded-2xl font-bold text-xs shadow-2xl transition-opacity duration-300 pointer-events-none max-w-[90vw] text-center';
      document.body.appendChild(box);
    }
    box.className = box.className.replace(/bg-\S+|text-(slate-950|white)/g, '').trim() +
      (isError ? ' bg-rose-500 text-white' : ' bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950');
    box.textContent = msg;
    box.style.opacity = '1';
    clearTimeout(box._t);
    box._t = setTimeout(function () { box.style.opacity = '0'; }, 3500);
  }

  // «Мои курсы» — список открытых по коду курсов в этом браузере: [{id, code, at}].
  var WALLET_KEY = 'smb_courses';
  var DEVICE_KEY = 'smb_device';

  function readWallet() {
    try {
      var list = JSON.parse(localStorage.getItem(WALLET_KEY) || '[]');
      if (Array.isArray(list)) return list.filter(function (x) { return x && courseById(x.id); });
    } catch (e) {}
    return [];
  }
  function writeWallet(list) {
    try { localStorage.setItem(WALLET_KEY, JSON.stringify(list)); } catch (e) {}
  }
  function walletEntry(id) {
    var list = readWallet();
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }
  // Добавляет курс (повторный код того же курса просто обновляет запись). Возвращает true, если курс новый.
  function addToWallet(id, code) {
    var list = readWallet();
    var isNew = true;
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) { list[i].code = code; isNew = false; }
    }
    if (isNew) list.push({ id: id, code: code, at: Date.now() });
    writeWallet(list);
    return isNew;
  }
  function removeFromWallet(id) {
    writeWallet(readWallet().filter(function (x) { return x.id !== id; }));
  }
  // Случайный id устройства — только чтобы считать неверные попытки ввода кода.
  function deviceId() {
    try {
      var d = localStorage.getItem(DEVICE_KEY);
      if (!d) { d = Math.random().toString(36).slice(2, 12); localStorage.setItem(DEVICE_KEY, d); }
      return d;
    } catch (e) { return 'anon'; }
  }
  function readProfile() {
    try { return JSON.parse(localStorage.getItem(PROFILE_KEY) || 'null'); } catch (e) { return null; }
  }

  window.SMB = {
    readWallet: readWallet, walletEntry: walletEntry, addToWallet: addToWallet,
    removeFromWallet: removeFromWallet, deviceId: deviceId, readProfile: readProfile,
    C: C, getLang: getLang, setLang: setLang,
    courseById: courseById, courseTitle: courseTitle, courseDesc: courseDesc, courseLevel: courseLevel,
    readSession: readSession, clearSession: clearSession, saveSession: saveSession,
    api: api, stillAllowed: stillAllowed, errorText: errorText, esc: esc, toast: toast
  };
})();
