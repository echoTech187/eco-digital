"use client";

import React, { useState, useMemo } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Layers01Icon,
  LaptopProgrammingIcon,
  SmartPhone01Icon,
  Building03Icon,
  ShoppingBag01Icon,
  LockIcon,
  CheckmarkCircle01Icon,
  Globe02Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import {
  PORTFOLIO_PROJECTS,
  ProjectItem,
  PortfolioCategory,
  getWaUrl,
} from "@/data/landing-data";
import { ProjectScreenPreview } from "./project-screen-preview";
import { ProjectDetailModal } from "./project-detail-modal";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Filtered Portfolio Projects
  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((p) =>
      p.categories.includes(activeCategory as PortfolioCategory)
    );
  }, [activeCategory]);

  return (
    <div id="portofolio" className="relative z-20 w-full bg-[#060A14] px-4 sm:px-8 lg:px-14 py-12 sm:py-16 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll preset="fade-up" className="mb-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">
            BUKTI KARYA NYATA
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-white">
            Jangan Percaya Janji Manis—Klik &amp; Coba Sendiri Sistem yang Sudah Live
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-white/60">
            Semua proyek di bawah ini asli hasil kodingan sendiri dan sudah di-<em>deploy</em>. Silakan klik tombol <em>Live Demo</em> untuk mencoba tampilannya langsung dari HP atau laptopmu.
          </p>
        </AnimateOnScroll>

        {/* Category Filter Tabs */}
        <div className="mb-8 sm:mb-10 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
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
                className={`inline-flex items-center gap-1.5 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 scale-105"
                    : "border border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
                }`}
              >
                <HugeiconsIcon icon={TabIcon} size={13} />
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
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white transition-colors group-hover:text-[#10B981]">
                      {p.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                      {p.desc}
                    </p>

                    {/* Feature Badges */}
                    <div className="mt-3.5 sm:mt-4 flex flex-wrap gap-1.5">
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

                    {/* Case Study / Dampak Nyata */}
                    {p.impact && (
                      <div className="mt-3 flex items-start gap-1.5 rounded-xl border border-emerald-500/25 bg-emerald-950/40 px-2.5 py-1.5 text-[11px] text-emerald-300">
                        <HugeiconsIcon
                          icon={CheckmarkCircle01Icon}
                          size={14}
                          className="text-emerald-400 shrink-0 mt-0.5"
                        />
                        <span className="leading-snug">
                          <strong className="text-emerald-200">Hasil:</strong> {p.impact}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Clean Action Buttons */}
                  <div className="mt-4 sm:mt-5 pt-3.5 border-t border-white/10">
                    <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                      <button
                        onClick={() => setSelectedProject(p)}
                        className="flex items-center justify-center gap-1 sm:gap-1.5 rounded-xl border border-white/15 bg-white/5 py-2 sm:py-2.5 px-2 sm:px-3 text-[11px] sm:text-xs font-semibold text-white/90 hover:bg-white/15 hover:text-white transition-all text-center"
                      >
                        <HugeiconsIcon icon={Globe02Icon} size={13} className="text-emerald-400 shrink-0" />
                        <span className="truncate">Coba Live Demo</span>
                      </button>
                      <a
                        href={getWaUrl(
                          `Halo Mas (ecoDigital), saya tertarik bikin sistem seperti ${p.title} (${p.domain}). Boleh minta estimasi alur dan biayanya?`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 sm:gap-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-2 sm:py-2.5 px-2 sm:px-3 text-[11px] sm:text-xs font-bold text-white shadow-md shadow-emerald-950/40 transition-all hover:scale-[1.02] hover:from-emerald-400 hover:to-teal-400 active:scale-95 text-center"
                      >
                        <HugeiconsIcon icon={WhatsappIcon} size={13} className="shrink-0" />
                        <span className="truncate">Bikin Kayak Gini</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Interactive Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

