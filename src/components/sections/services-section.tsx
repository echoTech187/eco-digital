"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  LaptopProgrammingIcon,
  ApiIcon,
  Building03Icon,
  WhatsappIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { getWaUrl } from "@/data/landing-data";
import founderImg from "../../../public/images/founder.png";

// ─── Data Interface ───────────────────────────────────────────────────────────

interface EditorialChapter {
  id: string;
  chapterNumber: string;
  categoryLabel: string;
  headlineMain: string;
  headlineAccent: string;
  subheadline: string;
  accentColor: string;
  accentGlow: string;
  accentText: string;
  accentBg: string;
  accentBorder: string;
  accentGradient: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  serviceTitle: string;
  conditionPrompt: string;
  masEkoResolution: string;
  reliefPillars: {
    num: string;
    title: string;
    desc: string;
  }[];
  ctaText: string;
  waMessage: string;
}

// ─── 3 Cinematic Editorial Chapters ───────────────────────────────────────────

const CHAPTERS: EditorialChapter[] = [
  {
    id: "aplikasi-custom",
    chapterNumber: "01",
    categoryLabel: "LAYANAN 01 • APLIKASI WEB & MOBILE",
    headlineMain: "Dari Spesifikasi Alur yang Rumit,",
    headlineAccent: "Menjadi Aplikasi Custom Handal Siap Go-Live.",
    subheadline:
      "Solusi aplikasi berbasis web dan mobile (Flutter/React Native) yang dibangun khusus dari nol sesuai kebutuhan unik operasional, manajemen data, maupun riset Anda.",
    accentColor: "#10B981",
    accentGlow: "rgba(16, 185, 129, 0.15)",
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/30",
    accentGradient: "from-emerald-500 to-teal-400",
    icon: LaptopProgrammingIcon,
    serviceTitle: "Aplikasi Custom (Web & Mobile)",
    conditionPrompt:
      "Halo Mas Eko, kami butuh aplikasi kustom dengan hak akses berjenjang (multi-role), alur verifikasi berkas, dan dashboard pemantau. Butuh yang kodenya bersih dan mudah dikembangkan lanjut.",
    masEkoResolution:
      "Siap, kirimkan rancangan fitur atau diagram alurnya. Kita formulasikan arsitekturnya, rancang struktur datanya, dan bangun bertahap dengan pantauan staging live.",
    reliefPillars: [
      {
        num: "01",
        title: "Alur & Fitur 100% Custom",
        desc: "Dibangun khusus sesuai alur proses bisnis atau riset Anda tanpa batasan template kaku.",
      },
      {
        num: "02",
        title: "Clean Architecture & Modular",
        desc: "Struktur kode teratur, modular, dan memisahkan logika domain, service, dan antarmuka.",
      },
      {
        num: "03",
        title: "Penyerahan File & Dokumentasi Utuh",
        desc: "Seluruh database dan berkas kode diserahkan utuh tanpa kunci enkripsi, siap di-deploy secara mandiri.",
      },
    ],
    ctaText: "Konsultasi Aplikasi Custom",
    waMessage:
      "Halo Mas Eko (ecoDigital), saya mau konsultasi pembuatan Aplikasi Custom untuk kebutuhan sistem saya.",
  },
  {
    id: "jasa-api-backend",
    chapterNumber: "02",
    categoryLabel: "LAYANAN 02 • REST API & CLOUD BACKEND",
    headlineMain: "Tampilan Frontend Sudah Memukau,",
    headlineAccent: "Tapi Fondasi Backend Belum Ada? Serahkan ke Kami.",
    subheadline:
      "Fokus pada pengalaman pengguna yang luar biasa. Biarkan kami merancang arsitektur API yang cepat, relasi database teroptimasi, dan keamanan data di belakang layar.",
    accentColor: "#A78BFA",
    accentGlow: "rgba(167, 139, 250, 0.15)",
    accentText: "text-violet-400",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/30",
    accentGradient: "from-violet-500 to-indigo-400",
    icon: ApiIcon,
    serviceTitle: "Jasa API & Backend Architecture",
    conditionPrompt:
      "Mas, lagi develop frontend tapi bingung setup backend-nya. Butuh REST API yang clean, ada dokumentasinya, dan bisa handle banyak user. Tim saya butuh backend engineer.",
    masEkoResolution:
      "Gampang. Kasih tahu endpoint apa yang dibutuhkan, struktur data yang diinginkan, dan autentikasi yang dipakai — saya bangun backend-nya rapi, documented, dan siap produksi.",
    reliefPillars: [
      {
        num: "01",
        title: "Clean Architecture & Modular API",
        desc: "Struktur kode rapi, mudah di-scale, dan siap dioperasikan tim lain tanpa rasa bingung.",
      },
      {
        num: "02",
        title: "Dokumentasi Lengkap via Postman / Swagger",
        desc: "Semua endpoint memiliki contoh request, response, dan handling error yang jelas untuk tim frontend.",
      },
      {
        num: "03",
        title: "Integrasi Payment Gateway & WhatsApp API",
        desc: "Terkoneksi langsung ke Midtrans, Xendit, atau WhatsApp Gateway resmi untuk otomasi transaksi bisnis.",
      },
    ],
    ctaText: "Diskusi Kebutuhan Backend & API",
    waMessage:
      "Halo Mas Eko (ecoDigital), saya mau diskusi kebutuhan pembuatan REST API & arsitektur backend untuk project saya.",
  },
  {
    id: "web-instansi-bisnis",
    chapterNumber: "03",
    categoryLabel: "LAYANAN 03 • WEB INSTANSI, SEKOLAH & BISNIS",
    headlineMain: "Tinggalkan Cara Manual & Tampilan Usang.",
    headlineAccent: "Hadirkan Website Resmi & Sistem Siap Online.",
    subheadline:
      "Bukan template pajangan yang lambat dan kaku. Kami membangun website profil resmi sekolah/instansi dinas, portal pelayanan publik, serta sistem kasir (POS) & inventori bisnis yang langsung siap beroperasi.",
    accentColor: "#2DD4BF",
    accentGlow: "rgba(45, 212, 191, 0.15)",
    accentText: "text-teal-400",
    accentBg: "bg-teal-500/10",
    accentBorder: "border-teal-500/30",
    accentGradient: "from-teal-400 to-emerald-400",
    icon: Building03Icon,
    serviceTitle: "Web Instansi & Bisnis (Siap Online)",
    conditionPrompt:
      "Kami butuh website profil resmi instansi / sekolah yang terhubung portal pengumuman dan arsip digital, atau sistem web bisnis yang langsung jalan online tanpa ribet setup hosting.",
    masEkoResolution:
      "Tentu. Cukup ceritakan profil lembaga atau operasional usaha Anda — kami siapkan website elegan yang responsif, cepat, terstruktur rapi, dan siap dipublikasikan.",
    reliefPillars: [
      {
        num: "01",
        title: "Web Resmi Instansi & Sekolah Elegan",
        desc: "Desain modern, mobile-friendly, kredibel, dan mudah dikelola admin melalui panel CMS.",
      },
      {
        num: "02",
        title: "Sistem Bisnis, Kasir (POS) & Inventori",
        desc: "Otomasi pencatatan transaksi, cetak nota, stok barang, dan laporan penjualan berkala.",
      },
      {
        num: "03",
        title: "Setup Deployment & Panduan Siap Pakai",
        desc: "Dukungan konfigurasi server/hosting pilihan Anda, migrasi database, hingga panduan pengoperasian mandiri.",
      },
    ],
    ctaText: "Konsultasi Web Instansi & Bisnis",
    waMessage:
      "Halo Mas Eko (ecoDigital), saya mau diskusi pembuatan Web Instansi & Bisnis siap online.",
  },
];

// ─── Advanced Motion Physics Variants ─────────────────────────────────────────

const comicBubbleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.78,
    y: 35,
    rotate: -1.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 18,
      mass: 0.85,
    },
  },
};

const dotTrailVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
      delay: 0.25 + custom * 0.1,
    },
  }),
};

const ekoAnswerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.3,
    },
  },
};

const elevationCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.94,
    rotateX: 10,
    transformPerspective: 1200,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 20,
      mass: 0.9,
      delay: 0.15,
    },
  },
};

const pillarsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.35,
    },
  },
};

const pillarItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 24,
    y: 12,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 18,
    },
  },
};

// ─── Single Cinematic Chapter Component ───────────────────────────────────────

function EditorialChapterSection({
  chapter,
  index,
}: {
  chapter: EditorialChapter;
  index: number;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax subtle drift for giant background watermark
  const watermarkY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  // Receding exit parallax as next chapter/section slides up and covers this chapter
  const { scrollYProgress: exitProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentScale = useTransform(exitProgress, [0, 0.7, 1], [1, 0.98, 0.92]);
  const contentOpacity = useTransform(exitProgress, [0, 0.65, 1], [1, 0.75, 0.25]);
  const contentY = useTransform(exitProgress, [0, 1], [0, 50]);

  const isFirst = index === 0;
  const zIndex = 10 + index * 10; // Ch 01: 10, Ch 02: 20, Ch 03: 30

  return (
    <article
      ref={sectionRef}
      id={chapter.id}
      style={{ zIndex }}
      className={`relative w-full lg:sticky lg:top-0 min-h-screen flex flex-col justify-center ${
        isFirst
          ? "pt-24 sm:pt-28 lg:pt-24"
          : "rounded-t-[36px] sm:rounded-t-[56px] border-t border-slate-200/90 dark:border-white/10 shadow-[0_-30px_70px_-20px_rgba(0,0,0,0.22)] dark:shadow-[0_-35px_80px_-25px_rgba(0,0,0,0.95)] pt-24 sm:pt-28 lg:pt-24"
      } pb-10 sm:pb-14 lg:pb-10 bg-white dark:bg-[#060A14] overflow-hidden scroll-mt-20 sm:scroll-mt-24 transition-colors duration-300`}
    >
      {chapter.id === "aplikasi-custom" && <span id="pembuatan-aplikasi" className="scroll-mt-20 block" />}
      {chapter.id === "web-instansi-bisnis" && <span id="aplikasi-sistem" className="scroll-mt-20 block" />}
      {/* 1. Atmospheric Ambient Lighting Pools */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full blur-[140px] opacity-15 dark:opacity-20"
        style={{ backgroundColor: chapter.accentColor }}
      />
      <div className="pointer-events-none absolute bottom-0 left-10 h-[380px] w-[380px] rounded-full bg-blue-600/10 blur-[120px]" />

      {/* 2. Giant Watermark Chapter Counter with Scroll Parallax */}
      <motion.div
        style={{ y: watermarkY }}
        className="pointer-events-none absolute top-8 right-6 sm:right-12 lg:right-24 font-black tracking-tighter text-slate-900/[0.04] dark:text-white/[0.028] select-none text-[120px] sm:text-[180px] lg:text-[240px] leading-none"
        aria-hidden="true"
      >
        {chapter.chapterNumber}
      </motion.div>

      <motion.div
        style={{ scale: contentScale, opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 will-change-transform origin-top w-full my-auto"
      >
        {/* ─── CHAPTER HEADER (Bold Editorial Kicker) ─── */}
        <AnimateOnScroll preset="fade-up" once={false} className="max-w-4xl mb-4 sm:mb-6 lg:mb-5">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-[34px] font-black tracking-tight text-slate-900 dark:text-white leading-[1.2]">
            {chapter.headlineMain}{" "}
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r"
              style={{
                backgroundImage: `linear-gradient(90deg, #10B981, ${chapter.accentColor})`,
              }}
            >
              {chapter.headlineAccent}
            </span>
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-white/60 leading-relaxed max-w-3xl">
            {chapter.subheadline}
          </p>
        </AnimateOnScroll>

        {/* ─── THE CINEMATIC DIALOGUE STAGE ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* ── SISI KIRI (5/12): COMIC POP & DIRECT DIALOGUE ── */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3 sm:space-y-4">
            {/* 💬 Cloud Speech Bubble: Suara Tamu dengan Spring Pop-in Physics */}
            <div className="relative pt-1">
              {/* The Comic Speech Bubble Box */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.25 }}
                variants={comicBubbleVariants}
                className="rounded-[18px] sm:rounded-[22px] p-4 sm:p-5 text-slate-900 transition-transform duration-300 hover:scale-[1.01]"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  border: "2.5px solid #0f172a",
                  boxShadow: `0 16px 36px -10px rgba(0,0,0,0.7), 4px 4px 0px ${chapter.accentColor}`,
                }}
              >
                <p className="text-xs sm:text-[13px] font-bold leading-relaxed text-slate-900">
                  &ldquo;{chapter.conditionPrompt}&rdquo;
                </p>

                <div className="mt-2.5 pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <span>👤</span>
                    <span>Guest Visitor</span>
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">ecoDigital.id</span>
                </div>
              </motion.div>

              {/* Staggered Comic Cloud Trail Dots */}
              <div className="flex flex-col items-start pl-8 mt-1 space-y-1">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.25 }}
                  custom={0}
                  variants={dotTrailVariants}
                  className="w-3 h-3 rounded-full bg-white"
                  style={{
                    border: "2px solid #0f172a",
                    boxShadow: `1.5px 1.5px 0px ${chapter.accentColor}`,
                  }}
                />
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.25 }}
                  custom={1}
                  variants={dotTrailVariants}
                  className="w-2 h-2 ml-1 rounded-full bg-white"
                  style={{
                    border: "1.5px solid #0f172a",
                    boxShadow: `1.5px 1.5px 0px ${chapter.accentColor}`,
                  }}
                />
              </div>
            </div>

            {/* Jawaban Langsung Mas Eko (Empati & Kelegaan) with Spring Physics */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              variants={ekoAnswerVariants}
              className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.035] p-3.5 sm:p-4 shadow-xs dark:shadow-none backdrop-blur-md"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-emerald-400 shadow-md">
                  <Image
                    src={founderImg}
                    alt="Mas Eko — Lead Developer ecoDigital"
                    width={36}
                    height={36}
                    unoptimized
                    className="h-full w-full object-cover object-top scale-[1.35] translate-y-1 aspect-square"
                    style={{ aspectRatio: "1 / 1" }}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Mas Eko</span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      Lead Developer
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400/80 uppercase font-semibold">
                    JAWABAN DARI MAS EKO:
                  </span>
                </div>
              </div>

              <p className="text-[11px] sm:text-xs text-slate-700 dark:text-white/90 leading-relaxed italic pl-0.5">
                &ldquo;{chapter.masEkoResolution}&rdquo;
              </p>
            </motion.div>
          </div>

          {/* ── SISI KANAN (7/12): 3D ELEVATION CARD WITH STAGGERED PILLARS ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={elevationCardVariants}
            className="lg:col-span-7 flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.045] dark:to-white/[0.01] p-4 sm:p-6 lg:p-6 backdrop-blur-xl shadow-xl dark:shadow-2xl relative overflow-hidden"
          >
            {/* Soft inner glow */}
            <div
              className="pointer-events-none absolute top-0 right-0 h-44 w-44 rounded-full blur-3xl opacity-15 dark:opacity-20"
              style={{ backgroundColor: chapter.accentColor }}
            />

            <div>
              {/* Service Category Tag & Title */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-200 dark:border-white/10">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${chapter.accentBorder} ${chapter.accentBg} ${chapter.accentText} shadow-md`}
                >
                  <HugeiconsIcon icon={chapter.icon} size={20} />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-semibold tracking-wider uppercase text-slate-400 dark:text-white/40 block">
                    PAKET LAYANAN TERFOKUS
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-tight">
                    {chapter.serviceTitle}
                  </h3>
                </div>
              </div>

              {/* 3 Editorial Pillars of Relief (Staggered Cascade Animation) */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={pillarsContainerVariants}
                className="space-y-3 sm:space-y-3 mb-5"
              >
                {chapter.reliefPillars.map((pillar, pIdx) => (
                  <motion.div
                    key={pIdx}
                    variants={pillarItemVariants}
                    className="group flex items-start gap-3 sm:gap-3.5"
                  >
                    <span
                      className={`font-mono text-xs sm:text-sm font-bold text-slate-400 dark:text-white/30 transition-colors group-hover:${chapter.accentText} pt-0.5`}
                    >
                      {pillar.num}
                    </span>
                    <div className="space-y-0.5">
                      <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-white transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 dark:text-white/60 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Bottom Action Footer (Relaxed, High Trust) */}
            <div className="pt-3.5 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <a
                href={getWaUrl(chapter.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${chapter.accentGradient} px-5 py-2.5 text-xs sm:text-[13px] font-bold text-slate-950 shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] font-sans`}
              >
                <HugeiconsIcon icon={WhatsappIcon} size={16} />
                <span>{chapter.ctaText}</span>
                <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </article>
  );
}

// ─── Main ServicesSection Component ───────────────────────────────────────────

export function ServicesSection() {
  return (
    <section
      id="layanan"
      className="relative z-10 w-full pt-0 rounded-t-[36px] sm:rounded-t-[56px] scroll-mt-0 transition-colors duration-300"
    >
      <span id="solusi" className="scroll-mt-0 block" />

      {/* ─── 3 EDITORIAL CHAPTERS ─── */}
      <div className="w-full">
        {CHAPTERS.map((chapter, index) => (
          <EditorialChapterSection key={chapter.id} chapter={chapter} index={index} />
        ))}
        {/* Scroll buffer runway so Chapter 03 stays pinned and readable without being cut off prematurely */}
        <div className="hidden lg:block w-full h-[45vh]" aria-hidden="true" />
      </div>
    </section>
  );
}
