(function () {
  'use strict';

  var E = window.GallupEngine, THEMES = window.GALLUP_THEMES, DOMAINS = window.GALLUP_DOMAINS;
  var KEY = 'gallupProto.v1';
  var SEC = E.SECONDS;
  var themeById = {};
  THEMES.forEach(function (t) { themeById[t.id] = t; });

  var LANG_KEY = 'gallupProto.lang';
  var lang = 'ru';
  try {
    var savedLang = localStorage.getItem(LANG_KEY);
    lang = savedLang === 'kz' || savedLang === 'ru' || savedLang === 'en' ? savedLang
         : /^(kk|kz)/i.test(navigator.language || '') ? 'kz'
         : /^en/i.test(navigator.language || '') ? 'en' : 'ru';
  } catch (e) {}
  var LI = { ru: 0, kz: 1, en: 2 };   // индекс языка в массивах data.career.js
  var HTML_LANG = { ru: 'ru', kz: 'kk', en: 'en' };

  var $ = function (id) { return document.getElementById(id); };
  function T() { return window.GALLUP_I18N[lang]; }
  // текст таланта на текущем языке: казахский накладывается поверх русского
  function pack(l) { return l === 'kz' ? window.GALLUP_KZ : l === 'en' ? window.GALLUP_EN : null; }
  function th(id) {
    var p = pack(lang);
    return (p && p.themes[id]) || themeById[id];
  }
  function dom(k) {
    var p = pack(lang), d = (p && p.domains[k]) || DOMAINS[k];
    return { name: d.name, note: d.note, color: DOMAINS[k].color };
  }

  function applyStatic() {
    document.documentElement.lang = HTML_LANG[lang];
    document.title = T().docTitle;
    [].forEach.call(document.querySelectorAll('[data-i]'), function (n) {
      var k = n.getAttribute('data-i');
      if (/H$/.test(k)) n.innerHTML = T()[k]; else n.textContent = T()[k];
    });
    [].forEach.call(document.querySelectorAll('[data-aria]'), function (n) {
      n.setAttribute('aria-label', T()[n.getAttribute('data-aria')]);
    });
    [].forEach.call(document.querySelectorAll('.lang'), function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
  }

  function setLang(l) {
    lang = l;
    try { localStorage.setItem(LANG_KEY, l); } catch (e) {}
    applyStatic();
    if (!$('screen-test').hidden && state) renderItem();
    else if (!$('screen-result').hidden && state) showResult(true);
  }
  var state = null;      // { items, answers, idx, deadline, done }
  var tickTimer = null;
  var locked = false;

  function load() { try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* без хранилища тест всё равно работает */ } }
  function clear() { try { localStorage.removeItem(KEY); } catch (e) {} }

  function show(name) {
    ['intro', 'test', 'result'].forEach(function (s) { $('screen-' + s).hidden = s !== name; });
    window.scrollTo(0, 0);
  }

  /* ---------- старт ---------- */
  function initIntro() {
    var saved = load();
    $('btn-resume').hidden = !(saved && !saved.done && saved.items);
    $('btn-last').hidden = !(saved && saved.done);
    show('intro');
  }

  function start() {
    state = { items: E.buildItems(THEMES), answers: [], idx: 0, deadline: null, done: false };
    save();
    runItem();
  }

  function resume() {
    state = load();
    if (!state || state.done) return initIntro();
    runItem();
  }

  /* ---------- вопрос ---------- */
  function runItem() {
    show('test');
    renderItem();
    $('card-l').className = 'card';
    $('card-r').className = 'card';
    [].forEach.call(document.querySelectorAll('.dot'), function (d) { d.classList.remove('chosen'); });
    locked = false;

    // дедлайн хранится, поэтому перезагрузка страницы не даёт дополнительного времени
    if (!state.deadline) { state.deadline = Date.now() + SEC * 1000; save(); }
    clearInterval(tickTimer);
    tickTimer = setInterval(tick, 100);
    tick();
  }

  // подписи пары; вызывается и при смене языка, таймер при этом не трогаем
  function renderItem() {
    var it = state.items[Math.min(state.idx, state.items.length - 1)];
    var total = state.items.length;
    $('progress-text').textContent = T().pair(state.idx + 1, total);
    $('progress-bar').style.width = (state.idx / total * 100) + '%';
    $('txt-l').textContent = th(it.L.t).st[it.L.s];
    $('txt-r').textContent = th(it.R.t).st[it.R.s];
  }

  function tick() {
    var left = state.deadline - Date.now();
    if (left <= 0) { record(null); return; }
    var s = Math.ceil(left / 1000);
    $('timer-text').textContent = s;
    $('timer-text').classList.toggle('low', s <= 5);
    var tb = $('timer-bar');
    tb.style.width = (left / (SEC * 1000) * 100) + '%';
    tb.classList.toggle('low', s <= 5);
  }

  function record(v) {
    if (locked) return;
    locked = true;
    clearInterval(tickTimer);
    var rt = Math.min(SEC * 1000, Math.max(0, SEC * 1000 - (state.deadline - Date.now())));
    state.answers[state.idx] = { v: v, rt: v === null ? SEC * 1000 : rt };
    state.idx++;
    state.deadline = null;
    if (state.idx >= state.items.length) state.done = true;
    save();

    if (v !== null) {
      var d = document.querySelector('.dot[data-v="' + v + '"]');
      if (d) d.classList.add('chosen');
      if (v < 0) $('card-l').classList.add('pick-l');
      if (v > 0) $('card-r').classList.add('pick-r');
    }
    setTimeout(function () { state.done ? showResult() : runItem(); }, v === null ? 0 : 220);
  }

  function onAnswer(v) {
    if (locked || $('screen-test').hidden) return;
    record(v);
  }

  /* ---------- результат ---------- */
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }

  function chip(domainKey) {
    var c = el('span', 'chip');
    var i = el('i'); i.style.background = DOMAINS[domainKey].color;
    c.appendChild(i); c.appendChild(document.createTextNode(dom(domainKey).name));
    return c;
  }

  function showResult(keepScroll) {
    show('result');
    if (keepScroll === true) { var y = window.scrollY; }
    var res = E.score(state.items, state.answers, THEMES);
    state.result = res;

    // достоверность
    var v = $('validity');
    v.hidden = false;
    v.className = 'validity' + (res.level === 'ok' ? '' : ' ' + res.level);
    v.textContent = '';
    var cons = res.validity.consistency === null ? '—' : Math.round(res.validity.consistency * 100) + '%';
    var head = res.level === 'ok' ? T().vOk : res.level === 'warn' ? T().vWarn : T().vBad;
    v.appendChild(el('b', null, head));
    v.appendChild(el('span', 'fineprint',
      T().vLine(res.validity.answered, res.validity.scored, cons, (res.validity.medianRt / 1000).toFixed(1))));
    if (res.issues.length) {
      var ul = el('ul');
      res.issues.forEach(function (m) { ul.appendChild(el('li', null, T().issues[m.k](m.p))); });
      v.appendChild(ul);
    }

    // топ-5
    var top = $('top5'); top.textContent = '';
    res.ranking.slice(0, 5).forEach(function (r) {
      var t = th(r.id);
      var c = el('article', 'tcard');
      c.style.borderLeftColor = DOMAINS[r.domain].color;
      var h = el('div', 'head');
      h.appendChild(el('span', 'rank', String(r.rank)));
      h.appendChild(el('span', 'name', t.name));
      h.appendChild(chip(r.domain));
      c.appendChild(h);
      c.appendChild(el('p', null, t.desc));
      c.appendChild(el('p', 'tip', T().tipPrefix + t.tip));
      top.appendChild(c);
    });
    var tn = $('tie-note');
    tn.hidden = !res.ranking[4].tiedNext;
    tn.textContent = T().tie;

    // области
    var dm = $('domains'); dm.textContent = '';
    Object.keys(DOMAINS).sort(function (a, b) { return res.domains[b] - res.domains[a]; }).forEach(function (k) {
      var row = el('div', 'drow');
      var l = el('div', 'lbl');
      l.appendChild(el('span', null, dom(k).name));
      l.appendChild(el('small', null, dom(k).note));
      var tr = el('div', 'track'); var f = el('div');
      f.style.background = DOMAINS[k].color;
      f.style.width = Math.max(3, Math.min(100, (res.domains[k] + 3) / 6 * 100)) + '%';
      tr.appendChild(f); row.appendChild(l); row.appendChild(tr); dm.appendChild(row);
    });

    // все таланты
    var full = $('full'); full.textContent = '';
    res.ranking.forEach(function (r) {
      var li = el('li', r.rank <= 5 ? 'top' : '');
      li.appendChild(el('span', 'n', String(r.rank)));
      li.appendChild(el('span', 'nm', th(r.id).name));
      var tr = el('div', 'track'); var f = el('div');
      f.style.background = DOMAINS[r.domain].color;
      f.style.width = Math.max(2, (r.score + 6) / 12 * 100) + '%';
      tr.appendChild(f); li.appendChild(tr);
      li.appendChild(el('span', 'sc', (r.score > 0 ? '+' : '') + r.score));
      full.appendChild(li);
    });
    renderAnalysis(res);
    $('copy-status').textContent = '';
    window.scrollTo(0, keepScroll === true ? y : 0);
  }

  /* ---------- анализ профиля и карьерные рекомендации ---------- */
  function renderAnalysis(res) {
    var C = window.GALLUP_CAREER, li = LI[lang];
    var order = Object.keys(DOMAINS).sort(function (a, b) { return res.domains[b] - res.domains[a]; });
    var d1 = order[0], d2 = order[1], dLast = order[order.length - 1];
    var top5 = res.ranking.slice(0, 5);

    var pre = $('an-prelim');
    pre.hidden = res.level === 'ok';
    pre.textContent = T().anPrelim;

    // портрет
    var por = $('an-portrait'); por.textContent = '';
    por.appendChild(el('p', null, T().anIntro(dom(d1).name, top5.map(function (r) { return th(r.id).name; }).join(', '))));
    por.appendChild(el('p', null, C.domains[d1].analysis[li]));
    por.appendChild(el('p', null, T().anSecond(dom(d2).name, C.domains[d2].short[li])));

    // зоны внимания
    var w = $('an-watch'); w.textContent = '';
    top5.forEach(function (r) {
      var item = el('li');
      item.appendChild(el('b', null, th(r.id).name));
      item.appendChild(document.createTextNode(C.watch[r.id][li]));
      w.appendChild(item);
    });

    // баланс
    var bal = $('an-balance'); bal.textContent = '';
    bal.appendChild(el('p', null, T().anWeak(dom(dLast).name, C.domains[dLast].growth[li])));

    // профессии: за таланты из топ-10 начисляем 2 балла (места 1–5) или 1 (места 6–10)
    var score = {}, via = {}, first = {}, seq = 0;
    res.ranking.slice(0, 10).forEach(function (r, i) {
      var wt = i < 5 ? 2 : 1;
      (C.themeJobs[r.id] || []).forEach(function (j) {
        if (!(j in score)) { score[j] = 0; via[j] = []; first[j] = seq++; }
        score[j] += wt; via[j].push(th(r.id).name);
      });
    });
    var jobs = Object.keys(score).sort(function (a, b) { return (score[b] - score[a]) || (first[a] - first[b]); }).slice(0, 8);
    var jl = $('an-jobs'); jl.textContent = '';
    jobs.forEach(function (j) {
      var item = el('li');
      item.appendChild(el('b', null, C.jobs[j][li]));
      item.appendChild(el('small', null, T().anVia + via[j].slice(0, 3).join(', ')));
      jl.appendChild(item);
    });

    // карьерный путь
    $('an-pathlead').textContent = T().anPathLead(dom(d1).name);
    var pl = $('an-path'); pl.textContent = '';
    C.domains[d1].stages[li].forEach(function (s) { pl.appendChild(el('li', null, s)); });
    pl.querySelectorAll('li').forEach(function (n) { n.style.borderLeftColor = DOMAINS[d1].color; });
  }

  function summaryText() {
    var res = E.score(state.items, state.answers, THEMES);
    var lines = [T().summaryHead];
    res.ranking.slice(0, 5).forEach(function (r) {
      lines.push(r.rank + '. ' + th(r.id).name + ' — ' + dom(r.domain).name);
    });
    return lines.join('\n');
  }

  function copySummary() {
    var txt = summaryText(), s = $('copy-status');
    var done = function () { s.textContent = T().copied; };
    var fail = function () { s.textContent = T().copyFail; };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done, fail);
    else fail();
  }

  /* ---------- события ---------- */
  $('btn-start').addEventListener('click', start);
  $('btn-resume').addEventListener('click', resume);
  $('btn-last').addEventListener('click', function () { state = load(); showResult(); });
  $('btn-print').addEventListener('click', function () { window.print(); });
  $('btn-copy').addEventListener('click', copySummary);
  $('btn-retake').addEventListener('click', function () {
    if (confirm(T().confirm)) { clear(); state = null; initIntro(); }
  });
  [].forEach.call(document.querySelectorAll('.lang'), function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
  });
  [].forEach.call(document.querySelectorAll('.dot'), function (d) {
    d.addEventListener('click', function () { onAnswer(parseInt(d.getAttribute('data-v'), 10)); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var map = { '1': -2, '2': -1, '3': 0, '4': 1, '5': 2 };
    if (map[e.key] !== undefined) onAnswer(map[e.key]);
  });
  // подстраховка: если вкладку «усыпили», при возврате сразу пересчитаем таймер
  document.addEventListener('visibilitychange', function () { if (!document.hidden && state && !$('screen-test').hidden) tick(); });

  applyStatic();
  initIntro();
})();
