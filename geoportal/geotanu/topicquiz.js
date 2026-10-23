/* GeoTany: shared built-in test for topic pages.
   Page provides window.TOPIC_QUIZ = { kz: [{q,a,w:[3 wrong],e}], ru: [...] } and loads this file at the end of <body>. */
(function () {
  var UI = {
    kz: { head: 'ӨЗІҢДІ ТЕКСЕР: ТАҚЫРЫП БОЙЫНША ТЕСТ', q: 'Сұрақ', ok: 'Дұрыс.', bad: 'Қате.', res: 'Нәтиже', reset: 'Араластырып қайта бастау',
          hi: 'Тақырып жақсы меңгерілген.', mid: 'Жақсы нәтиже. Қателерді теориядан қайталап шық.', low: 'Теорияны қайта оқып, тестті қайталап көр.' },
    ru: { head: 'ПРОВЕРЬ СЕБЯ: ТЕСТ ПО ТЕМЕ', q: 'Вопрос', ok: 'Верно.', bad: 'Неверно.', res: 'Итог', reset: 'Перемешать и начать заново',
          hi: 'Тема усвоена хорошо.', mid: 'Хороший результат. Повтори в теории то, где ошибся.', low: 'Перечитай теорию и пройди тест ещё раз.' }
  };
  var BASE = 'w-full text-left grid grid-cols-[1.5rem_1fr] gap-2 items-start px-3.5 py-2.5 rounded-xl border text-xs transition';
  var IDLE = ' bg-space-900 border-slate-700 text-slate-200 hover:border-cyan-500/60 cursor-pointer';
  var RIGHT = ' bg-emerald-500/15 border-emerald-500/60 text-white';
  var WRONG = ' bg-rose-500/15 border-rose-500/60 text-white';
  var DIM = ' bg-space-900 border-slate-800 text-slate-400';
  var LET = ['A', 'B', 'C', 'D'];

  function lang() { try { return currentLang === 'ru' ? 'ru' : 'kz'; } catch (e) { return 'kz'; } }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function el(tag, cls, txt) { var n = document.createElement(tag); if (cls) n.className = cls; if (txt != null) n.textContent = txt; return n; }

  var sec = null, shown = null;

  function mount() {
    if (document.getElementById('tqSection')) return document.getElementById('tqSection');
    var anchor = document.getElementById('trapsSection') || document.getElementById('factsSection') || document.getElementById('tableSection') || document.getElementById('theoryContent');
    if (!anchor) return null;
    sec = el('section', 'scroll-mt-24 p-5 rounded-2xl bg-space-950 border border-purple-500/40 space-y-4 shadow-xl');
    sec.id = 'tqSection';
    anchor.parentNode.insertBefore(sec, anchor.nextSibling);
    return sec;
  }

  function render() {
    var L = lang(), ui = UI[L], items = (window.TOPIC_QUIZ && window.TOPIC_QUIZ[L]) || [];
    var s = mount(); if (!s) return;
    shown = L;
    s.innerHTML = '';
    if (!items.length) { s.classList.add('hidden'); return; }
    s.classList.remove('hidden');
    var done = 0, right = 0;

    var top = el('div', 'flex flex-wrap items-center justify-between gap-2');
    var h = el('h3', 'text-xs font-black text-purple-400 flex items-center space-x-2');
    h.appendChild(el('span', null, '🎯')); h.appendChild(el('span', null, ui.head + ' (' + items.length + ')'));
    var side = el('div', 'flex items-center gap-2');
    var prog = el('span', 'px-2.5 py-1 rounded-full text-[11px] font-bold bg-space-900 border border-slate-700 text-slate-300', '0 / ' + items.length);
    var score = el('span', 'px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300', '✓ 0');
    var rb = el('button', 'px-2.5 py-1 rounded-lg text-[11px] font-bold bg-space-900 border border-slate-700 text-slate-300 hover:text-white hover:border-purple-500/50 transition', ui.reset);
    rb.type = 'button'; rb.addEventListener('click', render);
    side.appendChild(prog); side.appendChild(score); side.appendChild(rb);
    top.appendChild(h); top.appendChild(side); s.appendChild(top);

    var list = el('div', 'space-y-3'); s.appendChild(list);
    var fin = el('div', 'hidden p-4 rounded-xl bg-purple-500/10 border border-purple-500/40 text-sm font-bold text-white'); s.appendChild(fin);

    items.forEach(function (it, qi) {
      var card = el('article', 'rounded-xl bg-space-900/70 border border-slate-800 p-4 space-y-2.5');
      card.appendChild(el('div', 'text-[10px] font-black tracking-widest text-purple-400 uppercase', ui.q + ' ' + (qi + 1)));
      card.appendChild(el('p', 'text-xs font-bold text-white', it.q));
      var box = el('div', 'grid gap-2');
      var all = shuffle([{ t: it.a, ok: true }].concat(it.w.map(function (x) { return { t: x, ok: false }; })));
      all.forEach(function (o, oi) {
        var b = el('button', BASE + IDLE); b.type = 'button';
        b.appendChild(el('span', 'font-black text-slate-400', LET[oi])); b.appendChild(el('span', null, o.t));
        b.addEventListener('click', function () {
          var bs = box.querySelectorAll('button');
          for (var i = 0; i < bs.length; i++) {
            bs[i].disabled = true;
            if (all[i].ok) { bs[i].className = BASE + RIGHT; if (it.e) bs[i].appendChild(el('span', 'col-start-2 text-[11px] text-slate-300 leading-relaxed', (o.ok ? ui.ok + ' ' : '') + it.e)); }
            else if (bs[i] === b) { bs[i].className = BASE + WRONG; bs[i].appendChild(el('span', 'col-start-2 text-[11px] text-slate-300', ui.bad)); }
            else bs[i].className = BASE + DIM;
          }
          done++; if (o.ok) right++;
          prog.textContent = done + ' / ' + items.length; score.textContent = '✓ ' + right;
          if (done === items.length) {
            var pct = Math.round(right / items.length * 100);
            fin.textContent = ui.res + ': ' + right + ' / ' + items.length + ' (' + pct + '%). ' + (pct >= 90 ? ui.hi : pct >= 70 ? ui.mid : ui.low);
            fin.classList.remove('hidden');
          }
        });
        box.appendChild(b);
      });
      card.appendChild(box); list.appendChild(card);
    });
  }

  function start() {
    render();
    setInterval(function () { if (lang() !== shown) render(); }, 400);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
