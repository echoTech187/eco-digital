"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  WhatsappIcon,
  NewTwitterIcon,
  Facebook01Icon,
  InstagramIcon,
  ShieldCheckIcon,
  LaptopProgrammingIcon,
  ArrowDown01Icon,
  Mortarboard01Icon,
  Building03Icon,
  Rocket01Icon,
  Car01Icon,
  SmartPhone01Icon,
  Briefcase01Icon,
  KanbanIcon,
  School01Icon,
  City01Icon,
  Analytics01Icon,
  ShoppingBag01Icon,
  Search01Icon,
  ArrowUpRight01Icon,
  ArrowRight01Icon,
  Settings02Icon,
  CreditCardIcon,
  Wrench01Icon,
  FireIcon,
  Cancel01Icon,
  CheckmarkCircle01Icon,
  Globe02Icon,
  CodeIcon,
  Layers01Icon,
  ServerStack01Icon,
  Database01Icon,
  AiCloud01Icon,
  ApiIcon,
  Menu01Icon,
  FlashIcon,
  LockIcon,
} from "@hugeicons/core-free-icons";

import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import founderImg from "../../public/images/founder.png";
import logoMarkImg from "../../public/images/logo/logo-vertical-transparent.png";

// ─── WhatsApp Constants & Helpers ────────────────────────────────────────────
const WA_NUMBER = "6287875856918";
const WA_DISPLAY = "0878-7585-6918";

function getWaUrl(message?: string) {
  const defaultMsg =
    "Halo Mas (ecoDigital), saya mau konsultasi pembuatan website / aplikasi custom.";
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message || defaultMsg)}`;
}

// ─── Project Data Interface ──────────────────────────────────────────────────
type PortfolioCategory = "sistem_informasi" | "mobile" | "instansi" | "ecommerce";

interface ProjectItem {
  id: string;
  title: string;
  domain: string;
  categories: PortfolioCategory[];
  badge: string;
  desc: string;
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

const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: "simpelantas",
    title: "SIMPELANTAS",
    domain: "sipelantas.polresmojokerto.id",
    categories: ["instansi", "mobile"],
    badge: "Web Instansi & Mobile App",
    desc: "Sistem Informasi & Mobile App terpadu personel Satlantas Polres Mojokerto beserta Web Admin Console dan push notification real-time.",
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
      techStack: ["Flutter Mobile (Dart)", "PHP CodeIgniter 4", "RESTful API Architecture", "FCM & Geolocation", "MySQL"],
      deliverables: ["Full Source Code Mobile & Backend", "Database Schema .sql", "Buku Panduan Admin & Personel", "Garansi SLA Bug Fixing"],
    },
  },
  {
    id: "siapel",
    title: "SiApel",
    domain: "siapel.ecodigital.id",
    categories: ["sistem_informasi"],
    badge: "Sistem Informasi Presensi",
    desc: "Aplikasi presensi online berbasis geolokasi GPS (Geofencing), rekap kehadiran otomatis, dan dashboard manajemen jam kerja karyawan/pegawai.",
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

const TECH_STACK_ITEMS = [
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

// ─── Depth Bokeh 3-Blade Star Glyph ──────────────────────────────────────────
function PropellerStar({
  className,
  size = "20px",
  blur = 4,
}: {
  className?: string;
  size?: string;
  blur?: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute select-none ${className}`}
      style={{ filter: `blur(${blur}px)`, width: size, height: size }}
    >
      <Image
        src="/images/Star 3.png"
        alt=""
        fill
        priority
        unoptimized
        sizes="(max-width: 768px) 500px, (max-width: 1200px) 680px, 800px"
        className="object-cover"
      />
    </div>
  );
}

// ─── Realistic Application UI Screen Preview ─────────────────────────────────
function ProjectScreenPreview({ project }: { project: ProjectItem }) {
  switch (project.id) {
    case "simpelantas":
      return (
        <div className="relative z-10 rounded-xl border border-white/15 bg-black/60 p-2 backdrop-blur-md text-[10px]">
          <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1">
            <span className="flex items-center gap-1.5 font-bold text-white tracking-wider text-[9px]">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-ping" />
              RADAR SATLANTAS POLRES
            </span>
            <span className="rounded bg-blue-500/20 px-1.5 py-0.2 text-[8px] font-mono text-blue-300">
              GPS Active
            </span>
          </div>
          <div className="space-y-1 font-mono text-[8px]">
            <div className="flex items-center justify-between rounded bg-white/5 px-2 py-0.5 text-white/90">
              <span>Pos Karanglo Unit 01</span>
              <span className="text-emerald-400 font-semibold">● Patroli</span>
            </div>
            <div className="flex items-center justify-between rounded bg-white/5 px-2 py-0.5 text-white/90">
              <span>Laporan Tilang #048</span>
              <span className="text-cyan-300 font-semibold">● FCM Sync</span>
            </div>
          </div>
        </div>
      );

    case "siapel":
      return (
        <div className="relative z-10 rounded-xl border border-white/15 bg-black/60 p-2 backdrop-blur-md text-[10px]">
          <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1">
            <span className="flex items-center gap-1.5 font-bold text-white text-[9px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              VALIDASI GEOFENCING GPS
            </span>
            <span className="rounded bg-emerald-500/20 px-1.5 py-0.2 text-[8px] font-mono text-emerald-300">
              Radius: 18m (Valid)
            </span>
          </div>
          <div className="flex items-center justify-between rounded bg-white/5 px-2 py-1 text-[8px] font-mono">
            <div>
              <div className="text-white font-semibold">Selfie AI Face-Match 98%</div>
              <div className="text-white/60">07:54 WIB • Tepat Waktu</div>
            </div>
            <span className="text-emerald-400 font-bold border border-emerald-400/40 px-1.5 py-0.5 rounded bg-emerald-950/40">
              ✓ Hadir
            </span>
          </div>
        </div>
      );

    case "eloker":
      return (
        <div className="relative z-10 rounded-xl border border-white/15 bg-black/60 p-2 backdrop-blur-md text-[10px]">
          <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1">
            <span className="font-bold text-white text-[9px]">KANBAN PIPELINE ATS</span>
            <span className="rounded bg-purple-500/20 px-1.5 py-0.2 text-[8px] font-mono text-purple-300">
              34 Pelamar
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-[8px] font-mono text-center">
            <div className="rounded bg-white/5 p-1">
              <span className="text-white/50 block text-[7px]">Applied</span>
              <span className="font-bold text-white">24</span>
            </div>
            <div className="rounded bg-purple-950/50 border border-purple-400/30 p-1">
              <span className="text-purple-300 block text-[7px]">Interview</span>
              <span className="font-bold text-white">8</span>
            </div>
            <div className="rounded bg-emerald-950/50 border border-emerald-400/30 p-1">
              <span className="text-emerald-300 block text-[7px]">Offered</span>
              <span className="font-bold text-white">2</span>
            </div>
          </div>
        </div>
      );

    case "projex":
      return (
        <div className="relative z-10 rounded-xl border border-white/15 bg-black/60 p-2 backdrop-blur-md text-[10px]">
          <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1">
            <span className="font-bold text-white text-[9px]">SPRINT VELOCITY #14</span>
            <span className="text-[8px] font-mono text-rose-300">85% Selesai</span>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 w-full rounded-full bg-white/15 overflow-hidden">
              <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-rose-500 to-amber-400" />
            </div>
            <div className="flex items-center justify-between text-[7.5px] font-mono text-white/70">
              <span>Backlog: 42</span>
              <span>In Progress: 6</span>
              <span className="text-emerald-400 font-semibold">Done: 36</span>
            </div>
          </div>
        </div>
      );

    case "smk":
      return (
        <div className="relative z-10 rounded-xl border border-white/15 bg-black/60 p-2 backdrop-blur-md text-[10px]">
          <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1">
            <span className="font-bold text-white text-[9px]">PORTAL NILAI & PPDB LMS</span>
            <span className="rounded bg-cyan-500/20 px-1.5 py-0.2 text-[8px] font-mono text-cyan-300">
              Kurikulum Merdeka
            </span>
          </div>
          <div className="space-y-1 font-mono text-[8px]">
            <div className="flex items-center justify-between rounded bg-white/5 px-2 py-0.5 text-white/90">
              <span>Pemrograman Web (XII RPL)</span>
              <span className="font-bold text-emerald-400">94 (A)</span>
            </div>
            <div className="flex items-center justify-between rounded bg-white/5 px-2 py-0.5 text-white/90">
              <span>Pendaftar PPDB Online</span>
              <span className="font-bold text-cyan-300">142 Siswa</span>
            </div>
          </div>
        </div>
      );

    case "simopmas":
      return (
        <div className="relative z-10 rounded-xl border border-white/15 bg-black/60 p-2 backdrop-blur-md text-[10px]">
          <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1">
            <span className="font-bold text-white text-[9px]">PELAYANAN SURAT WARGA</span>
            <span className="rounded bg-amber-500/20 px-1.5 py-0.2 text-[8px] font-mono text-amber-300">
              QR Signature
            </span>
          </div>
          <div className="flex items-center justify-between rounded bg-white/5 px-2 py-1 text-[8px] font-mono">
            <div>
              <div className="text-white font-semibold">SKU #2026/04/019</div>
              <div className="text-white/60">M. Ridwan (351608...)</div>
            </div>
            <span className="text-emerald-400 font-bold border border-emerald-400/40 px-1.5 py-0.5 rounded bg-emerald-950/40">
              ✓ ACC Kades
            </span>
          </div>
        </div>
      );

    case "spk-ahp-topsis":
      return (
        <div className="relative z-10 rounded-xl border border-white/15 bg-black/60 p-2 backdrop-blur-md text-[10px]">
          <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1">
            <span className="font-bold text-white text-[9px]">MATRIKS KEPUTUSAN SPK</span>
            <span className="rounded bg-teal-500/20 px-1.5 py-0.2 text-[8px] font-mono text-teal-300">
              CR: 0.041 (Valid)
            </span>
          </div>
          <div className="space-y-1 font-mono text-[8px]">
            <div className="flex items-center justify-between rounded bg-white/5 px-2 py-0.5 text-white/80">
              <span>Bobot Kriteria: C1(0.4) C2(0.35)</span>
              <span className="text-white/50">AHP</span>
            </div>
            <div className="flex items-center justify-between rounded bg-emerald-950/40 border border-emerald-400/30 px-2 py-0.5 text-emerald-300">
              <span>Rank #1: Alternatif A3</span>
              <span className="font-bold">V = 0.892</span>
            </div>
          </div>
        </div>
      );

    case "pos-umkm-wa":
      return (
        <div className="relative z-10 rounded-xl border border-white/15 bg-black/60 p-2 backdrop-blur-md text-[10px]">
          <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1">
            <span className="font-bold text-white text-[9px]">KASIR RETAIL MULTI-CABANG</span>
            <span className="rounded bg-emerald-500/20 px-1.5 py-0.2 text-[8px] font-mono text-emerald-300">
              QRIS BCA Lunas
            </span>
          </div>
          <div className="flex items-center justify-between rounded bg-white/5 px-2 py-1 text-[8px] font-mono">
            <div>
              <div className="text-white font-semibold">Total: Rp 148.500 (3 item)</div>
              <div className="text-white/60">Order #8921 • Meja 04</div>
            </div>
            <span className="text-emerald-400 font-bold border border-emerald-400/40 px-1.5 py-0.5 rounded bg-emerald-950/40">
              ✓ Struk WA Sent
            </span>
          </div>
        </div>
      );

    default:
      return null;
  }
}

// ─── Main Landing Page Component ─────────────────────────────────────────────
export default function Home() {
  // Interactive State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Cost Calculator State
  const [calcProjectType, setCalcProjectType] = useState<string>("skripsi");
  const [calcAddons, setCalcAddons] = useState<string[]>([
    "bedah_kode",
    "spk_algo",
  ]);

  // Quick Consultation Form State
  const [formName, setFormName] = useState("");
  const [formWa, setFormWa] = useState("");
  const [formType, setFormType] = useState("Fix Error & Tambah Fitur");
  const [formNotes, setFormNotes] = useState("");

  // Filtered Portfolio Projects
  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((p) =>
      p.categories.includes(activeCategory as PortfolioCategory)
    );
  }, [activeCategory]);

  // Cost Calculator Calculations
  const calculatedResult = useMemo(() => {
    const basePrices: Record<string, { label: string; price: number; days: string }> = {
      fix_error: {
        label: "Penyelamat Revisi & Fix Error",
        price: 150000,
        days: "1–3 Hari Kerja",
      },
      skripsi: {
        label: "Bangun Web / Sistem Baru (Reguler / TA)",
        price: 499000,
        days: "3–7 Hari Kerja",
      },
      umkm: {
        label: "Website Profil UMKM / Bisnis",
        price: 499000,
        days: "3–7 Hari Kerja",
      },
      custom_admin: {
        label: "Sistem Informasi & Dashboard Admin Custom",
        price: 999000,
        days: "1–3 Minggu",
      },
      mobile_app: {
        label: "Aplikasi Mobile Android (Flutter)",
        price: 1499000,
        days: "2–4 Minggu",
      },
    };

    const addonPrices: Record<string, { label: string; price: number }> = {
      spk_algo: {
        label: "Algoritma SPK (AHP, TOPSIS, SAW, KNN)",
        price: 200000,
      },
      bedah_kode: {
        label: "Video Bedah Kode & Sesi Bimbingan 1-on-1",
        price: 150000,
      },
      domain_hosting: {
        label: "Domain (.com/.id) & Cloud Hosting Siap Online 1 Tahun",
        price: 250000,
      },
      wa_gateway: {
        label: "Integrasi Notifikasi WhatsApp Gateway Otomatis",
        price: 200000,
      },
      export_pdf: {
        label: "Modul Ekspor Laporan Otomatis (PDF & Excel)",
        price: 150000,
      },
      multi_role: {
        label: "Sistem Hak Akses Berjenjang (Multi-Role RBAC)",
        price: 200000,
      },
    };

    const base = basePrices[calcProjectType] || basePrices.skripsi;
    let total = base.price;
    const selectedAddonLabels: string[] = [];

    calcAddons.forEach((id) => {
      if (addonPrices[id]) {
        total += addonPrices[id].price;
        selectedAddonLabels.push(addonPrices[id].label);
      }
    });

    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(total);

    const waText = `Halo Mas (ecoDigital), saya baru coba hitung simulasi biaya di website:
- Jenis Proyek: ${base.label}
- Fitur Tambahan: ${selectedAddonLabels.length > 0 ? selectedAddonLabels.join(", ") : "Tidak ada"}
- Estimasi Kasar di Web: ${formattedPrice}
Boleh diskusi lebih lanjut untuk detail alur dan pengerjaannya?`;

    return {
      label: base.label,
      totalPrice: formattedPrice,
      days: base.days,
      waUrl: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waText)}`,
      addonLabels: selectedAddonLabels,
    };
  }, [calcProjectType, calcAddons]);

  // Handle Quick Form Submission
  const handleQuickFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo Mas (ecoDigital), kenalin saya ${formName || "Klien"}.
Saya mau konsultasi untuk kebutuhan: ${formType}.
Detail singkatnya: ${formNotes || "Mohon info ketersediaan & jadwal diskusi."}
Kira-kira bisa dibantu? Terima kasih!`;

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="relative min-h-screen w-full bg-[#060A14] text-white selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1: HEADER / NAVBAR (Sticky di Atas + Mobile Nav)
          ═══════════════════════════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#060A14]/90 backdrop-blur-xl transition-all">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-14">
          
          {/* Left: Brand Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src={logoMarkImg}
              alt="ecoDigital"
              width={320}
              height={100}
              priority
              loading="eager"
              unoptimized
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-md"
            />
          </Link>

          {/* Center: Clean Navigation Links */}
          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
            <Link
              href="#layanan"
              className="text-xs font-semibold uppercase tracking-wider text-white/80 transition-colors hover:text-emerald-300"
            >
              Layanan
            </Link>
            <Link
              href="#portofolio"
              className="text-xs font-semibold uppercase tracking-wider text-white/80 transition-colors hover:text-emerald-300"
            >
              Portofolio
            </Link>
            <Link
              href="#keunggulan"
              className="text-xs font-semibold uppercase tracking-wider text-white/80 transition-colors hover:text-emerald-300"
            >
              Keunggulan
            </Link>
            <Link
              href="#cara-kerja"
              className="text-xs font-semibold uppercase tracking-wider text-white/80 transition-colors hover:text-emerald-300"
            >
              Alur Kerja
            </Link>
            <Link
              href="#paket-harga"
              className="text-xs font-semibold uppercase tracking-wider text-white/80 transition-colors hover:text-emerald-300"
            >
              Paket Harga
            </Link>
            <Link
              href="#kalkulator-biaya"
              className="text-xs font-semibold uppercase tracking-wider text-emerald-400 transition-colors hover:text-emerald-300 flex items-center gap-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              Simulasi Biaya
            </Link>
            <Link
              href="#faq"
              className="text-xs font-semibold uppercase tracking-wider text-white/80 transition-colors hover:text-emerald-300"
            >
              FAQ
            </Link>
          </nav>

          {/* Right: Direct High-Converting WhatsApp CTA Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={getWaUrl(
                "Halo Mas (ecoDigital), saya mau konsultasi pembuatan website / sistem."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:from-emerald-400 hover:to-teal-400 hover:scale-105 active:scale-95"
            >
              <HugeiconsIcon icon={WhatsappIcon} size={16} />
              <span>Chat Developer</span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? (
                <HugeiconsIcon icon={Cancel01Icon} size={20} />
              ) : (
                <HugeiconsIcon icon={Menu01Icon} size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-white/10 bg-[#060A14]/98 px-6 py-6 backdrop-blur-2xl lg:hidden animate-fade-in">
            <nav className="flex flex-col gap-4 text-sm font-semibold">
              <Link
                href="#layanan"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-white/80 hover:text-emerald-400"
              >
                Layanan
              </Link>
              <Link
                href="#portofolio"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-white/80 hover:text-emerald-400"
              >
                Portofolio
              </Link>
              <Link
                href="#keunggulan"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-white/80 hover:text-emerald-400"
              >
                Keunggulan
              </Link>
              <Link
                href="#cara-kerja"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-white/80 hover:text-emerald-400"
              >
                Alur Kerja
              </Link>
              <Link
                href="#paket-harga"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-white/80 hover:text-emerald-400"
              >
                Paket Harga (Mulai Rp150rb)
              </Link>
              <Link
                href="#kalkulator-biaya"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1.5"
              >
                <HugeiconsIcon icon={FlashIcon} size={15} />
                <span>Simulasi Biaya</span>
              </Link>
              <Link
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-white/80 hover:text-emerald-400"
              >
                FAQ
              </Link>
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                <a
                  href={getWaUrl("Halo Mas (ecoDigital), saya mau konsultasi pembuatan website / sistem.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-xs font-bold text-white shadow"
                >
                  <HugeiconsIcon icon={WhatsappIcon} size={16} />
                  <span>Chat Developer ({WA_DISPLAY})</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2: HERO SECTION (Layar Pertama Saat Web Dibuka)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[calc(100vh-80px)] w-full flex-col justify-between overflow-hidden bg-[#060A14]">
        {/* Ambient Radial Atmosphere (Seamless Mesh Glow) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-28 top-1/4 h-[600px] w-[600px] rounded-full bg-emerald-500/20 blur-[140px]" />
          <div className="absolute -right-28 top-1/4 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[140px]" />
          <div className="absolute left-1/2 bottom-10 -translate-x-1/2 h-[350px] w-[600px] rounded-full bg-emerald-950/25 blur-[120px]" />

          {/* Decorative Stars */}
          <PropellerStar className="left-[8%] top-[55%] h-20 w-20" size="75px" blur={0} />
          <PropellerStar className="left-[25%] top-[75%] h-28 w-28" size="45px" blur={1} />
          <PropellerStar className="right-[28%] top-[25%] h-32 w-32" size="65px" blur={0} />
          <PropellerStar className="right-[10%] top-[45%] h-16 w-16" size="25px" blur={2} />
        </div>

        {/* Hero Interactive Stage (Headline & CTA di Kiri, Foto di Kanan) */}
        <div className="relative z-20 flex flex-1 items-center px-6 sm:px-10 lg:px-14 xl:px-18 py-8 lg:py-6">
          <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Headline, Sub-headline, Dual CTA, & Explore Button */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center text-left">
              <AnimateOnScroll preset="fade-right" duration={0.6} immediate>
                {/* Status Eyebrow Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300 backdrop-blur-md shadow-lg shadow-emerald-950/40 w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                  </span>
                  <span>TERSEDIA UNTUK PROYEK BARU &amp; PERBAIKAN KILAT</span>
                </div>

                {/* Headline Utama Sesuai Dokumen Blueprint */}
                <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[48px] font-black tracking-tight text-white leading-[1.18]">
                  Ngoding Mentok atau Mau Bikin Sistem dari Nol?{" "}
                  <span className="block sm:inline bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                    Kita Beresin Bareng Sampai Jalan.
                  </span>
                </h1>

                {/* Sub-headline Blueprint */}
                <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-white/80">
                  Nggak perlu pusing hadapi <em>error</em> sendirian atau bayar mahal ke agensi. Di <strong>ecoDigital</strong>, kamu diskusi langsung sama <em>developer</em>-nya. Mulai dari benerin <em>bug</em> H-3 bimbingan, bangun aplikasi Tugas Akhir, sampai sistem operasional sekolah &amp; bisnis—semua dikerjakan rapi, bisa dipantau <em>live</em>, dan dibimbing sampai kamu paham luar-dalam.
                </p>

                {/* Call to Action (CTA) Ganda */}
                <div className="mt-6 flex flex-wrap items-center gap-3.5">
                  <a
                    href={getWaUrl(
                      "Halo Mas (ecoDigital), saya mau chat dan diskusi gratis untuk kebutuhan kodingan / sistem saya."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-950/50 transition-all hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <HugeiconsIcon icon={WhatsappIcon} size={18} />
                    <span>Chat &amp; Diskusi Gratis via WA</span>
                  </a>

                  <Link
                    href="#portofolio"
                    className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white/90 backdrop-blur-xl transition-all hover:bg-white/20 hover:text-white active:scale-[0.98]"
                  >
                    <span>Coba Live Demo Karya Saya ↓</span>
                  </Link>
                </div>

                {/* Badge Kecil di Bawah Tombol */}
                <div className="mt-4 flex items-center gap-2 text-xs text-white/70">
                  <span className="text-amber-400 font-bold">⚡</span>
                  <span className="font-medium">
                    Respon cepat via WhatsApp • Diskusi alur &amp; cek error gratis
                  </span>
                </div>

                {/* Tombol Scroll untuk Eksplorasi */}
                <div className="mt-8 flex items-center">
                  <Link
                    href="#layanan"
                    className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur-md transition-all hover:border-emerald-400/50 hover:bg-white/10 hover:text-white active:scale-95"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-xs text-emerald-400 transition-transform group-hover:translate-y-0.5">
                      <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
                    </span>
                    <span>Scroll Untuk Eksplorasi</span>
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right Column: Founder Photo & Mockup Preview (Visual Asli) */}
            <div className="lg:col-span-5 xl:col-span-5 relative flex items-end justify-center lg:justify-end">
              <AnimateOnScroll
                preset="fade-left"
                duration={0.7}
                immediate
                className="relative w-full flex items-end justify-center lg:justify-end"
              >
                {/* Soft Radial Ambient Behind Founder */}
                <div className="pointer-events-none absolute h-[380px] w-[380px] sm:h-[440px] sm:w-[440px] rounded-full bg-gradient-to-tr from-emerald-500/25 via-blue-600/30 to-cyan-400/25 blur-[90px] -z-10" />

                {/* Floating Badge 1: Direct Developer (Tanpa Perantara) */}
                <div className="hidden sm:flex absolute -left-4 top-16 z-20 items-center gap-2.5 rounded-2xl border border-white/20 bg-black/60 px-4 py-2.5 shadow-xl backdrop-blur-xl animate-float">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
                    <HugeiconsIcon icon={LaptopProgrammingIcon} size={18} />
                  </span>
                  <div>
                    <span className="block text-[11px] font-bold text-white">👨‍💻 Direct Developer</span>
                    <span className="block text-[9px] text-emerald-300">Tanpa Perantara</span>
                  </div>
                </div>

                {/* Floating Badge 2: 100% Source Code + Video Bedah Kode */}
                <div className="hidden sm:flex absolute -right-2 bottom-24 z-20 items-center gap-2.5 rounded-2xl border border-white/20 bg-black/60 px-4 py-2.5 shadow-xl backdrop-blur-xl animate-float-delayed">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                    <HugeiconsIcon icon={ShieldCheckIcon} size={18} />
                  </span>
                  <div>
                    <span className="block text-[11px] font-bold text-white">🎥 100% Source Code</span>
                    <span className="block text-[9px] text-cyan-300">+ Video Bedah Kode</span>
                  </div>
                </div>

                {/* Founder Image with Transparent Fade-Out at Bottom */}
                <div
                  className="relative h-[480px] sm:h-[540px] lg:h-[600px] xl:h-[640px] w-full max-w-[380px] sm:max-w-[420px] aspect-[1397/2485]"
                  style={{
                    maskImage:
                      "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.3) 5%, rgba(0,0,0,0.9) 15%, black 25%, black 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.3) 5%, rgba(0,0,0,0.9) 15%, black 25%, black 100%)",
                  }}
                >
                  <Image
                    src={founderImg}
                    alt="Founder ecoDigital"
                    fill
                    priority
                    loading="eager"
                    unoptimized
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 450px, 500px"
                    className="object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
                  />
                </div>
              </AnimateOnScroll>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION: TECH STACK RUNNING MARQUEE (Hugeicons Powered)
          ═══════════════════════════════════════════════════════════════════════ */}
      <div className="relative z-25 w-full overflow-hidden border-y border-white/10 bg-[#050913]/95 py-3.5 backdrop-blur-xl">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
            {TECH_STACK_ITEMS.concat(TECH_STACK_ITEMS).map((t, idx) => {
              const IconComp = t.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/80 transition-colors hover:border-[#10B981] hover:text-white"
                >
                  <span className="text-emerald-400">
                    <HugeiconsIcon icon={IconComp} size={15} />
                  </span>
                  <span>{t.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3: LAYANAN (APA YANG BISA DIBANTU?)
          ═══════════════════════════════════════════════════════════════════════ */}
      <div id="layanan" className="relative z-20 w-full bg-[#060A14] px-6 py-16 lg:px-14 scroll-mt-20">
        <div className="mx-auto max-w-6xl">
          <AnimateOnScroll preset="fade-up" className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">
              APA YANG BISA DIBANTU?
            </span>
            <h2 className="mt-3 text-3xl font-black text-white lg:text-4xl">
              Masuk di Kondisi Apa Pun, Pilih Sesuai Kebutuhanmu
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
              Entah kamu baru punya ide kasar di kertas, atau sudah punya kodingan tapi berantakan dan <em>error</em> terus—saya siap masuk bantu beresin.
            </p>
          </AnimateOnScroll>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1: Klinik Koding: Fix Error & Tambah Fitur */}
            <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/50 hover:bg-white/[0.08]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-[#10B981]">
                  <HugeiconsIcon icon={Wrench01Icon} size={28} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">
                  Klinik Koding: Fix Error &amp; Tambah Fitur
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/70">
                  Kodingan lama macet, ditinggal <em>developer</em> sebelumnya, atau mendadak disuruh dosen tambah fitur? Nggak perlu bikin ulang dari nol.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-white/80">
                  <li className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-[#10B981] shrink-0" />
                    <span>Perbaikan bug/error PHP, Laravel, JS, Flutter, dll.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-[#10B981] shrink-0" />
                    <span>Tambah modul/fitur baru sesuai catatan revisi.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-[#10B981] shrink-0" />
                    <span>Redesign tampilan UI biar lebih modern &amp; rapi.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={getWaUrl(
                    "Halo Mas (ecoDigital), saya mau konsultasi perbaikan error / tambah fitur kodingan."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] hover:from-emerald-400 hover:to-teal-400"
                >
                  <HugeiconsIcon icon={WhatsappIcon} size={16} />
                  <span>Beresin Error Sekarang →</span>
                </a>
              </div>
            </div>

            {/* Card 2: Partner Sistem Tugas Akhir, SPK & Riset */}
            <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.08]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                  <HugeiconsIcon icon={Mortarboard01Icon} size={28} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">
                  Partner Sistem Tugas Akhir, SPK &amp; Riset
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/70">
                  Bikin aplikasi web/mobile untuk penelitian atau skripsi yang nggak cuma sekadar jalan, tapi juga bikin kamu siap menjawab pertanyaan penguji.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-white/80">
                  <li className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-blue-400 shrink-0" />
                    <span>Alur program &amp; database sesuai flowchart kamu.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-blue-400 shrink-0" />
                    <span>Bebas request metode (SPK, Sistem Informasi, dll.).</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-blue-400 shrink-0" />
                    <span>Bonus: Video penjelasan alur kode &amp; bimbingan 1-on-1.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={getWaUrl(
                    "Halo Mas (ecoDigital), saya mau konsultasi pembuatan sistem Tugas Akhir / SPK / riset skripsi."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] hover:from-emerald-400 hover:to-teal-400"
                >
                  <HugeiconsIcon icon={WhatsappIcon} size={16} />
                  <span>Konsultasi Judul / Sistem →</span>
                </a>
              </div>
            </div>

            {/* Card 3: Aplikasi Sekolah, Instansi & Bisnis UMKM */}
            <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition-all duration-300 hover:border-teal-500/50 hover:bg-white/[0.08]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-400">
                  <HugeiconsIcon icon={Building03Icon} size={28} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">
                  Aplikasi Sekolah, Instansi &amp; Bisnis UMKM
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/70">
                  Bangun sistem operasional yang siap pakai di lapangan—bukan sekadar <em>template</em> pajangan.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-white/80">
                  <li className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-teal-400 shrink-0" />
                    <span>Sistem informasi sekolah, BK, &amp; pelayanan publik.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-teal-400 shrink-0" />
                    <span>Website profil usaha, katalog, hingga kasir/inventori.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-teal-400 shrink-0" />
                    <span>Langsung online (termasuk setup domain/hosting/Vercel).</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={getWaUrl(
                    "Halo Mas (ecoDigital), saya mau diskusi pembuatan aplikasi sekolah / instansi / bisnis UMKM."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] hover:from-emerald-400 hover:to-teal-400"
                >
                  <HugeiconsIcon icon={WhatsappIcon} size={16} />
                  <span>Diskusi Sistem Bisnis →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4: SHOWCASE PORTOFOLIO (BUKTI KARYA NYATA)
          ═══════════════════════════════════════════════════════════════════════ */}
      <div id="portofolio" className="relative z-20 w-full bg-[#060A14] px-6 py-16 lg:px-14 scroll-mt-20">
        <div className="mx-auto max-w-6xl">
          <AnimateOnScroll preset="fade-up" className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">
              BUKTI KARYA NYATA
            </span>
            <h2 className="mt-3 text-3xl font-black text-white lg:text-4xl">
              Jangan Percaya Janji Manis—Klik &amp; Coba Sendiri Sistem yang Sudah Live
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
              Semua proyek di bawah ini asli hasil kodingan sendiri dan sudah di-<em>deploy</em>. Silakan klik tombol <em>Live Demo</em> untuk mencoba tampilannya langsung dari HP atau laptopmu.
            </p>
          </AnimateOnScroll>

          {/* Category Filter Tabs */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "Semua Proyek", icon: Layers01Icon },
              { id: "sistem_informasi", label: "Sistem Informasi", icon: LaptopProgrammingIcon },
              { id: "mobile", label: "Aplikasi Mobile", icon: SmartPhone01Icon },
              { id: "instansi", label: "Web Instansi", icon: Building03Icon },
              { id: "ecommerce", label: "E-Commerce", icon: ShoppingBag01Icon },
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 scale-105"
                      : "border border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <HugeiconsIcon icon={TabIcon} size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Portfolio Grid (Flexbox Center for Perfect Row-3 Symmetry) */}
          <div className="flex flex-wrap justify-center gap-6">
            {filteredProjects.map((p) => {
              const CardMockupIcon = p.mockupIcon;
              return (
                <div
                  key={p.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#10B981]/50 hover:bg-white/[0.08] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm lg:max-w-none"
                >
                  {/* Simulated Browser Header Frame */}
                  <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-0.5 text-[10px] text-white/50">
                      <HugeiconsIcon icon={LockIcon} size={11} className="text-[#10B981]" />
                      <span className="truncate max-w-[150px]">{p.domain}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-400">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                      Live
                    </span>
                  </div>

                  {/* Visual UI Mockup Screen Header with Authentic UI Preview */}
                  <div
                    className={`relative h-44 w-full overflow-hidden bg-gradient-to-br ${p.mockupGradient} p-3 flex flex-col justify-between border-b border-white/10`}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
                        backgroundSize: "12px 12px",
                      }}
                    />
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/50 text-white shadow backdrop-blur-md">
                          <HugeiconsIcon icon={CardMockupIcon} size={16} />
                        </span>
                        <span className="text-xs font-bold text-white drop-shadow">
                          {p.title}
                        </span>
                      </div>
                      <span className="rounded-full border border-white/20 bg-black/40 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white/90 backdrop-blur-md">
                        {p.badge}
                      </span>
                    </div>

                    {/* Authentic Domain-Specific Application UI Screen Preview */}
                    <ProjectScreenPreview project={p} />
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-white transition-colors group-hover:text-[#10B981]">
                        {p.title}
                      </h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                        {p.desc}
                      </p>

                      {/* Feature Badges */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.features.map((f, fi) => (
                          <span
                            key={fi}
                            className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/70"
                          >
                            <HugeiconsIcon icon={CheckmarkCircle01Icon} size={11} className="text-emerald-400" />
                            <span>{f}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Clean Action Buttons */}
                    <div className="mt-5 pt-3.5 border-t border-white/10">
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setSelectedProject(p)}
                          className="flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 py-2.5 px-3 text-xs font-semibold text-white/90 hover:bg-white/15 hover:text-white transition-all"
                        >
                          <HugeiconsIcon icon={Globe02Icon} size={14} className="text-emerald-400" />
                          <span>Coba Live Demo</span>
                        </button>
                        <a
                          href={getWaUrl(
                            `Halo Mas (ecoDigital), saya tertarik bikin sistem seperti ${p.title} (${p.domain}). Boleh minta estimasi alur dan biayanya?`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-2.5 px-3 text-xs font-bold text-white shadow-md shadow-emerald-950/40 transition-all hover:scale-[1.02] hover:from-emerald-400 hover:to-teal-400 active:scale-95"
                        >
                          <HugeiconsIcon icon={WhatsappIcon} size={14} />
                          <span>Bikin Kayak Gini</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Project Detail Interactive Modal (Hugeicons) ───────────────────────── */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-[#060A14] p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
            >
              <HugeiconsIcon icon={Cancel01Icon} size={18} />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-400">
                <HugeiconsIcon icon={selectedProject.mockupIcon} size={26} />
              </span>
              <div>
                <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  {selectedProject.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Overview */}
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-1.5">
                Ringkasan Arsitektur & Studi Kasus
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-white/80">
                {selectedProject.fullSpecs?.overview || selectedProject.desc}
              </p>
            </div>

            {/* Key Modules */}
            {selectedProject.fullSpecs?.keyModules && (
              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                  Fitur & Modul Utama
                </h4>
                <ul className="space-y-2 text-xs text-white/80">
                  {selectedProject.fullSpecs.keyModules.map((km, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{km}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Pills */}
            {selectedProject.fullSpecs?.techStack && (
              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">
                  Teknologi yang Digunakan
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.fullSpecs.techStack.map((ts, i) => (
                    <span
                      key={i}
                      className="rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/90"
                    >
                      {ts}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Clean Action Buttons */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={getWaUrl(
                  `Halo Mas (ecoDigital), saya tertarik memesan sistem yang serupa dengan portofolio ${selectedProject.title} (${selectedProject.domain}). Bisakah kita diskusikan alur dan biayanya?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-[1.01] hover:from-emerald-400 hover:to-teal-400 active:scale-98"
              >
                <HugeiconsIcon icon={WhatsappIcon} size={16} />
                <span>Diskusikan Sistem Serupa via WhatsApp</span>
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-all"
              >
                <span>Tutup</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5: KEUNGGULAN (STANDAR KERJA ECODIGITAL)
          ═══════════════════════════════════════════════════════════════════════ */}
      <div id="keunggulan" className="relative z-20 w-full bg-[#060A14] px-6 py-16 lg:px-14 scroll-mt-20">
        <div className="mx-auto max-w-6xl">
          <AnimateOnScroll preset="fade-up" className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">
              STANDAR KERJA ECODIGITAL
            </span>
            <h2 className="mt-3 text-3xl font-black text-white lg:text-4xl">
              Kenapa Ngoding Bareng ecoDigital Jauh Lebih Tenang?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
              Empat jaminan nyata supaya kamu nggak kena drama joki lepas tangan atau proyek mangkrak.
            </p>
          </AnimateOnScroll>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
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
            ].map((k, ki) => {
              const WhyUsIcon = k.icon;
              return (
                <div
                  key={ki}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/[0.08]"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-emerald-400">
                      <HugeiconsIcon icon={WhyUsIcon} size={28} />
                    </span>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-950/40 px-2 py-0.5 text-[9px] font-semibold text-emerald-300">
                      {k.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">{k.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    {k.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 6: ALUR PENGERJAAN (CARA KERJA ANTI-GHOSTING)
          ═══════════════════════════════════════════════════════════════════════ */}
      <div id="cara-kerja" className="relative z-20 w-full bg-[#060A14] px-6 py-16 lg:px-14 scroll-mt-20">
        <div className="mx-auto max-w-5xl text-center">
          <AnimateOnScroll preset="fade-up" className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">
              CARA KERJA ANTI-GHOSTING
            </span>
            <h2 className="mt-3 text-3xl font-black text-white lg:text-4xl">
              4 Langkah Simpel, Tanpa Birokrasi Ribet
            </h2>
            <p className="mt-2 text-sm text-white/60">
              Dari obrolan pertama di WhatsApp sampai aplikasi jalan di laptopmu.
            </p>
          </AnimateOnScroll>

          {/* Workflow Sequence with Connecting Progress Indicators */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {[
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
            ].map((s, si) => (
              <div
                key={s.step}
                className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-[#10B981]/40 hover:bg-white/[0.08]"
              >
                {/* Connecting Arrow for Desktop Workflow */}
                {si < 3 && (
                  <span className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 h-7 w-7 items-center justify-center rounded-full bg-emerald-950 border border-emerald-400/40 text-emerald-300 shadow-md">
                    <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-[#10B981]">
                    {s.step}
                  </span>
                  <span className="rounded-full bg-white/5 px-2 py-0.5 text-[9px] font-medium text-white/60">
                    {s.tag}
                  </span>
                </div>
                <h4 className="mt-3 text-sm font-bold text-white">
                  {s.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-white/60">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 7: ESTIMASI PAKET / SKEMA HARGA (HARGA TERBUKA & TRANSPARAN)
          ═══════════════════════════════════════════════════════════════════════ */}
      <div id="paket-harga" className="relative z-20 w-full bg-[#060A14] px-6 py-16 lg:px-14 scroll-mt-20">
        <div className="mx-auto max-w-6xl">
          <AnimateOnScroll preset="fade-up" className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">
              HARGA TERBUKA &amp; TRANSPARAN
            </span>
            <h2 className="mt-3 text-3xl font-black text-white lg:text-4xl">
              Pilih Paket Sesuai Kondisi Proyekmu Saat Ini
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/60">
              Nggak perlu takut kemahalan. Kalau cuma butuh benerin <em>error</em> sedikit, cukup ambil paket hemat mulai Rp150 ribuan.
            </p>
          </AnimateOnScroll>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Paket 1: Penyelamat Revisi & Fix Error */}
            <div className="relative rounded-[32px] border border-white/15 bg-white/5 p-7 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/80">
                  <HugeiconsIcon icon={Wrench01Icon} size={12} className="text-emerald-400" />
                  <span>Paket Fix Error &amp; Modul</span>
                </span>
                <h3 className="mt-4 text-xl font-black text-white">
                  Penyelamat Revisi &amp; Fix Error
                </h3>
                <p className="mt-2 text-xs font-semibold leading-relaxed text-emerald-300/90">
                  Cocok buat kodingan yang mentok <em>error</em>, benerin tampilan berantakan, atau tambah 1–2 fitur cepat.
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-xs text-white/40">Mulai dari</span>
                  <span className="text-2xl font-black text-white">Rp 150.000</span>
                </div>
                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6 text-xs text-white/80">
                  <li className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-emerald-400 shrink-0" />
                    <span>Cek sumber error/bug gratis di awal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-emerald-400 shrink-0" />
                    <span>Perbaikan fungsi / query database macet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-emerald-400 shrink-0" />
                    <span>Tambah fitur / modul revisi dosen</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-emerald-400 shrink-0" />
                    <span>Bayar setelah bukti error beres dikirim</span>
                  </li>
                </ul>
              </div>
              <a
                href={getWaUrl(
                  "Halo Mas (ecoDigital), saya mau tanya biaya fix error / revisi kodingan saya."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 py-3 text-xs font-bold text-white transition-all hover:bg-white/20 hover:scale-[1.02]"
              >
                <HugeiconsIcon icon={WhatsappIcon} size={16} />
                <span>Tanya Biaya Fix Error</span>
              </a>
            </div>

            {/* Paket 2: Bangun Web / Sistem Baru (Reguler) — Paling Banyak Dipilih */}
            <div className="relative rounded-[32px] border-2 border-emerald-400/40 bg-gradient-to-b from-emerald-950/30 via-white/[0.06] to-black/40 p-7 backdrop-blur-xl shadow-2xl shadow-emerald-950/30 flex flex-col justify-between">
              <span className="absolute -top-3.5 left-6 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-lg shadow-emerald-500/40">
                <HugeiconsIcon icon={FireIcon} size={12} className="text-amber-300" />
                <span>Paling Banyak Dipilih</span>
              </span>

              <div>
                <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#10B981]">
                  Paket Reguler Standar
                </span>
                <h3 className="mt-4 text-xl font-black text-white">
                  Bangun Web / Sistem Baru (Reguler)
                </h3>
                <p className="mt-2 text-xs font-semibold leading-relaxed text-emerald-300">
                  Cocok buat Tugas Akhir, SPK, Sistem Informasi standar, atau Landing Page UMKM siap online.
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-xs text-white/40">Mulai dari</span>
                  <span className="text-3xl font-black text-[#10B981]">Rp 499.000</span>
                </div>
                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6 text-xs text-white/80">
                  <li className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-[#10B981] shrink-0" />
                    <span>100% Custom sesuai alur/flowchart</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-[#10B981] shrink-0" />
                    <span>Desain responsif (rapi di HP &amp; Laptop)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-[#10B981] shrink-0" />
                    <span>Full Source Code &amp; Database lengkap</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-[#10B981] shrink-0" />
                    <span>Bonus: Video penjelasan kode &amp; bimbingan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-[#10B981] shrink-0" />
                    <span>Garansi revisi &amp; bug fixing</span>
                  </li>
                </ul>
              </div>
              <a
                href={getWaUrl(
                  "Halo Mas (ecoDigital), saya tertarik ambil Paket Reguler (mulai Rp499.000) untuk sistem / web saya."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#10B981] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#059669] hover:scale-[1.02]"
              >
                <HugeiconsIcon icon={WhatsappIcon} size={16} />
                <span>Ambil Paket Reguler</span>
              </a>
            </div>

            {/* Paket 3: Sistem Skala Penuh / Custom App */}
            <div className="relative rounded-[32px] border border-blue-500/30 bg-gradient-to-b from-blue-950/40 via-white/[0.05] to-black/40 p-7 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-400">
                  <HugeiconsIcon icon={Building03Icon} size={12} />
                  <span>Paket Enterprise &amp; Scale-Up</span>
                </span>
                <h3 className="mt-4 text-xl font-black text-white">
                  Sistem Skala Penuh / Custom App
                </h3>
                <p className="mt-2 text-xs font-semibold leading-relaxed text-cyan-300">
                  Cocok buat Aplikasi Sekolah/Instansi, Mobile App (Android), atau integrasi sistem kompleks.
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-2xl font-black text-blue-400">Penawaran Tertulis</span>
                  <span className="text-xs text-white/40">(fleksibel sesuai spek)</span>
                </div>
                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6 text-xs text-white/80">
                  <li className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-blue-400 shrink-0" />
                    <span>Web System + Mobile App (Flutter/Android)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-blue-400 shrink-0" />
                    <span>Integrasi Open API / Payment Gateway</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-blue-400 shrink-0" />
                    <span>Deployment ke Server / Cloud / Vercel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-blue-400 shrink-0" />
                    <span>Dokumentasi teknis &amp; maintenance berkala</span>
                  </li>
                </ul>
              </div>
              <a
                href={getWaUrl(
                  "Halo Mas (ecoDigital), saya ingin diskusi proyek custom untuk sistem skala penuh / aplikasi instansi."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-blue-500 hover:scale-[1.02]"
              >
                <HugeiconsIcon icon={WhatsappIcon} size={16} />
                <span>Diskusi Proyek Custom</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 8: SIMULASI & HITUNG ESTIMASI BIAYA PROYEK
          ═══════════════════════════════════════════════════════════════════════ */}
      <div id="kalkulator-biaya" className="relative z-20 w-full bg-[#060A14] px-6 py-16 lg:px-14 scroll-mt-20 border-t border-white/10">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll preset="fade-up" className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">
              SIMULASI &amp; HITUNG MANDIRI
            </span>
            <h2 className="mt-3 text-3xl font-black text-white lg:text-4xl">
              Masih Ragu Biayanya? Hitung Sendiri Estimasi Kasarnya di Sini
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-white/60">
              Klik jenis sistem dan centang fitur tambahan yang kamu butuhkan, lalu kirim hasilnya ke WA saya untuk negosiasi santai.
            </p>
          </AnimateOnScroll>

          <div className="rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-950/20 via-white/[0.04] to-blue-950/20 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
            
            {/* Step 1: Pilih Jenis Sistem */}
            <div>
              <label className="text-xs font-extrabold uppercase tracking-wider text-emerald-300 block mb-3">
                1. Pilih Kategori Sistem Anda:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { id: "fix_error", name: "Fix Error & Tambah Fitur", desc: "Perbaikan bug, error query, revisi", base: "Mulai 150rb" },
                  { id: "skripsi", name: "Bangun Web / TA / SPK Reguler", desc: "Custom alur, database & bimbingan", base: "Mulai 499rb" },
                  { id: "umkm", name: "Website Profil UMKM / Bisnis", desc: "Company profile resmi & WhatsApp", base: "Mulai 499rb" },
                  { id: "custom_admin", name: "Sistem Info & Dashboard Admin", desc: "Operasional kantor, multi-user RBAC", base: "Mulai 999rb" },
                  { id: "mobile_app", name: "Aplikasi Mobile Flutter", desc: "Android APK, backend API & cloud", base: "Mulai 1.49jt" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCalcProjectType(item.id)}
                    className={`text-left p-4 rounded-2xl border transition-all ${
                      calcProjectType === item.id
                        ? "border-emerald-400 bg-emerald-500/20 shadow-md shadow-emerald-500/20 scale-[1.01]"
                        : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.08]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">{item.name}</span>
                      <span className="text-[10px] text-emerald-400 font-semibold">{item.base}</span>
                    </div>
                    <p className="mt-1 text-[11px] text-white/60">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Pilih Fitur Tambahan */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <label className="text-xs font-extrabold uppercase tracking-wider text-cyan-300 block mb-3">
                2. Pilih Fitur &amp; Fasilitas Tambahan (Opsional):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: "spk_algo", label: "Algoritma SPK (AHP, TOPSIS, SAW, KNN)", price: "+Rp 200rb" },
                  { id: "bedah_kode", label: "Video Bedah Kode & Sesi Bimbingan 1-on-1", price: "+Rp 150rb" },
                  { id: "domain_hosting", label: "Domain Resmi (.com/.id) & Cloud Hosting Siap Online", price: "+Rp 250rb" },
                  { id: "wa_gateway", label: "Integrasi Notifikasi WhatsApp Gateway Otomatis", price: "+Rp 200rb" },
                  { id: "export_pdf", label: "Modul Ekspor Laporan Otomatis (PDF & Excel)", price: "+Rp 150rb" },
                  { id: "multi_role", label: "Sistem Hak Akses Berjenjang (Multi-Role RBAC)", price: "+Rp 200rb" },
                ].map((addon) => {
                  const isChecked = calcAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => {
                        if (isChecked) {
                          setCalcAddons(calcAddons.filter((a) => a !== addon.id));
                        } else {
                          setCalcAddons([...calcAddons, addon.id]);
                        }
                      }}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border text-left transition-all ${
                        isChecked
                          ? "border-cyan-400/60 bg-cyan-950/30 text-white"
                          : "border-white/10 bg-white/5 text-white/70 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`flex h-4 w-4 items-center justify-center rounded border text-[10px] ${
                          isChecked ? "border-cyan-400 bg-cyan-400 text-black font-bold" : "border-white/30"
                        }`}>
                          {isChecked && <HugeiconsIcon icon={CheckmarkCircle01Icon} size={12} className="text-black" />}
                        </span>
                        <span className="text-xs font-medium">{addon.label}</span>
                      </div>
                      <span className="text-[11px] font-bold text-cyan-300 ml-2 shrink-0">{addon.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Hasil Kalkulasi & Action CTA */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 bg-black/40 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 p-6 sm:p-8 rounded-b-3xl">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-white/50 block">
                  Estimasi Biaya Transparan:
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-black text-emerald-400">
                    {calculatedResult.totalPrice}
                  </span>
                  <span className="text-xs text-white/60">
                    • Estimasi: {calculatedResult.days}
                  </span>
                </div>
                <p className="text-[11px] text-white/50 mt-1">
                  *Garansi revisi sampai ACC &amp; full source code tanpa enkripsi.
                </p>
              </div>

              <a
                href={calculatedResult.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4 text-xs font-bold text-white shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95"
              >
                <HugeiconsIcon icon={WhatsappIcon} size={18} />
                <span>Kirim Hasil Simulasi ke WA →</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 9: FAQ (TANYA JAWAB SANTAI)
          ═══════════════════════════════════════════════════════════════════════ */}
      <div id="faq" className="relative z-20 w-full bg-[#060A14] px-6 py-16 lg:px-14 scroll-mt-20">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll preset="fade-up" className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">
              TANYA JAWAB SANTAI (FAQ)
            </span>
            <h2 className="mt-3 text-3xl font-black text-white lg:text-4xl">
              Hal yang Paling Sering Ditanyain Sebelum Mulai Ngoding
            </h2>
            <p className="mt-2 text-sm text-white/60">
              Biar nggak ada keraguan atau salah paham di belakang, cek dulu jawaban jujur untuk pertanyaan yang paling sering mampir di WhatsApp saya.
            </p>
          </AnimateOnScroll>

          <div className="space-y-3.5">
            {[
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
            ].map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all open:border-[#10B981]/40 open:bg-white/[0.08]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-white/90 group-hover:text-white">
                  <span className="text-sm font-bold">{faq.q}</span>
                  <span className="ml-4 text-xs text-[#10B981] transition-transform group-open:rotate-180">
                    <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
                  </span>
                </summary>
                <p className="mt-3 text-xs leading-relaxed text-white/70">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 10: FORMULIR KONSULTASI CEPAT & BANNER PENUTUP
          ═══════════════════════════════════════════════════════════════════════ */}
      <div className="relative z-20 w-full bg-[#060A14] px-6 pt-6 pb-12 lg:px-14 border-t border-white/10">
        
        {/* Unified High-Converting Closing Section (Form Brief + Direct WhatsApp) */}
        <div className="mx-auto max-w-4xl mb-16">
          <AnimateOnScroll preset="zoom-in">
            <div className="rounded-[36px] border border-white/20 bg-gradient-to-r from-emerald-950/60 via-black/60 to-blue-950/60 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">
                  MULAI DISKUSI SEKARANG
                </span>
                <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                  Masih Bingung Mulai dari Mana? Obrolin Aja Dulu, Gratis Kok!
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/75">
                  Isi detail singkat di bawah ini, nanti pesannya otomatis terformat rapi dan langsung masuk ke WhatsApp saya ({WA_DISPLAY}).
                </p>
              </div>

              {/* Form Input Brief Interaktif */}
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8 backdrop-blur-xl max-w-2xl mx-auto shadow-inner">
                <form onSubmit={handleQuickFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-semibold text-white/70 block mb-1">
                        Nama Panggilanmu
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nama Panggilanmu"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-white/30 focus:border-emerald-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-white/70 block mb-1">
                        Nomor WhatsApp Aktif
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Nomor WhatsApp Aktif"
                        value={formWa}
                        onChange={(e) => setFormWa(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-white/30 focus:border-emerald-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-white/70 block mb-1">
                      Pilih Kebutuhan
                    </label>
                    <select
                      value={formType}
                      onChange={(e) => setFormType(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-[#060A14] px-4 py-2.5 text-xs text-white focus:border-emerald-400 focus:outline-none"
                    >
                      <option value="Fix Error & Tambah Fitur">Fix Error &amp; Tambah Fitur</option>
                      <option value="Bikin Sistem TA & Riset">Bikin Sistem TA &amp; Riset</option>
                      <option value="Web Bisnis & Instansi">Web Bisnis &amp; Instansi</option>
                      <option value="Konsultasi Dulu">Konsultasi Dulu</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-white/70 block mb-1">
                      Detail Singkat Kebutuhan
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ceritakan singkat masalah kodinganmu, judul TA, atau sistem yang mau dibuat (sebutkan juga kalau ada deadline mepet)..."
                      value={formNotes}
                      onChange={(e) => setFormNotes(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-white/30 focus:border-emerald-400 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-xl shadow-emerald-950/40 transition-all hover:scale-[1.02] hover:from-emerald-400 hover:to-teal-400 active:scale-98"
                  >
                    <HugeiconsIcon icon={WhatsappIcon} size={16} />
                    <span>Kirim Detail &amp; Mulai Ngobrol di WA →</span>
                  </button>
                </form>

                <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-2">
                  <span>Atau chat langsung tanpa isi form:</span>
                  <a
                    href={getWaUrl("Halo Mas (ecoDigital), saya mau konsultasi pembuatan website / sistem.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                  >
                    <HugeiconsIcon icon={WhatsappIcon} size={14} />
                    <span>Chat WhatsApp: {WA_DISPLAY}</span>
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Global Footer Details */}
        <footer className="mx-auto max-w-7xl pt-10 border-t border-white/10">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-4 text-left">
            {/* Col 1: Brand & Bio */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <Image
                  src={logoMarkImg}
                  alt="ecoDigital"
                  width={280}
                  height={88}
                  unoptimized
                  className="h-9 w-auto object-contain"
                />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/60 max-w-md">
                ecoDigital — Partner ngoding pembuatan website, aplikasi custom, dan penyelamat revisi sistem. Dikerjakan langsung oleh developer secara transparan, rapi, dan bergaransi.
              </p>
              <div className="mt-4 flex items-center gap-3 text-white/80">
                <a
                  href={getWaUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 flex items-center justify-center text-emerald-400 transition-colors"
                  aria-label="WhatsApp ecoDigital"
                >
                  <HugeiconsIcon icon={WhatsappIcon} size={18} />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="X ecoDigital"
                >
                  <HugeiconsIcon icon={NewTwitterIcon} size={18} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="Facebook ecoDigital"
                >
                  <HugeiconsIcon icon={Facebook01Icon} size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="Instagram ecoDigital"
                >
                  <HugeiconsIcon icon={InstagramIcon} size={18} />
                </a>
              </div>
            </div>

            {/* Col 2: Ringkasan Layanan */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Layanan Kami
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-white/70">
                <li>
                  <Link href="#layanan" className="hover:text-white transition-colors">
                    Fix Error &amp; Tambah Fitur
                  </Link>
                </li>
                <li>
                  <Link href="#layanan" className="hover:text-white transition-colors">
                    Sistem Tugas Akhir &amp; Riset SPK
                  </Link>
                </li>
                <li>
                  <Link href="#layanan" className="hover:text-white transition-colors">
                    Aplikasi Sekolah &amp; Instansi
                  </Link>
                </li>
                <li>
                  <Link href="#layanan" className="hover:text-white transition-colors">
                    Web Profil UMKM &amp; Bisnis
                  </Link>
                </li>
                <li>
                  <Link href="#paket-harga" className="hover:text-white transition-colors">
                    Paket Harga (Mulai Rp150rb)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Kontak Resmi */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Kontak Resmi
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-white/70">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">WA:</span>
                  <a
                    href={getWaUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:text-emerald-300 transition-colors"
                  >
                    {WA_DISPLAY}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">Layanan:</span>
                  <span className="text-white/80">Konsultasi Seluruh Indonesia</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white/40">Status:</span>
                  <span className="text-emerald-300 font-semibold flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Menerima Proyek Baru
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-3">
            <p>&copy; 2026 ecoDigital. All rights reserved.</p>
            <p>Garansi Pengerjaan &amp; Sesi Pendampingan Teknis Langsung</p>
          </div>
        </footer>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 10 (FLOATING): PERSISTENT FLOATING WHATSAPP BUTTON
          ═══════════════════════════════════════════════════════════════════════ */}
      <FloatingWhatsApp />
    </div>
  );
}
