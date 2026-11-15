"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkCircle01Icon,
  WhatsappIcon,
  CalculatorIcon,
  ArrowRight01Icon,
  FireIcon,
} from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { SplitWordsTitle } from "@/components/ui/split-words-title";
import { getWaUrl, PRICING_PACKAGES } from "@/data/landing-data";

// ─── Staggered Spring Animation Variants (Service Section Style) ───────────────

const pricingContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const pricingCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 170,
      damping: 20,
      mass: 0.9,
    },
  },
};

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 1]);

  return (
    <div
      ref={sectionRef}
      className="relative z-30 w-full rounded-t-[40px] sm:rounded-t-[60px] border-t border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#070C18] px-0 lg:px-14 pt-10 sm:pt-14 lg:pt-16 pb-14 sm:pb-20 shadow-[0_-35px_80px_-20px_rgba(15,23,42,0.22)] dark:shadow-[0_-40px_90px_-25px_rgba(0,0,0,0.95)] transition-colors duration-300"
    >
      {/* Atmospheric Ambient Lighting Pools */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/8 dark:bg-emerald-500/10 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-[400px] w-[400px] rounded-full bg-violet-500/8 dark:bg-violet-500/10 blur-[150px]" />

      <motion.div
        style={{ scale, y, opacity }}
        className="mx-auto max-w-7xl will-change-transform origin-top relative z-10"
      >
        {/* Anchor targets placed exactly at top of pricing content */}
        <div id="paket-harga" className="scroll-mt-0" />
        <span id="harga" className="scroll-mt-0 block" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll preset="fade-up" className="mb-6 sm:mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-[#10B981]">
              HARGA TERBUKA &amp; TRANSPARAN
            </span>
            <SplitWordsTitle
              text="Pilih Paket Sesuai Kebutuhan Sistem Anda"
              as="h2"
              className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white justify-center"
            />
            <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-white/70">
              Tiga paket terarah yang selaras dengan 3 fokus layanan kami: <strong>Web Instansi &amp; Bisnis</strong>, <strong>Jasa API &amp; Backend</strong>, dan <strong>Aplikasi Custom</strong>.
            </p>
          </AnimateOnScroll>
        </div>

        {/* ─── Animated Cards: Horizontal Touch Snap Rail (Tablet & Mobile) & 3-Col Grid (Desktop) ─── */}
        <div className="relative w-full">
          <motion.div
            id="pricing-rail"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={pricingContainerVariants}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            className="w-full flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none scroll-pl-4 sm:scroll-pl-6 lg:scroll-pl-0 scroll-pr-4 sm:scroll-pr-6 lg:scroll-pr-0 gap-4 sm:gap-4 lg:gap-8 px-4 sm:px-6 lg:px-0 pt-2 pb-6 lg:py-0 scrollbar-none items-stretch max-w-7xl mx-auto"
          >
            {PRICING_PACKAGES.map((pkg, idx) => {
              const isPopular = pkg.isPopular;
              const IconComp = pkg.badgeIcon;

              return (
                <motion.div
                  key={idx}
                  variants={pricingCardVariants}
                  className={`w-[86vw] max-w-[340px] sm:w-[340px] md:w-[348px] lg:w-auto shrink-0 lg:shrink snap-start lg:snap-align-none relative rounded-[28px] lg:rounded-[32px] p-6 sm:p-7 lg:p-8 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${
                    isPopular
                      ? "border-2 border-emerald-500/50 dark:border-emerald-400/40 bg-gradient-to-b from-emerald-50/80 via-white to-emerald-50/30 dark:from-emerald-950/30 dark:via-white/[0.06] dark:to-black/40 shadow-xl dark:shadow-2xl shadow-emerald-500/10 dark:shadow-emerald-950/30"
                      : pkg.theme === "blue"
                      ? "border border-violet-500/30 dark:border-violet-500/30 bg-gradient-to-b from-violet-50/70 via-white to-violet-50/20 dark:from-violet-950/30 dark:via-white/[0.04] dark:to-black/40 shadow-md hover:shadow-xl hover:border-violet-500/50"
                      : "border border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 shadow-sm dark:shadow-none hover:shadow-xl hover:border-slate-300 dark:hover:border-white/30"
                  }`}
                >
                  {isPopular && (
                    <span className="absolute -top-3.5 left-6 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-lg shadow-emerald-500/40">
                      <HugeiconsIcon icon={FireIcon} size={12} className="text-amber-300" />
                      <span>Paling Banyak Dipilih</span>
                    </span>
                  )}

                  <div>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                        isPopular
                          ? "bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-700 dark:text-[#10B981]"
                          : pkg.theme === "blue"
                          ? "bg-violet-500/15 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300"
                          : "bg-teal-500/15 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300"
                      }`}
                    >
                      <HugeiconsIcon icon={IconComp} size={12} />
                      <span>{pkg.badgeLabel}</span>
                    </span>

                    <h3 className="mt-4 text-xl font-black text-slate-900 dark:text-white">
                      {pkg.name}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-white/70">
                      {pkg.desc}
                    </p>

                    {"priceDetail" in pkg && pkg.priceDetail ? (
                      <div className="mt-5 space-y-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 p-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-700 dark:text-slate-200">
                            🌐 Aplikasi Web Custom:
                          </span>
                          <span className="font-extrabold text-emerald-600 dark:text-emerald-400">
                            {pkg.priceDetail.web}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs border-t border-emerald-500/20 pt-2">
                          <span className="font-semibold text-slate-700 dark:text-slate-200">
                            📱 Aplikasi Android (Flutter):
                          </span>
                          <span className="font-extrabold text-emerald-600 dark:text-emerald-400">
                            {pkg.priceDetail.mobile}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-6 flex items-baseline gap-2">
                        <span className="text-xs text-slate-400 dark:text-white/40">Mulai dari</span>
                        <span
                          className={`text-2xl sm:text-3xl font-black ${
                            isPopular
                              ? "text-emerald-600 dark:text-[#10B981]"
                              : pkg.theme === "blue"
                              ? "text-violet-600 dark:text-violet-400"
                              : "text-slate-900 dark:text-white"
                          }`}
                        >
                          {pkg.price}
                        </span>
                      </div>
                    )}

                    <ul className="mt-6 space-y-2.5 border-t border-slate-100 dark:border-white/10 pt-6 text-xs text-slate-600 dark:text-white/80">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <HugeiconsIcon
                            icon={CheckmarkCircle01Icon}
                            size={15}
                            className={`shrink-0 mt-0.5 ${
                              isPopular
                                ? "text-emerald-600 dark:text-[#10B981]"
                                : pkg.theme === "blue"
                                ? "text-violet-600 dark:text-violet-400"
                                : "text-teal-600 dark:text-teal-400"
                            }`}
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={getWaUrl(pkg.ctaMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold transition-all hover:scale-[1.02] active:scale-[0.98] ${
                      isPopular
                        ? "bg-emerald-600 dark:bg-[#10B981] text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-500"
                        : pkg.theme === "blue"
                        ? "bg-violet-600 hover:bg-violet-500 text-white shadow-md shadow-violet-500/20"
                        : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
                    }`}
                  >
                    <HugeiconsIcon icon={WhatsappIcon} size={16} />
                    <span>{pkg.ctaText}</span>
                  </a>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Swipe Cue Indicator for Mobile & Tablet */}
          <div className="flex lg:hidden items-center justify-center gap-1.5 text-[11px] font-medium text-slate-400 dark:text-white/40 mt-3 sm:mt-4">
            <HugeiconsIcon icon={ArrowRight01Icon} size={13} className="rotate-180" />
            <span>Geser ke samping untuk melihat paket lain</span>
            <HugeiconsIcon icon={ArrowRight01Icon} size={13} />
          </div>
        </div>

        {/* Quick Troubleshoot & Fix Error Callout */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 text-center">
          <p className="text-xs text-slate-500 dark:text-white/60">
            Butuh optimasi performa, perbaikan bug sistem, atau penambahan modul cepat pada sistem yang sudah jalan?{" "}
            <a
              href={getWaUrl("Halo Mas (ecoDigital), saya mau konsultasi fix bug / perbaikan modul kodingan saya.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
            >
              <span>Layanan Fix Bug mulai Rp150.000</span>
              <HugeiconsIcon icon={ArrowRight01Icon} size={12} />
            </a>
          </p>
        </div>

        {/* Interactive Calculator Promotion Banner */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14">
          <AnimateOnScroll preset="fade-up">
            <div className="relative rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-50 via-white to-blue-50 dark:from-emerald-950/40 dark:via-white/[0.03] dark:to-blue-950/30 p-6 sm:p-8 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-md dark:shadow-2xl overflow-hidden">
              <div className="flex items-start sm:items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                  <HugeiconsIcon icon={CalculatorIcon} size={24} />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 dark:bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                    Kalkulator Mandiri
                  </div>
                  <h4 className="mt-1.5 text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    Punya Kebutuhan Fitur Spesifik? Hitung Estimasinya di Sini
                  </h4>
                  <p className="mt-1 text-xs text-slate-600 dark:text-white/60 max-w-xl leading-relaxed">
                    Pilih kategori sistem Anda dan centang fitur tambahan yang diinginkan di halaman simulasi biaya interaktif kami. Hasil estimasi langsung terhitung secara transparan.
                  </p>
                </div>
              </div>

              <Link
                href="/simulasi-biaya"
                prefetch={false}
                className="shrink-0 w-full md:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3.5 text-xs font-bold text-gray-950 shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95"
              >
                <span>Buka Kalkulator Biaya</span>
                <HugeiconsIcon icon={ArrowRight01Icon} size={15} />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </motion.div>
    </div>
  );
}
