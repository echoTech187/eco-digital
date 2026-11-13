"use client";

import React from "react";
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
} from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import founderImg from "../../../public/images/founder.png";

export function FeaturesSection() {
  return (
    <section
      id="keunggulan"
      className="relative z-20 w-full bg-[#060A14] px-4 sm:px-8 lg:px-14 py-20 sm:py-28 lg:py-32 scroll-mt-0 overflow-hidden"
    >
      {/* Apple-style Soft Ambient Radial Lighting Pools */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Apple-style Editorial Kicker & Section Header */}
        <AnimateOnScroll preset="fade-up" once={false} className="mb-14 sm:mb-20 text-center">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.35em] text-[#10B981]">
            STANDAR KERJA ECODIGITAL
          </span>
          <h2 className="mt-3.5 text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Kenapa Ngoding Bareng ecoDigital{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Jauh Lebih Tenang?
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm lg:text-base leading-relaxed text-white/60">
            Empat komitmen nyata agar proses pembuatan sistemmu transparan, bebas cemas, dan tuntas sampai jalan.
          </p>
        </AnimateOnScroll>

        {/* ─── Apple-style 2x2 Bento Showcase Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* ─── BENTO CARD 1: Video Bedah Kode & Logika ─── */}
          <AnimateOnScroll preset="fade-up" once={false} delay={0.1} duration={0.6} className="h-full">
            <div className="group relative flex flex-col justify-between h-full rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-white/[0.015] p-7 sm:p-9 backdrop-blur-2xl transition-all duration-500 hover:border-emerald-500/40 hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)]">
              
              {/* Visual Showcase Stage: Apple-style Video Player & Chapter Markers */}
              <div className="relative mb-7 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-4 shadow-inner">
                {/* Simulated Window Dots & Video File Name */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                    <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-[10px] text-white/50 flex items-center gap-1.5">
                    <HugeiconsIcon icon={Video01Icon} size={11} className="text-emerald-400" />
                    <span>bedah-arsitektur-sistem.mp4</span>
                  </span>
                  <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[9px] font-mono font-bold text-emerald-300">
                    1080p 60fps
                  </span>
                </div>

                {/* Video Player Canvas Mockup */}
                <div className="relative h-28 sm:h-32 w-full rounded-xl bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/40 border border-white/5 p-3 flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-black/60 px-2 py-0.5 text-[9px] font-medium text-emerald-400 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Rekaman Layar 1-on-1
                    </span>
                    <span className="text-[10px] font-mono text-white/60">14:20 Durasi</span>
                  </div>

                  {/* Centered Glowing Play Action */}
                  <div className="flex items-center justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/40 transition-transform duration-300 group-hover:scale-110">
                      <HugeiconsIcon icon={PlayIcon} size={18} className="translate-x-0.5" />
                    </div>
                  </div>

                  {/* Video Progress Scrubber Bar */}
                  <div className="space-y-1">
                    <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-emerald-500 to-teal-400" />
                    </div>
                    <div className="flex justify-between text-[8px] font-mono text-white/40">
                      <span>09:15</span>
                      <span>14:20</span>
                    </div>
                  </div>
                </div>

                {/* Chapter Chips */}
                <div className="mt-3 flex items-center gap-1.5 overflow-x-auto text-[9px] font-mono text-white/70 scrollbar-none">
                  <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 shrink-0">
                    ⏱️ 02:15 Relasi DB
                  </span>
                  <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 px-2 py-0.5 shrink-0">
                    ⏱️ 06:40 Logika Alur
                  </span>
                  <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 shrink-0">
                    ⏱️ 11:20 Troubleshooting
                  </span>
                </div>
              </div>

              {/* Card Content Stage */}
              <div>
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-950/40 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                  <HugeiconsIcon icon={Video01Icon} size={12} />
                  <span>Video Bedah Kode</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Bukan Sekadar Kirim Kode (Dapat Bedah Logika)
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300/80">
                  Kami nggak cuma kirim file .ZIP lalu menghilang. Kamu mendapatkan rekaman video penjelasan alur logika, relasi database, dan cara kerja sistem sampai kamu paham luar-dalam saat ditanya dosen atau pimpinan.
                </p>

                {/* Apple-style Guarantee Bullets */}
                <div className="mt-5 pt-4 border-t border-white/10 space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={14} className="text-emerald-400 shrink-0" />
                    <span>Video penjelasan berdurasi santai per alur fitur</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={14} className="text-emerald-400 shrink-0" />
                    <span>Menggunakan bahasa manusia tanpa istilah teknis yang bikin bingung</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* ─── BENTO CARD 2: Live Staging Preview ─── */}
          <AnimateOnScroll preset="fade-up" once={false} delay={0.2} duration={0.6} className="h-full">
            <div className="group relative flex flex-col justify-between h-full rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-white/[0.015] p-7 sm:p-9 backdrop-blur-2xl transition-all duration-500 hover:border-emerald-500/40 hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)]">
              
              {/* Visual Showcase Stage: Apple-style Safari URL Bar & Live Deployment Status */}
              <div className="relative mb-7 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-4 shadow-inner">
                {/* Safari Address Bar */}
                <div className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 mb-3">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                    <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 truncate text-[10px] font-mono text-white/70">
                    <HugeiconsIcon icon={LockIcon} size={11} className="text-emerald-400 shrink-0" />
                    <span className="truncate">staging-client.ecodigital.id</span>
                  </div>
                  <span className="flex items-center gap-1 rounded bg-emerald-500/20 px-1.5 py-0.5 text-[9px] font-mono font-bold text-emerald-300 shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    LIVE
                  </span>
                </div>

                {/* Live Staging Telemetry Metrics */}
                <div className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 p-3 space-y-2 font-mono text-[9px]">
                  <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                    <span className="text-white/50">Build Status:</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <span>✓</span> <span>Deployed (v2.4 Production)</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                    <span className="text-white/50">Response Time:</span>
                    <span className="text-cyan-300">22ms (Cloud Server Edge)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50">Last Git Sync:</span>
                    <span className="text-white/80">Baru saja (12 menit lalu)</span>
                  </div>
                </div>

                {/* Real-time Indicator Tag */}
                <div className="mt-3 flex items-center justify-between text-[10px] text-white/60">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Akses 24/7 dari browser HP &amp; laptop</span>
                  </span>
                  <span className="font-mono text-emerald-400">100% Online</span>
                </div>
              </div>

              {/* Card Content Stage */}
              <div>
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-950/40 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                  <HugeiconsIcon icon={Globe02Icon} size={12} />
                  <span>Live Staging Preview</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Progres Transparan via Link Demo Live
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300/80">
                  Nggak perlu menebak-nebak apakah proyekmu sudah jalan atau belum. Kamu diberikan tautan staging live untuk memantau perkembangan sistem langsung dari browser kapan saja.
                </p>

                {/* Apple-style Guarantee Bullets */}
                <div className="mt-5 pt-4 border-t border-white/10 space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={14} className="text-emerald-400 shrink-0" />
                    <span>Link staging aktif dapat dites langsung fiturnya setiap progres</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={14} className="text-emerald-400 shrink-0" />
                    <span>Bebas coba login multi-role tanpa harus pasang web server sendiri</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* ─── BENTO CARD 3: Direct Developer Chat ─── */}
          <AnimateOnScroll preset="fade-up" once={false} delay={0.3} duration={0.6} className="h-full">
            <div className="group relative flex flex-col justify-between h-full rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-white/[0.015] p-7 sm:p-9 backdrop-blur-2xl transition-all duration-500 hover:border-emerald-500/40 hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)]">
              
              {/* Visual Showcase Stage: Apple-style Crisp Floating Chat Bubbles */}
              <div className="relative mb-7 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-4 shadow-inner">
                {/* Chat Header Profile */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="relative h-7 w-7 rounded-full overflow-hidden border border-emerald-400/40 shrink-0">
                      <Image
                        src={founderImg}
                        alt="Mas Eko Susanto"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
                        <span>Mas Eko</span>
                        <span className="text-[9px] font-normal text-emerald-400">● Lead Developer</span>
                      </div>
                      <div className="text-[9px] text-white/40">Diskusi Langsung WhatsApp</div>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[9px] font-semibold text-emerald-300">
                    Online
                  </span>
                </div>

                {/* Simulated Floating Chat Dialogues */}
                <div className="space-y-2 text-[10px] sm:text-[11px]">
                  {/* Visitor Bubble (Right) */}
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-white/10 border border-white/15 px-3 py-1.5 text-white/90">
                      <p>Mas Eko, kalau ada revisi alur sebelum sidang bisa dibantu?</p>
                      <span className="block text-[8px] text-white/40 text-right mt-0.5">09:41</span>
                    </div>
                  </div>

                  {/* Mas Eko Bubble (Left) */}
                  <div className="flex justify-start">
                    <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-emerald-500/20 border border-emerald-500/35 px-3 py-1.5 text-white">
                      <p className="text-emerald-100 font-medium">
                        Bisa banget. Langsung saya sesuaikan kodingannya sekarang, nanti saya kabari link barunya 👍
                      </p>
                      <span className="flex items-center justify-end gap-1 text-[8px] text-emerald-400/80 mt-0.5">
                        <span>09:42</span>
                        <span className="text-emerald-400 font-bold">✓✓</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content Stage */}
              <div>
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-950/40 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                  <HugeiconsIcon icon={WhatsappIcon} size={12} />
                  <span>Direct Developer</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Diskusi Langsung dengan Lead Developer
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300/80">
                  Tanpa perantara admin atau pihak yang kaku. Mau ubah struktur tabel, diskusi algoritma, atau konsultasi solusi error—kamu ngobrol langsung via WhatsApp dengan developer yang merancang kodenya.
                </p>

                {/* Apple-style Guarantee Bullets */}
                <div className="mt-5 pt-4 border-t border-white/10 space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={14} className="text-emerald-400 shrink-0" />
                    <span>Diskusi santai dan responsif di WhatsApp pribadi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={14} className="text-emerald-400 shrink-0" />
                    <span>Komunikasi teknis langsung tanpa risiko salah paham</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* ─── BENTO CARD 4: Pembayaran Bertahap Sesuai Milestone ─── */}
          <AnimateOnScroll preset="fade-up" once={false} delay={0.4} duration={0.6} className="h-full">
            <div className="group relative flex flex-col justify-between h-full rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-white/[0.015] p-7 sm:p-9 backdrop-blur-2xl transition-all duration-500 hover:border-emerald-500/40 hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)]">
              
              {/* Visual Showcase Stage: Apple-style Milestone Security Tracker */}
              <div className="relative mb-7 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-4 shadow-inner">
                {/* Milestone Security Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                  <span className="text-[10px] font-mono text-white/50 flex items-center gap-1.5">
                    <HugeiconsIcon icon={ShieldCheckIcon} size={13} className="text-emerald-400" />
                    <span>GARANSI DANA AMAN</span>
                  </span>
                  <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[9px] font-mono font-bold text-emerald-300">
                    Sistem Bertahap
                  </span>
                </div>

                {/* 3 Step Milestone Progress Visual */}
                <div className="space-y-2">
                  {/* Step 1 */}
                  <div className="flex items-center justify-between rounded-xl bg-white/5 border border-white/5 px-3 py-1.5 text-[10px]">
                    <span className="flex items-center gap-2 text-white font-medium">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-slate-950 text-[9px] font-bold">1</span>
                      <span>DP Awal (Mulai Pengerjaan)</span>
                    </span>
                    <span className="text-emerald-400 font-mono text-[9px]">30% · Aktif ✓</span>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center justify-between rounded-xl bg-white/5 border border-white/5 px-3 py-1.5 text-[10px]">
                    <span className="flex items-center gap-2 text-white font-medium">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-slate-950 text-[9px] font-bold">2</span>
                      <span>Demo Live Staging &amp; Uji Fitur</span>
                    </span>
                    <span className="text-emerald-400 font-mono text-[9px]">40% · Tervalidasi ✓</span>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center justify-between rounded-xl bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 text-[10px]">
                    <span className="flex items-center gap-2 text-emerald-200 font-semibold">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400 text-slate-950 text-[9px] font-bold">3</span>
                      <span>Pelunasan &amp; Serah Terima Source Code</span>
                    </span>
                    <span className="text-emerald-300 font-mono text-[9px]">30% · ACC Final</span>
                  </div>
                </div>

                {/* Escrow Guarantee Subtext */}
                <div className="mt-3 flex items-center justify-between text-[10px] text-white/50">
                  <span className="flex items-center gap-1">
                    <HugeiconsIcon icon={LockIcon} size={11} className="text-emerald-400" />
                    <span>Uang aman, bayar setelah bukti nyata</span>
                  </span>
                  <span className="text-emerald-400 font-mono text-[9px]">Bebas Risiko</span>
                </div>
              </div>

              {/* Card Content Stage */}
              <div>
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-950/40 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                  <HugeiconsIcon icon={CreditCardIcon} size={12} />
                  <span>Pembayaran Bertahap</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Pembayaran Bertahap Sesuai Progres Nyata
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300/80">
                  Uang dan investasimu aman. Cukup DP awal untuk mulai pengerjaan, dan pelunasan hanya dilakukan setelah sistem selesai didemokan serta terbukti berjalan lancar di depanmu.
                </p>

                {/* Apple-style Guarantee Bullets */}
                <div className="mt-5 pt-4 border-t border-white/10 space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={14} className="text-emerald-400 shrink-0" />
                    <span>Tanpa biaya siluman atau kenaikan tarif sepihak di tengah jalan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={14} className="text-emerald-400 shrink-0" />
                    <span>Source code 100% hak milikmu lengkap dengan database &amp; panduan</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}
