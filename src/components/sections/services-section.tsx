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
    id: "pembuatan-aplikasi",
    chapterNumber: "01",
    categoryLabel: "UNTUK MAHASISWA, PENELITI & TUGAS AKHIR",
    headlineMain: "Dari Deadline yang Bikin Cemas,",
    headlineAccent: "Menjadi Hari Sidang yang Paling Kamu Nantikan.",
    subheadline:
      "Tugas akhir bukan sekadar kodingan yang harus jalan. Ini tentang ketenangan pikiran dan rasa percaya diri saat melangkah ke ruang sidang.",
    accentColor: "#10B981",
    accentGlow: "rgba(16, 185, 129, 0.15)",
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/30",
    accentGradient: "from-emerald-500 to-teal-400",
    icon: LaptopProgrammingIcon,
    serviceTitle: "Pembuatan Aplikasi Custom Tugas Akhir",
    conditionPrompt:
      "Mas, butuh bantu bikin aplikasi untuk TA. Deadline 3 minggu lagi, belum ada apa-apa. Dosen minta ada login, database, sama laporan. Nggak tau harus mulai dari mana... 😭",
    masEkoResolution:
      "Oke, ceritakan detailnya — fitur apa yang dibutuhkan, teknologi yang diminta dosen, dan timeframe-nya. Kita susun plan-nya bareng, langsung eksekusi.",
    reliefPillars: [
      {
        num: "01",
        title: "Alur & Metodologi Sesuai Permintaan Dosen",
        desc: "Sistem informasi, SPK (AHP/TOPSIS/SAW), machine learning, atau mobile Flutter yang dibangun dari nol sesuai flowchart kamu.",
      },
      {
        num: "02",
        title: "Source Code 100% Milikmu & Bersih",
        desc: "Tanpa enkripsi, tanpa ketergantungan. Seluruh database dan kode diserahkan utuh untuk masa depanmu.",
      },
      {
        num: "03",
        title: "Video Bedah Kode & Sesi Bimbingan 1-on-1",
        desc: "Bukan cuma menerima file jadi. Mas Eko menjelaskan bagaimana setiap logika bekerja agar kamu siap menjawab penguji.",
      },
    ],
    ctaText: "Ngobrol Santai Soal TA-mu",
    waMessage:
      "Halo Mas Eko (ecoDigital), saya mau konsultasi santai seputar pembuatan sistem aplikasi Tugas Akhir / skripsi saya.",
  },
  {
    id: "jasa-api-backend",
    chapterNumber: "02",
    categoryLabel: "UNTUK DEVELOPER, STARTUP & TIM TEKNIS",
    headlineMain: "Tampilan Frontend Sudah Memukau,",
    headlineAccent: "Tapi Fondasi Backend Belum Ada? Serahkan ke Kami.",
    subheadline:
      "Fokus pada pengalaman pengguna yang luar biasa. Biarkan kami merancang arsitektur API, relasi database, dan keamanan data di belakang layar.",
    accentColor: "#A78BFA",
    accentGlow: "rgba(167, 139, 250, 0.15)",
    accentText: "text-violet-400",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/30",
    accentGradient: "from-violet-500 to-indigo-400",
    icon: ApiIcon,
    serviceTitle: "Jasa REST API & Backend Architecture",
    conditionPrompt:
      "Mas, lagi develop frontend tapi bingung setup backend-nya. Butuh REST API yang clean, ada dokumentasinya, dan bisa handle banyak user. Tim saya nggak ada yang spesialisasi backend... 😅",
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
        title: "Integrasi Payment Gateway & Notifikasi",
        desc: "Terkoneksi langsung ke Midtrans, Xendit, atau WhatsApp Gateway resmi untuk otomasi transaksi bisnis.",
      },
    ],
    ctaText: "Diskusi Kebutuhan Backend",
    waMessage:
      "Halo Mas Eko (ecoDigital), saya mau diskusi kebutuhan pembuatan REST API & arsitektur backend untuk project saya.",
  },
  {
    id: "aplikasi-sistem",
    chapterNumber: "03",
    categoryLabel: "UNTUK SEKOLAH, INSTANSI & PELAKU USAHA",
    headlineMain: "Tinggalkan Cara Manual yang Melelahkan.",
    headlineAccent: "Hadirkan Sistem yang Nyata & Membantu Sehari-hari.",
    subheadline:
      "Bukan template pajangan yang rumit digunakan. Kami membangun sistem operasional yang praktis, ramah pengguna, dan benar-benar bekerja di lapangan.",
    accentColor: "#2DD4BF",
    accentGlow: "rgba(45, 212, 191, 0.15)",
    accentText: "text-teal-400",
    accentBg: "bg-teal-500/10",
    accentBorder: "border-teal-500/30",
    accentGradient: "from-teal-400 to-emerald-400",
    icon: Building03Icon,
    serviceTitle: "Aplikasi Sistem Operasional & Bisnis",
    conditionPrompt:
      "Saya punya usaha kecil-kecilan tapi semua masih dicatat manual. Mau buat sistem tapi nggak tau harus minta apa ke developer. Pernah kecewa karena developer sebelumnya tiba-tiba ghosting... 😤",
    masEkoResolution:
      "Nggak perlu tau istilah teknisnya. Cukup ceritakan kondisi bisnis kamu sekarang — saya bantu terjemahkan jadi sistem yang langsung bisa dipakai, bukan sekadar template pajangan.",
    reliefPillars: [
      {
        num: "01",
        title: "Sistem Operasional yang Siap Pakai",
        desc: "Sistem informasi sekolah, arsip digital instansi, maupun aplikasi kasir (POS) & stok barang yang disesuaikan kebutuhan usahamu.",
      },
      {
        num: "02",
        title: "Komitmen Transparansi Anti-Ghosting",
        desc: "Update progress rutin setiap minggu. Anda memegang kendali penuh tanpa rasa waswas ditinggal di tengah jalan.",
      },
      {
        num: "03",
        title: "Langsung Online & Siap Pakai",
        desc: "Termasuk pengaturan domain resmi, server cloud cepat, hingga sesi panduan pengoperasian untuk staf Anda.",
      },
    ],
    ctaText: "Mulai Transformasi Sistem Usaha",
    waMessage:
      "Halo Mas Eko (ecoDigital), saya mau diskusi pembuatan aplikasi sistem operasional untuk sekolah / instansi / bisnis saya.",
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

  return (
    <article
      ref={sectionRef}
      id={chapter.id}
      className={`relative w-full ${
        index === 0 ? "border-t-0 pt-16 sm:pt-20 lg:pt-24" : "border-t border-white/[0.08] pt-20 sm:pt-28 lg:pt-32"
      } pb-24 sm:pb-32 lg:pb-40 overflow-hidden scroll-mt-0`}
    >
      {/* 1. Atmospheric Ambient Lighting Pools */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full blur-[140px] opacity-20"
        style={{ backgroundColor: chapter.accentColor }}
      />
      <div className="pointer-events-none absolute bottom-0 left-10 h-[380px] w-[380px] rounded-full bg-blue-600/10 blur-[120px]" />

      {/* 2. Giant Watermark Chapter Counter with Scroll Parallax */}
      <motion.div
        style={{ y: watermarkY }}
        className="pointer-events-none absolute top-8 right-6 sm:right-12 lg:right-24 font-black tracking-tighter text-white/[0.028] select-none text-[120px] sm:text-[180px] lg:text-[240px] leading-none"
        aria-hidden="true"
      >
        {chapter.chapterNumber}
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── CHAPTER HEADER (Bold Editorial Kicker) ─── */}
        <AnimateOnScroll preset="fade-up" once={false} className="max-w-4xl mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.18] sm:leading-[1.15]">
            {chapter.headlineMain}{" "}
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r"
              style={{
                backgroundImage: `linear-gradient(90deg, #ffffff, ${chapter.accentColor})`,
              }}
            >
              {chapter.headlineAccent}
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base lg:text-lg text-white/60 leading-relaxed max-w-3xl">
            {chapter.subheadline}
          </p>
        </AnimateOnScroll>

        {/* ─── THE CINEMATIC DIALOGUE STAGE ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
          {/* ── SISI KIRI (5/12): COMIC POP & DIRECT DIALOGUE ── */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* 💬 Cloud Speech Bubble: Suara Tamu dengan Spring Pop-in Physics */}
            <div className="relative pt-1">
              {/* The Comic Speech Bubble Box */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.25 }}
                variants={comicBubbleVariants}
                className="rounded-[24px] p-6 text-slate-900 transition-transform duration-300 hover:scale-[1.01]"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  border: "2.5px solid #0f172a",
                  boxShadow: `0 18px 40px -10px rgba(0,0,0,0.7), 5px 5px 0px ${chapter.accentColor}`,
                }}
              >
                <p className="text-sm sm:text-[15px] font-bold leading-relaxed text-slate-900">
                  &ldquo;{chapter.conditionPrompt}&rdquo;
                </p>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <span>👤</span>
                    <span>Guest Visitor</span>
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">ecoDigital.id</span>
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
                  className="w-3.5 h-3.5 rounded-full bg-white"
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
                  className="w-2 h-2 ml-1.5 rounded-full bg-white"
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
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-md"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-emerald-400 shadow-md">
                  <Image
                    src={founderImg}
                    alt="Mas Eko — Lead Developer ecoDigital"
                    fill
                    unoptimized
                    sizes="44px"
                    className="object-cover object-top scale-[1.35] translate-y-1"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">Mas Eko</span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/20">
                      Lead Developer
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400/80 uppercase font-semibold">
                    JAWABAN DARI MAS EKO:
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/90 leading-relaxed italic pl-0.5">
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
            className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.01] p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            {/* Soft inner glow */}
            <div
              className="pointer-events-none absolute top-0 right-0 h-44 w-44 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: chapter.accentColor }}
            />

            <div>
              {/* Service Category Tag & Title */}
              <div className="flex items-center gap-3.5 mb-8 pb-6 border-b border-white/10">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${chapter.accentBorder} ${chapter.accentBg} ${chapter.accentText} shadow-md`}
                >
                  <HugeiconsIcon icon={chapter.icon} size={24} />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-white/40 block">
                    PAKET LAYANAN TERFOKUS
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
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
                className="space-y-6 sm:space-y-7 mb-10"
              >
                {chapter.reliefPillars.map((pillar, pIdx) => (
                  <motion.div
                    key={pIdx}
                    variants={pillarItemVariants}
                    className="group flex items-start gap-4 sm:gap-5"
                  >
                    <span
                      className={`font-mono text-sm sm:text-base font-bold text-white/30 transition-colors group-hover:${chapter.accentText} pt-0.5`}
                    >
                      {pillar.num}
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-white transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Bottom Action Footer (Relaxed, High Trust) */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <a
                href={getWaUrl(chapter.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r ${chapter.accentGradient} px-7 py-4 text-xs sm:text-sm font-bold text-slate-950 shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] font-sans`}
              >
                <HugeiconsIcon icon={WhatsappIcon} size={18} />
                <span>{chapter.ctaText}</span>
                <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  );
}

// ─── Main ServicesSection Component ───────────────────────────────────────────

export function ServicesSection() {
  return (
    <section id="layanan" className="relative z-20 w-full bg-[#060A14] scroll-mt-0">
      <span id="solusi" className="scroll-mt-0 block" />

      {/* ─── 3 EDITORIAL CHAPTERS ─── */}
      <div className="w-full">
        {CHAPTERS.map((chapter, index) => (
          <EditorialChapterSection key={chapter.id} chapter={chapter} index={index} />
        ))}
      </div>
    </section>
  );
}
