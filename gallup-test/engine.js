/* Логика теста без привязки к интерфейсу: построение набора пар, подсчёт, проверка достоверности. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.GallupEngine = factory();
})(this, function () {
  'use strict';

  var SECONDS = 20;            // время на одну пару
  var ROUNDS = [2, 13, 24];    // какие туры «каждый с каждым» (из 33) используем; каждый тур = 17 пар
  var CONTROLS = 6;            // контрольные повторы (зеркальные) для проверки согласованности
  var FAST_MS = 1200;          // ответ быстрее — считаем «не читал»

  function shuffle(arr, rng) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  function sharesTheme(a, b) {
    return a.L.t === b.L.t || a.L.t === b.R.t || a.R.t === b.L.t || a.R.t === b.R.t;
  }

  /* Круговой турнир: для чётного n даёт n-1 туров, в каждом тур все таланты участвуют ровно в одной паре,
     а любая пара талантов встречается ровно в одном туре. Значит каждый талант получает одинаковое число сравнений. */
  function roundRobin(n, k) {
    var m = n - 1, pairs = [[0, k + 1]];
    for (var i = 1; i <= (m - 1) / 2; i++) {
      pairs.push([(k + i) % m + 1, ((k - i) % m + m) % m + 1]);
    }
    return pairs;
  }

  function buildItems(themes, rng) {
    rng = rng || Math.random;
    var items = [];
    ROUNDS.forEach(function (k, j) {
      roundRobin(themes.length, k).forEach(function (p) {
        var flip = rng() < 0.5;
        var a = themes[p[0]].id, b = themes[p[1]].id;
        items.push({ L: { t: flip ? b : a, s: j }, R: { t: flip ? a : b, s: j } });
      });
    });
    shuffle(items, rng);
    // не ставим подряд пары с одним и тем же талантом
    for (var i = 1; i < items.length; i++) {
      if (!sharesTheme(items[i], items[i - 1])) continue;
      for (var j2 = i + 1; j2 < items.length; j2++) {
        if (!sharesTheme(items[j2], items[i - 1])) {
          var t = items[i]; items[i] = items[j2]; items[j2] = t;
          break;
        }
      }
    }
    items.forEach(function (it, idx) { it.id = 'p' + idx; });

    // контрольные повторы: зеркальная копия более ранней пары, вставленная заметно позже
    var withControls = items.slice();
    for (var c = 0; c < CONTROLS; c++) {
      var src = items[2 + c * 7];
      var copy = { id: 'c' + c, control: true, of: src.id, L: src.R, R: src.L };
      var at = Math.min(withControls.length, withControls.indexOf(src) + 14 + Math.floor(rng() * 6));
      withControls.splice(at, 0, copy);
    }
    return withControls;
  }

  /* answers[i] = { v: -2..2 | null, rt: мс }. -2/-1 — выбрано левое, 1/2 — правое, 0 — «не знаю», null — время вышло. */
  function score(items, answers, themes) {
    var by = {};
    themes.forEach(function (t) { by[t.id] = { id: t.id, domain: t.domain, score: 0, strong: 0, wins: 0, n: 0 }; });
    var scored = 0, skipped = 0, neutral = 0, left = 0, right = 0, fast = 0, rts = [];
    var firstValue = {}, compared = 0, agree = 0;

    items.forEach(function (it, i) {
      var a = answers[i];
      if (!a) return;
      if (it.control) {
        var first = firstValue[it.of];
        if (first !== undefined && first !== null && a.v !== null) {
          compared++;
          // у копии стороны зеркальные: предпочтение первого таланта = -v
          var s1 = Math.sign(first), s2 = Math.sign(-a.v);
          if (s1 === s2) agree++;
          else if (s1 === 0 || s2 === 0) agree += 0.5;
        }
        return;
      }
      firstValue[it.id] = a.v;
      scored++;
      if (a.v === null) { skipped++; return; }
      rts.push(a.rt);
      if (a.rt < FAST_MS) fast++;
      var L = by[it.L.t], R = by[it.R.t];
      L.n++; R.n++;
      L.score -= a.v; R.score += a.v;
      if (a.v === 0) neutral++;
      else if (a.v < 0) { left++; L.wins++; if (a.v === -2) L.strong++; }
      else { right++; R.wins++; if (a.v === 2) R.strong++; }
    });

    var ranking = themes.map(function (t) { return by[t.id]; });
    var order = {}; themes.forEach(function (t, i) { order[t.id] = i; });
    ranking.sort(function (x, y) {
      return (y.score - x.score) || (y.strong - x.strong) || (y.wins - x.wins) || (order[x.id] - order[y.id]);
    });
    ranking.forEach(function (r, i) { r.rank = i + 1; });
    // отмечаем равенство с соседом по всем критериям
    ranking.forEach(function (r, i) {
      var nx = ranking[i + 1];
      r.tiedNext = !!nx && nx.score === r.score && nx.strong === r.strong && nx.wins === r.wins;
    });

    var dom = {};
    ranking.forEach(function (r) {
      dom[r.domain] = dom[r.domain] || { sum: 0, n: 0 };
      dom[r.domain].sum += r.score; dom[r.domain].n++;
    });
    var domains = {};
    Object.keys(dom).forEach(function (k) { domains[k] = dom[k].sum / dom[k].n; });

    rts.sort(function (x, y) { return x - y; });
    var answered = scored - skipped;
    var directional = left + right;
    var v = {
      scored: scored, skipped: skipped, answered: answered,
      skippedShare: scored ? skipped / scored : 0,
      neutralShare: answered ? neutral / answered : 0,
      fastShare: answered ? fast / answered : 0,
      medianRt: rts.length ? rts[Math.floor(rts.length / 2)] : 0,
      leftShare: directional ? left / directional : 0.5,
      directional: directional,
      compared: compared,
      consistency: compared ? agree / compared : null
    };
    var issues = [], level = 'ok';
    // замечания — коды (k) с параметром (p); текст подставляет интерфейс на нужном языке
    function flag(lv, k, p) {
      issues.push({ k: k, p: p });
      if (lv === 'bad') level = 'bad'; else if (level === 'ok') level = 'warn';
    }
    if (v.skippedShare > 0.3) flag('bad', 'skipBad', Math.round(v.skippedShare * 100));
    else if (v.skippedShare > 0.15) flag('warn', 'skipWarn', Math.round(v.skippedShare * 100));
    if (v.fastShare > 0.5) flag('bad', 'fastBad');
    else if (v.fastShare > 0.3) flag('warn', 'fastWarn');
    if (v.neutralShare > 0.5) flag('warn', 'neutralWarn');
    if (v.directional >= 20 && (v.leftShare > 0.8 || v.leftShare < 0.2)) flag('warn', 'sideWarn');
    if (v.compared >= 4 && v.consistency < 0.5) flag('bad', 'consBad', Math.round(v.consistency * 100));
    else if (v.compared >= 4 && v.consistency < 0.7) flag('warn', 'consWarn', Math.round(v.consistency * 100));
    return { ranking: ranking, domains: domains, validity: v, level: level, issues: issues };
  }

  return { SECONDS: SECONDS, ROUNDS: ROUNDS, CONTROLS: CONTROLS, FAST_MS: FAST_MS, buildItems: buildItems, score: score, roundRobin: roundRobin };
});
