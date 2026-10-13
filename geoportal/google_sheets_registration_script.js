/**
 * GeoTany & GeoNISH — серверная часть на Google Apps Script
 * ==========================================================
 * Что делает:
 *   • принимает регистрации учеников с главной страницы и пишет их в лист «Регистрации»;
 *   • проверяет коды курсов на сервере (коды больше не видны в коде сайта);
 *   • даёт админ-панели сайта список учеников и управление кодами —
 *     только после входа по паролю, который хранится здесь, а не на сайте;
 *   • присылает вам письмо о каждой новой регистрации.
 *
 * Установка (один раз, ~5 минут):
 *   1. Создайте Google Таблицу (например «GeoTany — ученики»).
 *   2. Расширения → Apps Script. Удалите всё в Code.gs, вставьте этот файл, сохраните.
 *   3. Слева «Настройки проекта» (шестерёнка) → «Свойства скрипта» → Добавить:
 *        ADMIN_PASSWORD = <новый длинный пароль, НЕ старый SMB...>
 *   4. Развернуть → Новое развёртывание → тип «Веб-приложение»:
 *        Выполнять как: Я;  У кого есть доступ: Все.
 *      Разрешите доступ, когда Google спросит.
 *   5. Скопируйте URL веб-приложения (…/exec) и вставьте его в index.html
 *      в строку  const API_URL = '';
 *   6. После любых правок этого кода: Развернуть → Управление развёртываниями →
 *      ✏️ → Версия «Новая» → Развернуть (URL останется тем же).
 *
 * Коды курсов меняются в DEFAULT_CODES ниже или в админ-панели сайта (лист «Коды»).
 */

var CONFIG = {
  ADMIN_EMAIL: "showanchik@gmail.com",
  TIMEZONE: "Asia/Almaty",
  SHEET_STUDENTS: "Регистрации",
  SHEET_CODES: "Коды",
  STUDENT_HEADERS: ["ID", "ФИО", "Email", "Курс", "Код", "Язык", "Класс", "Дата"],
  CODE_HEADERS: ["Код", "Курс", "Название", "Создан"],
  MAX_LEN: 120,
  REGISTER_COOLDOWN_SEC: 120,   // повторная регистрация с того же email не чаще
  ADMIN_TOKEN_TTL_SEC: 6 * 3600,
  ADMIN_MAX_FAILS: 8,           // после 8 неверных паролей вход блокируется
  ADMIN_LOCK_SEC: 15 * 60       // на 15 минут
};

// Курсы. targetUrl — куда отправлять ученика после входа.
var COURSES = {
  geotanu: {
    id: "geotanu", icon: "🌍", targetUrl: "geotanu/index.html",
    name_kz: "GeoTany: География ҰБТ/ЕНТ курсы",
    name_ru: "GeoTany: Курс географии ЕНТ"
  },
  geonish: {
    id: "geonish", icon: "🌟", targetUrl: "geonish/index.html",
    name_kz: "ГеоНИШ 6-сынып: Жаратылыстану & География (НЗМ)",
    name_ru: "ГеоНИШ 6 класс: Естествознание и география (НИШ)"
  }
};

// Базовые коды. Сравнение без учёта регистра, пробелов, «-» и «_».
// Совет: смените их на новые — старые уже были опубликованы в коде сайта.
var DEFAULT_CODES = {
  "GeoTanu19_57": "geotanu",
  "GeoNISH19_57": "geonish"
};

/* ===================== Точки входа ===================== */

function doGet() {
  return json_({ status: "success", message: "GeoTany API работает" });
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) return fail_("Пустой запрос");
    var req;
    try { req = JSON.parse(e.postData.contents); } catch (x) { return fail_("Неверный формат данных"); }

    switch (String(req.action || "register")) {
      case "register":           return register_(req);
      case "checkCode":          return checkCode_(req);
      case "adminLogin":         return adminLogin_(req);
      case "adminStudents":      return withAdmin_(req, adminStudents_);
      case "adminDeleteStudent": return withAdmin_(req, adminDeleteStudent_);
      case "adminCodes":         return withAdmin_(req, adminCodes_);
      case "adminAddCode":       return withAdmin_(req, adminAddCode_);
      case "adminDeleteCode":    return withAdmin_(req, adminDeleteCode_);
      case "adminLogout":        return adminLogout_(req);
      default:                   return fail_("Неизвестное действие");
    }
  } catch (err) {
    console.error(err);
    return fail_("Ошибка сервера. Попробуйте позже.");
  }
}

/* ===================== Ученики ===================== */

function checkCode_(req) {
  var course = findCourseByCode_(clean_(req.code));
  if (!course) return fail_("Код не найден");
  return ok_({ course: publicCourse_(course) });
}

function register_(req) {
  // Ловушка для ботов: поле website на сайте скрыто, человек его не заполняет.
  if (req.website) return ok_({});

  var f = {
    name:  clean_(req.name),
    email: clean_(req.email).toLowerCase(),
    code:  clean_(req.code),
    lang:  clean_(req.lang) === "ru" ? "ru" : "kz",
    grade: clean_(req.grade)
  };
  if (f.name.length < 2) return fail_("Укажите имя");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email)) return fail_("Неверный email");

  var course = findCourseByCode_(f.code);
  if (!course) return fail_("Код курса не найден");

  var cache = CacheService.getScriptCache();
  var key = "reg_" + hash_(f.email + "|" + course.id);
  if (cache.get(key)) return ok_({ course: publicCourse_(course), duplicate: true });

  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var sheet = sheet_(CONFIG.SHEET_STUDENTS, CONFIG.STUDENT_HEADERS);
    var now = new Date();
    sheet.appendRow([
      "STU_" + now.getTime().toString(36) + Math.floor(Math.random() * 1296).toString(36),
      safeCell_(f.name), safeCell_(f.email), course.id, safeCell_(f.code),
      f.lang, safeCell_(f.grade), stamp_(now)
    ]);
  } finally {
    lock.releaseLock();
  }
  cache.put(key, "1", CONFIG.REGISTER_COOLDOWN_SEC);

  notifyAdmin_(f, course);
  return ok_({ course: publicCourse_(course) });
}

/* ===================== Администратор ===================== */

function adminLogin_(req) {
  var cache = CacheService.getScriptCache();
  var fails = Number(cache.get("adm_fails") || 0);
  if (fails >= CONFIG.ADMIN_MAX_FAILS) return fail_("Слишком много попыток. Подождите 15 минут.");

  var real = PropertiesService.getScriptProperties().getProperty("ADMIN_PASSWORD");
  if (!real) return fail_("Пароль администратора не задан в свойствах скрипта");

  if (String(req.password || "") !== real) {
    cache.put("adm_fails", String(fails + 1), CONFIG.ADMIN_LOCK_SEC);
    Utilities.sleep(800);
    return fail_("Неверный пароль");
  }
  cache.remove("adm_fails");
  var token = Utilities.getUuid();
  cache.put("adm_" + token, "1", CONFIG.ADMIN_TOKEN_TTL_SEC);
  return ok_({ token: token, email: CONFIG.ADMIN_EMAIL });
}

function adminLogout_(req) {
  if (req.token) CacheService.getScriptCache().remove("adm_" + String(req.token));
  return ok_({});
}

function withAdmin_(req, fn) {
  var token = String(req.token || "");
  if (!token || !CacheService.getScriptCache().get("adm_" + token)) {
    return fail_("Сессия администратора истекла. Войдите снова.", "auth");
  }
  return fn(req);
}

function adminStudents_() {
  var sheet = sheet_(CONFIG.SHEET_STUDENTS, CONFIG.STUDENT_HEADERS);
  var values = sheet.getDataRange().getDisplayValues().slice(1);
  var students = values.filter(function (r) { return r[0]; }).map(function (r) {
    return { id: r[0], name: r[1], email: r[2], courseId: r[3], code: r[4],
             lang: r[5], grade: r[6], date: r[7] };
  }).reverse();
  return ok_({ students: students });
}

function adminDeleteStudent_(req) {
  var id = clean_(req.id);
  var sheet = sheet_(CONFIG.SHEET_STUDENTS, CONFIG.STUDENT_HEADERS);
  var ids = sheet.getRange(1, 1, Math.max(sheet.getLastRow(), 1), 1).getValues();
  for (var i = ids.length - 1; i >= 1; i--) {
    if (String(ids[i][0]) === id) { sheet.deleteRow(i + 1); return ok_({}); }
  }
  return fail_("Ученик не найден");
}

function adminCodes_() {
  var list = Object.keys(DEFAULT_CODES).map(function (code) {
    return { code: code, courseId: DEFAULT_CODES[code], name: COURSES[DEFAULT_CODES[code]].name_kz, base: true };
  });
  customCodes_().forEach(function (c) { list.push(c); });
  return ok_({ codes: list });
}

function adminAddCode_(req) {
  var code = clean_(req.code).toUpperCase();
  var courseId = COURSES[req.courseId] ? req.courseId : "geotanu";
  var name = clean_(req.name) || COURSES[courseId].name_kz;
  if (norm_(code).length < 4) return fail_("Код слишком короткий (минимум 4 символа)");
  if (findCourseByCode_(code)) return fail_("Такой код уже есть");
  sheet_(CONFIG.SHEET_CODES, CONFIG.CODE_HEADERS)
    .appendRow([safeCell_(code), courseId, safeCell_(name), stamp_(new Date())]);
  return ok_({});
}

function adminDeleteCode_(req) {
  var target = norm_(clean_(req.code));
  var sheet = sheet_(CONFIG.SHEET_CODES, CONFIG.CODE_HEADERS);
  var rows = sheet.getDataRange().getDisplayValues();
  for (var i = rows.length - 1; i >= 1; i--) {
    if (norm_(rows[i][0]) === target) { sheet.deleteRow(i + 1); return ok_({}); }
  }
  return fail_("Код не найден (базовые коды меняются в DEFAULT_CODES)");
}

/* ===================== Вспомогательное ===================== */

function findCourseByCode_(code) {
  var n = norm_(code);
  if (!n) return null;
  for (var k in DEFAULT_CODES) {
    if (norm_(k) === n) return COURSES[DEFAULT_CODES[k]];
  }
  var custom = customCodes_();
  for (var i = 0; i < custom.length; i++) {
    if (norm_(custom[i].code) === n) {
      var base = COURSES[custom[i].courseId] || COURSES.geotanu;
      return {
        id: base.id, icon: base.icon, targetUrl: base.targetUrl,
        name_kz: custom[i].name || base.name_kz, name_ru: custom[i].name || base.name_ru
      };
    }
  }
  return null;
}

function customCodes_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(CONFIG.SHEET_CODES);
  if (!sheet || sheet.getLastRow() < 2) return [];
  return sheet.getDataRange().getDisplayValues().slice(1)
    .filter(function (r) { return r[0]; })
    .map(function (r) { return { code: r[0], courseId: r[1], name: r[2], base: false }; });
}

function publicCourse_(c) {
  return { id: c.id, icon: c.icon, targetUrl: c.targetUrl, name_kz: c.name_kz, name_ru: c.name_ru };
}

function sheet_(name, headers) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name) || ss.insertSheet(name);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#d1fae5");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function norm_(s) {
  return String(s || "").trim().toUpperCase().replace(/[\s\-_]/g, "");
}

function clean_(v) {
  if (v === null || v === undefined) return "";
  return String(v).replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ")
    .trim().slice(0, CONFIG.MAX_LEN);
}

// Строка, начинающаяся с = + - @, в Таблице станет формулой — обезвреживаем.
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

function notifyAdmin_(f, course) {
  var rows = [["Имя", f.name], ["Email", f.email], ["Курс", course.name_ru],
              ["Код", f.code], ["Язык", f.lang], ["Класс", f.grade], ["Дата", stamp_(new Date())]];
  var html = "<h3>Новая регистрация — GeoTany / GeoNISH</h3><ul>" +
    rows.map(function (r) { return "<li><b>" + r[0] + ":</b> " + escapeHtml_(r[1]) + "</li>"; }).join("") +
    "</ul>";
  try {
    MailApp.sendEmail({
      to: CONFIG.ADMIN_EMAIL,
      subject: "Новая регистрация: " + f.name.slice(0, 60),
      htmlBody: html
    });
  } catch (mailErr) {
    console.error(mailErr); // заявка уже сохранена, сбой почты её не теряет
  }
}

function ok_(extra) {
  var out = { status: "success" };
  for (var k in extra) out[k] = extra[k];
  return json_(out);
}

function fail_(message, code) {
  return json_({ status: "error", message: message, code: code || "" });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
