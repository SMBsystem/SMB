// Озвучка (многоголосый диалог: Web Speech API / OpenAI Neural TTS) и распознавание речи.
(function () {
  'use strict';
  var IELTS = window.IELTS;
  var PAUSE_SENTENCE = 240, PAUSE_SPEAKER = 450;
  var token = 0;            // увеличивается при каждой остановке/новом запуске
  var curAudio = null;
  var recognizers = [];

  var FEMALE_HINT = /(aria|jenny|zira|samantha|sonia|libby|hazel|susan|catherine|karen|moira|tessa|serena|fiona|emma|olivia|natasha|female|woman|amy|salli|joanna|kimberly|ivy|kendra)/i;
  var MALE_HINT = /(guy|ryan|david|mark|daniel|alex|george|james|thomas|oliver|arthur|fred|rishi|male\b|man\b|brian|russell|matthew|joey|justin|eric|christopher|davis)/i;

  function voicesReady() {
    return new Promise(function (resolve) {
      if (!('speechSynthesis' in window)) return resolve([]);
      var v = speechSynthesis.getVoices();
      if (v.length) return resolve(v);
      var done = false;
      function fin() { if (done) return; done = true; resolve(speechSynthesis.getVoices()); }
      speechSynthesis.addEventListener('voiceschanged', fin, { once: true });
      setTimeout(fin, 1200);
    });
  }
  function scoreVoice(v) {
    var s = 0, n = v.name || '';
    if (/natural|neural|online/i.test(n)) s += 20;
    if (/google/i.test(n)) s += 6;
    if (/en-GB/i.test(v.lang)) s += 4; else if (/en-US/i.test(v.lang)) s += 3; else if (/en-AU|en-CA|en-IE/i.test(v.lang)) s += 2;
    if (v.localService) s += 1;
    return s;
  }
  function genderOf(v) {
    if (FEMALE_HINT.test(v.name)) return 'f';
    if (MALE_HINT.test(v.name)) return 'm';
    return '?';
  }
  // Назначает каждому спикеру свой голос с учётом пола.
  function assignVoices(speakers, genders, voices) {
    var en = voices.filter(function (v) { return /^en[-_]/i.test(v.lang); }).sort(function (a, b) { return scoreVoice(b) - scoreVoice(a); });
    var used = {}, map = {};
    speakers.forEach(function (sp, idx) {
      var g = (genders && genders[sp]) || (idx % 2 ? 'f' : 'm');
      var pick = en.filter(function (v) { return !used[v.name] && genderOf(v) === g; })[0] ||
        en.filter(function (v) { return !used[v.name] && genderOf(v) === '?'; })[0] ||
        en.filter(function (v) { return !used[v.name]; })[0] || en[0] || null;
      if (pick) used[pick.name] = 1;
      var shared = pick && Object.keys(map).some(function (k) { return map[k].voice === pick; });
      map[sp] = { voice: pick, gender: g, pitch: shared ? (g === 'f' ? 1.12 : 0.88) : (g === 'f' ? 1.05 : 0.95), rate: 0.97 };
    });
    return map;
  }

  /* ---------- разбор скрипта ---------- */
  // «Speaker: text». Строки без метки дописываются к предыдущей реплике. Имя спикера вслух не читается.
  function parseScript(script) {
    var lines = [], last = null;
    String(script || '').split(/\r?\n/).forEach(function (raw) {
      var line = raw.trim();
      if (!line) return;
      var m = line.match(/^([A-Z][A-Za-z.\- ]{0,28}):\s*(.+)$/);
      if (m) { last = { speaker: m[1].trim(), text: m[2].trim() }; lines.push(last); }
      else if (last) last.text += ' ' + line;
      else { last = { speaker: 'Narrator', text: line }; lines.push(last); }
    });
    return lines;
  }
  function splitSentences(t) {
    var parts = String(t).replace(/\s+/g, ' ').match(/[^.!?]+[.!?]+["')\]]*|[^.!?]+$/g) || [t];
    var out = [];
    parts.forEach(function (p) {
      p = p.trim(); if (!p) return;
      if (out.length && (p.length < 12 || /^(Mr|Mrs|Ms|Dr|Prof|St)\.$/i.test(out[out.length - 1].split(' ').pop()))) out[out.length - 1] += ' ' + p; else out.push(p);
    });
    return out;
  }
  function sleep(ms, my) {
    return new Promise(function (res) { setTimeout(function () { res(my === token); }, ms); });
  }

  function speakSentence(text, cfg, my) {
    return new Promise(function (resolve) {
      var u = new SpeechSynthesisUtterance(text);
      if (cfg.voice) { u.voice = cfg.voice; u.lang = cfg.voice.lang; } else u.lang = 'en-GB';
      u.rate = cfg.rate * (cfg.speed || 1); u.pitch = cfg.pitch;
      var guard = setTimeout(function () { resolve(); }, 25000 + text.length * 90);
      u.onend = u.onerror = function () { clearTimeout(guard); resolve(); };
      if (my !== token) { clearTimeout(guard); return resolve(); }
      speechSynthesis.speak(u);
    });
  }

  async function openAiSpeak(text, voiceName, key, my) {
    var r = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
      body: JSON.stringify({ model: 'tts-1', voice: voiceName, input: text, response_format: 'mp3' })
    });
    if (!r.ok) throw new Error('TTS HTTP ' + r.status);
    var blob = await r.blob();
    if (my !== token) return;
    var url = URL.createObjectURL(blob);
    await new Promise(function (resolve) {
      var a = new Audio(url); curAudio = a;
      a.onended = a.onerror = function () { URL.revokeObjectURL(url); resolve(); };
      a.play().catch(function () { resolve(); });
    });
  }

  function stopAll() {
    token++;
    try { if ('speechSynthesis' in window) speechSynthesis.cancel(); } catch (e) {}
    if (curAudio) { try { curAudio.pause(); } catch (e) {} curAudio = null; }
    recognizers.forEach(function (r) { try { r.stop(); } catch (e) {} });
  }

  // opts: { genders: {Name:'f'|'m'}, onLine(idx), onEnd(completed), speed }
  async function playNaturalDialogue(script, opts) {
    opts = opts || {};
    stopAll();
    var my = token;
    var lines = parseScript(script);
    if (!lines.length) return false;
    var st = IELTS.ai.readSettings();
    var useOpenAI = st.mode === 'openai' && st.openaiKey;
    var speakers = [];
    lines.forEach(function (l) { if (speakers.indexOf(l.speaker) < 0) speakers.push(l.speaker); });
    var voiceMap = {};
    var oaiVoices = { f: ['nova', 'shimmer', 'fable'], m: ['onyx', 'echo', 'alloy'] };
    if (!useOpenAI) {
      if (!('speechSynthesis' in window)) { IELTS.toast('Этот браузер не поддерживает синтез речи.', true); return false; }
      voiceMap = assignVoices(speakers, opts.genders, await voicesReady());
      if (my !== token) return false;
    }
    var counters = { f: 0, m: 0 };
    var oaiMap = {};
    speakers.forEach(function (sp, i) {
      var g = (opts.genders && opts.genders[sp]) || (i % 2 ? 'f' : 'm');
      oaiMap[sp] = oaiVoices[g][counters[g]++ % 3];
    });
    var completed = true;
    for (var i = 0; i < lines.length; i++) {
      if (my !== token) { completed = false; break; }
      var line = lines[i];
      if (opts.onLine) opts.onLine(i);
      if (useOpenAI) {
        try { await openAiSpeak(line.text, oaiMap[line.speaker], st.openaiKey, my); }
        catch (e) { IELTS.toast('OpenAI TTS недоступен — переключаюсь на голоса браузера.', true); useOpenAI = false; voiceMap = assignVoices(speakers, opts.genders, await voicesReady()); i--; continue; }
      } else {
        var cfg = Object.assign({ speed: opts.speed }, voiceMap[line.speaker] || { rate: 0.97, pitch: 1 });
        var sents = splitSentences(line.text);
        for (var s = 0; s < sents.length; s++) {
          if (my !== token) break;
          await speakSentence(sents[s], cfg, my);
          if (s < sents.length - 1 && !(await sleep(PAUSE_SENTENCE, my))) break;
        }
      }
      if (my !== token) { completed = false; break; }
      if (i < lines.length - 1) {
        var nextSame = lines[i + 1].speaker === line.speaker;
        if (!(await sleep(nextSame ? PAUSE_SENTENCE : PAUSE_SPEAKER, my))) { completed = false; break; }
      }
    }
    if (my === token && opts.onEnd) opts.onEnd(completed);
    return completed;
  }

  /* ---------- распознавание речи ---------- */
  function createRecognizer(cb) {
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return null;
    var rec = new SR();
    rec.lang = 'en-GB'; rec.continuous = true; rec.interimResults = true; rec.maxAlternatives = 1;
    var active = false, finalText = '', confSum = 0, confN = 0;
    rec.onresult = function (e) {
      var interim = '';
      for (var i = e.resultIndex; i < e.results.length; i++) {
        var res = e.results[i];
        if (res.isFinal) {
          finalText += (finalText ? ' ' : '') + res[0].transcript.trim();
          if (typeof res[0].confidence === 'number' && res[0].confidence > 0) { confSum += res[0].confidence; confN++; }
        } else interim += res[0].transcript;
      }
      cb.onText && cb.onText(finalText, interim, confN ? confSum / confN : null);
    };
    rec.onerror = function (e) {
      if (e.error === 'not-allowed' || e.error === 'service-not-allowed') { active = false; cb.onError && cb.onError('Нет доступа к микрофону. Разрешите его в настройках браузера.'); }
      else if (e.error === 'network') { active = false; cb.onError && cb.onError('Нет связи с сервисом распознавания речи.'); }
    };
    rec.onend = function () {
      if (active) { try { rec.start(); return; } catch (e) {} }
      cb.onState && cb.onState(false);
    };
    var ctrl = {
      start: function (seed) {
        finalText = seed || ''; confSum = 0; confN = 0; active = true;
        try { rec.start(); cb.onState && cb.onState(true); } catch (e) { active = false; cb.onError && cb.onError('Не удалось запустить запись.'); }
      },
      stop: function () { active = false; try { rec.stop(); } catch (e) {} cb.onState && cb.onState(false); },
      isActive: function () { return active; }
    };
    recognizers.push(ctrl);
    return ctrl;
  }

  IELTS.audio = { playNaturalDialogue: playNaturalDialogue, parseScript: parseScript, createRecognizer: createRecognizer, assignVoices: assignVoices, splitSentences: splitSentences };
  IELTS.stopAll = stopAll;
  window.playNaturalDialogue = playNaturalDialogue;
})();
