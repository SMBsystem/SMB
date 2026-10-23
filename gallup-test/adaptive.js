/* Адаптивный этап: оценка «силы» качеств вместе с погрешностью и выбор пар, которые лучше всего
   разводят спорные места. Модель: порядковая логит-модель ответа на шкале из 5 ступеней,
   нормальный априор для силы качества; оценка — байесовская (MAP), погрешность — по информации Фишера. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.GallupAdaptive = factory();
})(this, function () {
  'use strict';

  var TAU = [-1.7, -0.5, 0.5, 1.7];   // пороги ступеней шкалы (v = -2..2 → категории 0..4)

  function sig(x) { return 1 / (1 + Math.exp(-x)); }

  /* Вероятности категорий и их производные по разности delta = theta[правое] - theta[левое]. */
  function cats(delta) {
    var F = [0], f = [0], k;
    for (k = 0; k < 4; k++) { var s = sig(TAU[k] - delta); F.push(s); f.push(s * (1 - s)); }
    F.push(1); f.push(0);
    var p = [], dp = [];
    for (var c = 0; c < 5; c++) {
      p.push(Math.max(1e-9, F[c + 1] - F[c]));
      dp.push(-f[c + 1] + f[c]);       // d p_c / d delta
    }
    return { p: p, dp: dp };
  }

  /* obs: [{l, r, v}] — индексы качеств и ответ v ∈ -2..2 (отрицательный — выбрано левое). */
  function fit(n, obs, priorSd) {
    var prec0 = 1 / ((priorSd || 1) * (priorSd || 1));
    var theta = new Array(n), info = new Array(n), i, it;
    for (i = 0; i < n; i++) theta[i] = 0;
    for (it = 0; it < 25; it++) {
      var g = new Array(n), inf = new Array(n);
      for (i = 0; i < n; i++) { g[i] = -prec0 * theta[i]; inf[i] = prec0; }
      for (var o = 0; o < obs.length; o++) {
        var ob = obs[o], ct = cats(theta[ob.r] - theta[ob.l]), c = ob.v + 2;
        var gd = ct.dp[c] / ct.p[c], fi = 0;
        for (var k = 0; k < 5; k++) fi += ct.dp[k] * ct.dp[k] / ct.p[k];
        g[ob.r] += gd; g[ob.l] -= gd;
        inf[ob.r] += fi; inf[ob.l] += fi;
      }
      var step = 0;
      for (i = 0; i < n; i++) { var d = 0.9 * g[i] / inf[i]; theta[i] += d; step = Math.max(step, Math.abs(d)); }
      info = inf;
      if (step < 1e-4) break;
    }
    var sd = info.map(function (x) { return 1 / Math.sqrt(x); });
    return { theta: theta, sd: sd };
  }

  function normCdf(x) {
    // аппроксимация Абрамовица — Стегуна
    var t = 1 / (1 + 0.2316419 * Math.abs(x));
    var d = 0.3989423 * Math.exp(-x * x / 2);
    var p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    return x > 0 ? 1 - p : p;
  }

  function ranks(theta) {
    var idx = theta.map(function (v, i) { return i; }).sort(function (a, b) { return theta[b] - theta[a]; });
    var r = new Array(theta.length);
    idx.forEach(function (i, pos) { r[i] = pos + 1; });
    return r;
  }

  /* Вес качества по близости к границам «топ-5» и «топ-10». */
  function zoneWeight(rank) {
    return Math.exp(-Math.pow(rank - 5.5, 2) / (2 * 2.5 * 2.5)) + 0.6 * Math.exp(-Math.pow(rank - 10.5, 2) / (2 * 3 * 3));
  }

  /* Выбор следующей пары: максимум «неопределённости порядка» × важность места.
     used — множество уже показанных пар вида "i|j" (i<j); lastPair — прошлая пара (качества не повторяем подряд);
     weightFn(i, j) — необязательный множитель «естественности» пары. */
  function pickPair(est, used, lastPair, weightFn) {
    var n = est.theta.length, rk = ranks(est.theta), best = null, bestScore = -1;
    for (var i = 0; i < n; i++) {
      for (var j = i + 1; j < n; j++) {
        if (used[i + '|' + j]) continue;
        if (lastPair && (lastPair[0] === i || lastPair[0] === j || lastPair[1] === i || lastPair[1] === j)) continue;
        var s = Math.sqrt(est.sd[i] * est.sd[i] + est.sd[j] * est.sd[j]);
        var p = normCdf((est.theta[i] - est.theta[j]) / s);
        var u = p * (1 - p);
        var sc = u * Math.sqrt(zoneWeight(rk[i]) * zoneWeight(rk[j])) * (weightFn ? weightFn(i, j) : 1);
        if (sc > bestScore) { bestScore = sc; best = [i, j]; }
      }
    }
    return best;
  }

  /* Уверенность в составе топ-N: минимальная из вероятностей, что каждое качество из топ-N лучше
     каждого качества за его пределами, усреднённая по «граничным» парам. Возвращает среднюю вероятность верного разделения. */
  function separation(est, topN) {
    var rk = ranks(est.theta), sum = 0, cnt = 0, n = est.theta.length;
    for (var i = 0; i < n; i++) {
      if (rk[i] > topN) continue;
      for (var j = 0; j < n; j++) {
        if (rk[j] <= topN) continue;
        if (rk[j] - topN > 6 || topN - rk[i] > 5) continue;   // только пары рядом с границей
        var s = Math.sqrt(est.sd[i] * est.sd[i] + est.sd[j] * est.sd[j]);
        sum += normCdf((est.theta[i] - est.theta[j]) / s); cnt++;
      }
    }
    return cnt ? sum / cnt : 1;
  }

  return { fit: fit, pickPair: pickPair, ranks: ranks, separation: separation, zoneWeight: zoneWeight, normCdf: normCdf, TAU: TAU };
});
