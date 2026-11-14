"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  WhatsappIcon,
  ShieldCheckIcon,
  CheckmarkCircle01Icon,
  Globe02Icon,
  FileCodeIcon,
  LockIcon,
  Message01Icon,
  ComputerIcon,
  Award01Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { SplitWordsTitle } from "@/components/ui/split-words-title";
import { getWaUrl } from "@/data/landing-data";

interface MilestoneDeliverable {
  icon: React.ComponentProps<typeof HugeiconsIcon>["icon"];
  label: string;
  highlight?: boolean;
}

interface Milestone {
  step: string;
  phase: string;
  title: string;
  highlight: string;
  desc: string;
  deliverables: MilestoneDeliverable[];
  tag: string;
}

export function WorkflowSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.4, 1]);

  // Dynamic progress line tracking scroll through milestones
  const { scrollYProgress: trackProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  const trackHeight = useTransform(trackProgress, [0, 1], ["0%", "100%"]);

  const milestones: Milestone[] = [
    {
      step: "01",
      phase: "MILESTONE 01 • DISCOVERY & CURHAT",
      title: "Curhat Kebutuhan",
      highlight: "& Eksplorasi Solusi",
      desc: "Kirim ide aplikasi custom, rancangan endpoint API, atau kebutuhan web instansi & bisnismu. Kita bedah langsung bersama developer tanpa perantara sales yang kaku.",
      tag: "Gratis di WhatsApp",
      deliverables: [
        { icon: Message01Icon, label: "Chat / Call Langsung Mas Eko" },
        { icon: SparklesIcon, label: "Rekomendasi Arsitektur Database & Stack" },
        { icon: CheckmarkCircle01Icon, label: "Biaya: Rp 0 (Konsultasi Bebas)", highlight: true },
      ],
    },
    {
      step: "02",
      phase: "MILESTONE 02 • SPEC & COST LOCK",
      title: "Kunci Fitur, Deadline",
      highlight: "& Estimasi Biaya",
      desc: "Semua modul, alur logika, tenggat waktu, dan total biaya disepakati tertulis di awal. Sistem pembayaran bertahap per-progres nyata, tanpa DP mengambang dan tanpa biaya siluman.",
      tag: "Transparan & Tertulis",
      deliverables: [
        { icon: LockIcon, label: "Dokumen Kesepakatan Fitur Tertulis" },
        { icon: CheckmarkCircle01Icon, label: "Deadline Rilis / Go-Live Terkunci" },
        { icon: ShieldCheckIcon, label: "Bayar Bertahap (No DP Mengambang)", highlight: true },
      ],
    },
    {
      step: "03",
      phase: "MILESTONE 03 • BUILD & LIVE STAGING",
      title: "Eksekusi Koding",
      highlight: "& Pantau Progres 24/7",
      desc: "Kodingan dikerjakan rapi berbasis clean architecture. Kamu diberikan tautan staging aktif yang bisa kamu buka dari HP maupun laptop kapan saja untuk menguji alur aplikasimu secara nyata.",
      tag: "Live Demo URL Aktif",
      deliverables: [
        { icon: Globe02Icon, label: "staging.ecodigital.id (Akses Demo 24/7)" },
        { icon: ComputerIcon, label: "Uji Coba Alur Langsung dari HP & Laptop" },
        { icon: CheckmarkCircle01Icon, label: "Laporan Progres Transparan", highlight: true },
      ],
    },
    {
      step: "04",
      phase: "MILESTONE 04 • LAUNCH & WARRANTY",
      title: "Demo Bareng, Serah Terima",
      highlight: "& Garansi Penuh",
      desc: "Sistem didemokan bersama sampai tuntas dan dipastikan berjalan mulus di lingkungan Anda. Seluruh berkas sistem dan database diserahkan utuh, didukung sesi pendampingan dan garansi perbaikan.",
      tag: "Serah Terima Tuntas & Garansi",
      deliverables: [
        { icon: FileCodeIcon, label: "Berkas Sistem & Database Lengkap (Git + Zip)" },
        { icon: CheckmarkCircle01Icon, label: "Panduan Setup & Dokumentasi Menjalankan Sistem" },
        { icon: Award01Icon, label: "Garansi Revisi & Pendampingan Penuh", highlight: true },
      ],
    },
  ];

  return (
    <section
      id="cara-kerja"
      ref={sectionRef}
      className="relative z-20 w-full -mt-10 sm:-mt-14 rounded-t-[36px] sm:rounded-t-[56px] border-t border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#060A14] px-4 sm:px-8 lg:px-14 pt-20 sm:pt-28 pb-16 sm:pb-24 shadow-[0_-25px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_-30px_70px_-20px_rgba(0,0,0,0.6)] scroll-mt-20 overflow-hidden transition-colors duration-300"
    >
      <span id="alur-kerja" className="scroll-mt-24 block" />

      {/* Atmospheric Background Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 blur-[180px]" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

      <motion.div
        style={{ scale, y, opacity }}
        className="relative mx-auto max-w-5xl will-change-transform origin-top"
      >
        {/* Section Header */}
        <AnimateOnScroll preset="fade-up" className="mb-16 sm:mb-24 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 mb-4 backdrop-blur-md shadow-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            <span>ROADMAP PENGERJAAN SISTEM</span>
          </div>

          <SplitWordsTitle
            text="Alur Kerja Modern, Dari Ide Sampai Beres"
            as="h2"
            highlightWords={["Dari", "Ide", "Sampai", "Beres"]}
            highlightClassName="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15] justify-center"
          />

          <p className="mt-4 text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-300/80 max-w-2xl mx-auto leading-relaxed">
            Transparan di setiap milestone. Anda tahu persis apa yang sedang dikerjakan untuk <strong>Aplikasi Custom</strong>, <strong>API &amp; Backend</strong>, atau <strong>Web Instansi</strong> Anda — progresnya bisa dicoba sendiri via staging live 24/7.
          </p>
        </AnimateOnScroll>

        {/* ─── ROADMAP SPINE & MILESTONES (Central Rail on Desktop, Left Rail on Mobile) ─── */}
        <div className="relative">
          {/* Central Connecting Timeline Rail (Desktop) with Inova scroll-fill progress */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-[3px] bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden pointer-events-none z-0">
            <motion.div
              style={{ height: trackHeight }}
              className="w-full bg-gradient-to-b from-emerald-500 via-teal-400 to-cyan-400 shadow-[0_0_12px_#10b981]"
            />
          </div>

          {/* Left Connecting Timeline Rail (Mobile & Tablet) with Inova scroll-fill progress */}
          <div className="lg:hidden absolute left-5 sm:left-7 top-6 bottom-6 w-[3px] bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden pointer-events-none z-0">
            <motion.div
              style={{ height: trackHeight }}
              className="w-full bg-gradient-to-b from-emerald-500 via-teal-400 to-cyan-400 shadow-[0_0_12px_#10b981]"
            />
          </div>

          {/* Milestones Stack */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-20 relative z-10">
            {milestones.map((m, idx) => {
              const isEven = idx % 2 === 1; // 0 = left, 1 = right, 2 = left, 3 = right
              const isSelected = activeStep === idx;

              return (
                <div
                  key={m.step}
                  onMouseEnter={() => setActiveStep(idx)}
                  className="relative flex flex-col lg:flex-row items-start lg:items-center group"
                >
                  {/* ─── Central Node Circle (Desktop: Middle, Mobile: Left Rail) ─── */}
                  <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex items-center justify-center shrink-0 z-20 mb-4 lg:mb-0">
                    <div
                      className={`relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl font-mono font-black text-sm transition-all duration-300 border-2 ${
                        isSelected
                          ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.5)] scale-110"
                          : "bg-white dark:bg-[#070D18] text-emerald-600 dark:text-emerald-400 border-emerald-500/40 shadow-md group-hover:border-emerald-400 group-hover:scale-105"
                      }`}
                    >
                      <span>{m.step}</span>
                      {isSelected && (
                        <span className="absolute -inset-1 rounded-2xl border border-emerald-400 animate-ping opacity-40 pointer-events-none" />
                      )}
                    </div>
                  </div>

                  {/* ─── Milestone Card (Alternating on Desktop) ─── */}
                  <div
                    className={`w-full lg:w-[calc(50%-48px)] pl-12 sm:pl-16 lg:pl-0 ${
                      isEven ? "lg:ml-auto lg:text-left" : "lg:mr-auto lg:text-left"
                    }`}
                  >
                    <div
                      className={`relative rounded-[28px] border bg-white dark:bg-slate-900/80 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 ${
                        isSelected
                          ? "border-emerald-500/70 shadow-2xl shadow-emerald-500/10 -translate-y-1 dark:bg-slate-900/95"
                          : "border-slate-200/90 dark:border-white/10 shadow-sm hover:border-emerald-500/40 hover:shadow-lg"
                      }`}
                    >
                      {/* Top Meta Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                        <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase">
                          {m.phase}
                        </span>
                        <span className="rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 px-2.5 py-0.5 text-[9.5px] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">
                          {m.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-snug tracking-tight">
                        <span>{m.title} </span>
                        <span className="text-emerald-600 dark:text-emerald-400">{m.highlight}</span>
                      </h3>

                      {/* Description */}
                      <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300/85 leading-relaxed">
                        {m.desc}
                      </p>

                      {/* Deliverables / Output Nyata Checklist */}
                      <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/10 space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-white/40 block mb-1.5">
                          Output Nyata Milestone:
                        </span>
                        <div className="grid grid-cols-1 gap-1.5">
                          {m.deliverables.map((d, dIdx) => (
                            <div
                              key={dIdx}
                              className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium transition-colors ${
                                d.highlight
                                  ? "bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-200 font-semibold"
                                  : "bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 text-slate-700 dark:text-slate-300"
                              }`}
                            >
                              <HugeiconsIcon
                                icon={d.icon}
                                size={15}
                                className={d.highlight ? "text-emerald-600 dark:text-emerald-400 shrink-0" : "text-slate-400 dark:text-white/40 shrink-0"}
                              />
                              <span className="leading-snug">{d.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── Bottom Reassurance Roadmap Banner ─── */}
        <AnimateOnScroll preset="fade-up" className="mt-16 sm:mt-24">
          <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-50 via-white to-teal-50 dark:from-emerald-950/50 dark:via-slate-900 dark:to-teal-950/40 p-5 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-5 text-left shadow-xl shadow-emerald-500/5">
            <div className="flex items-start sm:items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30">
                <HugeiconsIcon icon={ShieldCheckIcon} size={24} />
              </div>
              <div>
                <div className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2 flex-wrap">
                  <span>Siap Mulai Milestone 01 Hari Ini?</span>
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800 dark:text-emerald-300">
                    Bebas Cemas &amp; Tanpa Biaya
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300/80 mt-1">
                  Ceritakan kebutuhan Aplikasi Custom, API &amp; Backend, atau Web Instansi &amp; Bisnis Anda. Kita diskusikan solusinya secara gratis di awal.
                </p>
              </div>
            </div>

            <a
              href={getWaUrl("Halo Mas Eko (ecoDigital), saya mau mulai diskusi dari Milestone 01 untuk sistem saya.")}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 shadow-xl shadow-emerald-500/25 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <HugeiconsIcon icon={WhatsappIcon} size={18} />
              <span>Mulai Curhat Kebutuhan (Gratis)</span>
              <HugeiconsIcon icon={ArrowRight01Icon} size={15} />
            </a>
          </div>
        </AnimateOnScroll>
      </motion.div>
    </section>
  );
}
