import {
  Car01Icon,
  SmartPhone01Icon,
  Briefcase01Icon,
  KanbanIcon,
  School01Icon,
  City01Icon,
  Analytics01Icon,
  ShoppingBag01Icon,
  Globe02Icon,
  CodeIcon,
  Layers01Icon,
  Rocket01Icon,
  ServerStack01Icon,
  FireIcon,
  Database01Icon,
  AiCloud01Icon,
  ApiIcon,
  LaptopProgrammingIcon,
  Building03Icon,
  Mortarboard01Icon,
  CreditCardIcon,
  ShieldCheckIcon,
  WhatsappIcon,
  Wrench01Icon,
} from "@hugeicons/core-free-icons";

// ─── WhatsApp Constants & Helpers ────────────────────────────────────────────
export const WA_NUMBER = "6287875856918";
export const WA_DISPLAY = "0878-7585-6918";

export function getWaUrl(message?: string) {
  const defaultMsg =
    "Halo Mas (ecoDigital), saya mau konsultasi pembuatan website / aplikasi custom.";
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message || defaultMsg)}`;
}

// ─── Portfolio Types & Data ──────────────────────────────────────────────────
export type PortfolioCategory =
  | "sistem_informasi"
  | "mobile"
  | "instansi"
  | "ecommerce";

export interface ProjectItem {
  id: string;
  title: string;
  domain: string;
  categories: PortfolioCategory[];
  badge: string;
  desc: string;
  impact: string;
  features: string[];
  mockupGradient: string;
  mockupIcon: any;
  mockupSubtitle: string;
  fullSpecs?: {
    overview: string;
    keyModules: string[];
    techStack: string[];
    deliverables: string[];
  };
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: "simpelantas",
    title: "SIMPELANTAS",
    domain: "sipelantas.polresmojokerto.id",
    categories: ["instansi", "mobile"],
    badge: "Web Instansi & Mobile App",
    desc: "Sistem Informasi & Mobile App terpadu personel Satlantas Polres Mojokerto beserta Web Admin Console dan push notification real-time.",
    impact: "Berhasil di-deploy dan diuji coba operasional lapangan Satlantas.",
    features: ["Flutter Mobile", "CodeIgniter 4", "REST API & FCM", "MySQL Database"],
    mockupGradient: "from-blue-600/30 to-indigo-900/40",
    mockupIcon: Car01Icon,
    mockupSubtitle: "Polres Mojokerto Dispatch & Field Radar",
    fullSpecs: {
      overview:
        "Sistem operasional lapangan personel kepolisian lalu lintas untuk pemantauan titik pos, surat penugasan dinas, dan pelaporan tilang serta lakalantas secara langsung dari aplikasi Android ke pusat komando (Command Center).",
      keyModules: [
        "Aplikasi Personel Android (Flutter) dengan pelacakan GPS real-time",
        "Push Notification darurat & tugas lapangan via Firebase Cloud Messaging",
        "Web Admin Console untuk disposisi tugas dan pemetaan titik rawan",
        "Modul rekapitulasi data laporan penindakan lalu lintas berformat PDF",
      ],
      techStack: [
        "Flutter Mobile (Dart)",
        "PHP CodeIgniter 4",
        "RESTful API Architecture",
        "FCM & Geolocation",
        "MySQL",
      ],
      deliverables: [
        "Full Source Code Mobile & Backend",
        "Database Schema .sql",
        "Buku Panduan Admin & Personel",
        "Garansi SLA Bug Fixing",
      ],
    },
  },
  {
    id: "siapel",
    title: "SiApel",
    domain: "siapel.ecodigital.id",
    categories: ["sistem_informasi"],
    badge: "Sistem Informasi Presensi",
    desc: "Aplikasi presensi online berbasis geolokasi GPS (Geofencing), rekap kehadiran otomatis, dan dashboard manajemen jam kerja karyawan/pegawai.",
    impact: "Akurasi presensi geofencing 100% & rekap absensi otomatis bebas manipulasi.",
    features: ["Next.js 15 App Router", "Geolocation & Camera", "PostgreSQL & Prisma", "Export Excel/PDF"],
    mockupGradient: "from-emerald-600/30 to-teal-900/40",
    mockupIcon: SmartPhone01Icon,
    mockupSubtitle: "Presence Tracker & Attendance Portal",
    fullSpecs: {
      overview:
        "Platform absensi berbasis web mobile dan desktop yang mewajibkan validasi radius titik koordinat kantor serta tangkapan foto selfie kamera depan untuk memvalidasi presensi anti-fake GPS.",
      keyModules: [
        "Geofencing Radius Check: pembatasan radius presensi 50–100 meter dari kantor",
        "Deteksi Kamera Langsung (Selfie Attendance) dengan watermark tanggal & koordinat",
        "Kalkulasi otomatis keterlambatan, jam lembur, dan izin/cuti online",
        "Export laporan rekapitulasi kehadiran bulanan ke Excel dan PDF ber-kop surat",
      ],
      techStack: ["Next.js 15 (React 19)", "TypeScript Strict", "Tailwind CSS", "Prisma ORM", "PostgreSQL 16"],
      deliverables: ["Full Source Code Next.js & API", "Database Setup Script", "Sesi Bedah Koding 1-on-1", "Garansi Penyesuaian Alur"],
    },
  },
  {
    id: "eloker",
    title: "E-Loker",
    domain: "eloker.ecodigital.id",
    categories: ["sistem_informasi"],
    badge: "Sistem Informasi Rekrutmen ATS",
    desc: "Platform manajemen pelamar kerja dan screening kandidat dengan Role-Based Access Control (RBAC), Zod schema, dan JWT authentication.",
    impact: "Screening pelamar kerja 3x lebih cepat dengan scoring otomatis.",
    features: ["React 19 + TypeScript", "Node.js & Express", "Prisma PostgreSQL", "Kanban Screening"],
    mockupGradient: "from-purple-600/30 to-blue-900/40",
    mockupIcon: Briefcase01Icon,
    mockupSubtitle: "Applicant Tracking & Scoring Pipeline",
    fullSpecs: {
      overview:
        "Applicant Tracking System (ATS) komprehensif untuk perusahaan atau portal karir yang menyaring ribuan pelamar kerja secara terstruktur berdasarkan skor kualifikasi dan tahapan wawancara.",
      keyModules: [
        "Multi-Role: HR Administrator, Recruiter Reviewer, dan Calon Pelamar",
        "Pipeline Pelamar berbasis Kanban Drag & Drop (Applied, Screening, Interview, Offered)",
        "Validasi input formulir ketat dengan Zod dan sanitasi berkas dokumen",
        "Sistem notifikasi email / WhatsApp otomatis untuk panggilan tes & hasil seleksi",
      ],
      techStack: ["React 19", "Express.js / Node.js", "TypeScript", "PostgreSQL", "JWT & Argon2 Hashing"],
      deliverables: ["Source Code Frontend & Backend", "API Documentation", "Video Panduan Instalasi", "Garansi Revisi"],
    },
  },
  {
    id: "projex",
    title: "Projex",
    domain: "projex.ecodigital.id",
    categories: ["sistem_informasi"],
    badge: "Sistem Informasi Manajemen Proyek",
    desc: "Aplikasi manajemen proyek dan timeline tim operasional enterprise dengan generator milestone, kanban board dinamis, dan RESTful API teroptimasi.",
    impact: "Manajemen sprint tim rapi & progres milestone proyek terpantau transparan.",
    features: ["Laravel 12 Backend", "Kanban & Task Engine", "PostgreSQL Indexing", "Sprint Burndown"],
    mockupGradient: "from-rose-600/30 to-red-950/40",
    mockupIcon: KanbanIcon,
    mockupSubtitle: "Project Milestone & Kanban Engine",
    fullSpecs: {
      overview:
        "Sistem kolaborasi tim dan pelacakan progress proyek berbasis metodologi agile/scrum. Memungkinkan manajer proyek memantau beban kerja anggota tim serta pencapaian milestone.",
      keyModules: [
        "Papan Kanban interaktif dengan pembagian status To Do, In Progress, Review, dan Done",
        "Milestone & Timeline Tracker untuk mengukur estimasi penyelesaian proyek",
        "Role permission granular per divisi atau departemen perusahaan",
        "REST API teroptimasi dengan Redis caching untuk query data berkecepatan tinggi",
      ],
      techStack: ["Laravel 12 (PHP 8.3)", "PostgreSQL", "Redis Cache", "Blade & Vue.js", "Docker Compose"],
      deliverables: ["Full Backend Repository", "Database Migration & Seeder", "Panduan Deployment Server", "Garansi Bug"],
    },
  },
  {
    id: "smk",
    title: "SMK Portal & LMS",
    domain: "smk.ecodigital.id",
    categories: ["instansi", "sistem_informasi"],
    badge: "Web Instansi Sekolah & LMS",
    desc: "Ekosistem web portal sekolah dan e-learning multi-role (Admin Console, Portal Guru, Aplikasi Siswa, dan Landing Page PPDB Online).",
    impact: "Digunakan 1.000+ siswa & guru aktif, nilai raport terbit otomatis berformat PDF.",
    features: ["Next.js & TypeScript", "Multi-portal RBAC", "Portal Nilai Raport", "PPDB Online Generator"],
    mockupGradient: "from-cyan-600/30 to-blue-950/40",
    mockupIcon: School01Icon,
    mockupSubtitle: "School Portal & Multi-Role LMS",
    fullSpecs: {
      overview:
        "Ekosistem digital terintegrasi untuk institusi sekolah (SMK/SMA/SMP) mencakup profil sekolah resmi, pendaftaran peserta didik baru (PPDB), hingga manajemen pembelajaran dan nilai raport.",
      keyModules: [
        "4 Level Akses: Administrator TU, Guru Mata Pelajaran, Siswa, dan Wali Murid",
        "Modul E-Learning: Materi pelajaran, unggah tugas, dan ujian online (CBT)",
        "Penginputan dan pencetakan raport kurikulum nasional otomatis ke format PDF",
        "Landing page PPDB online dengan verifikasi kelulusan berkas otomatis",
      ],
      techStack: ["Next.js 15 App Router", "TypeScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL"],
      deliverables: ["Source Code Full Stack", "Database Lengkap", "Buku Panduan Guru & Admin", "Garansi Teknis"],
    },
  },
  {
    id: "simopmas",
    title: "SIMOPMAS",
    domain: "simopmas.ecodigital.id",
    categories: ["instansi"],
    badge: "Web Instansi Pelayanan Publik",
    desc: "Sistem Informasi Manajemen Operasional & Pelayanan Masyarakat untuk pengajuan surat online, verifikasi berkas dinamis, dan pelaporan terpadu.",
    impact: "Selesai tepat waktu & lulus uji sistem sidang, antrean warga terpangkas.",
    features: ["TypeScript Strict", "Tailwind Design System", "Dokumen Generator PDF", "Verifikasi QR Code"],
    mockupGradient: "from-amber-600/30 to-emerald-950/40",
    mockupIcon: City01Icon,
    mockupSubtitle: "Public Service & Document Automation",
    fullSpecs: {
      overview:
        "Aplikasi pelayanan digital desa/kelurahan/kecamatan yang memangkas antrean masyarakat dengan sistem pengajuan surat pengantar online dan tanda tangan digital ber-QR Code.",
      keyModules: [
        "Pengajuan berbagai jenis surat keterangan warga (SKTM, Surat Domisili, Keterangan Usaha)",
        "Alur verifikasi berjenjang oleh staf administrasi dan tanda tangan elektronik pimpinan",
        "Pencetakan surat otomatis ber-kop dinas lengkap dengan stempel dan QR Code pelacak keaslian",
        "Statistik grafik pelayanan masyarakat dan demografi kependudukan real-time",
      ],
      techStack: ["React 19 / Next.js", "TypeScript", "PDFMake Document Engine", "PostgreSQL", "Tailwind CSS"],
      deliverables: ["Full Source Code", "Database & Template Surat", "Panduan Pemakaian Warga & Admin", "Garansi"],
    },
  },
  {
    id: "spk-ahp-topsis",
    title: "SPK AHP & TOPSIS",
    domain: "spk-topsis.ecodigital.id",
    categories: ["sistem_informasi"],
    badge: "Sistem Informasi Riset SPK",
    desc: "Sistem Pendukung Keputusan penentuan kelayakan penerima bantuan & beasiswa menggunakan kombinasi pembobotan AHP dan perangkingan TOPSIS.",
    impact: "Lulus sidang skripsi nilai A, rumus matematis step-by-step tervalidasi dosen.",
    features: ["PHP / Laravel / Python", "Algoritma AHP & TOPSIS", "Matriks Keputusan", "Export Bab 4 Skripsi"],
    mockupGradient: "from-teal-600/30 to-cyan-950/40",
    mockupIcon: Analytics01Icon,
    mockupSubtitle: "Decision Support System & Sensitivity Analysis",
    fullSpecs: {
      overview:
        "Sistem pendukung keputusan akademik dengan rumus matematis transparan langkah demi langkah (step-by-step), sangat ideal untuk materi skripsi/tugas akhir jurusan Teknik Informatika atau Sistem Informasi.",
      keyModules: [
        "Perhitungan bobot kriteria AHP dengan uji konsistensi (Consistency Ratio CR < 0.1)",
        "Normalisasi matriks TOPSIS, solusi ideal positif & negatif, serta nilai preferensi",
        "Tampilan tabel proses matematis lengkap yang bisa langsung disalin ke Bab 4 Skripsi",
        "Dilengkapi sesi bedah koding khusus agar mahasiswa paham 100% saat ditanya dosen penguji",
      ],
      techStack: ["PHP 8.2 / Laravel / Python", "MySQL Database", "Chart.js Visualisasi", "Tailwind CSS"],
      deliverables: ["Source Code Bersih & Berkomentar", "Database .sql", "Sesi Bimbingan Bedah Kode 1-on-1", "Garansi Sampai ACC"],
    },
  },
  {
    id: "pos-umkm-wa",
    title: "POS Kasir & WA Gateway",
    domain: "pos-umkm.ecodigital.id",
    categories: ["mobile", "ecommerce"],
    badge: "E-Commerce & Mobile POS",
    desc: "Aplikasi kasir point-of-sale toko & cafe terhubung cetak struk Bluetooth dan pengiriman nota digital otomatis langsung ke WhatsApp pelanggan.",
    impact: "Transaksi kasir cepat & nota digital langsung terkirim otomatis ke WhatsApp pelanggan.",
    features: ["Flutter Mobile", "Thermal Printer Bluetooth", "WhatsApp API Notif", "Laporan Omset Harian"],
    mockupGradient: "from-emerald-600/30 to-blue-900/40",
    mockupIcon: ShoppingBag01Icon,
    mockupSubtitle: "Smart Retail POS & WhatsApp Billing",
    fullSpecs: {
      overview:
        "Aplikasi kasir modern multi-cabang untuk restoran, kedai kopi, dan toko retail dengan sinkronisasi inventori stok online serta struk digital otomatis via WhatsApp.",
      keyModules: [
        "Pencatatan transaksi kasir cepat (Point of Sale) di tablet / smartphone Android",
        "Koneksi printer thermal Bluetooth 58mm/80mm untuk pencetakan struk fisik",
        "Kirim nota digital interaktif langsung ke nomor WhatsApp pelanggan tanpa simpan kontak",
        "Laporan laba rugi, omzet harian, dan analitik produk terlaris (Top Selling Items)",
      ],
      techStack: ["Flutter Mobile (Dart)", "Node.js & Express", "WhatsApp Cloud API", "SQLite & Cloud DB"],
      deliverables: ["APK Android Siap Install", "Source Code Lengkap", "Panduan Pairing Printer", "Garansi Pendampingan"],
    },
  },
];

// ─── Tech Stack Marquee Items ────────────────────────────────────────────────
export const TECH_STACK_ITEMS = [
  { name: "HTML5 & Modern JS", icon: Globe02Icon },
  { name: "TypeScript Strict", icon: CodeIcon },
  { name: "React 19", icon: Layers01Icon },
  { name: "Next.js 15 App Router", icon: Rocket01Icon },
  { name: "PHP & Laravel 12", icon: ServerStack01Icon },
  { name: "CodeIgniter 4", icon: FireIcon },
  { name: "Flutter Mobile (Dart)", icon: SmartPhone01Icon },
  { name: "Node.js & Express", icon: ApiIcon },
  { name: "MySQL / MariaDB", icon: Database01Icon },
  { name: "PostgreSQL 16 & Prisma", icon: Database01Icon },
  { name: "Docker Compose", icon: Layers01Icon },
  { name: "Redis 7 Cache", icon: Rocket01Icon },
  { name: "RabbitMQ Queue", icon: ServerStack01Icon },
  { name: "Firebase Cloud Messaging", icon: AiCloud01Icon },
  { name: "RESTful API & Zod", icon: ApiIcon },
  { name: "Vercel Cloud Deployment", icon: AiCloud01Icon },
];

// ─── Keunggulan (Standar Kerja ecoDigital) ───────────────────────────────────
export const WHY_US_ITEMS = [
  {
    icon: LaptopProgrammingIcon,
    title: "Bukan Joki Lepas Tangan (Dapat Video Bedah Kode)",
    desc: "Saya nggak cuma kirim file .ZIP lalu menghilang. Kamu bakal dikasih video rekaman penjelasan cara kerja database dan alur kodingannya sampai benar-benar paham saat ditanya dosen atau atasan.",
    badge: "Video Bedah Kode",
  },
  {
    icon: Globe02Icon,
    title: "Pantau Progres Lewat Link Live",
    desc: "Nggak perlu nebak-nebak apakah proyekmu sudah dikerjakan atau belum. Kamu bakal dapat link preview untuk cek perkembangan aplikasimu langsung dari browser kapan saja.",
    badge: "Live Staging Preview",
  },
  {
    icon: WhatsappIcon,
    title: "Ngobrol Langsung Sama Eksekutornya",
    desc: "Tanpa admin atau sales yang gagap teknis. Mau ubah alur tabel, konsultasi logika algoritma, atau tanya solusi error—kamu ngobrol langsung di WA bareng saya yang nulis kodingannya.",
    badge: "Direct Developer",
  },
  {
    icon: CreditCardIcon,
    title: "Bayar Bertahap Sesuai Progres",
    desc: "Uangmu aman. Cukup DP untuk mulai pengerjaan, dan pelunasan baru dilakukan setelah sistem selesai didemokan di depanmu dengan lancar.",
    badge: "Pembayaran Bertahap",
  },
];

// ─── Alur Pengerjaan (Cara Kerja Anti-Ghosting) ──────────────────────────────
export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Curhat Kebutuhan (Gratis)",
    tag: "Gratis di WA",
    desc: "Chat ke WA, ceritakan judul atau masalah kodinganmu. Belum punya gambaran alur? Kita bedah bareng.",
  },
  {
    step: "02",
    title: "Kunci Fitur & Estimasi Biaya",
    tag: "Tanpa Biaya Siluman",
    desc: "Kita sepakati daftar fitur yang mau dibuat, batas waktu (deadline), dan biayanya di awal—nggak ada biaya siluman di tengah jalan.",
  },
  {
    step: "03",
    title: "Eksekusi & Pantau Live",
    tag: "Link Staging Live",
    desc: "Proses coding jalan. Kamu bisa cek progres tampilannya secara berkala lewat link staging/preview.",
  },
  {
    step: "04",
    title: "Demo, Bedah Kode & Serah Terima",
    tag: "Garansi Revisi",
    desc: "Sistem didemokan sampai oke, penyerahan full source code + database, video bedah kode, dan garansi revisi.",
  },
];

// ─── Paket Harga (3 Kartu Utama) ─────────────────────────────────────────────
export const PRICING_PACKAGES = [
  {
    name: "Penyelamat Revisi & Fix Error",
    price: "Rp 150.000",
    badgeLabel: "Paket Fix Error & Modul",
    badgeIcon: Wrench01Icon,
    desc: "Cocok buat kodingan yang mentok error, benerin tampilan berantakan, atau tambah 1–2 fitur cepat.",
    features: [
      "Cek sumber error/bug gratis di awal",
      "Perbaikan fungsi / query database macet",
      "Tambah fitur / modul revisi dosen",
      "Bayar setelah bukti error beres dikirim",
    ],
    ctaText: "Tanya Biaya Fix Error",
    ctaMsg: "Halo Mas (ecoDigital), saya mau tanya biaya fix error / revisi kodingan saya.",
    isPopular: false,
    theme: "default",
  },
  {
    name: "Bangun Web / Sistem Baru (Reguler)",
    price: "Rp 499.000",
    badgeLabel: "Paket Reguler Standar",
    badgeIcon: FireIcon,
    desc: "Cocok buat Tugas Akhir, SPK, Sistem Informasi standar, atau Landing Page UMKM siap online.",
    features: [
      "100% Custom sesuai alur/flowchart",
      "Desain responsif (rapi di HP & Laptop)",
      "Full Source Code & Database lengkap",
      "Bonus: Video penjelasan kode & bimbingan",
      "Garansi revisi & bug fixing",
    ],
    ctaText: "Ambil Paket Reguler",
    ctaMsg: "Halo Mas (ecoDigital), saya tertarik ambil Paket Reguler (mulai Rp499.000) untuk sistem / web saya.",
    isPopular: true,
    theme: "emerald",
  },
  {
    name: "Sistem Skala Penuh / Custom App",
    price: "Penawaran Tertulis",
    badgeLabel: "Paket Enterprise & Scale-Up",
    badgeIcon: Building03Icon,
    desc: "Cocok buat Aplikasi Sekolah/Instansi, Mobile App (Android), atau integrasi sistem kompleks.",
    features: [
      "Web System + Mobile App (Flutter/Android)",
      "Integrasi Open API / Payment Gateway",
      "Deployment ke Server / Cloud / Vercel",
      "Dokumentasi teknis & maintenance berkala",
    ],
    ctaText: "Diskusi Proyek Custom",
    ctaMsg: "Halo Mas (ecoDigital), saya ingin diskusi proyek custom untuk sistem skala penuh / aplikasi instansi.",
    isPopular: false,
    theme: "blue",
  },
];

// ─── Kalkulator Simulasi Biaya Options ────────────────────────────────────────
export const CALCULATOR_BASE_OPTIONS: Record<
  string,
  { name: string; label: string; desc: string; base: string; price: number; days: string }
> = {
  fix_error: {
    name: "Fix Error & Tambah Fitur",
    label: "Penyelamat Revisi & Fix Error",
    desc: "Perbaikan bug, error query, revisi",
    base: "Mulai 150rb",
    price: 150000,
    days: "1–3 Hari Kerja",
  },
  skripsi: {
    name: "Bangun Web / TA / SPK Reguler",
    label: "Bangun Web / Sistem Baru (Reguler / TA)",
    desc: "Custom alur, database & bimbingan",
    base: "Mulai 499rb",
    price: 499000,
    days: "3–7 Hari Kerja",
  },
  umkm: {
    name: "Website Profil UMKM / Bisnis",
    label: "Website Profil UMKM / Bisnis",
    desc: "Company profile resmi & WhatsApp",
    base: "Mulai 499rb",
    price: 499000,
    days: "3–7 Hari Kerja",
  },
  custom_admin: {
    name: "Sistem Info & Dashboard Admin",
    label: "Sistem Informasi & Dashboard Admin Custom",
    desc: "Operasional kantor, multi-user RBAC",
    base: "Mulai 999rb",
    price: 999000,
    days: "1–3 Minggu",
  },
  mobile_app: {
    name: "Aplikasi Mobile Flutter",
    label: "Aplikasi Mobile Android (Flutter)",
    desc: "Android APK, backend API & cloud",
    base: "Mulai 1.49jt",
    price: 1499000,
    days: "2–4 Minggu",
  },
};

export const CALCULATOR_ADDON_OPTIONS: Record<
  string,
  { label: string; price: number; priceFormatted: string }
> = {
  spk_algo: {
    label: "Algoritma SPK (AHP, TOPSIS, SAW, KNN)",
    price: 200000,
    priceFormatted: "+Rp 200rb",
  },
  bedah_kode: {
    label: "Video Bedah Kode & Sesi Bimbingan 1-on-1",
    price: 150000,
    priceFormatted: "+Rp 150rb",
  },
  domain_hosting: {
    label: "Domain Resmi (.com/.id) & Cloud Hosting Siap Online",
    price: 250000,
    priceFormatted: "+Rp 250rb",
  },
  wa_gateway: {
    label: "Integrasi Notifikasi WhatsApp Gateway Otomatis",
    price: 200000,
    priceFormatted: "+Rp 200rb",
  },
  export_pdf: {
    label: "Modul Ekspor Laporan Otomatis (PDF & Excel)",
    price: 150000,
    priceFormatted: "+Rp 150rb",
  },
  multi_role: {
    label: "Sistem Hak Akses Berjenjang (Multi-Role RBAC)",
    price: 200000,
    priceFormatted: "+Rp 200rb",
  },
};

// ─── FAQ Items (7 Q&A Sesuai Master Copy) ─────────────────────────────────────
export const FAQ_ITEMS = [
  {
    q: "Saya baru punya judul atau ide kasar aja, belum tahu alur sistemnya. Bisa dibantu?",
    a: "Bisa banget! Kamu nggak perlu nunggu punya flowchart atau rancangan database yang sempurna. Cukup ceritakan gambaran kasarnya lewat WA, nanti kita bedah bareng fitur apa saja yang paling masuk akal, sesuai dengan kebutuhan riset/bisnismu, dan pastinya aman buat dikejar sesuai deadline.",
  },
  {
    q: "Kodingan saya sudah setengah jalan tapi mentok error / ditinggal developer lama. Bisa lanjutin tanpa bikin ulang?",
    a: "Sangat bisa. Justru itu alasan saya menyediakan paket Penyelamat Revisi & Fix Error (Mulai Rp150.000). Kirim saja source code lamamu untuk saya cek dulu kerusakannya secara gratis. Kalau memang masih layak pakai dan cuma butuh benerin bug atau tambah 1–2 fitur revisi dosen, kamu nggak perlu buang uang buat bangun ulang dari nol.",
  },
  {
    q: "Nanti kalau ditanya dosen penguji pas sidang gimana? Saya takut nggak paham kodingannya.",
    a: "Tenang, saya bukan joki lepas tangan yang cuma kirim file .ZIP lalu hilang kontak. Setiap serah terima proyek sistem baru sudah termasuk video rekaman penjelasan alur kodingan & struktur database khusus untuk aplikasimu, ditambah sesi tanya-jawab 1-on-1. Kamu bisa putar ulang videonya kapan saja sampai benar-benar siap maju sidang.",
  },
  {
    q: "Berapa lama proses pengerjaannya? Bisa bantu kejar deadline yang sudah mepet?",
    a: "Durasi pengerjaan menyesuaikan tingkat kerumitan: Fix Error / Tambah Fitur Ringan (1–3 hari beres), Landing Page / Web Standar (3–7 hari kerja), dan Sistem Informasi / SPK / Aplikasi Custom (1–3 minggu). Kalau jadwal bimbingan atau sidangmu sudah mepet dalam hitungan hari, infokan saja jujur di awal chat supaya kita bisa memprioritaskan modul utamanya agar siap didemokan tepat waktu.",
  },
  {
    q: "Apa saja yang bakal saya dapatkan saat proyek selesai?",
    a: "Komplit dan menjadi hak milikmu 100% tanpa ada kode yang dikunci (enkripsi): Full Source Code asli yang rapi, file database lengkap (.sql), panduan/bantuan instalasi sampai aplikasi jalan normal di laptopmu sendiri (localhost / Android), link live preview, serta video penjelasan alur program.",
  },
  {
    q: "Gimana kalau setelah aplikasi jadi, tiba-tiba ada revisi dari dosen atau atasan?",
    a: "Semua paket sudah dilindungi Garansi Revisi. Selama revisi tersebut masih berada di dalam kesepakatan alur fitur awal atau perbaikan bug tampilan/fungsi, akan saya bereskan gratis tanpa biaya tambahan. Namun, jika di tengah jalan dosen atau atasan meminta penambahan fitur/modul baru di luar kesepakatan awal, biayanya tinggal menyesuaikan paket tambah fitur ringan.",
  },
  {
    q: "Sistem pembayarannya gimana? Apakah uang saya aman?",
    a: "Transparan dan dibayar bertahap sesuai progres. Khusus Paket Fix Error Ringan: Saya perbaiki dulu error-nya di laptop saya, lalu saya kirimkan bukti video/screen record bahwa fitur sudah berjalan normal; setelah kamu lihat buktinya beres, baru lakukan pembayaran dan file dikirim. Pembuatan Sistem Baru: Cukup bayar DP 50% untuk mulai pengerjaan (progres bisa dipantau lewat link live preview), dan pelunasan 50% sisanya baru dilakukan setelah sistem selesai didemokan.",
  },
];

