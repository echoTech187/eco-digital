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
  ArrowRight01Icon,
  Layers01Icon,
  CpuIcon,
  FlashIcon,
  CheckmarkBadge01Icon,
} from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { SplitWordsTitle } from "@/components/ui/split-words-title";

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
      title: "Pantau Progres Lewat Link Demo Live (24/7)",
      desc: "Tautan staging aktif diberikan sejak awal pengerjaan. Coba langsung alur aplikasi dari browser HP & laptop kapan saja tanpa tebak-tebakan.",
      icon: Globe02Icon,
      actionText: "Uji Coba",
      actionHref: "#portofolio",
    },
    {
      id: 1,
      step: "02",
      tag: "KOMUNIKASI LANGSUNG",
      title: "Diskusi Langsung Sama Developer (Tanpa Sales)",
      desc: "Bebas drama salah paham karena perantara yang tidak paham teknis. Mau ubah struktur database, konsultasi alur, atau solusi error langsung to-the-point bersama pembuat kodenya.",
      icon: WhatsappIcon,
      actionText: "Chat WA",
      actionHref: "https://wa.me/6285183003780?text=Halo%20Mas%20Eko%2C%20saya%20mau%20konsultasi%20kebutuhan%20proyek",
      isExternal: true,
    },
    {
      id: 2,
      step: "03",
      tag: "ARSITEKTUR BERSIH",
      title: "Clean Architecture & Dokumentasi Rapi",
      desc: "Kode dibangun modular dengan pemisahan layer yang jelas: terstruktur rapi, mudah dibaca, dan siap dikembangkan lanjut. Bukan sekadar file .zip tanpa panduan.",
      icon: CodeSquareIcon,
      actionText: "Lihat Spek",
      actionHref: "#biaya",
    },
    {
      id: 3,
      step: "04",
      tag: "KEAMANAN INVESTASI",
      title: "Bayar Bertahap Sesuai Milestone (30-40-30)",
      desc: "Dana Anda aman tanpa DP mengambang. Pembayaran dibagi bertahap, dan pelunasan hanya dilakukan setelah sistem selesai didemokan serta terbukti berjalan lancar di staging.",
      icon: ShieldCheckIcon,
      actionText: "Garansi",
      actionHref: "#faq",
    },
  ];

  return (
    <section
      id="keunggulan"
      ref={sectionRef}
      className="relative z-20 w-full -mt-10 sm:-mt-14 rounded-t-[36px] sm:rounded-t-[56px] border-t border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#060A14] px-4 sm:px-8 lg:px-14 py-20 sm:py-28 lg:py-32 shadow-[0_-25px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_-30px_70px_-20px_rgba(0,0,0,0.6)] scroll-mt-0 overflow-hidden transition-colors duration-300"
    >
      {/* Dynamic Keyframes for Buttery-Smooth Auto-Scroll in Device Mockups */}
      <style jsx global>{`
        @keyframes scrollDesktopLive {
          0%, 20% { transform: translateY(0); }
          50%, 70% { transform: translateY(-16%); }
          100% { transform: translateY(0); }
        }
        @keyframes scrollTabletLive {
          0%, 20% { transform: translateY(0); }
          50%, 70% { transform: translateY(-18%); }
          100% { transform: translateY(0); }
        }
        @keyframes scrollMobileLive {
          0%, 20% { transform: translateY(0); }
          50%, 70% { transform: translateY(-22%); }
          100% { transform: translateY(0); }
        }
        .anim-scroll-desktop {
          animation: scrollDesktopLive 14s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }
        .anim-scroll-tablet {
          animation: scrollTabletLive 13s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }
        .anim-scroll-mobile {
          animation: scrollMobileLive 11s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }
        .device-screen-hover:hover img {
          animation-play-state: paused !important;
        }
      `}</style>

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
          <div className="lg:col-span-7 flex flex-col justify-between">
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
              className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 dark:text-white tracking-tight leading-[1.18] mb-8 lg:mb-12"
            />

            {/* 4 Clean Editorial Feature Rows with Dividers */}
            <div className="border-t border-slate-200/90 dark:border-white/10 divide-y divide-slate-200/80 dark:divide-white/10">
              {features.map((item) => {
                const isSelected = activeItem === item.id;

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveItem(item.id)}
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

                    {/* Right: "Action ↗" Button (AERVA Style) */}
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="hidden sm:inline-block text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                        {item.actionText}
                      </span>
                      <a
                        href={item.actionHref}
                        target={item.isExternal ? "_blank" : undefined}
                        rel={item.isExternal ? "noopener noreferrer" : undefined}
                        className={`h-8 w-8 sm:h-9 sm:w-9 rounded-lg flex items-center justify-center transition-all ${
                          isSelected
                            ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-sm"
                            : "bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-950"
                        }`}
                        title={item.actionText}
                      >
                        <span className="font-mono text-sm leading-none">↗</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════════
              RIGHT COLUMN: Subtitle Description + REAL RESPONSIVE COVER ANIMATION (5 cols)
             ══════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-5">
            {/* Top Editorial Subtext (AERVA Style) */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300/80 leading-relaxed">
              Empat standar kualitas rekayasa software untuk menjamin proyek <strong>Aplikasi Custom</strong>, <strong>Jasa API &amp; Backend</strong>, dan <strong>Web Instansi &amp; Bisnis</strong> Anda selesai tepat waktu, terstruktur rapi, dan transparan.
            </p>

            {/* ─── REAL MULTI-DEVICE RESPONSIVE VISUAL (Ultra-Crisp Vector Retina Devices, Floating Cleanly) ─── */}
            <div className="relative w-full pt-4 sm:pt-6 flex flex-col items-center justify-center">
              
              {/* Subtle ambient backglow to ground the hardware */}
              <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[340px] w-[340px] sm:h-[420px] sm:w-[420px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 blur-[100px]" />
              <div className="pointer-events-none absolute top-1/2 right-10 -translate-y-1/2 h-[260px] w-[260px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-[90px]" />

              {/* Multi-Device Cluster Stage: MacBook + iPad + iPhone */}
              <div className="relative w-full max-w-[560px] aspect-[560/340] select-none mx-auto device-screen-hover">
                
                {/* 1. MACBOOK LAPTOP (Back Layer: z-10) */}
                <div
                  className="absolute left-0 top-[6%] w-[78%] aspect-[567/326] z-10"
                >
                  {/* Laptop Screen Viewport */}
                  <div
                    className="absolute overflow-hidden bg-slate-900 shadow-inner"
                    style={{
                      left: "11.224%",
                      top: "6.180%",
                      width: "77.565%",
                      height: "84.630%",
                      borderRadius: "2px",
                    }}
                  >
                    <Image
                      src="/images/showcase/preview-desktop.png"
                      alt="ecoDigital Responsive Desktop Preview"
                      width={1200}
                      height={1320}
                      className="w-full h-auto object-cover object-top anim-scroll-desktop will-change-transform"
                      priority
                    />
                  </div>
                  {/* MacBook Hardware Bezel & Keyboard Base Frame */}
                  <Image
                    src="/images/showcase/device-macbook-frame.png"
                    alt="ecoDigital MacBook Frame"
                    fill
                    sizes="(max-width: 768px) 100vw, 440px"
                    className="object-contain pointer-events-none z-10 drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_45px_rgba(0,0,0,0.6)]"
                    priority
                  />
                </div>

                {/* 2. IPAD TABLET (Middle Layer: z-20) */}
                <div
                  className="absolute right-0 top-[14%] w-[32%] aspect-[257/337] z-20"
                >
                  {/* iPad Screen Viewport */}
                  <div
                    className="absolute overflow-hidden bg-slate-900 shadow-inner"
                    style={{
                      left: "4.317%",
                      top: "3.266%",
                      width: "88.724%",
                      height: "93.309%",
                      borderRadius: "6px",
                    }}
                  >
                    <Image
                      src="/images/showcase/preview-tablet.png"
                      alt="ecoDigital Responsive Tablet Preview"
                      width={768}
                      height={1320}
                      className="w-full h-auto object-cover object-top anim-scroll-tablet will-change-transform"
                      priority
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
                  className="absolute right-[21%] bottom-0 w-[17%] aspect-[101/203] z-30"
                >
                  {/* iPhone Screen Viewport */}
                  <div
                    className="absolute overflow-hidden bg-slate-900 shadow-inner"
                    style={{
                      left: "6.337%",
                      top: "3.547%",
                      width: "86.733%",
                      height: "91.133%",
                      borderRadius: "14px",
                    }}
                  >
                    <Image
                      src="/images/showcase/preview-mobile.png"
                      alt="ecoDigital Responsive iPhone Preview"
                      width={390}
                      height={1300}
                      className="w-full h-auto object-cover object-top anim-scroll-mobile will-change-transform"
                      priority
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
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
