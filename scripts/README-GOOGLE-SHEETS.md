# Panduan Integrasi Formulir Konsultasi ke Google Sheets (Gratis 100%)

Dengan integrasi ini, setiap kali ada calon klien yang mengisi formulir di halaman [Konsultasi (/contact)](https://www.ecodigitalindo.com/contact):
1. Data langsung tercatat otomatis di baris baru Google Sheets Anda (Waktu, Nama, Kontak, Kategori, Pesan, Status).
2. Anda langsung mendapat notifikasi email/push di HP melalui Gmail (via `MailApp.sendEmail`).
3. Calon klien tetap otomatis diarahkan ke WhatsApp untuk closing instan.

---

## Langkah 1: Buat Google Spreadsheet Baru
1. Buka browser dan kunjungi: **[https://sheets.new](https://sheets.new)**
2. Beri nama file Spreadsheet Anda, misalnya: **`Leads ecoDigital`**.

---

## Langkah 2: Pasang Apps Script
1. Di Google Sheets, klik menu **Extensions** (Ekstensi) > **Apps Script**.
2. Hapus seluruh isi kode bawaan (`function myFunction() { ... }`).
3. Buka file [`scripts/google-apps-script-leads.js`](file:///c:/laragon/www/eco-digital/eco-digital/scripts/google-apps-script-leads.js), **Copy semua kodenya**, lalu **Paste** ke editor Apps Script.
4. Klik tombol **Save** (ikon disket atau `Ctrl + S`).

---

## Langkah 3: Deploy sebagai Web App
1. Di pojok kanan atas editor Apps Script, klik tombol biru **Deploy** (Terapkan) > pilih **New deployment** (Penerapan baru).
2. Klik ikon gerigi (Select type) di sebelah kiri, pilih **Web app**.
3. Isi konfigurasi:
   - **Description:** `ecoDigital Leads Webhook`
   - **Execute as (Jalankan sebagai):** `Me (email Anda)`
   - **Who has access (Siapa yang memiliki akses):** **`Anyone`** *(PENTING: Jangan pilih "Only myself" agar formulir web bisa mengirim data).*
4. Klik tombol **Deploy**.
5. Google akan menampilkan popup perizinan:
   - Klik **Authorize access** / **Review permissions**.
   - Pilih akun Google Anda.
   - Klik **Advanced** (Lanjutan di kiri bawah) > klik **Go to Untitled project (unsafe)**.
   - Klik **Allow**.
6. Salin **Web app URL** yang muncul (format: `https://script.google.com/macros/s/AKfycb.../exec`).

---

## Langkah 4: Sambungkan ke Website

### Opsi A: Pasang di Vercel (Produksi Live)
1. Buka dashboard Vercel Anda di proyek `eco-digital`.
2. Masuk ke **Settings** > **Environment Variables**.
3. Tambahkan variabel baru:
   - **Key:** `NEXT_PUBLIC_LEADS_WEBHOOK_URL`
   - **Value:** `https://script.google.com/macros/s/AKfycb.../exec` (URL Web app dari Langkah 3)
4. Klik **Save**, lalu redeploy project (atau push commit baru).

### Opsi B: Pasang di Komputer Lokal (.env.local)
Buat file `.env.local` di root folder proyek:
```env
NEXT_PUBLIC_LEADS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycb.../exec
```

---

## Uji Coba
1. Buka halaman `/contact` di website.
2. Isi nama, nomor WA, kategori, dan pesan uji coba.
3. Klik **Kirim Brief ke WhatsApp ecoDigital**.
4. Cek Google Sheets Anda: baris baru akan muncul seketika lengkap dengan waktu WIB, dan HP Anda akan menerima notifikasi email Gmail!
