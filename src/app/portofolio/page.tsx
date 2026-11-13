import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft02Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { PORTFOLIO_PROJECTS, getWaUrl } from "@/data/landing-data";
import { PortfolioArchiveList } from "@/components/sections/portfolio-archive-list";
import logoMarkImg from "../../../public/images/logo/logo-mark.png";

const BASE_URL = "https://eco.co-id.id";

export const metadata: Metadata = {
  title: "Portofolio Sistem Informasi & Web Aplikasi Custom | ecoDigital",
  description:
    "Koleksi hasil karya sistem informasi instansi kepolisian/dinas, web portal sekolah LMS, aplikasi mobile presensi GPS, dan sistem pendukung keputusan (SPK) buatan ecoDigital.",
  keywords: [
    "portofolio ecodigital",
    "contoh sistem informasi web",
    "studi kasus aplikasi web",
    "portofolio joki coding",
    "aplikasi mobile flutter",
    "sistem spk topsis ahp",
    "web dinas instansi",
  ],
  alternates: {
    canonical: `${BASE_URL}/portofolio`,
  },
  openGraph: {
    title: "Portofolio Sistem Informasi & Web Aplikasi Custom | ecoDigital",
    description:
      "Koleksi hasil karya sistem informasi instansi, web sekolah, aplikasi presensi GPS, dan sistem SPK buatan ecoDigital.",
    url: `${BASE_URL}/portofolio`,
    siteName: "ecoDigital",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/logo/logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "Portofolio ecoDigital",
      },
    ],
  },
};

export default function PortfolioIndexPage() {
  const jsonLdCollection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portofolio Sistem & Web Aplikasi ecoDigital",
    url: `${BASE_URL}/portofolio`,
    description:
      "Koleksi studi kasus sistem informasi, web sekolah, aplikasi mobile, dan tugas akhir buatan ecoDigital.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: PORTFOLIO_PROJECTS.map((p, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${BASE_URL}/portofolio/${p.id}`,
        name: p.title,
        description: p.desc,
      })),
    },
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#060A14] text-white selection:bg-emerald-500/30 selection:text-emerald-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCollection) }}
      />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-emerald-500/15 blur-[160px]" />

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#060A14]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8">
          <Link href="/" prefetch={false} className="group flex items-center gap-3">
            <Image
              src={logoMarkImg}
              alt="ecoDigital Logo"
              width={70}
              height={82}
              priority
              unoptimized
              className="h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-base font-black tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                ecoDigital
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-emerald-400 -mt-0.5">
                Koleksi Portofolio
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/"
              prefetch={false}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 sm:px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/15 hover:text-white transition-all"
            >
              <HugeiconsIcon icon={ArrowLeft02Icon} size={14} />
              <span>Beranda</span>
            </Link>
            <a
              href={getWaUrl(
                "Halo Mas (ecoDigital), saya ingin konsultasi pembuatan sistem aplikasi. Boleh diskusi?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-3.5 sm:px-4 py-2 text-xs font-bold text-white shadow-md shadow-emerald-950/40 hover:from-emerald-400 hover:to-teal-400 transition-all"
            >
              <HugeiconsIcon icon={WhatsappIcon} size={14} />
              <span>Konsultasi WA</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-20 mx-auto max-w-6xl px-4 sm:px-8 py-10 sm:py-14">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/50">
          <Link href="/" prefetch={false} className="hover:text-emerald-400 transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <span className="text-emerald-400 font-medium">Portofolio</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">
            BUKTI KARYA &amp; ARSITEKTUR NYATA
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Portofolio Sistem &amp; Web Aplikasi Siap Pakai
          </h1>
          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/70">
            Seluruh proyek di bawah ini dikembangkan langsung oleh developer dengan clean code, keamanan terstandarisasi, dan telah lolos uji operasional nyata. Klik <strong>Lihat Spek</strong> untuk membedah arsitektur dan modulnya secara lengkap.
          </p>
        </div>

        {/* Portfolio Cards Grid with Category Filter Tabs */}
        <PortfolioArchiveList />
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/10 bg-[#060A14] py-8 text-center text-xs text-white/50">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} ecoDigital. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-4">
            <Link href="/" prefetch={false} className="hover:text-white transition-colors">
              Beranda
            </Link>
            <Link href="/contact" prefetch={false} className="hover:text-white transition-colors">
              Kontak
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
