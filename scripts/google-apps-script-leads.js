/**
 * ============================================================================
 * ECO-DIGITAL: GOOGLE APPS SCRIPT LEADS WEBHOOK
 * ============================================================================
 * Script gratis untuk merekam formulir konsultasi website langsung ke Google Sheets
 * dan mengirim notifikasi email otomatis ke HP Anda setiap ada pesan masuk.
 * 
 * CARA PEMASANGAN (Hanya butuh 2 menit):
 * 1. Buka https://sheets.new di browser Anda (buat Spreadsheet baru).
 * 2. Beri nama spreadsheet, contoh: "Leads ecoDigital".
 * 3. Klik menu "Extensions" (Ekstensi) > "Apps Script".
 * 4. Hapus semua kode default di editor, lalu PASTE SELURUH KODE DI BAWAH INI.
 * 5. Klik "Save" (ikon disket atau Ctrl+S).
 * 6. Klik tombol biru "Deploy" (Terapkan) di kanan atas > pilih "New deployment".
 * 7. Pada jenis deployment (ikon gerigi), pilih "Web app".
 * 8. Atur konfigurasi berikut:
 *    - Description: "ecoDigital Leads API"
 *    - Execute as: "Me" (email Anda)
 *    - Who has access: "Anyone" (PENTING: Pilih "Anyone" / "Siapa saja").
 * 9. Klik "Deploy". Google akan meminta izin (Review Permissions) > pilih akun Anda >
 *    klik "Advanced" (Lanjutan) > klik "Go to Untitled project (unsafe)" > "Allow".
 * 10. Salin "Web app URL" (format: https://script.google.com/macros/s/AKfy.../exec).
 * 11. Masukkan URL tersebut ke environment variable Vercel atau .env.local:
 *     NEXT_PUBLIC_LEADS_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
 * ============================================================================
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Cegah benturan data jika ada submit bersamaan dalam rentang 10 detik
  lock.tryLock(10000);

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();

    // 1. Inisialisasi Header otomatis jika Spreadsheet masih kosong
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Waktu (WIB)",
        "Nama Klien",
        "Kontak (WA/Email)",
        "Kategori Proyek",
        "Pesan / Kebutuhan",
        "Sumber",
        "Status Follow-Up",
        "Catatan Tambahan"
      ];
      sheet.appendRow(headers);

      // Desain Header Profesional (Background Emerald, Teks Bold)
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#10B981");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }

    // 2. Parsing Data Masuk (Mendukung JSON string maupun FormData/URLSearchParams)
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // Waktu Indonesia Barat (WIB)
    var nowFormatted = Utilities.formatDate(new Date(), "Asia/Jakarta", "yyyy-MM-dd HH:mm:ss");

    var clientName = (data.name || "").toString().trim() || "Anonim";
    var contact = (data.contact || "").toString().trim() || "-";
    var category = (data.category || "").toString().trim() || "Konsultasi Umum";
    var message = (data.message || "").toString().trim() || "-";
    var source = (data.source || "").toString().trim() || "Website (ecoDigital)";

    // 3. Tambahkan Baris Baru ke Spreadsheet
    sheet.appendRow([
      nowFormatted,
      clientName,
      contact,
      category,
      message,
      source,
      "Baru Masuk",
      ""
    ]);

    // 4. Kirim Notifikasi Push / Email ke Gmail Pemilik Spreadsheet (Gratis)
    try {
      var recipient = Session.getActiveUser().getEmail();
      if (!recipient || recipient === "") {
        // Fallback default email
        recipient = "ekosuesanto28@gmail.com";
      }

      var cleanPhone = contact.replace(/[^0-9]/g, "");
      var waDirectLink = cleanPhone ? "https://wa.me/" + cleanPhone : "-";

      var emailSubject = "🚀 [Leads Baru ecoDigital] " + clientName + " - " + category;
      var emailBody = 
        "Halo Mas Eko (ecoDigital),\n\n" +
        "Ada prospek calon klien baru yang mengisi formulir konsultasi di website:\n\n" +
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
        "• Waktu Masuk : " + nowFormatted + " WIB\n" +
        "• Nama Klien  : " + clientName + "\n" +
        "• Kontak      : " + contact + "\n" +
        "• Kategori    : " + category + "\n" +
        "• Sumber Form : " + source + "\n" +
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
        "RINCIAN KEBUTUHAN / PESAN:\n" +
        message + "\n\n" +
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
        "TINDAKAN CEPAT:\n" +
        "Balas langsung via WhatsApp: " + waDirectLink + "\n" +
        "Lihat data di Google Sheet: " + ss.getUrl() + "\n\n" +
        "Salam sukses,\necoDigital Bot";

      MailApp.sendEmail({
        to: recipient,
        subject: emailSubject,
        body: emailBody
      });
    } catch (mailError) {
      Logger.log("Gagal kirim notifikasi email: " + mailError.toString());
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Data berhasil dicatat" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Endpoint GET untuk uji coba di browser (apakah webhook sudah aktif)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "active",
      message: "ecoDigital Leads Webhook is online and ready to receive POST data."
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

