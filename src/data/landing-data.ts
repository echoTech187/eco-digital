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
  CreditCardIcon,
  WhatsappIcon,
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      deliverables: ["Full Source Code Next.js & API", "Database Setup Script", "Dokumentasi Arsitektur & Panduan Setup", "Garansi Penyesuaian Alur"],
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
    impact: "Selesai tepat waktu & lulus uji sistem operasional, antrean warga terpangkas.",
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
    id: "evaluasi-kinerja",
    title: "Sistem Evaluasi Kinerja & KPI",
    domain: "evaluasi-kinerja.ecodigital.id",
    categories: ["sistem_informasi"],
    badge: "Dashboard Analitik & KPI",
    desc: "Platform evaluasi kinerja pegawai & audit berkala dengan visualisasi metrik performa, laporan otomatis, dan pembobotan kriteria terukur.",
    impact: "Otomasi rekapitulasi penilaian berkala, efisiensi waktu audit hingga 80%, dan laporan terstruktur siap cetak.",
    features: ["PHP / Laravel / Inertia", "Matriks Penilaian Terukur", "Dashboard Grafik Real-Time", "Export Rekap PDF & Excel"],
    mockupGradient: "from-teal-600/30 to-cyan-950/40",
    mockupIcon: Analytics01Icon,
    mockupSubtitle: "Performance Analytics & Automated Evaluation Dashboard",
    fullSpecs: {
      overview:
        "Sistem informasi evaluasi kinerja terpadu berbasis web yang mengotomasi proses penilaian, pembobotan indikator performa, dan rekapitulasi hasil secara transparan dan akurat.",
      keyModules: [
        "Perhitungan pembobotan kriteria penilaian dengan matriks terstruktur",
        "Kalkulasi skor otomatis dan perangkingan performa transparan",
        "Visualisasi grafik performa dan komparasi target vs realisasi real-time",
        "Otomasi ekspor laporan evaluasi lengkap format PDF dan Excel",
      ],
      techStack: ["PHP 8.2 / Laravel", "MySQL Database", "Chart.js Visualisasi", "Tailwind CSS"],
      deliverables: ["Full Source Code Terstruktur", "Database .sql", "Dokumentasi & Panduan Setup", "Garansi Perbaikan"],
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
    title: "Clean Architecture & Dokumentasi Rapi",
    desc: "Kami nggak cuma kirim file .ZIP lalu menghilang. Anda mendapatkan dokumentasi arsitektur rapi, skema database, dan panduan instalasi lengkap agar sistem siap dijalankan dan dikembangkan tim Anda kapan saja.",
    badge: "Clean Architecture",
  },
  {
    icon: Globe02Icon,
    title: "Progres Transparan via Link Demo Live",
    desc: "Nggak perlu menebak-nebak apakah proyekmu sudah jalan atau belum. Kamu diberikan tautan staging live untuk memantau perkembangan sistem langsung dari browser kapan saja.",
    badge: "Live Staging Preview",
  },
  {
    icon: WhatsappIcon,
    title: "Diskusi Langsung dengan Lead Developer",
    desc: "Tanpa perantara admin atau pihak yang kaku. Mau ubah struktur tabel, diskusi algoritma, atau konsultasi solusi error—kamu ngobrol langsung via WhatsApp dengan developer yang merancang kodenya.",
    badge: "Direct Developer",
  },
  {
    icon: CreditCardIcon,
    title: "Pembayaran Bertahap Sesuai Progres",
    desc: "Uang dan investasimu aman. Cukup DP awal untuk mulai pengerjaan, dan pelunasan hanya dilakukan setelah sistem selesai didemokan serta terbukti berjalan lancar.",
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

// ─── Paket Harga (3 Kartu Utama Selaras dengan 3 Fokus Layanan) ─────────────
export const PRICING_PACKAGES = [
  {
    name: "Web Instansi & Bisnis",
    price: "Rp 499.000",
    badgeLabel: "Paket Siap Online",
    badgeIcon: Building03Icon,
    desc: "Website resmi sekolah, profil instansi/dinas, portal usaha, kasir POS & inventori langsung online.",
    features: [
      "Desain modern, mobile-friendly & SEO-ready",
      "Konfigurasi deployment ke server/hosting",
      "Panel Admin CMS kelola berita/pengumuman",
      "Integrasi Form Kontak & WhatsApp Otomatis",
      "Garansi bug fixing & pendampingan teknis",
    ],
    ctaText: "Pilih Web Instansi & Bisnis",
    ctaMsg: "Halo Mas (ecoDigital), saya tertarik konsultasi paket Web Instansi & Bisnis (mulai Rp499.000).",
    isPopular: false,
    theme: "teal",
  },
  {
    name: "Jasa API & Backend",
    price: "Rp 899.000",
    badgeLabel: "High Performance",
    badgeIcon: ApiIcon,
    desc: "Fondasi RESTful API kencang, perancangan skema database teroptimasi, dan integrasi pihak ketiga.",
    features: [
      "RESTful API Clean Architecture & Modular",
      "Desain relasi database (PostgreSQL/MySQL)",
      "Integrasi Midtrans / Xendit & WA Gateway",
      "Dokumentasi interaktif Postman / Swagger",
      "Keamanan JWT Auth & Role-Based Access Control",
    ],
    ctaText: "Pilih Jasa API & Backend",
    ctaMsg: "Halo Mas (ecoDigital), saya tertarik konsultasi paket Jasa API & Backend Architecture.",
    isPopular: false,
    theme: "blue",
  },
  {
    name: "Aplikasi Custom",
    price: "Mulai Rp 999.000",
    priceDetail: {
      web: "Mulai Rp 999rb",
      mobile: "Mulai Rp 1.49jt",
    },
    badgeLabel: "Paling Banyak Dipilih",
    badgeIcon: LaptopProgrammingIcon,
    desc: "Sistem aplikasi custom sesuai alur operasional unik, multi-user, dan arsitektur modular terstandar.",
    features: [
      "Pilihan platform: Web Custom atau Android (Flutter)",
      "100% Custom alur logika & proses bisnismu",
      "Clean Architecture & struktur modular",
      "Akses demo Staging Live 24/7 pantau progres",
      "Penyerahan berkas kode lengkap & database",
      "Garansi pendampingan & garansi pengerjaan",
    ],
    ctaText: "Pilih Aplikasi Custom",
    ctaMsg: "Halo Mas (ecoDigital), saya tertarik konsultasi paket Aplikasi Custom (Web / Android).",
    isPopular: true,
    theme: "emerald",
  },
];

// ─── Kalkulator Simulasi Biaya Options (Selaras 3 Fokus Layanan) ─────────────
export const CALCULATOR_BASE_OPTIONS: Record<
  string,
  { name: string; label: string; desc: string; base: string; price: number; days: string }
> = {
  aplikasi_custom: {
    name: "Aplikasi Custom (Web)",
    label: "Aplikasi Web Custom & Sistem Informasi",
    desc: "Sistem operasional, alur custom & multi-role RBAC",
    base: "Mulai 999rb",
    price: 999000,
    days: "1–3 Minggu",
  },
  mobile_app: {
    name: "Aplikasi Custom (Mobile)",
    label: "Aplikasi Mobile Custom (Flutter/Android)",
    desc: "Aplikasi mobile kustom, terhubung API & cloud",
    base: "Mulai 1.49jt",
    price: 1499000,
    days: "2–4 Minggu",
  },
  api_backend: {
    name: "Jasa API & Backend",
    label: "REST API & Backend Architecture",
    desc: "RESTful API modular, database & payment gateway",
    base: "Mulai 899rb",
    price: 899000,
    days: "1–2 Minggu",
  },
  web_instansi: {
    name: "Web Instansi & Bisnis",
    label: "Web Instansi, Sekolah & Bisnis (Siap Online)",
    desc: "Website resmi, profil sekolah/dinas & usaha siap online",
    base: "Mulai 499rb",
    price: 499000,
    days: "3–7 Hari Kerja",
  },
  fix_error: {
    name: "Troubleshoot & Fix Bug",
    label: "Troubleshoot & Optimasi Sistem",
    desc: "Perbaikan bug, error query, revisi modul",
    base: "Mulai 150rb",
    price: 150000,
    days: "1–3 Hari Kerja",
  },
};

export const CALCULATOR_ADDON_OPTIONS: Record<
  string,
  { label: string; price: number; priceFormatted: string }
> = {
  payment_gateway: {
    label: "Integrasi Payment Gateway Otomatis (Midtrans / Xendit)",
    price: 250000,
    priceFormatted: "+Rp 250rb",
  },
  wa_gateway: {
    label: "Integrasi Notifikasi WhatsApp Gateway Otomatis",
    price: 200000,
    priceFormatted: "+Rp 200rb",
  },
  complex_logic: {
    label: "Algoritma Khusus & Logika Alur Kompleks",
    price: 200000,
    priceFormatted: "+Rp 200rb",
  },
  multi_role: {
    label: "Sistem Hak Akses Berjenjang (Multi-Role RBAC)",
    price: 200000,
    priceFormatted: "+Rp 200rb",
  },
  export_pdf: {
    label: "Modul Ekspor Laporan Otomatis (PDF & Excel)",
    price: 150000,
    priceFormatted: "+Rp 150rb",
  },
  setup_dampingan: {
    label: "Dokumentasi Lengkap & Pendampingan Deployment",
    price: 150000,
    priceFormatted: "+Rp 150rb",
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
    a: "Sangat bisa. Justru itu alasan saya menyediakan paket Penyelamat Revisi & Fix Error (Mulai Rp150.000). Kirim saja source code lamamu untuk saya cek dulu kerusakannya secara gratis. Kalau memang masih layak pakai dan cuma butuh benerin bug atau tambah 1–2 fitur penyesuaian, Anda nggak perlu buang uang buat bangun ulang dari nol.",
  },
  {
    q: "Bagaimana jika tim kami atau stakeholder butuh memahami alur kodingannya?",
    a: "ecoDigital mengutamakan transparansi penuh. Kami bukan pengembang yang cuma kirim file .ZIP lalu hilang kontak. Setiap serah terima proyek sistem baru sudah mencakup dokumentasi arsitektur, panduan deployment, dan skema database lengkap. Kodenya terstruktur modular sehingga mudah dipahami dan dikembangkan lanjut oleh tim internal Anda.",
  },
  {
    q: "Berapa lama proses pengerjaannya? Bisa bantu kejar deadline yang sudah mepet?",
    a: "Durasi pengerjaan menyesuaikan tingkat kerumitan: Fix Error / Tambah Fitur Ringan (1–3 hari beres), Landing Page / Web Standar (3–7 hari kerja), dan Sistem Informasi / Aplikasi Custom (1–3 minggu). Infokan jadwal deadline-mu di awal chat supaya kita bisa memprioritaskan modul utamanya agar siap didemokan tepat waktu.",
  },
  {
    q: "Apa saja yang bakal saya dapatkan saat proyek selesai?",
    a: "Komplit tanpa ada kode yang dikunci atau dienkripsi: Berkas kode sumber asli yang terstruktur rapi, file database lengkap (.sql), panduan deployment sampai sistem jalan normal di environment Anda (localhost / VPS / Android), link live preview, serta garansi perbaikan teknis.",
  },
  {
    q: "Gimana kalau setelah aplikasi jadi, tiba-tiba ada penyesuaian atau revisi fitur?",
    a: "Semua paket sudah dilindungi Garansi Revisi. Selama revisi tersebut masih berada di dalam kesepakatan alur fitur awal atau perbaikan bug tampilan/fungsi, akan kami selesaikan gratis tanpa biaya tambahan. Namun, jika ada penambahan fitur/modul baru di luar kesepakatan awal, biayanya tinggal menyesuaikan paket tambah fitur terjangkau.",
  },
  {
    q: "Sistem pembayarannya gimana? Apakah uang saya aman?",
    a: "Transparan dan dibayar bertahap sesuai progres. Khusus Paket Fix Error Ringan: Saya perbaiki dulu error-nya di laptop saya, lalu saya kirimkan bukti video/screen record bahwa fitur sudah berjalan normal; setelah kamu lihat buktinya beres, baru lakukan pembayaran dan file dikirim. Pembuatan Sistem Baru: Cukup bayar DP 50% untuk mulai pengerjaan (progres bisa dipantau lewat link live preview), dan pelunasan 50% sisanya baru dilakukan setelah sistem selesai didemokan.",
  },
];

