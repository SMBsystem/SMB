// ИИ-экзаменатор: локальный аналитический аудитор + опциональные облачные модели.
// Главное правило: сначала проверка соответствия заданию, потом баллы.
(function () {
  'use strict';
  var IELTS = window.IELTS;
  var esc = IELTS.escapeHtml;
  var SETTINGS_KEY = 'ielts_ai_settings_v1';
  var RELEVANCE_MIN = 22;

  /* ---------- настройки ---------- */
  function readSettings() {
    try { var s = JSON.parse(IELTS.lsGet(SETTINGS_KEY) || 'null'); if (s && typeof s === 'object') return s; } catch (e) {}
    return { mode: 'local', geminiKey: '', openaiKey: '' };
  }
  function writeSettings(s) { IELTS.lsSet(SETTINGS_KEY, JSON.stringify(s)); }

  function bindSettings() {
    var $ = IELTS.$;
    $('btnAiSettings').addEventListener('click', function () {
      var s = readSettings();
      document.querySelectorAll('input[name="aiMode"]').forEach(function (r) { r.checked = r.value === s.mode; });
      $('geminiKey').value = s.geminiKey || '';
      $('openaiKey').value = s.openaiKey || '';
      $('aiModal').classList.remove('hidden');
    });
    $('aiClose').addEventListener('click', function () { $('aiModal').classList.add('hidden'); });
    $('aiModal').addEventListener('click', function (e) { if (e.target === $('aiModal')) $('aiModal').classList.add('hidden'); });
    $('aiSave').addEventListener('click', function () {
      var chosen = document.querySelector('input[name="aiMode"]:checked');
      var s = { mode: chosen ? chosen.value : 'local', geminiKey: $('geminiKey').value.trim(), openaiKey: $('openaiKey').value.trim() };
      if (s.mode === 'gemini' && !s.geminiKey) return IELTS.toast('Для Gemini нужен API-ключ.', true);
      if (s.mode === 'openai' && !s.openaiKey) return IELTS.toast('Для OpenAI нужен API-ключ.', true);
      writeSettings(s);
      $('aiModal').classList.add('hidden');
      IELTS.toast('Настройки ИИ сохранены.');
    });
  }

  /* ---------- токены и числа ---------- */
  var STOP = new Set(('a an the and or but if then than that this these those which who whom whose what when where why how of to in on at by for with from into onto over under about as is are was were be been being am do does did done have has had having will would shall should can could may might must not no nor so such it its they them their there here he she his her we our you your i me my also very more most much many some any each every other another own same only just too even still yet while whereas although though because since however therefore thus hence per via within without between among across through during before after above below up down out off again further once all both few several often usually generally around nearly almost about people person thing things way ways make makes made making take takes took taken get gets got give gives gave use used using uses like likely well good bad great big important think thinks thought say says said show shows shown showed given according following period year years time times number numbers figure figures percent per cent rate level levels amount total data information example examples case cases kind types type part parts lot lots able less least first second third finally one two three four five six seven eight nine ten new old high low higher lower highest lowest').split(/\s+/));

  function stemKey(w) {
    w = w.toLowerCase().replace(/[^a-z]/g, '');
    if (w.length < 4) return w;
    var rules = [/(ational|ization|isation)$/, /(ations|ation|itions|ition|ments|ment|ness|ities|ity|ingly|edly|ing|ers|er|ies|ied|ed|es|ly|al|ive|ous|ic|s)$/];
    var cur = w.replace(rules[0], 'ate');
    var prev;
    do { prev = cur; var n = cur.replace(rules[1], ''); if (n.length >= 4) cur = n; } while (cur !== prev && cur.length > 5);
    return cur.slice(0, 6);
  }
  function extractContentTokens(text) {
    var seen = {}, out = [];
    String(text || '').toLowerCase().replace(/[^a-z\s'-]/g, ' ').split(/[\s-]+/).forEach(function (w) {
      w = w.replace(/'s$/, '').replace(/[^a-z]/g, '');
      if (w.length < 4 || STOP.has(w)) return;
      var k = stemKey(w);
      if (k.length >= 3 && !seen[k]) { seen[k] = 1; out.push(k); }
    });
    return out;
  }
  function extractDataNumbers(text) {
    var seen = {}, out = [];
    (String(text || '').match(/\d+(?:[.,]\d+)*/g) || []).forEach(function (n) {
      n = n.replace(/,(\d{3})/g, '$1').replace(/[.,]$/, '');
      if (n === '1' || n === '2' || n === '0') return;
      if (!seen[n]) { seen[n] = 1; out.push(n); }
    });
    return out;
  }

  /* ---------- статистика текста ---------- */
  var B1_MAP = {
    very: ['highly', 'considerably', 'markedly'], good: ['beneficial', 'favourable', 'advantageous'], bad: ['detrimental', 'adverse', 'harmful'],
    big: ['substantial', 'considerable', 'significant'], important: ['crucial', 'essential', 'vital'], 'a lot of': ['a substantial number of', 'considerable', 'numerous'],
    lots: ['numerous', 'a great many'], get: ['obtain', 'acquire', 'gain'], got: ['obtained', 'acquired'], think: ['argue', 'contend', 'maintain'],
    show: ['illustrate', 'demonstrate', 'indicate'], shows: ['illustrates', 'demonstrates', 'indicates'], help: ['facilitate', 'assist', 'support'],
    thing: ['factor', 'aspect', 'element'], things: ['factors', 'aspects', 'elements'], nowadays: ['in contemporary society', 'currently'],
    kids: ['children', 'young people'], problem: ['challenge', 'issue', 'difficulty'], problems: ['challenges', 'issues', 'difficulties'],
    huge: ['immense', 'considerable'], nice: ['pleasant', 'rewarding'], hard: ['demanding', 'challenging'], 'a lot': ['substantially', 'considerably'],
    maybe: ['arguably', 'possibly'], enough: ['sufficient', 'adequate']
  };
  var B1_REWRITE_SIMPLE = { very: 'highly', good: 'beneficial', bad: 'detrimental', big: 'substantial', important: 'crucial', get: 'obtain', think: 'argue', show: 'illustrate', shows: 'illustrates', help: 'facilitate', things: 'factors', thing: 'factor', nowadays: 'in contemporary society', kids: 'children', problem: 'challenge', problems: 'challenges', huge: 'immense', nice: 'rewarding', hard: 'demanding' };
  var LINKERS = ['however', 'moreover', 'furthermore', 'in addition', 'consequently', 'therefore', 'nevertheless', 'whereas', 'while', 'although', 'despite', 'in contrast', 'by contrast', 'as a result', 'for instance', 'for example', 'on the other hand', 'in conclusion', 'to sum up', 'overall', 'thus', 'hence', 'similarly', 'in particular', 'notably', 'subsequently', 'albeit', 'given that', 'provided that'];
  var MECH = ['firstly', 'secondly', 'thirdly', 'finally', 'first of all', 'in conclusion', 'to conclude', 'in the first place'];
  // Основы академической лексики: слово считается, если начинается с основы
  var ACADEMIC = ['signific', 'substanti', 'considerab', 'crucial', 'facilitat', 'implement', 'sustainab', 'fundamental', 'inevitab', 'detriment', 'benefici', 'mitigat', 'contempor', 'infrastructure', 'consequen', 'perspectiv', 'allevia', 'inequalit', 'accessib', 'incentiv', 'ultimate', 'undermin', 'disproportion', 'comprehens', 'generat', 'sufficien', 'phenomen', 'predominan', 'fluctuat', 'plateau', 'approximat', 'respectively', 'comparativ', 'marginal', 'steady', 'surge', 'declin', 'allocat', 'rigorous', 'viab', 'adequa', 'stimulat', 'foster', 'enhanc', 'impos', 'curb', 'outweigh', 'arguabl', 'automat', 'cognitiv', 'retention', 'acquisition', 'acquir', 'instruction', 'procedural', 'declarative', 'vulnerab', 'mechanis', 'empirical', 'evidence', 'conceptual', 'framework', 'criteri', 'distinct', 'emphasi', 'estimat', 'indicat', 'interpret', 'maintain', 'participat', 'principl', 'prioriti', 'rehears', 'consolidat', 'amplif', 'reliab', 'valid', 'sample', 'overlook', 'unstable', 'efficien', 'convenien', 'stagnat', 'dependen', 'interven', 'diagnos', 'analys', 'predict', 'structur', 'contrast', 'correspond', 'illustrat', 'tendency', 'notabl', 'markedly', 'striking', 'levelled', 'peak', 'trough', 'dramatic', 'exceed', 'constitut', 'proportion', 'category', 'regional', 'urbanis', 'urbaniz', 'infrastructure', 'regulat', 'initiativ', 'implicat', 'outcome', 'derive', 'underlying', 'inherent', 'merit', 'drawback', 'paramount', 'imperative', 'deteriorat', 'exacerbat', 'cultivat', 'prevalent', 'widespread', 'perceiv', 'attribut', 'foundation'];
  var OPINION = /\b(i\s+(?:\w+ly\s+){0,2}(?:partly\s+|partially\s+)?(?:believe|think|agree|disagree|feel|would argue|am convinced|contend|maintain|do not accept|do not agree|am of the opinion)|in my (?:opinion|view)|from my (?:perspective|point of view)|this essay|personally|my own view|my view is)\b/gi;
  var OVERVIEW = /\b(overall|in general|it is (?:clear|evident|apparent|noticeable)|the (?:main|most notable|most striking) (?:trend|feature|difference)|to summari[sz]e|in summary|the (?:process|diagram|chart|graph|table|map|plan|maps) (?:shows|illustrates|compares|depicts|outlines))\b/i;
  var FILLERS = /\b(um+|uh+|er+|erm|you know|i mean|like,|sort of|kind of|basically|actually|so yeah)\b/gi;

  function words(text) { return (String(text || '').toLowerCase().match(/[a-z]+(?:'[a-z]+)?/g) || []); }
  function countRe(text, re) { return (String(text).match(re) || []).length; }
  function countPhrase(lower, ph) {
    var re = new RegExp('\\b' + ph.replace(/\s+/g, '\\s+') + '\\b', 'g');
    return (lower.match(re) || []).length;
  }
  function round05(x) { return Math.round(x * 2) / 2; }
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }

  function analyzeText(text) {
    var raw = String(text || '');
    var w = words(raw);
    var lower = raw.toLowerCase();
    var sentences = raw.split(/(?<=[.!?])\s+/).filter(function (s) { return s.trim().length > 2; });
    var paragraphs = raw.split(/\n\s*\n|\n/).filter(function (p) { return p.trim().length > 20; });
    var uniq = new Set(w);
    var linkers = LINKERS.filter(function (l) { return countPhrase(lower, l) > 0; });
    var mech = 0; MECH.forEach(function (m) { mech += countPhrase(lower, m); });
    var acad = ACADEMIC.filter(function (a) { return new RegExp('\\b' + a).test(lower); });
    var b1 = [];
    Object.keys(B1_MAP).forEach(function (k) {
      var c = countPhrase(lower, k);
      if (c > 0) b1.push({ word: k, count: c, alts: B1_MAP[k] });
    });
    var longW = w.filter(function (x) { return x.length >= 8; }).length;
    var complex = countRe(lower, /\b(which|who|whom|whose|although|though|whereas|while|because|since|unless|provided|if|when|whether|despite|in spite of|so that|given that|as long as|than|that|compared (?:with|to)|respectively|rather than|instead of|in order to|not only|as well as|once|until|after|before)\b/g) +
      countRe(lower, /,\s+(?:\w+ing|\w+ed)\b/g);
    var cond = countRe(lower, /\b(if|unless)\b[^.]*\b(would|could|might|will|were)\b/g);
    var passive = countRe(lower, /\b(is|are|was|were|been|being|be)\s+(?:\w+ly\s+)?\w+(?:ed|en)\b/g);
    var hedges = countRe(lower, /\b(may|might|could|arguably|tend to|tends to|appears? to|seems? to|perhaps|likely|to some extent|in most cases|largely|somewhat|presumably|suggests?)\b/g);
    var errs = [];
    if (/\bi\s+(?=[a-z])/.test(raw.replace(/\bI\b/g, '')) && /(^|[\s.!?])i\s/.test(raw)) errs.push('«i» вместо «I»');
    if (/\b(\w+)\s+\1\b/i.test(raw) && /\b(the|a|an|of|to|in|and|is)\s+\1\b/i.test(raw)) errs.push('повтор слова подряд');
    if (/\b(peoples|informations|advices|furnitures|a informations|an advices)\b/i.test(raw)) errs.push('неисчисляемое существительное во мн. числе');
    if (/\b(people|children|government|everyone|everybody) (is|has|does|was)\b/i.test(raw) && !/\bpeople\b[^.]*\b(is|has)\b[^.]*\bpeople\b/i.test(raw)) {
      if (/\b(people|children) (is|has|does|was)\b/i.test(raw)) errs.push('согласование: people/children + глагол ед. числа');
    }
    if (/\b(he|she|it) (go|have|do|say|make|take|give|become)\b/i.test(raw)) errs.push('нет окончания -s у глагола после he/she/it');
    if (/[a-z][,.;!?][A-Za-z]/.test(raw)) errs.push('нет пробела после знака препинания');
    var lowerStarts = sentences.filter(function (s) { return /^[a-z]/.test(s.trim()); }).length;
    if (lowerStarts > 0) errs.push('предложение начинается со строчной буквы (' + lowerStarts + ')');
    var contractions = countRe(raw, /\b\w+'(?:t|s|re|ve|ll|d|m)\b/g);
    return {
      words: w.length, sentences: sentences.length, paragraphs: paragraphs.length,
      avgSent: sentences.length ? w.length / sentences.length : 0,
      ttr: w.length ? uniq.size / w.length : 0, // доля уникальных слов
      linkers: linkers, mech: mech, acad: acad, b1: b1, longRatio: w.length ? longW / w.length : 0,
      complex: complex, cond: cond, passive: passive, hedges: hedges, errs: errs, contractions: contractions,
      opinion: countRe(raw, OPINION), overview: OVERVIEW.test(raw), fillers: countRe(raw, FILLERS),
      examples: countRe(lower, /\b(for example|for instance|such as|to illustrate|a case in point)\b/g), lower: lower
    };
  }

  /* ---------- проверка соответствия заданию ---------- */
  function analyzeRelevance(kind, promptText, userText, v) {
    v = v || {};
    var userTokens = new Set(extractContentTokens(userText));
    var promptTokens = extractContentTokens(promptText + ' ' + (v.keywords || []).join(' ') + ' ' + (kind === 'w1' ? (v.dataText || '') : ''));
    var kw = extractContentTokens((v.keywords || []).join(' '));
    // ключевые слова варианта весят больше, чем общая лексика формулировки
    var matched = promptTokens.filter(function (t) { return userTokens.has(t); });
    var need = Math.max(4, Math.min(promptTokens.length, 10));
    var kwMatched = kw.filter(function (t) { return userTokens.has(t); }).length;
    var tokCover = Math.min(1, matched.length / need);
    if (kw.length) tokCover = Math.min(1, 0.5 * tokCover + 0.5 * Math.min(1, kwMatched / Math.max(3, Math.min(kw.length, 8))));
    var dataNums = extractDataNumbers((v.dataText || '') + ' ' + promptText);
    var userNums = extractDataNumbers(userText);
    var numMatched = dataNums.filter(function (n) { return userNums.indexOf(n) >= 0; });
    var numCover = dataNums.length ? Math.min(1, numMatched.length / Math.min(dataNums.length, 6)) : 0;
    var pct;
    if (kind === 'w1' && dataNums.length >= 3) pct = Math.round(100 * (0.5 * tokCover + 0.5 * numCover));
    else pct = Math.round(100 * tokCover);
    var a = analyzeText(userText);
    var reason = '', mismatch = false;
    // Перекрёстная проверка: на какое из заданий (Task 1 / Task 2) текст похож больше?
    var crossPct = 0, crossNums = 0;
    if (v.cross) {
      var cTokens = extractContentTokens((v.cross.promptText || '') + ' ' + (v.cross.keywords || []).join(' ') + ' ' + (v.cross.dataText || ''));
      var cMatched = cTokens.filter(function (t) { return userTokens.has(t); }).length;
      var cCover = Math.min(1, cMatched / Math.max(4, Math.min(cTokens.length, 10)));
      var cNums = extractDataNumbers(v.cross.dataText || '');
      crossNums = cNums.filter(function (n) { return userNums.indexOf(n) >= 0; }).length;
      var cNumCover = cNums.length ? Math.min(1, crossNums / Math.min(cNums.length, 6)) : 0;
      crossPct = Math.round(100 * (cNums.length >= 3 ? 0.5 * cCover + 0.5 * cNumCover : cCover));
    }
    if (v.cross && crossPct >= 40 && crossPct >= pct + 25 && (a.opinion === 0 || kind === 'w1')) {
      mismatch = true;
      reason = kind === 'w2'
        ? 'Текст по содержанию и формату соответствует Task 1 (данные и ключевые слова диаграммы совпали на ' + crossPct + '%, с темой Task 2 — лишь на ' + pct + '%), а здесь нужно эссе Task 2 с позицией и аргументацией.'
        : 'Текст по содержанию соответствует Task 2 (тема эссе совпала на ' + crossPct + '%, с данными этой диаграммы — лишь на ' + pct + '%): похоже, вы вставили эссе вместо аналитического отчёта Task 1.';
    } else if (kind === 'w2' && numMatched.length >= 3 && a.opinion === 0 && a.overview) {
      mismatch = true;
      reason = 'Текст похож на аналитический отчёт Task 1 (цифры из графика/таблицы: ' + numMatched.slice(0, 5).join(', ') + ', обзор данных, нет собственной позиции), а здесь нужно эссе Task 2 с аргументацией.';
    } else if (kind === 'w1' && a.opinion >= 2 && numMatched.length < 2) {
      mismatch = true;
      reason = 'Текст похож на эссе с личным мнением (маркеры позиции: ' + a.opinion + '), а в Task 1 нужно нейтрально описать данные: цифры, тенденции, сравнения, без «I think / in my opinion».';
    } else if (pct < RELEVANCE_MIN) {
      mismatch = true;
      reason = kind === 'w1'
        ? 'В ответе почти нет данных и ключевых слов этого задания (совпало чисел: ' + numMatched.length + ' из ' + dataNums.length + ', ключевых понятий: ' + matched.length + '). Похоже, текст написан не по этой диаграмме.'
        : 'Ответ почти не пересекается с темой вопроса (общих ключевых понятий: ' + matched.length + ' из ' + promptTokens.length + '). Экзаменатор оценил бы такой текст как не по теме.';
    }
    if (mismatch && pct >= RELEVANCE_MIN) pct = Math.min(pct, RELEVANCE_MIN - 1);
    var missing = promptTokens.filter(function (t) { return !userTokens.has(t); }).length;
    return { pct: clamp(pct, 0, 100), mismatch: mismatch, reason: reason, matched: matched.length, total: promptTokens.length, numMatched: numMatched.length, numTotal: dataNums.length, missing: missing, analysis: a };
  }

  /* ---------- локальный аудитор ---------- */
  function localEvaluate(kind, promptText, userText, minWords, v, rel) {
    var a = rel.analysis, n = a.words;
    var short = n < minWords ? (minWords - n) / minWords : 0;
    var res = { criteria: [], strengths: [], fixes: [] };
    var ta, cc, lr, gra;

    if (kind === 'sp') {
      var fc = 4.5 + clamp(n / Math.max(1, minWords), 0, 1.4) * 1.5 + clamp(a.linkers.length, 0, 4) * 0.35 - clamp(a.fillers - 3, 0, 5) * 0.25 + (a.sentences >= 4 ? 0.5 : 0);
      lr = 4.5 + clamp((a.ttr - 0.42) / 0.25, 0, 1) * 1.5 + clamp(a.acad.length, 0, 5) * 0.3 + clamp(a.longRatio * 8, 0, 1) - clamp(a.b1.length - 3, 0, 4) * 0.25;
      gra = 4.8 + clamp(a.complex, 0, 10) * 0.25 + clamp(a.cond + a.passive, 0, 3) * 0.3 - clamp(a.errs.length, 0, 4) * 0.5;
      var pr = (v && typeof v.confidence === 'number') ? 5 + clamp((v.confidence - 0.6) / 0.35, 0, 1) * 3 : round05((fc + lr) / 2) - 0.5;
      fc = round05(clamp(fc - short * 2.5, 3, 8.5)); lr = round05(clamp(lr - short, 3, 8.5)); gra = round05(clamp(gra - short, 3, 8.5)); pr = round05(clamp(pr, 3, 8.5));
      res.criteria = [
        { key: 'FC', label: 'Fluency & Coherence', band: fc, note: 'Объём ' + n + ' сл. (цель ≥ ' + minWords + '), связок: ' + a.linkers.length + ', слов-паразитов: ' + a.fillers },
        { key: 'LR', label: 'Lexical Resource', band: lr, note: 'Академических слов: ' + a.acad.length + ', слов уровня B1 для замены: ' + a.b1.length },
        { key: 'GRA', label: 'Grammatical Range & Accuracy', band: gra, note: 'Сложных конструкций: ' + a.complex + ', условных/пассивных: ' + (a.cond + a.passive) },
        { key: 'P', label: 'Pronunciation', band: pr, note: (v && typeof v.confidence === 'number') ? 'Оценка по уверенности распознавания речи: ' + Math.round(v.confidence * 100) + '%' : 'По тексту произношение не оценить — это ориентир по остальным критериям. Для точной оценки запишите речь микрофоном.' }
      ];
      if (n >= minWords) res.strengths.push('Достаточный объём ответа: ' + n + ' слов.');
      if (a.linkers.length >= 3) res.strengths.push('Есть связки (' + a.linkers.slice(0, 4).join(', ') + ') — речь звучит организованно.');
      if (a.complex >= 4) res.strengths.push('Использованы сложноподчинённые конструкции.');
      if (a.acad.length >= 2) res.strengths.push('Встречается академическая лексика: ' + a.acad.slice(0, 4).join(', ') + '.');
      if (n < minWords) res.fixes.push('Ответ короткий: для этой части нужно хотя бы ' + minWords + ' слов. Расширяйте по схеме «позиция → причина → пример → последствие».');
      if (a.fillers > 3) res.fixes.push('Слов-паразитов: ' + a.fillers + ' (um, you know, like…). Замените паузой или связкой: «Well, to be precise…», «What I mean is…».');
      if (a.complex < 3) res.fixes.push('Добавьте сложные предложения: «Although…», «…which means that…», «If I had the chance, I would…».');
    } else {
      // Writing
      var isW1 = kind === 'w1';
      ta = 4.5;
      ta += clamp(rel.pct / 100, 0, 1) * 1.5;
      if (isW1) { ta += a.overview ? 1 : -0.5; ta += clamp(rel.numCover === undefined ? rel.numMatched / Math.max(1, Math.min(rel.numTotal, 6)) : rel.numCover, 0, 1) * 1; ta -= a.opinion > 0 ? 0.5 : 0; }
      else { ta += a.opinion > 0 ? 0.5 : -0.25; ta += a.examples > 0 ? 0.5 : 0; ta += a.paragraphs >= 4 ? 0.5 : 0; ta += a.hedges >= 2 ? 0.25 : 0; }
      ta -= short * 3;
      cc = 4.5 + clamp(a.paragraphs, 1, 4) * 0.35 + clamp(a.linkers.length, 0, 6) * 0.3 - (a.mech > 3 ? 0.5 : 0) + (a.avgSent >= 14 && a.avgSent <= 30 ? 0.5 : 0) - short;
      lr = 4.5 + clamp((a.ttr - 0.42) / 0.23, 0, 1) * 1.5 + clamp(a.acad.length, 0, 10) * 0.25 + clamp(a.longRatio * 7, 0, 1) - clamp(a.b1.length - 2, 0, 5) * 0.25 - short;
      gra = 4.8 + clamp(a.complex / Math.max(1, a.sentences), 0, 1.6) * 1.5 + clamp(a.cond + a.passive, 0, 4) * 0.3 + clamp(a.hedges, 0, 4) * 0.1 - clamp(a.errs.length, 0, 5) * 0.45 - (a.contractions > 2 ? 0.25 : 0) - short;
      ta = round05(clamp(ta, 3, 8.5)); cc = round05(clamp(cc, 3, 8.5)); lr = round05(clamp(lr, 3, 8.5)); gra = round05(clamp(gra, 3, 8.5));
      res.criteria = [
        { key: isW1 ? 'TA' : 'TR', label: isW1 ? 'Task Achievement' : 'Task Response', band: ta, note: 'Соответствие заданию: ' + rel.pct + '%' + (isW1 ? ', обзор (overview): ' + (a.overview ? 'есть' : 'нет') + ', цифр из данных: ' + rel.numMatched + '/' + rel.numTotal : ', позиция: ' + (a.opinion ? 'выражена' : 'не выражена явно') + ', примеров: ' + a.examples) },
        { key: 'CC', label: 'Coherence & Cohesion', band: cc, note: 'Абзацев: ' + a.paragraphs + ', разных связок: ' + a.linkers.length + ', средняя длина предложения: ' + a.avgSent.toFixed(1) },
        { key: 'LR', label: 'Lexical Resource', band: lr, note: 'Академических слов: ' + a.acad.length + ', слов B1 для замены: ' + a.b1.length },
        { key: 'GRA', label: 'Grammatical Range & Accuracy', band: gra, note: 'Сложных конструкций: ' + a.complex + ', условных/пассивных: ' + (a.cond + a.passive) + (a.errs.length ? ', замечено ошибок: ' + a.errs.length : '') }
      ];
      if (n >= minWords) res.strengths.push('Объём соблюдён: ' + n + ' слов (минимум ' + minWords + ').');
      if (isW1 && a.overview) res.strengths.push('Есть обзор (overview) — ключевое требование Task 1.');
      if (isW1 && rel.numMatched >= 4) res.strengths.push('Использованы конкретные данные из задания (' + rel.numMatched + ' значений).');
      if (!isW1 && a.opinion > 0) res.strengths.push('Позиция автора выражена явно.');
      if (!isW1 && a.examples > 0) res.strengths.push('Тезисы подкреплены примерами.');
      if (a.linkers.length >= 4) res.strengths.push('Разнообразные средства связи: ' + a.linkers.slice(0, 5).join(', ') + '.');
      if (a.acad.length >= 3) res.strengths.push('Академическая лексика: ' + a.acad.slice(0, 5).join(', ') + '.');
      if (a.complex / Math.max(1, a.sentences) > 0.6) res.strengths.push('Хорошая доля сложных предложений.');
      if (n < minWords) res.fixes.push('Недобор слов: ' + n + ' из ' + minWords + '. Недобор напрямую снижает Task Achievement/Response.');
      if (isW1 && !a.overview) res.fixes.push('Добавьте Overview: 2 предложения о главных тенденциях/различиях без цифр («Overall, … whereas …»). Без него Task Achievement не выше 5.0.');
      if (isW1 && rel.numMatched < 4) res.fixes.push('Приведите больше точных данных из диаграммы и сравните, а не перечисляйте их.');
      if (!isW1 && !a.opinion) res.fixes.push('Заявите позицию явно во введении и повторите в заключении: «This essay argues that…».');
      if (!isW1 && !a.examples) res.fixes.push('Добавьте конкретный пример или факт к каждому основному абзацу (шаг «Grounds» в модели Тулмина).');
      if (a.mech > 3) res.fixes.push('Механические связки (Firstly / Secondly / Finally) лучше заменить смысловым связыванием: повторите ключевую идею предыдущего предложения и развейте её.');
      if (a.paragraphs < 4 && !isW1) res.fixes.push('Структура: введение, 2 основных абзаца, заключение — сейчас абзацев меньше четырёх.');
      if (a.hedges < 1 && !isW1) res.fixes.push('Добавьте эпистемическое хеджирование: «tends to», «may», «arguably», «in most cases» — это признак академического стиля.');
    }
    if (a.errs.length) res.fixes.push('Замеченные ошибки: ' + a.errs.join('; ') + '.');
    if (a.b1.length) res.fixes.push('Замените слова уровня B1 на C1: ' + a.b1.slice(0, 6).map(function (b) { return b.word + ' → ' + b.alts[0] + '/' + (b.alts[1] || b.alts[0]); }).join(', ') + '.');
    if (!res.strengths.length) res.strengths.push('Работа сдана — это уже шаг вперёд. Начните с пунктов ниже, они дадут самый быстрый прирост.');
    return res;
  }

  function overallBand(criteria) {
    var s = 0; criteria.forEach(function (c) { s += c.band; });
    return round05(s / criteria.length);
  }

  // Band 8.5+ рерайт первых предложений: замены B1→C1 и усиление вводных формул
  function c1Rewrite(userText) {
    var sentences = String(userText || '').trim().split(/(?<=[.!?])\s+/).slice(0, 2);
    if (!sentences.length || !sentences[0]) return null;
    var changed = 0;
    function rewrite(s) {
      var out = s;
      var phrases = [
        [/\bI think\b/g, 'It is arguable that'], [/\bIn my opinion,?/g, 'From my perspective,'], [/\bNowadays\b/g, 'In contemporary society'], [/\bnowadays\b/g, 'in contemporary society'],
        [/\ba lot of\b/gi, 'a substantial number of'], [/\blots of\b/gi, 'numerous']
      ];
      phrases.forEach(function (p) { out = out.replace(p[0], function (m) { changed++; return '\u0001' + p[1] + '\u0002'; }); });
      out = out.replace(/\b([A-Za-z]+)\b/g, function (m) {
        var key = m.toLowerCase();
        if (B1_REWRITE_SIMPLE[key]) {
          changed++;
          var rep = B1_REWRITE_SIMPLE[key];
          if (m[0] === m[0].toUpperCase()) rep = rep.charAt(0).toUpperCase() + rep.slice(1);
          return '\u0001' + rep + '\u0002';
        }
        return m;
      });
      return out;
    }
    var rewritten = sentences.map(rewrite).join(' ');
    var html = esc(rewritten).replace(/\u0001/g, '<mark class="bg-emerald-100 px-0.5 rounded">').replace(/\u0002/g, '</mark>');
    return { original: sentences.join(' '), html: html, changed: changed };
  }

  /* ---------- облачные модели ---------- */
  function cloudPrompt(kind, taskTitle, promptText, userText, minWords) {
    var criteria = kind === 'sp' ? 'FC (Fluency & Coherence), LR (Lexical Resource), GRA (Grammatical Range & Accuracy), P (Pronunciation: estimate from text only)'
      : (kind === 'w1' ? 'TA (Task Achievement), CC, LR, GRA' : 'TR (Task Response), CC, LR, GRA');
    return 'You are a strict, certified IELTS Academic examiner. Assess the candidate answer on the 4 official criteria: ' + criteria + '. ' +
      'Use whole and half bands from 0 to 9. Be realistic, not generous. If the answer does not address the task or is the wrong task type, give the first criterion max Band 4. ' +
      'Reply with ONLY a JSON object, no markdown: {"scores":[n,n,n,n],"strengths":["..."],"improvements":["..."]}. ' +
      'Scores array order must follow the criteria order above. Write strengths and improvements in Russian (2-5 items each, concrete, quote candidate phrases).\n\n' +
      'TASK: ' + taskTitle + '\n' + promptText + '\nMinimum words: ' + minWords + '\n\nCANDIDATE ANSWER:\n' + userText;
  }
  function parseCloudJson(text) {
    var m = String(text || '').match(/\{[\s\S]*\}/);
    if (!m) throw new Error('no json');
    var o = JSON.parse(m[0]);
    if (!o.scores || o.scores.length < 4) throw new Error('bad json');
    return o;
  }
  function withTimeout(promise, ms) {
    return new Promise(function (resolve, reject) {
      var t = setTimeout(function () { reject(new Error('timeout')); }, ms);
      promise.then(function (v) { clearTimeout(t); resolve(v); }, function (e) { clearTimeout(t); reject(e); });
    });
  }
  async function callFree(prompt) {
    // 1) встроенный ИИ браузера (Chrome Prompt API), если есть
    try {
      var LM = window.LanguageModel || (window.ai && window.ai.languageModel);
      if (LM && LM.create) {
        var av = LM.availability ? await LM.availability() : 'available';
        if (av === 'available' || av === 'readily') {
          var sess = await LM.create();
          var out = await withTimeout(sess.prompt(prompt), 40000);
          if (sess.destroy) sess.destroy();
          return out;
        }
      }
    } catch (e) { /* идём дальше */ }
    // 2) pollinations.ai без ключа
    var r = await withTimeout(fetch('https://text.pollinations.ai/openai', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'openai', messages: [{ role: 'user', content: prompt }], temperature: 0.2 })
    }), 30000);
    if (!r.ok) throw new Error('http ' + r.status);
    var j = await r.json();
    return j.choices[0].message.content;
  }
  async function callGemini(prompt, key) {
    var r = await withTimeout(fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent', {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { temperature: 0.2, responseMimeType: 'application/json' } })
    }), 40000);
    if (!r.ok) throw new Error('Gemini HTTP ' + r.status);
    var j = await r.json();
    return j.candidates[0].content.parts[0].text;
  }
  async function callOpenAI(prompt, key) {
    var r = await withTimeout(fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
      body: JSON.stringify({ model: 'gpt-4o-mini', temperature: 0.2, response_format: { type: 'json_object' }, messages: [{ role: 'user', content: prompt }] })
    }), 40000);
    if (!r.ok) throw new Error('OpenAI HTTP ' + r.status);
    var j = await r.json();
    return j.choices[0].message.content;
  }

  /* ---------- главная функция ---------- */
  // mode: 'auto' (из настроек) | 'local' | 'free' | 'gemini' | 'openai'
  // variantObj: { kind: 'w1'|'w2'|'sp', keywords: [...], dataText: '...', confidence?: 0..1 }
  async function evaluateWithAI(mode, taskTitle, promptText, userText, minWords, variantObj) {
    var v = variantObj || {};
    var kind = v.kind || 'w2';
    var st = readSettings();
    if (!mode || mode === 'auto') mode = st.mode || 'local';
    var rel = analyzeRelevance(kind, promptText, userText, v);
    var local = localEvaluate(kind, promptText, userText, minWords, v, rel);
    var result = {
      kind: kind, taskTitle: taskTitle, mode: 'local', source: 'Локальный аналитический аудитор (C1)',
      relevancePct: rel.pct, critical: rel.mismatch, criticalReason: rel.reason,
      words: rel.analysis.words, minWords: minWords, criteria: local.criteria, strengths: local.strengths, fixes: local.fixes,
      b1: rel.analysis.b1, rewrite: c1Rewrite(userText), note: ''
    };
    if (rel.analysis.words < 5) {
      result.criteria.forEach(function (c) { c.band = 0; });
      result.critical = true; result.criticalReason = 'Ответ пуст или слишком короткий для оценки.';
    } else if (mode !== 'local' && !rel.mismatch) {
      try {
        var prompt = cloudPrompt(kind, taskTitle, promptText + (v.dataText ? '\nDATA: ' + v.dataText : ''), userText, minWords);
        var raw;
        if (mode === 'free') raw = await callFree(prompt);
        else if (mode === 'gemini') { if (!st.geminiKey) throw new Error('нет ключа Gemini'); raw = await callGemini(prompt, st.geminiKey); }
        else if (mode === 'openai') { if (!st.openaiKey) throw new Error('нет ключа OpenAI'); raw = await callOpenAI(prompt, st.openaiKey); }
        var o = parseCloudJson(raw);
        var tn = typeof o.scores[0] === 'object' ? o.scores.map(function (x) { return x.band || x.score; }) : o.scores;
        result.criteria.forEach(function (c, i) {
          var b = parseFloat(tn[i]);
          if (!isNaN(b)) { c.note = 'Оценка модели; локальная проверка: ' + c.band.toFixed(1); c.band = round05(clamp(b, 0, 9)); }
        });
        if (o.strengths && o.strengths.length) result.strengths = o.strengths.map(String).slice(0, 6);
        if (o.improvements && o.improvements.length) result.fixes = o.improvements.map(String).slice(0, 7).concat(local.fixes.filter(function (f) { return /^Замените слова уровня B1/.test(f); }));
        result.mode = mode;
        result.source = { free: 'Бесплатный облачный ИИ', gemini: 'Google Gemini 2.5 Flash', openai: 'OpenAI gpt-4o-mini' }[mode] + ' + проверка соответствия заданию';
      } catch (err) {
        result.note = 'Облачный ИИ недоступен (' + (err && err.message ? err.message : 'ошибка') + '). Показан результат локального аудитора.';
      }
    }
    // Жёсткие правила Cambridge: не по теме / не тот формат
    if (result.critical && rel.analysis.words >= 5) {
      result.criteria[0].band = Math.min(result.criteria[0].band, 4);
      result.criteria[0].note = 'Ограничено до Band 4.0: ответ не соответствует заданию';
    }
    result.overall = overallBand(result.criteria);
    if (result.critical && rel.analysis.words >= 5) result.overall = Math.min(result.overall, 4.5);
    result.overall = clamp(result.overall, 0, 9);
    result.at = Date.now();
    return result;
  }

  /* ---------- карточка оценки ---------- */
  function bandColor(b) { return b >= 7 ? 'text-emerald-600' : b >= 5.5 ? 'text-indigo-600' : 'text-rose-600'; }
  function renderAiEvaluationCard(r) {
    var h = '<div class="mt-4 border border-slate-200 rounded-2xl bg-white overflow-hidden">';
    if (r.critical) {
      h += '<div class="bg-rose-600 text-white p-4"><p class="font-bold text-sm">🚨 КРИТИЧЕСКАЯ ОШИБКА: Несоответствие теме или формату задания (Off-Topic / Wrong Task)!</p>' +
        '<p class="text-xs mt-1 text-rose-50 leading-relaxed">' + esc(r.criticalReason) + ' Согласно правилам Cambridge IELTS, Task Achievement/Response ограничен Band 4.0, общий балл — не выше 4.5.</p></div>';
    }
    h += '<div class="p-4 space-y-4">';
    h += '<div class="flex flex-wrap items-center gap-4"><div><div class="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Overall Band</div><div class="text-4xl font-extrabold ' + bandColor(r.overall) + '">' + r.overall.toFixed(1) + '</div></div>' +
      '<div class="flex-1 min-w-[200px]"><div class="text-xs font-semibold text-slate-600">🎯 Соответствие заданию: ' + r.relevancePct + '%</div>' +
      '<div class="h-2 bg-slate-100 rounded-full mt-1.5 overflow-hidden"><div class="h-2 rounded-full ' + (r.relevancePct < RELEVANCE_MIN ? 'bg-rose-500' : r.relevancePct < 50 ? 'bg-amber-500' : 'bg-emerald-500') + '" style="width:' + clamp(r.relevancePct, 2, 100) + '%"></div></div>' +
      '<div class="text-[11px] text-slate-400 mt-1">Слов: ' + r.words + ' (минимум ' + r.minWords + ') · ' + esc(r.source) + '</div></div></div>';
    if (r.note) h += '<p class="text-xs bg-amber-50 border border-amber-200 text-amber-800 rounded-xl p-2.5">' + esc(r.note) + '</p>';
    h += '<div class="grid sm:grid-cols-2 gap-2">';
    r.criteria.forEach(function (c) {
      h += '<div class="border border-slate-200 rounded-xl p-3"><div class="flex items-baseline justify-between gap-2"><span class="text-xs font-bold text-slate-700">' + esc(c.key) + ' · ' + esc(c.label) + '</span><span class="font-extrabold ' + bandColor(c.band) + '">' + c.band.toFixed(1) + '</span></div><p class="text-[11px] text-slate-500 mt-1 leading-snug">' + esc(c.note) + '</p></div>';
    });
    h += '</div>';
    if (r.strengths.length) h += '<div><div class="text-xs font-bold text-emerald-700 mb-1">✅ Сильные стороны</div><ul class="list-disc pl-5 text-sm text-slate-700 space-y-1">' + r.strengths.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul></div>';
    if (r.fixes.length) h += '<div><div class="text-xs font-bold text-indigo-700 mb-1">🎯 Что исправить для Band 8.0+</div><ul class="list-disc pl-5 text-sm text-slate-700 space-y-1">' + r.fixes.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul></div>';
    if (r.b1 && r.b1.length) h += '<div><div class="text-xs font-bold text-slate-700 mb-1">🔁 Слова B1 → C1</div><div class="flex flex-wrap gap-1.5">' + r.b1.slice(0, 10).map(function (b) { return '<span class="text-xs bg-slate-100 rounded-lg px-2 py-1"><b>' + esc(b.word) + '</b> ×' + b.count + ' → ' + esc(b.alts.join(' / ')) + '</span>'; }).join('') + '</div></div>';
    if (r.rewrite && r.rewrite.changed) h += '<div><div class="text-xs font-bold text-slate-700 mb-1">✍️ Band 8.5+ рерайт начала вашего ответа</div><p class="text-sm text-slate-600 line-through decoration-slate-300">' + esc(r.rewrite.original) + '</p><p class="text-sm text-slate-900 mt-1">' + r.rewrite.html + '</p><p class="text-[11px] text-slate-400 mt-1">Автозамены лексики — проверьте, что смысл и грамматика сохранились.</p></div>';
    h += '<p class="text-[11px] text-slate-400">Тренировочная оценка, не официальный балл IELTS.</p></div></div>';
    return h;
  }

  IELTS.ai = { bindSettings: bindSettings, readSettings: readSettings, evaluateWithAI: evaluateWithAI, renderAiEvaluationCard: renderAiEvaluationCard, extractContentTokens: extractContentTokens, extractDataNumbers: extractDataNumbers, analyzeRelevance: analyzeRelevance, analyzeText: analyzeText };
  window.evaluateWithAI = evaluateWithAI;
  window.renderAiEvaluationCard = renderAiEvaluationCard;
  window.extractContentTokens = extractContentTokens;
  window.extractDataNumbers = extractDataNumbers;
})();
