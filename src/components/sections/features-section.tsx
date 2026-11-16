"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Globe02Icon,
  WhatsappIcon,
  CreditCardIcon,
  CheckmarkCircle01Icon,
  ShieldCheckIcon,
  LockIcon,
  CodeSquareIcon,
  Analytics01Icon,
  ArrowRight01Icon,
  Layers01Icon,
  CpuIcon,
  FlashIcon,
  CheckmarkBadge01Icon,
  ChevronRightIcon,
} from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { SplitWordsTitle } from "@/components/ui/split-words-title";
import { getWaUrl } from "@/data/landing-data";
import { DirectDeveloperChatShowcase } from "./direct-developer-chat";
import { DashboardAnalyticsShowcase } from "./dashboard-analytics-showcase";
import { MilestonePaymentShowcase } from "./milestone-payment-showcase";

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeItem, setActiveItem] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.4, 1]);

  const features = [
    {
      id: 0,
      step: "01",
      tag: "TRANSPARANSI PENUH",
      title: "Pantau Progres Lewat Link Demo Live",
      desc: "Tautan staging aktif diberikan sejak awal pengerjaan. Coba langsung alur aplikasi dari browser HP & laptop kapan saja tanpa tebak-tebakan.",
      icon: Globe02Icon,
    },
    {
      id: 1,
      step: "02",
      tag: "KOMUNIKASI LANGSUNG",
      title: "Diskusi Langsung Sama Developer",
      desc: "Bebas drama salah paham karena perantara yang tidak paham teknis. Mau ubah struktur database, konsultasi alur, atau solusi error langsung to-the-point bersama pembuat kodenya.",
      icon: WhatsappIcon,
    },
    {
      id: 2,
      step: "03",
      tag: "KONTROL & ANALITIK",
      title: "Dilengkapi Dashboard Analitik: Pantau Performa Bisnis Real-Time",
      desc: "Kendalikan bisnis langsung dari layar ponsel. Sistem otomatis menyajikan grafik tren penjualan, laporan omset cabang, dan ringkasan data penting untuk membantu Anda mengambil keputusan bisnis lebih cepat.",
      icon: Analytics01Icon,
    },
    {
      id: 3,
      step: "04",
      tag: "KEAMANAN INVESTASI",
      title: "Bayar Bertahap Sesuai Milestone",
      desc: "Dana Anda aman tanpa DP mengambang. Pembayaran dibagi bertahap, dan pelunasan hanya dilakukan setelah sistem selesai didemokan serta terbukti berjalan lancar di staging.",
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <section
      id="keunggulan"
      ref={sectionRef}
      className="relative z-20 w-full -mt-10 sm:-mt-14 rounded-t-[36px] sm:rounded-t-[56px] border-t border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#060A14] px-4 sm:px-8 lg:px-14 py-20 sm:py-28 lg:py-32 shadow-[0_-25px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_-30px_70px_-20px_rgba(0,0,0,0.6)] scroll-mt-0 overflow-hidden transition-colors duration-300"
    >
      <span id="cara-kerja" className="scroll-mt-24 block" />
      <span id="alur-kerja" className="scroll-mt-24 block" />

      {/* Ambient Glow Pools */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[550px] w-[550px] rounded-full bg-emerald-500/8 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/8 blur-[180px]" />

      <motion.div
        style={{ scale, y, opacity }}
        className="mx-auto max-w-7xl relative z-10 will-change-transform origin-top"
      >
        {/* ─── AERVA-STYLE SPLIT LAYOUT (Two Columns) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ══════════════════════════════════════════════════════════════════
              LEFT COLUMN: Main Headline + 4 Clean Row Items (7 cols)
             ══════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            {/* Kicker Tag */}
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 backdrop-blur-md shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                <span>STANDAR KERJA ECODIGITAL</span>
              </div>
            </div>

            {/* Large Clean Headline (AERVA Style) */}
            <SplitWordsTitle
              text="Kenapa Ngoding Bareng ecoDigital Jauh Lebih Tenang?"
              as="h2"
              highlightWords={["Jauh", "Lebih", "Tenang?"]}
              highlightClassName="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent"
              className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 dark:text-white tracking-tight leading-[1.18] mb-4 lg:mb-12"
            />

            {/* Subheading Mobile (Dipindahkan tepat di bawah heading pada mobile) */}
            <p className="block lg:hidden text-xs sm:text-sm text-slate-600 dark:text-slate-300/80 leading-relaxed mb-8">
              Empat standar kualitas rekayasa software untuk menjamin proyek <strong>Aplikasi Custom</strong>, <strong>Jasa API &amp; Backend</strong>, dan <strong>Web Instansi &amp; Bisnis</strong> Anda selesai tepat waktu, terstruktur rapi, dan transparan.
            </p>

            {/* 4 Clean Editorial Feature Rows with Dividers */}
            <div className="border-t border-slate-200/90 dark:border-white/10 divide-y divide-slate-200/80 dark:divide-white/10">
              {features.map((item) => {
                const isSelected = activeItem === item.id;

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveItem(item.id)}
                    onClick={() => setActiveItem(item.id)}
                    className={`group relative py-6 sm:py-7 flex items-center justify-between gap-4 sm:gap-6 cursor-pointer transition-all duration-300 rounded-2xl px-3 sm:px-4 -mx-3 sm:-mx-4 ${
                      isSelected
                        ? "bg-slate-50/80 dark:bg-white/[0.03]"
                        : "hover:bg-slate-50/50 dark:hover:bg-white/[0.02]"
                    }`}
                  >
                    {/* Left: Icon Squircle + Content */}
                    <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
                      {/* Icon Squircle (AERVA Style) */}
                      <div
                        className={`h-12 w-12 sm:h-14 sm:w-14 rounded-2xl border flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs ${
                          isSelected
                            ? "bg-emerald-500 text-slate-950 border-emerald-500 scale-105 shadow-md shadow-emerald-500/20"
                            : "bg-white dark:bg-slate-900 border-slate-200/90 dark:border-white/10 text-slate-700 dark:text-slate-300 group-hover:border-slate-400 dark:group-hover:border-white/30"
                        }`}
                      >
                        <HugeiconsIcon icon={item.icon} size={22} />
                      </div>

                      {/* Text Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">
                            {item.step}
                          </span>
                          <span className="text-slate-300 dark:text-slate-700">•</span>
                          <span className="font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                            {item.tag}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                          {item.title}
                        </h3>

                        <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Right: Chevron-Right Indicator (Hanya tampil di desktop) */}
                    <div className="shrink-0 hidden lg:flex items-center justify-center pl-2">
                      <div
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isSelected
                            ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-xs translate-x-1"
                            : "bg-slate-100/70 dark:bg-white/5 text-slate-400 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 group-hover:bg-slate-200/70 dark:group-hover:bg-white/10 group-hover:translate-x-0.5"
                        }`}
                      >
                        <HugeiconsIcon icon={ChevronRightIcon} size={18} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════════
              RIGHT COLUMN: Subtitle Description + REAL RESPONSIVE COVER ANIMATION (5 cols)
              (Hidden pada layar mobile, hanya aktif di desktop lg+)
             ══════════════════════════════════════════════════════════════════ */}
          <div className="hidden lg:block lg:col-span-6 lg:sticky lg:top-28 space-y-4">
            {/* Top Editorial Subtext (AERVA Style) */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300/80 leading-relaxed">
              Empat standar kualitas rekayasa software untuk menjamin proyek <strong>Aplikasi Custom</strong>, <strong>Jasa API &amp; Backend</strong>, dan <strong>Web Instansi &amp; Bisnis</strong> Anda selesai tepat waktu, terstruktur rapi, dan transparan.
            </p>

            {/* ─── REAL MULTI-DEVICE RESPONSIVE VISUAL & INTERACTIVE TABS (Ultra-Crisp Vector Retina Devices & Direct Chat) ─── */}
            <div className="relative w-full h-[510px] flex items-center justify-center select-none">
              
              {/* Subtle ambient backglow to ground the hardware */}
              <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[340px] w-[340px] sm:h-[420px] sm:w-[420px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 blur-[100px]" />
              <div className="pointer-events-none absolute top-1/2 right-10 -translate-y-1/2 h-[260px] w-[260px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-[90px]" />

              <AnimatePresence mode="wait">
                {activeItem === 0 ? (
                  <motion.div
                    key="tab-devices"
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-full flex items-center justify-center"
                  >
                    {/* Multi-Device Cluster Stage: MacBook + iPad + iPhone with Real Live Screen Recordings */}
                    <div
                      className="relative w-full max-w-[560px] aspect-[560/340] select-none mx-auto cursor-pointer"
                      onMouseEnter={(e) => {
                        const videos = e.currentTarget.querySelectorAll('video');
                        videos.forEach((v) => v.pause());
                      }}
                      onMouseLeave={(e) => {
                        const videos = e.currentTarget.querySelectorAll('video');
                        videos.forEach((v) => v.play().catch(() => {}));
                      }}
                    >
                      
                      {/* 1. MACBOOK LAPTOP (Back Layer: z-10) */}
                      <div
                        className="absolute left-0 top-[6%] w-[80%] aspect-[16/9] z-10 overflow-hidden"
                      >
                        {/* Laptop Screen Viewport */}
                        <div
                          className="absolute overflow-hidden bg-slate-900 shadow-inner w-[70%] aspect-[16/9]"
                          style={{
                            left: "11.224%",
                            top: "6.180%",
                            width: "77%",
                            height: "86%",
                            borderRadius: "0px",
                          }}
                        >
                          <video
                            ref={(el) => {
                              if (el) {
                                el.muted = true;
                                el.play().catch(() => {});
                              }
                            }}
                            src="/videos/showcase/desktop.mp4"
                            poster="/images/showcase/preview-desktop.png"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="none"
                            className="w-full h-full object-fill pointer-events-none select-none"
                          />
                        </div>
                        {/* MacBook Hardware Bezel & Keyboard Base Frame */}
                        <Image
                          src="/images/showcase/device-macbook-frame.png"
                          alt="ecoDigital MacBook Frame"
                          fill
                          sizes="(max-width: 789px) 100vw, 440px"
                          className="object-contain pointer-events-none z-10 drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_45px_rgba(0,0,0,0.6)]"
                          priority
                        />
                      </div>

                      {/* 2. IPAD TABLET (Middle Layer: z-20) */}
                      <div
                        className="absolute right-0 top-[14%] w-[32%] aspect-[256/335] z-20"
                      >
                        {/* iPad Screen Viewport */}
                        <div
                          className="absolute overflow-hidden bg-slate-900 shadow-none"
                          style={{
                            left: "4.797%",
                            top: "2.985%",
                            width: "91.406%",
                            height: "95%",
                            borderRadius: "0px",
                          }}
                        >
                          <video
                            ref={(el) => {
                              if (el) {
                                el.muted = true;
                                el.play().catch(() => {});
                              }
                            }}
                            src="/videos/showcase/tablet.mp4"
                            poster="/images/showcase/preview-tablet.png"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="none"
                            className="w-full h-full object-cover object-top pointer-events-none select-none"
                          />
                        </div>
                        {/* iPad Hardware Bezel Frame with Soft Shadow */}
                        <Image
                          src="/images/showcase/device-ipad-frame.png"
                          alt="ecoDigital iPad Frame"
                          fill
                          sizes="(max-width: 768px) 50vw, 180px"
                          className="object-contain pointer-events-none z-10 drop-shadow-[-8px_18px_30px_rgba(0,0,0,0.22)] dark:drop-shadow-[-10px_20px_35px_rgba(0,0,0,0.7)]"
                          priority
                        />
                      </div>

                      {/* 3. IPHONE (Front Layer: z-30) */}
                      <div
                        className="absolute right-[21%] bottom-0 w-[17%] aspect-[95/200] z-30"
                      >
                        {/* iPhone Screen Viewport */}
                        <div
                          className="absolute overflow-hidden bg-slate-900 shadow-inner"
                          style={{
                            left: "6.436%",
                            top: "5.448%",
                            width: "87%",
                            height: "89.450%",
                            borderRadius: "2px",
                          }}
                        >
                          <video
                            ref={(el) => {
                              if (el) {
                                el.muted = true;
                                el.play().catch(() => {});
                              }
                            }}
                            src="/videos/showcase/mobile.mp4"
                            poster="/images/showcase/preview-mobile.png"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="none"
                            className="w-full h-full object-cover object-top pointer-events-none select-none"
                          />
                        </div>
                        {/* iPhone Hardware Frame with Notch & Stainless Rim */}
                        <Image
                          src="/images/showcase/device-iphone-frame.png"
                          alt="ecoDigital iPhone Frame"
                          fill
                          sizes="(max-width: 768px) 30vw, 95px"
                          className="object-contain pointer-events-none z-10 drop-shadow-[-6px_20px_35px_rgba(0,0,0,0.3)] dark:drop-shadow-[-8px_22px_40px_rgba(0,0,0,0.8)]"
                          priority
                        />
                      </div>

                      {/* Realistic Soft Contact Floor Shadow */}
                      <div className="pointer-events-none absolute -bottom-3 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-slate-900/10 dark:bg-black/50 blur-xl rounded-full" />
                    </div>
                  </motion.div>
                ) : activeItem === 1 ? (
                  <motion.div
                    key="tab-chat"
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-full flex items-center justify-center"
                  >
                    <DirectDeveloperChatShowcase />
                  </motion.div>
                ) : activeItem === 2 ? (
                  <motion.div
                    key="tab-analytics"
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-full flex items-center justify-center"
                  >
                    <DashboardAnalyticsShowcase />
                  </motion.div>
                ) : (
                  <motion.div
                    key="tab-milestone"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="w-full flex items-center justify-center transform-gpu"
                  >
                    <MilestonePaymentShowcase />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* ─── Bottom Reassurance Roadmap Banner ─── */}
        <AnimateOnScroll preset="fade-up" className="mt-14 sm:mt-20">
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
              className="shrink-0 w-full md:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 shadow-xl shadow-emerald-500/25 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
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
