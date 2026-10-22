// English Hub: список заданий и рабочие пространства Reading / Writing / Listening / Speaking / Vocabulary / Grammar / IELTS Prep.
(function () {
  'use strict';
  var IELTS = window.IELTS;
  var esc = IELTS.escapeHtml;
  var $ = IELTS.$;
  var META = {
    reading: { label: 'Reading', icon: '📖', count: 62 },
    writing: { label: 'Writing', icon: '✍️', count: 62 },
    listening: { label: 'Listening', icon: '🎧', count: 62 },
    speaking: { label: 'Speaking', icon: '🎤', count: 62 },
    vocabulary: { label: 'Vocabulary', icon: '🔤', count: 62 },
    grammar: { label: 'Grammar', icon: '🧩', count: 62 },
    ielts: { label: 'IELTS Prep', icon: '🎓', count: 26 }
  };
  var LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  var IELTS_CATS = ['Writing', 'Speaking', 'Vocabulary', 'Strategy'];
  var LVL_STYLE = { A1: 'bg-emerald-50 text-emerald-700', A2: 'bg-teal-50 text-teal-700', B1: 'bg-sky-50 text-sky-700', B2: 'bg-indigo-50 text-indigo-700', C1: 'bg-violet-50 text-violet-700', C2: 'bg-fuchsia-50 text-fuchsia-700' };
  var filters = {};
  var loading = {};

  function arr(x) { return Array.isArray(x) ? x : (x == null ? [] : [x]); }
  function lvlOf(d) { return d.level || d.lvl || ''; }

  /* ---------- загрузка контента (только для подтверждённой сессии) ---------- */
  function loadScript(file) {
    if (!IELTS.verifySessionIntegrity()) return Promise.reject(new Error('no session'));
    if (loading[file]) return loading[file];
    loading[file] = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = 'hub/data/' + file + '.js?v=1';
      s.onload = function () { resolve(); };
      s.onerror = function () { delete loading[file]; reject(new Error('load error')); };
      document.head.appendChild(s);
    });
    return loading[file];
  }
  function loadSkill(topic, skill) {
    if (!Object.keys(IELTS.DATA).length) loading = {};
    if (IELTS.DATA[skill]) return Promise.resolve(IELTS.DATA[skill]);
    return loadScript(skill).then(function () { if (!IELTS.DATA[skill]) throw new Error('empty data'); return IELTS.DATA[skill]; });
  }

  /* ---------- общие помощники ---------- */
  var CONTR = [[/\bwon't\b/g, 'will not'], [/\bcan't\b/g, 'can not'], [/\bcannot\b/g, 'can not'], [/\bshan't\b/g, 'shall not'], [/n't\b/g, ' not'], [/\bi'm\b/g, 'i am'], [/\bit's\b/g, 'it is'], [/\bhe's\b/g, 'he is'], [/\bshe's\b/g, 'she is'], [/\bwe're\b/g, 'we are'], [/\bthey're\b/g, 'they are'], [/\byou're\b/g, 'you are'], [/\bthat's\b/g, 'that is'], [/\bi'll\b/g, 'i will'], [/\bi've\b/g, 'i have'], [/\blet's\b/g, 'let us']];
  function norm(s) {
    var t = String(s == null ? '' : s).toLowerCase().replace(/[’‘`]/g, "'");
    CONTR.forEach(function (c) { t = t.replace(c[0], c[1]); });
    return t.replace(/[.,;:!?"()\[\]]/g, ' ').replace(/'/g, '').replace(/\s+/g, ' ').trim();
  }
  var STOP = { the: 1, a: 1, an: 1, to: 1, of: 1, in: 1, at: 1, on: 1, and: 1, for: 1, by: 1, with: 1, is: 1, are: 1, was: 1, were: 1, it: 1, they: 1, their: 1, his: 1, her: 1, from: 1, that: 1, this: 1 };
  function tokens(s) { return norm(s).split(' ').filter(function (w) { return w && !STOP[w]; }); }
  // свободный короткий ответ: достаточно, чтобы совпали ключевые слова (допускаем разные окончания)
  function fuzzyOk(user, answer) {
    var nu = norm(user), na = norm(answer);
    if (!nu) return false;
    if (nu === na) return true;
    var alts = String(answer).split(/\s+or\s+|\s*\/\s*/i);
    for (var i = 0; i < alts.length; i++) {
      var ta = tokens(alts[i]), tu = tokens(user);
      if (!ta.length) continue;
      var hit = ta.filter(function (w) { return tu.some(function (x) { return x === w || (w.length > 3 && x.length > 3 && (x.indexOf(w.slice(0, w.length - 1)) === 0 || w.indexOf(x.slice(0, x.length - 1)) === 0)); }); }).length;
      if (ta.length <= 2 ? hit === ta.length : hit / ta.length >= 0.7) return true;
    }
    return false;
  }
  function wordCount(t) { return (String(t || '').trim().match(/[A-Za-z0-9'’-]+/g) || []).length; }
  function say(text, gender) {
    if (!IELTS.audio) return;
    var g = {}; g.Narrator = gender || 'f';
    IELTS.audio.playNaturalDialogue('Narrator: ' + text, { genders: g, speed: 0.95 });
  }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
  function curList(skill) { return IELTS.DATA[skill] || []; }

  function lvlBadge(d) {
    var l = lvlOf(d);
    return l ? '<span class="text-[11px] font-bold px-2 py-0.5 rounded-full ' + (LVL_STYLE[l] || 'bg-slate-100 text-slate-700') + '">' + esc(l) + '</span>' : '';
  }
  function statusText(skill, st) {
    var ev = Object.keys(st.ev || {}).length;
    if (st.a && st.a._score) return 'Результат ' + st.a._score + (ev ? ' · ИИ ×' + ev : '');
    var known = st.k ? Object.keys(st.k).length : 0;
    if (known) return 'Выучено: ' + known;
    var has = Object.keys(st.a || {}).length || Object.keys(st.d || {}).length;
    if (ev) return 'Проверено ИИ ×' + ev;
    return has ? 'Начато' : '';
  }

  /* ---------- экран 2: список ---------- */
  function variantCard(skill, i, d) {
    var st = IELTS.vstate(skill, i);
    var status = statusText(skill, st);
    return '<article class="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col gap-3 hover:border-indigo-300 transition">' +
      '<div class="flex items-center justify-between gap-2"><span class="flex items-center gap-2 text-xs font-bold text-indigo-600">№ ' + i + ' ' + lvlBadge(d) + '</span>' +
      (status ? '<span class="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">' + esc(status) + '</span>' : '') + '</div>' +
      '<h3 class="font-bold leading-snug">' + esc(d.title) + '</h3><p class="text-xs text-slate-500">' + esc(d.spec || '') + '</p>' +
      (d.takeaway ? '<p class="text-sm text-slate-600 leading-relaxed">' + esc(d.takeaway) + '</p>' : '') +
      '<button type="button" data-open-test="' + i + '" data-skill="' + skill + '" class="btn btn-primary mt-auto">' + (status ? 'Продолжить' : 'Начать') + ' →</button></article>';
  }
  function renderCourse(skill) {
    if (!IELTS.verifySessionIntegrity()) return;
    var f = filters[skill] = filters[skill] || { lvl: 'all', q: '' };
    $('courseTitle').textContent = skill === 'ielts' ? 'Подготовка к IELTS' : 'English Hub';
    $('skillTabs').innerHTML = IELTS.SKILLS.map(function (s) {
      var m = META[s];
      return '<button type="button" role="tab" aria-selected="' + (s === skill) + '" data-open-skill="' + s + '" class="px-4 py-2.5 text-sm font-semibold border-b-2 whitespace-nowrap ' + (s === skill ? 'tab-on' : 'border-transparent text-slate-500 hover:text-slate-800') + '">' + m.icon + ' ' + m.label + ' <span class="text-xs font-normal text-slate-400">(' + m.count + ')</span></button>';
    }).join('');
    var opts = skill === 'ielts' ? IELTS_CATS : LEVELS;
    $('levelChips').innerHTML = ['all'].concat(opts).map(function (l) {
      return '<button type="button" class="chip ' + (f.lvl === l ? 'on' : '') + '" data-lvl="' + l + '">' + (l === 'all' ? 'Все' : l) + '</button>';
    }).join('');
    $('variantSearch').value = f.q;
    var q = f.q.trim().toLowerCase();
    var cards = curList(skill).map(function (d, i) { return { d: d, i: i + 1 }; }).filter(function (x) {
      return (f.lvl === 'all' || lvlOf(x.d) === f.lvl) && (!q || (x.d.title + ' ' + (x.d.spec || '')).toLowerCase().indexOf(q) >= 0);
    });
    $('variantsList').innerHTML = cards.map(function (x) { return variantCard(skill, x.i, x.d); }).join('') || '<p class="text-sm text-slate-500 col-span-full">Ничего не найдено.</p>';
  }
  $('variantSearch').addEventListener('input', function () {
    if (!IELTS.verifySessionIntegrity()) return;
    var sk = IELTS.getRoute().skill || 'reading';
    (filters[sk] = filters[sk] || { lvl: 'all', q: '' }).q = this.value;
    renderCourse(sk); var inp = $('variantSearch'); inp.focus(); try { inp.setSelectionRange(inp.value.length, inp.value.length); } catch (e) {}
  });
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-open-skill]');
    if (t) return IELTS.navigateTo({ screen: 'course', topic: 'ielts', skill: t.getAttribute('data-open-skill') });
    t = e.target.closest && e.target.closest('[data-open-test]');
    if (t) return IELTS.navigateTo({ screen: 'test', topic: 'ielts', skill: t.getAttribute('data-skill'), variant: t.getAttribute('data-open-test') });
    t = e.target.closest && e.target.closest('[data-lvl]');
    if (t && IELTS.verifySessionIntegrity()) {
      var sk = IELTS.getRoute().skill || 'reading';
      (filters[sk] = filters[sk] || { lvl: 'all', q: '' }).lvl = t.getAttribute('data-lvl');
      renderCourse(sk);
    }
  });

  /* ---------- общая шапка и проверка ---------- */
  function header(skill, v, d) {
    var m = META[skill], total = curList(skill).length;
    var prev = v > 1 ? '<button type="button" class="btn btn-ghost" data-open-test="' + (v - 1) + '" data-skill="' + skill + '" aria-label="Назад">←</button>' : '';
    var next = v < total ? '<button type="button" class="btn btn-ghost" data-open-test="' + (v + 1) + '" data-skill="' + skill + '" aria-label="Дальше">→</button>' : '';
    return '<div class="flex flex-wrap items-center justify-between gap-3 mb-5">' +
      '<button type="button" class="btn btn-ghost" data-nav="course" data-skill="' + skill + '">← ' + m.label + '</button>' +
      '<div class="text-center flex-1 min-w-[200px]"><div class="text-xs font-bold text-indigo-600 flex items-center justify-center gap-2">' + m.icon + ' ' + m.label + ' · № ' + v + ' из ' + total + ' ' + lvlBadge(d) + '</div><h2 class="font-bold text-lg leading-tight">' + esc(d.title) + '</h2></div>' +
      '<div class="flex gap-2">' + prev + next + '</div></div>';
  }
  function fbHtml(ok, val, correct, extra) {
    return (ok ? '✅ Верно. ' : '❌ ' + (norm(val) ? 'Ваш ответ: «' + esc(val) + '». ' : 'Нет ответа. ') + 'Правильно: <b>' + esc(correct) + '</b>. ') + esc(extra || '');
  }
  // qs = [{k, a:[допустимые], e, fuzzy}]
  function gradeQuestions(root, qs, st) {
    var right = 0;
    qs.forEach(function (q) {
      var el = root.querySelector('[data-k="' + q.k + '"]');
      var val = el ? el.value : '';
      var ok = arr(q.a).some(function (a) { return q.fuzzy ? fuzzyOk(val, a) : norm(a) === norm(val); });
      if (ok) right++;
      if (el) { el.classList.toggle('ok', ok); el.classList.toggle('bad', !ok); }
      var fb = root.querySelector('[data-fb="' + q.k + '"]');
      if (fb) {
        fb.className = 'mt-1 text-xs leading-relaxed rounded-lg px-2.5 py-1.5 ' + (ok ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800');
        fb.innerHTML = fbHtml(ok, val, q.show || arr(q.a)[0], q.e && q.e !== arr(q.a)[0] ? '' : '');
      }
    });
    st.a._score = right + '/' + qs.length; st.a._checked = 1;
    return { right: right, total: qs.length, score: right + '/' + qs.length };
  }
  function resultBanner(g) {
    var pct = Math.round(100 * g.right / g.total);
    return '<div class="p-3 rounded-xl border ' + (pct >= 70 ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-amber-50 border-amber-200 text-amber-800') + ' text-sm font-semibold">Результат: ' + g.score + ' (' + pct + '%)' +
      '<div class="text-xs font-normal mt-1">' + (pct >= 70 ? 'Отлично! Переходите к следующему заданию.' : 'Перечитайте материал и попробуйте ещё раз: нажмите «Сбросить».') + '</div></div>';
  }
  function bindAutosave(root, skill, v) {
    var st = IELTS.vstate(skill, v);
    root.oninput = root.onchange = function (e) {
      var el = e.target, k = el.getAttribute && el.getAttribute('data-k'), dk = el.getAttribute && el.getAttribute('data-d');
      if (k) { st.a[k] = el.value; IELTS.touch(skill, v); }
      else if (dk) { st.d[dk] = el.value; IELTS.touch(skill, v); }
    };
    root.querySelectorAll('[data-k]').forEach(function (el) { var val = st.a[el.getAttribute('data-k')]; if (val != null) el.value = val; });
    root.querySelectorAll('[data-d]').forEach(function (el) { var val = st.d[el.getAttribute('data-d')]; if (val != null) el.value = val; });
  }
  function wireQuiz(root, skill, v, qs, st, prefix) {
    bindAutosave(root, skill, v);
    function check() {
      var g = gradeQuestions(root, qs, st);
      root.querySelector('#' + prefix + 'Result').innerHTML = resultBanner(g);
      IELTS.touch(skill, v);
    }
    root.querySelector('#' + prefix + 'Check').addEventListener('click', check);
    root.querySelector('#' + prefix + 'Reset').addEventListener('click', function () {
      if (!confirm('Сбросить ответы этого задания?')) return;
      st.a = {}; st.d = {}; IELTS.touch(skill, v);
      renderTest(skill, v);
    });
    if (st.a._checked) check();
  }
  function fbRows(k) { return '<div data-fb="' + k + '" class="mt-1"></div>'; }
  function openQs(list, st) {
    return list.map(function (q, i) {
      return '<div class="mb-3"><p class="text-sm font-semibold mb-1">' + (i + 1) + '. ' + esc(q) + '</p><textarea class="inp !min-h-[70px]" data-d="oq' + i + '" placeholder="Ответ своими словами…" maxlength="1500"></textarea></div>';
    }).join('');
  }

  /* ---------- Reading ---------- */
  function renderReading(d, v) {
    var qs = [], gaps = arr(d.gaps);
    var h = header('reading', v, d) + '<div class="grid lg:grid-cols-2 gap-5"><div class="bg-white border border-slate-200 rounded-2xl p-5 scroll-y passage"><h3 class="font-bold text-lg mb-1">' + esc(d.title) + '</h3><p class="text-xs text-slate-400 mb-4">' + esc(d.author || '') + ' · отрывок для чтения</p>' +
      arr(d.passage).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div>';
    h += '<div class="bg-white border border-slate-200 rounded-2xl p-5 scroll-y space-y-6" id="rdQuestions">';
    if (gaps.length) {
      h += '<div><h4 class="font-bold">Задание 1 · Вставьте слово из текста</h4><p class="text-xs text-slate-500 mb-3">Заполните пропуск ОДНИМ словом из отрывка. Подсказка: первая буква и длина слова.</p>';
      gaps.forEach(function (g, i) {
        var k = 'g' + i; qs.push({ k: k, a: [g.a] });
        h += '<div class="mb-3 text-sm leading-8"><span class="font-bold text-xs text-slate-500">' + (i + 1) + '</span> ' +
          esc(g.s).replace('_____', '<input class="gap" data-k="' + k + '" autocomplete="off" spellcheck="false" aria-label="Пропуск ' + (i + 1) + '" placeholder="' + esc(g.a.charAt(0)) + '…(' + g.a.length + ')">') + fbRows(k) + '</div>';
      });
      h += '</div>';
    }
    var kw = arr(d.kw);
    if (kw.length) h += '<details class="rounded-xl border border-slate-200 p-3"><summary class="cursor-pointer font-semibold text-sm">Слова из отрывка с переводом (' + kw.length + ')</summary><ul class="mt-2 grid sm:grid-cols-2 gap-x-4 gap-y-1 text-sm">' + kw.map(function (x) { return '<li><b>' + esc(x.w) + '</b> — ' + esc(x.t) + '</li>'; }).join('') + '</ul></details>';
    h += '<div><h4 class="font-bold">Задание 2 · Вопросы к тексту</h4><p class="text-xs text-slate-500 mb-3">Ответьте письменно (ответы сохраняются автоматически).</p>' + openQs(arr(d.q)) + '</div>';
    h += '<div class="flex flex-wrap gap-2 items-center sticky bottom-0 bg-white pt-3 border-t border-slate-100"><button type="button" id="rdCheck" class="btn btn-primary">Проверить пропуски</button><button type="button" id="rdReset" class="btn btn-ghost">Сбросить</button></div><div id="rdResult"></div></div></div>';
    return { html: h, qs: qs };
  }

  /* ---------- Listening ---------- */
  function renderListening(d, v) {
    var qs = [], lines = IELTS.audio.parseScript(d.script), tasks = arr(d.tasks);
    var h = header('listening', v, d) + '<div class="grid lg:grid-cols-2 gap-5">';
    h += '<div class="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 self-start"><h3 class="font-bold">Аудио</h3>' +
      '<p class="text-xs text-slate-500">' + esc(d.spec || '') + '</p>' +
      '<div class="flex flex-wrap items-center gap-2"><button type="button" id="lsPlay" class="btn btn-primary">▶ Слушать</button><button type="button" id="lsStop" class="btn btn-ghost">■ Стоп</button>' +
      '<select id="lsSpeed" class="inp !w-28" aria-label="Скорость"><option value="0.85">0.85×</option><option value="1" selected>1.0×</option><option value="1.1">1.1×</option></select></div>' +
      '<label class="flex items-center gap-2 text-sm"><input type="checkbox" id="lsShow"> Показать транскрипт</label>' +
      '<div id="lsTranscript" class="hidden scroll-y !max-h-96 space-y-1.5 text-sm">' + lines.map(function (l, i) { return '<div data-line="' + i + '" class="p-2 rounded-lg"><b class="text-indigo-700">' + esc(l.speaker) + ':</b> ' + esc(l.text) + '</div>'; }).join('') + '</div>' +
      '<p class="text-[11px] text-slate-400">Голоса — синтез речи вашего браузера (лучше всего Edge/Chrome с «Natural» голосами). В настройках 🤖 можно включить OpenAI Neural TTS.</p></div>';
    h += '<div class="bg-white border border-slate-200 rounded-2xl p-5 scroll-y space-y-5" id="lsQuestions"><div><h4 class="font-bold">Вопросы 1–' + tasks.length + '</h4><p class="text-xs text-slate-500 mb-3">Ответьте коротко по-английски (одно слово, число или короткая фраза).</p>';
    tasks.forEach(function (q, i) {
      var k = 't' + i; qs.push({ k: k, a: arr(q.a), fuzzy: true, show: arr(q.a)[0] });
      h += '<div class="mb-3 text-sm"><div class="flex gap-2"><span class="font-bold w-6">' + (i + 1) + '</span><span class="flex-1">' + esc(q.q) + '</span></div><input class="gap !w-full mt-1 !text-left" data-k="' + k + '" autocomplete="off" spellcheck="false" aria-label="Ответ ' + (i + 1) + '">' + fbRows(k) + '</div>';
    });
    h += '</div>';
    var task = arr(d.task);
    if (task.length) h += '<div><h4 class="font-bold">Задание после прослушивания</h4>' + task.map(function (t) { return '<p class="text-sm text-slate-700 mb-2">' + esc(t) + '</p>'; }).join('') + '<textarea class="inp !min-h-[110px]" data-d="after" placeholder="Ваш ответ…" maxlength="2500"></textarea></div>';
    h += '<div class="flex flex-wrap gap-2 sticky bottom-0 bg-white pt-3 border-t border-slate-100"><button type="button" id="lsCheck" class="btn btn-primary">Проверить ответы</button><button type="button" id="lsReset" class="btn btn-ghost">Сбросить</button></div><div id="lsResult"></div></div></div>';
    return { html: h, qs: qs };
  }
  function wireListening(root, d) {
    var tr = $('lsTranscript');
    $('lsShow').addEventListener('change', function () { tr.classList.toggle('hidden', !this.checked); });
    function clearActive() { tr.querySelectorAll('.line-active').forEach(function (n) { n.classList.remove('line-active'); }); }
    $('lsStop').addEventListener('click', function () { IELTS.stopAll(); clearActive(); $('lsPlay').disabled = false; });
    $('lsPlay').addEventListener('click', function () {
      var btn = this; btn.disabled = true;
      IELTS.audio.playNaturalDialogue(d.script, {
        genders: d.genders, speed: parseFloat($('lsSpeed').value) || 1,
        onLine: function (i) {
          clearActive();
          var el = tr.querySelector('[data-line="' + i + '"]');
          if (el) { el.classList.add('line-active'); if (!tr.classList.contains('hidden')) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
        },
        onEnd: function () { clearActive(); btn.disabled = false; }
      }).then(function (ok) { if (ok === false) btn.disabled = false; });
    });
  }

  /* ---------- AI-проверка (Writing / Speaking) ---------- */
  function aiRunner(btn, skill, v, st, evKey, outEl, kind, title, prompt, text, minWords, extra) {
    if (wordCount(text) < 5) { IELTS.toast('Сначала напишите ответ.', true); return; }
    var label = btn.textContent;
    btn.disabled = true; btn.textContent = '⏳ Анализирую…';
    window.evaluateWithAI('auto', title, prompt, text, minWords, Object.assign({ kind: kind }, extra || {})).then(function (r) {
      if (!IELTS.verifySessionIntegrity()) return;
      st.ev[evKey] = r; IELTS.touch(skill, v);
      outEl.innerHTML = window.renderAiEvaluationCard(r);
      outEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }).catch(function (e) {
      IELTS.toast('Ошибка проверки: ' + (e && e.message), true);
    }).then(function () { btn.disabled = false; btn.textContent = label; });
  }
  function keywordsOf(text) {
    var seen = {}, out = [];
    String(text || '').toLowerCase().replace(/[^a-z\s'-]/g, ' ').split(/\s+/).forEach(function (w) { if (w.length >= 5 && !STOP[w] && !seen[w]) { seen[w] = 1; out.push(w); } });
    return out.slice(0, 14);
  }

  /* ---------- Writing ---------- */
  function renderWriting(d, v) {
    var task = arr(d.task), guide = arr(d.guide);
    var h = header('writing', v, d) + '<div class="grid lg:grid-cols-2 gap-5 items-start"><div class="space-y-4">';
    if (d.model) h += '<section class="bg-white border border-slate-200 rounded-2xl p-5"><h3 class="font-bold mb-2">Образец</h3><div class="text-sm leading-relaxed text-slate-700 space-y-2">' + String(d.model).split(/\n\n/).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div>' +
      '<div class="mt-3"><button type="button" class="btn btn-ghost" id="wrSay">🔊 Озвучить образец</button></div></section>';
    guide.forEach(function (g) {
      h += '<section class="bg-white border border-slate-200 rounded-2xl p-5"><h3 class="font-bold mb-2">' + esc(g.h) + '</h3><ul class="list-disc pl-5 text-sm space-y-1">' + arr(g.items).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></section>';
    });
    h += '</div><section class="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 lg:sticky lg:top-20"><div class="flex items-center justify-between flex-wrap gap-2"><h3 class="font-bold">✍️ Ваше задание</h3><span class="text-xs text-slate-500">минимум ' + d.min + ' слов</span></div>' +
      '<div class="rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm leading-relaxed space-y-1">' + task.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') + '</div>' +
      '<textarea class="inp !min-h-[260px] leading-relaxed" id="wrText" placeholder="Напишите ответ здесь…" spellcheck="true" maxlength="6000"></textarea>' +
      '<div class="flex flex-wrap items-center justify-between gap-2"><span class="text-sm font-semibold" id="wrCount">0 слов</span><button type="button" class="btn btn-primary" id="wrAi">🤖 Проверить ИИ</button></div><div id="wrEval"></div></section></div>';
    return { html: h };
  }
  function wireWriting(root, skill, v, d, st) {
    var ta = $('wrText'), cnt = $('wrCount'), out = $('wrEval'), min = d.min || 40;
    ta.value = st.d.text || '';
    function upd() { var c = wordCount(ta.value); cnt.textContent = c + ' слов' + (c < min ? ' (нужно ещё ' + (min - c) + ')' : ' ✓'); cnt.className = 'text-sm font-semibold ' + (c >= min ? 'text-emerald-600' : 'text-slate-600'); }
    upd();
    ta.addEventListener('input', function () { st.d.text = ta.value; upd(); IELTS.touch(skill, v); });
    if (st.ev.text) out.innerHTML = window.renderAiEvaluationCard(st.ev.text);
    var say0 = $('wrSay'); if (say0) say0.addEventListener('click', function () { say(String(d.model).replace(/\n+/g, ' '), 'f'); });
    $('wrAi').addEventListener('click', function () {
      var promptText = arr(d.task).join(' ');
      aiRunner(this, skill, v, st, 'text', out, 'w2', d.title, promptText, ta.value, min, { keywords: keywordsOf(d.title + ' ' + promptText) });
    });
  }

  /* ---------- Speaking ---------- */
  function renderSpeaking(d, v) {
    var qs = arr(d.questions), ph = arr(d.phrases);
    var h = header('speaking', v, d) + '<div class="grid lg:grid-cols-2 gap-5 items-start"><div class="space-y-4">';
    if (ph.length) h += '<section class="bg-white border border-slate-200 rounded-2xl p-5"><h3 class="font-bold mb-2">Полезные фразы</h3><ul class="space-y-1.5 text-sm">' + ph.map(function (p) { return '<li class="flex gap-2 items-start"><button type="button" class="text-base" data-say="' + esc(p) + '" aria-label="Озвучить">🔊</button><span>' + esc(p) + '</span></li>'; }).join('') + '</ul></section>';
    h += '<section class="bg-white border border-slate-200 rounded-2xl p-5"><h3 class="font-bold mb-2">' + esc(d.head || 'Вопросы') + '</h3><ol class="list-decimal pl-5 text-sm space-y-1.5">' + qs.map(function (q) { return '<li>' + esc(q) + '</li>'; }).join('') + '</ol>' +
      (d.homework ? '<p class="text-xs text-slate-500 mt-3"><b>Домашнее задание:</b> ' + esc(d.homework) + '</p>' : '') + '</section></div>';
    h += '<section class="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 lg:sticky lg:top-20"><h3 class="font-bold">🎤 Тренажёр ответа</h3>' +
      '<div><label class="lbl" for="spSelect">Вопрос</label><select id="spSelect" class="inp">' + qs.map(function (q, i) { return '<option value="' + i + '">' + esc((i + 1) + '. ' + q.slice(0, 70)) + '</option>'; }).join('') + '</select></div>' +
      '<p id="spQuestion" class="text-sm bg-slate-50 border border-slate-200 rounded-xl p-3"></p>' +
      '<textarea id="spText" class="inp !min-h-[160px] leading-relaxed" placeholder="Говорите в микрофон или печатайте ответ на английском…" maxlength="5000"></textarea>' +
      '<div class="flex flex-wrap items-center justify-between gap-2"><span id="spCount" class="text-sm font-semibold">0 слов</span><div class="flex gap-2"><button type="button" id="spMic" class="btn btn-ghost">🎙 Запись</button><button type="button" id="spAi" class="btn btn-primary">🤖 Оценить ИИ</button></div></div>' +
      '<p id="spHint" class="text-[11px] text-slate-400"></p><div id="spEval"></div></section></div>';
    return { html: h, qs: qs };
  }
  function wireSpeaking(root, skill, v, d, st, qs) {
    var sel = $('spSelect'), ta = $('spText'), cnt = $('spCount'), out = $('spEval'), hint = $('spHint'), mic = $('spMic');
    var lv = lvlOf(d), min = (lv === 'A1' || lv === 'A2') ? 15 : (lv === 'B1' || lv === 'B2' ? 30 : 50), conf = null, rec = null, base = '';
    root.querySelectorAll('[data-say]').forEach(function (b) { b.addEventListener('click', function () { say(b.getAttribute('data-say'), 'f'); }); });
    function key() { return 'q' + (parseInt(sel.value, 10) || 0); }
    function upd() { var c = wordCount(ta.value); cnt.textContent = c + ' слов (цель ≥ ' + min + ')'; cnt.className = 'text-sm font-semibold ' + (c >= min ? 'text-emerald-600' : 'text-slate-600'); }
    function load() {
      $('spQuestion').textContent = qs[parseInt(sel.value, 10) || 0] || '';
      ta.value = st.d[key()] || ''; conf = null;
      out.innerHTML = st.ev[key()] ? window.renderAiEvaluationCard(st.ev[key()]) : ''; upd();
    }
    sel.addEventListener('change', function () { if (rec && rec.isActive()) rec.stop(); load(); });
    ta.addEventListener('input', function () { st.d[key()] = ta.value; upd(); IELTS.touch(skill, v); });
    rec = IELTS.audio.createRecognizer({
      onText: function (fin, interim, c) { ta.value = (base ? base + ' ' : '') + fin + (interim ? ' ' + interim : ''); conf = c; st.d[key()] = ta.value; upd(); },
      onState: function (on) { mic.textContent = on ? '⏹ Остановить' : '🎙 Запись'; mic.classList.toggle('btn-primary', on); mic.classList.toggle('btn-ghost', !on); if (!on) IELTS.touch(skill, v); },
      onError: function (m) { IELTS.toast(m, true); }
    });
    hint.textContent = rec ? 'Распознавание речи (английский) работает в Chrome/Edge. Текст появится в поле — его можно поправить.' : 'Ваш браузер не поддерживает распознавание речи — печатайте ответ вручную (лучше Chrome или Edge).';
    mic.addEventListener('click', function () {
      if (!rec) return IELTS.toast('Распознавание речи недоступно в этом браузере.', true);
      if (rec.isActive()) rec.stop(); else { base = ta.value.trim(); rec.start(''); }
    });
    $('spAi').addEventListener('click', function () {
      var q = qs[parseInt(sel.value, 10) || 0] || '';
      aiRunner(this, skill, v, st, key(), out, 'sp', d.title + ' — вопрос ' + ((parseInt(sel.value, 10) || 0) + 1), q, ta.value, min, { keywords: keywordsOf(d.title + ' ' + q), confidence: conf == null ? undefined : conf });
    });
    load();
  }

  /* ---------- Grammar ---------- */
  function renderGrammar(d, v) {
    var qs = [], quiz = arr(d.quiz);
    var h = header('grammar', v, d) + '<div class="grid lg:grid-cols-2 gap-5 items-start"><div class="space-y-4">';
    h += '<section class="bg-white border border-slate-200 rounded-2xl p-5"><h3 class="font-bold mb-2">Правило</h3><ul class="list-disc pl-5 text-sm space-y-1.5 leading-relaxed">' + arr(d.rules).map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul></section>';
    if (arr(d.forms).length) h += '<section class="bg-white border border-slate-200 rounded-2xl p-5"><h3 class="font-bold mb-2">Формулы</h3><div class="space-y-1.5">' + arr(d.forms).map(function (f) { return '<div class="rounded-lg bg-indigo-50 border-l-4 border-indigo-500 px-3 py-1.5 text-sm font-mono">' + esc(f) + '</div>'; }).join('') + '</div></section>';
    if (arr(d.ex).length) h += '<section class="bg-white border border-slate-200 rounded-2xl p-5"><h3 class="font-bold mb-2">Примеры</h3><ul class="space-y-1.5 text-sm">' + arr(d.ex).map(function (x) { return '<li class="flex gap-2 items-start"><button type="button" class="text-base" data-say="' + esc(x) + '" aria-label="Озвучить">🔊</button><span>' + esc(x) + '</span></li>'; }).join('') + '</ul></section>';
    if (arr(d.notes).length) h += '<section class="rounded-2xl p-4 bg-amber-50 border border-amber-200 text-sm">' + arr(d.notes).map(function (n) { return '<p>💡 ' + esc(n) + '</p>'; }).join('') + '</section>';
    h += '</div><section class="bg-white border border-slate-200 rounded-2xl p-5 scroll-y space-y-4" id="grQuestions"><div><h4 class="font-bold">Упражнения</h4><p class="text-xs text-slate-500 mb-3">Вставьте нужную форму. Если пропусков два, запишите оба слова через пробел.</p>';
    quiz.forEach(function (q, i) {
      var k = 'q' + i; qs.push({ k: k, a: arr(q.a), show: arr(q.a)[0] });
      h += '<div class="mb-3 text-sm"><div class="flex gap-2"><span class="font-bold w-6">' + (i + 1) + '</span><span class="flex-1">' + esc(q.q) + '</span></div><input class="gap !w-full mt-1 !text-left" data-k="' + k + '" autocomplete="off" spellcheck="false" aria-label="Ответ ' + (i + 1) + '">' + fbRows(k) + '</div>';
    });
    h += '</div><div class="flex flex-wrap gap-2 sticky bottom-0 bg-white pt-3 border-t border-slate-100"><button type="button" id="grCheck" class="btn btn-primary">Проверить</button><button type="button" id="grReset" class="btn btn-ghost">Сбросить</button></div><div id="grResult"></div></section></div>';
    return { html: h, qs: qs };
  }

  /* ---------- Карточки: Vocabulary и IELTS Prep ---------- */
  function entriesOf(skill, d) {
    if (skill === 'vocabulary') return arr(d.words).map(function (w) { return { f: w[0], b: w[1], x: '' }; });
    return arr(d.cards).map(function (c) { return { f: c[0], b: c[1], x: c[2] || '' }; });
  }
  function renderCards(skill, d, v, st) {
    var items = entriesOf(skill, d);
    var h = header(skill, v, d) + '<div class="max-w-3xl mx-auto space-y-4"><div class="flex flex-wrap items-center justify-between gap-2"><div class="flex gap-1 rounded-xl bg-slate-100 p-1 text-sm font-semibold" id="cdModes"><button type="button" data-mode="flash" class="px-3 py-1.5 rounded-lg">Карточки</button><button type="button" data-mode="list" class="px-3 py-1.5 rounded-lg">Список</button><button type="button" data-mode="quiz" class="px-3 py-1.5 rounded-lg">Тест</button></div><span class="text-xs text-slate-500" id="cdInfo"></span></div><div id="cdBody"></div></div>';
    return { html: h, items: items };
  }
  function wireCards(root, skill, v, d, st, items) {
    var mode = 'flash', idx = 0, order = items.map(function (_, i) { return i; }), quizState = null;
    st.k = st.k || {};
    var body = $('cdBody'), info = $('cdInfo');
    function setModes() { root.querySelectorAll('#cdModes button').forEach(function (b) { var on = b.getAttribute('data-mode') === mode; b.className = 'px-3 py-1.5 rounded-lg ' + (on ? 'bg-white shadow-sm' : 'text-slate-500'); }); }
    function knownCount() { return Object.keys(st.k).length; }
    function flash() {
      var it = items[order[idx]], k = order[idx];
      info.textContent = 'Карточка ' + (idx + 1) + ' из ' + items.length + ' · выучено ' + knownCount();
      body.innerHTML = '<div class="flip" id="cdFlip"><div class="flip-in cursor-pointer"><div class="face front border border-slate-200"><div class="text-xs text-slate-400 mb-2">English</div><div class="text-2xl font-extrabold leading-snug">' + esc(it.f) + '</div><button type="button" class="btn btn-ghost mt-4" id="cdSay">🔊 Произношение</button><div class="text-xs text-slate-400 mt-4">нажмите на карточку, чтобы перевернуть</div></div>' +
        '<div class="face back border border-indigo-200"><div class="text-xs text-slate-400 mb-2">Перевод</div><div class="text-xl font-bold leading-snug">' + esc(it.b) + '</div>' + (it.x ? '<p class="text-sm text-slate-600 mt-3 italic">' + esc(it.x) + '</p>' : '') + '</div></div></div>' +
        '<div class="flex flex-wrap items-center justify-between gap-2 mt-4"><button type="button" class="btn btn-ghost" id="cdPrev">← Назад</button><div class="flex gap-2"><button type="button" class="btn btn-ghost" id="cdAgain">Ещё раз</button><button type="button" class="btn btn-primary" id="cdKnow">' + (st.k[k] ? '✓ Выучено' : 'Знаю') + '</button></div><button type="button" class="btn btn-ghost" id="cdNext">Дальше →</button></div>' +
        '<div class="text-center mt-3"><button type="button" class="btn btn-ghost" id="cdShuffle">🔀 Перемешать</button></div>';
      var fl = $('cdFlip');
      fl.addEventListener('click', function (e) { if (e.target.closest('#cdSay')) return; fl.classList.toggle('on'); });
      $('cdSay').addEventListener('click', function (e) { e.stopPropagation(); say(it.f, 'f'); });
      $('cdPrev').addEventListener('click', function () { idx = (idx - 1 + items.length) % items.length; flash(); });
      $('cdNext').addEventListener('click', function () { idx = (idx + 1) % items.length; flash(); });
      $('cdAgain').addEventListener('click', function () { delete st.k[k]; IELTS.touch(skill, v); idx = (idx + 1) % items.length; flash(); });
      $('cdKnow').addEventListener('click', function () { st.k[k] = 1; IELTS.touch(skill, v); idx = (idx + 1) % items.length; flash(); });
      $('cdShuffle').addEventListener('click', function () { order = shuffle(order); idx = 0; flash(); });
    }
    function list() {
      info.textContent = items.length + ' позиций · выучено ' + knownCount();
      body.innerHTML = '<div class="bg-white border border-slate-200 rounded-2xl overflow-hidden"><table class="w-full text-sm"><tbody>' + items.map(function (it, i) {
        return '<tr class="border-b border-slate-100 last:border-0 ' + (st.k[i] ? 'bg-emerald-50/50' : '') + '"><td class="p-2.5 w-10 text-center"><button type="button" data-say="' + esc(it.f) + '" aria-label="Озвучить">🔊</button></td><td class="p-2.5 font-semibold">' + esc(it.f) + '</td><td class="p-2.5 text-slate-600">' + esc(it.b) + (it.x ? '<div class="text-xs text-slate-400 italic mt-0.5">' + esc(it.x) + '</div>' : '') + '</td></tr>';
      }).join('') + '</tbody></table></div>';
      body.querySelectorAll('[data-say]').forEach(function (b) { b.addEventListener('click', function () { say(b.getAttribute('data-say'), 'f'); }); });
    }
    function quiz() {
      var n = Math.min(10, items.length), pool = shuffle(items.map(function (_, i) { return i; })).slice(0, n);
      quizState = pool.map(function (i) {
        var wrong = shuffle(items.map(function (_, j) { return j; }).filter(function (j) { return j !== i && items[j].b !== items[i].b; })).slice(0, 3);
        var opts = shuffle([i].concat(wrong));
        return { i: i, opts: opts };
      });
      info.textContent = 'Тест: ' + n + ' вопросов';
      body.innerHTML = '<div class="space-y-4" id="cdQuiz">' + quizState.map(function (q, qi) {
        return '<div class="bg-white border border-slate-200 rounded-2xl p-4" data-q="' + qi + '"><p class="font-semibold mb-2">' + (qi + 1) + '. ' + esc(items[q.i].f) + ' <button type="button" class="text-base" data-say="' + esc(items[q.i].f) + '" aria-label="Озвучить">🔊</button></p>' +
          q.opts.map(function (o) { return '<label class="flex gap-2 items-start text-sm py-1 cursor-pointer"><input type="radio" name="cq' + qi + '" value="' + o + '" class="mt-1"><span>' + esc(items[o].b) + '</span></label>'; }).join('') + '<div class="text-xs mt-1" data-qfb></div></div>';
      }).join('') + '</div><div class="flex gap-2 mt-4"><button type="button" class="btn btn-primary" id="cdCheck">Проверить</button><button type="button" class="btn btn-ghost" id="cdNew">Новый тест</button></div><div id="cdRes" class="mt-3"></div>';
      body.querySelectorAll('[data-say]').forEach(function (b) { b.addEventListener('click', function () { say(b.getAttribute('data-say'), 'f'); }); });
      $('cdNew').addEventListener('click', quiz);
      $('cdCheck').addEventListener('click', function () {
        var right = 0;
        quizState.forEach(function (q, qi) {
          var box = body.querySelector('[data-q="' + qi + '"]'), sel = box.querySelector('input:checked'), ok = sel && parseInt(sel.value, 10) === q.i;
          if (ok) { right++; if (!st.k[q.i]) st.k[q.i] = 1; }
          var fb = box.querySelector('[data-qfb]'); fb.className = 'text-xs mt-1 rounded-lg px-2.5 py-1.5 ' + (ok ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800');
          fb.innerHTML = ok ? '✅ Верно' : '❌ Правильно: <b>' + esc(items[q.i].b) + '</b>';
        });
        st.a._score = right + '/' + quizState.length; IELTS.touch(skill, v);
        $('cdRes').innerHTML = resultBanner({ right: right, total: quizState.length, score: st.a._score });
      });
    }
    function show() {
      setModes();
      if (mode === 'flash') flash(); else if (mode === 'list') list(); else quiz();
    }
    root.querySelectorAll('#cdModes button').forEach(function (b) { b.addEventListener('click', function () { mode = b.getAttribute('data-mode'); show(); }); });
    show();
  }

  /* ---------- сборка экрана задания ---------- */
  function renderTest(skill, v) {
    if (!IELTS.verifySessionIntegrity()) return;
    var d = curList(skill)[v - 1];
    var root = $('testWorkspace');
    if (!d) { root.innerHTML = '<p class="text-sm text-slate-500">Задание не найдено.</p><button type="button" class="btn btn-ghost mt-3" data-nav="course" data-skill="' + skill + '">← К списку</button>'; return; }
    var st = IELTS.vstate(skill, v);
    var built;
    if (skill === 'reading') built = renderReading(d, v);
    else if (skill === 'listening') built = renderListening(d, v);
    else if (skill === 'writing') built = renderWriting(d, v);
    else if (skill === 'speaking') built = renderSpeaking(d, v);
    else if (skill === 'grammar') built = renderGrammar(d, v);
    else built = renderCards(skill, d, v, st);
    root.innerHTML = built.html;
    IELTS.touch(skill, v);
    if (skill === 'reading') wireQuiz(root, skill, v, built.qs, st, 'rd');
    else if (skill === 'listening') { wireQuiz(root, skill, v, built.qs, st, 'ls'); wireListening(root, d); }
    else if (skill === 'grammar') { wireQuiz(root, skill, v, built.qs, st, 'gr'); root.querySelectorAll('[data-say]').forEach(function (b) { b.addEventListener('click', function () { say(b.getAttribute('data-say'), 'f'); }); }); }
    else if (skill === 'writing') wireWriting(root, skill, v, d, st);
    else if (skill === 'speaking') wireSpeaking(root, skill, v, d, st, built.qs);
    else wireCards(root, skill, v, d, st, built.items);
    window.scrollTo(0, 0);
  }

  IELTS.ui = { loadSkill: loadSkill, renderCourse: renderCourse, renderTest: renderTest };
  IELTS.renderTest = renderTest;
})();
