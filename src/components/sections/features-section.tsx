"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Globe02Icon,
  WhatsappIcon,
  CreditCardIcon,
  CheckmarkCircle01Icon,
  ShieldCheckIcon,
  LockIcon,
  FlashIcon,
  CpuIcon,
  CodeSquareIcon,
  CheckmarkSquare02Icon,
} from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import founderImg from "../../../public/images/founder.png";

export function FeaturesSection() {
  const [activeArchTab, setActiveArchTab] = useState<number>(0);

  const archLayers = [
    {
      id: 0,
      name: "Domain & Business Logic",
      desc: "Struktur data, aturan alur sistem, dan validasi logika murni.",
      badge: "Clean Architecture",
    },
    {
      id: 1,
      name: "Service & Controller Layer",
      desc: "RESTful API, modular routing, dan query database teroptimasi.",
      badge: "High Performance",
    },
    {
      id: 2,
      name: "Presentation & Database",
      desc: "Antarmuka responsif modern & skema migrasi database siap pakai.",
      badge: "Production Ready",
    },
  ];

  return (
    <section
      id="keunggulan"
      className="relative z-20 w-full bg-slate-50 dark:bg-[#060A14] px-4 sm:px-8 lg:px-14 py-20 sm:py-28 lg:py-32 scroll-mt-0 overflow-hidden transition-colors duration-200"
    >
      {/* Dynamic Ambient Glow Pools */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[550px] w-[550px] rounded-full bg-emerald-500/10 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="pointer-events-none absolute top-1/2 left-10 h-72 w-72 rounded-full bg-blue-500/5 blur-[140px]" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <AnimateOnScroll preset="fade-up" once={false} className="mb-14 sm:mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 mb-4 backdrop-blur-md shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            <span>STANDAR KERJA ECODIGITAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
            Kenapa Ngoding Bareng ecoDigital{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
              Jauh Lebih Tenang?
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm lg:text-base leading-relaxed text-slate-600 dark:text-slate-300/80">
            Empat standar kualitas rekayasa software untuk menjamin proyek <strong>Aplikasi Custom</strong>, <strong>Jasa API &amp; Backend</strong>, dan <strong>Web Instansi &amp; Bisnis</strong> Anda selesai tepat waktu, terstruktur rapi, dan transparan.
          </p>
        </AnimateOnScroll>

        {/* ─── 2x2 Bento Grid (Clean, Themed, No Hardcoded Pitch-Black Boxes) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* ─── BENTO CARD 1: Clean Architecture & Dokumentasi Rapi ─── */}
          <AnimateOnScroll preset="fade-up" once={false} delay={0.1} duration={0.6} className="h-full">
            <div className="group relative flex flex-col justify-between h-full rounded-[32px] border border-slate-200 dark:border-emerald-500/20 bg-white dark:bg-transparent dark:bg-gradient-to-b dark:from-[#0e1726]/95 dark:via-[#09101c]/95 dark:to-[#050912]/98 p-7 sm:p-9 shadow-xl dark:shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)]">
              {/* Glow Accent Top Rim */}
              <div className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

              {/* 1. Header Information */}
              <div className="mb-6">
                <div className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                  <HugeiconsIcon icon={CodeSquareIcon} size={12} />
                  <span>STANDAR #1: ARSITEKTUR BERSIH</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                  Clean Architecture &amp; Dokumentasi Rapi{" "}
                  <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">(Bukan Sekadar .ZIP)</span>
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300/85">
                  Kode dibangun modular dengan arsitektur bersih: terstruktur rapi, mudah dibaca, dan siap dikembangkan lanjut. Dilengkapi panduan instalasi serta skema database lengkap.
                </p>
              </div>

              {/* 2. Visual Showcase: Architecture Specimen Inspector */}
              <div className="relative w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] p-4 shadow-xs">
                <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-2.5 mb-3 text-[10px] font-mono">
                  <div className="flex items-center gap-2 text-slate-800 dark:text-white/80">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-semibold text-slate-900 dark:text-white">architecture-spec.ts</span>
                  </div>
                  <span className="rounded-md bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 px-2 py-0.5 text-[9px] font-bold text-emerald-700 dark:text-emerald-300">
                    Clean &amp; Modular
                  </span>
                </div>

                {/* Layer Selector */}
                <div className="space-y-1.5">
                  {archLayers.map((layer, lIdx) => (
                    <button
                      key={layer.id}
                      type="button"
                      onClick={() => setActiveArchTab(lIdx)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        activeArchTab === lIdx
                          ? "bg-white dark:bg-slate-900 border-emerald-500/40 shadow-xs text-slate-900 dark:text-white"
                          : "bg-white/50 dark:bg-white/[0.02] border-slate-200/60 dark:border-white/5 text-slate-600 dark:text-white/60 hover:bg-white dark:hover:bg-white/[0.06]"
                      }`}
                    >
                      <div>
                        <div className="text-[11px] font-bold flex items-center gap-1.5">
                          <HugeiconsIcon icon={CheckmarkSquare02Icon} size={12} className={activeArchTab === lIdx ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400 dark:text-white/30"} />
                          <span>{layer.name}</span>
                        </div>
                        <p className="text-[9.5px] text-slate-500 dark:text-white/50 mt-0.5">
                          {layer.desc}
                        </p>
                      </div>
                      <span className="text-[8.5px] font-mono font-semibold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 shrink-0">
                        {layer.badge}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Proof Guarantee Bullets */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Struktur kode modular dan terdokumentasi lengkap tanpa dependensi aneh</span>
                </div>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Panduan instalasi langkah demi langkah agar sistem langsung jalan di laptopmu</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* ─── BENTO CARD 2: Live Staging Preview (Akses 24/7) ─── */}
          <AnimateOnScroll preset="fade-up" once={false} delay={0.2} duration={0.6} className="h-full">
            <div className="group relative flex flex-col justify-between h-full rounded-[32px] border border-slate-200 dark:border-cyan-500/20 bg-white dark:bg-transparent dark:bg-gradient-to-b dark:from-[#0e1726]/95 dark:via-[#09101c]/95 dark:to-[#050912]/98 p-7 sm:p-9 shadow-xl dark:shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)]">
              {/* Glow Accent Top Rim */}
              <div className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

              {/* 1. Header Information */}
              <div className="mb-6">
                <div className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-cyan-500/25 bg-cyan-50 dark:bg-cyan-950/40 px-3 py-1 text-[11px] font-semibold text-cyan-700 dark:text-cyan-300">
                  <HugeiconsIcon icon={Globe02Icon} size={12} />
                  <span>STANDAR #2: TRANSPARANSI PENUH</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                  Pantau Progres Lewat Link Demo Live{" "}
                  <span className="text-cyan-600 dark:text-cyan-400 font-extrabold">(Akses 24/7)</span>
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300/85">
                  Nggak perlu menebak-nebak apakah proyekmu sudah dikerjakan atau belum. Kamu diberikan tautan staging live aktif untuk mencoba alur aplikasi langsung dari browser HP &amp; laptop kapan saja.
                </p>
              </div>

              {/* 2. Visual Showcase: Cloud Staging Telemetry */}
              <div className="relative w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] p-4 shadow-xs">
                {/* Safari Omnibar */}
                <div className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 px-3 py-1.5 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                    <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 truncate text-[10px] font-mono text-cyan-700 dark:text-cyan-200">
                    <HugeiconsIcon icon={LockIcon} size={11} className="text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span className="truncate">staging-proyekmu.ecodigital.id</span>
                  </div>
                  <span className="flex items-center gap-1 rounded bg-cyan-500/10 dark:bg-cyan-500/20 px-2 py-0.5 text-[9px] font-mono font-bold text-cyan-700 dark:text-cyan-300 shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-ping" />
                    LIVE
                  </span>
                </div>

                {/* Staging Metrics Box */}
                <div className="rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 p-3 space-y-2 font-mono text-[9.5px]">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-1.5">
                    <span className="text-slate-500 dark:text-white/50 flex items-center gap-1.5">
                      <HugeiconsIcon icon={CpuIcon} size={12} className="text-cyan-600 dark:text-cyan-400" />
                      <span>Status Build:</span>
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      ✓ Deployed &amp; Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-1.5">
                    <span className="text-slate-500 dark:text-white/50 flex items-center gap-1.5">
                      <HugeiconsIcon icon={FlashIcon} size={12} className="text-amber-500" />
                      <span>Cloud Deployment:</span>
                    </span>
                    <span className="text-slate-800 dark:text-white font-semibold">Fast Global Edge CDN</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-white/50">Uji Coba Multi-Role:</span>
                    <span className="text-emerald-600 dark:text-emerald-300">Admin, User, &amp; Tamu Siap</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500 dark:text-white/60">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Bebas coba alur sistem tanpa repot setup server</span>
                  </span>
                  <span className="font-mono text-cyan-600 dark:text-cyan-400 font-bold">Akses 24/7</span>
                </div>
              </div>

              {/* 3. Proof Guarantee Bullets */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>Link demo live aktif dapat dites langsung fiturnya setiap perkembangan</span>
                </div>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>Keluarga, atasan, atau rekan bisa langsung mencoba tanpa instalasi rumit</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* ─── BENTO CARD 3: Direct Developer Chat (Tanpa Perantara) ─── */}
          <AnimateOnScroll preset="fade-up" once={false} delay={0.3} duration={0.6} className="h-full">
            <div className="group relative flex flex-col justify-between h-full rounded-[32px] border border-slate-200 dark:border-emerald-500/20 bg-white dark:bg-transparent dark:bg-gradient-to-b dark:from-[#0e1726]/95 dark:via-[#09101c]/95 dark:to-[#050912]/98 p-7 sm:p-9 shadow-xl dark:shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)]">
              {/* Glow Accent Top Rim */}
              <div className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

              {/* 1. Header Information */}
              <div className="mb-6">
                <div className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                  <HugeiconsIcon icon={WhatsappIcon} size={12} />
                  <span>STANDAR #3: KOMUNIKASI LANGSUNG</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                  Diskusi Langsung Sama Developer{" "}
                  <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">(Tanpa Perantara Sales)</span>
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300/85">
                  Bebas drama salah paham karena perantara yang tidak paham teknis. Mau ubah struktur tabel, diskusi arsitektur sistem, atau konsultasi solusi error—kamu ngobrol langsung sama developer yang menulis kodenya.
                </p>
              </div>

              {/* 2. Visual Showcase: WhatsApp Dialogue Card */}
              <div className="relative w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] p-4 shadow-xs">
                {/* Chat Top Bar */}
                <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-2.5 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="relative h-8 w-8 rounded-full overflow-hidden border border-emerald-500/40 shrink-0">
                      <Image
                        src={founderImg}
                        alt="Mas Eko Susanto - Lead Developer"
                        width={32}
                        height={32}
                        className="h-full w-full object-cover object-top aspect-square"
                        style={{ aspectRatio: "1 / 1" }}
                      />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        <span>Mas Eko</span>
                        <span className="text-[9px] font-semibold text-emerald-600 dark:text-emerald-400">✓ Developer</span>
                      </div>
                      <div className="text-[9px] text-emerald-600 dark:text-emerald-300/80 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Online • Respon cepat &amp; solutif</span>
                      </div>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[9px] font-mono font-semibold text-emerald-700 dark:text-emerald-300">
                    Direct Contact
                  </span>
                </div>

                {/* Simulated Chat Dialogue */}
                <div className="space-y-2 text-[10.5px]">
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-tr-xs bg-slate-200/80 dark:bg-white/10 px-3.5 py-2 text-slate-800 dark:text-white/90">
                      <p>Mas Eko, kalau ada penyesuaian alur sebelum rilis bisa dibantu cek?</p>
                      <span className="block text-[8px] text-slate-500 dark:text-white/40 text-right mt-0.5">09:41</span>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="max-w-[90%] rounded-2xl rounded-tl-xs bg-emerald-500/15 dark:bg-emerald-500/20 border border-emerald-500/30 px-3.5 py-2 text-slate-900 dark:text-white">
                      <p className="text-slate-800 dark:text-emerald-100 font-medium leading-relaxed">
                        Bisa banget Mas. Langsung kita sesuaikan logikanya hari ini, nanti link staging-nya otomatis ter-update ya 👍
                      </p>
                      <span className="flex items-center justify-end gap-1 text-[8px] text-emerald-600 dark:text-emerald-400 mt-1">
                        <span>09:42</span>
                        <span className="font-bold">✓✓</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Proof Guarantee Bullets */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Diskusi to the point di WhatsApp langsung dengan eksekutor proyek</span>
                </div>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Komunikasi teknis transparan tanpa risiko pesan nyangkut di sales</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* ─── BENTO CARD 4: Pembayaran Bertahap Sesuai Milestone (Dana Aman) ─── */}
          <AnimateOnScroll preset="fade-up" once={false} delay={0.4} duration={0.6} className="h-full">
            <div className="group relative flex flex-col justify-between h-full rounded-[32px] border border-slate-200 dark:border-amber-500/20 bg-white dark:bg-transparent dark:bg-gradient-to-b dark:from-[#0e1726]/95 dark:via-[#09101c]/95 dark:to-[#050912]/98 p-7 sm:p-9 shadow-xl dark:shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-amber-500/50 dark:hover:border-amber-400/50 hover:shadow-[0_20px_60px_rgba(245,158,11,0.15)]">
              {/* Glow Accent Top Rim */}
              <div className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

              {/* 1. Header Information */}
              <div className="mb-6">
                <div className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-amber-500/25 bg-amber-50 dark:bg-amber-950/40 px-3 py-1 text-[11px] font-semibold text-amber-700 dark:text-amber-300">
                  <HugeiconsIcon icon={CreditCardIcon} size={12} />
                  <span>STANDAR #4: KEAMANAN INVESTASI</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                  Bayar Bertahap Sesuai Milestone{" "}
                  <span className="text-amber-600 dark:text-amber-400 font-extrabold">(Dana 100% Aman)</span>
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300/85">
                  Uangmu aman tanpa DP mengambang. Pembayaran dibagi bertahap sesuai milestone pengerjaan, dan pelunasan hanya dilakukan setelah sistem selesai didemokan serta terbukti jalan di laptopmu.
                </p>
              </div>

              {/* 2. Visual Showcase: 3-Step Milestone Progress Bar */}
              <div className="relative w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] p-4 shadow-xs">
                {/* Milestone Security Header */}
                <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-2.5 mb-3">
                  <span className="text-[10px] font-mono text-slate-600 dark:text-white/70 flex items-center gap-1.5">
                    <HugeiconsIcon icon={ShieldCheckIcon} size={13} className="text-amber-500" />
                    <span className="font-bold text-slate-900 dark:text-white">SISTEM TERMIN ANTI-CANGGUNG</span>
                  </span>
                  <span className="rounded bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 px-2 py-0.5 text-[9px] font-mono font-bold text-amber-700 dark:text-amber-300">
                    Bebas Risiko
                  </span>
                </div>

                {/* 3 Step Milestone Visual Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 px-3 py-2 text-[10px]">
                    <span className="flex items-center gap-2 text-slate-800 dark:text-white font-medium">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-slate-950 text-[9px] font-bold">1</span>
                      <span>DP Awal (Mulai Pengerjaan &amp; Basis Data)</span>
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono text-[9px] font-bold">30% · Aktif ✓</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 px-3 py-2 text-[10px]">
                    <span className="flex items-center gap-2 text-slate-800 dark:text-white font-medium">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-slate-950 text-[9px] font-bold">2</span>
                      <span>Demo Live Staging &amp; Uji Fitur Utama</span>
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono text-[9px] font-bold">40% · Tervalidasi ✓</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-amber-500/10 border border-amber-500/30 px-3 py-2 text-[10px]">
                    <span className="flex items-center gap-2 text-amber-800 dark:text-amber-200 font-semibold">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-slate-950 text-[9px] font-bold">3</span>
                      <span>Pelunasan &amp; Serah Terima Full Source Code</span>
                    </span>
                    <span className="text-amber-700 dark:text-amber-300 font-mono text-[9px] font-bold">30% · Final</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500 dark:text-white/50">
                  <span className="flex items-center gap-1">
                    <HugeiconsIcon icon={LockIcon} size={11} className="text-emerald-600 dark:text-emerald-400" />
                    <span>Bayar bertahap setelah melihat progres nyata</span>
                  </span>
                  <span className="text-amber-600 dark:text-amber-400 font-mono text-[9px]">Garansi 100%</span>
                </div>
              </div>

              {/* 3. Proof Guarantee Bullets */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>Tanpa biaya siluman atau kenaikan tarif sepihak di tengah jalan</span>
                </div>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>Penyerahan file sistem lengkap dengan database &amp; panduan instalasi</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}
