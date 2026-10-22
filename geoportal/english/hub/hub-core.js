// English Hub (шаблон IELTS Academic Hub): ядро — хеширование паролей, подпись сессии, Route Guard, хранилище прогресса.
// Контент курса (data/*.js) подгружается ТОЛЬКО после успешной проверки сессии.
(function () {
  'use strict';

  var SECURITY_PEPPER = 'smb-english-hub::pepper::v1::3f9a6c21d8';
  var USERS_KEY = 'eng_users_v1';
  var SESSION_KEY = 'eng_session_v1';
  var LOCK_KEY = 'eng_lock_v1';
  var PROGRESS_PREFIX = 'eng_progress_v1_';
  var SESSION_MS = 7 * 24 * 3600 * 1000;
  var MAX_FAILS = 5;
  var LOCK_MS = 30000;
  var PBKDF2_ROUNDS = 150000;
  var JS_ROUNDS = 6000;

  var IELTS = window.IELTS = { DATA: {}, NDATA: {}, NIDX: null, VERSES: null, SKILLS: ['reading', 'writing', 'listening', 'speaking', 'vocabulary', 'grammar', 'ielts'] };
  var pendingProtectedRoute = null;
  var currentRoute = { screen: 'home' };
  var progress = null;      // прогресс текущего пользователя
  var saveTimer = null;
  var internalHash = false; // не реагировать на собственные изменения hash
  var lockTimer = null;

  /* ---------- утилиты ---------- */
  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"'`]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '`': '&#96;' }[c];
    });
  }
  function $(id) { return document.getElementById(id); }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } }
  function lsDel(k) { try { localStorage.removeItem(k); } catch (e) {} }
  function jsonGet(k, d) { try { var v = JSON.parse(lsGet(k)); return v == null ? d : v; } catch (e) { return d; } }

  function toast(msg, isErr) {
    var t = $('toast');
    t.textContent = msg;
    t.className = t.className.replace(/bg-\S+/g, '') + (isErr ? ' bg-rose-600' : ' bg-slate-900');
    t.style.opacity = '1';
    clearTimeout(t._t);
    t._t = setTimeout(function () { t.style.opacity = '0'; }, 3600);
  }

  /* ---------- SHA-256 / HMAC (чистый JS, синхронный) ---------- */
  var K256 = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ];
  function utf8Bytes(str) {
    if (window.TextEncoder) return Array.prototype.slice.call(new TextEncoder().encode(str));
    var s = unescape(encodeURIComponent(str)), out = [];
    for (var i = 0; i < s.length; i++) out.push(s.charCodeAt(i));
    return out;
  }
  function sha256Bytes(bytes) {
    var H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    var l = bytes.length, bitLen = l * 8;
    var m = bytes.slice();
    m.push(0x80);
    while (m.length % 64 !== 56) m.push(0);
    var hi = Math.floor(bitLen / 4294967296), lo = bitLen >>> 0;
    m.push((hi >>> 24) & 255, (hi >>> 16) & 255, (hi >>> 8) & 255, hi & 255, (lo >>> 24) & 255, (lo >>> 16) & 255, (lo >>> 8) & 255, lo & 255);
    var w = new Array(64);
    for (var off = 0; off < m.length; off += 64) {
      for (var i = 0; i < 16; i++) w[i] = (m[off + i * 4] << 24) | (m[off + i * 4 + 1] << 16) | (m[off + i * 4 + 2] << 8) | m[off + i * 4 + 3];
      for (i = 16; i < 64; i++) {
        var a15 = w[i - 15], a2 = w[i - 2];
        var s0 = ((a15 >>> 7) | (a15 << 25)) ^ ((a15 >>> 18) | (a15 << 14)) ^ (a15 >>> 3);
        var s1 = ((a2 >>> 17) | (a2 << 15)) ^ ((a2 >>> 19) | (a2 << 13)) ^ (a2 >>> 10);
        w[i] = (w[i - 16] + s0 + w[i - 7] + s1) | 0;
      }
      var a = H[0], b = H[1], c = H[2], d = H[3], e = H[4], f = H[5], g = H[6], h = H[7];
      for (i = 0; i < 64; i++) {
        var S1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
        var ch = (e & f) ^ (~e & g);
        var t1 = (h + S1 + ch + K256[i] + w[i]) | 0;
        var S0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
        var mj = (a & b) ^ (a & c) ^ (b & c);
        var t2 = (S0 + mj) | 0;
        h = g; g = f; f = e; e = (d + t1) | 0; d = c; c = b; b = a; a = (t1 + t2) | 0;
      }
      H[0] = (H[0] + a) | 0; H[1] = (H[1] + b) | 0; H[2] = (H[2] + c) | 0; H[3] = (H[3] + d) | 0;
      H[4] = (H[4] + e) | 0; H[5] = (H[5] + f) | 0; H[6] = (H[6] + g) | 0; H[7] = (H[7] + h) | 0;
    }
    var out = [];
    for (i = 0; i < 8; i++) out.push((H[i] >>> 24) & 255, (H[i] >>> 16) & 255, (H[i] >>> 8) & 255, H[i] & 255);
    return out;
  }
  function hmacBytes(keyBytes, msgBytes) {
    if (keyBytes.length > 64) keyBytes = sha256Bytes(keyBytes);
    var k = keyBytes.slice();
    while (k.length < 64) k.push(0);
    var ipad = k.map(function (x) { return x ^ 0x36; }), opad = k.map(function (x) { return x ^ 0x5c; });
    return sha256Bytes(opad.concat(sha256Bytes(ipad.concat(msgBytes))));
  }
  function toHex(bytes) { return bytes.map(function (b) { return ('0' + b.toString(16)).slice(-2); }).join(''); }
  function fromHex(h) { var o = []; for (var i = 0; i < h.length; i += 2) o.push(parseInt(h.substr(i, 2), 16)); return o; }
  function hmacHex(key, msg) { return toHex(hmacBytes(utf8Bytes(key), utf8Bytes(msg))); }
  function safeEqual(a, b) {
    a = String(a); b = String(b);
    if (a.length !== b.length) return false;
    var r = 0;
    for (var i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
    return r === 0;
  }
  function randomHex(n) {
    var arr = new Uint8Array(n);
    if (window.crypto && crypto.getRandomValues) crypto.getRandomValues(arr);
    else for (var i = 0; i < n; i++) arr[i] = Math.floor(Math.random() * 256);
    return toHex(Array.prototype.slice.call(arr));
  }

  /* ---------- хеширование пароля ---------- */
  // PBKDF2-SHA256 (WebCrypto) с солью и pepper; если WebCrypto недоступен (file://) — итерированный HMAC-SHA256.
  async function hashUserPassword(password, saltHex, algo) {
    var secret = SECURITY_PEPPER + '|' + password;
    var canSubtle = window.crypto && crypto.subtle && window.isSecureContext;
    algo = algo || (canSubtle ? 'pbkdf2' : 'hmacx');
    if (algo === 'pbkdf2' && canSubtle) {
      var key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), 'PBKDF2', false, ['deriveBits']);
      var bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: new Uint8Array(fromHex(saltHex)), iterations: PBKDF2_ROUNDS }, key, 256);
      return { algo: 'pbkdf2', hash: toHex(Array.prototype.slice.call(new Uint8Array(bits))) };
    }
    var cur = hmacBytes(fromHex(saltHex), utf8Bytes(secret));
    for (var i = 0; i < JS_ROUNDS; i++) cur = hmacBytes(fromHex(saltHex), cur.concat(utf8Bytes(secret)));
    return { algo: 'hmacx', hash: toHex(cur) };
  }

  /* ---------- пользователи и сессия ---------- */
  function getUsers() { var u = jsonGet(USERS_KEY, {}); return u && typeof u === 'object' ? u : {}; }
  function normEmail(e) { return String(e || '').trim().toLowerCase(); }

  function computeSessionSignature(email, name, iat, exp, passTag) {
    return hmacHex(SECURITY_PEPPER, [email, name, iat, exp, passTag].join('\u0001'));
  }
  function readSessionRaw() { return jsonGet(SESSION_KEY, null); }

  // Синхронная проверка: сессия существует, не просрочена, подпись совпадает, пользователь существует.
  function verifySessionIntegrity() {
    var s = readSessionRaw();
    if (!s || typeof s !== 'object') return false;
    if (s.v !== 1 || typeof s.email !== 'string' || typeof s.exp !== 'number' || typeof s.sig !== 'string') return false;
    if (s.exp <= Date.now()) return false;
    var u = getUsers()[s.email];
    if (!u || u.email !== s.email) return false;
    var expected = computeSessionSignature(s.email, u.name, s.iat, s.exp, String(u.hash).slice(0, 24));
    return safeEqual(expected, s.sig);
  }
  function currentUser() {
    if (!verifySessionIntegrity()) return null;
    var s = readSessionRaw();
    return getUsers()[s.email] || null;
  }
  // true: вход только по коду курса (сессия портала SMB, courseId = 'english'); false: своя регистрация email + пароль.
  var REQUIRE_CODE = true;
  var SMB_SESSION_KEY = 'geotany_user_session';

  function readSmbSession() {
    var s = jsonGet(SMB_SESSION_KEY, null);
    return s && s.v === 2 && s.courseId === 'english' && s.exp > Date.now() && /^[^\s@]+@[^\s@]+$/.test(s.email || '') ? s : null;
  }
  // Сессия, выданная порталом после проверки кода, превращается в подписанную сессию курса.
  function adoptSmbSession() {
    var s = readSmbSession();
    if (!s) return false;
    var email = normEmail(s.email);
    var cur = readSessionRaw();
    if (verifySessionIntegrity() && cur.email === email) return true;
    var users = getUsers();
    var u = users[email];
    if (!u || u.algo !== 'smb') {
      u = users[email] = { email: email, name: String(s.name || email).slice(0, 80), salt: '', algo: 'smb', hash: hmacHex(SECURITY_PEPPER, 'smb|' + email), createdAt: Date.now() };
      lsSet(USERS_KEY, JSON.stringify(users));
    }
    startSession(u, s.exp);
    return true;
  }
  function startSession(user, capExp) {
    var iat = Date.now(), exp = Math.min(iat + SESSION_MS, capExp || Infinity);
    var s = { v: 1, email: user.email, iat: iat, exp: exp, sig: computeSessionSignature(user.email, user.name, iat, exp, String(user.hash).slice(0, 24)) };
    lsSet(SESSION_KEY, JSON.stringify(s));
  }
  function invalidateTamperedSession(silent) {
    var had = !!lsGet(SESSION_KEY);
    lsDel(SESSION_KEY);
    progress = null;
    wipeProtectedDom();
    if (had && !silent) toast('Сессия недействительна. Войдите снова.', true);
    refreshHome();
  }
  function logout() {
    flushSave();
    lsDel(SESSION_KEY);
    if (readSmbSession()) lsDel(SMB_SESSION_KEY);
    progress = null;
    pendingProtectedRoute = null;
    wipeProtectedDom();
    IELTS.stopAll && IELTS.stopAll();
    setRoute({ screen: 'home' }, true);
    refreshHome();
    toast('Вы вышли из аккаунта.');
  }

  /* ---------- защита от перебора ---------- */
  function lockRemaining() {
    var l = jsonGet(LOCK_KEY, null);
    return l && l.until > Date.now() ? Math.ceil((l.until - Date.now()) / 1000) : 0;
  }
  function registerFail() {
    var l = jsonGet(LOCK_KEY, { fails: 0, until: 0 });
    if (l.until && l.until <= Date.now()) l = { fails: 0, until: 0 };
    l.fails = (l.fails || 0) + 1;
    if (l.fails >= MAX_FAILS) { l.until = Date.now() + LOCK_MS; l.fails = 0; }
    lsSet(LOCK_KEY, JSON.stringify(l));
  }
  function clearFails() { lsDel(LOCK_KEY); }
  function startLockCountdown() {
    clearInterval(lockTimer);
    var btn = $('authSubmit');
    function tick() {
      var r = lockRemaining();
      if (r > 0) {
        btn.disabled = true;
        btn.textContent = 'Вход заблокирован: ' + r + ' с';
        showAuthError('Слишком много неудачных попыток. Подождите ' + r + ' с.');
      } else {
        clearInterval(lockTimer);
        btn.disabled = false;
        btn.textContent = authMode === 'login' ? 'Войти' : 'Создать аккаунт';
        hideAuthError();
      }
    }
    if (lockRemaining() > 0) { tick(); lockTimer = setInterval(tick, 500); }
  }

  /* ---------- регистрация / вход ---------- */
  var authMode = 'login';
  function showAuthError(m) { var b = $('authError'); b.textContent = m; b.classList.remove('hidden'); }
  function hideAuthError() { $('authError').classList.add('hidden'); }

  function setAuthMode(mode) {
    authMode = mode;
    var reg = mode === 'register';
    $('nameRow').classList.toggle('hidden', !reg);
    $('authTitle').textContent = reg ? 'Регистрация' : 'Вход';
    $('tabLogin').className = 'flex-1 py-1.5 rounded-lg ' + (reg ? 'text-slate-500' : 'bg-white shadow-sm');
    $('tabRegister').className = 'flex-1 py-1.5 rounded-lg ' + (reg ? 'bg-white shadow-sm' : 'text-slate-500');
    $('aPass').setAttribute('autocomplete', reg ? 'new-password' : 'current-password');
    $('passHint').textContent = reg ? '(от 8 символов, буквы и цифры)' : '';
    $('authSubmit').textContent = reg ? 'Создать аккаунт' : 'Войти';
    hideAuthError();
    startLockCountdown();
  }

  function openAuth(notice) {
    var user = currentUser();
    $('authModal').classList.remove('hidden');
    var n = $('authNotice');
    n.textContent = notice || '';
    n.classList.toggle('hidden', !notice);
    $('profileBox').classList.toggle('hidden', !user);
    $('authForms').classList.toggle('hidden', !!user || REQUIRE_CODE);
    $('codeBox').classList.toggle('hidden', !!user || !REQUIRE_CODE);
    if (!user && REQUIRE_CODE) { $('authTitle').textContent = 'Нужен код курса'; return; }
    if (user) {
      $('authTitle').textContent = 'Профиль';
      $('profName').textContent = user.name;
      $('profEmail').textContent = user.email;
      var st = progressStats();
      $('profStats').textContent = 'Сохранено заданий: ' + st.touched + ' · проверок ИИ: ' + st.evals;
    } else {
      setAuthMode(authMode);
      prefillFromSmb();
      setTimeout(function () { $(authMode === 'register' ? 'aName' : 'aEmail').focus(); }, 30);
    }
  }
  function closeAuth() { $('authModal').classList.add('hidden'); }

  // Связка с порталом SMB: если ученик уже входил по коду курса, подставляем имя и почту.
  function prefillFromSmb() {
    try {
      var s = JSON.parse(lsGet('geotany_user_session') || 'null');
      if (s && s.v === 2 && s.exp > Date.now()) {
        if (!$('aEmail').value && s.email) $('aEmail').value = s.email;
        if (!$('aName').value && s.name) $('aName').value = s.name;
      }
    } catch (e) {}
  }

  async function submitAuth(e) {
    e.preventDefault();
    hideAuthError();
    if (lockRemaining() > 0) return startLockCountdown();
    var email = normEmail($('aEmail').value), pass = $('aPass').value, name = $('aName').value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return showAuthError('Проверьте адрес email.');
    var btn = $('authSubmit');
    btn.disabled = true;
    try {
      var users = getUsers();
      if (authMode === 'register') {
        if (name.length < 2) return showAuthError('Укажите имя (минимум 2 символа).');
        if (pass.length < 8 || !/[A-Za-zА-Яа-яЁё]/.test(pass) || !/\d/.test(pass)) return showAuthError('Пароль: минимум 8 символов, буквы и цифры.');
        if (users[email]) return showAuthError('Этот email уже зарегистрирован. Перейдите на вкладку «Вход».');
        var salt = randomHex(16);
        var h = await hashUserPassword(pass, salt);
        users[email] = { email: email, name: name.slice(0, 80), salt: salt, algo: h.algo, hash: h.hash, createdAt: Date.now() };
        if (!lsSet(USERS_KEY, JSON.stringify(users))) return showAuthError('Браузер не даёт сохранить аккаунт (localStorage отключён).');
        startSession(users[email]);
      } else {
        var u = users[email];
        var ok = false;
        if (u) {
          var hh = await hashUserPassword(pass, u.salt, u.algo);
          ok = hh.algo === u.algo && safeEqual(hh.hash, u.hash);
        } else {
          await hashUserPassword(pass, randomHex(16)); // выравниваем время ответа
        }
        if (!ok) {
          registerFail();
          if (lockRemaining() > 0) return startLockCountdown();
          return showAuthError('Неверный email или пароль.');
        }
        clearFails();
        startSession(u);
      }
      $('aPass').value = '';
      onAuthenticated(authMode === 'register' ? 'Аккаунт создан. Добро пожаловать!' : 'Вы вошли в аккаунт.');
    } catch (err) {
      showAuthError('Ошибка входа: ' + (err && err.message ? err.message : err));
    } finally {
      if (lockRemaining() === 0) btn.disabled = false;
    }
  }

  function onAuthenticated(msg) {
    loadProgress();
    closeAuth();
    toast(msg);
    refreshHome();
    var target = pendingProtectedRoute;
    pendingProtectedRoute = null;
    try { sessionStorage.removeItem('eng_pending'); } catch (e) {}
    if (target) navigateTo(target, { replace: true });
  }

  /* ---------- прогресс пользователя ---------- */
  function progressKey() {
    var s = readSessionRaw();
    return s ? PROGRESS_PREFIX + hmacHex(SECURITY_PEPPER, s.email).slice(0, 24) : null;
  }
  function loadProgress() {
    var k = progressKey();
    progress = k ? jsonGet(k, null) : null;
    if (!progress || typeof progress !== 'object') progress = { v: 1, items: {} };
    if (!progress.items) progress.items = {};
  }
  function saveCurrentUserProgress() {
    if (!progress || !verifySessionIntegrity()) return false;
    var k = progressKey();
    return k ? lsSet(k, JSON.stringify(progress)) : false;
  }
  function scheduleSave() { clearTimeout(saveTimer); saveTimer = setTimeout(saveCurrentUserProgress, 600); }
  function flushSave() { clearTimeout(saveTimer); saveCurrentUserProgress(); }
  // Состояние одного варианта: { a: ответы, d: черновики, ev: оценки ИИ, t: время }
  function vkey(skill) { var tp = currentRoute.topic; return tp && tp !== 'ielts' ? tp + '-' + skill : skill; }
  function vstate(skill, variant) {
    if (!progress) return { a: {}, d: {}, ev: {}, t: 0 };
    var key = vkey(skill) + ':' + variant;
    var it = progress.items[key];
    if (!it) it = progress.items[key] = { a: {}, d: {}, ev: {}, t: 0 };
    return it;
  }
  function touch(skill, variant) { vstate(skill, variant).t = Date.now(); scheduleSave(); }
  function progressStats() {
    var touched = 0, evals = 0;
    if (progress) Object.keys(progress.items).forEach(function (k) {
      var it = progress.items[k];
      var has = Object.keys(it.a || {}).length || Object.keys(it.d || {}).length;
      if (has) touched++;
      evals += Object.keys(it.ev || {}).length;
    });
    return { touched: touched, evals: evals };
  }
  function wipeProgress() {
    var k = progressKey();
    if (k) lsDel(k);
    progress = { v: 1, items: {} };
  }

  /* ---------- Route Guard ---------- */
  var TOPICS = { ielts: { count: 999 } };
  function routeToString(r) {
    var pre = r.topic && r.topic !== 'ielts' ? '#' + r.topic + '/' : '#';
    if (r.screen === 'course') return pre + 'course/' + r.skill;
    if (r.screen === 'test') return pre + 'test/' + r.skill + '/' + r.variant;
    return '';
  }
  function normalizeRoute(r) {
    if (typeof r === 'string') r = parseRoute(r);
    if (!r || !r.screen) return { screen: 'home' };
    if (r.screen !== 'home') {
      if (!TOPICS[r.topic]) r.topic = 'ielts';
      if (IELTS.SKILLS.indexOf(r.skill) < 0) r.skill = 'reading';
      if (r.screen === 'test') {
        var v = parseInt(r.variant, 10);
        if (!(v >= 1 && v <= TOPICS[r.topic].count)) return { screen: 'course', skill: r.skill, topic: r.topic };
        r.variant = v;
      }
    }
    return r;
  }
  function parseRoute(str) {
    var h = String(str || '').replace(/^#/, '').split('/'), topic = 'ielts';
    if (h[0] && h[0] !== 'ielts' && TOPICS[h[0]]) { topic = h.shift(); }
    if (h[0] === 'course') return { screen: 'course', skill: h[1], topic: topic };
    if (h[0] === 'test') return { screen: 'test', skill: h[1], variant: h[2], topic: topic };
    if (h[0] === 'courses' || h[0] === 'course-list') return { screen: 'course', skill: 'reading', topic: topic };
    return { screen: 'home' };
  }
  function setRoute(r, replace) {
    currentRoute = r;
    var target = routeToString(r);
    if ((location.hash || '') !== target || location.search) {
      internalHash = true;
      var url = location.pathname + target;
      try { replace ? history.replaceState(null, '', url) : history.pushState(null, '', url); } catch (e) { location.hash = target; }
      setTimeout(function () { internalHash = false; }, 0);
    }
  }

  // Любой переход: защищённые маршруты — только с подтверждённой сессией.
  function navigateTo(route, opts) {
    opts = opts || {};
    route = normalizeRoute(route);
    if (route.screen !== 'home' && !verifySessionIntegrity()) {
      if (readSessionRaw()) invalidateTamperedSession();
      pendingProtectedRoute = route;
      try { sessionStorage.setItem('eng_pending', JSON.stringify(route)); } catch (e) {}
      showScreen('home');
      setRoute({ screen: 'home' }, true);
      openAuth('Этот раздел доступен только после регистрации. После входа вы сразу перейдёте к нужному разделу.');
      return false;
    }
    if (!progress && verifySessionIntegrity()) loadProgress();
    setRoute(route, !!opts.replace);
    showScreen(route.screen);
    if (route.screen === 'home') { refreshHome(); return true; }
    IELTS.ui.loadSkill(route.topic, route.skill, route.variant).then(function () {
      if (!verifySessionIntegrity()) return;
      if (route.screen === 'course') IELTS.ui.renderCourse(route.skill);
      else IELTS.ui.renderTest(route.skill, route.variant);
    }).catch(function () {
      toast('Не удалось загрузить материалы раздела. Проверьте соединение.', true);
    });
    return true;
  }

  // Разбор прямых ссылок: #course/reading, #test/writing/2, ?skill=listening&variant=1
  function parseAndGuardDeepLink() {
    var route = null;
    if (location.hash && location.hash.length > 1) route = parseRoute(location.hash);
    if ((!route || route.screen === 'home') && location.search) {
      var q = new URLSearchParams(location.search);
      var skill = (q.get('skill') || '').toLowerCase(), topic = (q.get('topic') || 'ielts').toLowerCase();
      if (skill) route = q.get('variant') ? { screen: 'test', skill: skill, variant: q.get('variant'), topic: topic } : { screen: 'course', skill: skill, topic: topic };
    }
    if (!route || route.screen === 'home') {
      try {
        var p = JSON.parse(sessionStorage.getItem('eng_pending') || 'null');
        if (p && verifySessionIntegrity()) { sessionStorage.removeItem('eng_pending'); return navigateTo(p, { replace: true }); }
        if (p) pendingProtectedRoute = normalizeRoute(p);
      } catch (e) {}
      return navigateTo({ screen: 'home' }, { replace: true });
    }
    return navigateTo(route, { replace: true });
  }

  function showScreen(name) {
    var map = { home: 'screenHome', course: 'screenCourse', test: 'screenTest' };
    Object.keys(map).forEach(function (k) { $(map[k]).classList.toggle('hidden', k !== name); });
    if (name !== 'test' && IELTS.stopAll) IELTS.stopAll();
    window.scrollTo(0, 0);
  }

  // Пустой DOM до авторизации.
  function wipeProtectedDom() {
    $('variantsList').innerHTML = '';
    $('testWorkspace').innerHTML = '';
    $('skillTabs').innerHTML = '';
    IELTS.DATA = {}; IELTS.NDATA = {}; IELTS.NIDX = null; IELTS.VERSES = null;
  }
  function lockDownSection(el) {
    if (verifySessionIntegrity()) return;
    wipeProtectedDom();
    if (!el.classList.contains('hidden')) el.classList.add('hidden');
    if (el.getAttribute('style')) el.removeAttribute('style');
    $('screenHome').classList.remove('hidden');
    if ($('authModal').classList.contains('hidden')) openAuth('Этот раздел доступен только после регистрации.');
  }
  function installGuards() {
    var guard = function (el) {
      new MutationObserver(function () { lockDownSection(el); }).observe(el, { attributes: true, attributeFilter: ['class', 'style', 'hidden'] });
    };
    guard($('screenCourse'));
    guard($('screenTest'));
    var filler = function (el) {
      new MutationObserver(function () {
        if (!verifySessionIntegrity() && el.innerHTML !== '') { el.innerHTML = ''; }
      }).observe(el, { childList: true, subtree: true });
    };
    filler($('variantsList'));
    filler($('testWorkspace'));
    // Периодическая проверка: истёкшая или подделанная сессия.
    setInterval(function () {
      if (!verifySessionIntegrity() && currentRoute.screen !== 'home') {
        if (readSessionRaw()) invalidateTamperedSession(); else wipeProtectedDom();
        pendingProtectedRoute = null;
        showScreen('home'); setRoute({ screen: 'home' }, true);
        openAuth('Сессия завершена. Войдите снова.');
      }
    }, 4000);
    window.addEventListener('storage', function (e) {
      if (e.key === SESSION_KEY && !verifySessionIntegrity()) {
        if (e.newValue) invalidateTamperedSession(); else { wipeProtectedDom(); showScreen('home'); refreshHome(); }
      }
    });
  }

  /* ---------- главный экран ---------- */
  function refreshHome() {
    var user = currentUser();
    var badge = $('securityBadge');
    $('btnProfile').innerHTML = user ? '👤 ' + escapeHtml(user.name.split(' ')[0]) : '👤 Войти / Регистрация';
    if (user) {
      badge.textContent = '🔓 Доступ открыт (Сессия защищена)';
      badge.className = 'self-start sm:self-auto text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200';
      $('welcomeLine').textContent = 'Здравствуйте, ' + user.name + '! Ваш прогресс сохраняется автоматически.';
    } else {
      badge.textContent = '🔒 Доступ только после регистрации';
      badge.className = 'self-start sm:self-auto text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200';
      $('welcomeLine').textContent = 'Гость. Введите код курса на главной странице SMB, чтобы открыть тренажёр и сохранять результаты.';
    }
  }

  /* ---------- запуск ---------- */
  function bindUI() {
    $('btnProfile').addEventListener('click', function () { openAuth(''); });
    $('btnOpenCourse').addEventListener('click', function () { navigateTo({ screen: 'course', topic: 'ielts', skill: 'reading' }); });
    $('btnOpenIelts').addEventListener('click', function () { navigateTo({ screen: 'course', topic: 'ielts', skill: 'ielts' }); });
    var skillBtns = document.querySelectorAll('[data-home-skill]');
    for (var i = 0; i < skillBtns.length; i++) skillBtns[i].addEventListener('click', function (e) {
      navigateTo({ screen: 'course', topic: 'ielts', skill: e.currentTarget.getAttribute('data-home-skill') });
    });
    $('logoLink').addEventListener('click', function (e) { e.preventDefault(); navigateTo({ screen: 'home' }); });
    $('authClose').addEventListener('click', closeAuth);
    $('authModal').addEventListener('click', function (e) { if (e.target === $('authModal')) closeAuth(); });
    $('tabLogin').addEventListener('click', function () { setAuthMode('login'); });
    $('tabRegister').addEventListener('click', function () { setAuthMode('register'); });
    $('authForm').addEventListener('submit', submitAuth);
    $('btnLogout').addEventListener('click', function () { closeAuth(); logout(); });
    $('btnWipe').addEventListener('click', function () {
      if (confirm('Стереть весь сохранённый прогресс (ответы, черновики, оценки ИИ)? Аккаунт останется.')) {
        wipeProgress(); closeAuth(); toast('Прогресс стёрт.');
        if (currentRoute.screen !== 'home') navigateTo({ screen: 'home' });
      }
    });
    document.addEventListener('click', function (e) {
      var nav = e.target.closest && e.target.closest('[data-nav]');
      if (nav) {
        var t = nav.getAttribute('data-nav');
        if (t === 'home') navigateTo({ screen: 'home' });
        else if (t === 'course') navigateTo({ screen: 'course', topic: nav.getAttribute('data-topic') || currentRoute.topic || 'ielts', skill: nav.getAttribute('data-skill') || currentRoute.skill || 'reading' });
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeAuth(); $('aiModal').classList.add('hidden'); }
    });
    window.addEventListener('hashchange', function () { if (!internalHash) parseAndGuardDeepLink(); });
    window.addEventListener('beforeunload', flushSave);
    document.addEventListener('visibilitychange', function () { if (document.hidden) flushSave(); });
  }

  IELTS.boot = function () {
    bindUI();
    installGuards();
    if (IELTS.ai) IELTS.ai.bindSettings();
    if (REQUIRE_CODE) {
      adoptSmbSession();
      // преподаватель мог закрыть допуск в таблице
      var smb = readSmbSession();
      if (smb && window.SMB && window.SMB.C.API_URL) {
        window.SMB.stillAllowed(smb).then(function (ok) {
          if (!ok) { lsDel(SMB_SESSION_KEY); invalidateTamperedSession(true); navigateTo({ screen: 'home' }); toast('Доступ к курсу закрыт преподавателем.', true); }
        });
      }
    }
    if (readSessionRaw() && !verifySessionIntegrity()) {
      var s = readSessionRaw();
      invalidateTamperedSession(s && s.exp > Date.now() ? false : true);
      if (s && s.exp <= Date.now()) toast('Срок сессии истёк. Войдите снова.');
    } else if (verifySessionIntegrity()) {
      loadProgress();
    }
    refreshHome();
    parseAndGuardDeepLink();
  };

  // публичный интерфейс
  IELTS.escapeHtml = escapeHtml;
  IELTS.$ = $;
  IELTS.toast = toast;
  IELTS.verifySessionIntegrity = verifySessionIntegrity;
  IELTS.invalidateTamperedSession = invalidateTamperedSession;
  IELTS.navigateTo = navigateTo;
  IELTS.parseAndGuardDeepLink = parseAndGuardDeepLink;
  IELTS.currentUser = currentUser;
  IELTS.adoptSmbSession = adoptSmbSession;
  IELTS.vstate = vstate;
  IELTS.touch = touch;
  IELTS.scheduleSave = scheduleSave;
  IELTS.saveCurrentUserProgress = saveCurrentUserProgress;
  IELTS.openAuth = openAuth;
  IELTS.hashUserPassword = hashUserPassword;
  IELTS.getRoute = function () { return currentRoute; };
  IELTS.TOPICS = TOPICS;
  IELTS.getPending = function () { return pendingProtectedRoute; };
  IELTS.lsGet = lsGet; IELTS.lsSet = lsSet; IELTS.lsDel = lsDel;
})();
