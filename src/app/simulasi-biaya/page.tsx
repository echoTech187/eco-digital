import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  WhatsappIcon,
  ShieldCheckIcon,
  CheckmarkCircle01Icon,
  HelpCircleIcon,
  Coins01Icon,
  PencilEdit02Icon,
} from "@hugeicons/core-free-icons";
import { NavbarSection } from "@/components/sections/navbar-section";
import { CalculatorSection } from "@/components/sections/calculator-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { getWaUrl, WA_DISPLAY } from "@/data/landing-data";

const BASE_URL = "https://www.ecodigitalindo.com";

export const metadata: Metadata = {
  title: "Simulasi & Hitung Estimasi Biaya Pembuatan Website & Aplikasi | ecoDigital",
  description:
    "Hitung estimasi biaya pembuatan Aplikasi Custom, Jasa API & Backend, dan Web Instansi & Bisnis secara mandiri dan transparan di ecoDigital.",
  keywords: [
    "kalkulator biaya website",
    "simulasi biaya aplikasi",
    "biaya pembuatan web instansi",
    "biaya aplikasi custom",
    "harga pembuatan flutter mobile",
    "biaya sistem informasi web",
    "estimasi biaya koding",
    "ecodigital biaya",
  ],
  alternates: {
    canonical: `${BASE_URL}/simulasi-biaya`,
  },
  openGraph: {
    title: "Simulasi & Hitung Estimasi Biaya Pembuatan Website & Aplikasi | ecoDigital",
    description:
      "Hitung sendiri estimasi biaya proyek web & aplikasimu secara transparan tanpa biaya siluman.",
    url: `${BASE_URL}/simulasi-biaya`,
    siteName: "ecoDigital",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/logo/logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "Simulasi Biaya ecoDigital",
      },
    ],
  },
};

export default function SimulasiBiayaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Kalkulator Simulasi Biaya ecoDigital",
    url: `${BASE_URL}/simulasi-biaya`,
    description:
      "Kalkulator interaktif untuk menghitung estimasi biaya pembuatan website, sistem informasi, dan aplikasi mobile secara transparan.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-50 dark:bg-[#060A14] text-slate-900 dark:text-white selection:bg-emerald-500/30 selection:text-emerald-300 transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 top-2/3 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[150px]" />

      {/* Standard Sticky Global Navigation */}
      <NavbarSection />

      {/* Main Container */}
      <main className="relative z-20 mx-auto max-w-5xl px-4 sm:px-8 pt-24 sm:pt-28 pb-10 lg:pb-14">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500 dark:text-white/50">
          <Link href="/" prefetch={false} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">Simulasi Biaya</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-10 sm:mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              Kalkulator Mandiri &amp; Transparan
            </span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Hitung Estimasi Biaya Sistem Anda <span className="text-emerald-600 dark:text-emerald-400">Secara Terbuka</span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-white/70">
            Pilih kategori sistem dan centang fitur tambahan yang Anda butuhkan. Total estimasi biaya dan durasi pengerjaan langsung terhitung otomatis tanpa biaya siluman.
          </p>
        </div>

        {/* The Interactive Calculator Component */}
        <div className="mb-14">
          <CalculatorSection isStandalone={true} />
        </div>

        {/* Trust Pillars */}
        <div className="mt-14 pt-12 border-t border-slate-200 dark:border-white/10">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              STANDAR TRANSPARANSI ECODIGITAL
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Kenapa Estimasi di Sini Terjamin Aman &amp; Masuk Akal?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-5 backdrop-blur-md shadow-sm dark:shadow-none">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mb-3">
                <HugeiconsIcon icon={Coins01Icon} size={18} />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Harga Flat Tertulis</h4>
              <p className="mt-1 text-xs text-slate-600 dark:text-white/60 leading-relaxed">
                Biaya disepakati di awal sebelum koding dimulai. Tidak ada tagihan mendadak di tengah pengerjaan.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-5 backdrop-blur-md shadow-sm dark:shadow-none">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mb-3">
                <HugeiconsIcon icon={CheckmarkCircle01Icon} size={18} />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Kode Bersih &amp; Terstruktur</h4>
              <p className="mt-1 text-xs text-slate-600 dark:text-white/60 leading-relaxed">
                Berkas sistem dan database diserahkan utuh tanpa kunci enkripsi, rapi serta siap dideploy mandiri.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-5 backdrop-blur-md shadow-sm dark:shadow-none">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mb-3">
                <HugeiconsIcon icon={ShieldCheckIcon} size={18} />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Bisa Bayar Bertahap</h4>
              <p className="mt-1 text-xs text-slate-600 dark:text-white/60 leading-relaxed">
                Cukup DP untuk mulai pengerjaan. Pelunasan hanya setelah sistem didemokan dan terbukti jalan lancar.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-5 backdrop-blur-md shadow-sm dark:shadow-none">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mb-3">
                <HugeiconsIcon icon={CheckmarkCircle01Icon} size={18} />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Garansi &amp; Bedah Kode</h4>
              <p className="mt-1 text-xs text-slate-600 dark:text-white/60 leading-relaxed">
                Disertai video penjelasan kode per modul dan pendampingan revisi sampai sistem siap digunakan.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing FAQs */}
        <div className="mt-14 pt-12 border-t border-slate-200 dark:border-white/10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-white/10 px-3 py-1 text-[11px] font-semibold text-slate-700 dark:text-white/80">
              <HugeiconsIcon icon={HelpCircleIcon} size={13} className="text-emerald-600 dark:text-emerald-400" />
              <span>Pertanyaan Seputar Biaya</span>
            </div>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Tanya Jawab Seputar Estimasi &amp; Pembayaran
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-5 shadow-sm dark:shadow-none">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Apakah hasil kalkulator ini sudah harga pasti (fixed)?
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-white/60">
                Kalkulator ini memberikan estimasi acuan transparan di awal. Jika sistem Anda memiliki alur khusus atau integrasi kompleks, kita sepakati penyesuaian adilnya saat diskusi WA—namun tetap bersifat harga flat tanpa biaya siluman.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-5 shadow-sm dark:shadow-none">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Bagaimana jika kodingan saya cuma error sedikit?
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-white/60">
                Anda tidak perlu memesan paket sistem baru! Cukup pilih kategori &ldquo;Troubleshoot &amp; Fix Bug&rdquo; mulai Rp150.000. Kami cek sumber masalahnya secara gratis terlebih dahulu.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-5 shadow-sm dark:shadow-none">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Apakah pembayaran bisa dicicil (sistem termin)?
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-white/60">
                Sangat bisa. Kami menerapkan sistem termin yang adil: cukup DP awal untuk memulai proses koding dan setup server staging, sedangkan sisa pelunasan hanya dibayar setelah demo sistem terbukti berjalan lancar di live staging / environment Anda.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-5 shadow-sm dark:shadow-none">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Bagaimana jika deadline saya sudah sangat mepet?
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-white/60">
                Langsung kirim draft kebutuhan atau proposal ke WhatsApp kami. Kami akan cek ketersediaan slot pengerjaan kilat dan berikan timeline realistis agar target operasional Anda tetap aman tercapai.
              </p>
            </div>
          </div>
        </div>

        {/* Closing CTA Banner */}
        <div className="mt-14 rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-50 via-white to-blue-50 dark:from-emerald-950/50 dark:via-[#071322] dark:to-blue-950/40 p-6 sm:p-10 text-center shadow-lg dark:shadow-2xl relative overflow-hidden">
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 blur-3xl" />
          
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Punya Rancangan Alur Sendiri?
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-xs sm:text-sm text-slate-600 dark:text-white/70 leading-relaxed">
            Kirimkan proposal, flowchart, atau coret-coretan fiturnya langsung ke WhatsApp untuk kami bedah dan berikan estimasi waktu yang presisi.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={getWaUrl("Halo Mas (ecoDigital), saya mau konsultasi alur dan estimasi biaya sistem saya.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3.5 text-xs font-bold text-gray-950 shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-400 hover:scale-105 active:scale-95"
            >
              <HugeiconsIcon icon={WhatsappIcon} size={16} />
              <span>Ngobrol Santai di WhatsApp ({WA_DISPLAY})</span>
            </a>

            <Link
              href="/contact"
              prefetch={false}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/10 px-6 py-3.5 text-xs font-bold text-slate-900 dark:text-white transition-all hover:bg-slate-200 dark:hover:bg-white/20 hover:scale-105 active:scale-95"
            >
              <HugeiconsIcon icon={PencilEdit02Icon} size={15} />
              <span>Isi Formulir</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Global Clean 3-Column Footer */}
      <SiteFooter />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
