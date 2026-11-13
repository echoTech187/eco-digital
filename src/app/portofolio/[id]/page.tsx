import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkCircle01Icon,
  LockIcon,
  WhatsappIcon,
  Layers01Icon,
  CpuIcon,
  Folder01Icon,
  ShieldCheckIcon,
  Calculator01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import {
  PORTFOLIO_PROJECTS,
  getWaUrl,
} from "@/data/landing-data";
import { ProjectScreenPreview } from "@/components/sections/project-screen-preview";
import { NavbarSection } from "@/components/sections/navbar-section";
import { SiteFooter } from "@/components/layout/site-footer";

const BASE_URL = "https://eco.co-id.id";

// 1. Generate Static Params for Next.js Static Export
export function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({
    id: project.id,
  }));
}

// 2. Dynamic SEO Metadata Generation per Project
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Proyek Tidak Ditemukan | ecoDigital",
      description: "Halaman studi kasus sistem portofolio ecoDigital tidak ditemukan.",
    };
  }

  const title = `${project.title} — Spesifikasi & Studi Kasus Sistem`;
  const description =
    project.fullSpecs?.overview ||
    `${project.desc} Dibangun dengan arsitektur modern oleh ecoDigital.`;
  const canonicalUrl = `${BASE_URL}/portofolio/${project.id}`;

  return {
    title,
    description,
    keywords: [
      project.title,
      project.badge,
      "jasa pembuatan sistem",
      "jasa bikin web custom",
      "studi kasus sistem informasi",
      ...project.features,
      ...(project.fullSpecs?.techStack || []),
      "ecoDigital",
      "direct developer",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} — Spesifikasi & Studi Kasus Sistem | ecoDigital`,
      description,
      url: canonicalUrl,
      siteName: "ecoDigital",
      locale: "id_ID",
      type: "article",
      images: [
        {
          url: "/images/logo/logo-transparent.png",
          width: 1200,
          height: 630,
          alt: `${project.title} — ecoDigital Portofolio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Spesifikasi & Studi Kasus Sistem | ecoDigital`,
      description,
      images: ["/images/logo/logo-transparent.png"],
    },
  };
}

// 3. Project Detail Page Component
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Related projects (excluding current)
  const relatedProjects = PORTFOLIO_PROJECTS.filter((p) => p.id !== id).slice(0, 3);

  // JSON-LD Structured Data Schema for Search Engines
  const jsonLdSoftwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    operatingSystem: "Web, Cloud, Android",
    applicationCategory: project.badge,
    description: project.fullSpecs?.overview || project.desc,
    url: `${BASE_URL}/portofolio/${project.id}`,
    author: {
      "@type": "Organization",
      name: "ecoDigital",
      url: BASE_URL,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "ecoDigital",
      },
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portofolio",
        item: `${BASE_URL}/#portofolio`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${BASE_URL}/portofolio/${project.id}`,
      },
    ],
  };

  const CardMockupIcon = project.mockupIcon;

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#060A14] text-white selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* JSON-LD Script Injection for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftwareApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Ambient Glow Effects */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-emerald-500/15 blur-[160px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[150px]" />

      {/* Top Header / Global Navigation Bar */}
      <NavbarSection />

      {/* Main Content Container */}
      <main className="relative z-20 mx-auto max-w-6xl px-4 sm:px-8 py-8 sm:py-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/50">
          <Link href="/" prefetch={false} className="hover:text-emerald-400 transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <Link href="/#portofolio" prefetch={false} className="hover:text-emerald-400 transition-colors">
            Portofolio
          </Link>
          <span>/</span>
          <span className="text-emerald-400 font-medium truncate max-w-[200px] sm:max-w-none">
            {project.title}
          </span>
        </nav>

        {/* Hero Header Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              {/* Category & Status Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
                  <HugeiconsIcon icon={Layers01Icon} size={12} />
                  {project.badge}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/60">
                  <HugeiconsIcon icon={LockIcon} size={11} className="text-emerald-400" />
                  {project.domain}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live System
                </span>
              </div>

              {/* Project Title H1 */}
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                {project.title}
              </h1>

              {/* Tagline / Subtitle */}
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/70">
                {project.desc}
              </p>

              {/* Dampak Nyata / Impact Callout */}
              {project.impact && (
                <div className="mt-5 flex items-start gap-2.5 rounded-2xl border border-emerald-500/30 bg-emerald-950/40 p-4 text-xs sm:text-sm text-emerald-300">
                  <HugeiconsIcon
                    icon={CheckmarkCircle01Icon}
                    size={20}
                    className="text-emerald-400 shrink-0 mt-0.5"
                  />
                  <div>
                    <span className="font-bold text-emerald-200">Hasil &amp; Dampak Nyata: </span>
                    <span className="text-white/90">{project.impact}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Simulated Live UI Mockup Preview Frame */}
            <div className="w-full lg:w-[380px] shrink-0">
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-xl">
                {/* Browser bar */}
                <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.05] px-3.5 py-2">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-white/50 truncate max-w-[180px]">
                    https://{project.domain}
                  </span>
                </div>

                {/* Mockup Body */}
                <div
                  className={`relative min-h-[180px] bg-gradient-to-br ${project.mockupGradient} p-4 flex flex-col justify-between`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 text-emerald-400 shadow backdrop-blur-md">
                        <HugeiconsIcon icon={CardMockupIcon} size={18} />
                      </span>
                      <div>
                        <div className="text-xs font-bold text-white drop-shadow">
                          {project.title}
                        </div>
                        <div className="text-[9px] text-white/70">
                          {project.mockupSubtitle}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <ProjectScreenPreview project={project} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Architecture & Key Modules (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Ringkasan Arsitektur & Studi Kasus */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <div className="flex items-center gap-2 text-emerald-400 mb-3">
                <HugeiconsIcon icon={Folder01Icon} size={18} />
                <h2 className="text-xs font-bold uppercase tracking-wider">
                  Ringkasan Arsitektur &amp; Studi Kasus
                </h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-white/80">
                {project.fullSpecs?.overview || project.desc}
              </p>

              {/* Feature Tags */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-3">
                  Sorotan Fitur Utama
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90"
                    >
                      <HugeiconsIcon
                        icon={CheckmarkCircle01Icon}
                        size={13}
                        className="text-emerald-400"
                      />
                      <span>{feature}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Modul & Fungsionalitas Sistem */}
            {project.fullSpecs?.keyModules && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                <div className="flex items-center gap-2 text-emerald-400 mb-4">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={18} />
                  <h2 className="text-xs font-bold uppercase tracking-wider">
                    Fitur &amp; Modul Sistem yang Dibangun
                  </h2>
                </div>
                <ul className="space-y-3.5">
                  {project.fullSpecs.keyModules.map((module, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs sm:text-sm text-white/85"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{module}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Tech Stack & Deliverables (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* 1. Teknologi yang Digunakan */}
            {project.fullSpecs?.techStack && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                <div className="flex items-center gap-2 text-emerald-400 mb-3">
                  <HugeiconsIcon icon={CpuIcon} size={18} />
                  <h2 className="text-xs font-bold uppercase tracking-wider">
                    Teknologi yang Digunakan
                  </h2>
                </div>
                <p className="text-xs text-white/60 mb-4">
                  Dibangun dengan standar kode bersih, modular, dan terstruktur sesuai best practice industri.
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.fullSpecs.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 2. Yang Diterima Klien (Deliverables) */}
            {project.fullSpecs?.deliverables && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                <div className="flex items-center gap-2 text-emerald-400 mb-3">
                  <HugeiconsIcon icon={ShieldCheckIcon} size={18} />
                  <h2 className="text-xs font-bold uppercase tracking-wider">
                    Deliverables (Paket yang Diterima)
                  </h2>
                </div>
                <p className="text-xs text-white/60 mb-4">
                  Klien menerima aset lengkap tanpa ketergantungan sepihak, siap pakai dan bergaransi.
                </p>
                <ul className="space-y-2.5">
                  {project.fullSpecs.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80"
                    >
                      <HugeiconsIcon
                        icon={CheckmarkCircle01Icon}
                        size={15}
                        className="text-emerald-400 shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 3. Standar Kualitas Koding ecoDigital */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2">
                Jaminan Kualitas Koding
              </h3>
              <ul className="space-y-2 text-xs text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Kode bersih (Clean Architecture) &amp; full komentar penjelasan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Video rekaman bedah kode 1-on-1 khusus untuk persiapan sidang</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Garansi revisi &amp; pendampingan teknis sampai aplikasi live / ACC</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Card: Order or Consult Similar Project */}
        <div className="mt-12 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/60 via-[#060A14] to-teal-950/60 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_50%)]" />
          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
              KONSULTASI LANGSUNG DENGAN DEVELOPER
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
              Tertarik Membangun Sistem Seperti {project.title}?
            </h2>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/70">
              Bisa disesuaikan dengan alur instansi, kebutuhan skripsi/tugas akhir, atau fitur khusus bisnis Anda. Langsung diskusikan alur logika dan dapatkan estimasi biaya transparan tanpa perantara.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={getWaUrl(
                  `Halo Mas (ecoDigital), saya tertarik bikin sistem seperti ${project.title} (${project.domain}). Boleh minta estimasi alur dan biayanya?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-[1.02] hover:from-emerald-400 hover:to-teal-400"
              >
                <HugeiconsIcon icon={WhatsappIcon} size={18} />
                <span>Pesan Sistem Serupa via WhatsApp</span>
              </a>
              <Link
                href="/#simulasi-biaya"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white/90 hover:bg-white/15 hover:text-white transition-all"
              >
                <HugeiconsIcon icon={Calculator01Icon} size={16} className="text-emerald-400" />
                <span>Hitung Simulasi Biaya</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Internal Linking: Related Projects for SEO Authority */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                EKSPLORASI STUDI KASUS LAIN
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Portofolio Sistem &amp; Web Lainnya
              </h3>
            </div>
            <Link
              href="/#portofolio"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Lihat Semua</span>
              <HugeiconsIcon icon={ArrowRight01Icon} size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedProjects.map((rel) => {
              const RelIcon = rel.mockupIcon;
              return (
                <Link
                  key={rel.id}
                  href={`/portofolio/${rel.id}`}
                  prefetch={false}
                  className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-emerald-500/40 hover:bg-white/[0.06] transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-emerald-400 group-hover:scale-105 transition-transform">
                        <HugeiconsIcon icon={RelIcon} size={18} />
                      </span>
                      <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/60">
                        {rel.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {rel.title}
                    </h4>
                    <p className="mt-1 text-xs text-white/60 line-clamp-2 leading-relaxed">
                      {rel.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-emerald-400">
                    <span>Lihat Spesifikasi</span>
                    <HugeiconsIcon icon={ArrowRight01Icon} size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      {/* Global Clean 3-Column Footer */}
      <SiteFooter />
    </div>
  );
}
