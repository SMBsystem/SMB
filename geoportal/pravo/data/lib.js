// Основы права (ҰБТ/ЕНТ): помощники для записи вопросов. Формат — как в geotanu/tests/data/README.md.
// S(q, q_ru, [варианты KZ], [варианты RU], индекс верного, пояснение KZ, пояснение RU, {доп. поля})
window.PRAVO = window.PRAVO || { modules: {}, tests: {} };
(function (P) {
  function base(type, q, qr, o, or, a, e, er, x) {
    return Object.assign({ type: type, q: q, q_ru: qr, options: o, options_ru: or, answer: a, explanation: e, explanation_ru: er }, x || {});
  }
  P.S = function (q, qr, o, or, a, e, er, x) { return base('single', q, qr, o, or, a, e, er, x); };
  P.X = function (q, qr, o, or, a, e, er, x) { return base('multi', q, qr, o, or, a, e, er, x); };
  // M(q, q_ru, [лево KZ], [лево RU], [варианты KZ], [варианты RU], [верные индексы], пояснение KZ, пояснение RU)
  P.M = function (q, qr, l, lr, o, or, a, e, er) {
    var r = base('match', q, qr, o, or, a, e, er);
    r.left = l; r.left_ru = lr;
    return r;
  };
})(window.PRAVO);
