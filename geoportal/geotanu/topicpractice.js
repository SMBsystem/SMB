/* GeoTany: shared "practice" block for topic pages (real-life tasks with worked solutions).
   Page provides window.TOPIC_PRACTICE = { kz: [{t,s,a,u,sol}], ru: [...] }; a is an optional numeric answer, u its unit. */
(function () {
  var UI = {
    kz: { head: 'ПРАКТИКА: БІЛІМДІ ТҰРМЫСТА ҚОЛДАНУ', task: 'Тапсырма', ans: 'Жауабың', check: 'Тексеру', show: 'Шешуін көрсету', hide: 'Шешуін жасыру',
          ok: 'Дұрыс!', no: 'Әзірге дұрыс емес — тағы байқап көр немесе шешуін аш.', right: 'Дұрыс жауап', sol: 'Шешуі', hint: 'Алдымен өзің шешіп көр, содан кейін шешуін ашып салыстыр.' },
    ru: { head: 'ПРАКТИКА: ПРИМЕНЯЙ ЗНАНИЯ НА ДЕЛЕ', task: 'Задание', ans: 'Твой ответ', check: 'Проверить', show: 'Показать решение', hide: 'Скрыть решение',
          ok: 'Верно!', no: 'Пока неверно — попробуй ещё раз или открой решение.', right: 'Правильный ответ', sol: 'Решение', hint: 'Сначала реши сам, потом открой решение и сравни.' }
  };
  function lang() { try { return currentLang === 'ru' ? 'ru' : 'kz'; } catch (e) { return 'kz'; } }
  function el(tag, cls, txt) { var n = document.createElement(tag); if (cls) n.className = cls; if (txt != null) n.textContent = txt; return n; }
  var shown = null;

  function mount() {
    var ex = document.getElementById('tpSection'); if (ex) return ex;
    var ids = ['testQuestionsList', 'tqSection', 'quizSection', 'geoquest', 'trapsSection', 'factsSection', 'tableSection', 'theoryContent'];
    var anchor = null;
    for (var i = 0; i < ids.length && !anchor; i++) anchor = document.getElementById(ids[i]);
    if (anchor && anchor.id === 'testQuestionsList') anchor = anchor.closest('section') || anchor;
    var s = el('section', 'scroll-mt-24 p-5 rounded-2xl bg-space-950 border border-amber-500/40 space-y-4 shadow-xl');
    s.id = 'tpSection';
    if (anchor) anchor.parentNode.insertBefore(s, anchor.nextSibling);
    else { var host = document.querySelector('main') || document.body; host.appendChild(s); }
    return s;
  }

  function num(v) { return parseFloat(String(v).replace(/\s/g, '').replace(',', '.').replace('−', '-')); }

  function render() {
    var L = lang(), ui = UI[L], items = (window.TOPIC_PRACTICE && window.TOPIC_PRACTICE[L]) || [];
    var s = mount(); shown = L; s.innerHTML = '';
    if (!items.length) { s.classList.add('hidden'); return; }
    s.classList.remove('hidden');
    var h = el('h3', 'text-xs font-black text-amber-400 flex items-center space-x-2');
    h.appendChild(el('span', null, '🛠️')); h.appendChild(el('span', null, ui.head + ' (' + items.length + ')'));
    s.appendChild(h); s.appendChild(el('p', 'text-[11px] text-slate-400', ui.hint));
    var list = el('div', 'space-y-3'); s.appendChild(list);

    items.forEach(function (it, i) {
      var card = el('article', 'rounded-xl bg-space-900/70 border border-slate-800 p-4 space-y-3');
      card.appendChild(el('div', 'text-[10px] font-black tracking-widest text-amber-400 uppercase', ui.task + ' ' + (i + 1) + ' · ' + it.t));
      card.appendChild(el('p', 'text-xs text-slate-200 leading-relaxed', it.s));
      var solBox = el('div', 'hidden p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-slate-200 leading-relaxed space-y-1');
      var hasA = it.a !== '' && it.a != null && !isNaN(num(it.a));
      if (hasA) solBox.appendChild(el('div', 'font-black text-emerald-300', ui.right + ': ' + it.a + (it.u ? ' ' + it.u : '')));
      solBox.appendChild(el('div', 'font-black text-emerald-300', ui.sol + ':'));
      solBox.appendChild(el('div', null, it.sol));
      var row = el('div', 'flex flex-wrap items-center gap-2');
      var fb = el('span', 'text-[11px] font-bold');
      if (hasA) {
        var inp = el('input', 'w-32 px-2.5 py-1.5 rounded-lg bg-space-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-500/60');
        inp.type = 'text'; inp.setAttribute('inputmode', 'decimal'); inp.placeholder = ui.ans;
        var cb = el('button', 'px-3 py-1.5 rounded-lg text-[11px] font-bold bg-amber-500/20 border border-amber-500/50 text-amber-200 hover:bg-amber-500/30 transition', ui.check);
        cb.type = 'button';
        var go = function () {
          var v = num(inp.value); if (isNaN(v)) return;
          var a = num(it.a), tol = Math.max(Math.abs(a) * 0.01, 0.0001);
          if (Math.abs(v - a) <= tol) { fb.textContent = '✓ ' + ui.ok; fb.className = 'text-[11px] font-bold text-emerald-300'; solBox.classList.remove('hidden'); tg.textContent = ui.hide; }
          else { fb.textContent = '✗ ' + ui.no; fb.className = 'text-[11px] font-bold text-rose-300'; }
        };
        cb.addEventListener('click', go); inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); });
        row.appendChild(inp); row.appendChild(cb);
        if (it.u) row.appendChild(el('span', 'text-[11px] text-slate-400', it.u));
      }
      var tg = el('button', 'px-3 py-1.5 rounded-lg text-[11px] font-bold bg-space-950 border border-slate-700 text-slate-300 hover:text-white hover:border-emerald-500/50 transition', ui.show);
      tg.type = 'button';
      tg.addEventListener('click', function () { var hid = solBox.classList.toggle('hidden'); tg.textContent = hid ? ui.show : ui.hide; });
      row.appendChild(tg); row.appendChild(fb);
      card.appendChild(row); card.appendChild(solBox); list.appendChild(card);
    });
  }

  function start() { render(); setInterval(function () { if (lang() !== shown) render(); }, 400); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
