/**
 * Google Apps Script Web App for NIS Science Prep & GeoTany
 * ==========================================================
 * Instructions:
 * 1. Open Google Sheets (e.g. "NIS Students Base")
 * 2. Extensions -> Apps Script
 * 3. Paste this code into Code.gs
 * 4. Deploy -> New Deployment -> Web App (Execute as: Me, Who has access: Anyone)
 * 5. Copy the Web App URL and paste it into nish_science_prep.html (or form action)
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["ID", "ФИО", "Email", "Телефон/WhatsApp", "Город", "Класс", "Отделение", "Целевая школа", "Дата"]);
      sheet.getRange(1, 1, 1, 9).setFontWeight("bold").setBackground("#d1fae5");
    }

    var data = JSON.parse(e.postData.contents);
    var row = [
      new Date().getTime(),
      data.name || data.ФИО || "",
      data.email || data.Email || "",
      data.phone || data.Телефон || "",
      data.city || data.Город || "",
      data.grade || data.Класс || "",
      data.dept || data.Отделение || "",
      data.school || data.Целевая_школа || "",
      new Date().toLocaleString()
    ];
    sheet.appendRow(row);

    // Send email notification to Admin
    MailApp.sendEmail({
      to: "showanchik@gmail.com",
      subject: "🎓 Новая регистрация НИШ 6 класс: " + (data.name || data.ФИО || "Новый ученик"),
      htmlBody: "<h3>Поступила новая регистрация на сайте подготовки к НИШ:</h3>" +
                "<ul>" +
                "<li><b>ФИО:</b> " + (data.name || data.ФИО) + "</li>" +
                "<li><b>Email:</b> " + (data.email || data.Email) + "</li>" +
                "<li><b>Телефон/WhatsApp:</b> " + (data.phone || data.Телефон) + "</li>" +
                "<li><b>Город:</b> " + (data.city || data.Город) + "</li>" +
                "<li><b>Класс:</b> " + (data.grade || data.Класс) + "</li>" +
                "<li><b>Школа:</b> " + (data.school || data.Целевая_школа) + "</li>" +
                "<li><b>Дата:</b> " + new Date().toLocaleString() + "</li>" +
                "</ul>"
    });

    return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Saved and email sent" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
