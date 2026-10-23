// BioTany (биология ҰБТ/ЕНТ): помощники для записи данных курса.
// Вопросы: S — один ответ, X — несколько ответов, M — соответствие, P — задача (тот же формат, плюс категория).
window.BIO = window.BIO || { ch: {}, tests: {}, tables: [], talk: [], diag: {}, problems: [] };
(function (B) {
  function base(type, q, qr, o, or, a, e, er, x) {
    var r = { type: type, q: q, q_ru: qr, options: o, answer: a, explanation: e, explanation_ru: er };
    if (or) r.options_ru = or;
    return Object.assign(r, x || {});
  }
  // S(q, q_ru, [варианты KZ], [варианты RU] | null, индекс верного, пояснение KZ, пояснение RU, {доп. поля})
  B.S = function (q, qr, o, or, a, e, er, x) { return base('single', q, qr, o, or, a, e, er, x); };
  // X: answer — массив индексов (2 балла: всё верно — 2, одна ошибка — 1)
  B.X = function (q, qr, o, or, a, e, er, x) { return base('multi', q, qr, o, or, a, e, er, x); };
  // M(q, q_ru, [левый столбец KZ], [левый RU], [варианты KZ], [варианты RU], [верные индексы по строкам], пояснение KZ, пояснение RU)
  B.M = function (q, qr, l, lr, o, or, a, e, er) {
    var r = base('match', q, qr, o, or, a, e, er);
    r.left = l; r.left_ru = lr;
    return r;
  };
  // P(категория, …как S) — расчётная задача: gen, mol, ene, eco, cell
  B.P = function (cat, q, qr, o, or, a, e, er) {
    var r = base('single', q, qr, o, or, a, e, er, { cat: cat });
    B.problems.push(r);
    return r;
  };
  // Глава: B.chap(номер, {…})
  B.chap = function (n, obj) { obj.id = n; B.ch[n] = obj; };
  // Вариант ЕНТ: B.test(номер, {…})
  B.test = function (n, obj) { obj.id = n; B.tests[n] = obj; };
})(window.BIO);
