"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowRight02Icon,
  Cancel01Icon,
  Image01Icon,
} from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { PORTFOLIO_PROJECTS, ProjectItem } from "@/data/landing-data";

// Solid, vibrant gradient maps for rich App Store aesthetic
const APP_GRADIENTS: Record<string, string> = {
  simpelantas: "from-blue-600 via-indigo-600 to-slate-900",
  siapel: "from-emerald-600 via-teal-600 to-slate-900",
  eloker: "from-purple-600 via-indigo-700 to-slate-900",
  "evaluasi-kinerja": "from-teal-600 via-cyan-700 to-slate-900",
  smk: "from-cyan-600 via-blue-700 to-slate-900",
  simopmas: "from-amber-600 via-orange-700 to-slate-900",
  projex: "from-rose-600 via-red-700 to-slate-900",
  "pos-umkm-wa": "from-emerald-600 via-emerald-800 to-slate-900",
};

// Concise, elegant category labels to prevent truncation and overflow
const PROJECT_SHORT_CATEGORIES: Record<string, string> = {
  simpelantas: "Web Instansi & Mobile",
  siapel: "Presensi GPS & Kamera",
  eloker: "Platform Rekrutmen ATS",
  "evaluasi-kinerja": "Dashboard Evaluasi & KPI",
  smk: "Portal Sekolah & CBT",
  simopmas: "Pelayanan Surat Warga",
  projex: "Manajemen Proyek Agile",
  "pos-umkm-wa": "Kasir POS & Struk WA",
};

export function PortfolioSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [pinnedProject, setPinnedProject] = useState<ProjectItem | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close popup on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
        setPinnedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -260 : 260;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleCardMouseEnter = (project: ProjectItem) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      if (!pinnedProject) {
        setActiveProject(project);
      }
    }, 200);
  };

  const handleCardMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      if (!pinnedProject) {
        setActiveProject(null);
      }
    }, 280);
  };

  const handleCardClick = (e: React.MouseEvent, project: ProjectItem) => {
    e.preventDefault();
    if (pinnedProject?.id === project.id) {
      setPinnedProject(null);
      setActiveProject(null);
    } else {
      setPinnedProject(project);
      setActiveProject(project);
    }
  };

  const displayedProject = pinnedProject || activeProject;
  const gradientClass = displayedProject
    ? APP_GRADIENTS[displayedProject.id] || "from-blue-600 via-indigo-600 to-slate-900"
    : "";
  const shortCategory = displayedProject
    ? PROJECT_SHORT_CATEGORIES[displayedProject.id] || displayedProject.badge
    : "";

  return (
    <section
      id="portofolio"
      className="relative z-20 w-full bg-slate-50 dark:bg-[#060A14] px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24 scroll-mt-0 transition-colors duration-200"
    >
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll preset="fade-up" once={false} duration={0.6}>
          {/* ─── Windows / App Store Style Panoramic Showcase Shelf ─── */}
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-slate-200 dark:border-white/10 bg-white dark:bg-transparent dark:bg-gradient-to-r dark:from-slate-950 dark:via-[#0a1120] dark:to-[#070d18] p-6 sm:p-8 lg:p-10 shadow-xl dark:shadow-2xl backdrop-blur-2xl min-h-[500px] lg:min-h-[540px] flex flex-col justify-center">
            {/* Ambient Background Glow Inside Banner */}
            <div className="pointer-events-none absolute -top-24 -left-20 h-80 w-80 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 blur-3xl" />
            <div className="pointer-events-none absolute top-1/2 right-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row items-stretch lg:items-center gap-8 lg:gap-10">
              
              {/* ─── LEFT COLUMN: Title, Description, & "See All" CTA (Image 2 Style) ─── */}
              <div className="flex flex-col justify-between shrink-0 lg:w-[280px] xl:w-[320px] text-left">
                <div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-[#10B981] mb-2">
                    BUKTI KARYA NYATA
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
                    Sistem &amp; Aplikasi yang Sudah Live
                  </h2>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300/80">
                    Semua sistem di bawah ini asli hasil kodingan langsung dan siap diuji coba. Arahkan kursor atau klik aplikasi untuk membedah spek dan arsitekturnya.
                  </p>
                </div>

                <div className="mt-6 pt-2">
                  <Link
                    href="/portofolio"
                    prefetch={false}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/15 bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white px-5 py-2.5 text-xs sm:text-sm font-semibold shadow-xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Lihat Semua ({PORTFOLIO_PROJECTS.length})</span>
                    <HugeiconsIcon icon={ArrowRight02Icon} size={15} />
                  </Link>
                </div>
              </div>

              {/* ─── RIGHT COLUMN: Navigation Controls + Horizontal Card Track (Image 2 Style) ─── */}
              <div className="flex-1 min-w-0 flex flex-col justify-between relative py-2">
                {/* Top Nav Controls (< > arrows positioned on the top right) */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    Pilih aplikasi untuk melihat detail
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleScroll("left")}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-white/80 transition-all hover:bg-slate-200 dark:hover:bg-white/15 hover:text-slate-950 dark:hover:text-white active:scale-95 cursor-pointer"
                      aria-label="Scroll portofolio ke kiri"
                    >
                      <HugeiconsIcon icon={ArrowLeft01Icon} size={15} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScroll("right")}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-white/80 transition-all hover:bg-slate-200 dark:hover:bg-white/15 hover:text-slate-950 dark:hover:text-white active:scale-95 cursor-pointer"
                      aria-label="Scroll portofolio ke kanan"
                    >
                      <HugeiconsIcon icon={ArrowRight01Icon} size={15} />
                    </button>
                  </div>
                </div>

                {/* Horizontal Scroll Track (Clean App Store Cards with Cinematic Right Fade Mask) */}
                <div
                  ref={scrollRef}
                  className="flex items-stretch gap-4 overflow-x-auto scrollbar-none snap-x py-3.5 pl-3 sm:pl-4 pr-16 sm:pr-24 scroll-smooth"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    maskImage:
                      "linear-gradient(to right, black 0%, black calc(100% - 80px), transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to right, black 0%, black calc(100% - 80px), transparent 100%)",
                  }}
                >
                  {PORTFOLIO_PROJECTS.map((project, idx) => {
                    const ProjectIcon = project.mockupIcon;
                    const cardGradient = APP_GRADIENTS[project.id] || "from-blue-600 via-indigo-700 to-slate-900";
                    const isSelected = displayedProject?.id === project.id;
                    const categoryLabel = PROJECT_SHORT_CATEGORIES[project.id] || project.badge;
                    return (
                      <div
                        key={project.id}
                        onMouseEnter={() => handleCardMouseEnter(project)}
                        onMouseLeave={handleCardMouseLeave}
                        onClick={(e) => handleCardClick(e, project)}
                        className={`group flex flex-col justify-between w-[190px] sm:w-[210px] shrink-0 snap-start rounded-2xl overflow-hidden border transition-all duration-300 select-none cursor-pointer ${
                          idx === 0 ? "ml-1 sm:ml-2" : ""
                        } ${
                          isSelected
                            ? "border-emerald-500 bg-emerald-50/50 dark:border-emerald-400 dark:bg-[#111c33] shadow-xl shadow-emerald-500/20 scale-[1.03]"
                            : "border-slate-200 dark:border-white/10 bg-white dark:bg-[#0d1527] shadow-xs hover:scale-[1.03] hover:border-emerald-500/60 dark:hover:border-emerald-400/60 hover:shadow-xl hover:shadow-slate-300/40 dark:hover:shadow-emerald-950/40"
                        }`}
                        title={`Klik untuk membuka detail ${project.title}`}
                      >
                        {/* Upper Half: Vibrant App Store Banner + Centered 3D Squircle Icon */}
                        <div
                          className={`relative h-32 sm:h-36 w-full bg-gradient-to-br ${cardGradient} p-4 flex flex-col items-center justify-center overflow-hidden border-b border-black/10 dark:border-white/10`}
                        >
                          {/* App Store style Squircle Icon */}
                          <div className="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/20 border border-white/30 shadow-xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                            <span className="text-white drop-shadow-md">
                              <HugeiconsIcon icon={ProjectIcon} size={28} />
                            </span>
                          </div>
                        </div>

                        {/* Lower Half: Crisp App Info Footer */}
                        <div className="p-3.5 bg-slate-50 dark:bg-[#090f1d] flex flex-col justify-between flex-1">
                          <div>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors truncate">
                              {project.title}
                            </h3>
                            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 truncate">
                              {categoryLabel}
                            </p>
                          </div>

                          {/* Bottom Row: Interactive Action Button (left tech tag removed, radar live removed) */}
                          <div className="mt-3 pt-2.5 border-t border-slate-200 dark:border-white/5 flex items-center justify-end text-[10px]">
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold group-hover:underline inline-flex items-center gap-0.5">
                              <span>Buka</span>
                              <HugeiconsIcon icon={ArrowRight01Icon} size={11} />
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* ─── APP STORE HOVER / CLICK FLYOUT POPOVER (SPACIOUS & UNCLUTTERED) ─── */}
                <AnimatePresence>
                  {displayedProject && (
                    <>
                      {/* Invisible backdrop for click-outside dismissal if pinned */}
                      {pinnedProject && (
                        <div
                          className="fixed inset-0 z-40"
                          onClick={() => {
                            setPinnedProject(null);
                            setActiveProject(null);
                          }}
                          aria-hidden="true"
                        />
                      )}

                      <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 8 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        onMouseEnter={() => {
                          if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                        }}
                        onMouseLeave={handleCardMouseLeave}
                        className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] sm:w-[450px] md:w-[480px] rounded-2xl border border-slate-200 dark:border-white/20 bg-white/95 dark:bg-[#0c1424]/98 p-5 sm:p-6 shadow-[0_20px_50px_rgba(15,23,42,0.18)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_50px_rgba(16,185,129,0.2)] backdrop-blur-2xl text-left text-slate-900 dark:text-white"
                      >
                        {/* Floating Close Button in Corner (Cleanly outside the content flow) */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveProject(null);
                            setPinnedProject(null);
                          }}
                          className="absolute -top-3 -right-3 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/20 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 shadow-lg transition-all cursor-pointer z-10"
                          aria-label="Tutup preview"
                          title="Tutup (Esc)"
                        >
                          <HugeiconsIcon icon={Cancel01Icon} size={15} />
                        </button>

                        {/* 1. Header Row (App Icon + Title & Category) */}
                        <div className="flex items-center justify-between gap-3 sm:gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
                          <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                            {/* App Icon */}
                            <div
                              className={`h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gradient-to-br ${gradientClass} border border-white/25 flex items-center justify-center text-white shrink-0 shadow-lg`}
                            >
                              <HugeiconsIcon icon={displayedProject.mockupIcon} size={26} />
                            </div>

                            {/* Title & Category Rating */}
                            <div className="min-w-0">
                              <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-tight truncate">
                                {displayedProject.title}
                              </h4>
                              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 mt-1">
                                <span className="text-amber-500 font-bold flex items-center gap-0.5">
                                  <span>5.0</span>
                                  <span>★</span>
                                </span>
                                <span className="text-slate-300 dark:text-slate-600">•</span>
                                <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                                  {shortCategory}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 2. Description Paragraph */}
                        <p className="my-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                          {displayedProject.desc}
                        </p>

                        {/* 3. True Wireframe Image Placeholder Canvas */}
                        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden border-2 border-dashed border-slate-300 dark:border-white/20 bg-slate-100/90 dark:bg-white/[0.03] flex flex-col items-center justify-center p-4 select-none">
                          {/* Classic Wireframe Diagonal Lines (Crossed X backdrop) */}
                          <svg
                            className="absolute inset-0 h-full w-full stroke-slate-300/40 dark:stroke-white/[0.05]"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <line x1="0" y1="0" x2="100%" y2="100%" strokeWidth="1" />
                            <line x1="100%" y1="0" x2="0" y2="100%" strokeWidth="1" />
                          </svg>

                          {/* Centered Image Placeholder Icon & Tag */}
                          <div className="relative z-10 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 shadow-xs border border-slate-200 dark:border-white/10 text-slate-400 dark:text-slate-400">
                              <HugeiconsIcon icon={Image01Icon} size={24} />
                            </div>
                            <div className="text-center">
                              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 block">
                                Image Placeholder
                              </span>
                              <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 block mt-0.5">
                                16 : 9 • Mockup Screenshot
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* 4. Bottom Action Row (Left content deleted, button changed to "Lihat Spesifikasi") */}
                        <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-end">
                          <Link
                            href={`/portofolio/${displayedProject.id}`}
                            prefetch={false}
                            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-95 inline-flex items-center gap-1.5"
                          >
                            <span>Lihat Spesifikasi</span>
                            <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                          </Link>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
