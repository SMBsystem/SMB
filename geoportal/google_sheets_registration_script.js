/**
 * SMB Portal — серверная часть на Google Apps Script (версия 2)
 * ==============================================================
 * Что делает:
 *   • принимает вход ученика в курс: ФИО, почта, класс, код курса;
 *   • проверяет код на сервере (коды лежат в «Свойствах скрипта», не на сайте);
 *   • пишет каждого ученика в лист «Регистрации» (одна строка = ученик + курс);
 *   • колонка «Допуск»: «✅ Есть допуск» / «⛔ Нет допуска» — переключаете вы в таблице;
 *   • присылает вам письмо о каждой новой регистрации;
 *   • записывает результаты экзаменов (GeoQuest и др.) в лист «Результаты».
 *
 * Установка — см. раздел «Сервер» в geoportal/README.md.
 */

var CONFIG = {
  ADMIN_EMAIL: "showanchik@gmail.com",
  TIMEZONE: "Asia/Almaty",
  SHEET_STUDENTS: "Регистрации",
  HEADERS: ["ID", "ФИО", "Email", "Курс", "Код", "Язык", "Класс", "Дата", "Допуск", "Последний вход"],
  COL_ACCESS: 9,                 // колонка I — «Допуск»
  COL_LAST_SEEN: 10,             // колонка J — «Последний вход»
  ACCESS_OK: "✅ Есть допуск",
  ACCESS_BLOCKED: "⛔ Нет допуска",
  COURSE_IDS: ["geotanu", "geonish", "ielts", "pravo", "english", "ent", "biotanu", "tarihtanu", "worldtanu", "readtanu", "mattanu", "infotanu", "fiztanu", "chemtanu"],
  MAX_LEN: 120,
  FAILS_LIMIT: 10,               // неверных кодов с одного email за окно ниже
  FAIL_WINDOW_SEC: 3600,
  MAX_ROWS: 2000,                // до какой строки действуют правила колонки «Допуск»
  SHEET_RESULTS: "Результаты",
  RESULT_HEADERS: ["Дата", "ФИО", "Email", "Класс", "Курс", "Экзамен", "Попытка", "Балл", "Макс", "%",
                   "Найдено", "Ошибки", "Время (мин:сек)", "Язык", "Не нашёл", "Ошибочные клики", "По вопросам", "Оценка",
                   "ID попытки"],
  COL_RESULT_ID: 19,             // колонка S — «ID попытки» (защита от двойной записи при повторной отправке)
  MAX_LONG_LEN: 1500             // длинные поля результата (списки стран)
};

/* ===================== Точки входа ===================== */

function doGet() {
  return json_({ status: "success", message: "SMB API работает" });
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) return fail_("empty", "Пустой запрос");
    var req;
    try { req = JSON.parse(e.postData.contents); } catch (x) { return fail_("bad_json", "Неверный формат данных"); }

    switch (String(req.action || "")) {
      case "enter": return enter_(req);
      case "check": return check_(req);
      case "resolve": return resolve_(req);
      case "result": return result_(req);
      default:      return fail_("unknown_action", "Неизвестное действие");
    }
  } catch (err) {
    console.error(err);
    return fail_("server", "Ошибка сервера. Попробуйте позже.");
  }
}

/* ===================== Вход ученика ===================== */

// Ученик ввёл данные и код курса. Ответ: {status:'success', allowed:true} или {status:'error', code}.
function enter_(req) {
  var name   = clean_(req.name);
  var email  = clean_(req.email).toLowerCase();
  var course = clean_(req.course);
  var code   = clean_(req.code);
  var lang   = clean_(req.lang) === "ru" ? "ru" : "kz";
  var grade  = clean_(req.grade);

  if (name.length < 2) return fail_("bad_name", "Укажите имя");
  if (!isEmail_(email)) return fail_("bad_email", "Неверный email");
  if (CONFIG.COURSE_IDS.indexOf(course) < 0) return fail_("bad_course", "Неизвестный курс");

  var cache = CacheService.getScriptCache();
  var failKey = "fail_" + hash_(email);
  var fails = Number(cache.get(failKey) || 0);
  if (fails >= CONFIG.FAILS_LIMIT) return fail_("too_many", "Слишком много попыток. Попробуйте позже.");

  if (codeCourse_(code) !== course) {
    cache.put(failKey, String(fails + 1), CONFIG.FAIL_WINDOW_SEC);
    return fail_("bad_code", "Код курса неверный");
  }

  var isNew = false;
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var sheet = sheet_();
    var found = findRow_(sheet, email, course);
    var now = stamp_(new Date());
    if (found) {
      if (isBlocked_(found.status)) return fail_("blocked", "Доступ к курсу закрыт преподавателем");
      sheet.getRange(found.row, CONFIG.COL_LAST_SEEN).setValue(now);
    } else {
      sheet.appendRow([
        "STU_" + new Date().getTime().toString(36) + Math.floor(Math.random() * 1296).toString(36),
        safeCell_(name), safeCell_(email), course, safeCell_(code), lang, safeCell_(grade),
        now, CONFIG.ACCESS_OK, now
      ]);
      isNew = true;
    }
  } finally {
    lock.releaseLock();
  }

  cache.remove(failKey);
  if (isNew) notifyAdmin_(name, email, course, grade);
  return ok_({ allowed: true, course: course });
}

// Главная страница: ученик ввёл код — узнаём, к какому курсу он относится. Личных данных не нужно.
// Ответ: {status:'success', course:'geotanu'} или {status:'error', code:'bad_code'|'too_many'}.
function resolve_(req) {
  var cache = CacheService.getScriptCache();
  var device = clean_(req.device, 40) || "anon";
  var failKey = "rfail_" + hash_(device);
  var fails = Number(cache.get(failKey) || 0);
  if (fails >= CONFIG.FAILS_LIMIT) return fail_("too_many", "Слишком много попыток. Попробуйте позже.");

  var course = codeCourse_(clean_(req.code));
  if (!course || CONFIG.COURSE_IDS.indexOf(course) < 0) {
    cache.put(failKey, String(fails + 1), CONFIG.FAIL_WINDOW_SEC);
    return fail_("bad_code", "Код курса неверный");
  }
  return ok_({ course: course });
}

// Сайт при каждом открытии проверяет, не закрыли ли допуск. Ответ: {allowed: true/false}.
function check_(req) {
  var email  = clean_(req.email).toLowerCase();
  var course = clean_(req.course);
  if (!isEmail_(email) || CONFIG.COURSE_IDS.indexOf(course) < 0) return ok_({ allowed: false });
  var found = findRow_(sheet_(), email, course);
  return ok_({ allowed: !!found && !isBlocked_(found.status) });
}

/* ===================== Результаты экзаменов ===================== */

// Сайт присылает результат экзамена. ФИО и класс берём из листа «Регистрации».
// Если почты там нет (ученик записан под другой почтой), результат всё равно сохраняем —
// с ФИО из запроса и пометкой, чтобы работа не потерялась. Закрытый допуск — отказ.
function result_(req) {
  var email  = clean_(req.email).toLowerCase();
  var course = clean_(req.course);
  if (!isEmail_(email) || CONFIG.COURSE_IDS.indexOf(course) < 0) return fail_("bad_student", "Ученик не найден");

  var reg = sheet_();
  var found = findRow_(reg, email, course);
  if (found && isBlocked_(found.status)) return fail_("blocked", "Доступ к курсу закрыт преподавателем");
  var name, grade;
  if (found) {
    var row = reg.getRange(found.row, 1, 1, CONFIG.HEADERS.length).getValues()[0];
    name = String(row[1] || "");
    grade = String(row[6] || "");
  } else {
    name = (clean_(req.name) || "?") + " (⚠ нет в «Регистрациях»)";
    grade = clean_(req.grade);
  }
  var attemptId = clean_(req.finishedAt, 40);

  var quiz = clean_(req.quizTitle) || clean_(req.quiz);
  if (!quiz) return fail_("bad_quiz", "Не указан экзамен");
  var max = num_(req.max, 0, 1000);
  var score = Math.min(num_(req.score, 0, 1000), max);
  var seconds = num_(req.seconds, 0, 86400);
  // Апостроф — чтобы Таблица не прочитала «38:44» как 38 часов 44 минуты
  var time = "'" + Math.floor(seconds / 60) + ":" + ("0" + (seconds % 60)).slice(-2);
  var mark = num_(req.mark, 0, 5);

  var attempt;
  var lock = LockService.getScriptLock();
  lock.waitLock(30000); // весь класс сдаёт одновременно — ждём очереди дольше
  try {
    var sheet = resultsSheet_();
    attempt = 1;
    var values = sheet.getDataRange().getValues();
    // Пишем сразу под последней заполненной строкой в колонке A («Дата»), а не в конец листа:
    // если в листе протянуты формулы до 1000-й строки, appendRow уносил результаты вниз
    var lastFilled = 1;
    for (var r = values.length - 1; r >= 1; r--) {
      if (String(values[r][0]).trim()) { lastFilled = r + 1; break; }
    }
    for (var i = 1; i < values.length; i++) {
      if (String(values[i][2]).toLowerCase() !== email || String(values[i][5]) !== quiz) continue;
      // Та же попытка пришла второй раз (сайт не дождался ответа и отправил снова)
      if (attemptId && String(values[i][CONFIG.COL_RESULT_ID - 1]) === attemptId) {
        return ok_({ saved: true, attempt: values[i][6], duplicate: true });
      }
      attempt++;
    }
    var newRow = [
      stamp_(new Date()), safeCell_(name), safeCell_(email), safeCell_(grade), course, safeCell_(quiz), attempt,
      score, max, max ? Math.round(score / max * 100) : 0,
      num_(req.found, 0, 1000), num_(req.mistakes, 0, 10000), time,
      clean_(req.lang) === "ru" ? "ru" : "kz",
      safeCell_(clean_(req.missed, CONFIG.MAX_LONG_LEN)),
      safeCell_(clean_(req.wrong, CONFIG.MAX_LONG_LEN)),
      safeCell_(clean_(req.details, CONFIG.MAX_LONG_LEN)),
      mark || "",
      attemptId
    ];
    if (lastFilled + 1 > sheet.getMaxRows()) sheet.insertRowAfter(sheet.getMaxRows());
    sheet.getRange(lastFilled + 1, 1, 1, newRow.length).setValues([newRow]);
  } finally {
    lock.releaseLock();
  }
  return ok_({ saved: true, attempt: attempt });
}

// Свойство RESULTS_SPREADSHEET_ID (необязательно) — ID отдельной таблицы для результатов,
// из её адреса: docs.google.com/spreadsheets/d/<ID>/edit. Без него — лист в этой же таблице.
function resultsSheet_() {
  var id = PropertiesService.getScriptProperties().getProperty("RESULTS_SPREADSHEET_ID");
  var ss = id ? SpreadsheetApp.openById(String(id).trim()) : SpreadsheetApp.getActiveSpreadsheet();
  // Лист могли переименовать («Результаты 18 урока…») — берём первый, чьё имя начинается с «Результаты»
  var sheet = ss.getSheetByName(CONFIG.SHEET_RESULTS);
  if (!sheet) {
    var all = ss.getSheets();
    for (var s = 0; s < all.length && !sheet; s++) {
      if (all[s].getName().indexOf(CONFIG.SHEET_RESULTS) === 0) sheet = all[s];
    }
  }
  if (!sheet) sheet = ss.insertSheet(CONFIG.SHEET_RESULTS);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(CONFIG.RESULT_HEADERS);
    sheet.getRange(1, 1, 1, CONFIG.RESULT_HEADERS.length).setFontWeight("bold").setBackground("#cffafe");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/* ===================== Коды курсов ===================== */

// Свойство COURSE_CODES: {"КОД-ГЕОТАНУ":"geotanu","КОД-НИШ":"geonish"}
function codeCourse_(code) {
  var n = norm_(code);
  if (n.length < 4) return null;
  var raw = PropertiesService.getScriptProperties().getProperty("COURSE_CODES");
  if (!raw) return null;
  var map;
  try { map = JSON.parse(raw); } catch (e) { console.error("COURSE_CODES: неверный JSON"); return null; }
  for (var k in map) {
    if (norm_(k) === n) return map[k];
  }
  return null;
}

/* ===================== Лист «Регистрации» ===================== */

function sheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(CONFIG.SHEET_STUDENTS) || ss.insertSheet(CONFIG.SHEET_STUDENTS);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(CONFIG.HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Ищет строку «ученик + курс». Возвращает {row, status} или null.
function findRow_(sheet, email, course) {
  var values = sheet.getDataRange().getValues();
  for (var i = 1; i < values.length; i++) {
    if (String(values[i][2]).toLowerCase() === email && String(values[i][3]) === course) {
      return { row: i + 1, status: String(values[i][CONFIG.COL_ACCESS - 1] || "") };
    }
  }
  return null;
}

function isBlocked_(status) {
  return String(status).indexOf("⛔") !== -1;
}

// Запускается ОДИН РАЗ вручную (Выполнить → setupSheet): оформляет колонку «Допуск».
// Можно запускать повторно. Старым строкам без значения ставит «Есть допуск».
function setupSheet() {
  var sheet = sheet_();
  sheet.getRange(1, 1, 1, CONFIG.HEADERS.length).setValues([CONFIG.HEADERS])
       .setFontWeight("bold").setBackground("#d1fae5");
  sheet.setFrozenRows(1);

  var accessRange = sheet.getRange(2, CONFIG.COL_ACCESS, CONFIG.MAX_ROWS, 1);
  accessRange.setDataValidation(
    SpreadsheetApp.newDataValidation()
      .requireValueInList([CONFIG.ACCESS_OK, CONFIG.ACCESS_BLOCKED], true)
      .setAllowInvalid(false)
      .build()
  );

  var last = sheet.getLastRow();
  if (last > 1) {
    var cells = sheet.getRange(2, CONFIG.COL_ACCESS, last - 1, 1);
    var values = cells.getValues();
    var changed = false;
    for (var i = 0; i < values.length; i++) {
      if (!values[i][0]) { values[i][0] = CONFIG.ACCESS_OK; changed = true; }
    }
    if (changed) cells.setValues(values);
  }

  sheet.setConditionalFormatRules([
    SpreadsheetApp.newConditionalFormatRule().whenTextContains("⛔").setBackground("#fecaca").setRanges([accessRange]).build(),
    SpreadsheetApp.newConditionalFormatRule().whenTextContains("✅").setBackground("#d1fae5").setRanges([accessRange]).build()
  ]);
}

/* ===================== Письмо администратору ===================== */

function notifyAdmin_(name, email, course, grade) {
  var html = "<h3>Новый ученик — SMB Portal</h3><ul>" +
    "<li><b>ФИО:</b> " + escapeHtml_(name) + "</li>" +
    "<li><b>Email:</b> " + escapeHtml_(email) + "</li>" +
    "<li><b>Курс:</b> " + escapeHtml_(course) + "</li>" +
    "<li><b>Класс:</b> " + escapeHtml_(grade) + "</li>" +
    "<li><b>Дата:</b> " + stamp_(new Date()) + "</li></ul>" +
    "<p>Допуск можно закрыть в таблице: колонка «Допуск».</p>";
  try {
    MailApp.sendEmail({ to: CONFIG.ADMIN_EMAIL, subject: "Новый ученик: " + name.slice(0, 60), htmlBody: html });
  } catch (mailErr) {
    console.error(mailErr); // ученик уже записан, сбой почты его не теряет
  }
}

/* ===================== Помощники ===================== */

function isEmail_(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
}

function norm_(s) {
  return String(s || "").trim().toUpperCase().replace(/[\s\-_]/g, "");
}

function clean_(v, maxLen) {
  if (v === null || v === undefined) return "";
  return String(v).replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ")
    .trim().slice(0, maxLen || CONFIG.MAX_LEN);
}

// Целое число в пределах [min, max]; всё нечисловое → min.
function num_(v, min, max) {
  var n = Math.round(Number(v));
  if (!isFinite(n)) return min;
  return Math.max(min, Math.min(max, n));
}

// Строка, начинающаяся с = + - @, в таблице станет формулой — обезвреживаем.
function safeCell_(v) {
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}

function escapeHtml_(v) {
  return String(v || "—").replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function hash_(s) {
  return Utilities.base64EncodeWebSafe(
    Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, s, Utilities.Charset.UTF_8));
}

function stamp_(d) {
  return Utilities.formatDate(d, CONFIG.TIMEZONE, "dd.MM.yyyy HH:mm");
}

function ok_(extra) {
  var out = { status: "success" };
  for (var k in extra) out[k] = extra[k];
  return json_(out);
}

function fail_(code, message) {
  return json_({ status: "error", code: code, message: message });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
