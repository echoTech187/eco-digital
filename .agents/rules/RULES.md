# ATURAN EMAS PENGEMBANGAN SISTEM (GOLDEN RULES)

> [!IMPORTANT]
> **Pesan Utama Pengguna (Wajib Dipatuhi 100% Tanpa Pengecualian):**
> 1. *ZERO ASSUMTION* Dilarang keras berasumsi dan menebak - nebak. Bila tidak yakin atau tidak tahu, WAJIB bertanya terlebih dahulu.
> 2. *Context7* Selalu gunakan Context7 saat saya membutuhkan dokumentasi library/API, pembuatan kode, atau langkah-langkah penyiapan/konfigurasi tanpa saya harus secara eksplisit memintanya.
> 3. *zero regression* Kecepatan bukan prioritas di sini; integritas fungsionalitas (zero regression) adalah prioritas mutlak. Alur dan workflow yang sudah berjalan dengan benar tidak boleh rusak atau terganggu.
> 4. *no collateral damage* Jangan sampai menyenggol kode lain yang sudah ada sebelumnya. Karena workflow yang sudah benar tidak boleh dirusak oleh asumsi sepihak saat ingin merubah kode tanpa memikirkan dampak apa yang akan terjadi jika kode tersebut diubah. Bila perubahan itu berdampak, WAJIB konfirmasi terlebih dahulu dengan menyertakan baris mana yang diubah, dampaknya bagaimana, dan alternatif lainnya.
> 5. *code documentation* Setiap alur yang dibuat harus didokumentasikan dengan jelas dan terstruktur.
> 6. *SECURITY-FIRST (UnitOneAI/SecuritySkills)* Setiap perubahan, penambahan, atau modifikasi kode WAJIB memperhitungkan dan mematuhi standar keamanan dari UnitOneAI/SecuritySkills (`owasp-top-10-web`, `secure-code-review`, `api-security`, `secrets-management`, `dependency-scanning`, `threat-modeling`). Dilarang keras menulis kode tanpa sanitasi input, memasukkan hardcoded secrets, atau memperkenalkan dependency dengan celah CVE.

---

## 🔒 PROTOKOL KEAMANAN KODE WAJIB (UNITONEAI / SECURITYSKILLS)

Setiap agen maupun pengembang yang membuat, mengubah, atau me-refactor kode pada repositori ini **WAJIB** menjalankan checklist keamanan berikut sebelum kode dianggap selesai:

### 1. Sanitasi & Validasi Input (Secure Code Review — ASVS V5 / CWE Top 25)
* **Input Bounding (Batasan Fisik Input):** Semua elemen `<input>` dan `<textarea>` WAJIB memiliki batasan panjang fisik `maxLength` di atribut HTML dan pemotongan aman `.slice(0, N)` di fungsi handler JavaScript untuk mencegah buffer abuse/crash.
* **URL & Parameter Sanitization:** Parameter dinamis atau teks yang dirangkai ke URL (misal: WhatsApp `wa.me`, link filter, query string) WAJIB disanitasi menggunakan `encodeURIComponent()` dan di-trim (`.trim()`).
* **Reverse Tabnabbing Defense:** Setiap pemanggilan `window.open(url, "_blank")` WAJIB menyertakan flag `"noopener,noreferrer"`, dan tag `<a target="_blank">` wajib memiliki `rel="noopener noreferrer"`.
* **XSS Defense:** Hindari `dangerouslySetInnerHTML`. Jika wajib digunakan (misal untuk Schema.org JSON-LD SEO), hanya perbolehkan data konstan build-time yang di-serialize dengan `JSON.stringify()`, dilarang menyisipkan data pengguna.

### 2. Zero Hardcoded Secrets & Kredensial (Secrets Management — NIST SP 800-57)
* **Zero Hardcoded Secrets:** Dilarang keras menuliskan API Key, password basis data, token autentikasi, private key, atau credential langsung di dalam source code, komentar, maupun commit git.
* **Environment Hygiene:** Kredensial wajib ditarik dari environment variable server (`process.env.*`) dan file `.env*` wajib dipastikan terdaftar di `.gitignore`.
* **Pencegahan Kebocoran Error (CWE-209):** Blok `catch (error)` dilarang mengekspos stack trace teknis atau query internal sistem ke antarmuka pengguna. Gunakan pesan generik yang aman.

### 3. Keamanan Arsitektur & API (OWASP Top 10 & API Security:2023)
* **SSRF & Open Redirect Prevention:** Klien HTTP (`apiClient`) tidak boleh menerima URL absolut eksternal dari input pengguna tanpa validasi skema dan host allowlist.
* **BOLA / IDOR Prevention:** Pada setiap akses resource objek, kepemilikan data wajib diverifikasi server-side (misal: `WHERE id = :id AND user_id = :authUserId`), bukan mengandalkan parameter ID dari client semata.
* **Server Hardening (.htaccess):** Konfigurasi Apache di `public/.htaccess` wajib mempertahankan seluruh HTTP Security Headers (`X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, `Options -Indexes`, dan proteksi file tersembunyi `.*`).

### 4. Dependensi Bebas Kerentanan (Dependency Scanning — SCA)
* **Zero Vulnerability Rule:** Setiap instalasi atau penambahan package di `package.json` WAJIB diverifikasi dengan `npm audit` dan wajib menghasilkan `found 0 vulnerabilities`. Jika terdapat transitive vulnerability pada paket pendukung, selesaikan menggunakan mekanisme `overrides`.

---


┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. LOG TERPISAH SETIAP SELESAI MEMBERIKAN ARAHAN (AUDIT LOG SIDAK)          │
│    Setiap Kamsel selesai memberikan arahan/sidak ke sekolah:                │
│    • Dicatat ke tabel log khusus (misal: `kamsel_inspection_logs`).         │
│    • Merekam nomor urut sidak sekolah (Sidak Ke-1, Ke-2, dst.).             │
│    • Merekam tanggal, petugas Kamsel, materi arahan, catatan tindak lanjut. │
│    • Merekam snapshot detail pelanggaran siswa saat sidak dilakukan.        │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                   ┌───────────────────┴───────────────────┐
                   ▼                                       ▼
┌──────────────────────────────────────┐┌──────────────────────────────────────┐
│ 2. FEEDBACK DARI GURU BK             ││ 3. RIWAYAT PENANGANAN (SIDAK)        │
│    Guru BK memberikan penilaian      ││    Daftar riwayat lengkap:           │
│    terhadap arahan petugas Kamsel:   ││    • Berapa kali sekolah disidak     │
│    • Rating (Skala 1 - 5 Bintang)    ││    • Detail tiap kunjungan/sidak     │
│    • Catatan testimoni/evaluasi BK   ││    • Daftar pelanggar saat itu       │
│    • Status: Belum Diulas / Selesai  ││    • Tampil di App BK & App Polri    │
└──────────────────┬───────────────────┘└──────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ 4. LEADERBOARD FEEDBACK UNTUK KAMSEL                                        │
│    Papan peringkat kinerja personel Unit Kamsel di aplikasi Polri:          │
│    • Peringkat petugas berdasarkan akumulasi rating kepuasan Guru BK.       │
│    • Menampilkan rata-rata bintang, total sekolah dibina, dan apresiasi.    │
└─────────────────────────────────────────────────────────────────────────────┘