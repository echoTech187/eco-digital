"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  WhatsappIcon,
  ShieldCheckIcon,
} from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { getWaUrl } from "@/data/landing-data";
import {
  VectorStepChat,
  VectorStepScope,
  VectorStepStaging,
  VectorStepHandover,
} from "@/components/ui/vector-art/workflow-vectors";

interface StepConfig {
  step: string;
  badge: string;
  title: string;
  desc: string;
  renderWidget: () => React.ReactNode;
}

export function WorkflowSection() {
  const steps: StepConfig[] = [
    {
      step: "01",
      badge: "Gratis di WA",
      title: "Curhat Kebutuhan & Ide",
      desc: "Kirim judul, alur, atau kendala kodinganmu. Belum punya gambaran teknis? Kita bedah bareng tanpa biaya.",
      renderWidget: () => <VectorStepChat />,
    },
    {
      step: "02",
      badge: "Tanpa Biaya Siluman",
      title: "Kunci Fitur & Estimasi Biaya",
      desc: "Fitur, deadline, dan biaya disepakati tertulis di awal. Tidak ada biaya mendadak di tengah pengerjaan.",
      renderWidget: () => <VectorStepScope />,
    },
    {
      step: "03",
      badge: "Link Staging Live",
      title: "Eksekusi & Pantau Live",
      desc: "Koding berjalan teratur. Kamu diberikan link staging aktif untuk memantau progres langsung dari HP/laptop.",
      renderWidget: () => <VectorStepStaging />,
    },
    {
      step: "04",
      badge: "Garansi Revisi",
      title: "Demo & Serah Terima Penuh",
      desc: "Sistem didemokan bareng sampai mantap. Diberikan video bedah kode, full file source code, dan garansi.",
      renderWidget: () => <VectorStepHandover />,
    },
  ];

  return (
    <div id="cara-kerja" className="relative z-20 w-full bg-[#060A14] px-4 sm:px-8 lg:px-14 pt-16 sm:pt-20 pb-8 sm:pb-12 scroll-mt-20 overflow-hidden">
      <span id="alur-kerja" className="scroll-mt-24 block" />
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[800px] rounded-full bg-emerald-500/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <AnimateOnScroll preset="fade-up" className="mb-12 sm:mb-16 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Alur Kerja Anti-Ghosting
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
            4 Langkah Terarah, <span className="text-emerald-400">Dari Ide Sampai Beres</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-white/60 max-w-xl mx-auto">
            Komunikasi to the point langsung dengan developer. Tanpa perantara sales yang kaku, tanpa biaya siluman.
          </p>
        </AnimateOnScroll>

        {/* Connected Bento Pipeline Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Subtle connecting track line on desktop behind the cards */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent pointer-events-none z-0" />

          {steps.map((s, idx) => (
            <div
              key={s.step}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/40 hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)] z-10"
            >
              {/* Connecting Node Icon for Desktop (between cards) */}
              {idx < steps.length - 1 && (
                <span className="hidden lg:flex absolute -right-3 top-10 z-20 h-6 w-6 items-center justify-center rounded-full bg-[#081220] border border-emerald-500/40 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.25)]">
                  <HugeiconsIcon icon={ArrowRight01Icon} size={12} />
                </span>
              )}

              {/* Step Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-black text-sm shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:scale-105 group-hover:border-emerald-400 transition-all">
                      {s.step}
                    </span>
                    <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[9.5px] font-bold text-emerald-300 uppercase tracking-wide">
                      {s.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/60 min-h-[52px]">
                  {s.desc}
                </p>
              </div>

              {/* Micro-Visual Widget */}
              <div className="mt-5 pt-4 border-t border-white/5">
                {s.renderWidget()}
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner at the Bottom */}
        <AnimateOnScroll preset="fade-up" className="mt-8 sm:mt-12">
          <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-950/40 via-emerald-900/15 to-[#060A14] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div className="flex items-center gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <HugeiconsIcon icon={ShieldCheckIcon} size={20} />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                  Garansi Ketenangan & Transparansi 100%
                  <span className="hidden sm:inline-block rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9.5px] text-emerald-300 font-semibold">
                    Bebas Cemas
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-white/60 mt-0.5">
                  Seluruh source code jadi milikmu penuh. Didukung video rekaman bedah kodingan dan pendampingan sampai sistem siap jalan.
                </p>
              </div>
            </div>

            <a
              href={getWaUrl("Halo Mas (ecoDigital), saya mau konsultasi alur pengerjaan kodingan / sistem saya.")}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-gray-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] active:scale-95"
            >
              <HugeiconsIcon icon={WhatsappIcon} size={15} />
              <span>Mulai Curhat Kebutuhan (Gratis)</span>
              <HugeiconsIcon icon={ArrowRight01Icon} size={13} />
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
