"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
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

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.4, 1]);

  return (
    <div
      ref={sectionRef}
      className="relative z-20 w-full -mt-10 sm:-mt-14 rounded-t-[36px] sm:rounded-t-[56px] border-t border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-[#060A14] px-4 sm:px-8 lg:px-14 pt-16 sm:pt-20 pb-16 sm:pb-24 shadow-[0_-25px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_-30px_70px_-20px_rgba(0,0,0,0.6)] transition-colors duration-300"
    >
      <motion.div
        style={{ scale, y, opacity }}
        className="mx-auto max-w-6xl will-change-transform origin-top"
      >
        {/* Anchor targets placed exactly at top of pricing content */}
        <div id="paket-harga" className="scroll-mt-0" />
        <span id="harga" className="scroll-mt-0 block" />
        <AnimateOnScroll preset="fade-up" className="mb-8 sm:mb-12 text-center">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg, idx) => {
            const isPopular = pkg.isPopular;
            const IconComp = pkg.badgeIcon;

            return (
              <div
                key={idx}
                className={`relative rounded-[32px] p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "border-2 border-emerald-500/50 dark:border-emerald-400/40 bg-gradient-to-b from-emerald-50/80 via-white to-emerald-50/30 dark:from-emerald-950/30 dark:via-white/[0.06] dark:to-black/40 shadow-xl dark:shadow-2xl shadow-emerald-500/10 dark:shadow-emerald-950/30 scale-[1.01]"
                    : pkg.theme === "blue"
                    ? "border border-violet-500/30 dark:border-violet-500/30 bg-gradient-to-b from-violet-50/70 via-white to-violet-50/20 dark:from-violet-950/30 dark:via-white/[0.04] dark:to-black/40 shadow-md"
                    : "border border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 shadow-sm dark:shadow-none"
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
              </div>
            );
          })}
        </div>

        {/* Quick Troubleshoot & Fix Error Callout */}
        <div className="mt-8 text-center">
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
        <AnimateOnScroll preset="fade-up" className="mt-10 sm:mt-14">
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
      </motion.div>
    </div>
  );
}
