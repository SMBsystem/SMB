/* GeoTany: shared GeoQuest block for topic and lesson pages (find objects on a label-free map).
   Page provides window.TOPIC_GEOQUEST = { id, title_kz, title_ru, view:[lat,lng,zoom], kz:true|false,
     items:[{q_kz,q_ru,a_kz,a_ru,lat,lng,r}] } and loads this file at the end of <body>. */
(function () {
  var D = window.TOPIC_GEOQUEST;
  if (!D || !D.items || !D.items.length) return;
  var LEAFLET_JS = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
  var LEAFLET_CSS = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
  var PENDING = 'geotany_geoquest_pending';

  function lang() { try { return currentLang === 'ru' ? 'ru' : 'kz'; } catch (e) { return 'kz'; } }
  function T(kz, ru) { return lang() === 'ru' ? ru : kz; }
  function el(tag, cls, txt) { var n = document.createElement(tag); if (cls) n.className = cls; if (txt != null) n.textContent = txt; return n; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) {} return null; }
  function loadScript(src, cb) { var s = document.createElement('script'); s.src = src; s.onload = function () { cb(true); }; s.onerror = function () { cb(false); }; document.head.appendChild(s); }

  var sec, body, map, baseNow = 'map', layers = {}, markers = [], state = null, started = false, fbFn = null, sendFn = null;

  function mount() {
    var ids = ['tpSection', 'tqSection', 'quizSection', 'geoquest', 'trapsSection', 'factsSection', 'tableSection', 'theoryContent'];
    var anchor = null;
    for (var i = 0; i < ids.length && !anchor; i++) anchor = document.getElementById(ids[i]);
    sec = el('section', 'scroll-mt-24 p-5 rounded-2xl bg-space-950 border border-cyan-500/40 space-y-4 shadow-xl');
    sec.id = 'gqzSection';
    if (anchor) anchor.parentNode.insertBefore(sec, anchor.nextSibling); else (document.querySelector('main') || document.body).appendChild(sec);
  }

  function title() { return lang() === 'ru' ? D.title_ru : D.title_kz; }

  function renderStart() {
    sec.innerHTML = '';
    var top = el('div', 'flex flex-wrap items-center gap-2 text-[11px] font-extrabold');
    top.appendChild(el('span', 'px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30', 'GeoQuest'));
    top.appendChild(el('span', 'text-slate-400', '· ' + D.items.length + ' ' + T('сұрақ', 'вопросов') + ' · ⏱️ ~' + Math.max(4, Math.ceil(D.items.length * 0.6)) + ' ' + T('мин', 'мин')));
    sec.appendChild(top);
    sec.appendChild(el('h3', 'text-base sm:text-lg font-black text-white', '🗺️ ' + title()));
    sec.appendChild(el('p', 'text-xs text-slate-300 leading-relaxed', T(
      'Картада атаулар жоқ. Сұрақта сипатталған нысанды картадан тауып, бір рет басыңыз. Нәтиже мұғалімге жіберіледі (курсқа кірген болсаңыз).',
      'На карте нет подписей. Найдите на карте описанный в вопросе объект и кликните один раз. Результат отправляется учителю (если вы вошли в курс).')));
    var b = el('button', 'px-5 py-2.5 rounded-xl font-black text-sm text-space-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:brightness-110 transition shadow-lg shadow-cyan-500/20', '🎯 ' + T('Бастау', 'Начать'));
    b.type = 'button'; b.addEventListener('click', start);
    sec.appendChild(b);
  }

  function ensureLeaflet(cb) {
    if (window.L && L.map) return cb(true);
    if (!document.getElementById('gqz-lcss')) { var l = document.createElement('link'); l.id = 'gqz-lcss'; l.rel = 'stylesheet'; l.href = LEAFLET_CSS; document.head.appendChild(l); }
    loadScript(LEAFLET_JS, cb);
  }

  function start() {
    sec.innerHTML = '<p class="text-xs text-slate-400">…</p>';
    ensureLeaflet(function (ok) {
      if (!ok) { sec.innerHTML = ''; sec.appendChild(el('p', 'text-xs text-rose-300', T('Карта жүктелмеді. Интернетті тексеріңіз.', 'Не удалось загрузить карту. Проверьте интернет.'))); return; }
      var go = function () { buildUI(); };
      if (D.kz && !window.KZLMAP) loadScript('../kzmaps.js', function () { go(); }); else go();
    });
  }

  function buildUI() {
    sec.innerHTML = '';
    started = true;
    var head = el('div', 'flex flex-wrap items-center justify-between gap-2');
    head.appendChild(el('h3', 'text-xs font-black text-cyan-300', '🗺️ GeoQuest · ' + title()));
    var side = el('div', 'flex items-center gap-2');
    var prog = el('span', 'px-2.5 py-1 rounded-full text-[11px] font-bold bg-space-900 border border-slate-700 text-slate-300');
    var score = el('span', 'px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300');
    var lm = el('button', 'px-2.5 py-1 rounded-lg text-[11px] font-bold bg-space-900 border border-slate-700 text-slate-300 hover:text-white transition'); lm.type = 'button';
    side.appendChild(prog); side.appendChild(score); side.appendChild(lm);
    head.appendChild(side); sec.appendChild(head);

    var q = el('div', 'p-3 rounded-xl bg-space-900/80 border border-slate-800 text-sm font-bold text-white leading-snug');
    sec.appendChild(q);
    var mapDiv = el('div', 'w-full rounded-xl overflow-hidden border border-slate-800'); mapDiv.style.height = '420px'; mapDiv.style.background = '#0b1120';
    sec.appendChild(mapDiv);
    var fb = el('div', 'text-xs font-bold leading-relaxed min-h-[1.5rem]'); sec.appendChild(fb);
    var nb = el('button', 'hidden px-4 py-2 rounded-xl font-black text-xs text-space-950 bg-cyan-400 hover:brightness-110 transition'); nb.type = 'button'; sec.appendChild(nb);
    body = el('div', 'space-y-3'); sec.appendChild(body);

    state = { order: shuffle(D.items), i: 0, ok: 0, wrong: [], answered: false, t0: Date.now(), done: false };

    map = L.map(mapDiv, { zoomControl: true, worldCopyJump: true, minZoom: 2 });
    window.__gqzMap = map;
    var esri = function (svc) { return L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/' + svc + '/MapServer/tile/{z}/{y}/{x}', { maxZoom: 12, maxNativeZoom: 12, attribution: 'Tiles &copy; Esri' }); };
    layers.map = esri('Canvas/World_Light_Gray_Base');
    layers.sat = esri('World_Imagery');
    layers.sat.addTo(map); baseNow = 'sat';
    fetch('https://cdn.jsdelivr.net/gh/johan/world.geo.json@master/countries.geo.json').then(function (r) { return r.json(); }).then(function (gj) {
      var bl = L.geoJSON(gj, { style: { color: '#ffffff', weight: 0.9, opacity: 0.65, fill: false }, interactive: false });
      bl.addTo(map); if (bl.bringToFront) bl.bringToFront();
    }).catch(function () {});
    var v = D.view || [20, 30, 2]; map.setView([v[0], v[1]], v[2]);
    if (D.kz && window.KZLMAP && KZLMAP.border) L.polygon(KZLMAP.border, { color: '#22d3ee', weight: 2, fill: false, dashArray: '5 4', interactive: false }).addTo(map);
    setTimeout(function () { map.invalidateSize(); }, 200);

    var seg = el('div', 'flex gap-1.5');
    var btns = {};
    ['sat', 'map'].forEach(function (k) { btns[k] = el('button', ''); btns[k].type = 'button'; seg.appendChild(btns[k]); btns[k].addEventListener('click', function () { setBase(k); }); });
    var bm = btns.map, bs = btns.sat;
    function paintBtns() {
      Object.keys(btns).forEach(function (k) { btns[k].className = 'px-2.5 py-1 rounded-lg text-[11px] font-bold border ' + (k === baseNow ? 'border-cyan-500/50 bg-cyan-500/15 text-cyan-200' : 'border-slate-700 bg-space-900 text-slate-300'); });
    }
    var hinted = false;
    function setBase(b) {
      if (b === 'map' && state && !state.answered && !state.done) hinted = true;
      if (b !== baseNow) { map.removeLayer(layers[baseNow]); layers[b].addTo(map); baseNow = b; }
      paintBtns();
    }
    paintBtns(); sec.insertBefore(seg, mapDiv);

    function clearMarks() { markers.forEach(function (m) { map.removeLayer(m); }); markers = []; }
    function names(it) { return lang() === 'ru' ? it.a_ru : it.a_kz; }
    function qtext(it) { return lang() === 'ru' ? it.q_ru : it.q_kz; }

    function labels() {
      bm.textContent = '💡 ' + T('Көмек: атаулары бар карта', 'Подсказка: карта с названиями'); bs.textContent = '🛰️ ' + T('Спутник', 'Спутник');
      lm.textContent = '↻ ' + T('Қайта бастау', 'Заново');
      prog.textContent = Math.min(state.i + (state.answered ? 1 : 0), D.items.length) + ' / ' + D.items.length;
      score.textContent = '✓ ' + (Math.round(state.ok * 10) / 10);
      if (!state.done) { var it = state.order[state.i]; q.textContent = (state.i + 1) + '. ' + qtext(it); }
      if (fbFn) fb.textContent = fbFn();
      nb.textContent = (state.i + 1 >= D.items.length) ? T('Нәтижені көру →', 'Показать результат →') : T('Келесі сұрақ →', 'Следующий вопрос →');
      if (sendFn) renderSend();
    }
    window.__gqzLabels = labels;

    function ask() {
      clearMarks(); fbFn = null; fb.textContent = ''; fb.className = 'text-xs font-bold leading-relaxed min-h-[1.5rem]';
      nb.classList.add('hidden'); state.answered = false; hinted = false; if (baseNow === 'map') hinted = true; labels();
    }

    map.on('click', function (e) {
      if (state.answered || state.done) return;
      var it = state.order[state.i];
      var d = e.latlng.distanceTo(L.latLng(it.lat, it.lng)) / 1000;
      var ok = d <= it.r;
      state.answered = true; if (ok) state.ok += hinted ? 0.5 : 1; else state.wrong.push(it);
      markers.push(L.marker(e.latlng, { icon: L.divIcon({ className: '', html: '<div style="width:14px;height:14px;border-radius:50%;background:' + (ok ? '#34d399' : '#fb7185') + ';border:2px solid #fff"></div>', iconSize: [14, 14], iconAnchor: [7, 7] }) }).addTo(map));
      markers.push(L.circle([it.lat, it.lng], { radius: it.r * 1000, color: '#34d399', weight: 2, fillColor: '#34d399', fillOpacity: .15, interactive: false }).addTo(map));
      markers.push(L.circleMarker([it.lat, it.lng], { radius: 5, color: '#fff', weight: 2, fillColor: '#34d399', fillOpacity: 1, interactive: false }).bindTooltip(names(it), { permanent: true, direction: 'top', offset: [0, -6] }).addTo(map));
      if (!ok) markers.push(L.polyline([e.latlng, [it.lat, it.lng]], { color: '#fb7185', weight: 2, dashArray: '4 4', interactive: false }).addTo(map));
      fbFn = function () { var n = names(it); return ok ? '✓ ' + T('Дұрыс! ', 'Верно! ') + n + (hinted ? T(' (көмекпен: ½ ұпай)', ' (с подсказкой: ½ балла)') : '') + ' (' + Math.round(d) + ' ' + T('км қате', 'км от центра') + ')' : '✗ ' + T('Қате. Бұл — ', 'Мимо. Это — ') + n + ' (' + Math.round(d) + ' ' + T('км қашық', 'км от цели') + ')'; };
      fb.className = 'text-xs font-bold leading-relaxed min-h-[1.5rem] ' + (ok ? 'text-emerald-300' : 'text-rose-300');
      nb.classList.remove('hidden'); labels();
      if (!ok) { try { map.fitBounds(L.latLngBounds([e.latlng, [it.lat, it.lng]]).pad(0.5), { maxZoom: 7 }); } catch (x) {} }
    });

    nb.addEventListener('click', function () {
      if (state.i + 1 >= D.items.length) { finish(); return; }
      state.i++; ask();
      var v2 = D.view || [20, 30, 2]; map.setView([v2[0], v2[1]], v2[2]);
    });
    lm.addEventListener('click', function () { body.innerHTML = ''; sendFn = null; state = { order: shuffle(D.items), i: 0, ok: 0, wrong: [], answered: false, t0: Date.now(), done: false }; q.classList.remove('hidden'); mapDiv.classList.remove('hidden'); seg.classList.remove('hidden'); var v3 = D.view || [20, 30, 2]; map.setView([v3[0], v3[1]], v3[2]); ask(); });

    function finish() {
      state.done = true; clearMarks(); fbFn = null; fb.textContent = ''; nb.classList.add('hidden');
      q.classList.add('hidden'); mapDiv.classList.add('hidden'); seg.classList.add('hidden');
      var n = D.items.length, pct = Math.round(state.ok / n * 100), mark = pct >= 85 ? 5 : pct >= 70 ? 4 : pct >= 50 ? 3 : 2;
      state.pct = pct; state.mark = mark;
      body.innerHTML = '';
      var res = el('div', 'p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 space-y-2');
      res.appendChild(el('div', 'text-lg font-black text-white', T('Нәтиже: ', 'Итог: ') + (Math.round(state.ok * 10) / 10) + ' / ' + n + ' (' + pct + '%) · ' + T('баға ', 'оценка ') + mark));
      var wr = el('div', 'text-xs text-slate-300 leading-relaxed');
      var wrongNames = state.wrong.map(function (it) { return names(it); });
      wr.textContent = wrongNames.length ? T('Қайталау керек: ', 'Повторить: ') + wrongNames.join(', ') : T('Барлығы дұрыс!', 'Всё верно!');
      res.appendChild(wr);
      var sb = el('div', 'text-xs font-bold text-slate-300'); sb.id = 'gqzSend'; res.appendChild(sb);
      body.appendChild(res); labels();
      sendResult();
    }

    function renderSend() { var s = document.getElementById('gqzSend'); if (s && sendFn) { var r = sendFn(); s.textContent = r.text; s.className = 'text-xs font-bold ' + r.cls; } }
    function setSend(cls, kz, ru) { sendFn = function () { return { cls: cls, text: T(kz, ru) }; }; renderSend(); }

    function payload(student) {
      return {
        email: student ? student.email : '', name: student ? (student.name || '') : '', grade: student ? (student.grade || '') : '',
        course: student ? (student.courseId || 'geotany') : 'geotany',
        quiz: 'geoquest_' + D.id, quizTitle: 'GeoQuest: ' + D.title_ru, lang: lang(),
        score: state.pct, max: 100, percent: state.pct, mark: state.mark, total: D.items.length, found: Math.round(state.ok * 10) / 10, mistakes: state.wrong.length,
        seconds: Math.floor((Date.now() - state.t0) / 1000),
        missed: state.wrong.map(function (it) { return it.a_ru; }).join(', '), wrong: '', details: state.ok + '/' + D.items.length,
        finishedAt: new Date().toISOString()
      };
    }
    function pend() { try { return JSON.parse(store(PENDING) || '[]'); } catch (e) { return []; } }
    function savePend(p) { var l = pend().filter(function (x) { return x.finishedAt !== p.finishedAt; }); l.push(p); store(PENDING, JSON.stringify(l.slice(-10))); }
    function dropPend(p) { store(PENDING, JSON.stringify(pend().filter(function (x) { return x.finishedAt !== p.finishedAt; }))); }

    function sendResult() {
      setSend('text-slate-400', 'Нәтиже жіберілуде…', 'Отправляем результат…');
      var go = function () {
        var student = (window.SMB && SMB.readSession) ? SMB.readSession() : null;
        if (!student) { setSend('text-amber-300', 'Нәтиже мұғалімге жіберілмеді: курсқа кіріңіз.', 'Результат не отправлен учителю: войдите в курс.'); return; }
        var p = payload(student);
        var fail = function () {
          savePend(p); setSend('text-rose-300', 'Жіберу мүмкін болмады. Нәтиже сақталды.', 'Не удалось отправить. Результат сохранён.');
          var sb = document.getElementById('gqzSend');
          if (sb && !document.getElementById('gqzRetry')) { var rb = el('button', 'ml-2 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-space-900 border border-slate-700 text-slate-300 hover:text-white', T('Қайта жіберу', 'Отправить снова')); rb.id = 'gqzRetry'; rb.type = 'button'; rb.addEventListener('click', function () { rb.remove(); sendResult(); }); sb.appendChild(rb); }
        };
        SMB.api('result', p, 45000).then(function (r) {
          if (r && r.status === 'success') {
            setSend('text-emerald-300', '✓ Нәтиже мұғалімге жіберілді.', '✓ Результат отправлен учителю.');
            pend().forEach(function (x) { if (x.finishedAt !== p.finishedAt && x.email) SMB.api('result', x, 45000).then(function (r2) { if (r2 && r2.status === 'success') dropPend(x); }).catch(function () {}); });
          } else fail();
        }).catch(fail);
      };
      if (window.SMB) return go();
      loadScript('../../smb-config.js', function () { loadScript('../../smb-common.js', function (ok) { if (ok && window.SMB) go(); else setSend('text-amber-300', 'Нәтиже мұғалімге жіберілмеді (сервер қосылмаған).', 'Результат не отправлен (сервер не подключён).'); }); });
    }

    ask();
  }

  var shownLang = null;
  function start0() {
    mount(); renderStart(); shownLang = lang();
    setInterval(function () {
      if (lang() === shownLang) return;
      shownLang = lang();
      if (!started) renderStart(); else if (window.__gqzLabels) window.__gqzLabels();
    }, 400);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start0); else start0();
})();
