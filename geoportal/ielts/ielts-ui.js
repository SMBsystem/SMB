// Интерфейс курса: список вариантов и рабочие пространства Reading / Listening / Writing / Speaking.
(function () {
  'use strict';
  var IELTS = window.IELTS;
  var esc = IELTS.escapeHtml;
  var $ = IELTS.$;
  var SKILL_META = {
    reading: { label: 'Reading', icon: '📖', color: 'indigo' },
    listening: { label: 'Listening', icon: '🎧', color: 'sky' },
    writing: { label: 'Writing', icon: '✍️', color: 'emerald' },
    speaking: { label: 'Speaking', icon: '🎤', color: 'amber' }
  };
  var loading = {};

  /* ---------- загрузка контента (только для подтверждённой сессии) ---------- */
  function loadScript(file) {
    if (!IELTS.verifySessionIntegrity()) return Promise.reject(new Error('no session'));
    if (loading[file]) return loading[file];
    loading[file] = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = 'data/' + file + '.js?v=2';
      s.onload = function () { resolve(); };
      s.onerror = function () { delete loading[file]; reject(new Error('load error')); };
      document.head.appendChild(s);
    });
    return loading[file];
  }
  function chunkOf(id) { return ('0' + Math.ceil(id / 10)).slice(-2); }
  // Загрузка данных темы: ielts — файл раздела; names — индекс + аяты + блок из 10 имён.
  function loadSkill(topic, skill, variant) {
    if (!IELTS.NIDX && !Object.keys(IELTS.DATA).length && !Object.keys(IELTS.NDATA).length) loading = {};
    if (topic === 'names') {
      var jobs = [loadScript('names-index'), loadScript('names-verses')];
      return Promise.all(jobs).then(function () {
        if (!variant) return null;
        var c = chunkOf(variant);
        if (variant > (IELTS.NREADY || 0)) return null;
        return Promise.all([loadScript('names-r' + c), loadScript('names-l' + c)]);
      });
    }
    if (IELTS.DATA[skill]) return Promise.resolve(IELTS.DATA[skill]);
    return loadScript(skill).then(function () { if (!IELTS.DATA[skill]) throw new Error('empty data'); return IELTS.DATA[skill]; });
  }
  function curTopic() { return IELTS.getRoute().topic || 'ielts'; }
  /* ---------- экран 2: список вариантов ---------- */
  function variantCard(skill, i, title, spec, takeaway, ready, topic) {
    var st = IELTS.vstate(skill, i);
    var started = Object.keys(st.a || {}).length || Object.keys(st.d || {}).length;
    var evals = Object.keys(st.ev || {}).length;
    return '<article class="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col gap-3 ' + (ready ? 'hover:border-indigo-300' : 'opacity-60') + ' transition">' +
      '<div class="flex items-center justify-between"><span class="text-xs font-bold text-indigo-600">Вариант ' + i + '</span>' +
      (started ? '<span class="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">' + (st.a && st.a._score ? 'Результат ' + esc(st.a._score) : 'Начато') + (evals ? ' · ИИ ×' + evals : '') + '</span>' : '') + '</div>' +
      title + '<p class="text-xs text-slate-500">' + esc(spec) + '</p>' +
      (takeaway ? '<p class="text-sm text-slate-600 leading-relaxed"><b class="text-slate-800">Польза:</b> ' + esc(takeaway) + '</p>' : '') +
      (ready ? '<button type="button" data-open-test="' + i + '" data-skill="' + skill + '" data-topic="' + topic + '" class="btn btn-primary mt-auto">' + (started ? 'Продолжить' : 'Начать') + ' →</button>' : '<span class="mt-auto text-xs font-semibold text-slate-400">Скоро</span>') + '</article>';
  }
  function renderCourse(skill) {
    if (!IELTS.verifySessionIntegrity()) return;
    var topic = curTopic();
    var count = IELTS.TOPICS[topic].count;
    $('courseTitle').textContent = topic === 'names' ? '99 имён Аллаха' : 'Как готовиться к IELTS';
    $('variantSearchWrap').classList.toggle('hidden', topic !== 'names');
    var tabs = IELTS.SKILLS.map(function (s) {
      var m = SKILL_META[s];
      return '<button type="button" role="tab" aria-selected="' + (s === skill) + '" data-open-skill="' + s + '" data-topic="' + topic + '" class="px-4 py-2.5 text-sm font-semibold border-b-2 whitespace-nowrap ' + (s === skill ? 'tab-on' : 'border-transparent text-slate-500 hover:text-slate-800') + '">' + m.icon + ' ' + m.label + ' <span class="text-xs font-normal text-slate-400">(' + count + ' вариантов)</span></button>';
    }).join('');
    $('skillTabs').innerHTML = tabs;
    if (topic === 'names') return renderNamesList(skill);
    var list = IELTS.DATA[skill] || [];
    $('variantsList').innerHTML = list.map(function (d, i) {
      return variantCard(skill, i + 1, '<h3 class="font-bold leading-snug">' + esc(d.title) + '</h3>', d.spec, d.takeaway, true, 'ielts');
    }).join('');
  }
  function renderNamesList(skill) {
    var q = ($('variantSearch').value || '').trim().toLowerCase();
    var ready = IELTS.NREADY || 0;
    var cards = (IELTS.NIDX || []).filter(function (n) {
      return !q || [n.id, n.tr, n.en, n.ru, n.kk, n.ar].join(' ').toLowerCase().indexOf(q) >= 0;
    }).map(function (n) {
      var title = '<div class="text-center"><div class="ar text-3xl" lang="ar">' + esc(n.ar) + '</div><h3 class="font-bold">' + esc(n.tr) + '</h3><p class="text-xs text-slate-500">' + esc(n.ru) + ' · ' + esc(n.kk) + '</p></div>';
      return variantCard(skill, n.id, title, SKILL_META[skill].label + ' · ' + n.en, '', n.id <= ready, 'names');
    });
    $('variantsList').innerHTML = cards.join('') || '<p class="text-sm text-slate-500 col-span-full">Ничего не найдено.</p>';
  }
  $('variantSearch').addEventListener('input', function () { if (IELTS.verifySessionIntegrity() && curTopic() === 'names') renderNamesList(IELTS.getRoute().skill || 'reading'); });

  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-open-skill]');
    if (t) return IELTS.navigateTo({ screen: 'course', topic: t.getAttribute('data-topic') || 'ielts', skill: t.getAttribute('data-open-skill') });
    t = e.target.closest && e.target.closest('[data-open-test]');
    if (t) return IELTS.navigateTo({ screen: 'test', topic: t.getAttribute('data-topic') || 'ielts', skill: t.getAttribute('data-skill'), variant: t.getAttribute('data-open-test') });
  });
  /* ---------- общие помощники ---------- */
  function norm(s) {
    return String(s == null ? '' : s).toLowerCase().replace(/[£$€]/g, '').replace(/(\d),(\d{3})/g, '$1$2').replace(/(\d)(st|nd|rd|th)\b/g, '$1')
      .replace(/[.,;:!?"'’()]/g, '').replace(/\s+/g, ' ').trim();
  }
  function wordCount(t) { return (String(t || '').trim().match(/[A-Za-z0-9'’-]+/g) || []).length; }
  function header(skill, v, d) {
    var m = SKILL_META[skill];
    var topic = curTopic(), count = IELTS.TOPICS[topic].count, ready = topic === 'names' ? (IELTS.NREADY || 0) : count;
    var prev = v > 1 ? '<button type="button" class="btn btn-ghost" data-open-test="' + (v - 1) + '" data-skill="' + skill + '" data-topic="' + topic + '">←</button>' : '';
    var next = v < ready ? '<button type="button" class="btn btn-ghost" data-open-test="' + (v + 1) + '" data-skill="' + skill + '" data-topic="' + topic + '">→</button>' : '';
    return '<div class="flex flex-wrap items-center justify-between gap-3 mb-5">' +
      '<button type="button" class="btn btn-ghost" data-nav="course" data-skill="' + skill + '" data-topic="' + topic + '">← ' + m.label + '</button>' +
      '<div class="text-center flex-1 min-w-[200px]"><div class="text-xs font-bold text-indigo-600">' + m.icon + ' ' + m.label + ' · вариант ' + v + ' из ' + count + '</div><h2 class="font-bold text-lg leading-tight">' + esc(d.title) + '</h2></div>' +
      '<div class="flex gap-2">' + prev + next + '</div></div>';
  }

  // Универсальная проверка: qs = [{k, a:[допустимые ответы], e:'объяснение', type}]
  function gradeQuestions(root, qs, st) {
    var right = 0;
    qs.forEach(function (q) {
      var els = root.querySelectorAll('[data-k="' + q.k + '"]');
      var val = '';
      if (els.length && els[0].type === 'radio') { els.forEach(function (r) { if (r.checked) val = r.value; }); }
      else if (els.length) val = els[0].value;
      var ok = q.a.some(function (a) { return norm(a) === norm(val); });
      if (ok) right++;
      els.forEach(function (el) {
        if (el.type === 'radio') return;
        el.classList.toggle('ok', ok); el.classList.toggle('bad', !ok);
      });
      var fb = root.querySelector('[data-fb="' + q.k + '"]');
      if (fb) {
        fb.classList.remove('hidden');
        fb.className = 'mt-1 text-xs leading-relaxed rounded-lg px-2.5 py-1.5 ' + (ok ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800');
        fb.innerHTML = (ok ? '✅ Верно. ' : '❌ ' + (norm(val) ? 'Ваш ответ: «' + esc(val) + '». ' : 'Нет ответа. ') + 'Правильно: <b>' + esc(q.a[0]) + '</b>. ') + esc(q.e || '');
      }
    });
    var score = right + '/' + qs.length;
    st.a._score = score; st.a._checked = 1;
    return { right: right, total: qs.length, score: score };
  }
  function resultBanner(g) {
    var pct = Math.round(100 * g.right / g.total);
    return '<div class="p-3 rounded-xl border ' + (pct >= 70 ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-amber-50 border-amber-200 text-amber-800') + ' text-sm font-semibold">Результат: ' + g.score + ' (' + pct + '%). Разберите объяснения под каждым вопросом.</div>';
  }

  // автосохранение полей с data-k
  function bindAutosave(root, skill, v) {
    var st = IELTS.vstate(skill, v);
    function save(el) {
      var k = el.getAttribute('data-k');
      if (!k) return;
      if (el.type === 'radio') { if (el.checked) st.a[k] = el.value; }
      else st.a[k] = el.value;
      IELTS.touch(skill, v);
    }
    root.oninput = root.onchange = function (e) { save(e.target); };
    // восстановление
    root.querySelectorAll('[data-k]').forEach(function (el) {
      var val = st.a[el.getAttribute('data-k')];
      if (val == null) return;
      if (el.type === 'radio') el.checked = el.value === val; else el.value = val;
    });
  }

  /* ---------- Reading ---------- */
  function renderReading(d, v) {
    var qs = [];
    var h = header('reading', v, d) + '<div class="grid lg:grid-cols-2 gap-5"><div class="bg-white border border-slate-200 rounded-2xl p-5 scroll-y passage"><h3 class="font-bold text-lg mb-1">' + esc(d.passage.heading) + '</h3><p class="text-xs text-slate-400 mb-4">' + esc(d.spec) + '</p>' +
      d.passage.paras.map(function (p) { return '<p><b class="inline-block w-6 text-indigo-600">' + p.l + '</b>' + esc(p.t) + '</p>'; }).join('') + '</div>';
    h += '<div class="bg-white border border-slate-200 rounded-2xl p-5 scroll-y space-y-6" id="rdQuestions">';
    var n = 1, letters = d.passage.paras.map(function (p) { return p.l; }), lastL = letters[letters.length - 1];
    h += '<div><h4 class="font-bold">Questions 1–' + d.match.length + '</h4><p class="text-xs text-slate-500 mb-3">Which paragraph (A–' + lastL + ') contains the following information? You may use any letter more than once.</p>';
    d.match.forEach(function (q, i) {
      var k = 'm' + i; qs.push({ k: k, a: [q.a], e: q.e });
      h += '<div class="mb-3"><div class="flex gap-2 items-start"><span class="font-bold text-sm w-6">' + (n++) + '</span><span class="flex-1 text-sm">' + esc(q.q) + '</span><select class="inp !w-20" data-k="' + k + '"><option value=""></option>' + letters.map(function (c) { return '<option>' + c + '</option>'; }).join('') + '</select></div><div data-fb="' + k + '" class="hidden"></div></div>';
    });
    h += '</div><div><h4 class="font-bold">Questions ' + (d.match.length + 1) + '–' + (d.match.length + d.tfng.length) + '</h4><p class="text-xs text-slate-500 mb-3">Do the following statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.</p>';
    d.tfng.forEach(function (q, i) {
      var k = 't' + i; qs.push({ k: k, a: [q.a], e: q.e });
      h += '<div class="mb-3"><div class="flex gap-2 items-start"><span class="font-bold text-sm w-6">' + (n++) + '</span><span class="flex-1 text-sm">' + esc(q.q) + '</span><select class="inp !w-36" data-k="' + k + '"><option value=""></option><option>TRUE</option><option>FALSE</option><option>NOT GIVEN</option></select></div><div data-fb="' + k + '" class="hidden"></div></div>';
    });
    h += '</div><div><h4 class="font-bold">Questions ' + (d.match.length + d.tfng.length + 1) + '–' + (d.match.length + d.tfng.length + d.gaps.items.length) + '</h4><p class="text-xs text-slate-500 mb-3">Complete the summary. Choose ONE WORD ONLY from the passage for each answer.</p><p class="text-sm leading-8">' +
      esc(d.gaps.text).replace(/\{(\d+)\}/g, function (m, num) {
        var gi = parseInt(num, 10) - (d.match.length + d.tfng.length + 1); return '<span class="whitespace-nowrap font-bold text-xs text-slate-500">' + num + '</span> <input class="gap" data-k="g' + gi + '" autocomplete="off" spellcheck="false" aria-label="Answer ' + num + '">';
      }) + '</p>';
    d.gaps.items.forEach(function (it, i) { qs.push({ k: 'g' + i, a: it.a, e: it.e }); h += '<div data-fb="g' + i + '" class="hidden"></div>'; });
    h += '</div><div class="flex flex-wrap gap-2 items-center sticky bottom-0 bg-white pt-3 border-t border-slate-100"><button type="button" id="rdCheck" class="btn btn-primary">Проверить ответы</button><button type="button" id="rdReset" class="btn btn-ghost">Сбросить</button></div><div id="rdResult"></div></div></div>';
    return { html: h, qs: qs };
  }

  /* ---------- Listening ---------- */
  function renderListening(d, v) {
    var qs = [];
    var lines = IELTS.audio.parseScript(d.script);
    var h = header('listening', v, d) + '<div class="grid lg:grid-cols-2 gap-5">';
    h += '<div class="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 self-start"><h3 class="font-bold">Аудио</h3>' +
      '<p class="text-xs text-slate-500">' + esc(d.context) + '</p>' +
      '<div class="flex flex-wrap items-center gap-2"><button type="button" id="lsPlay" class="btn btn-primary">▶ Слушать</button><button type="button" id="lsStop" class="btn btn-ghost">■ Стоп</button>' +
      '<select id="lsSpeed" class="inp !w-28" aria-label="Скорость"><option value="0.9">0.9×</option><option value="1" selected>1.0×</option><option value="1.1">1.1×</option></select></div>' +
      '<label class="flex items-center gap-2 text-sm"><input type="checkbox" id="lsShow"> Показать транскрипт</label>' +
      '<div id="lsTranscript" class="hidden scroll-y !max-h-96 space-y-1.5 text-sm">' + lines.map(function (l, i) { return '<div data-line="' + i + '" class="p-2 rounded-lg"><b class="text-indigo-700">' + esc(l.speaker) + ':</b> ' + esc(l.text) + '</div>'; }).join('') + '</div>' +
      '<p class="text-[11px] text-slate-400">Голоса — синтез речи вашего браузера (лучше всего Edge/Chrome с «Natural» голосами). В настройках 🤖 можно включить OpenAI Neural TTS.</p></div>';
    h += '<div class="bg-white border border-slate-200 rounded-2xl p-5 scroll-y space-y-5" id="lsQuestions">';
    h += '<div><h4 class="font-bold">Questions 1–5</h4><p class="text-xs text-slate-500 mb-3">Complete the notes. Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.</p><div class="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-2.5"><div class="font-bold text-sm">' + esc(d.notesTitle) + '</div>';
    d.notes.forEach(function (q, i) {
      var k = 'n' + i; qs.push({ k: k, a: q.a, e: q.e });
      h += '<div class="text-sm leading-8">' + esc(q.pre) + ' <span class="font-bold text-xs text-slate-500">' + (i + 1) + '</span> <input class="gap" data-k="' + k + '" autocomplete="off" spellcheck="false" aria-label="Answer ' + (i + 1) + '"> ' + esc(q.post || '') + '<div data-fb="' + k + '" class="hidden"></div></div>';
    });
    h += '</div></div><div><h4 class="font-bold">Questions 6–8</h4><p class="text-xs text-slate-500 mb-3">Choose the correct letter A, B or C.</p>';
    d.mc.forEach(function (q, i) {
      var k = 'c' + i; qs.push({ k: k, a: [q.a], e: q.e });
      h += '<div class="mb-4"><p class="text-sm font-semibold mb-1.5">' + (6 + i) + '. ' + esc(q.q) + '</p>' +
        q.opts.map(function (o, j) { var L = 'ABC'[j]; return '<label class="flex gap-2 items-start text-sm py-0.5 cursor-pointer"><input type="radio" name="' + k + '" value="' + L + '" data-k="' + k + '" class="mt-1"><span><b>' + L + '</b> ' + esc(o) + '</span></label>'; }).join('') +
        '<div data-fb="' + k + '" class="hidden"></div></div>';
    });
    h += '</div><div class="flex flex-wrap gap-2 sticky bottom-0 bg-white pt-3 border-t border-slate-100"><button type="button" id="lsCheck" class="btn btn-primary">Проверить ответы</button><button type="button" id="lsReset" class="btn btn-ghost">Сбросить</button></div><div id="lsResult"></div></div></div>';
    return { html: h, qs: qs };
  }

  /* ---------- графики Writing Task 1 ---------- */
  function svgWrap(inner, w, h) { return '<svg viewBox="0 0 ' + w + ' ' + h + '" class="w-full max-w-2xl mx-auto" role="img" font-family="Inter, sans-serif">' + inner + '</svg>'; }
  var PAL = ['#4f46e5', '#10b981', '#f59e0b', '#ef4444'];
  function renderChart(c) {
    var cap = '<p class="text-xs font-semibold text-slate-600 text-center mb-2">' + esc(c.caption) + '</p>';
    if (c.type === 'table') {
      return cap + '<div class="overflow-x-auto"><table class="w-full text-sm border border-slate-200"><thead><tr class="bg-slate-100">' + c.head.map(function (x) { return '<th class="p-2 text-left border border-slate-200">' + esc(x) + '</th>'; }).join('') + '</tr></thead><tbody>' +
        c.rows.map(function (r) { return '<tr>' + r.map(function (x, i) { return '<td class="p-2 border border-slate-200' + (i ? '' : ' font-semibold') + '">' + esc(x) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
    }
    if (c.type === 'line' || c.type === 'bar') {
      var W = 620, H = 300, L = 50, R = 20, T = 20, B = 50, pw = W - L - R, ph = H - T - B;
      var max = c.ymax || 100, g = '';
      for (var i = 0; i <= 5; i++) { var yy = T + ph - ph * i / 5; g += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + yy + '" y2="' + yy + '" stroke="#e2e8f0"/><text x="' + (L - 6) + '" y="' + (yy + 4) + '" font-size="11" text-anchor="end" fill="#64748b">' + Math.round(max * i / 5) + '</text>'; }
      var labels = c.type === 'line' ? c.x : c.cats;
      var n = labels.length;
      labels.forEach(function (lb, i) { var x = c.type === 'line' ? L + pw * i / (n - 1) : L + pw * (i + 0.5) / n; g += '<text x="' + x + '" y="' + (H - B + 18) + '" font-size="11" text-anchor="middle" fill="#64748b">' + esc(lb) + '</text>'; });
      if (c.type === 'line') {
        c.series.forEach(function (s, si) {
          var pts = s.y.map(function (y, i) { return (L + pw * i / (n - 1)).toFixed(1) + ',' + (T + ph - ph * y / max).toFixed(1); });
          g += '<polyline fill="none" stroke="' + PAL[si] + '" stroke-width="2.5" points="' + pts.join(' ') + '"/>';
          s.y.forEach(function (y, i) { g += '<circle cx="' + (L + pw * i / (n - 1)) + '" cy="' + (T + ph - ph * y / max) + '" r="3.5" fill="' + PAL[si] + '"/>'; });
        });
      } else {
        var ns = c.series.length, bw = pw / n * 0.7 / ns;
        c.series.forEach(function (s, si) {
          s.v.forEach(function (val, i) {
            var x = L + pw * (i + 0.5) / n - (bw * ns) / 2 + si * bw, hh = ph * val / max;
            g += '<rect x="' + x + '" y="' + (T + ph - hh) + '" width="' + (bw - 2) + '" height="' + hh + '" fill="' + PAL[si] + '" rx="2"/><text x="' + (x + bw / 2 - 1) + '" y="' + (T + ph - hh - 4) + '" font-size="10" text-anchor="middle" fill="#334155">' + val + '</text>';
          });
        });
      }
      var legend = '<div class="flex flex-wrap justify-center gap-4 mt-2 text-xs">' + c.series.map(function (s, si) { return '<span><span class="inline-block w-3 h-3 rounded-sm align-middle mr-1" style="background:' + PAL[si] + '"></span>' + esc(s.name) + '</span>'; }).join('') + '</div>';
      return cap + svgWrap(g + '<text x="12" y="14" font-size="11" fill="#64748b">' + esc(c.unit || '') + '</text>', W, H) + legend;
    }
    if (c.type === 'process') {
      return cap + '<ol class="grid sm:grid-cols-2 gap-2">' + c.steps.map(function (s, i) { return '<li class="flex gap-2 items-start bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-sm"><span class="w-6 h-6 shrink-0 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">' + (i + 1) + '</span><span>' + esc(s) + '</span></li>'; }).join('') + '</ol>';
    }
    if (c.type === 'plan') {
      function plan(label, rooms) {
        var g = '<rect x="1" y="1" width="118" height="78" fill="#fff" stroke="#0f172a" stroke-width="1.5"/>';
        rooms.forEach(function (r) { g += '<rect x="' + r[0] + '" y="' + r[1] + '" width="' + r[2] + '" height="' + r[3] + '" fill="' + (r[5] || '#eef2ff') + '" stroke="#475569" stroke-width=".8"/><text x="' + (r[0] + r[2] / 2) + '" y="' + (r[1] + r[3] / 2 + 1.5) + '" font-size="4.2" text-anchor="middle" fill="#0f172a">' + esc(r[4]) + '</text>'; });
        return '<div><p class="text-center text-xs font-bold mb-1">' + label + '</p>' + '<svg viewBox="0 0 120 80" class="w-full border border-slate-200 rounded-lg bg-white" font-family="Inter, sans-serif">' + g + '</svg></div>';
      }
      return cap + '<div class="grid sm:grid-cols-2 gap-3">' + plan('2015', c.before) + plan('2026', c.after) + '</div>';
    }
    return '';
  }

  // Текстовое представление данных диаграммы — для проверки соответствия заданию.
  function chartText(c) {
    if (c.type === 'table') return c.caption + ' ' + c.head.join(' ') + ' ' + c.rows.map(function (r) { return r.join(' '); }).join(' ');
    if (c.type === 'line') return c.caption + ' ' + c.x.join(' ') + ' ' + c.series.map(function (s) { return s.name + ' ' + s.y.join(' '); }).join(' ');
    if (c.type === 'bar') return c.caption + ' ' + c.cats.join(' ') + ' ' + c.series.map(function (s) { return s.name + ' ' + s.v.join(' '); }).join(' ');
    if (c.type === 'process') return c.caption + ' ' + c.steps.join(' ');
    if (c.type === 'plan') return c.caption + ' 2015 2026 ' + c.before.concat(c.after).map(function (r) { return r[4]; }).join(' ');
    return c.caption || '';
  }

  /* ---------- Writing ---------- */
  function writingTaskHtml(d, taskNo, st) {
    var t = taskNo === 1 ? d.task1 : d.task2;
    var key = 'w' + taskNo;
    var min = taskNo === 1 ? 150 : 250, mins = taskNo === 1 ? 20 : 40;
    var h = '<section class="bg-white border border-slate-200 rounded-2xl p-5 space-y-4" data-task="' + taskNo + '">' +
      '<div class="flex items-center justify-between flex-wrap gap-2"><h3 class="font-bold">Writing Task ' + taskNo + '</h3><span class="text-xs text-slate-500">' + mins + ' минут · минимум ' + min + ' слов</span></div>' +
      '<div class="rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm leading-relaxed">' + esc(t.prompt) + '</div>';
    if (taskNo === 1) h += '<div class="rounded-xl border border-slate-200 p-4">' + renderChart(d.task1.chart) + '</div>';
    h += '<div><textarea class="inp !min-h-[240px] leading-relaxed" data-draft="' + key + '" placeholder="Напишите ответ здесь…" spellcheck="true" maxlength="6000"></textarea>' +
      '<div class="flex flex-wrap items-center justify-between gap-2 mt-2"><span class="text-sm font-semibold" data-count="' + key + '">0 слов</span>' +
      '<div class="flex gap-2"><button type="button" class="btn btn-primary" data-ai="' + key + '">🤖 Проверить ИИ</button><button type="button" class="btn btn-ghost" data-model="' + key + '">Эталон Band 9.0</button></div></div></div>' +
      '<div data-eval="' + key + '"></div>' +
      '<div class="hidden rounded-xl border border-emerald-200 bg-emerald-50 p-4 space-y-3" data-modelbox="' + key + '"><h4 class="font-bold text-emerald-800">Эталонный ответ Band 9.0</h4>' +
      t.model.split(/\n\n/).map(function (p) { return '<p class="text-sm leading-relaxed">' + esc(p) + '</p>'; }).join('') +
      '<h4 class="font-bold text-emerald-800 pt-2">Разбор по критериям</h4><ul class="list-disc pl-5 text-sm space-y-1">' + t.analysis.map(function (a) { return '<li>' + esc(a) + '</li>'; }).join('') + '</ul></div></section>';
    return h;
  }
  function renderWriting(d, v) {
    var two = !!d.task1;
    return { html: header('writing', v, d) + '<div class="grid ' + (two ? 'lg:grid-cols-2' : 'max-w-3xl mx-auto') + ' gap-5 items-start">' + (two ? writingTaskHtml(d, 1) : '') + writingTaskHtml(d, 2) + '</div>', qs: [] };
  }

  /* ---------- Speaking ---------- */
  function speakingItems(d) {
    var items = [];
    d.part1.forEach(function (q, i) { items.push({ id: 'p1_' + i, label: 'Part 1 · Q' + (i + 1), q: q.q, min: 25 }); });
    items.push({ id: 'p2', label: 'Part 2 · Cue Card', q: d.part2.topic + ' ' + d.part2.bullets.join(' '), min: 150 });
    d.part3.forEach(function (q, i) { items.push({ id: 'p3_' + i, label: 'Part 3 · Q' + (i + 1), q: q.q, min: 55 }); });
    return items;
  }
  function renderSpeaking(d, v) {
    var items = speakingItems(d);
    var h = header('speaking', v, d) + '<div class="grid lg:grid-cols-2 gap-5 items-start"><div class="space-y-5">';
    h += '<section class="bg-white border border-slate-200 rounded-2xl p-5"><h3 class="font-bold mb-3">Part 1 · Interview</h3><div class="space-y-3">' +
      d.part1.map(function (q, i) { return '<details class="rounded-xl border border-slate-200 p-3"><summary class="cursor-pointer font-semibold text-sm">' + (i + 1) + '. ' + esc(q.q) + '</summary><p class="text-sm text-slate-700 mt-2 leading-relaxed"><b class="text-emerald-700">Band 9.0:</b> ' + esc(q.a) + '</p></details>'; }).join('') + '</div></section>';
    h += '<section class="bg-white border border-slate-200 rounded-2xl p-5 space-y-4"><h3 class="font-bold">Part 2 · Cue Card</h3>' +
      '<div class="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm"><p class="font-bold">' + esc(d.part2.topic) + '</p><p class="mt-2">You should say:</p><ul class="list-disc pl-5 space-y-0.5">' + d.part2.bullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul><p class="mt-2 text-xs text-amber-800">1 минута на подготовку · говорите 1–2 минуты</p></div>' +
      '<div><p class="text-xs font-bold text-slate-600 mb-2">План подготовки за 1 минуту (4 квадранта)</p><div class="grid grid-cols-2 gap-2">' + d.part2.plan.map(function (p) { return '<div class="rounded-xl border border-slate-200 p-2.5 bg-slate-50"><div class="text-[11px] font-bold text-indigo-700">' + esc(p.h) + '</div><div class="text-xs text-slate-700 mt-0.5 leading-snug">' + esc(p.t) + '</div></div>'; }).join('') + '</div></div>' +
      '<div class="flex flex-wrap gap-2"><button type="button" class="btn btn-ghost" id="spModelToggle">Показать эталонный монолог</button><button type="button" class="btn btn-ghost" id="spModelPlay">🔊 Озвучить</button><button type="button" class="btn btn-ghost" id="spModelStop">■</button></div>' +
      '<div id="spModelBox" class="hidden rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-relaxed"><b class="text-emerald-800">Band 9.0 · ~' + wordCount(d.part2.model) + ' слов</b><p class="mt-2" id="spModelText">' + esc(d.part2.model) + '</p></div></section>';
    h += '<section class="bg-white border border-slate-200 rounded-2xl p-5"><h3 class="font-bold mb-3">Part 3 · Discussion</h3><div class="space-y-3">' +
      d.part3.map(function (q, i) { return '<details class="rounded-xl border border-slate-200 p-3"><summary class="cursor-pointer font-semibold text-sm">' + (i + 1) + '. ' + esc(q.q) + '</summary><p class="text-sm text-slate-700 mt-2 leading-relaxed"><b class="text-emerald-700">Band 9.0:</b> ' + esc(q.a) + '</p></details>'; }).join('') + '</div></section></div>';
    h += '<section class="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 lg:sticky lg:top-20"><h3 class="font-bold">🎤 Тренажёр ответа</h3>' +
      '<div><label class="lbl" for="spSelect">Вопрос</label><select id="spSelect" class="inp">' + items.map(function (it, i) { return '<option value="' + i + '">' + esc(it.label + ' — ' + it.q.slice(0, 60)) + '</option>'; }).join('') + '</select></div>' +
      '<p id="spQuestion" class="text-sm bg-slate-50 border border-slate-200 rounded-xl p-3"></p>' +
      '<textarea id="spText" class="inp !min-h-[180px] leading-relaxed" placeholder="Говорите в микрофон или печатайте ответ на английском…" maxlength="5000"></textarea>' +
      '<div class="flex flex-wrap items-center justify-between gap-2"><span id="spCount" class="text-sm font-semibold">0 слов</span><div class="flex gap-2"><button type="button" id="spMic" class="btn btn-ghost">🎙 Запись</button><button type="button" id="spAi" class="btn btn-primary">🤖 Оценить ИИ</button></div></div>' +
      '<p id="spHint" class="text-[11px] text-slate-400"></p><div id="spEval"></div></section></div>';
    return { html: h, qs: [], items: items };
  }

  /* ---------- сборка теста ---------- */
  // Баннер имени (тема «99 имён»): арабское написание, переводы, суть, практика и аяты.
  function nameBanner(id) {
    var x = (IELTS.NIDX || [])[id - 1], m = (IELTS.NDATA[id] || {}).meta;
    if (!x) return '';
    var verses = m && m.refs ? m.refs.map(function (ref) {
      var vs = (IELTS.VERSES || {})[ref];
      return vs ? '<div class="border border-slate-200 rounded-xl p-3 bg-white"><div class="text-[11px] font-bold text-indigo-600 mb-1">Коран ' + esc(ref) + '</div><p class="ar text-xl leading-loose" lang="ar">' + esc(vs.ar) + '</p><p class="text-sm text-slate-700 mt-1"><b>EN:</b> ' + esc(vs.en) + '</p><p class="text-sm text-slate-700 mt-1"><b>RU:</b> ' + esc(vs.ru) + '</p></div>' : '';
    }).join('') : '';
    return '<div class="bg-white border border-slate-200 rounded-2xl p-5 mb-5"><div class="flex flex-wrap items-center gap-4"><div class="ar text-5xl" lang="ar">' + esc(x.ar) + '</div><div class="flex-1 min-w-[200px]"><h3 class="text-lg font-extrabold">' + esc(x.tr) + '</h3><p class="text-sm"><b>RU:</b> ' + esc(x.ru) + ' · <b>KZ:</b> ' + esc(x.kk) + ' · <b>EN:</b> ' + esc(x.en) + '</p></div><button type="button" id="nmSpeak" class="btn btn-ghost">🔊 Произношение</button></div>' +
      (m ? '<details class="mt-3"><summary class="cursor-pointer text-sm font-semibold text-indigo-700">Суть, практические советы и аяты (RU · KZ)</summary><div class="grid sm:grid-cols-2 gap-4 mt-3"><div><h4 class="font-bold text-sm mb-1">Суть · RU</h4><p class="text-sm leading-relaxed">' + esc(m.essence.ru) + '</p><h4 class="font-bold text-sm mt-3 mb-1">Практика · RU</h4><p class="text-sm leading-relaxed">' + esc(m.practice.ru) + '</p></div><div><h4 class="font-bold text-sm mb-1">Мәні · KZ</h4><p class="text-sm leading-relaxed">' + esc(m.essence.kk) + '</p><h4 class="font-bold text-sm mt-3 mb-1">Тәжірибе · KZ</h4><p class="text-sm leading-relaxed">' + esc(m.practice.kk) + '</p></div></div><div class="space-y-2 mt-3">' + verses + '</div></details>' : '') + '</div>';
  }
  function speakName(text, lang) {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text); u.lang = lang; u.rate = 0.85;
    var vv = speechSynthesis.getVoices().filter(function (z) { return z.lang.toLowerCase().indexOf(lang.slice(0, 2)) === 0; })[0];
    if (vv) u.voice = vv;
    speechSynthesis.speak(u);
  }

  function renderTest(skill, v) {
    if (!IELTS.verifySessionIntegrity()) return;
    var topic = curTopic();
    var d = topic === 'names' ? (IELTS.NDATA[v] || {})[skill] : (IELTS.DATA[skill] || [])[v - 1];
    var root = $('testWorkspace');
    if (!d) { root.innerHTML = '<p class="text-sm text-slate-500">Вариант пока не готов — скоро.</p><button type="button" class="btn btn-ghost mt-3" data-nav="course" data-skill="' + skill + '" data-topic="' + topic + '">← К списку</button>'; return; }
    var st = IELTS.vstate(skill, v);
    var built = skill === 'reading' ? renderReading(d, v) : skill === 'listening' ? renderListening(d, v) : skill === 'writing' ? renderWriting(d, v) : renderSpeaking(d, v);
    root.innerHTML = built.html;
    if (topic === 'names') {
      var anchor = root.firstElementChild; // шапка навигации
      anchor.insertAdjacentHTML('afterend', nameBanner(v));
      var sp = $('nmSpeak'), nm = IELTS.NIDX[v - 1];
      if (sp) sp.addEventListener('click', function () { speakName(nm.ar, 'ar-SA'); setTimeout(function () { speakName(nm.tr, 'en-GB'); }, 1800); });
    }
    IELTS.touch(skill, v);
    if (skill === 'reading' || skill === 'listening') wireQuiz(root, skill, v, d, built.qs, st);
    if (skill === 'listening') wireListening(root, d);
    if (skill === 'writing') wireWriting(root, skill, v, d, st);
    if (skill === 'speaking') wireSpeaking(root, skill, v, d, st, built.items);
  }
  function wireQuiz(root, skill, v, d, qs, st) {
    bindAutosave(root, skill, v);
    var pre = skill === 'reading' ? 'rd' : 'ls';
    function check() {
      var g = gradeQuestions(root, qs, st);
      root.querySelector('#' + pre + 'Result').innerHTML = resultBanner(g);
      if (skill === 'listening') { $('lsShow').checked = true; $('lsTranscript').classList.remove('hidden'); }
      IELTS.touch(skill, v);
    }
    root.querySelector('#' + pre + 'Check').addEventListener('click', check);
    root.querySelector('#' + pre + 'Reset').addEventListener('click', function () {
      if (!confirm('Сбросить ответы этого варианта?')) return;
      st.a = {}; IELTS.touch(skill, v);
      IELTS.renderTest(skill, v);
    });
    if (st.a._checked) check();
  }

  function wireListening(root, d) {
    var lines = IELTS.audio.parseScript(d.script);
    var tr = $('lsTranscript');
    $('lsShow').addEventListener('change', function () { tr.classList.toggle('hidden', !this.checked); });
    $('lsStop').addEventListener('click', function () { IELTS.stopAll(); clearActive(); $('lsPlay').disabled = false; });
    function clearActive() { tr.querySelectorAll('.line-active').forEach(function (n) { n.classList.remove('line-active'); }); }
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

  function wireWriting(root, skill, v, d, st) {
    [1, 2].forEach(function (n) {
      if (n === 1 && !d.task1) return;
      var key = 'w' + n, t = n === 1 ? d.task1 : d.task2, min = n === 1 ? 150 : 250;
      var ta = root.querySelector('[data-draft="' + key + '"]'), cnt = root.querySelector('[data-count="' + key + '"]');
      ta.value = st.d[key] || '';
      function upd() { var c = wordCount(ta.value); cnt.textContent = c + ' слов' + (c < min ? ' (нужно ещё ' + (min - c) + ')' : ' ✓'); cnt.className = 'text-sm font-semibold ' + (c >= min ? 'text-emerald-600' : 'text-slate-600'); }
      upd();
      ta.addEventListener('input', function () { st.d[key] = ta.value; upd(); IELTS.touch(skill, v); });
      var out = root.querySelector('[data-eval="' + key + '"]');
      if (st.ev[key]) out.innerHTML = window.renderAiEvaluationCard(st.ev[key]);
      root.querySelector('[data-model="' + key + '"]').addEventListener('click', function () {
        var box = root.querySelector('[data-modelbox="' + key + '"]'); box.classList.toggle('hidden');
        this.textContent = box.classList.contains('hidden') ? 'Эталон Band 9.0' : 'Скрыть эталон';
      });
      var dataText = n === 1 ? chartText(t.chart) : '';
      root.querySelector('[data-ai="' + key + '"]').addEventListener('click', function () {
        var other = n === 1 ? d.task2 : d.task1;
        var cross = other ? { promptText: other.prompt, keywords: other.keywords, dataText: n === 1 ? '' : chartText(other.chart) } : undefined;
        aiRunner(this, skill, v, st, key, out, n === 1 ? 'w1' : 'w2', d.title + ' — Writing Task ' + n, t.prompt, ta.value, min, { keywords: t.keywords, dataText: dataText, cross: cross });
      });
    });
  }

  function wireSpeaking(root, skill, v, d, st, items) {
    var sel = $('spSelect'), ta = $('spText'), cnt = $('spCount'), out = $('spEval'), hint = $('spHint'), mic = $('spMic');
    var conf = null, rec = null;
    function cur() { return items[parseInt(sel.value, 10) || 0]; }
    function upd() { var c = wordCount(ta.value), it = cur(); cnt.textContent = c + ' слов (цель ≥ ' + it.min + ')'; cnt.className = 'text-sm font-semibold ' + (c >= it.min ? 'text-emerald-600' : 'text-slate-600'); }
    function load() {
      var it = cur();
      $('spQuestion').textContent = it.id === 'p2' ? d.part2.topic + ' — ' + d.part2.bullets.join(' / ') : it.q;
      ta.value = st.d[it.id] || ''; conf = null;
      out.innerHTML = st.ev[it.id] ? window.renderAiEvaluationCard(st.ev[it.id]) : '';
      upd();
    }
    sel.addEventListener('change', function () { if (rec && rec.isActive()) rec.stop(); load(); });
    ta.addEventListener('input', function () { st.d[cur().id] = ta.value; upd(); IELTS.touch(skill, v); });
    var base = '';
    rec = IELTS.audio.createRecognizer({
      onText: function (fin, interim, c) { ta.value = (base ? base + ' ' : '') + fin + (interim ? ' ' + interim : ''); conf = c; st.d[cur().id] = ta.value; upd(); },
      onState: function (on) { mic.textContent = on ? '⏹ Остановить' : '🎙 Запись'; mic.classList.toggle('btn-primary', on); mic.classList.toggle('btn-ghost', !on); if (!on) IELTS.touch(skill, v); },
      onError: function (m) { IELTS.toast(m, true); }
    });
    hint.textContent = rec ? 'Распознавание речи (английский) работает в Chrome/Edge. Говорите чётко, текст появится в поле — его можно поправить.' : 'Ваш браузер не поддерживает распознавание речи — печатайте ответ вручную (лучше Chrome или Edge).';
    mic.addEventListener('click', function () {
      if (!rec) return IELTS.toast('Распознавание речи недоступно в этом браузере.', true);
      if (rec.isActive()) rec.stop(); else { base = ta.value.trim(); rec.start(''); }
    });
    $('spAi').addEventListener('click', function () {
      var it = cur();
      aiRunner(this, skill, v, st, it.id, out, 'sp', d.title + ' — ' + it.label, it.id === 'p2' ? d.part2.topic + ' ' + d.part2.bullets.join(' ') : it.q, ta.value, it.min, { keywords: d.keywords, confidence: conf == null ? undefined : conf });
    });
    $('spModelToggle').addEventListener('click', function () { var b = $('spModelBox'); b.classList.toggle('hidden'); this.textContent = b.classList.contains('hidden') ? 'Показать эталонный монолог' : 'Скрыть эталонный монолог'; });
    $('spModelPlay').addEventListener('click', function () { IELTS.audio.playNaturalDialogue(d.part2.model, { genders: { Narrator: 'f' } }); });
    $('spModelStop').addEventListener('click', function () { IELTS.stopAll(); });
    load();
  }

  IELTS.ui = { loadSkill: loadSkill, renderCourse: renderCourse, renderTest: renderTest };
  IELTS.renderTest = renderTest;
})();
