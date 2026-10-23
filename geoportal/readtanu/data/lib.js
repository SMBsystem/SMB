// ReadTany (оқу сауаттылығы ҰБТ/ЕНТ): помощники для записи данных курса.
// Вопросы: S — один ответ, X — несколько ответов, M — соответствие, P — задание по мини-тексту (тот же формат, плюс категория).
window.RDG = window.RDG || { ch: {}, tests: {}, tables: [], talk: [], diag: {}, problems: [] };
(function (B) {
  function base(type, q, qr, o, or, a, e, er, x) {
    var r = { type: type, q: q, q_ru: qr, options: o, answer: a, explanation: e, explanation_ru: er };
    if (or) r.options_ru = or;
    return Object.assign(r, x || {});
  }
  // S(q, q_ru, [варианты KZ], [варианты RU] | null, индекс верного, пояснение KZ, пояснение RU, {доп. поля})
  B.S = function (q, qr, o, or, a, e, er, x) { return base('single', q, qr, o, or, a, e, er, x); };
  B.X = function (q, qr, o, or, a, e, er, x) { return base('multi', q, qr, o, or, a, e, er, x); };
  B.M = function (q, qr, l, lr, o, or, a, e, er) {
    var r = base('match', q, qr, o, or, a, e, er);
    r.left = l; r.left_ru = lr;
    return r;
  };
  // Мини-текст: B.C(название KZ, название RU, текст KZ, текст RU, {fig}) — HTML-абзацы
  B.C = function (t, tr, x, xr) { return { title: t, title_ru: tr, text: x, text_ru: xr }; };
  // B.ask(текст, [вопросы]) — привязывает текст ко всем вопросам и возвращает их
  B.ask = function (c, qs) { qs.forEach(function (q) { q._ctx = c; }); return qs; };
  // P(категория, текст, …как S) — задание по мини-тексту, попадает в «Мәтінмен жұмыс»
  B.P = function (cat, c, q, qr, o, or, a, e, er) {
    var r = base('single', q, qr, o, or, a, e, er, { cat: cat });
    r._ctx = c;
    B.problems.push(r);
    return r;
  };
  B.chap = function (n, obj) { obj.id = n; B.ch[n] = obj; };
  B.test = function (n, obj) { obj.id = n; B.tests[n] = obj; };
})(window.RDG);
