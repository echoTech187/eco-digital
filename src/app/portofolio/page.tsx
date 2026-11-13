import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PORTFOLIO_PROJECTS } from "@/data/landing-data";
import { PortfolioArchiveList } from "@/components/sections/portfolio-archive-list";
import { NavbarSection } from "@/components/sections/navbar-section";
import { SiteFooter } from "@/components/layout/site-footer";

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

      {/* Standard Sticky Global Navigation */}
      <NavbarSection />

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

      {/* Global Clean 3-Column Footer */}
      <SiteFooter />
    </div>
  );
}
