/* Оси сравнения: на каждой оси два полюса. Пара качеств «естественна», если у них есть общая ось:
   особенно контрастны пары с разных полюсов («знакомства» против «уединения»), но сравнимы и пары с одного полюса.
   Разметка — экспертная оценка автора прототипа, а не данные Gallup. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.GallupAxes = factory();
})(this, function () {
  'use strict';

  var AXES = [
    { id: 'people',   plus: ['woo', 'includer', 'positivity', 'communication'],                 minus: ['intellection', 'relator', 'deliberative'] },
    { id: 'pace',     plus: ['activator', 'achiever', 'restorative', 'command'],                minus: ['deliberative', 'analytical', 'intellection', 'context'] },
    { id: 'order',    plus: ['discipline', 'consistency', 'focus', 'responsibility'],           minus: ['adaptability', 'arranger', 'ideation', 'individualization'] },
    { id: 'evidence', plus: ['analytical', 'input', 'context', 'deliberative'],                 minus: ['selfassurance', 'futuristic', 'ideation', 'strategic'] },
    { id: 'time',     plus: ['context'],                                                        minus: ['futuristic', 'strategic', 'adaptability'] },
    { id: 'drive',    plus: ['competition', 'maximizer', 'significance', 'command', 'selfassurance'], minus: ['harmony', 'empathy', 'developer', 'includer', 'positivity'] },
    { id: 'rules',    plus: ['consistency', 'discipline', 'responsibility'],                    minus: ['individualization', 'empathy', 'adaptability'] },
    { id: 'meaning',  plus: ['belief', 'connectedness', 'significance'],                        minus: ['achiever', 'restorative', 'focus', 'competition'] },
    { id: 'mind',     plus: ['learner', 'input', 'intellection', 'analytical', 'context'],      minus: ['achiever', 'activator', 'restorative', 'arranger'] },
    { id: 'lead',     plus: ['command', 'selfassurance', 'activator', 'significance', 'maximizer'], minus: ['empathy', 'harmony', 'developer', 'includer', 'adaptability'] }
  ];

  function key(a, b) { return Math.min(a, b) + '|' + Math.max(a, b); }

  /* Множества пар (по индексам качеств в themes): tension — с разных полюсов, natural — общая ось (любые полюса). */
  function pairSets(themes) {
    var idx = {}; themes.forEach(function (t, i) { idx[t.id] = i; });
    var tension = {}, natural = {};
    AXES.forEach(function (a) {
      a.plus.forEach(function (p) {
        a.minus.forEach(function (m) { if (p !== m) { tension[key(idx[p], idx[m])] = 1; natural[key(idx[p], idx[m])] = 1; } });
      });
      [a.plus, a.minus].forEach(function (side) {
        for (var i = 0; i < side.length; i++) for (var j = i + 1; j < side.length; j++) natural[key(idx[side[i]], idx[side[j]])] = 1;
      });
    });
    return { tension: tension, natural: natural };
  }

  return { AXES: AXES, pairSets: pairSets, key: key };
});
