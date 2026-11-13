"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Video01Icon,
  PlayIcon,
  Globe02Icon,
  WhatsappIcon,
  CreditCardIcon,
  CheckmarkCircle01Icon,
  ShieldCheckIcon,
  LockIcon,
  FlashIcon,
  CpuIcon,
  CodeSquareIcon,
} from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import founderImg from "../../../public/images/founder.png";

export function FeaturesSection() {
  // Interactive state for Card 1 (Video Player Chapter Scrubber)
  const [activeChapter, setActiveChapter] = useState<number>(1);

  const chapters = [
    {
      id: 0,
      timestamp: "02:15",
      title: "Relasi DB & Tabel",
      desc: "Bedah struktur foreign key, index query, dan rancangan tabel ERD.",
      progress: "25%",
    },
    {
      id: 1,
      timestamp: "06:40",
      title: "Logika Algoritma & Controller",
      desc: "Penjelasan baris kode rumus matematis (AHP/TOPSIS/Geofencing).",
      progress: "60%",
    },
    {
      id: 2,
      timestamp: "11:20",
      title: "Simulasi Tanya-Jawab Penguji",
      desc: "Tips menjawab pertanyaan teknis dosen atau pimpinan saat demo.",
      progress: "88%",
    },
  ];

  return (
    <section
      id="keunggulan"
      className="relative z-20 w-full bg-[#060A14] px-4 sm:px-8 lg:px-14 py-20 sm:py-28 lg:py-32 scroll-mt-0 overflow-hidden"
    >
      {/* Dynamic Ambient Glow Pools */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[550px] w-[550px] rounded-full bg-emerald-500/10 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="pointer-events-none absolute top-1/2 left-10 h-72 w-72 rounded-full bg-blue-500/5 blur-[140px]" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Apple-style Editorial Kicker & Section Header */}
        <AnimateOnScroll preset="fade-up" once={false} className="mb-14 sm:mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-4 backdrop-blur-md shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>STANDAR KERJA ECODIGITAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Kenapa Ngoding Bareng ecoDigital{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Jauh Lebih Tenang?
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm lg:text-base leading-relaxed text-slate-300/80">
            Empat standar kualitas nyata agar proses pembuatan sistemmu transparan, bebas cemas, dan tuntas sampai jalan—tanpa drama joki lepas tangan atau proyek mangkrak.
          </p>
        </AnimateOnScroll>

        {/* ─── Apple-grade 2x2 Bento Showcase Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* ─── BENTO CARD 1: Video Bedah Kode & Logika (Interactive Video Console) ─── */}
          <AnimateOnScroll preset="fade-up" once={false} delay={0.1} duration={0.6} className="h-full">
            <div className="group relative flex flex-col justify-between h-full rounded-[32px] border border-emerald-500/20 bg-gradient-to-b from-[#0e1726]/95 via-[#09101c]/95 to-[#050912]/98 p-7 sm:p-9 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-emerald-400/50 hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)]">
              {/* Glow Accent Top Rim */}
              <div className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

              {/* 1. Header Information (Placed FIRST so value proposition is instantly readable) */}
              <div className="mb-6">
                <div className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-950/40 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                  <HugeiconsIcon icon={Video01Icon} size={12} />
                  <span>STANDAR #1: EDUKASI TOTAL</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  Bukan Sekadar Kirim File .ZIP{" "}
                  <span className="text-emerald-400 font-extrabold">(Dapat Video Bedah Logika)</span>
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300/85">
                  Saya nggak cuma kirim source code lalu menghilang. Kamu dapat rekaman video penjelasan alur koding, relasi database, dan cara kerja algoritma sampai kamu paham luar-dalam saat ditanya dosen atau pimpinan.
                </p>
              </div>

              {/* 2. Interactive Visual Showcase: Apple-style Glass Video Inspector */}
              <div className="relative w-full rounded-2xl border border-white/10 bg-black/70 p-4 shadow-inner">
                {/* Video Console Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3 text-[10px] font-mono">
                  <div className="flex items-center gap-2 text-white/80">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-semibold text-white">bedah-arsitektur-sistem.mp4</span>
                  </div>
                  <span className="rounded-md bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 text-[9px] font-bold text-emerald-300">
                    1080p 60fps Full HD
                  </span>
                </div>

                {/* Video Scrubber & Play State Display */}
                <div className="relative rounded-xl bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/40 border border-white/10 p-3.5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
                        <HugeiconsIcon icon={CodeSquareIcon} size={13} className="text-emerald-400" />
                        <span>Modul: {chapters[activeChapter].title}</span>
                      </div>
                      <p className="text-[9px] text-white/60 mt-0.5">
                        {chapters[activeChapter].desc}
                      </p>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/40 shrink-0">
                      <HugeiconsIcon icon={PlayIcon} size={16} className="translate-x-0.5" />
                    </div>
                  </div>

                  {/* Progress Bar Dynamic */}
                  <div className="space-y-1">
                    <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 transition-all duration-300"
                        style={{ width: chapters[activeChapter].progress }}
                      />
                    </div>
                    <div className="flex justify-between text-[8px] font-mono text-white/50">
                      <span>{chapters[activeChapter].timestamp}</span>
                      <span>14:20 Durasi Total</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Chapter Buttons (Click to scrub video) */}
                <div className="mt-3 grid grid-cols-3 gap-1.5 text-[9px] font-mono">
                  {chapters.map((ch) => (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => setActiveChapter(ch.id)}
                      className={`px-2 py-1.5 rounded-lg border text-center transition-all cursor-pointer ${
                        activeChapter === ch.id
                          ? "border-emerald-400 bg-emerald-500/20 text-emerald-300 font-bold shadow-sm"
                          : "border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span className="block text-[8px] text-emerald-400/90">{ch.timestamp}</span>
                      <span className="truncate block font-sans">{ch.title.split(" ")[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Proof Guarantee Bullets */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-emerald-400 shrink-0" />
                  <span>Video rekaman layar 1-on-1 berdurasi santai per alur fitur</span>
                </div>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-emerald-400 shrink-0" />
                  <span>Dijelaskan pakai bahasa manusia sederhana tanpa istilah ribet</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* ─── BENTO CARD 2: Live Staging Preview (Edge Deployment Beacon) ─── */}
          <AnimateOnScroll preset="fade-up" once={false} delay={0.2} duration={0.6} className="h-full">
            <div className="group relative flex flex-col justify-between h-full rounded-[32px] border border-cyan-500/20 bg-gradient-to-b from-[#0e1726]/95 via-[#09101c]/95 to-[#050912]/98 p-7 sm:p-9 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)]">
              {/* Glow Accent Top Rim */}
              <div className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

              {/* 1. Header Information */}
              <div className="mb-6">
                <div className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-cyan-500/25 bg-cyan-950/40 px-3 py-1 text-[11px] font-semibold text-cyan-300">
                  <HugeiconsIcon icon={Globe02Icon} size={12} />
                  <span>STANDAR #2: TRANSPARANSI PENUH</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  Pantau Progres Lewat Link Demo Live{" "}
                  <span className="text-cyan-400 font-extrabold">(Akses 24/7)</span>
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300/85">
                  Nggak perlu menebak-nebak apakah proyekmu sudah dikerjakan atau belum. Kamu diberikan tautan staging live aktif untuk mencoba alur aplikasi langsung dari browser HP &amp; laptop kapan saja.
                </p>
              </div>

              {/* 2. Visual Showcase: Cloud Edge Deployment Telemetry */}
              <div className="relative w-full rounded-2xl border border-white/10 bg-black/70 p-4 shadow-inner">
                {/* Safari Omnibar with Verified SSL */}
                <div className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                    <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 truncate text-[10px] font-mono text-cyan-200">
                    <HugeiconsIcon icon={LockIcon} size={11} className="text-cyan-400 shrink-0" />
                    <span className="truncate">staging-proyekmu.ecodigital.id</span>
                  </div>
                  <span className="flex items-center gap-1 rounded bg-cyan-500/20 px-2 py-0.5 text-[9px] font-mono font-bold text-cyan-300 shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                    LIVE
                  </span>
                </div>

                {/* Staging Metrics Box */}
                <div className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 p-3.5 space-y-2 font-mono text-[9.5px]">
                  <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                    <span className="text-white/50 flex items-center gap-1.5">
                      <HugeiconsIcon icon={CpuIcon} size={12} className="text-cyan-400" />
                      <span>Status Build:</span>
                    </span>
                    <span className="text-emerald-400 font-bold">
                      ✓ Deployed (Production Ready)
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                    <span className="text-white/50 flex items-center gap-1.5">
                      <HugeiconsIcon icon={FlashIcon} size={12} className="text-amber-400" />
                      <span>Latency Edge:</span>
                    </span>
                    <span className="text-cyan-300 font-bold">18ms (Cloud Fast Response)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50">Multi-Role Testing:</span>
                    <span className="text-emerald-300">Admin, Dosen, &amp; User Ready</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px] text-white/60">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Bebas coba login tanpa pasang web server</span>
                  </span>
                  <span className="font-mono text-cyan-400 font-bold">100% Uptime</span>
                </div>
              </div>

              {/* 3. Proof Guarantee Bullets */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-cyan-400 shrink-0" />
                  <span>Link staging aktif dapat dites langsung fiturnya setiap progres</span>
                </div>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-cyan-400 shrink-0" />
                  <span>Dosen / rekan bisa langsung coba klik tanpa repot konfigurasi</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* ─── BENTO CARD 3: Direct Developer Chat (Personal WhatsApp Dialogue) ─── */}
          <AnimateOnScroll preset="fade-up" once={false} delay={0.3} duration={0.6} className="h-full">
            <div className="group relative flex flex-col justify-between h-full rounded-[32px] border border-emerald-500/20 bg-gradient-to-b from-[#0e1726]/95 via-[#09101c]/95 to-[#050912]/98 p-7 sm:p-9 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-emerald-400/50 hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)]">
              {/* Glow Accent Top Rim */}
              <div className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

              {/* 1. Header Information */}
              <div className="mb-6">
                <div className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-950/40 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                  <HugeiconsIcon icon={WhatsappIcon} size={12} />
                  <span>STANDAR #3: KOMUNIKASI LANGSUNG</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  Ngobrol Langsung Sama Eksekutornya{" "}
                  <span className="text-emerald-400 font-extrabold">(Tanpa Perantara)</span>
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300/85">
                  Bebas drama &ldquo;salah paham&rdquo; karena admin yang kaku. Mau ubah struktur tabel, diskusi logika algoritma, atau konsultasi solusi error—kamu ngobrol langsung di WhatsApp bersama developer yang nulis kodingannya.
                </p>
              </div>

              {/* 2. Visual Showcase: Ultra-Realistic WhatsApp Dialogue Card */}
              <div className="relative w-full rounded-2xl border border-white/10 bg-black/70 p-4 shadow-inner">
                {/* Chat Top Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="relative h-8 w-8 rounded-full overflow-hidden border border-emerald-400/50 shrink-0">
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
                      <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
                        <span>Mas Eko</span>
                        <span className="text-[9px] font-semibold text-emerald-400">✓ Lead Developer</span>
                      </div>
                      <div className="text-[9px] text-emerald-300/80 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Online • Rata-rata balas &lt; 15 menit</span>
                      </div>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[9px] font-mono font-semibold text-emerald-300">
                    WhatsApp Pro
                  </span>
                </div>

                {/* Simulated Chat Dialogue */}
                <div className="space-y-2 text-[10.5px]">
                  {/* Client Question */}
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-white/10 border border-white/15 px-3.5 py-2 text-white/90">
                      <p>Mas Eko, kalau ada revisi alur dari dosen sebelum sidang bisa dibantu?</p>
                      <span className="block text-[8px] text-white/40 text-right mt-0.5">09:41</span>
                    </div>
                  </div>

                  {/* Mas Eko Response */}
                  <div className="flex justify-start">
                    <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-emerald-500/20 border border-emerald-500/40 px-3.5 py-2 text-white">
                      <p className="text-emerald-100 font-medium leading-relaxed">
                        Bisa banget Mas. Langsung saya sesuaikan struktur kodingannya hari ini, nanti link staging-nya langsung update ya 👍
                      </p>
                      <span className="flex items-center justify-end gap-1 text-[8px] text-emerald-400 mt-1">
                        <span>09:42</span>
                        <span className="font-bold">✓✓</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Proof Guarantee Bullets */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-emerald-400 shrink-0" />
                  <span>Diskusi santai dan solutif di WhatsApp pribadi</span>
                </div>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-emerald-400 shrink-0" />
                  <span>Komunikasi teknis langsung tanpa risiko pesan nyangkut di sales</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* ─── BENTO CARD 4: Pembayaran Bertahap Sesuai Milestone (Escrow Tracker) ─── */}
          <AnimateOnScroll preset="fade-up" once={false} delay={0.4} duration={0.6} className="h-full">
            <div className="group relative flex flex-col justify-between h-full rounded-[32px] border border-amber-500/20 bg-gradient-to-b from-[#0e1726]/95 via-[#09101c]/95 to-[#050912]/98 p-7 sm:p-9 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-amber-400/50 hover:shadow-[0_20px_60px_rgba(245,158,11,0.15)]">
              {/* Glow Accent Top Rim */}
              <div className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

              {/* 1. Header Information */}
              <div className="mb-6">
                <div className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-amber-500/25 bg-amber-950/40 px-3 py-1 text-[11px] font-semibold text-amber-300">
                  <HugeiconsIcon icon={CreditCardIcon} size={12} />
                  <span>STANDAR #4: KEAMANAN INVESTASI</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  Bayar Bertahap Sesuai Milestone{" "}
                  <span className="text-amber-400 font-extrabold">(Dana 100% Aman)</span>
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300/85">
                  Uangmu aman. Cukup DP awal untuk mulai pengerjaan, dan pelunasan hanya dilakukan setelah sistem selesai didemokan secara live serta terbukti berjalan lancar di depan matamu.
                </p>
              </div>

              {/* 2. Visual Showcase: 3-Step Milestone Progress Bar */}
              <div className="relative w-full rounded-2xl border border-white/10 bg-black/70 p-4 shadow-inner">
                {/* Milestone Security Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                  <span className="text-[10px] font-mono text-white/70 flex items-center gap-1.5">
                    <HugeiconsIcon icon={ShieldCheckIcon} size={13} className="text-amber-400" />
                    <span className="font-bold text-white">SISTEM MILESTONE ANTI-CANGGUNG</span>
                  </span>
                  <span className="rounded bg-amber-500/20 border border-amber-500/30 px-2 py-0.5 text-[9px] font-mono font-bold text-amber-300">
                    Bebas Risiko
                  </span>
                </div>

                {/* 3 Step Milestone Visual Progress */}
                <div className="space-y-2">
                  {/* Step 1 */}
                  <div className="flex items-center justify-between rounded-xl bg-white/5 border border-white/5 px-3 py-2 text-[10px]">
                    <span className="flex items-center gap-2 text-white font-medium">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-slate-950 text-[9px] font-bold">1</span>
                      <span>DP Awal (Mulai Pengerjaan &amp; DB)</span>
                    </span>
                    <span className="text-emerald-400 font-mono text-[9px] font-bold">30% · Aktif ✓</span>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center justify-between rounded-xl bg-white/5 border border-white/5 px-3 py-2 text-[10px]">
                    <span className="flex items-center gap-2 text-white font-medium">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-slate-950 text-[9px] font-bold">2</span>
                      <span>Demo Live Staging &amp; Uji Fitur</span>
                    </span>
                    <span className="text-emerald-400 font-mono text-[9px] font-bold">40% · Tervalidasi ✓</span>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center justify-between rounded-xl bg-amber-500/10 border border-amber-500/30 px-3 py-2 text-[10px]">
                    <span className="flex items-center gap-2 text-amber-200 font-semibold">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-slate-950 text-[9px] font-bold">3</span>
                      <span>Pelunasan &amp; Serah Terima Source Code</span>
                    </span>
                    <span className="text-amber-300 font-mono text-[9px] font-bold">30% · ACC Final</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px] text-white/50">
                  <span className="flex items-center gap-1">
                    <HugeiconsIcon icon={LockIcon} size={11} className="text-emerald-400" />
                    <span>Bayar hanya setelah melihat bukti nyata</span>
                  </span>
                  <span className="text-amber-400 font-mono text-[9px]">Garansi 100%</span>
                </div>
              </div>

              {/* 3. Proof Guarantee Bullets */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-amber-400 shrink-0" />
                  <span>Tanpa biaya siluman atau kenaikan tarif sepihak di tengah jalan</span>
                </div>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-amber-400 shrink-0" />
                  <span>Source code 100% hak milikmu lengkap dengan database &amp; panduan</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}
