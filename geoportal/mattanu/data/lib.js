// MatTany (математикалық сауаттылық ҰБТ/ЕНТ): помощники для записи данных курса (тот же формат, что в BioTany / TarihTany).
// Вопросы: S — один ответ, SN — один ответ с числовыми вариантами и единицей, X — несколько ответов, M — соответствие, P — быстрая задача раздела «Жылдам есептер».
window.MAT = window.MAT || { ch: {}, tests: {}, tables: [], talk: [], diag: {}, problems: [] };
(function (B) {
  function base(type, q, qr, o, or, a, e, er, x) {
    var r = { type: type, q: q, q_ru: qr, options: o, answer: a, explanation: e, explanation_ru: er };
    if (or) r.options_ru = or;
    return Object.assign(r, x || {});
  }
  // S(q, q_ru, [варианты KZ], [варианты RU] | null, индекс верного, пояснение KZ, пояснение RU, {доп. поля})
  B.S = function (q, qr, o, or, a, e, er, x) { return base('single', q, qr, o, or, a, e, er, x); };
  // SN(q, q_ru, ['12','15',…], единица KZ, единица RU, индекс верного, пояснение KZ, пояснение RU, {доп. поля}) — варианты «число + единица»
  B.SN = function (q, qr, nums, uk, ur, a, e, er, x) {
    var o = nums.map(function (n) { return uk ? n + ' ' + uk : n; });
    var or = ur != null && ur !== uk ? nums.map(function (n) { return ur ? n + ' ' + ur : n; }) : null;
    return base('single', q, qr, o, or, a, e, er, x);
  };
  // X: answer — массив индексов (2 балла: всё верно — 2, одна ошибка — 1)
  B.X = function (q, qr, o, or, a, e, er, x) { return base('multi', q, qr, o, or, a, e, er, x); };
  // M(q, q_ru, [левый столбец KZ], [левый RU], [варианты KZ], [варианты RU], [верные индексы по строкам], пояснение KZ, пояснение RU)
  B.M = function (q, qr, l, lr, o, or, a, e, er) {
    var r = base('match', q, qr, o, or, a, e, er);
    r.left = l; r.left_ru = lr;
    return r;
  };
  // P(категория, …как S) — быстрая задача: calc, pct, unit, geom, data, logic
  B.P = function (cat, q, qr, o, or, a, e, er) {
    var r = base('single', q, qr, o, or, a, e, er, { cat: cat });
    B.problems.push(r);
    return r;
  };
  // PN(категория, q, q_ru, ['12','15',…], единица KZ, единица RU, индекс верного, пояснение KZ, пояснение RU)
  B.PN = function (cat, q, qr, nums, uk, ur, a, e, er) {
    var r = B.SN(q, qr, nums, uk, ur, a, e, er, { cat: cat });
    B.problems.push(r);
    return r;
  };
  // Глава: B.chap(номер, {…})
  B.chap = function (n, obj) { obj.id = n; B.ch[n] = obj; };
  // Вариант ЕНТ: B.test(номер, {…})
  B.test = function (n, obj) { obj.id = n; B.tests[n] = obj; };
})(window.MAT);
