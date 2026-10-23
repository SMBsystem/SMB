/* Логика теста без привязки к интерфейсу: построение набора пар, подсчёт, проверка достоверности.
   Тест в два этапа: основная часть (фиксированный сбалансированный набор) и уточнение (адаптивные пары, см. adaptive.js). */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./adaptive.js'), require('./axes.js'));
  else root.GallupEngine = factory(root.GallupAdaptive, root.GallupAxes);
})(this, function (Adaptive, Axes) {
  'use strict';

  var SECONDS = 20;            // время на одну пару
  var ROUNDS = [2, 13, 24];    // туры «каждый с каждым» (из 33) основной части; каждый тур = 17 пар,
                               // в туре j у каждого качества используется утверждение номер j (остальные берёт уточнение)
  var STAGE2 = 40;             // число адаптивных пар на втором этапе
  var CONTROLS = 6;            // контрольные повторы (зеркальные) для проверки согласованности
  var FAST_MS = 1200;          // ответ быстрее — считаем «не читал»
  var OFF_AXIS_WEIGHT = 0.5;   // во сколько раз «неестественная» пара (без общей оси) менее желанна при подборе уточнения

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

  /* Круговой турнир: для чётного n даёт n-1 туров, в каждом тур все качества участвуют ровно в одной паре,
     а любая пара качеств встречается ровно в одном туре. Значит каждое качество получает одинаковое число сравнений. */
  function roundRobin(n, k) {
    var m = n - 1, pairs = [[0, k + 1]];
    for (var i = 1; i <= (m - 1) / 2; i++) {
      pairs.push([(k + i) % m + 1, ((k - i) % m + m) % m + 1]);
    }
    return pairs;
  }

  /* Одно паросочетание: каждое качество в ровно одной паре, пары — только из allowed (множество ключей «i|j»),
     ни одна пара не повторяет уже использованные. Если подходящего нет, недостающие пары добираются из любых. */
  function matching(n, allowed, used, rng) {
    function attempt(restrict) {
      var order = shuffle(Array.apply(null, Array(n)).map(function (x, i) { return i; }), rng), taken = {}, m = [];
      for (var oi = 0; oi < order.length; oi++) {
        var a = order[oi];
        if (taken[a]) continue;
        taken[a] = true;
        var cand = [];
        for (var b = 0; b < n; b++) {
          var k = Axes.key(a, b);
          if (!taken[b] && !used[k] && (!restrict || allowed[k])) cand.push(b);
        }
        if (!cand.length) return restrict ? null : m;   // без ограничения такого почти не бывает
        var pick = cand[Math.floor(rng() * cand.length)];
        taken[pick] = true; m.push([a, pick]);
      }
      return m;
    }
    for (var t = 0; t < 400; t++) { var r = attempt(true); if (r) return r; }
    return attempt(false) || [];
  }

  /* Основная часть строится из «естественных» пар (у качеств есть общая ось, см. axes.js),
     при этом каждое качество получает одинаковое число сравнений. */
  function naturalMatchings(themes, rng, count) {
    var allowed = Axes.pairSets(themes).natural, used = {}, out = [];
    for (var j = 0; j < count; j++) {
      var m = matching(themes.length, allowed, used, rng);
      m.forEach(function (p) { used[Axes.key(p[0], p[1])] = 1; });
      out.push(m);
    }
    return out;
  }

  // rounds и controls можно задать для экспериментов (симуляция); без rounds — рабочая конфигурация теста
  function buildItems(themes, rng, rounds, controls) {
    rng = rng || Math.random;
    controls = controls === undefined ? CONTROLS : controls;
    var matchings = rounds
      ? rounds.map(function (k) { return roundRobin(themes.length, k); })
      : naturalMatchings(themes, rng, ROUNDS.length);
    var items = [];
    matchings.forEach(function (pairs, j) {
      pairs.forEach(function (p) {
        var flip = rng() < 0.5;
        var a = themes[p[0]].id, b = themes[p[1]].id;
        items.push({ L: { t: flip ? b : a, s: j }, R: { t: flip ? a : b, s: j } });
      });
    });
    shuffle(items, rng);
    // не ставим подряд пары с одним и тем же качеством
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
    for (var c = 0; c < controls; c++) {
      var src = items[2 + c * 7];
      var copy = { id: 'c' + c, control: true, of: src.id, L: src.R, R: src.L };
      var at = Math.min(withControls.length, withControls.indexOf(src) + 14 + Math.floor(rng() * 6));
      withControls.splice(at, 0, copy);
    }
    return withControls;
  }

  /* Наблюдения для оценки: только оценённые пары (не контрольные, не пропущенные). */
  function observations(items, answers, themes) {
    var idx = {}; themes.forEach(function (t, i) { idx[t.id] = i; });
    var obs = [];
    items.forEach(function (it, i) {
      var a = answers[i];
      if (it.control || !a || a.v === null) return;
      obs.push({ l: idx[it.L.t], r: idx[it.R.t], v: a.v });
    });
    return obs;
  }

  /* Следующая пара уточнения: выбираем качества из «серой зоны» рейтинга, которые ещё не сталкивали,
     а утверждения берём наименее показанные из имеющихся у качества. */
  function nextAdaptiveItem(themes, items, answers, rng) {
    rng = rng || Math.random;
    var idx = {}; themes.forEach(function (t, i) { idx[t.id] = i; });
    var used = {}, usage = {}, last = null;
    items.forEach(function (it) {
      if (it.control) return;
      var a = idx[it.L.t], b = idx[it.R.t];
      used[Math.min(a, b) + '|' + Math.max(a, b)] = 1;
      usage[it.L.t + '#' + it.L.s] = (usage[it.L.t + '#' + it.L.s] || 0) + 1;
      usage[it.R.t + '#' + it.R.s] = (usage[it.R.t + '#' + it.R.s] || 0) + 1;
      last = [a, b];
    });
    var est = Adaptive.fit(themes.length, observations(items, answers, themes));
    var nat = Axes.pairSets(themes).natural;
    function w(i, j) { return nat[Axes.key(i, j)] ? 1 : OFF_AXIS_WEIGHT; }
    var p = Adaptive.pickPair(est, used, last, w) || Adaptive.pickPair(est, used, null, w);
    if (!p) return null;
    function pickStatement(t, n) {
      var best = [], min = Infinity;
      for (var s = 0; s < n; s++) {
        var u = usage[t + '#' + s] || 0;
        if (u < min) { min = u; best = [s]; } else if (u === min) best.push(s);
      }
      return best[Math.floor(rng() * best.length)];
    }
    var a = themes[p[0]], b = themes[p[1]];
    var sa = pickStatement(a.id, a.st.length), sb = pickStatement(b.id, b.st.length);
    var flip = rng() < 0.5;
    var A = { t: a.id, s: sa }, B = { t: b.id, s: sb };
    return { id: 'a' + items.length, stage: 2, L: flip ? B : A, R: flip ? A : B };
  }

  function pearson(a, b) {
    var n = a.length, ma = 0, mb = 0, i;
    for (i = 0; i < n; i++) { ma += a[i]; mb += b[i]; }
    ma /= n; mb /= n;
    var sab = 0, saa = 0, sbb = 0;
    for (i = 0; i < n; i++) { sab += (a[i] - ma) * (b[i] - mb); saa += (a[i] - ma) * (a[i] - ma); sbb += (b[i] - mb) * (b[i] - mb); }
    return saa && sbb ? sab / Math.sqrt(saa * sbb) : null;
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
          // у копии стороны зеркальные: предпочтение первого качества = -v
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

    // сила качеств: байесовская оценка по всем ответам (учитывает, с кем и как часто качество сравнивали)
    var obs = observations(items, answers, themes);
    var est = Adaptive.fit(themes.length, obs);
    themes.forEach(function (t, i) { by[t.id].theta = est.theta[i]; by[t.id].sd = est.sd[i]; });

    var ranking = themes.map(function (t) { return by[t.id]; });
    var order = {}; themes.forEach(function (t, i) { order[t.id] = i; });
    ranking.sort(function (x, y) {
      return (y.theta - x.theta) || (y.score - x.score) || (order[x.id] - order[y.id]);
    });
    ranking.forEach(function (r, i) { r.rank = i + 1; });
    // соседи, которых по ответам нельзя уверенно развести (вероятность верного порядка меньше 60%)
    ranking.forEach(function (r, i) {
      var nx = ranking[i + 1];
      r.tiedNext = !!nx && Adaptive.normCdf((r.theta - nx.theta) / Math.sqrt(r.sd * r.sd + nx.sd * nx.sd)) < 0.6;
    });

    var dom = {};
    ranking.forEach(function (r) {
      dom[r.domain] = dom[r.domain] || { sum: 0, n: 0 };
      dom[r.domain].sum += r.theta; dom[r.domain].n++;
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
      consistency: compared ? agree / compared : null,
      stability: null
    };
    // стабильность профиля: оценки по чётным и нечётным ответам, корреляция по 34 качествам, поправка Спирмена — Брауна
    if (answered >= 30) {
      var o1 = obs.filter(function (x, i) { return i % 2 === 0; }), o2 = obs.filter(function (x, i) { return i % 2 === 1; });
      var r = pearson(Adaptive.fit(themes.length, o1).theta, Adaptive.fit(themes.length, o2).theta);
      if (r !== null && r > -1) v.stability = Math.max(0, 2 * r / (1 + r));
    }
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
    if (v.compared >= 4 && v.consistency < CONS_BAD) flag('bad', 'consBad', Math.round(v.consistency * 100));
    else if (v.compared >= 4 && v.consistency < CONS_WARN) flag('warn', 'consWarn', Math.round(v.consistency * 100));
    // пороги подобраны симуляцией (см. README)
    if (v.stability !== null && v.stability < STAB_BAD) flag('bad', 'stabBad', Math.round(v.stability * 100));
    else if (v.stability !== null && v.stability < STAB_WARN) flag('warn', 'stabWarn', Math.round(v.stability * 100));
    return { ranking: ranking, domains: domains, validity: v, level: level, issues: issues };
  }

  var STAB_BAD = 0.15, STAB_WARN = 0.3, CONS_BAD = 0.4, CONS_WARN = 0.6;

  return {
    SECONDS: SECONDS, ROUNDS: ROUNDS, STAGE2: STAGE2, CONTROLS: CONTROLS, FAST_MS: FAST_MS,
    buildItems: buildItems, nextAdaptiveItem: nextAdaptiveItem, score: score, roundRobin: roundRobin,
    observations: observations
  };
});
