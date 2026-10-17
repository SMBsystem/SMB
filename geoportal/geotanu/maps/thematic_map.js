/* GeoTany — общий движок тематических карт (map_01 … map_50).
 *
 * Страница карты подключает world_countries.js, файл данных data/map_XX.js
 * (window.MAP_DATA) и этот файл. Движок сам строит всю страницу.
 *
 * Формат MAP_DATA:
 *   id, category, scope ('world' | 'kazakhstan'), view: [lonW, latS, lonE, latN] (необязательно)
 *   title_kz/_ru, desc_kz/_ru, theory_kz/_ru (HTML), facts_kz/_ru (массив строк)
 *   legend:    [{ id, kz, ru, color }]
 *   countries: { legendId: ['ISO3', …] }        — заливка стран
 *   notes:     { ISO3: { kz, ru } }              — пояснение к стране
 *   points:    [{ g, lon, lat, kz, ru, n_kz, n_ru, big }]
 *   lines:     [{ g, kz, ru, pts: [[lon, lat], …], arrow, dash, n_kz, n_ru }]
 *   areas:     [{ g, kz, ru, poly: [[lon, lat], …], clip: 'land' | 'KAZ' }]
 *   bands:     [{ g, kz, ru, from: lat, to: lat, clip: 'land' | 'KAZ' }]
 *   graticule: true                              — экватор, тропики, полярные круги
 *   quiz:      [{ kz, ru, o_kz: […], o_ru: […], a: индекс верного }]
 * Старые ключи (label_kz, assignments) тоже понимаются.
 */
(function () {
  'use strict';

  const D = window.MAP_DATA || {};
  const TOTAL_MAPS = 50;
  const W = 1000, H = 540;
  const SVG_NS = 'http://www.w3.org/2000/svg';

  // У нескольких стран в world_countries.js нет ISO-кода
  const ID_ALIAS = { FRA: 'France', NOR: 'Norway', XKX: 'Kosovo', KOS: 'Kosovo' };
  const realId = (id) => ID_ALIAS[id] || id;

  // Государства без контура на карте — рисуем точками.
  // at — точка на холсте: контуры упрощены, и настоящие координаты попадают не туда
  const MICRO = {
    SGP: { lon: 103.82, lat: 1.35, at: { x: 780.3, y: 301.35 }, ru: 'Сингапур', kz: 'Сингапур' },
    BHR: { lon: 50.55, lat: 26.07, at: { x: 632.4, y: 225.4 }, ru: 'Бахрейн', kz: 'Бахрейн' },
    MLT: { lon: 14.38, lat: 35.94, at: { x: 539.1, y: 195.4 }, ru: 'Мальта', kz: 'Мальта' },
    VAT: { lon: 12.45, lat: 41.90, ru: 'Ватикан', kz: 'Ватикан' },
    MCO: { lon: 7.42, lat: 43.74, at: { x: 517.8, y: 171.8 }, ru: 'Монако', kz: 'Монако' },
    LIE: { lon: 9.55, lat: 47.17, at: { x: 522.7, y: 161.3 }, ru: 'Лихтенштейн', kz: 'Лихтенштейн' },
    AND: { lon: 1.52, lat: 42.51, at: { x: 506.5, y: 175.5 }, ru: 'Андорра', kz: 'Андорра' },
    SMR: { lon: 12.46, lat: 43.94, ru: 'Сан-Марино', kz: 'Сан-Марино' },
    MDV: { lon: 73.22, lat: 3.20, ru: 'Мальдивы', kz: 'Мальдив аралдары' },
    TON: { lon: -175.20, lat: -21.18, ru: 'Тонга', kz: 'Тонга' },
    COM: { lon: 43.33, lat: -11.70, ru: 'Коморы', kz: 'Комор аралдары' },
    FSM: { lon: 158.22, lat: 6.92, ru: 'Микронезия', kz: 'Микронезия' },
    KNA: { lon: -62.78, lat: 17.34, ru: 'Сент-Китс и Невис', kz: 'Сент-Китс және Невис' },
    MUS: { lon: 57.55, lat: -20.35, ru: 'Маврикий', kz: 'Маврикий' },
    BRB: { lon: -59.54, lat: 13.19, ru: 'Барбадос', kz: 'Барбадос' },
    HKG: { lon: 114.17, lat: 22.32, ru: 'Гонконг (Китай)', kz: 'Гонконг (Қытай)' },
    TUV: { lon: 179.20, lat: -8.52, ru: 'Тувалу', kz: 'Тувалу' },
    ATG: { lon: -61.80, lat: 17.08, ru: 'Антигуа и Барбуда', kz: 'Антигуа және Барбуда' },
    GRD: { lon: -61.68, lat: 12.12, ru: 'Гренада', kz: 'Гренада' },
    LCA: { lon: -60.98, lat: 13.91, ru: 'Сент-Люсия', kz: 'Сент-Люсия' },
    VCT: { lon: -61.20, lat: 13.25, ru: 'Сент-Винсент и Гренадины', kz: 'Сент-Винсент және Гренадин' },
    DMA: { lon: -61.37, lat: 15.41, ru: 'Доминика', kz: 'Доминика' },
    KIR: { lon: 173.00, lat: 1.40, ru: 'Кирибати', kz: 'Кирибати' },
    MHL: { lon: 171.20, lat: 7.10, ru: 'Маршалловы Острова', kz: 'Маршалл аралдары' },
    PLW: { lon: 134.50, lat: 7.50, ru: 'Палау', kz: 'Палау' },
    NRU: { lon: 166.92, lat: -0.53, ru: 'Науру', kz: 'Науру' },
    WSM: { lon: -171.80, lat: -13.80, ru: 'Самоа', kz: 'Самоа' },
    SYC: { lon: 55.45, lat: -4.62, ru: 'Сейшельские Острова', kz: 'Сейшель аралдары' },
    CPV: { lon: -23.51, lat: 14.93, ru: 'Кабо-Верде', kz: 'Кабо-Верде' },
    STP: { lon: 6.61, lat: 0.34, ru: 'Сан-Томе и Принсипи', kz: 'Сан-Томе және Принсипи' }
  };

  // Та же проекция, что у контуров стран: Робинсон, подогнанный под холст 1000×540
  const ROB_X = [1.0000, 0.9986, 0.9954, 0.9900, 0.9822, 0.9730, 0.9600, 0.9427, 0.9216, 0.8962, 0.8679, 0.8350, 0.7986, 0.7597, 0.7186, 0.6732, 0.6213, 0.5722, 0.5322];
  const ROB_Y = [0.0000, 0.0620, 0.1240, 0.1860, 0.2480, 0.3100, 0.3720, 0.4340, 0.4958, 0.5571, 0.6176, 0.6769, 0.7346, 0.7903, 0.8435, 0.8936, 0.9394, 0.9761, 1.0000];
  function proj(lon, lat) {
    const a = Math.min(Math.abs(lat), 89.99) / 5, i = Math.floor(a), f = a - i;
    const X = ROB_X[i] + (ROB_X[i + 1] - ROB_X[i]) * f;
    const Y = ROB_Y[i] + (ROB_Y[i + 1] - ROB_Y[i]) * f;
    return { x: 503 + 2.676 * X * lon, y: 304.3 - 242.7 * Y * Math.sign(lat) };
  }

  // ---------------------------------------------------------------- язык
  let lang = (function () {
    const q = new URLSearchParams(location.search).get('lang');
    if (q === 'ru' || q === 'kz') return q;
    try { if (localStorage.getItem('geotany_lang') === 'ru') return 'ru'; } catch (e) {}
    return 'kz';
  })();
  const isRu = () => lang === 'ru';
  const T = (kz, ru) => (isRu() ? ru : kz);
  const txt = (o, base) => {
    if (!o) return '';
    const k = base ? base + '_' : '';
    return (isRu() ? (o[k + 'ru'] ?? o[k + 'kz']) : (o[k + 'kz'] ?? o[k + 'ru'])) || '';
  };
  const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // ---------------------------------------------------------------- данные
  const COUNTRIES = (typeof WORLD_COUNTRIES !== 'undefined') ? WORLD_COUNTRIES : [];
  const byId = {};
  COUNTRIES.forEach((c) => { byId[c.id] = c; });

  const LEGEND = (D.legend || []).map((l) => ({
    id: l.id, color: l.color, kz: l.kz ?? l.label_kz, ru: l.ru ?? l.label_ru
  }));
  const legendById = {};
  LEGEND.forEach((l) => { legendById[l.id] = l; });

  const countryGroup = {};
  Object.entries(D.countries || D.assignments || {}).forEach(([g, ids]) => {
    (ids || []).forEach((id) => { const r = realId(id); if (!(r in countryGroup)) countryGroup[r] = g; });
  });
  const notes = {};
  Object.entries(D.notes || {}).forEach(([id, n]) => { notes[realId(id)] = n; });

  const CAT = {
    geopolitics: { kz: 'Геосаясат', ru: 'Геополитика', icon: '🌐' },
    demography: { kz: 'Демография', ru: 'Демография', icon: '👥' },
    economy: { kz: 'Шаруашылық', ru: 'Хозяйство', icon: '🏭' },
    physical: { kz: 'Табиғат', ru: 'Природа', icon: '🌍' },
    kazakhstan: { kz: 'Қазақстан', ru: 'Казахстан', icon: '🇰🇿' }
  };

  // Все объекты карты в одном реестре: страна, точка, линия, область
  const ITEMS = {};
  function countryName(c) { return isRu() ? (c.name_ru || c.name_en) : (c.name_kz || c.name_ru); }
  COUNTRIES.forEach((c) => {
    ITEMS['c:' + c.id] = { key: 'c:' + c.id, kind: 'country', id: c.id, g: countryGroup[c.id] || null, c };
  });
  Object.keys(countryGroup).forEach((id) => {
    if (byId[id] || !MICRO[id]) return;
    ITEMS['m:' + id] = { key: 'm:' + id, kind: 'micro', id, g: countryGroup[id], m: MICRO[id] };
  });
  (D.points || []).forEach((p, i) => { ITEMS['p:' + i] = { key: 'p:' + i, kind: 'point', g: p.g, o: p }; });
  (D.lines || []).forEach((l, i) => { ITEMS['l:' + i] = { key: 'l:' + i, kind: 'line', g: l.g, o: l }; });
  (D.areas || []).forEach((a, i) => { ITEMS['a:' + i] = { key: 'a:' + i, kind: 'area', g: a.g, o: a }; });
  (D.bands || []).forEach((b, i) => { ITEMS['b:' + i] = { key: 'b:' + i, kind: 'band', g: b.g, o: b }; });

  function itemName(it) {
    if (!it) return '';
    if (it.kind === 'country') return countryName(it.c);
    if (it.kind === 'micro') return T(it.m.kz, it.m.ru);
    return txt(it.o);
  }
  function itemNote(it) {
    if (it.kind === 'country' || it.kind === 'micro') return notes[it.id] ? txt(notes[it.id]) : '';
    return txt(it.o, 'n');
  }
  function itemsOfGroup(g) {
    return Object.values(ITEMS).filter((it) => it.g === g);
  }

  // ---------------------------------------------------------------- состояние вида
  const isKz = D.scope === 'kazakhstan';
  function initialView() {
    let box = null;
    if (Array.isArray(D.view)) {
      const a = proj(D.view[0], D.view[3]), b = proj(D.view[2], D.view[1]);
      box = { x: Math.min(a.x, b.x), y: a.y, w: Math.abs(b.x - a.x), h: b.y - a.y };
    } else if (isKz && byId.KAZ && byId.KAZ.bbox) {
      const [x, y, w, h] = byId.KAZ.bbox;
      box = { x, y, w, h };
    }
    if (!box) return { x: 0, y: 0, w: W, h: H };
    // запас справа: там висят кнопки масштаба
    if (window.innerWidth < 640) box = { x: box.x, y: box.y, w: box.w * 1.14, h: box.h };
    const pad = 0.08;
    let w = box.w * (1 + pad * 2), h = box.h * (1 + pad * 2);
    // держим пропорции холста, чтобы карта заполняла рамку
    if (w / h > W / H) h = w * H / W; else w = h * W / H;
    return { x: box.x + box.w / 2 - w / 2, y: box.y + box.h / 2 - h / 2, w, h };
  }
  let vb = initialView();
  let highlight = null;     // id выделенной группы легенды
  let selectedKey = null;   // выбранный объект
  let showLabels = isKz || (D.points || []).length <= 30;
  let showGrid = !!D.graticule;

  // ---------------------------------------------------------------- страница
  const CAT_INFO = CAT[D.category] || CAT.geopolitics;
  const mapNo = Number(D.id) || 1;
  const prevNo = mapNo > 1 ? mapNo - 1 : TOTAL_MAPS;
  const nextNo = mapNo < TOTAL_MAPS ? mapNo + 1 : 1;
  const pad2 = (n) => String(n).padStart(2, '0');

  function buildPage() {
    const app = document.getElementById('app') || document.body;
    app.innerHTML = `
  <header class="sticky top-0 z-40 bg-space-950/90 backdrop-blur-xl border-b border-slate-800/80">
    <div class="max-w-7xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2">
      <div class="flex items-center gap-2 min-w-0">
        <a id="tmBack" href="#" class="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-space-850 hover:bg-space-800 text-slate-300 hover:text-white border border-slate-700/80 text-xs sm:text-sm font-bold transition">
          <span>←</span><span id="tmBackText" class="hidden sm:inline"></span>
        </a>
        <span class="shrink-0 text-[11px] px-2 py-1 rounded-lg bg-amber-500/10 text-amber-400 font-extrabold border border-amber-500/20">#${mapNo}</span>
        <span id="tmHeadTitle" class="text-xs sm:text-sm font-bold text-slate-200 truncate"></span>
      </div>
      <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
        <div class="flex items-center bg-space-900 p-0.5 rounded-xl border border-slate-800 text-xs font-bold">
          <a id="tmPrev" href="#" class="px-2 sm:px-2.5 py-1 rounded-lg text-slate-400 hover:text-white transition whitespace-nowrap">← #${prevNo}</a>
          <a id="tmNext" href="#" class="px-2 sm:px-2.5 py-1 rounded-lg text-slate-400 hover:text-white transition whitespace-nowrap">#${nextNo} →</a>
        </div>
        <div class="flex items-center bg-space-900 p-0.5 rounded-xl border border-slate-800 text-xs font-bold">
          <button id="tmLangKz" class="px-2 py-1 rounded-lg transition">KZ</button>
          <button id="tmLangRu" class="px-2 py-1 rounded-lg transition">RU</button>
        </div>
      </div>
    </div>
  </header>

  <main class="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
    <div class="lg:col-span-8 space-y-3 sm:space-y-4 min-w-0">
      <div>
        <div class="flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-cyan-400">
          <span>${CAT_INFO.icon}</span><span id="tmCat"></span>
        </div>
        <h1 id="tmTitle" class="text-lg sm:text-2xl font-black text-white leading-tight mt-1"></h1>
        <p id="tmDesc" class="text-xs sm:text-sm text-slate-400 mt-1"></p>
      </div>

      <div id="tmViewport" class="tm-viewport relative w-full ${isKz ? 'aspect-[4/3] sm:aspect-[100/66]' : 'aspect-[4/3] sm:aspect-[100/56]'} rounded-2xl sm:rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
        <svg id="tmSvg" viewBox="0 0 ${W} ${H}" class="w-full h-full block" xmlns="${SVG_NS}">
          <defs id="tmDefs"></defs>
          <rect x="-2000" y="-2000" width="5000" height="4540" fill="#0B1424"></rect>
          <g id="tmGrid"></g>
          <g id="tmLand"></g>
          <g id="tmAreas"></g>
          <g id="tmBorders" pointer-events="none"></g>
          <g id="tmLines"></g>
          <g id="tmPoints"></g>
          <g id="tmLabels" pointer-events="none"></g>
        </svg>

        <div class="absolute right-2 top-2 sm:right-3 sm:top-3 z-20 flex flex-col gap-1.5 bg-space-900/90 backdrop-blur-md p-1.5 rounded-2xl border border-slate-800 shadow-xl">
          <button data-act="in" class="tm-btn" title="+">+</button>
          <button data-act="out" class="tm-btn" title="−">−</button>
          <button data-act="reset" class="tm-btn text-cyan-400 text-xs" id="tmResetBtn">⟲</button>
          <button data-act="labels" class="tm-btn text-[11px]" id="tmLabelsBtn">Aa</button>
          <button data-act="grid" class="tm-btn tm-desk text-[11px]" id="tmGridBtn">0°</button>
          <button data-act="full" class="tm-btn text-xs" id="tmFullBtn">⛶</button>
        </div>

        <div class="absolute left-2 top-2 sm:left-3 sm:top-3 z-20 w-[min(15rem,60%)]">
          <input id="tmSearch" list="tmSearchList" autocomplete="off"
                 class="w-full px-3 py-1.5 rounded-xl bg-space-900/90 backdrop-blur-md border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500">
          <datalist id="tmSearchList"></datalist>
        </div>

        <div id="tmTooltip" class="absolute pointer-events-none z-30 hidden px-3 py-2 rounded-xl bg-space-950/95 border border-slate-700 text-xs text-white shadow-2xl max-w-[16rem]"></div>

        <div id="tmInfo" class="absolute left-2 right-2 bottom-2 sm:left-3 sm:right-auto sm:bottom-3 sm:max-w-sm z-20 hidden p-3 rounded-2xl bg-space-950/95 border border-slate-700 shadow-2xl text-xs"></div>
      </div>

      <div id="tmHint" class="px-3 py-2.5 rounded-2xl bg-space-900 border border-slate-800 text-[11px] sm:text-xs text-slate-400 flex items-start gap-2">
        <span>💡</span><span id="tmHintText"></span>
      </div>
    </div>

    <aside class="lg:col-span-4 lg:row-span-2 space-y-4">
      <section class="p-4 sm:p-5 rounded-3xl bg-space-900 border border-slate-800 shadow-xl space-y-3">
        <div class="flex items-center justify-between border-b border-slate-800 pb-2.5">
          <h3 class="text-xs font-black uppercase tracking-wider text-slate-400" id="tmLegendTitle"></h3>
          <button id="tmShowAll" class="text-[10px] px-2 py-0.5 rounded-md bg-space-850 text-cyan-400 font-bold border border-slate-700 hover:text-white transition"></button>
        </div>
        <div id="tmLegend" class="space-y-1.5"></div>
      </section>

      <section id="tmFactsBox" class="p-4 sm:p-5 rounded-3xl bg-amber-500/5 border border-amber-500/25 shadow-xl space-y-2.5 hidden">
        <h3 class="text-xs font-black uppercase tracking-wider text-amber-300 flex items-center gap-2"><span>⚡</span><span id="tmFactsTitle"></span></h3>
        <ul id="tmFacts" class="text-xs text-slate-200 leading-relaxed space-y-1.5"></ul>
      </section>

      <section class="p-4 sm:p-5 rounded-3xl bg-space-900 border border-cyan-500/30 shadow-xl space-y-3">
        <div class="flex items-center justify-between gap-2">
          <h3 class="text-xs font-black uppercase tracking-wider text-cyan-300 flex items-center gap-2"><span>🎯</span><span id="tmQuizTitle"></span></h3>
          <span id="tmQuizScore" class="text-[11px] font-mono font-bold text-slate-400"></span>
        </div>
        <div id="tmQuiz" class="space-y-2.5 text-xs"></div>
        <a id="tmQuest" href="#" class="flex items-center gap-3 p-3 rounded-2xl bg-amber-500/10 hover:bg-amber-500/15 border border-amber-500/30 transition">
          <span class="text-xl">🏁</span>
          <span class="min-w-0 flex-1">
            <span class="block text-xs font-black text-amber-300">GeoQuest</span>
            <span id="tmQuestText" class="block text-[11px] text-slate-400 leading-snug"></span>
          </span>
          <span class="text-amber-300 font-black">→</span>
        </a>
      </section>
    </aside>

    <section class="lg:col-span-8 p-4 sm:p-5 rounded-3xl bg-space-900 border border-slate-800 shadow-xl space-y-3 min-w-0">
      <h2 class="text-xs font-black uppercase tracking-wider text-white flex items-center gap-2"><span>📚</span><span id="tmTheoryTitle"></span></h2>
      <div id="tmTheory" class="tm-theory text-[13px] text-slate-300 leading-relaxed space-y-2"></div>
    </section>
  </main>`;
  }

  function injectStyles() {
    const st = document.createElement('style');
    st.textContent = `
      .tm-viewport { background: radial-gradient(circle at 50% 45%, #10203a 0%, #0B1424 70%); touch-action: none; cursor: grab; user-select: none; -webkit-user-select: none; }
      .tm-viewport.dragging { cursor: grabbing; }
      .tm-viewport:fullscreen { border-radius: 0; height: 100vh; }
      .tm-btn { width: 2rem; height: 2rem; border-radius: .75rem; background: #151E2E; color: #fff; font-weight: 800; display: flex; align-items: center; justify-content: center; transition: background .15s; }
      .tm-btn:hover { background: #1E293B; }
      @media (max-width: 639px) { .tm-btn { width: 1.7rem; height: 1.7rem; border-radius: .6rem; font-size: 12px; } .tm-btn.tm-desk { display: none; } }
      .tm-btn.on { background: #0891B2; color: #0B0F19; }
      .tm-land { stroke: rgba(255,255,255,.16); stroke-width: .5px; vector-effect: non-scaling-stroke; transition: opacity .2s, fill .2s; }
      .tm-land:hover, .tm-hit:hover { filter: brightness(1.3); }
      .tm-border { fill: none; stroke: rgba(255,255,255,.22); stroke-width: .5px; vector-effect: non-scaling-stroke; }
      .tm-sel { stroke: #FDE047 !important; stroke-width: 2px !important; vector-effect: non-scaling-stroke; }
      .tm-flash { animation: tmFlash 1s ease-in-out 3; }
      @keyframes tmFlash { 50% { opacity: .25; } }
      .tm-theory ul { list-style: disc; padding-left: 1.1rem; space-y: .25rem; }
      .tm-theory li { margin: .2rem 0; }
      .tm-theory b { color: #fff; }
      .tm-theory table { width: 100%; border-collapse: collapse; font-size: 12px; margin: .4rem 0; }
      .tm-theory td, .tm-theory th { border: 1px solid #1E293B; padding: .3rem .45rem; text-align: left; vertical-align: top; }
      .tm-theory th { background: #151E2E; color: #E2E8F0; }
      .tm-label { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; font-weight: 700; fill: #F1F5F9; paint-order: stroke; stroke: rgba(11,15,25,.9); stroke-linejoin: round; }
    `;
    document.head.appendChild(st);
  }

  // ---------------------------------------------------------------- рисование
  const svg = () => document.getElementById('tmSvg');
  function el(tag, attrs) {
    const e = document.createElementNS(SVG_NS, tag);
    Object.entries(attrs || {}).forEach(([k, v]) => { if (v !== undefined && v !== null) e.setAttribute(k, v); });
    return e;
  }
  const colorOf = (g) => (legendById[g] ? legendById[g].color : '#94A3B8');
  const dimmed = (g) => highlight && g !== highlight;
  const k = () => vb.w / W;   // масштаб: 1 — весь мир, меньше — приближено

  function polyPath(pts) {
    return pts.map(([lon, lat], i) => { const p = proj(lon, lat); return (i ? 'L' : 'M') + p.x.toFixed(1) + ' ' + p.y.toFixed(1); }).join(' ') + ' Z';
  }

  function buildDefs() {
    const defs = document.getElementById('tmDefs');
    defs.innerHTML = '';
    const land = el('clipPath', { id: 'clipLand' });
    COUNTRIES.forEach((c) => land.appendChild(el('path', { d: c.path })));
    defs.appendChild(land);
    if (byId.KAZ) {
      const kz = el('clipPath', { id: 'clipKAZ' });
      kz.appendChild(el('path', { d: byId.KAZ.path }));
      defs.appendChild(kz);
    }
  }

  function renderGrid() {
    const g = document.getElementById('tmGrid');
    g.innerHTML = '';
    if (!showGrid) return;
    const lines = [
      { lat: 0, kz: 'Экватор', ru: 'Экватор', c: '#FBBF24' },
      { lat: 23.44, kz: 'Солтүстік тропик', ru: 'Северный тропик', c: '#F97316' },
      { lat: -23.44, kz: 'Оңтүстік тропик', ru: 'Южный тропик', c: '#F97316' },
      { lat: 66.56, kz: 'Солтүстік полярлық шеңбер', ru: 'Северный полярный круг', c: '#38BDF8' },
      { lat: -66.56, kz: 'Оңтүстік полярлық шеңбер', ru: 'Южный полярный круг', c: '#38BDF8' }
    ];
    lines.forEach((l) => {
      const y = proj(0, l.lat).y;
      g.appendChild(el('line', { x1: -50, x2: W + 50, y1: y, y2: y, stroke: l.c, 'stroke-width': 1, 'stroke-dasharray': '6 5', 'vector-effect': 'non-scaling-stroke', opacity: 0.7 }));
      const t = el('text', { x: 6, y: y - 2, fill: l.c, 'font-size': 7, 'font-weight': 700, opacity: 0.85 });
      t.textContent = T(l.kz, l.ru);
      g.appendChild(t);
    });
  }

  function renderLand() {
    const g = document.getElementById('tmLand');
    const b = document.getElementById('tmBorders');
    g.innerHTML = '';
    b.innerHTML = '';
    const hasAreas = (D.areas || []).length || (D.bands || []).length;
    COUNTRIES.forEach((c) => {
      const grp = countryGroup[c.id];
      let fill, op;
      if (grp && legendById[grp]) {
        fill = colorOf(grp);
        op = dimmed(grp) ? 0.18 : 0.88;
      } else {
        const focus = isKz && c.id === 'KAZ';
        fill = focus ? '#334155' : '#1E293B';
        op = highlight ? 0.35 : (hasAreas ? 0.9 : 0.6);
        if (isKz && !focus) op = 0.45;
      }
      const p = el('path', { d: c.path, class: 'tm-land', fill, opacity: op, 'data-k': 'c:' + c.id });
      if (selectedKey === 'c:' + c.id) p.classList.add('tm-sel');
      g.appendChild(p);
      if (hasAreas) b.appendChild(el('path', { d: c.path, class: 'tm-border' }));
    });
    if (isKz && byId.KAZ) {
      b.appendChild(el('path', { d: byId.KAZ.path, fill: 'none', stroke: '#22D3EE', 'stroke-width': 1.6, 'vector-effect': 'non-scaling-stroke' }));
    }
  }

  function renderAreas() {
    const g = document.getElementById('tmAreas');
    g.innerHTML = '';
    const add = (key, d, it) => {
      const clip = it.o.clip === 'KAZ' ? 'url(#clipKAZ)' : (it.o.clip === 'none' ? null : 'url(#clipLand)');
      const p = el('path', { d, fill: colorOf(it.g), opacity: dimmed(it.g) ? 0.12 : (it.o.op || 0.72), 'clip-path': clip, class: 'tm-hit', 'data-k': key });
      if (selectedKey === key) p.classList.add('tm-sel');
      g.appendChild(p);
    };
    (D.bands || []).forEach((bd, i) => {
      const y1 = proj(0, Math.max(bd.from, bd.to)).y, y2 = proj(0, Math.min(bd.from, bd.to)).y;
      add('b:' + i, `M -50 ${y1.toFixed(1)} H ${W + 50} V ${y2.toFixed(1)} H -50 Z`, ITEMS['b:' + i]);
    });
    (D.areas || []).forEach((a, i) => add('a:' + i, polyPath(a.poly), ITEMS['a:' + i]));
  }

  function arrowHead(x1, y1, x2, y2, size) {
    const ang = Math.atan2(y2 - y1, x2 - x1), s = size;
    const a1 = ang + Math.PI * 0.82, a2 = ang - Math.PI * 0.82;
    return `M ${x2.toFixed(2)} ${y2.toFixed(2)} L ${(x2 + s * Math.cos(a1)).toFixed(2)} ${(y2 + s * Math.sin(a1)).toFixed(2)} L ${(x2 + s * Math.cos(a2)).toFixed(2)} ${(y2 + s * Math.sin(a2)).toFixed(2)} Z`;
  }

  // Линии, точки и подписи зависят от масштаба — перерисовываем при зуме
  function renderOverlays() {
    const s = Math.pow(k(), 0.85);
    const lg = document.getElementById('tmLines');
    const pg = document.getElementById('tmPoints');
    const tg = document.getElementById('tmLabels');
    lg.innerHTML = ''; pg.innerHTML = ''; tg.innerHTML = '';

    (D.lines || []).forEach((l, i) => {
      const key = 'l:' + i;
      const pts = l.pts.map(([lon, lat]) => proj(lon, lat));
      if (pts.length < 2) return;
      const d = pts.map((p, j) => (j ? 'L' : 'M') + p.x.toFixed(2) + ' ' + p.y.toFixed(2)).join(' ');
      const col = colorOf(l.g);
      const op = dimmed(l.g) ? 0.15 : 0.95;
      const sel = selectedKey === key;
      const grp = el('g', { opacity: op });
      grp.appendChild(el('path', { d, fill: 'none', stroke: 'transparent', 'stroke-width': 12, 'vector-effect': 'non-scaling-stroke', 'data-k': key, style: 'cursor:pointer' }));
      grp.appendChild(el('path', {
        d, fill: 'none', stroke: sel ? '#FDE047' : col, 'stroke-width': sel ? 3.6 : (l.w || 2.4), 'stroke-linecap': 'round', 'stroke-linejoin': 'round',
        'stroke-dasharray': l.dash ? '6 4' : null, 'vector-effect': 'non-scaling-stroke', 'pointer-events': 'none'
      }));
      if (l.arrow !== false) {
        const a = pts[pts.length - 2], b = pts[pts.length - 1];
        grp.appendChild(el('path', { d: arrowHead(a.x, a.y, b.x, b.y, 7 * s), fill: sel ? '#FDE047' : col, 'pointer-events': 'none' }));
      }
      lg.appendChild(grp);
      if (showLabels && l.label !== false) {
        const mid = pts[Math.floor(pts.length / 2)];
        addLabel(tg, mid.x, mid.y - 4 * s, txt(l), 7.5 * s, col);
      }
    });

    const drawDot = (key, x, y, g, big, label) => {
      const r = (big ? 4.2 : 3) * s;
      const sel = selectedKey === key;
      const c = el('circle', {
        cx: x.toFixed(2), cy: y.toFixed(2), r: (sel ? r * 1.5 : r).toFixed(2), fill: colorOf(g), class: 'tm-hit', 'data-k': key,
        opacity: dimmed(g) ? 0.2 : 1, stroke: sel ? '#FDE047' : '#FFFFFF', 'stroke-width': sel ? 2 : 0.9, 'vector-effect': 'non-scaling-stroke', style: 'cursor:pointer'
      });
      pg.appendChild(c);
      if (label && showLabels && !dimmed(g)) addLabel(tg, x + r + 1.5 * s, y + 2.6 * s, label, 7.5 * s, null, 'start');
    };

    Object.values(ITEMS).forEach((it) => {
      if (it.kind !== 'micro') return;
      const pos = it.m.at || proj(it.m.lon, it.m.lat);
      drawDot(it.key, pos.x, pos.y, it.g, false, null);
    });
    (D.points || []).forEach((p, i) => {
      const pos = proj(p.lon, p.lat);
      drawDot('p:' + i, pos.x, pos.y, p.g, p.big, txt(p));
    });

    if (showLabels) {
      (D.areas || []).forEach((a, i) => {
        if (a.label === false || dimmed(a.g)) return;
        const at = a.at ? proj(a.at[0], a.at[1]) : centroid(a.poly);
        addLabel(tg, at.x, at.y, txt(a), 7 * s, '#FFFFFF', 'middle');
      });
    }
  }
  function centroid(poly) {
    let x = 0, y = 0;
    poly.forEach(([lon, lat]) => { const p = proj(lon, lat); x += p.x; y += p.y; });
    return { x: x / poly.length, y: y / poly.length };
  }
  function addLabel(g, x, y, text, size, color, anchor) {
    if (!text) return;
    const t = el('text', { x: x.toFixed(2), y: y.toFixed(2), 'font-size': size.toFixed(2), class: 'tm-label', 'text-anchor': anchor || 'middle', 'stroke-width': (size * 0.28).toFixed(2) });
    if (color) t.setAttribute('fill', color);
    t.textContent = text;
    g.appendChild(t);
  }

  function renderAll() {
    renderGrid();
    renderLand();
    renderAreas();
    renderOverlays();
  }

  // ---------------------------------------------------------------- вид: сдвиг и масштаб
  function applyView() {
    svg().setAttribute('viewBox', `${vb.x} ${vb.y} ${vb.w} ${vb.h}`);
  }
  let lastK = k();
  function afterZoom() {
    applyView();
    if (Math.abs(k() - lastK) > 1e-6) { lastK = k(); renderOverlays(); }
  }
  function toSvg(clientX, clientY) {
    const m = svg().getScreenCTM();
    if (!m) return { x: vb.x + vb.w / 2, y: vb.y + vb.h / 2 };
    const p = svg().createSVGPoint();
    p.x = clientX; p.y = clientY;
    const r = p.matrixTransform(m.inverse());
    return { x: r.x, y: r.y };
  }
  function zoomAt(f, cx, cy) {
    const nw = vb.w * f;
    if (nw < 25 || nw > 1400) return;
    if (cx === undefined) { cx = vb.x + vb.w / 2; cy = vb.y + vb.h / 2; }
    vb = { x: cx - (cx - vb.x) * f, y: cy - (cy - vb.y) * f, w: nw, h: vb.h * f };
    afterZoom();
  }
  function resetView() {
    vb = initialView();
    afterZoom();
  }
  function focusOn(it) {
    let box = null;
    if (it.kind === 'country' && it.c.bbox) {
      const [x, y, w, h] = it.c.bbox;
      if (w < 900) box = { x, y, w, h };
    } else if (it.kind === 'point' || it.kind === 'micro') {
      const p = it.kind === 'point' ? proj(it.o.lon, it.o.lat) : (it.m.at || proj(it.m.lon, it.m.lat));
      const w0 = isKz ? 40 : 120;
      box = { x: p.x - w0 / 2, y: p.y - w0 / 4, w: w0, h: w0 / 2 };
    } else if (it.kind === 'line' || it.kind === 'area') {
      const pts = (it.o.pts || it.o.poly).map(([lon, lat]) => proj(lon, lat));
      const xs = pts.map((p) => p.x), ys = pts.map((p) => p.y);
      box = { x: Math.min(...xs), y: Math.min(...ys), w: Math.max(...xs) - Math.min(...xs), h: Math.max(...ys) - Math.min(...ys) };
    }
    if (!box) return;
    let w = Math.max(box.w * 1.8, 40), h = Math.max(box.h * 1.8, 20);
    if (w / h > W / H) h = w * H / W; else w = h * W / H;
    w = Math.min(w, W * 1.1); h = Math.min(h, H * 1.1);
    vb = { x: box.x + box.w / 2 - w / 2, y: box.y + box.h / 2 - h / 2, w, h };
    afterZoom();
  }

  function bindViewport() {
    const vp = document.getElementById('tmViewport');
    const pointers = new Map();
    let moved = false, pinch = null, downAt = null;

    vp.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button, input, #tmInfo')) return;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      downAt = { x: e.clientX, y: e.clientY };
      moved = false;
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        pinch = { d: Math.hypot(a.x - b.x, a.y - b.y) };
      }
    });
    vp.addEventListener('pointermove', (e) => {
      if (!pointers.has(e.pointerId)) {
        if (e.pointerType === 'mouse') hover(e);
        return;
      }
      const prev = pointers.get(e.pointerId);
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (!moved && downAt && Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y) > 4) {
        moved = true;
        try { vp.setPointerCapture(e.pointerId); } catch (err) {}
      }
      if (pointers.size === 1 && moved) {
        vp.classList.add('dragging');
        const a = toSvg(prev.x, prev.y), b = toSvg(e.clientX, e.clientY);
        vb.x -= b.x - a.x; vb.y -= b.y - a.y;
        applyView();
        hideTooltip();
      } else if (pointers.size === 2 && pinch) {
        const [a, b] = [...pointers.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d > 0 && pinch.d > 0) {
          const mid = toSvg((a.x + b.x) / 2, (a.y + b.y) / 2);
          zoomAt(pinch.d / d, mid.x, mid.y);
          pinch.d = d;
        }
      }
    });
    const end = (e) => {
      if (!pointers.has(e.pointerId)) return;
      pointers.delete(e.pointerId);
      if (pointers.size < 2) pinch = null;
      vp.classList.remove('dragging');
      if (!moved && pointers.size === 0 && e.type === 'pointerup') {
        const hit = document.elementFromPoint(e.clientX, e.clientY);
        const node = hit && hit.closest && hit.closest('[data-k]');
        if (node) select(node.getAttribute('data-k'), false);
        else select(null);
      }
    };
    vp.addEventListener('pointerup', end);
    vp.addEventListener('pointercancel', end);
    vp.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') hideTooltip(); });
    vp.addEventListener('wheel', (e) => {
      e.preventDefault();
      const p = toSvg(e.clientX, e.clientY);
      zoomAt(e.deltaY > 0 ? 1.18 : 0.85, p.x, p.y);
    }, { passive: false });

    vp.querySelectorAll('[data-act]').forEach((b) => b.addEventListener('click', () => {
      const a = b.getAttribute('data-act');
      if (a === 'in') zoomAt(0.75);
      else if (a === 'out') zoomAt(1.3);
      else if (a === 'reset') { highlight = null; select(null); resetView(); renderAll(); renderLegend(); }
      else if (a === 'labels') { showLabels = !showLabels; renderOverlays(); syncToggles(); }
      else if (a === 'grid') { showGrid = !showGrid; renderGrid(); syncToggles(); }
      else if (a === 'full') toggleFullscreen(vp);
    }));
  }
  function toggleFullscreen(vp) {
    try {
      if (document.fullscreenElement) document.exitFullscreen();
      else if (vp.requestFullscreen) vp.requestFullscreen();
    } catch (e) {}
  }
  function syncToggles() {
    const l = document.getElementById('tmLabelsBtn'), g = document.getElementById('tmGridBtn');
    if (l) l.classList.toggle('on', showLabels);
    if (g) g.classList.toggle('on', showGrid);
  }

  // ---------------------------------------------------------------- подсказка и карточка
  function groupLabel(g) { return legendById[g] ? txt(legendById[g]) : T('Санатқа кірмейді', 'Вне классификации'); }
  function hover(e) {
    const node = e.target.closest && e.target.closest('[data-k]');
    const tt = document.getElementById('tmTooltip');
    if (!node) { hideTooltip(); return; }
    const it = ITEMS[node.getAttribute('data-k')];
    if (!it) { hideTooltip(); return; }
    tt.innerHTML = `<div class="font-black text-amber-300">${esc(itemName(it))}</div>` + (quizHidesAnswer() ? '' :
      `<div class="text-[11px] mt-0.5" style="color:${it.g ? colorOf(it.g) : '#94A3B8'}">${esc(groupLabel(it.g))}</div>`);
    const r = document.getElementById('tmViewport').getBoundingClientRect();
    let x = e.clientX - r.left + 14, y = e.clientY - r.top + 14;
    if (x > r.width - 200) x = e.clientX - r.left - 200;
    tt.style.left = x + 'px';
    tt.style.top = y + 'px';
    tt.classList.remove('hidden');
  }
  function hideTooltip() { const tt = document.getElementById('tmTooltip'); if (tt) tt.classList.add('hidden'); }

  // Пока вопрос самопроверки без ответа — группу объекта не показываем
  function quizHidesAnswer() { return !!(quiz && quiz.qs[quiz.i] && !quiz.answered); }
  function markOnly(key) {
    selectedKey = key;
    document.getElementById('tmInfo').classList.add('hidden');
    renderLand(); renderAreas(); renderOverlays();
  }

  function select(key, zoom) {
    if (quizHidesAnswer() && key) { markOnly(key); return; }
    selectedKey = key;
    const box = document.getElementById('tmInfo');
    if (!key || !ITEMS[key]) {
      selectedKey = null;
      box.classList.add('hidden');
      renderLand(); renderAreas(); renderOverlays();
      return;
    }
    const it = ITEMS[key];
    if (zoom) focusOn(it);
    renderLand(); renderAreas(); renderOverlays();
    const note = itemNote(it);
    let extra = '';
    if (it.kind === 'country') {
      const cap = isRu() ? it.c.capital : (it.c.capital_kz || it.c.capital);
      if (cap) extra = `<div class="text-slate-400 mt-1">${T('Астанасы', 'Столица')}: <b class="text-slate-200">${esc(cap)}</b></div>`;
    }
    box.innerHTML = `
      <div class="flex items-start justify-between gap-2">
        <div class="min-w-0">
          <div class="font-black text-sm text-white">${esc(itemName(it))}</div>
          <div class="mt-1 inline-flex items-center gap-1.5 text-[11px] font-bold" style="color:${it.g ? colorOf(it.g) : '#94A3B8'}">
            <span class="w-2.5 h-2.5 rounded-sm" style="background:${it.g ? colorOf(it.g) : '#475569'}"></span>${esc(groupLabel(it.g))}
          </div>
          ${extra}
          ${note ? `<div class="text-slate-300 mt-1.5 leading-relaxed">${note}</div>` : ''}
        </div>
        <button id="tmInfoClose" class="shrink-0 w-6 h-6 rounded-lg bg-space-850 text-slate-400 hover:text-white">✕</button>
      </div>`;
    box.classList.remove('hidden');
    document.getElementById('tmInfoClose').onclick = () => select(null);
    hideTooltip();
  }

  // ---------------------------------------------------------------- легенда
  const openGroups = new Set();
  function renderLegend() {
    const box = document.getElementById('tmLegend');
    box.innerHTML = '';
    LEGEND.forEach((l) => {
      const members = itemsOfGroup(l.id).sort((a, b) => itemName(a).localeCompare(itemName(b), isRu() ? 'ru' : 'kk'));
      const open = openGroups.has(l.id);
      const wrap = document.createElement('div');
      wrap.className = 'rounded-xl border transition ' + (highlight === l.id ? 'border-cyan-400 bg-space-800' : 'border-slate-800 bg-space-850');
      wrap.innerHTML = `
        <div class="flex items-center gap-2 p-2.5 cursor-pointer" data-h="${esc(l.id)}">
          <span class="w-3.5 h-3.5 rounded-md shrink-0" style="background:${l.color};box-shadow:0 0 0 1px rgba(148,163,184,.55)"></span>
          <span class="flex-1 text-xs font-bold text-slate-200 leading-snug">${esc(txt(l))}</span>
          ${members.length ? `<button data-o="${esc(l.id)}" class="shrink-0 text-[10px] px-1.5 py-0.5 rounded-md bg-space-900 text-slate-400 hover:text-white font-mono font-bold">${members.length} ${open ? '▴' : '▾'}</button>` : ''}
        </div>
        ${open ? `<div class="px-2.5 pb-2.5 flex flex-wrap gap-1">${members.map((m) =>
          `<button data-s="${esc(m.key)}" class="text-[10.5px] px-1.5 py-0.5 rounded-md bg-space-900 text-slate-300 hover:text-white border border-slate-800">${esc(itemName(m))}</button>`).join('')}</div>` : ''}`;
      box.appendChild(wrap);
    });
    box.querySelectorAll('[data-h]').forEach((n) => n.addEventListener('click', (e) => {
      if (e.target.closest('[data-o]')) return;
      const id = n.getAttribute('data-h');
      highlight = highlight === id ? null : id;
      renderLegend(); renderLand(); renderAreas(); renderOverlays();
    }));
    box.querySelectorAll('[data-o]').forEach((n) => n.addEventListener('click', () => {
      const id = n.getAttribute('data-o');
      if (openGroups.has(id)) openGroups.delete(id); else openGroups.add(id);
      renderLegend();
    }));
    box.querySelectorAll('[data-s]').forEach((n) => n.addEventListener('click', () => {
      select(n.getAttribute('data-s'), true);
      document.getElementById('tmViewport').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }));
    document.getElementById('tmShowAll').classList.toggle('invisible', !highlight);
  }

  // ---------------------------------------------------------------- поиск
  function fillSearch() {
    const dl = document.getElementById('tmSearchList');
    const names = new Map();
    Object.values(ITEMS).forEach((it) => {
      if (it.kind === 'band') return;
      if (it.kind === 'country' && !it.g && !notes[it.id] && isKz && it.id !== 'KAZ') return;
      const n = itemName(it);
      if (n && !names.has(n)) names.set(n, it.key);
    });
    dl.innerHTML = [...names.keys()].sort((a, b) => a.localeCompare(b)).map((n) => `<option value="${esc(n)}"></option>`).join('');
    const inp = document.getElementById('tmSearch');
    inp.placeholder = T('🔍 Елді не нысанды табу…', '🔍 Найти страну или объект…');
    inp.onchange = () => {
      const v = inp.value.trim().toLowerCase();
      if (!v) return;
      let key = null;
      for (const [n, k2] of names) { if (n.toLowerCase() === v) { key = k2; break; } }
      if (!key) for (const [n, k2] of names) { if (n.toLowerCase().includes(v)) { key = k2; break; } }
      if (key) select(key, true);
      inp.blur();
    };
  }

  // ---------------------------------------------------------------- самопроверка
  let quiz = null;
  function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function buildQuiz() {
    const qs = [];
    (D.quiz || []).forEach((q) => {
      const opts = (isRu() ? q.o_ru : q.o_kz) || [];
      qs.push({ text: T(q.kz, q.ru), opts: opts.map((o, i) => ({ label: o, ok: i === q.a })), key: null });
    });
    const skip = new Set(D.noQuiz || []);
    if (LEGEND.length >= 2 && D.autoQuiz !== false) {
      const pool = shuffle(Object.values(ITEMS).filter((it) => it.g && legendById[it.g] && !skip.has(it.g) && it.kind !== 'band'));
      const want = Math.max(10 - qs.length, 4);
      pool.slice(0, want).forEach((it) => {
        let others = shuffle(LEGEND.filter((l) => l.id !== it.g)).slice(0, 3);
        const opts = shuffle([legendById[it.g], ...others]).map((l) => ({ label: txt(l), ok: l.id === it.g }));
        qs.push({ text: T(`«${itemName(it)}» — қай топқа жатады?`, `«${itemName(it)}» — к какой группе относится?`), opts, key: it.key });
      });
    }
    const custom = qs.filter((q) => !q.key), auto = qs.filter((q) => q.key);
    return [...shuffle(custom), ...auto].slice(0, 10);
  }
  function renderQuiz() {
    const box = document.getElementById('tmQuiz');
    const score = document.getElementById('tmQuizScore');
    if (!quiz) {
      score.textContent = '';
      box.innerHTML = `<p class="text-slate-400 leading-relaxed">${T('Картаны қарап шыққан соң өзіңді тексер: 10 сұрақ, жауап бірден көрсетіледі.', 'Изучив карту, проверь себя: 10 вопросов, ответ виден сразу.')}</p>
        <button id="tmQuizStart" class="w-full py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-space-950 font-black transition">${T('Тексеруді бастау', 'Начать проверку')}</button>`;
      document.getElementById('tmQuizStart').onclick = () => {
        const qs = buildQuiz();
        if (!qs.length) return;
        quiz = { qs, i: 0, right: 0, answered: false };
        renderQuiz();
      };
      return;
    }
    const q = quiz.qs[quiz.i];
    score.textContent = `${quiz.right}/${quiz.qs.length}`;
    if (!q) {
      const pct = Math.round(quiz.right / quiz.qs.length * 100);
      // Лучший результат по карте — для прогресса в каталоге карт на странице курса
      try {
        const all = JSON.parse(localStorage.getItem('geotany_maps_checked') || '{}') || {};
        if (!(all[mapNo] >= pct)) {
          all[mapNo] = pct;
          localStorage.setItem('geotany_maps_checked', JSON.stringify(all));
        }
      } catch (e) {}
      box.innerHTML = `<div class="text-center space-y-2 py-1">
          <div class="text-3xl">${pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '📖'}</div>
          <div class="text-sm font-black text-white">${T('Нәтиже', 'Результат')}: ${quiz.right} / ${quiz.qs.length} (${pct}%)</div>
          <p class="text-slate-400">${pct >= 80 ? T('Керемет! Карта жақсы меңгерілген.', 'Отлично! Карта хорошо усвоена.') : T('Легенданы тағы бір қарап, қайталап көр.', 'Посмотри легенду ещё раз и попробуй снова.')}</p>
        </div>
        <button id="tmQuizAgain" class="w-full py-2 rounded-xl bg-space-850 hover:bg-space-800 border border-slate-700 text-cyan-300 font-bold transition">${T('Қайта бастау', 'Пройти заново')}</button>`;
      document.getElementById('tmQuizAgain').onclick = () => { quiz = null; renderQuiz(); };
      return;
    }
    box.innerHTML = `<div class="text-[11px] text-slate-500 font-bold">${T('Сұрақ', 'Вопрос')} ${quiz.i + 1} / ${quiz.qs.length}</div>
      <div class="text-[13px] font-bold text-white leading-snug">${esc(q.text)}</div>
      <div class="space-y-1.5" id="tmQuizOpts">${q.opts.map((o, i) =>
        `<button data-q="${i}" class="w-full text-left px-3 py-2 rounded-xl bg-space-850 hover:bg-space-800 border border-slate-700 text-slate-200 transition leading-snug">${esc(o.label)}</button>`).join('')}</div>
      <div id="tmQuizNextWrap"></div>`;
    if (q.key) markOnly(q.key);
    box.querySelectorAll('[data-q]').forEach((b) => b.addEventListener('click', () => {
      if (quiz.answered) return;
      quiz.answered = true;
      if (q.key) select(q.key, false);
      const o = q.opts[+b.getAttribute('data-q')];
      if (o.ok) quiz.right++;
      box.querySelectorAll('[data-q]').forEach((bb) => {
        const oo = q.opts[+bb.getAttribute('data-q')];
        if (oo.ok) bb.className = 'w-full text-left px-3 py-2 rounded-xl bg-emerald-500/20 border border-emerald-400 text-emerald-200 font-bold leading-snug';
        else if (bb === b) bb.className = 'w-full text-left px-3 py-2 rounded-xl bg-red-500/15 border border-red-400 text-red-200 leading-snug';
      });
      score.textContent = `${quiz.right}/${quiz.qs.length}`;
      const nw = document.getElementById('tmQuizNextWrap');
      nw.innerHTML = `<button class="w-full py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-space-950 font-black transition">${quiz.i + 1 < quiz.qs.length ? T('Келесі →', 'Дальше →') : T('Нәтижені көру', 'Показать результат')}</button>`;
      nw.firstChild.onclick = () => { quiz.i++; quiz.answered = false; renderQuiz(); };
    }));
  }

  // ---------------------------------------------------------------- тексты
  function courseUrl() { return `../geotanu.html?lang=${lang}#section-nomenklatura_speaking`; }
  function applyTexts() {
    document.documentElement.lang = isRu() ? 'ru' : 'kk';
    const title = txt(D, 'title');
    document.title = `${title} | GeoTany`;
    document.getElementById('tmHeadTitle').textContent = title.replace(/^\d+\.\s*/, '');
    document.getElementById('tmTitle').textContent = title;
    document.getElementById('tmDesc').textContent = txt(D, 'desc');
    document.getElementById('tmCat').textContent = T(CAT_INFO.kz, CAT_INFO.ru);
    document.getElementById('tmBackText').textContent = T('Карталар тізіміне', 'К списку карт');
    document.getElementById('tmBack').href = courseUrl();
    document.getElementById('tmPrev').href = `map_${pad2(prevNo)}.html?lang=${lang}`;
    document.getElementById('tmNext').href = `map_${pad2(nextNo)}.html?lang=${lang}`;
    document.getElementById('tmHintText').textContent = T(
      'Картаны саусақпен не тышқанмен жылжытып, үлкейтуге болады. Елді не белгіні басып, түсініктемесін оқы. Легендадағы топты бассаң — тек сол топ ерекшеленеді, ▾ — тізімін ашады.',
      'Карту можно двигать и увеличивать пальцем или мышью. Нажми на страну или значок — появится пояснение. Нажми на группу в легенде — выделится только она, ▾ — откроет список.');
    document.getElementById('tmTheoryTitle').textContent = T('Түсіндірме және ҰБТ-ға маңызы', 'Пояснение и значение для ЕНТ');
    document.getElementById('tmTheory').innerHTML = txt(D, 'theory');
    document.getElementById('tmLegendTitle').textContent = T('Шартты белгілер', 'Условные обозначения');
    document.getElementById('tmShowAll').textContent = T('Барлығын көрсету', 'Показать все');
    document.getElementById('tmQuizTitle').textContent = T('Өзіңді тексер', 'Проверь себя');
    document.getElementById('tmQuest').href = `quest.html?map=${mapNo}&lang=${lang}`;
    document.getElementById('tmQuestText').textContent = T('Карта бойынша емтихан: контур картадан табу, балл мұғалімге жіберіледі', 'Экзамен по карте: найти на контурной карте, балл уходит учителю');
    const facts = (isRu() ? D.facts_ru : D.facts_kz) || [];
    document.getElementById('tmFactsBox').classList.toggle('hidden', !facts.length);
    document.getElementById('tmFactsTitle').textContent = T('ҰБТ-да есте сақта', 'Запомни для ЕНТ');
    document.getElementById('tmFacts').innerHTML = facts.map((f) => `<li class="flex gap-2"><span class="text-amber-400">•</span><span>${f}</span></li>`).join('');
    document.getElementById('tmResetBtn').title = T('Бастапқы көрініс', 'Исходный вид');
    document.getElementById('tmLabelsBtn').title = T('Атауларды көрсету', 'Показать подписи');
    document.getElementById('tmGridBtn').title = T('Экватор, тропиктер, полярлық шеңберлер', 'Экватор, тропики, полярные круги');
    document.getElementById('tmFullBtn').title = T('Толық экран', 'Во весь экран');
    const on = 'px-2 py-1 rounded-lg bg-emerald-500 text-space-950 font-black transition';
    const off = 'px-2 py-1 rounded-lg text-slate-400 hover:text-white transition';
    document.getElementById('tmLangKz').className = isRu() ? off : on;
    document.getElementById('tmLangRu').className = isRu() ? on : off;
  }
  function setLang(l) {
    if (l === lang) return;
    lang = l;
    try {
      const u = new URL(location.href);
      u.searchParams.set('lang', l);
      history.replaceState(null, '', u.toString());
    } catch (e) {}
    applyTexts();
    renderAll();
    renderLegend();
    fillSearch();
    quiz = null;
    renderQuiz();
    if (selectedKey) select(selectedKey, false);
  }

  // ---------------------------------------------------------------- запуск
  function boot() {
    injectStyles();
    buildPage();
    buildDefs();
    applyView();
    applyTexts();
    renderAll();
    renderLegend();
    fillSearch();
    renderQuiz();
    syncToggles();
    bindViewport();
    document.getElementById('tmLangKz').onclick = () => setLang('kz');
    document.getElementById('tmLangRu').onclick = () => setLang('ru');
    document.getElementById('tmShowAll').onclick = () => { highlight = null; renderLegend(); renderLand(); renderAreas(); renderOverlays(); };
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape') select(null); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
