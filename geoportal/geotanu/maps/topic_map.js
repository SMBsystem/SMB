/* GeoTany — встроенные карты для страниц тем (topic_XX.html).
 *
 * В тексте темы ставится <div class="tmap" data-map="ключ"></div>, после вставки
 * текста страница вызывает TopicMaps.render(). Нужен world_countries.js
 * (контуры стран на холсте 1000×540, проекция Робинсона — как в thematic_map.js).
 * Контуры упрощены, области гор и равнин — схематичные.
 */
(function () {
  'use strict';

  const NS = 'http://www.w3.org/2000/svg';
  const ROB_X = [1.0000, 0.9986, 0.9954, 0.9900, 0.9822, 0.9730, 0.9600, 0.9427, 0.9216, 0.8962, 0.8679, 0.8350, 0.7986, 0.7597, 0.7186, 0.6732, 0.6213, 0.5722, 0.5322];
  const ROB_Y = [0.0000, 0.0620, 0.1240, 0.1860, 0.2480, 0.3100, 0.3720, 0.4340, 0.4958, 0.5571, 0.6176, 0.6769, 0.7346, 0.7903, 0.8435, 0.8936, 0.9394, 0.9761, 1.0000];
  function proj(lon, lat) {
    const a = Math.min(Math.abs(lat), 89.99) / 5, i = Math.floor(a), f = a - i;
    const X = ROB_X[i] + (ROB_X[i + 1] - ROB_X[i]) * f;
    const Y = ROB_Y[i] + (ROB_Y[i + 1] - ROB_Y[i]) * f;
    return { x: 499.94 + 2.6985 * X * lon, y: 304.9 - 246.31 * Y * Math.sign(lat) };
  }

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const f1 = (n) => n.toFixed(1);

  // ---- общие подписи соседей и водоёмов (lon, lat)
  const NEIGHBORS = [
    { lon: 63, lat: 56.3, kz: 'Ресей', ru: 'Россия' },
    { lon: 86.8, lat: 44.2, kz: 'Қытай', ru: 'Китай' },
    { lon: 63.5, lat: 41.4, kz: 'Өзбекстан', ru: 'Узбекистан' },
    { lon: 56, lat: 40.7, kz: 'Түрікменстан', ru: 'Туркменистан' },
    { lon: 75.5, lat: 41.5, kz: 'Қырғызстан', ru: 'Кыргызстан' },
    { lon: 88.8, lat: 48.6, kz: 'Моңғолия', ru: 'Монголия' }
  ];
  const LAKES = [
    { id: 'aral', poly: [[58.5, 46.0], [60.5, 46.8], [61.3, 46.2], [60.5, 45.0], [59, 44.2], [58.3, 44.7]], kz: 'Арал', ru: 'Арал', at: [59.5, 45.4], dx: -0.8 },
    { id: 'balkhash', poly: [[73.6, 46.5], [75, 46.8], [77, 46.4], [79, 46.8], [79, 46.2], [77, 45.8], [75, 46.0], [74, 45.8]], kz: 'Балқаш', ru: 'Балхаш', at: [76, 46.3], dy: 1.6 },
    { id: 'zaysan', poly: [[83.2, 48.1], [84.8, 48.2], [84.9, 47.8], [83.4, 47.7]], kz: '', ru: '' }
  ];
  const CASPIAN = { kz: 'Каспий теңізі', ru: 'Каспийское море', lon: 50.6, lat: 41.9 };

  // ---- схемы
  const DEFS = {
    plains: {
      view: [42, 40, 88.5, 57],
      fs: 0.0182,
      regions: [
        { c: '#60a5fa', kz: 'Шығыс Еуропа жазығы', ru: 'Восточно-Европейская равнина', at: [49.5, 52.8],
          poly: [[45, 54], [61.5, 54], [61, 50.5], [59.5, 49], [57, 47.8], [55, 46.5], [53, 45.8], [49, 45.5], [45, 45.5]] },
        { c: '#34d399', kz: 'Батыс Сібір жазығы', ru: 'Западно-Сибирская равнина', at: [70.5, 54.5],
          poly: [[61.3, 57], [81, 57], [81, 52.6], [77, 51.5], [73.5, 52], [70, 51.2], [66, 51.2], [63.5, 50.8], [61.3, 51.2]] },
        { c: '#fbbf24', kz: 'Тұран ойпаты', ru: 'Туранская низменность', at: [63, 42.9],
          poly: [[48, 46], [53, 45.8], [56, 47.5], [60, 48.6], [64, 48.8], [68, 48.2], [72, 47.5], [76, 46.2], [79, 45], [79, 40], [48, 40]] }
      ],
      ghosts: [{ kz: 'Сарыарқа (тау)', ru: 'Сарыарка (возвышенность)', at: [71.5, 49.6], c: '#94a3b8' }],
      lines: [{ c: '#7dd3fc', kz: 'Сырдария', ru: 'Сырдарья', pts: [[70.0, 40.8], [68.3, 41.2], [67, 43], [65.5, 44.85], [63, 45.8], [61.2, 46.2]], at: [66.4, 43.4], dx: 0.9 }],
      points: [
        { lon: 47.6, lat: 49.0, kz: 'Каспий маңы ойпаты', ru: 'Прикаспийская низм.', dx: 0.8 },
        { lon: 52.6, lat: 51.2, kz: 'Жалпы Сырт', ru: 'Общий Сырт', dx: 0.8 },
        { lon: 48.4, lat: 47.6, kz: 'Нарын құмдары', ru: 'пески Нарын', dx: 0.8, dy: 1.3 },
        { lon: 56.6, lat: 44.4, kz: 'Үстірт', ru: 'Устюрт', dx: 0.8 },
        { lon: 65.6, lat: 44.2, kz: 'Қызылқұм', ru: 'Кызылкум', dx: 0.8 },
        { lon: 70.6, lat: 46.4, kz: 'Бетпақдала', ru: 'Бетпакдала', dx: 0.8 },
        { lon: 71.43, lat: 51.13, kz: 'Астана', ru: 'Астана', dx: 0.8, big: true }
      ],
      caption: { kz: 'Қазақстанның 85%-ы жазық: батыста — Шығыс Еуропа, солтүстікте — Батыс Сібір, оңтүстікте — Тұран ойпаты. Ортасындағы сұр белдеу — Сарыарқа.',
                 ru: '85% Казахстана — равнины: на западе Восточно-Европейская, на севере Западно-Сибирская, на юге Туранская низменность. Серая полоса в центре — Сарыарка.' }
    },

    lowmt: {
      view: [42, 40, 88.5, 57],
      fs: 0.0182,
      regions: [
        { c: '#fb923c', kz: 'Сарыарқа', ru: 'Сарыарка', at: [70.6, 49.4],
          poly: [[67, 51.8], [72, 52.2], [76, 51.5], [78, 50], [77, 48], [74, 46.8], [70, 47.5], [67, 48.5], [66, 50]] },
        { c: '#fb923c', kz: 'Мұғалжар', ru: 'Мугалжары', at: [59.4, 51.0],
          poly: [[58.2, 50.3], [59.6, 50.2], [59.4, 48.8], [59, 47.5], [58.2, 47.5], [58, 49]] },
        { c: '#fb923c', kz: 'Маңғыстау таулары', ru: 'горы Мангистау', at: [50.2, 46.4],
          poly: [[50.8, 45], [52.5, 45.1], [53.8, 44.4], [53.3, 43.3], [51.6, 43.3], [50.7, 43.9]] }
      ],
      points: [
        { lon: 75.1, lat: 48.9, kz: 'Ақсораң 1565 м', ru: 'Аксоран 1565 м', type: 'peak', dx: 0.9, dy: 0.6 },
        { lon: 58.9, lat: 49.0, kz: 'Үлкен Боқтыбай 657 м', ru: 'Улькен-Бокты 657 м', type: 'peak', dx: -0.9, a: 'end' },
        { lon: 52.5, lat: 44.0, kz: 'Бесшоқы 556 м', ru: 'Бесшокы 556 м', type: 'peak', dx: 0.9, dy: 1.6 },
        { lon: 69.4, lat: 53.3, kz: 'Көкшетау', ru: 'Кокшетау', dx: 0.8 },
        { lon: 66.9, lat: 48.6, kz: 'Ұлытау', ru: 'Улытау', dx: -0.8, a: 'end' },
        { lon: 75.4, lat: 49.7, kz: 'Қарқаралы', ru: 'Каркаралы', dx: 0.8, dy: -0.8 },
        { lon: 75.7, lat: 50.8, kz: 'Баянауыл', ru: 'Баянаул', dx: 0.8 }
      ],
      caption: { kz: 'Аласа таулы 3 өлке: Қазақстанның ортасында — Сарыарқа, батыста — Мұғалжар, оңтүстік-батыста — Маңғыстау таулары.',
                 ru: 'Три низкогорных края: в центре страны — Сарыарка, на западе — Мугалжары, на юго-западе — горы Мангистау.' }
    },

    highmt: {
      view: [66, 40, 91, 53],
      fs: 0.0158,
      regions: [
        { c: '#34d399', kz: 'Алтай', ru: 'Алтай', at: [84.2, 51.3],
          poly: [[82.5, 50.8], [85, 51], [87.4, 50.2], [87.2, 49], [84.5, 48.6], [82.8, 49.5]] },
        { c: '#fbbf24', kz: 'Тарбағатай', ru: 'Тарбагатай', at: [80.6, 46.3],
          poly: [[81.5, 47.3], [83.8, 47.5], [84, 47], [82, 46.8]] },
        { c: '#fbbf24', kz: 'Сауыр', ru: 'Саур', at: [86.2, 46.9],
          poly: [[84.3, 47.6], [85.6, 47.3], [85.5, 46.8], [84.2, 47]] },
        { c: '#60a5fa', kz: 'Жетісу Алатауы', ru: 'Жетысуский Алатау', at: [76.6, 45.0],
          poly: [[77, 44.3], [79, 45.5], [80.8, 45.3], [80.3, 44.3], [78, 43.9]] },
        { c: '#e879f9', kz: 'Тянь-Шань', ru: 'Тянь-Шань', at: [75.6, 42.0],
          poly: [[74, 43.3], [77.5, 43.4], [80.3, 42.6], [80.3, 42], [75, 41.7], [71, 42.2]], clip: false },
        { c: '#e879f9', kz: 'Қаратау', ru: 'Каратау', at: [68.4, 44.6],
          poly: [[68.3, 44.5], [69.2, 44.4], [71.6, 42.9], [70.9, 42.4], [69, 43.6]] }
      ],
      points: [
        { lon: 86.58, lat: 49.8, kz: 'Мұзтау 4506 м', ru: 'Музтау 4506 м', type: 'peak', dx: 0.9, dy: 1.0 },
        { lon: 83.0, lat: 47.3, kz: 'Тастау 2992 м', ru: 'Тастау 2992 м', type: 'peak', dx: -0.9, a: 'end', dy: -1.0 },
        { lon: 84.7, lat: 47.1, kz: 'Мұзтау 3816 м', ru: 'Музтау 3816 м', type: 'peak', dx: 0.9, dy: 1.3 },
        { lon: 79.9, lat: 44.7, kz: 'Бесбақан 4622 м', ru: 'Бесбакан 4622 м', type: 'peak', dx: -0.9, a: 'end', dy: 1.0 },
        { lon: 77.2, lat: 43.05, kz: 'Талғар 4973 м', ru: 'Талгар 4973 м', type: 'peak', dx: -0.9, a: 'end', dy: 0.2 },
        { lon: 80.17, lat: 42.2, kz: 'Хан-Тәңірі 6995 м', ru: 'Хан-Тенгри 6995 м', type: 'peak', big: true, dx: 0.9, dy: 0.6 },
        { lon: 70.1, lat: 42.95, kz: 'Бессаз 2176 м', ru: 'Бессаз 2176 м', type: 'peak', dx: -0.9, a: 'end', dy: 1.1 },
        { lon: 82.3, lat: 45.1, kz: 'Жоңғар қақпасы', ru: 'Джунгарские ворота', dx: 0.8, dy: 0 }
      ],
      caption: { kz: 'Қазақстанның биік таулары — елдің шығысы мен оңтүстік-шығысында: Алтай, Тарбағатай, Сауыр, Жетісу Алатауы, Тянь-Шань (ең биігі — Хан-Тәңірі).',
                 ru: 'Высокие горы Казахстана — на востоке и юго-востоке: Алтай, Тарбагатай, Саур, Жетысуский Алатау, Тянь-Шань (высшая точка — Хан-Тенгри).' }
    },

    peaks: {
      view: [48, 40, 90, 54],
      fs: 0.0148,
      pointsK: 0.85,
      points: [
        { lon: 80.17, lat: 42.2, kz: 'Хан-Тәңірі 6995', ru: 'Хан-Тенгри 6995', type: 'peak', big: true, pc: '#e879f9', dx: 0.9, dy: 1.1 },
        { lon: 77.2, lat: 43.05, kz: 'Талғар 4973', ru: 'Талгар 4973', type: 'peak', pc: '#e879f9', dx: -0.9, a: 'end', dy: 0.9 },
        { lon: 79.9, lat: 44.7, kz: 'Бесбақан 4622', ru: 'Бесбакан 4622', type: 'peak', pc: '#60a5fa', dx: 0.9, dy: -0.2 },
        { lon: 86.58, lat: 49.8, kz: 'Мұзтау 4506', ru: 'Музтау 4506', type: 'peak', pc: '#34d399', dx: -0.9, a: 'end', dy: -0.6 },
        { lon: 84.7, lat: 47.1, kz: 'Мұзтау 3816', ru: 'Музтау 3816', type: 'peak', pc: '#fbbf24', dx: 0.9, dy: 0.6 },
        { lon: 79.3, lat: 43.35, kz: 'Кетмен 3652', ru: 'Небесная 3652', type: 'peak', pc: '#e879f9', dx: 0.9, dy: -0.6 },
        { lon: 83.0, lat: 47.3, kz: 'Тастау 2992', ru: 'Тастау 2992', type: 'peak', pc: '#fbbf24', dx: -0.9, a: 'end', dy: -0.6 },
        { lon: 70.1, lat: 42.95, kz: 'Бессаз 2176', ru: 'Бессаз 2176', type: 'peak', pc: '#e879f9', dx: -0.9, a: 'end', dy: 0.9 },
        { lon: 75.1, lat: 48.9, kz: 'Ақсораң 1565', ru: 'Аксоран 1565', type: 'peak', pc: '#fb923c', dx: 0.9, dy: 0.4 },
        { lon: 58.9, lat: 49.0, kz: 'Үлкен Боқтыбай 657', ru: 'Улькен Бокты 657', type: 'peak', pc: '#fb923c', dx: 0.9, dy: 0.4 },
        { lon: 52.5, lat: 44.0, kz: 'Бесшоқы 556', ru: 'Бесшокы 556', type: 'peak', pc: '#fb923c', dx: 0.9, dy: 0.9 }
      ],
      legend: [
        { c: '#e879f9', kz: 'Тянь-Шань', ru: 'Тянь-Шань' }, { c: '#60a5fa', kz: 'Жетісу Алатауы', ru: 'Жетысуский Алатау' },
        { c: '#34d399', kz: 'Алтай', ru: 'Алтай' }, { c: '#fbbf24', kz: 'Сауыр · Тарбағатай', ru: 'Саур · Тарбагатай' },
        { c: '#fb923c', kz: 'Аласа таулар', ru: 'Низкие горы' }
      ],
      caption: { kz: 'Қазақстанның ең биік шыңдары картада (биіктік метрмен). Түсі — тау жүйесі.',
                 ru: 'Высочайшие вершины Казахстана на карте (высота в метрах). Цвет — горная система.' }
    },

    oilgas: {
      view: [46, 41, 79, 53.5],
      fs: 0.0168,
      pointsK: 0.9,
      points: [
        { lon: 53.2, lat: 47.6, kz: 'Доссор · Мақат', ru: 'Доссор · Макат', pc: '#fb923c', dx: 0.8, dy: -0.6 },
        { lon: 53.4, lat: 46.15, kz: 'Теңіз', ru: 'Тенгиз', pc: '#fb923c', big: true, dx: 0.8, dy: 0.5 },
        { lon: 51.3, lat: 45.7, kz: 'Қашаған', ru: 'Кашаган', pc: '#fbbf24', big: true, dx: -0.8, a: 'end', dy: -0.1 },
        { lon: 51.2, lat: 51.4, kz: 'Қарашығанақ (газ 70%)', ru: 'Карачаганак (газ 70%)', pc: '#38bdf8', big: true, dx: 0.8 },
        { lon: 57.1, lat: 48.3, kz: 'Жаңажол · Кеңқияқ', ru: 'Жанажол · Кенкияк', pc: '#fb923c', dx: 0.8 },
        { lon: 52.8, lat: 43.5, kz: 'Өзен · Жетібай', ru: 'Узень · Жетыбай', pc: '#fb923c', dx: 0.8, dy: 0.9 },
        { lon: 51.9, lat: 44.45, kz: 'Қаражамбас · Қаламқас', ru: 'Каражанбас · Каламкас', pc: '#fb923c', dx: -0.8, a: 'end', dy: 0.6 },
        { lon: 65.2, lat: 46.9, kz: 'Құмкөл', ru: 'Кумколь', pc: '#fb923c', dx: 0.8 },
        { lon: 70.3, lat: 43.5, kz: 'Амангелді (газ)', ru: 'Амангельды (газ)', pc: '#38bdf8', dx: 0.8, dy: 1.0 },
        { lon: 51.9, lat: 47.1, kz: 'Атырау МӨЗ', ru: 'Атырау НПЗ', shape: 'sq', pc: '#f8fafc', dx: -0.9, a: 'end', dy: -0.3 },
        { lon: 69.6, lat: 42.3, kz: 'Шымкент МӨЗ', ru: 'Шымкент НПЗ', shape: 'sq', pc: '#f8fafc', dx: 0.9 },
        { lon: 76.97, lat: 52.3, kz: 'Павлодар МӨЗ', ru: 'Павлодар НПЗ', shape: 'sq', pc: '#f8fafc', dx: 0.9 }
      ],
      legend: [
        { c: '#fb923c', sym: '●', kz: 'мұнай', ru: 'нефть' }, { c: '#38bdf8', sym: '●', kz: 'газ', ru: 'газ' },
        { c: '#fbbf24', sym: '●', kz: 'Қашаған (2000 ж.)', ru: 'Кашаган (2000 г.)' }, { c: '#f8fafc', sym: '■', kz: 'МӨЗ', ru: 'НПЗ' }
      ],
      caption: { kz: 'Мұнай мен газ — батыста (Каспий маңы, Маңғыстау, Ақтөбе), газ — Қарашығанақ пен Амангелдіде. Мұнай өңдеу зауыттары — Атырау, Шымкент, Павлодар.',
                 ru: 'Нефть и газ — на западе (Прикаспий, Мангыстау, Актобе); газ — Карачаганак и Амангельды. НПЗ — Атырау, Шымкент, Павлодар.' }
    },

    coal: {
      view: [58, 42, 90, 55.5],
      fs: 0.0158,
      pointsK: 0.9,
      points: [
        { lon: 73.1, lat: 49.8, kz: 'Қарағанды · шахта, кокс', ru: 'Караганда · шахта, кокс', pc: '#94a3b8', big: true, dx: 0.9, dy: 0.9 },
        { lon: 75.3, lat: 51.7, kz: 'Екібастұз · ашық, 150 м', ru: 'Экибастуз · открытый, 150 м', pc: '#fbbf24', big: true, dx: 0.9, dy: -0.4 },
        { lon: 70.9, lat: 49.7, kz: 'Шұбаркөл', ru: 'Шубарколь', pc: '#e2e8f0', dx: -0.9, a: 'end', dy: -0.5 },
        { lon: 75.9, lat: 51.0, kz: 'Майкүбі', ru: 'Майкуби', pc: '#e2e8f0', dx: 0.9, dy: 0.7 },
        { lon: 64.7, lat: 52.8, kz: 'Құсмұрын', ru: 'Кушмурун', pc: '#e2e8f0', dx: 0.9 },
        { lon: 79.5, lat: 49.9, kz: 'Қаражыра', ru: 'Каражыра', pc: '#e2e8f0', dx: 0.9 },
        { lon: 84.3, lat: 47.9, kz: 'Кендірлік', ru: 'Кендырлык', pc: '#e2e8f0', dx: 0.9 },
        { lon: 77.9, lat: 43.9, kz: 'Төменгі Іле', ru: 'Нижнее Или', pc: '#e2e8f0', dx: 0.9 },
        { lon: 58.6, lat: 48.4, kz: 'Біршоғыр', ru: 'Біршоғыр', pc: '#e2e8f0', dx: 0.9 }
      ],
      legend: [
        { c: '#94a3b8', sym: '●', kz: 'Қарағанды (шахта)', ru: 'Караганда (шахта)' }, { c: '#fbbf24', sym: '●', kz: 'Екібастұз (ашық)', ru: 'Экибастуз (открытый)' },
        { c: '#e2e8f0', sym: '●', kz: 'басқа кен орындары', ru: 'другие месторождения' }
      ],
      caption: { kz: 'Көмір — елдің орталығы мен солтүстігінде: Қарағанды (кокс) және Екібастұз (арзан, ашық әдіс) — ең ірі алаптар.',
                 ru: 'Уголь — в центре и на севере страны: Караганда (кокс) и Экибастуз (дёшево, открытый способ) — крупнейшие бассейны.' }
    },

    ferrous: {
      view: [54, 43, 82, 55],
      fs: 0.0148,
      pointsK: 0.9,
      points: [
        { lon: 63.2, lat: 52.5, kz: 'Соколов-Сарыбай · Лисаков', ru: 'Соколовско-Сарбайское · Лисаковское', pc: '#f87171', big: true, dx: 0.9, dy: -0.5 },
        { lon: 67.2, lat: 48.2, kz: 'Атасу', ru: 'Атасу', pc: '#f87171', dx: -0.9, a: 'end', dy: -0.4 },
        { lon: 70.8, lat: 48.0, kz: 'Қаражал', ru: 'Каражал', pc: '#f87171', dx: 0.9 },
        { lon: 67.8, lat: 47.6, kz: 'Жезді (марганец)', ru: 'Жезды (марганец)', pc: '#c084fc', dx: -0.9, a: 'end', dy: 1.0 },
        { lon: 58.4, lat: 50.25, kz: 'Хромтау · Дөң (хром 97%)', ru: 'Хромтау · Донское (хром 97%)', pc: '#a3e635', big: true, dx: 0.9, dy: -0.5 },
        { lon: 57.2, lat: 50.3, kz: 'Ақтөбе феррохром', ru: 'Актобе феррохром', shape: 'sq', pc: '#f8fafc', dx: -0.9, a: 'end', dy: 0.2 },
        { lon: 72.9, lat: 50.05, kz: 'Теміртау комбинаты', ru: 'Темиртау (комбинат)', shape: 'sq', pc: '#f8fafc', dx: 0.9, dy: 0.7 },
        { lon: 76.9, lat: 52.0, kz: 'Ақсу ферросилиций', ru: 'Аксу ферросплавы', shape: 'sq', pc: '#f8fafc', dx: 0.9 }
      ],
      legend: [
        { c: '#f87171', sym: '●', kz: 'темір', ru: 'железо' }, { c: '#a3e635', sym: '●', kz: 'хром', ru: 'хром' },
        { c: '#c084fc', sym: '●', kz: 'марганец', ru: 'марганец' }, { c: '#f8fafc', sym: '■', kz: 'зауыт / комбинат', ru: 'завод / комбинат' }
      ],
      caption: { kz: 'Темір — Қостанай мен Орталық Қазақстанда, хром — Мұғалжарда (Ақтөбе), металлургия комбинаты — Теміртауда.',
                 ru: 'Железо — Костанай и Центральный Казахстан, хром — Мугалжары (Актобе), металлургический комбинат — Темиртау.' }
    },

    nonferrous: {
      view: [60, 42, 90, 55],
      fs: 0.0155,
      pointsK: 0.9,
      points: [
        { lon: 67.7, lat: 47.8, kz: 'Жезқазған', ru: 'Жезказган', pc: '#fb923c', big: true, dx: -0.9, a: 'end', dy: 0.4 },
        { lon: 77.1, lat: 46.9, kz: 'Саяқ', ru: 'Саяк', pc: '#fb923c', dx: 0.9, dy: 0.3 },
        { lon: 73.1, lat: 46.95, kz: 'Қоңырат', ru: 'Конырат', pc: '#fb923c', dx: -0.9, a: 'end', dy: 0.9 },
        { lon: 79.9, lat: 46.97, kz: 'Ақтоғай', ru: 'Актогай', pc: '#fb923c', dx: 0.9, dy: 0.9 },
        { lon: 75.8, lat: 51.2, kz: 'Бозшакөл', ru: 'Бозшаколь', pc: '#fb923c', dx: 0.9, dy: -0.8 },
        { lon: 74.9, lat: 46.85, kz: 'Балқаш (балқыту)', ru: 'Балхаш (плавка)', shape: 'sq', pc: '#f8fafc', dx: 0.0, a: 'middle', dy: 1.9 },
        { lon: 83.5, lat: 50.35, kz: 'Риддер', ru: 'Риддер', pc: '#38bdf8', dx: 0.9, dy: -0.7 },
        { lon: 84.3, lat: 49.7, kz: 'Зырян', ru: 'Зыряновск', pc: '#38bdf8', dx: 0.9, dy: 0.7 },
        { lon: 78.8, lat: 44.85, kz: 'Текелі', ru: 'Текели', pc: '#38bdf8', dx: 0.9 },
        { lon: 72.8, lat: 48.6, kz: 'Жәйрем', ru: 'Жайрем', pc: '#38bdf8', dx: 0.9, dy: -0.7 },
        { lon: 68.6, lat: 43.8, kz: 'Қаратау: Ащысай · Шалқия', ru: 'Каратау: Ащысай · Шалкия', pc: '#38bdf8', dx: 0.9, dy: 0.9 },
        { lon: 76.97, lat: 52.3, kz: 'Павлодар (алюминий)', ru: 'Павлодар (алюминий)', shape: 'sq', pc: '#e2e8f0', dx: 0.9, dy: -0.4 },
        { lon: 66.9, lat: 50.25, kz: 'Арқалық (боксит)', ru: 'Аркалык (боксит)', pc: '#e2e8f0', dx: -0.9, a: 'end' },
        { lon: 82.6, lat: 49.95, kz: 'Өскемен (титан-магний)', ru: 'Усть-Каменогорск (титан-магний)', shape: 'sq', pc: '#a78bfa', dx: -0.9, a: 'end', dy: 0.9 }
      ],
      legend: [
        { c: '#fb923c', sym: '●', kz: 'мыс', ru: 'медь' }, { c: '#38bdf8', sym: '●', kz: 'полиметалл', ru: 'полиметаллы' },
        { c: '#e2e8f0', sym: '■', kz: 'алюминий', ru: 'алюминий' }, { c: '#a78bfa', sym: '■', kz: 'титан-магний', ru: 'титан-магний' }
      ],
      caption: { kz: 'Мыс — Жезқазған мен Балқаш маңында, полиметалл — Кенді Алтай мен Қаратауда, алюминий — Павлодарда, титан-магний — Өскеменде.',
                 ru: 'Медь — Жезказган и Прибалхашье, полиметаллы — Рудный Алтай и Каратау, алюминий — Павлодар, титан-магний — Усть-Каменогорск.' }
    },

    goldu: {
      view: [49, 41, 90, 56],
      fs: 0.0138,
      pointsK: 0.9,
      points: [
        { lon: 70.2, lat: 53.0, kz: 'Васильков · Жолымбет · Бестөбе · Ақсу', ru: 'Васильковское · Жолымбет · Бестобе · Аксу', pc: '#fbbf24', big: true, dx: -0.9, a: 'end', dy: -0.8 },
        { lon: 82.0, lat: 48.7, kz: 'Бақыршық · Суздаль', ru: 'Бакырчик · Суздальское', pc: '#fbbf24', dx: -0.9, a: 'end', dy: 0.4 },
        { lon: 60.0, lat: 50.7, kz: 'Юбилейное', ru: 'Юбилейное', pc: '#fbbf24', dx: 0.9, dy: -0.4 },
        { lon: 71.3, lat: 45.0, kz: 'Ақбақай', ru: 'Акбакай', pc: '#fbbf24', dx: 0.9, dy: -0.7 },
        { lon: 68.5, lat: 44.0, kz: 'Шу-Сарысу · Созақ · Мыңқұдық', ru: 'Чу-Сарысу · Сузак · Мынкудук', pc: '#4ade80', big: true, dx: -0.9, a: 'end', dy: 0.3 },
        { lon: 65.5, lat: 44.4, kz: 'Сырдария (Қорасан)', ru: 'Сырдарья (Хорасан)', pc: '#4ade80', dx: -0.9, a: 'end', dy: -0.7 },
        { lon: 72.0, lat: 52.0, kz: 'Солтүстік Қазақстан', ru: 'Северный Казахстан', pc: '#4ade80', dx: 0.9, dy: 0.6 },
        { lon: 69.7, lat: 43.1, kz: 'Қаратау фосфориті', ru: 'Фосфориты Каратау', shape: 'sq', pc: '#f472b6', dx: 0.9, dy: 1.0 },
        { lon: 51.9, lat: 48.0, kz: 'Индер (калий тұзы)', ru: 'Индер (калийная соль)', shape: 'sq', pc: '#e2e8f0', dx: 0.9 }
      ],
      legend: [
        { c: '#fbbf24', sym: '●', kz: 'алтын', ru: 'золото' }, { c: '#4ade80', sym: '●', kz: 'уран', ru: 'уран' },
        { c: '#f472b6', sym: '■', kz: 'фосфорит', ru: 'фосфориты' }, { c: '#e2e8f0', sym: '■', kz: 'тұз', ru: 'соль' }
      ],
      caption: { kz: 'Алтын — солтүстік пен шығыста, уран — оңтүстікте (Шу-Сарысу, Сырдария), фосфорит — Қаратауда.',
                 ru: 'Золото — север и восток, уран — юг (Чу-Сарысу, Сырдарья), фосфориты — Каратау.' }
    },

    deep: {
      view: [18, 7, 98, 56],
      fs: 0.0205,
      kazFocus: true,
      noNeighbors: true,
      labels: [
        { lon: 66.5, lat: 47.6, kz: 'ҚАЗАҚСТАН', ru: 'КАЗАХСТАН', c: '#22d3ee', bold: true },
        { lon: 94, lat: 34, kz: 'Қытай', ru: 'Китай' },
        { lon: 29, lat: 24.5, kz: 'Мысыр', ru: 'Египет' },
        { lon: 40, lat: 7.5, kz: 'Эфиопия', ru: 'Эфиопия' }
      ],
      points: [
        { n: 1, lon: 35.5, lat: 31.5, kz: 'Өлі теңіз  −415 м', ru: 'Мёртвое море  −415 м', dx: 1.5, dy: -0.2 },
        { n: 2, lon: 89.2, lat: 42.9, kz: 'Турфан  −154 м', ru: 'Турфанская впадина  −154 м', dx: -1.5, a: 'end', dy: -1.6 },
        { n: 3, lon: 42.4, lat: 11.6, kz: 'Асаль көлі  −153 м', ru: 'оз. Ассаль  −153 м', dx: 1.5 },
        { n: 4, lon: 27.6, lat: 29.9, kz: 'Каттара  −133 м', ru: 'Каттара  −133 м', dx: 1.5, dy: 2.3 },
        { n: 5, lon: 51.6, lat: 43.4, kz: 'Қарақия  −132 м', ru: 'Карагие  −132 м', dx: 1.5, dy: 1.3, c: '#fbbf24' }
      ],
      caption: { kz: 'Әлемдегі ең терең 5 ойыс Африка мен Азияда орналасқан. Бесіншісі — біздің Қарақия (Маңғыстау).',
                 ru: 'Пять самых глубоких впадин мира расположены в Африке и Азии. Пятая — наша Карагие (Мангистау).' }
    }
  };

  function el(name, attrs, html) {
    return '<' + name + Object.keys(attrs || {}).map((k) => ' ' + k + '="' + esc(attrs[k]) + '"').join('') + '>' + (html || '') + '</' + name + '>';
  }

  function build(key, d, lang) {
    const L = (o) => (o && (o[lang] || o.kz)) || '';
    const byId = {};
    (window.WORLD_COUNTRIES || (typeof WORLD_COUNTRIES !== 'undefined' ? WORLD_COUNTRIES : [])).forEach((c) => { byId[c.id] = c; });
    if (!byId.KAZ) return '';

    const [w0, s0, e0, n0] = d.view;
    const cs = [proj(w0, n0), proj(e0, n0), proj(w0, s0), proj(e0, s0)];
    const x1 = Math.min(...cs.map((c) => c.x)), x2 = Math.max(...cs.map((c) => c.x));
    const y1 = Math.min(...cs.map((c) => c.y)), y2 = Math.max(...cs.map((c) => c.y));
    const vw = x2 - x1, vh = y2 - y1, fs = vw * d.fs;
    const inView = (lon, lat) => lon >= w0 && lon <= e0 && lat >= s0 && lat <= n0;
    const P = (lon, lat) => proj(lon, lat);
    const poly = (pts) => pts.map(([lon, lat], i) => { const p = P(lon, lat); return (i ? 'L' : 'M') + f1(p.x) + ' ' + f1(p.y); }).join(' ') + ' Z';
    const halo = 'paint-order:stroke;stroke:#0b1120;stroke-width:' + (fs * 0.3).toFixed(2) + 'px;stroke-linejoin:round;';
    const txt = (x, y, s, o) => {
      o = o || {};
      return el('text', {
        x: f1(x), y: f1(y), 'text-anchor': o.a || 'start', 'font-size': (fs * (o.k || 1)).toFixed(2),
        'font-weight': o.bold ? 800 : 700, fill: o.c || '#e2e8f0', 'font-style': o.i ? 'italic' : 'normal',
        style: halo + "font-family:'Outfit','Inter',sans-serif"
      }, esc(s));
    };

    const uid = 'tm' + key;
    let out = '';

    // страны
    const near = (c) => {
      if (!c.bbox) return false;
      const [x, y, w, h] = c.bbox;
      return w < 400 && x < x2 && x + w > x1 && y < y2 && y + h > y1;
    };
    let countries = '';
    Object.keys(byId).forEach((id) => {
      const c = byId[id];
      if (id === 'KAZ' || !near(c)) return;
      countries += el('path', { d: c.path, fill: '#1b2740', stroke: '#3b4a68', 'stroke-width': 0.35, 'vector-effect': 'non-scaling-stroke' });
    });
    out += el('rect', { x: f1(x1), y: f1(y1), width: f1(vw), height: f1(vh), fill: '#0a1730' });
    out += countries;

    // Казахстан
    out += el('path', { d: byId.KAZ.path, fill: d.kazFocus ? 'rgba(34,211,238,.28)' : '#26334f' });
    out += '<clipPath id="' + uid + 'k"><path d="' + byId.KAZ.path + '"/></clipPath>';

    // озёра
    if (!d.kazFocus) {
      LAKES.forEach((lk) => {
        if (key === 'highmt' && lk.id === 'aral') return;
        out += el('path', { d: poly(lk.poly), fill: '#0a1730', stroke: '#2f6fa3', 'stroke-width': 0.8, 'vector-effect': 'non-scaling-stroke' });
      });
    }

    // регионы
    (d.regions || []).forEach((r) => {
      const clip = r.clip === false ? null : 'url(#' + uid + 'k)';
      const a = { d: poly(r.poly), fill: r.c, 'fill-opacity': 0.5, stroke: r.c, 'stroke-width': 1.2, 'stroke-dasharray': '4 3', 'vector-effect': 'non-scaling-stroke' };
      if (clip) a['clip-path'] = clip;
      out += el('path', a);
    });

    // контур Казахстана
    out += el('path', { d: byId.KAZ.path, fill: 'none', stroke: '#22d3ee', 'stroke-width': 1.6, 'vector-effect': 'non-scaling-stroke' });

    // реки
    (d.lines || []).forEach((ln) => {
      out += el('path', { d: ln.pts.map(([lon, lat], i) => { const p = P(lon, lat); return (i ? 'L' : 'M') + f1(p.x) + ' ' + f1(p.y); }).join(' '),
        fill: 'none', stroke: ln.c, 'stroke-width': 1.8, 'stroke-linecap': 'round', 'vector-effect': 'non-scaling-stroke' });
      const p = P(ln.at[0], ln.at[1]);
      out += txt(p.x + fs * (ln.dx || 0), p.y, L(ln), { c: ln.c, i: true, k: 0.8 });
    });

    // подписи стран и водоёмов
    if (!d.noNeighbors) {
      NEIGHBORS.forEach((n) => {
        if (!inView(n.lon, n.lat)) return;
        const p = P(n.lon, n.lat);
        out += txt(p.x, p.y, L(n), { a: 'middle', c: '#64748b', k: 0.85 });
      });
      if (inView(CASPIAN.lon, CASPIAN.lat)) {
        const p = P(CASPIAN.lon, CASPIAN.lat);
        out += txt(p.x, p.y, L(CASPIAN), { a: 'middle', c: '#4f8fc7', i: true, k: 0.85 });
      }
      LAKES.forEach((lk) => {
        if (!lk.kz || key === 'highmt' || key === 'nonferrous' || !inView(lk.at[0], lk.at[1])) return;
        const p = P(lk.at[0], lk.at[1]);
        out += txt(p.x + fs * (lk.dx || 0), p.y + fs * (lk.dy || 0), L(lk), { a: lk.dx ? 'end' : 'middle', c: '#4f8fc7', i: true, k: 0.75 });
      });
    }
    (d.labels || []).forEach((lb) => {
      const p = P(lb.lon, lb.lat);
      out += txt(p.x, p.y, L(lb), { a: 'middle', c: lb.c || '#64748b', bold: lb.bold, k: lb.bold ? 1.15 : 0.85 });
    });

    // названия регионов
    (d.regions || []).forEach((r) => {
      const p = P(r.at[0], r.at[1]);
      out += txt(p.x, p.y, L(r), { a: 'middle', c: r.c, bold: true, k: 1.05 });
    });
    (d.ghosts || []).forEach((g) => {
      const p = P(g.at[0], g.at[1]);
      out += txt(p.x, p.y, L(g), { a: 'middle', c: g.c, i: true, k: 0.85 });
    });

    // точки
    (d.points || []).forEach((pt) => {
      const p = P(pt.lon, pt.lat);
      const c = pt.c || (pt.type === 'peak' ? '#f8fafc' : '#e2e8f0');
      const r = fs * (pt.big ? 0.42 : 0.32);
      if (pt.n) {
        const R = fs * 0.95, col = pt.c || '#22d3ee';
        out += el('circle', { cx: f1(p.x), cy: f1(p.y), r: R.toFixed(2), fill: col, stroke: '#0b1120', 'stroke-width': 0.5 });
        out += el('text', { x: f1(p.x), y: (p.y + fs * 0.36).toFixed(2), 'text-anchor': 'middle', 'font-size': (fs * 1.05).toFixed(2), 'font-weight': 900, fill: '#0b1120',
          style: "font-family:'Outfit','Inter',sans-serif" }, String(pt.n));
      } else if (pt.shape === 'sq') {
        const s = r * 1.9;
        out += el('rect', { x: (p.x - s).toFixed(2), y: (p.y - s).toFixed(2), width: (s * 2).toFixed(2), height: (s * 2).toFixed(2), fill: pt.pc || '#f8fafc', stroke: '#0b1120', 'stroke-width': 0.35 });
      } else if (pt.type === 'peak') {
        const s = r * 1.9;
        out += el('path', { d: 'M' + f1(p.x) + ' ' + (p.y - s).toFixed(2) + ' L' + (p.x + s).toFixed(2) + ' ' + (p.y + s * 0.8).toFixed(2) + ' L' + (p.x - s).toFixed(2) + ' ' + (p.y + s * 0.8).toFixed(2) + ' Z',
          fill: pt.pc || (pt.big ? '#fde047' : '#f8fafc'), stroke: '#0b1120', 'stroke-width': 0.35 });
      } else {
        out += el('circle', { cx: f1(p.x), cy: f1(p.y), r: (r * 1.4).toFixed(2), fill: pt.pc || (pt.big ? '#fbbf24' : '#e2e8f0'), stroke: '#0b1120', 'stroke-width': 0.3 });
      }
      const dx = (pt.dx == null ? 0.8 : pt.dx) * fs, dy = (pt.dy || 0) * fs + fs * 0.34;
      out += txt(p.x + dx, p.y + dy, L(pt), { a: pt.a, c: pt.n ? (pt.c || '#a5f3fc') : (pt.type === 'peak' ? '#f8fafc' : '#e2e8f0'), bold: !!(pt.n || pt.type === 'peak'), k: 0.9 * (d.pointsK || 1) });
    });

    const svg = '<svg viewBox="' + [f1(x1), f1(y1), f1(vw), f1(vh)].join(' ') + '" xmlns="' + NS + '" role="img" aria-label="' + esc(L(d.caption)) + '" '
      + 'style="display:block;width:100%;min-width:620px;height:auto">' + out + '</svg>';

    let legend = '';
    (d.regions || []).forEach((r) => {
      if (key !== 'plains') return;
      legend += '<span data-c="' + r.c + '" style="display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:700;color:#cbd5e1">'
        + '<i style="width:12px;height:12px;border-radius:4px;background:' + r.c + ';opacity:.7;display:inline-block"></i>' + esc(L(r)) + '</span>';
    });
    (d.legend || []).forEach((g) => {
      legend += '<span style="display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:700;color:#cbd5e1"><b style="color:' + g.c + '">' + (g.sym || '▲') + '</b> ' + esc(L(g)) + '</span>';
    });
    if (!d.legend && d.points && d.points.some((p) => p.type === 'peak')) {
      legend += '<span style="display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:700;color:#cbd5e1"><b style="color:#f8fafc">▲</b> '
        + (lang === 'ru' ? 'вершина' : 'шың') + '</span>';
    }

    return '<figure style="margin:14px 0 0;padding:10px;border-radius:14px;background:#0b1120;border:1px solid #1e293b">'
      + '<div style="overflow-x:auto;border-radius:10px;border:1px solid #1e293b">' + svg + '</div>'
      + (legend ? '<div style="display:flex;flex-wrap:wrap;gap:6px 14px;margin-top:8px">' + legend + '</div>' : '')
      + '<figcaption style="margin-top:8px;font-size:11px;line-height:1.5;color:#94a3b8">🗺️ ' + esc(L(d.caption))
      + ' <span style="color:#64748b">· ' + (lang === 'ru' ? 'схема, границы областей приблизительные' : 'схема, аймақ шекаралары шамамен') + '</span></figcaption></figure>';
  }

  function render(root) {
    const lang = (typeof currentLang !== 'undefined' && currentLang === 'ru') ? 'ru' : 'kz';
    (root || document).querySelectorAll('.tmap').forEach((box) => {
      const key = box.getAttribute('data-map');
      if (!DEFS[key]) return;
      try { box.innerHTML = build(key, DEFS[key], lang); } catch (e) { box.innerHTML = ''; if (window.console) console.warn('TopicMaps', key, e); }
    });
  }

  window.TopicMaps = { render: render };
})();
