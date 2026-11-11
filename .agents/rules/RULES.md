# ATURAN EMAS PENGEMBANGAN SISTEM (GOLDEN RULES)

> [!IMPORTANT]
> **Pesan Utama Pengguna (Wajib Dipatuhi 100% Tanpa Pengecualian):**
> 1. *ZERO ASSUMTION* Dilarang keras berasumsi dan menebak - nebak. Bila tidak yakin atau tidak tahu, WAJIB bertanya terlebih dahulu.
> 2. *Context7* Selalu gunakan Context7 saat saya membutuhkan dokumentasi library/API, pembuatan kode, atau langkah-langkah penyiapan/konfigurasi tanpa saya harus secara eksplisit memintanya.
> 3. *zero regression* Kecepatan bukan prioritas di sini; integritas fungsionalitas (zero regression) adalah prioritas mutlak. Alur dan workflow yang sudah berjalan dengan benar tidak boleh rusak atau terganggu.
> 4. *no collateral damage* Jangan sampai menyenggol kode lain yang sudah ada sebelumnya. Karena workflow yang sudah benar tidak boleh dirusak oleh asumsi sepihak saat ingin merubah kode tanpa memikirkan dampak apa yang akan terjadi jika kode tersebut diubah. Bila perubahan itu berdampak, WAJIB konfirmasi terlebih dahulu dengan menyertakan baris mana yang diubah, dampaknya bagaimana, dan alternatif lainnya.
> 5. *code documentation* Setiap alur yang dibuat harus didokumentasikan dengan jelas dan terstruktur.*

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