/* GeoTany — GeoQuest: экзамен по тематической карте (maps/quest.html?map=NN).
 *
 * Экзамен собирается из тех же данных, что и карта (data/map_NN.js, формат — в thematic_map.js):
 *   • группы стран из легенды → «Найдите N стран группы …» (до 5 стран в вопросе);
 *   • точки, линии, области, пояса → «Покажите на карте: …».
 * На карте нет легенды, цветов и подписей — как на контурной карте.
 * Балл из 100 и оценка — по той же формуле, что у GeoQuest в темах #18 и #19
 * (README → «Результаты экзаменов»); результат уходит учителю на лист «Результаты».
 * Лучший балл по карте хранится в localStorage → geotany_maps_quest (его показывает каталог карт).
 */
(function () {
  'use strict';

  const D = window.MAP_DATA || {};
  const W = 1000, H = 540;
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const MAX_ROUNDS = 10;          // вопросов в экзамене
  const MAX_COUNTRY_ROUNDS = 6;   // из них — про группы стран, если на карте есть и объекты
  const COUNTRY_NEED = 5;         // сколько стран искать в одном вопросе
  const TIME_NORM_MIN = 15;       // до стольких минут время не снижает балл
  const PENDING_KEY = 'geotany_pending_results';
  const BEST_KEY = 'geotany_maps_quest';

  // Те же справочники и проекция, что в thematic_map.js
  const ID_ALIAS = { FRA: 'France', NOR: 'Norway', XKX: 'Kosovo', KOS: 'Kosovo' };
  const realId = (id) => ID_ALIAS[id] || id;
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
  const ROB_X = [1.0000, 0.9986, 0.9954, 0.9900, 0.9822, 0.9730, 0.9600, 0.9427, 0.9216, 0.8962, 0.8679, 0.8350, 0.7986, 0.7597, 0.7186, 0.6732, 0.6213, 0.5722, 0.5322];
  const ROB_Y = [0.0000, 0.0620, 0.1240, 0.1860, 0.2480, 0.3100, 0.3720, 0.4340, 0.4958, 0.5571, 0.6176, 0.6769, 0.7346, 0.7903, 0.8435, 0.8936, 0.9394, 0.9761, 1.0000];
  function proj(lon, lat) {
    const a = Math.min(Math.abs(lat), 89.99) / 5, i = Math.floor(a), f = a - i;
    const X = ROB_X[i] + (ROB_X[i + 1] - ROB_X[i]) * f;
    const Y = ROB_Y[i] + (ROB_Y[i + 1] - ROB_Y[i]) * f;
    return { x: 499.94 + 2.6985 * X * lon, y: 304.9 - 246.31 * Y * Math.sign(lat) };
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
  const txt = (o, base, ru) => {
    if (!o) return '';
    const k = base ? base + '_' : '';
    const R = ru === undefined ? isRu() : ru;
    return (R ? (o[k + 'ru'] ?? o[k + 'kz']) : (o[k + 'kz'] ?? o[k + 'ru'])) || '';
  };
  const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  // ---------------------------------------------------------------- данные карты
  const COUNTRIES = (typeof WORLD_COUNTRIES !== 'undefined') ? WORLD_COUNTRIES : [];
  const byId = {};
  COUNTRIES.forEach((c) => { byId[c.id] = c; });

  const LEGEND = (D.legend || []).map((l) => ({ id: l.id, kz: l.kz ?? l.label_kz, ru: l.ru ?? l.label_ru }));
  const legendById = {};
  LEGEND.forEach((l) => { legendById[l.id] = l; });

  const countryGroup = {};
  Object.entries(D.countries || D.assignments || {}).forEach(([g, ids]) => {
    (ids || []).forEach((id) => { const r = realId(id); if (!(r in countryGroup)) countryGroup[r] = g; });
  });

  const isKz = D.scope === 'kazakhstan';
  const mapNo = Number(D.id) || 1;
  const pad2 = (n) => String(n).padStart(2, '0');
  const titleOf = (ru) => txt(D, 'title', ru).replace(/^\d+\.\s*/, '');
  // Название экзамена в таблице учителя — по-русски и без языка, чтобы попытки считались вместе
  const QUIZ_ID = 'geoquest_map_' + pad2(mapNo);
  const QUIZ_TITLE = `GeoQuest: карта #${mapNo} — ${titleOf(true)}`;

  // Все объекты карты: страны, микрогосударства, точки, линии, области, пояса
  const ITEMS = {};
  COUNTRIES.forEach((c) => { ITEMS['c:' + c.id] = { key: 'c:' + c.id, kind: 'country', id: c.id, g: countryGroup[c.id] || null, c }; });
  Object.keys(countryGroup).forEach((id) => {
    if (byId[id] || !MICRO[id]) return;
    ITEMS['m:' + id] = { key: 'm:' + id, kind: 'micro', id, g: countryGroup[id], m: MICRO[id] };
  });
  (D.points || []).forEach((o, i) => { ITEMS['p:' + i] = { key: 'p:' + i, kind: 'point', g: o.g, o }; });
  (D.lines || []).forEach((o, i) => { ITEMS['l:' + i] = { key: 'l:' + i, kind: 'line', g: o.g, o }; });
  (D.areas || []).forEach((o, i) => { ITEMS['a:' + i] = { key: 'a:' + i, kind: 'area', g: o.g, o }; });
  (D.bands || []).forEach((o, i) => { ITEMS['b:' + i] = { key: 'b:' + i, kind: 'band', g: o.g, o }; });

  const isCountry = (it) => it.kind === 'country' || it.kind === 'micro';
  function nameOf(it, ru) {
    if (!it) return '';
    const R = ru === undefined ? isRu() : ru;
    if (it.kind === 'country') return R ? (it.c.name_ru || it.c.name_en) : (it.c.name_kz || it.c.name_ru);
    if (it.kind === 'micro') return R ? it.m.ru : it.m.kz;
    return txt(it.o, '', R);
  }
  // «Сопредельные государства (5 стран)» → без числа в скобках: сколько искать, говорит сам вопрос
  const cleanLabel = (s) => String(s || '').replace(/\s*\(\d+[^)]*\)\s*$/, '');
  const groupLabel = (g, ru) => (legendById[g] ? cleanLabel(txt(legendById[g], '', ru)) : '');

  // Что искать на карте — для текста вопроса и подсказок
  const KIND = {
    point: { kz: 'белгі', ru: 'значок', acc_kz: 'белгіні', acc_ru: 'значок' },
    line: { kz: 'сызық', ru: 'линия', acc_kz: 'сызықты', acc_ru: 'линию' },
    area: { kz: 'аймақ', ru: 'область', acc_kz: 'аймақты', acc_ru: 'область' },
    band: { kz: 'белдеу', ru: 'пояс', acc_kz: 'белдеуді', acc_ru: 'пояс' }
  };
  // Точки, линии и области в одном слое кликов: пояс ищем среди областей
  const LAYER_OF = { point: 'points', line: 'lines', area: 'areas', band: 'areas' };

  // ---------------------------------------------------------------- вопросы
  function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  function buildRounds() {
    let groups = [];
    LEGEND.forEach((l) => {
      const keys = Object.values(ITEMS).filter((it) => isCountry(it) && it.g === l.id).map((it) => it.key);
      if (keys.length) groups.push({ type: 'group', g: l.id, keys, need: Math.min(COUNTRY_NEED, keys.length) });
    });
    // Группа из одной страны (обычно сам Казахстан) — слишком просто, если есть другие группы
    if (groups.some((r) => r.keys.length > 1)) groups = groups.filter((r) => r.keys.length > 1);

    // Объекты с названием; одинаковые названия (например, город на двух слоях) — один вопрос
    const objs = shuffle(Object.values(ITEMS).filter((it) => !isCountry(it) && nameOf(it, true)));
    objs.sort((a, b) => (b.o.big ? 1 : 0) - (a.o.big ? 1 : 0));   // сначала крупные точки
    const seen = new Set();
    const objects = [];
    objs.forEach((it) => {
      const nm = nameOf(it, true).toLowerCase();
      if (seen.has(it.kind + nm)) return;
      seen.add(it.kind + nm);
      const keys = objs.filter((o) => o.kind === it.kind && nameOf(o, true).toLowerCase() === nm).map((o) => o.key);
      objects.push({ type: 'object', kind: it.kind, g: it.g, keys, main: it.key, need: 1 });
    });

    const groupCap = objects.length ? Math.max(MAX_COUNTRY_ROUNDS, MAX_ROUNDS - objects.length) : MAX_ROUNDS;
    const chosen = shuffle(groups).slice(0, groupCap);
    // Карта только из 2–3 групп стран: ищем больше стран в вопросе, чтобы экзамен не был слишком коротким
    if (!objects.length && chosen.length && chosen.length < 4) {
      const need = Math.min(8, Math.ceil(20 / chosen.length));
      chosen.forEach((r) => { r.need = Math.min(r.keys.length, need); });
    }
    return chosen.concat(objects.slice(0, MAX_ROUNDS - chosen.length));
  }

  const rounds = buildRounds();
  const MAX_SCORE = rounds.reduce((s, r) => s + r.need, 0);
  const ERROR_ALLOWANCE = Math.max(1, Math.round(MAX_SCORE * 0.15));

  function plural(n, one, few, many) {
    const m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return one;
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
    return many;
  }
  function roundText(r) {
    if (r.type === 'group') {
      const lbl = groupLabel(r.g);
      if (r.need === r.keys.length) {
        return T(`«${lbl}» тобындағы барлық елдерді табыңыз (${r.need})`,
          `Найдите все страны группы «${lbl}» (${r.need})`);
      }
      return T(`«${lbl}» тобынан кез келген ${r.need} елді табыңыз`,
        `Найдите любые ${r.need} ${plural(r.need, 'страну', 'страны', 'стран')} группы «${lbl}»`);
    }
    return T(`Картадан көрсетіңіз: ${nameOf(ITEMS[r.main])}`, `Покажите на карте: ${nameOf(ITEMS[r.main])}`);
  }
  function roundHint(r) {
    if (r.type === 'group') return T('Елдерді картадан басыңыз. Шағын мемлекеттер дөңгелекпен белгіленген.', 'Нажимайте на страны. Маленькие государства отмечены кружками.');
    const k = KIND[r.kind];
    const lbl = groupLabel(r.g);
    return T(`Іздейтін нысан: ${k.kz}`, `Что искать: ${k.ru}`) + (lbl ? ` · ${lbl}` : '');
  }

  // ---------------------------------------------------------------- страница
  function buildPage() {
    const app = document.getElementById('app') || document.body;
    app.innerHTML = `
  <header class="sticky top-0 z-40 bg-space-950/90 backdrop-blur-xl border-b border-slate-800/80">
    <div class="max-w-6xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2">
      <div class="flex items-center gap-2 min-w-0">
        <a id="gqBack" href="#" class="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-space-850 hover:bg-space-800 text-slate-300 hover:text-white border border-slate-700/80 text-xs sm:text-sm font-bold transition">
          <span>←</span><span id="gqBackText"></span>
        </a>
        <span class="shrink-0 text-[11px] px-2 py-1 rounded-lg bg-amber-500/10 text-amber-300 font-extrabold border border-amber-500/30">🏁 GeoQuest #${mapNo}</span>
        <span id="gqHeadTitle" class="text-xs sm:text-sm font-bold text-slate-300 truncate hidden md:inline"></span>
      </div>
      <div class="flex items-center bg-space-900 p-0.5 rounded-xl border border-slate-800 text-xs font-bold shrink-0">
        <button id="gqLangKz" type="button" class="px-2 py-1 rounded-lg transition">KZ</button>
        <button id="gqLangRu" type="button" class="px-2 py-1 rounded-lg transition">RU</button>
      </div>
    </div>
  </header>

  <main class="flex-1 max-w-6xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-4">
    <section id="gqStart" class="gq-card space-y-5"></section>

    <section id="gqExam" class="hidden space-y-3">
      <div class="gq-card !p-4 sm:!p-5 space-y-3">
        <div class="flex flex-wrap items-center justify-between gap-2 text-xs font-black">
          <span id="gqQNum" class="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30"></span>
          <div class="flex flex-wrap items-center gap-2">
            <span id="gqQFound" class="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30"></span>
            <span id="gqQMistakes" class="px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/30"></span>
            <span id="gqTimer" class="px-2.5 py-1 rounded-full bg-space-900 text-slate-300 border border-slate-700 tabular-nums">00:00</span>
          </div>
        </div>
        <h2 id="gqQText" class="text-lg sm:text-xl font-black text-white leading-snug"></h2>
        <p id="gqQHint" class="text-xs text-slate-400 -mt-1"></p>
        <div class="h-1.5 rounded-full bg-space-900 overflow-hidden"><div id="gqBar" class="h-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-all" style="width:0%"></div></div>
        <div id="gqFeedback" aria-live="polite"></div>
        <div id="gqChips" class="flex flex-wrap gap-1.5"></div>
        <div class="flex flex-wrap items-center gap-2 pt-1">
          <button id="gqFinishQ" type="button" class="gq-sub"></button>
          <button id="gqNextQ" type="button" class="gq-main hidden"></button>
        </div>
      </div>

      <div id="gqWrap">
        <svg id="gqSvg" viewBox="0 0 ${W} ${H}" xmlns="${SVG_NS}" role="img" aria-label="Map">
          <defs id="gqDefs"></defs>
          <rect x="-2000" y="-2000" width="5000" height="4540" fill="#0a1628"></rect>
          <g id="gqLand"></g>
          <g id="gqBorder" pointer-events="none"></g>
          <g id="gqAreas"></g>
          <g id="gqLines"></g>
          <g id="gqPoints"></g>
          <g id="gqMicro"></g>
          <g id="gqLabels" pointer-events="none"></g>
        </svg>
        <div class="gq-zoom">
          <button type="button" data-act="in" aria-label="Zoom in">+</button>
          <button type="button" data-act="out" aria-label="Zoom out">−</button>
          <button type="button" data-act="reset" id="gqResetBtn">⟲</button>
          ${isKz ? '' : '<button type="button" data-act="world" id="gqWorldBtn">🌍</button>'}
        </div>
      </div>
    </section>

    <section id="gqResult" class="hidden gq-card space-y-5"></section>
  </main>`;
  }

  function injectStyles() {
    const st = document.createElement('style');
    st.textContent = `
      .gq-card { padding: 1.25rem; border-radius: 1.25rem; background: linear-gradient(180deg, #111a2e 0%, #0c1322 100%); border: 1px solid #1e293b; box-shadow: 0 20px 25px -15px rgba(0,0,0,.6); }
      @media (min-width: 640px) { .gq-card { padding: 1.75rem; } }
      .gq-main { display: inline-flex; align-items: center; justify-content: center; gap: .5rem; padding: .8rem 1.4rem; border-radius: .9rem; font-weight: 900; font-size: .9rem; color: #0b0f19; background: linear-gradient(90deg, #fbbf24, #34d399); box-shadow: 0 10px 25px -10px rgba(251,191,36,.6); transition: transform .15s, filter .15s; }
      .gq-main:hover { filter: brightness(1.08); transform: translateY(-1px); }
      .gq-main:disabled { opacity: .5; cursor: default; transform: none; }
      .gq-sub { display: inline-flex; align-items: center; justify-content: center; gap: .4rem; padding: .55rem .9rem; border-radius: .75rem; font-weight: 800; font-size: .78rem; color: #cbd5e1; background: #0f172a; border: 1px solid #334155; transition: border-color .15s, color .15s; }
      .gq-sub:hover { border-color: #fbbf24; color: #fff; }
      .gq-main.hidden, .gq-sub.hidden { display: none; }
      :focus-visible { outline: 3px solid #fbbf24; outline-offset: 2px; }
      .gq-chip { display: inline-flex; align-items: center; gap: .3rem; padding: .25rem .6rem; border-radius: .6rem; font-size: .74rem; font-weight: 800; border: 1px solid; }
      .gq-chip.ok { color: #a7f3d0; background: rgba(16,185,129,.12); border-color: rgba(16,185,129,.45); }
      .gq-chip.miss { color: #fde68a; background: rgba(245,158,11,.12); border-color: rgba(245,158,11,.45); }
      #gqFeedback { min-height: 2.6rem; }
      #gqChips:empty { display: none; }
      .gq-fb { padding: .55rem .8rem; border-radius: .7rem; font-size: .82rem; font-weight: 700; border: 1px solid; }
      .gq-fb.ok { color: #a7f3d0; background: rgba(16,185,129,.12); border-color: rgba(16,185,129,.45); }
      .gq-fb.bad { color: #fecdd3; background: rgba(244,63,94,.12); border-color: rgba(244,63,94,.45); }
      .gq-fb.info { color: #c7d2fe; background: rgba(99,102,241,.12); border-color: rgba(99,102,241,.45); }
      .gq-tbl { width: 100%; text-align: left; font-size: .8rem; border-collapse: collapse; }
      .gq-tbl th { padding: .6rem .7rem; background: #0f172a; color: #fcd34d; font-weight: 800; border-bottom: 1px solid #1e293b; }
      .gq-tbl td { padding: .6rem .7rem; color: #cbd5e1; border-bottom: 1px solid rgba(30,41,59,.7); vertical-align: top; }
      .gq-tbl td.num { font-variant-numeric: tabular-nums; white-space: nowrap; }

      /* Карта: вопрос и карта видны на экране вместе */
      #gqWrap { position: relative; height: max(320px, min(calc(100vh - 340px), 640px)); border-radius: 1rem; overflow: hidden; border: 1px solid #1e293b; background: #0a1628; touch-action: none; user-select: none; -webkit-user-select: none; }
      #gqSvg { width: 100%; height: 100%; display: block; cursor: grab; }
      #gqSvg.dragging { cursor: grabbing; }
      .gq-land { fill: #1e293b; stroke: #0a1628; stroke-width: .7; vector-effect: non-scaling-stroke; cursor: pointer; transition: fill .2s; }
      .gq-land:hover { fill: #334155; }
      .gq-area { fill: rgba(148,163,184,.14); stroke: rgba(226,232,240,.45); stroke-width: 1; vector-effect: non-scaling-stroke; cursor: pointer; transition: fill .2s; }
      .gq-area:hover { fill: rgba(148,163,184,.3); }
      .gq-l .gq-line { stroke: #94a3b8; transition: stroke .2s; }
      .gq-l:hover .gq-line { stroke: #e2e8f0; }
      .gq-pt { fill: #e2e8f0; stroke: #0a1628; stroke-width: 1; vector-effect: non-scaling-stroke; cursor: pointer; }
      .gq-pt:hover { fill: #fbbf24; }
      .gq-mk { fill: rgba(148,163,184,.15); stroke: #94a3b8; stroke-width: 1.2; vector-effect: non-scaling-stroke; cursor: pointer; }
      .gq-mk:hover { fill: rgba(148,163,184,.4); }
      .gq-land.ok, .gq-pt.ok, .gq-mk.ok { fill: #10b981 !important; }
      .gq-area.ok { fill: rgba(16,185,129,.6) !important; }
      .gq-line.ok { stroke: #10b981 !important; }
      .gq-land.miss, .gq-pt.miss, .gq-mk.miss { fill: #f59e0b !important; }
      .gq-area.miss { fill: rgba(245,158,11,.6) !important; }
      .gq-line.miss { stroke: #f59e0b !important; }
      .gq-land.bad, .gq-pt.bad, .gq-mk.bad, .gq-area.bad { fill: #f43f5e !important; }
      .gq-line.bad { stroke: #f43f5e !important; }
      .gq-land.info, .gq-pt.info, .gq-mk.info, .gq-area.info { fill: #6366f1 !important; }
      .gq-line.info { stroke: #6366f1 !important; }
      .gq-lbl { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; font-weight: 800; fill: #fff; paint-order: stroke; stroke: #0a1628; stroke-linejoin: round; pointer-events: none; }
      .gq-zoom { position: absolute; right: .6rem; top: .6rem; display: flex; flex-direction: column; gap: .35rem; }
      .gq-zoom button { width: 2.25rem; height: 2.25rem; border-radius: .6rem; background: rgba(15,23,42,.92); border: 1px solid #334155; color: #e2e8f0; font-weight: 900; font-size: 1rem; }
      .gq-zoom button:hover { border-color: #fbbf24; }
      @media (prefers-reduced-motion: reduce) { .gq-land, .gq-area, .gq-main { transition: none; } }
    `;
    document.head.appendChild(st);
  }

  // ---------------------------------------------------------------- карта
  const svg = () => document.getElementById('gqSvg');
  function el(tag, attrs) {
    const e = document.createElementNS(SVG_NS, tag);
    Object.entries(attrs || {}).forEach(([k, v]) => { if (v !== undefined && v !== null) e.setAttribute(k, v); });
    return e;
  }
  function polyPath(pts) {
    return pts.map(([lon, lat], i) => { const p = proj(lon, lat); return (i ? 'L' : 'M') + p.x.toFixed(1) + ' ' + p.y.toFixed(1); }).join(' ') + ' Z';
  }

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
    const pad = 0.08;
    let w = box.w * (1 + pad * 2), h = box.h * (1 + pad * 2);
    if (w / h > W / H) h = w * H / W; else w = h * W / H;
    return { x: box.x + box.w / 2 - w / 2, y: box.y + box.h / 2 - h / 2, w, h };
  }
  let vb = initialView();
  // Значки и подписи — в пикселях экрана (как в thematic_map.js): pxU() — единиц карты на 1 пиксель
  function pxU() {
    const s = svg();
    const w = (s && s.clientWidth) || 800, h = (s && s.clientHeight) || 450;
    return 1 / Math.min(w / vb.w, h / vb.h);
  }
  const labelPx = () => (window.innerWidth < 640 ? 10 : 11.5);

  const nodesOf = {};   // key → [svg-элементы, которые красим]
  const addNode = (key, n) => { (nodesOf[key] = nodesOf[key] || []).push(n); };
  const dots = { points: [], micro: [] };   // кружки: размер и раздвигание пересчитываем при масштабе
  const shownAt = {};   // key → где значок нарисован (после раздвигания)

  function buildMap() {
    const defs = document.getElementById('gqDefs');
    const clipLand = el('clipPath', { id: 'gqClipLand' });
    COUNTRIES.forEach((c) => clipLand.appendChild(el('path', { d: c.path })));
    defs.appendChild(clipLand);
    if (byId.KAZ) {
      const ck = el('clipPath', { id: 'gqClipKAZ' });
      ck.appendChild(el('path', { d: byId.KAZ.path }));
      defs.appendChild(ck);
    }

    const gLand = document.getElementById('gqLand');
    COUNTRIES.forEach((c) => {
      const p = el('path', { d: c.path, class: 'gq-land', 'data-k': 'c:' + c.id });
      gLand.appendChild(p);
      addNode('c:' + c.id, p);
    });
    if (isKz && byId.KAZ) {
      document.getElementById('gqBorder').appendChild(el('path', { d: byId.KAZ.path, fill: 'none', stroke: '#22D3EE', 'stroke-width': 1.6, 'vector-effect': 'non-scaling-stroke' }));
    }

    const gAreas = document.getElementById('gqAreas');
    (D.bands || []).forEach((bd, i) => {
      const y1 = proj(0, Math.max(bd.from, bd.to)).y, y2 = proj(0, Math.min(bd.from, bd.to)).y;
      addArea(gAreas, 'b:' + i, `M -50 ${y1.toFixed(1)} H ${W + 50} V ${y2.toFixed(1)} H -50 Z`, bd.clip);
    });
    (D.areas || []).forEach((a, i) => addArea(gAreas, 'a:' + i, polyPath(a.poly), a.clip));

    const gLines = document.getElementById('gqLines');
    (D.lines || []).forEach((l, i) => {
      const pts = l.pts.map(([lon, lat]) => proj(lon, lat));
      if (pts.length < 2) return;
      const d = pts.map((p, j) => (j ? 'L' : 'M') + p.x.toFixed(2) + ' ' + p.y.toFixed(2)).join(' ');
      const g = el('g', { class: 'gq-l' });
      g.appendChild(el('path', { d, fill: 'none', stroke: 'transparent', 'stroke-width': 14, 'vector-effect': 'non-scaling-stroke', 'data-k': 'l:' + i, style: 'cursor:pointer' }));
      const vis = el('path', { d, fill: 'none', class: 'gq-line', 'stroke-width': 2.6, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-dasharray': l.dash ? '6 4' : null, 'vector-effect': 'non-scaling-stroke', 'pointer-events': 'none' });
      g.appendChild(vis);
      gLines.appendChild(g);
      addNode('l:' + i, vis);
    });

    const gPoints = document.getElementById('gqPoints');
    (D.points || []).forEach((o, i) => {
      const pos = proj(o.lon, o.lat);
      addDot(gPoints, dots.points, 'p:' + i, pos, o.big ? 6 : 4.5, 'gq-pt');
    });
    // Маленькие страны: кружок, чтобы по ним можно было попасть
    const gMicro = document.getElementById('gqMicro');
    Object.values(ITEMS).forEach((it) => {
      if (it.kind === 'micro') addDot(gMicro, dots.micro, it.key, it.m.at || proj(it.m.lon, it.m.lat), 4, 'gq-mk');
      else if (it.kind === 'country' && it.g && it.c.bbox && it.c.bbox[2] <= 6 && it.c.bbox[3] <= 6 && it.c.center && it.c.center.length === 2) {
        addDot(gMicro, dots.micro, it.key, { x: it.c.center[0], y: it.c.center[1] }, 4, 'gq-mk');
      }
    });
    resizeDots();
  }
  function addArea(g, key, d, clip) {
    const cp = clip === 'KAZ' ? 'url(#gqClipKAZ)' : (clip === 'none' ? null : 'url(#gqClipLand)');
    const p = el('path', { d, class: 'gq-area', 'clip-path': cp, 'data-k': key });
    g.appendChild(p);
    addNode(key, p);
  }
  function addDot(g, list, key, pos, rPx, cls) {
    // Невидимый круг побольше — чтобы в значок было легко попасть пальцем
    const hit = el('circle', { fill: 'transparent', 'data-k': key, style: 'cursor:pointer' });
    const c = el('circle', { class: cls, 'data-k': key });
    g.prepend(hit);   // все невидимые круги — под значками, чтобы не перекрывать соседние
    g.appendChild(c);
    addNode(key, c);
    list.push({ key, bx: pos.x, by: pos.y, r: rPx, c, hit });
  }
  // Размер в пикселях + раздвигание значков, которые на экране наезжают друг на друга
  // (иначе в нижний из двух совпадающих значков нельзя попасть)
  function resizeDots() {
    const u = pxU();
    Object.values(dots).forEach((list) => {
      list.forEach((d) => { d.x = d.bx; d.y = d.by; });
      for (let it = 0; it < 40; it++) {
        let moved = false;
        for (let i = 0; i < list.length; i++) {
          for (let j = i + 1; j < list.length; j++) {
            const a = list[i], b = list[j];
            const need = (a.r + b.r + 1.5) * u;
            let dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy);
            if (d >= need) continue;
            if (d < 1e-6) { const ang = (i * 2.4 + j) % (2 * Math.PI); dx = Math.cos(ang); dy = Math.sin(ang); d = 1; }
            const push = (need - Math.hypot(b.x - a.x, b.y - a.y)) / 2 + 0.01 * u;
            a.x -= (dx / d) * push; a.y -= (dy / d) * push;
            b.x += (dx / d) * push; b.y += (dy / d) * push;
            moved = true;
          }
        }
        if (!moved) break;
      }
      list.forEach((d) => {
        [d.c, d.hit].forEach((n) => { n.setAttribute('cx', d.x.toFixed(3)); n.setAttribute('cy', d.y.toFixed(3)); });
        d.c.setAttribute('r', (d.r * u).toFixed(3));
        d.hit.setAttribute('r', (d.r * 2.4 * u).toFixed(3));
        shownAt[d.key] = { x: d.x, y: d.y, r: d.r * u };
      });
    });
  }

  // В вопросе про страны видны и нажимаются только страны (линии и значки подсказали бы ответ),
  // в вопросе про объект видны все слои, а нажимается только слой искомого объекта
  function setClickable(r) {
    const layer = r && r.type === 'object' ? LAYER_OF[r.kind] : null;
    const set = (id, visible, clickable) => {
      const g = document.getElementById(id);
      g.style.display = visible ? '' : 'none';
      g.style.pointerEvents = clickable ? '' : 'none';
    };
    set('gqAreas', !!layer, layer === 'areas');
    set('gqLines', !!layer, layer === 'lines');
    set('gqPoints', !!layer, layer === 'points');
    set('gqMicro', !layer, !layer);
  }

  function paint(key, cls) {
    (nodesOf[key] || []).forEach((n) => { n.classList.remove('ok', 'miss', 'bad', 'info'); if (cls) n.classList.add(cls); });
  }
  function flash(key, cls) {
    const ns = nodesOf[key] || [];
    ns.forEach((n) => n.classList.add(cls));
    setTimeout(() => ns.forEach((n) => n.classList.remove(cls)), 900);
  }

  // Подписи найденных и показанных объектов
  const labelled = new Set();
  function labelPos(it) {
    if (it.kind === 'country') return it.c.center && it.c.center.length === 2 ? { x: it.c.center[0], y: it.c.center[1], a: 'middle' } : null;
    const u = pxU();
    if (it.kind === 'micro' || (it.kind === 'country' && shownAt[it.key])) {
      const p = shownAt[it.key] || it.m.at || proj(it.m.lon, it.m.lat);
      return { x: p.x, y: p.y - (p.r || 0) - 4 * u, a: 'middle' };
    }
    if (it.kind === 'point') { const p = shownAt[it.key] || proj(it.o.lon, it.o.lat); return { x: p.x + (p.r || 0) + 3 * u, y: p.y + 4 * u, a: 'start' }; }
    if (it.kind === 'line') { const pts = it.o.pts; const m = pts[Math.floor(pts.length / 2)]; const p = proj(m[0], m[1]); return { x: p.x, y: p.y - 5 * u, a: 'middle' }; }
    if (it.kind === 'area') {
      if (it.o.at) { const p = proj(it.o.at[0], it.o.at[1]); return { x: p.x, y: p.y, a: 'middle' }; }
      let x = 0, y = 0;
      it.o.poly.forEach(([lon, lat]) => { const p = proj(lon, lat); x += p.x; y += p.y; });
      return { x: x / it.o.poly.length, y: y / it.o.poly.length, a: 'middle' };
    }
    if (it.kind === 'band') { const mid = (it.o.from + it.o.to) / 2; return { x: vb.x + vb.w / 2, y: proj(0, mid).y, a: 'middle' }; }
    return null;
  }
  function renderLabels() {
    const g = document.getElementById('gqLabels');
    g.innerHTML = '';
    const size = labelPx() * pxU();
    labelled.forEach((key) => {
      const it = ITEMS[key];
      const p = it && labelPos(it);
      if (!p) return;
      const t = el('text', { x: p.x.toFixed(2), y: p.y.toFixed(2), 'font-size': size.toFixed(2), class: 'gq-lbl', 'text-anchor': p.a, 'stroke-width': (size * 0.28).toFixed(2) });
      t.textContent = nameOf(it);
      g.appendChild(t);
    });
  }
  function addLabel(key) { labelled.add(key); renderLabels(); }

  // ---------------------------------------------------------------- вид: сдвиг и масштаб
  function applyView() { svg().setAttribute('viewBox', `${vb.x} ${vb.y} ${vb.w} ${vb.h}`); }
  function afterZoom() { applyView(); resizeDots(); renderLabels(); }
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
  function setView(v) { vb = v; afterZoom(); }

  function bindViewport() {
    const vp = document.getElementById('gqWrap');
    const pointers = new Map();
    let moved = false, pinch = null, downAt = null;
    vp.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button')) return;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      downAt = { x: e.clientX, y: e.clientY };
      moved = false;
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        pinch = { d: Math.hypot(a.x - b.x, a.y - b.y) };
      }
    });
    vp.addEventListener('pointermove', (e) => {
      if (!pointers.has(e.pointerId)) return;
      const prev = pointers.get(e.pointerId);
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (!moved && downAt && Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y) > 4) {
        moved = true;
        try { vp.setPointerCapture(e.pointerId); } catch (err) {}
      }
      if (pointers.size === 1 && moved) {
        svg().classList.add('dragging');
        const a = toSvg(prev.x, prev.y), b = toSvg(e.clientX, e.clientY);
        vb.x -= b.x - a.x; vb.y -= b.y - a.y;
        applyView();
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
      svg().classList.remove('dragging');
      if (!moved && pointers.size === 0 && e.type === 'pointerup') {
        const hit = document.elementFromPoint(e.clientX, e.clientY);
        const node = hit && hit.closest && hit.closest('[data-k]');
        if (node) onMapClick(node.getAttribute('data-k'));
      }
    };
    vp.addEventListener('pointerup', end);
    vp.addEventListener('pointercancel', end);
    // Размеры значков в пикселях: при смене ширины окна и повороте телефона — пересчитать
    if (window.ResizeObserver) new ResizeObserver(() => { if (vp.clientWidth) { resizeDots(); renderLabels(); } }).observe(vp);
    vp.addEventListener('wheel', (e) => {
      e.preventDefault();
      const p = toSvg(e.clientX, e.clientY);
      zoomAt(e.deltaY > 0 ? 1.18 : 0.85, p.x, p.y);
    }, { passive: false });
    vp.querySelectorAll('[data-act]').forEach((b) => b.addEventListener('click', () => {
      const a = b.getAttribute('data-act');
      if (a === 'in') zoomAt(0.75);
      else if (a === 'out') zoomAt(1.3);
      else if (a === 'reset') setView(initialView());
      else if (a === 'world') setView({ x: 0, y: 0, w: W, h: H });
    }));
  }

  // ---------------------------------------------------------------- экзамен
  let state = null;
  const fmtTime = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  function show(id) {
    ['gqStart', 'gqExam', 'gqResult'].forEach((x) => document.getElementById(x).classList.toggle('hidden', x !== id));
  }

  function startExam() {
    if (!rounds.length) return;
    sendState = null;
    if (state) clearInterval(state.timer);
    state = {
      round: 0, startedAt: Date.now(), timer: null, done: false,
      found: new Set(),
      results: rounds.map(() => ({ found: [], missed: [], missedCount: 0, wrong: [], mistakes: 0 }))
    };
    show('gqExam');
    state.timer = setInterval(tick, 1000);
    tick();
    openRound(0);
  }

  function openRound(i) {
    state.round = i;
    state.done = false;
    state.found = new Set();
    // Каждый вопрос — на чистой контурной карте
    Object.keys(nodesOf).forEach((k) => paint(k, null));
    labelled.clear();
    setClickable(rounds[i]);
    setFeedback('', '');
    document.getElementById('gqFinishQ').classList.remove('hidden');
    document.getElementById('gqNextQ').classList.add('hidden');
    setView(initialView());
    renderRound();
  }

  function renderRound() {
    const r = rounds[state.round];
    const res = state.results[state.round];
    document.getElementById('gqQNum').textContent = `${T('Сұрақ', 'Вопрос')} ${state.round + 1} / ${rounds.length}`;
    document.getElementById('gqQFound').textContent = `✓ ${state.found.size} / ${r.need}`;
    document.getElementById('gqQMistakes').textContent = `✗ ${res.mistakes}`;
    document.getElementById('gqQText').textContent = roundText(r);
    document.getElementById('gqQHint').textContent = roundHint(r);
    const doneRounds = state.round + (state.done ? 1 : 0);
    document.getElementById('gqBar').style.width = Math.round(doneRounds / rounds.length * 100) + '%';
    document.getElementById('gqChips').innerHTML =
      res.found.map((k) => `<span class="gq-chip ok">✓ ${esc(nameOf(ITEMS[k]))}</span>`).join('') +
      res.missed.map((k) => `<span class="gq-chip miss">${esc(nameOf(ITEMS[k]))}</span>`).join('');
    document.getElementById('gqFinishQ').textContent = T('Сұрақты аяқтау', 'Закончить вопрос');
    document.getElementById('gqNextQ').textContent = state.round < rounds.length - 1 ? T('Келесі сұрақ →', 'Следующий вопрос →') : T('Нәтижені көру', 'Показать результат');
  }

  function setFeedback(cls, text) {
    const box = document.getElementById('gqFeedback');
    box.innerHTML = text ? `<div class="gq-fb ${cls}">${esc(text)}</div>` : '';
  }

  function onMapClick(key) {
    if (!state || state.done) return;
    const r = rounds[state.round];
    const res = state.results[state.round];
    const it = ITEMS[key];
    if (!it) return;
    const name = nameOf(it);

    if (r.type === 'object' && isCountry(it)) {
      const k = KIND[r.kind];
      setFeedback('info', T(`Елді емес, картадағы ${k.acc_kz} басыңыз. Айып жоқ.`, `Нажмите не на страну, а на ${k.acc_ru} на карте. Без штрафа.`));
      return;
    }
    if (state.found.has(key) || (r.type === 'object' && r.keys.some((k) => state.found.has(k)))) return;

    if (r.keys.includes(key)) {
      state.found.add(key);
      res.found.push(key);
      paint(key, 'ok');
      addLabel(key);
      setFeedback('ok', r.type === 'group' ? `✓ ${name} — «${groupLabel(r.g)}». +1` : `✓ ${name}. +1`);
      renderRound();
      if (state.found.size >= r.need) completeRound(true);
      return;
    }

    // Ошибку по одному и тому же объекту считаем один раз
    flash(key, 'bad');
    if (!res.wrong.includes(key)) {
      res.wrong.push(key);
      res.mistakes++;
    }
    setFeedback('bad', r.type === 'group'
      ? T(`✗ ${name} бұл топқа жатпайды. −1`, `✗ ${name} — не из этой группы. −1`)
      : T(`✗ Бұл — ${name}. −1`, `✗ Это — ${name}. −1`));
    renderRound();
  }

  function completeRound(allFound) {
    const r = rounds[state.round];
    const res = state.results[state.round];
    state.done = true;
    res.missedCount = Math.max(0, r.need - res.found.length);
    if (allFound) {
      setFeedback('ok', r.type === 'group' && r.need > 1 ? T('🎉 Барлығы табылды!', '🎉 Все найдены!') : T('🎉 Дұрыс!', '🎉 Верно!'));
    } else if (r.type === 'object') {
      r.keys.forEach((k) => { paint(k, 'miss'); addLabel(k); });
      res.missed = [r.main];
      setFeedback('info', T(`Дұрыс жауап картада сары түспен көрсетілді: ${nameOf(ITEMS[r.main])}.`, `Правильный ответ показан на карте жёлтым: ${nameOf(ITEMS[r.main])}.`));
      focusOn(ITEMS[r.main]);
    } else {
      // Показываем всю группу: так видно, какие страны в неё входят
      r.keys.filter((k) => !state.found.has(k)).forEach((k) => { paint(k, 'miss'); if (r.keys.length <= 12) addLabel(k); });
      if (r.need === r.keys.length) res.missed = r.keys.filter((k) => !state.found.has(k));
      setFeedback('info', T('Бұл топтың қалған елдері картада сары түспен көрсетілді. Оларды есте сақтаңыз.', 'Остальные страны этой группы показаны на карте жёлтым. Запомните их.'));
    }
    document.getElementById('gqFinishQ').classList.add('hidden');
    document.getElementById('gqNextQ').classList.remove('hidden');
    renderRound();
  }

  function focusOn(it) {
    let box = null;
    if (it.kind === 'point') { const p = proj(it.o.lon, it.o.lat); const w0 = isKz ? 60 : 160; box = { x: p.x - w0 / 2, y: p.y - w0 / 4, w: w0, h: w0 / 2 }; }
    else if (it.kind === 'line' || it.kind === 'area') {
      const pts = (it.o.pts || it.o.poly).map(([lon, lat]) => proj(lon, lat));
      const xs = pts.map((p) => p.x), ys = pts.map((p) => p.y);
      box = { x: Math.min(...xs), y: Math.min(...ys), w: Math.max(...xs) - Math.min(...xs), h: Math.max(...ys) - Math.min(...ys) };
    }
    if (!box) return;
    let w = Math.max(box.w * 1.8, 40), h = Math.max(box.h * 1.8, 20);
    if (w / h > W / H) h = w * H / W; else w = h * W / H;
    w = Math.min(w, W * 1.1); h = Math.min(h, H * 1.1);
    setView({ x: box.x + box.w / 2 - w / 2, y: box.y + box.h / 2 - h / 2, w, h });
  }

  function nextRound() {
    if (state.round < rounds.length - 1) { openRound(state.round + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    else showResult();
  }
  function tick() {
    if (!state) return;
    document.getElementById('gqTimer').textContent = fmtTime(Math.floor((Date.now() - state.startedAt) / 1000));
  }

  // ---------------------------------------------------------------- результат
  // Балл из 100 — та же формула, что у GeoQuest #18/#19:
  //   полнота = найдено / всего; точность = найдено / (найдено + ошибки сверх 15%);
  //   время — до TIME_NORM_MIN мин без штрафа, дальше −1%/мин, не больше −20%.
  function gradeScore(found, mistakes, seconds) {
    const completeness = MAX_SCORE ? found / MAX_SCORE : 0;
    const extra = Math.max(0, mistakes - ERROR_ALLOWANCE);
    const accuracy = found > 0 ? found / (found + extra) : 0;
    const minutes = seconds / 60;
    const timeK = minutes <= TIME_NORM_MIN ? 1 : Math.max(0.8, 1 - (minutes - TIME_NORM_MIN) / 100);
    const score = Math.round(100 * completeness * (0.5 + 0.5 * accuracy) * timeK);
    const mark = score >= 85 ? 5 : score >= 70 ? 4 : score >= 50 ? 3 : 2;
    return { score, mark, completeness, accuracy, timeK };
  }

  let lastSummary = null, lastPayload = null;
  function summarize() {
    const found = state.results.reduce((s, r) => s + r.found.length, 0);
    const mistakes = state.results.reduce((s, r) => s + r.mistakes, 0);
    const seconds = Math.floor((Date.now() - state.startedAt) / 1000);
    return Object.assign({ found, mistakes, seconds, total: MAX_SCORE, max: 100 }, gradeScore(found, mistakes, seconds));
  }

  function showResult() {
    clearInterval(state.timer);
    lastSummary = summarize();
    // Лучший балл по карте — для каталога карт на странице курса
    try {
      const best = JSON.parse(store.get(BEST_KEY) || '{}') || {};
      if (!(best[mapNo] >= lastSummary.score)) { best[mapNo] = lastSummary.score; store.set(BEST_KEY, JSON.stringify(best)); }
    } catch (e) {}
    show('gqResult');
    renderResult();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const student = (window.SMB && SMB.readSession) ? SMB.readSession() : null;
    lastPayload = buildPayload(lastSummary, student);
    if (!student) {
      if (store.get('geotany_admin_auth') === 'true') {
        setSend('info', T('Әкімші режимі: нәтиже мұғалімге жіберілмейді.', 'Режим администратора: результат учителю не отправляется.'));
        return;
      }
      savePending(lastPayload);
      setSend('bad', T('Нәтиже сақталды, бірақ әлі жіберілмеді: осы браузерде курсқа кіріңіз, содан кейін осы бетті қайта ашыңыз — нәтиже өзі жіберіледі.',
        'Результат сохранён, но ещё не отправлен: войдите в курс в этом браузере и снова откройте эту страницу — результат отправится сам.'));
      return;
    }
    sendResult(lastPayload);
  }

  function renderResult() {
    const sum = lastSummary;
    const pct = (v) => Math.round(v * 100) + '%';
    const verdict = (sum.mark >= 5
      ? T('Тамаша! Карта жақсы меңгерілген. ', 'Отлично! Карта усвоена прочно. ')
      : sum.mark === 4
        ? T('Жақсы. «Қайталау керек» бағанындағы нысандарды қайталап, қайта тапсырыңыз. ', 'Хорошо. Повторите объекты из столбца «Повторить» и пройдите ещё раз. ')
        : T('Картаны тағы бір рет қарап шығып, емтиханды қайта тапсырыңыз. Кездейсоқ баспаңыз — әр қате балды төмендетеді. ', 'Изучите карту ещё раз и пройдите экзамен заново. Не нажимайте наугад — каждая ошибка снижает балл. '))
      + T(`Толықтығы ${pct(sum.completeness)} · дәлдігі ${pct(sum.accuracy)} (${ERROR_ALLOWANCE} қатеге дейін ескерілмейді) · уақыт коэффициенті ×${sum.timeK.toFixed(2)}. Бағасы: ${sum.mark}.`,
        `Полнота ${pct(sum.completeness)} · точность ${pct(sum.accuracy)} (до ${ERROR_ALLOWANCE} ошибок не учитываются) · коэффициент времени ×${sum.timeK.toFixed(2)}. Оценка: ${sum.mark}.`);
    const tile = (lbl, val, cls) => `<div class="p-4 rounded-xl bg-space-900/70 border border-slate-800"><div class="text-[11px] font-black text-slate-400 uppercase tracking-wider">${lbl}</div><div class="text-3xl font-black tabular-nums ${cls}">${val}</div></div>`;
    const rows = rounds.map((r, i) => {
      const res = state.results[i];
      const left = res.missed.map((k) => nameOf(ITEMS[k]));
      if (!res.missed.length && res.missedCount) left.push(T(`«${groupLabel(r.g)}»: тағы ${res.missedCount}`, `«${groupLabel(r.g)}»: ещё ${res.missedCount}`));
      const fix = [...left, ...res.wrong.map((k) => '✗ ' + nameOf(ITEMS[k]))].join(', ') || '—';
      return `<tr><td class="num">${i + 1}</td><td>${esc(roundText(r))}</td><td class="num">${res.found.length} / ${r.need}</td><td class="num">${res.mistakes}</td><td>${esc(fix)}</td></tr>`;
    }).join('');
    document.getElementById('gqResult').innerHTML = `
      <h2 class="text-2xl font-black text-white">${T('Нәтиже', 'Результат')}</h2>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        ${tile(T('Балл', 'Балл'), `${sum.score} / 100`, 'text-white')}
        ${tile(T('Табылды', 'Найдено'), `${sum.found} / ${sum.total}`, 'text-emerald-300')}
        ${tile(T('Қателер', 'Ошибки'), sum.mistakes, 'text-rose-300')}
        ${tile(T('Уақыт', 'Время'), fmtTime(sum.seconds), 'text-amber-300')}
      </div>
      <p class="text-sm leading-relaxed text-slate-300">${esc(verdict)}</p>
      <div id="gqSend" class="gq-fb info"></div>
      <div class="overflow-x-auto rounded-xl border border-slate-800">
        <table class="gq-tbl">
          <thead><tr><th>#</th><th>${T('Сұрақ', 'Вопрос')}</th><th>${T('Табылды', 'Найдено')}</th><th>${T('Қате', 'Ошибки')}</th><th>${T('Қайталау керек', 'Повторить')}</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <div class="flex flex-wrap items-center gap-3">
        <button type="button" class="gq-main" id="gqAgain">🔁 ${T('Қайта тапсыру', 'Пройти заново')}</button>
        <a href="map_${pad2(mapNo)}.html?lang=${lang}" class="gq-sub">🗺️ ${T('Картаға оралу', 'Вернуться к карте')}</a>
        <a href="${courseUrl()}" class="gq-sub">📚 ${T('Карталар тізімі', 'Список карт')}</a>
      </div>`;
    document.getElementById('gqAgain').onclick = () => { window.scrollTo({ top: 0 }); startExam(); };
    if (sendState) setSend(sendState.cls, sendState.text(), sendState.retry);
  }

  // Названия в отчёте — по-русски, чтобы таблица учителя была единообразной
  function buildPayload(sum, student) {
    const missed = [], wrong = [];
    state.results.forEach((res, i) => {
      res.missed.forEach((k) => missed.push(nameOf(ITEMS[k], true)));
      if (!res.missed.length && res.missedCount) missed.push(`«${groupLabel(rounds[i].g, true)}»: ещё ${res.missedCount}`);
      res.wrong.forEach((k) => wrong.push(nameOf(ITEMS[k], true)));
    });
    const details = rounds.map((r, i) => `${i + 1}) ${state.results[i].found.length}/${r.need}, ош. ${state.results[i].mistakes}`).join('; ');
    return {
      email: student ? student.email : '',
      name: student ? (student.name || '') : '',
      grade: student ? (student.grade || '') : '',
      course: student ? (student.courseId || 'geotanu') : 'geotanu',
      quiz: QUIZ_ID,
      quizTitle: QUIZ_TITLE,
      lang,
      score: sum.score, max: sum.max, percent: sum.score, mark: sum.mark, total: sum.total,
      found: sum.found, mistakes: sum.mistakes, seconds: sum.seconds,
      missed: missed.join(', '),
      wrong: wrong.join(', '),
      details,
      finishedAt: new Date().toISOString()
    };
  }

  // Статус отправки помним как функцию текста — чтобы он переводился при смене языка
  let sendState = null;
  function setSend(cls, text, retry) {
    sendState = { cls, text: typeof text === 'function' ? text : () => text, retry };
    const box = document.getElementById('gqSend');
    if (!box) return;
    box.className = 'gq-fb ' + cls;
    box.textContent = sendState.text();
    if (retry) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'gq-sub ml-2 mt-2';
      b.textContent = T('Қайта жіберу', 'Отправить снова');
      b.onclick = () => sendResult(lastPayload);
      box.appendChild(document.createElement('br'));
      box.appendChild(b);
    }
  }
  async function sendResult(payload) {
    setSend('info', () => T('Нәтиже мұғалімге жіберілуде…', 'Отправляем результат учителю…'));
    const ok = await postResult(payload);
    if (ok) {
      dropPending(payload);
      setSend('ok', () => T('✓ Нәтиже мұғалімге жіберілді.', '✓ Результат отправлен учителю.'));
    } else {
      savePending(payload);
      setSend('bad', () => T('Нәтижені жіберу мүмкін болмады. Ол сақталды: «Қайта жіберу» басыңыз немесе бетті кейін ашыңыз.', 'Не удалось отправить результат. Он сохранён: нажмите «Отправить снова» или откройте страницу позже — отправим автоматически.'), true);
    }
  }
  async function postResult(payload) {
    try {
      // Весь класс сдаёт одновременно, сервер ставит записи в очередь — ждём до 45 с
      const r = await SMB.api('result', payload, 45000);
      return !!(r && r.status === 'success');
    } catch (e) {
      return false;
    }
  }
  function readPending() { try { return JSON.parse(store.get(PENDING_KEY) || '[]'); } catch (e) { return []; } }
  function writePending(list) { store.set(PENDING_KEY, JSON.stringify(list.slice(-10))); }
  function savePending(p) { const list = readPending().filter((x) => x.finishedAt !== p.finishedAt); list.push(p); writePending(list); }
  function dropPending(p) { writePending(readPending().filter((x) => x.finishedAt !== p.finishedAt)); }

  // Неотправленные результаты прошлых попыток (этой и других карт) — отправляем при открытии
  async function flushPending() {
    const list = readPending();
    if (!list.length || !window.SMB) return;
    const student = SMB.readSession ? SMB.readSession() : null;
    let sent = 0;
    for (const p of list) {
      if (!p.email) {
        if (!student) continue;
        Object.assign(p, { email: student.email, name: student.name || '', grade: student.grade || '', course: student.courseId || 'geotanu' });
        savePending(p);
      }
      if (await postResult(p)) { dropPending(p); sent++; }
    }
    if (sent) {
      const note = document.getElementById('gqPending');
      if (note) { note.textContent = T('✓ Алдыңғы нәтиже мұғалімге жіберілді.', '✓ Прошлый результат отправлен учителю.'); note.classList.remove('hidden'); }
    }
  }

  // ---------------------------------------------------------------- стартовый экран и тексты
  function courseUrl() { return `../geotanu.html?lang=${lang}#section-nomenklatura_speaking`; }
  function renderStart() {
    const s = (window.SMB && SMB.readSession) ? SMB.readSession() : null;
    const minutes = Math.max(5, Math.ceil(rounds.length * 1.5));
    const li = (icon, text) => `<li class="p-3 rounded-xl bg-space-900/70 border border-slate-800">${icon} ${text}</li>`;
    document.getElementById('gqStart').innerHTML = rounds.length ? `
      <div class="flex flex-wrap items-center gap-2 text-[11px] font-extrabold">
        <span class="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">${T('Емтихан', 'Экзамен')}</span>
        <span class="text-slate-400">· ${rounds.length} ${T('сұрақ', plural(rounds.length, 'вопрос', 'вопроса', 'вопросов'))}</span>
        <span class="text-slate-400">· ⏱️ ~${minutes} ${T('мин', 'мин')}</span>
      </div>
      <h1 class="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">GeoQuest: ${esc(titleOf())}</h1>
      <p class="text-sm leading-relaxed text-slate-300">${esc(txt(D, 'desc'))}</p>
      <ul class="grid sm:grid-cols-2 gap-2 text-sm text-slate-300">
        ${li('🗺️', T('Картада түстер мен атаулар жоқ — контур карта сияқты. Не іздеу керегі сұрақта жазылған.', 'На карте нет цветов и подписей — как на контурной карте. Что искать, написано в вопросе.'))}
        ${li('✅', T('Дұрыс тапқан әрбір нысан — <b class="text-white">+1 балл</b>.', 'Каждый верно найденный объект — <b class="text-white">+1 балл</b>.'))}
        ${li('❌', T('Қате басу балды төмендетеді. Кездейсоқ баспаңыз.', 'Неверный клик снижает балл. Не нажимайте наугад.'))}
        ${li('🔍', T('Картаны тартып жылжытыңыз, дөңгелекпен немесе +/− батырмаларымен үлкейтіңіз.', 'Карту можно двигать мышью или пальцем, увеличивать колёсиком или кнопками +/−.'))}
      </ul>
      <div class="text-xs text-slate-400">${esc(s
        ? T(`Нәтиже мұғалімге жіберіледі: ${s.name || ''} (${s.email}).`, `Результат будет отправлен учителю: ${s.name || ''} (${s.email}).`)
        : T('Курсқа кіру жазбасы жоқ — нәтиже жіберілмейді.', 'Нет записи о входе в курс — результат не будет отправлен.'))}</div>
      <div class="flex flex-wrap items-center gap-3">
        <button id="gqStartBtn" type="button" class="gq-main">🚀 ${T('Емтиханды бастау', 'Начать экзамен')}</button>
        <a href="map_${pad2(mapNo)}.html?lang=${lang}" class="gq-sub">📖 ${T('Алдымен картаны қарау', 'Сначала изучить карту')}</a>
      </div>
      <div id="gqPending" class="hidden gq-fb info"></div>` : `
      <h1 class="text-xl font-black text-white">GeoQuest: ${esc(titleOf())}</h1>
      <p class="text-sm text-slate-300">${T('Бұл картада емтиханға арналған нысандар жоқ.', 'На этой карте нет объектов для экзамена.')}</p>
      <a href="map_${pad2(mapNo)}.html?lang=${lang}" class="gq-sub">🗺️ ${T('Картаға оралу', 'Вернуться к карте')}</a>`;
    const b = document.getElementById('gqStartBtn');
    if (b) b.onclick = startExam;
  }

  function applyTexts() {
    document.documentElement.lang = isRu() ? 'ru' : 'kk';
    document.title = `GeoQuest #${mapNo}: ${titleOf()} | GeoTany`;
    document.getElementById('gqHeadTitle').textContent = titleOf();
    document.getElementById('gqBackText').textContent = T('Картаға', 'К карте');
    document.getElementById('gqBack').href = `map_${pad2(mapNo)}.html?lang=${lang}`;
    document.getElementById('gqResetBtn').title = T('Бастапқы көрініс', 'Исходный вид');
    const wb = document.getElementById('gqWorldBtn');
    if (wb) wb.title = T('Бүкіл әлем', 'Весь мир');
    const on = 'px-2 py-1 rounded-lg bg-amber-400 text-space-950 font-black transition';
    const off = 'px-2 py-1 rounded-lg text-slate-400 hover:text-white transition';
    document.getElementById('gqLangKz').className = isRu() ? off : on;
    document.getElementById('gqLangRu').className = isRu() ? on : off;
  }
  function setLang(l) {
    if (l === lang) return;
    lang = l;
    store.set('geotany_lang', l);
    try { const u = new URL(location.href); u.searchParams.set('lang', l); history.replaceState(null, '', u.toString()); } catch (e) {}
    applyTexts();
    renderStart();
    renderLabels();
    if (state && !document.getElementById('gqExam').classList.contains('hidden')) renderRound();
    if (lastSummary && !document.getElementById('gqResult').classList.contains('hidden')) renderResult();
    setFeedback('', '');
  }

  // ---------------------------------------------------------------- запуск
  function boot() {
    injectStyles();
    buildPage();
    buildMap();
    applyView();
    applyTexts();
    renderStart();
    bindViewport();
    document.getElementById('gqLangKz').onclick = () => setLang('kz');
    document.getElementById('gqLangRu').onclick = () => setLang('ru');
    document.getElementById('gqFinishQ').onclick = () => completeRound(false);
    document.getElementById('gqNextQ').onclick = nextRound;
    flushPending();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
