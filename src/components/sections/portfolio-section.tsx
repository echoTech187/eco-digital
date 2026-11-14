"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  ArrowRight02Icon,
} from "@hugeicons/core-free-icons";
import { SplitWordsTitle } from "@/components/ui/split-words-title";
import { PORTFOLIO_PROJECTS, ProjectItem } from "@/data/landing-data";

// Concise category labels
const PROJECT_SHORT_CATEGORIES: Record<string, string> = {
  simpelantas: "Web Instansi & Mobile",
  siapel: "Presensi GPS & Geofencing",
  eloker: "Platform Rekrutmen ATS",
  "evaluasi-kinerja": "Dashboard Evaluasi & KPI",
  smk: "Portal Sekolah & CBT LMS",
  simopmas: "Pelayanan Publik & Surat",
  projex: "Manajemen Proyek Agile",
  "pos-umkm-wa": "Kasir POS & Struk WA",
};

// Architecture summary badge for preview console
const PROJECT_TECH_SUMMARY: Record<string, string> = {
  simpelantas: "Flutter + CI4 REST API",
  siapel: "Next.js 15 + GPS Engine",
  eloker: "React 19 + Node.js ATS",
  "evaluasi-kinerja": "Laravel + Chart.js Analytics",
  smk: "Next.js 15 + Multi-Role RBAC",
  simopmas: "Next.js + PDF Generator",
  projex: "Laravel 12 + Agile Kanban",
  "pos-umkm-wa": "Flutter + WA Cloud API",
};

// Clean, High-End Portfolio Card
function PortfolioCard({ project }: { project: ProjectItem }) {
  const categoryLabel =
    PROJECT_SHORT_CATEGORIES[project.id] || project.badge;
  const techSummary =
    PROJECT_TECH_SUMMARY[project.id] || "Full-Stack Architecture";

  return (
    <div className="group relative flex flex-col justify-between w-[310px] sm:w-[350px] lg:w-[370px] xl:w-[380px] h-[390px] sm:h-[410px] lg:h-[420px] shrink-0 rounded-[24px] border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0c1424] shadow-md hover:shadow-2xl dark:shadow-2xl dark:hover:shadow-emerald-950/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden select-none snap-start">
      {/* ── TOP: Realistic System Console Preview Window ── */}
      <div className="relative h-[175px] sm:h-[185px] w-full bg-[#080d1a] dark:bg-[#060a14] p-3.5 sm:p-4 flex flex-col justify-between overflow-hidden border-b border-slate-100 dark:border-white/10">
        {/* Subtle grid pattern inside frame */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "16px 16px",
          }}
        />

        {/* Ambient subtle accent glow */}
        <div className="pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full bg-emerald-500/15 blur-2xl" />

        {/* Window Chrome Header */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-700/80" />
            <span className="w-2 h-2 rounded-full bg-slate-700/80" />
            <span className="w-2 h-2 rounded-full bg-slate-700/80" />
          </div>

          <div className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300/90 flex items-center gap-1.5 max-w-[180px] sm:max-w-[210px] truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span className="truncate">{project.domain}</span>
          </div>

          <span className="text-[10px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Live</span>
          </span>
        </div>

        {/* Realistic Dashboard Panel Inside Preview */}
        <div className="relative z-10 rounded-xl bg-white/[0.04] border border-white/10 p-3 backdrop-blur-xs flex flex-col justify-between gap-2.5 my-auto">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 group-hover:scale-105 transition-transform">
              <HugeiconsIcon icon={project.mockupIcon} size={20} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-white/95 truncate">
                {project.mockupSubtitle}
              </p>
              <p className="text-[10px] font-mono text-slate-400 truncate">
                Sistem Terverifikasi • Siap Deploy
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono pt-2 border-t border-white/10 text-slate-400">
            <span className="text-emerald-400/90">SLA 99.9% Production</span>
            <span className="text-slate-400 font-semibold">{techSummary}</span>
          </div>
        </div>
      </div>

      {/* ── BOTTOM: Editorial Typography, Features, & Action ── */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-white dark:bg-[#0c1424]">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
            {categoryLabel}
          </span>

          <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight line-clamp-1">
            {project.title}
          </h3>

          <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300/80 line-clamp-2 leading-relaxed">
            {project.desc}
          </p>

          {/* Clean Non-Wrapping Tech Stack Pills */}
          <div className="flex items-center gap-1.5 mt-3 overflow-hidden">
            {project.features.slice(0, 2).map((feat, fIdx) => (
              <span
                key={fIdx}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 shrink-0 truncate"
              >
                {feat}
              </span>
            ))}
            {project.features.length > 2 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-500 shrink-0">
                +{project.features.length - 2}
              </span>
            )}
          </div>
        </div>

        {/* Card Footer Link */}
        <div className="pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between mt-3">
          <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
            Studi Kasus &amp; Arsitektur
          </span>

          <Link
            href={`/portofolio/${project.id}`}
            prefetch={false}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform"
          >
            <span>Detail Spesifikasi</span>
            <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

// Final CTA Card for Complete Portfolio & Custom Projects
function PortfolioCtaCard() {
  return (
    <div className="group relative flex flex-col justify-between w-[310px] sm:w-[350px] lg:w-[370px] xl:w-[380px] h-[390px] sm:h-[410px] lg:h-[420px] shrink-0 rounded-[24px] border-2 border-dashed border-emerald-500/40 dark:border-emerald-400/30 bg-emerald-50/70 dark:bg-emerald-950/20 p-5 sm:p-6 flex flex-col justify-between shadow-md hover:shadow-2xl dark:shadow-2xl dark:hover:shadow-emerald-950/40 hover:-translate-y-1.5 transition-all duration-300 select-none snap-start">
      <div>
        <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 group-hover:scale-105 transition-transform">
          <HugeiconsIcon icon={ArrowRight02Icon} size={22} />
        </div>
        <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight">
          Jelajahi Semua Portofolio &amp; Live Demo Lengkap
        </h3>
        <p className="mt-2 text-xs text-slate-600 dark:text-slate-300/80 leading-relaxed">
          Semua studi kasus dilengkapi skema arsitektur, modul teknis, dan tautan demo langsung yang bisa dicoba tanpa registrasi.
        </p>
      </div>

      <div className="space-y-2 pt-3 border-t border-emerald-500/20">
        <Link
          href="/portofolio"
          prefetch={false}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm py-2.5 shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>Buka Semua Portofolio</span>
          <HugeiconsIcon icon={ArrowRight01Icon} size={15} />
        </Link>
        <a
          href="https://wa.me/6285748255598?text=Halo%20Mas%20Eko%2C%20saya%20tertarik%20dengan%20portofolio%20ecoDigital."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white font-semibold text-xs py-2 transition-colors"
        >
          <span>Konsultasi Proyek Serupa</span>
        </a>
      </div>
    </div>
  );
}

// 5 Featured Projects Only (as requested)
const FEATURED_PROJECTS = PORTFOLIO_PROJECTS.slice(0, 5);

// ─── Main PortfolioSection Component ──────────────────────────────────────────

export function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mobileRailRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = React.useState(0);
  const [headerOffset, setHeaderOffset] = React.useState<number>(0);

  // Dynamically calculate exact layout: align Card 1 with header title, and compute exact scroll range
  React.useEffect(() => {
    const calculateLayout = () => {
      // 1. Measure exact left offset of the header title to align Card 1 with it
      if (headerRef.current) {
        const headerRect = headerRef.current.getBoundingClientRect();
        setHeaderOffset(Math.round(headerRect.left));
      }

      // Ensure mobile rail starts with Card 1 aligned to scroll-padding
      if (mobileRailRef.current && mobileRailRef.current.scrollLeft > 0) {
        mobileRailRef.current.scrollLeft = 0;
      }

      // 2. Measure track overflow so Card 6 (CTA card) stops with zero empty trailing space
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const overflow = Math.max(0, trackWidth - viewportWidth);
        setMaxScroll(overflow);
      }
    };

    calculateLayout();
    window.addEventListener("resize", calculateLayout);
    return () => window.removeEventListener("resize", calculateLayout);
  }, [headerOffset]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Mathematically exact horizontal glide: 0px at start, -maxScroll at 100%
  const x = useTransform(scrollYProgress, (progress) => -progress * maxScroll);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // CSS fallback for alignment with max-w-7xl before/during JS hydration
  const inlinePadding = headerOffset > 0
    ? `${headerOffset}px`
    : "max(2rem, calc((100vw - 80rem) / 2 + 2rem))";

  return (
    <div
      ref={containerRef}
      id="portofolio"
      className="relative w-full h-auto lg:h-[250vh] scroll-mt-20"
    >
      {/* ─── STICKY PINNED STAGE (DESKTOP) & NATURAL EXPANSIVE SECTION (MOBILE) ─── */}
      <section className="relative z-40 w-full lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden flex flex-col justify-between rounded-t-[36px] sm:rounded-t-[56px] border-t border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-[#060A14] pt-20 sm:pt-24 lg:pt-20 pb-6 sm:pb-8 shadow-[0_-30px_70px_-20px_rgba(0,0,0,0.18)] dark:shadow-[0_-35px_80px_-25px_rgba(0,0,0,0.9)] transition-colors duration-300">
        {/* Ambient atmospheric glows */}
        <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

        {/* ─── 1. TOP HEADER BAR: TITLE & LIVE SCROLL PROGRESS ─── */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-2 lg:mb-3">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div ref={headerRef}>
              <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-[#10B981] mb-2">
                BUKTI KARYA NYATA
              </span>
              <SplitWordsTitle
                text="Sistem & Aplikasi yang Sudah Live"
                as="h2"
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.18]"
              />
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300/80 max-w-2xl">
                Semua sistem di bawah ini asli hasil kodingan langsung dari nol dan siap diuji coba.
              </p>
            </div>

            {/* Right Controls: Minimal Progress Meter (View All Button removed as requested) */}
            <div className="hidden sm:flex items-center gap-3 self-start lg:self-end pb-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                5 SISTEM UNGGULAN
              </span>
              <div className="w-24 sm:w-32 h-1.5 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                <motion.div
                  style={{ width: progressWidth }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ─── 2. DESKTOP: PINNED HORIZONTAL SCROLL-DRIVEN TRACK ─── */}
        {/* Generous py-10 padding prevents shadow clipping on card hover */}
        {/* paddingLeft aligns Card 1 perfectly with header title */}
        <div className="relative z-10 hidden lg:flex w-full overflow-hidden items-center my-auto py-10 lg:py-12">
          <motion.div
            ref={trackRef}
            style={{
              x,
              paddingLeft: inlinePadding,
              paddingRight: inlinePadding,
            }}
            className="flex gap-6 will-change-transform py-4"
          >
            {FEATURED_PROJECTS.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
            <PortfolioCtaCard />
          </motion.div>
        </div>

        {/* ─── 3. MOBILE & TABLET: HORIZONTAL TOUCH SNAP RAIL ─── */}
        <div
          ref={mobileRailRef}
          className="relative z-10 flex lg:hidden overflow-x-auto snap-x snap-mandatory scroll-pl-4 sm:scroll-pl-6 scroll-pr-4 sm:scroll-pr-6 gap-4 px-4 sm:px-6 py-6 scrollbar-none"
        >
          {FEATURED_PROJECTS.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
          <PortfolioCtaCard />
        </div>
      </section>
    </div>
  );
}
