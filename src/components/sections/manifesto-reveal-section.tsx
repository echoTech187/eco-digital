"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CodeIcon,
  ShieldCheckIcon,
  ServerStack01Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";

interface ScrubWordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function ScrubWord({ word, progress, range }: ScrubWordProps) {
  // Kata bertransisi dari redup ke putih terang menyala
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(
    progress,
    range,
    ["rgba(148, 163, 184, 0.35)", "rgba(255, 255, 255, 1)"]
  );
  const textShadow = useTransform(
    progress,
    range,
    ["0 0 0px rgba(16, 185, 129, 0)", "0 0 20px rgba(16, 185, 129, 0.35)"]
  );

  return (
    <motion.span
      style={{ opacity, color, textShadow }}
      className="inline-block mr-[0.26em] transition-all will-change-[opacity,color]"
    >
      {word}
    </motion.span>
  );
}

export function ManifestoRevealSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Monitor scroll progress di container 220vh ini
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ─── 1. EFEK CLIP-PATH ZOOM (Kartu Melayang Melebar Menjadi Fullscreen) ──────
  // Dari 0% s/d 45% scroll, kartu mengembang dari tengah hingga full bleed
  const clipPath = useTransform(
    scrollYProgress,
    [0.05, 0.45],
    [
      "inset(14% 18% 14% 18% round 36px)", // Kartu melayang di tengah
      "inset(0% 0% 0% 0% round 0px)",       // Full screen menyatu dengan layar
    ]
  );

  // Border glow kartu yang memudar saat sudah full-bleed
  const cardBorderOpacity = useTransform(scrollYProgress, [0.05, 0.4], [1, 0]);

  // Skala visual background agar terasa ada kedalaman 3D
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1.12, 1]);

  // ─── 2. EFEK TEKS SCRUBBER (Menyala Kata per Kata) ──────────────────────────
  const statement =
    "Setiap baris kode kami bangun dengan arsitektur bersih, performa tinggi, dan bebas sandera vendor — siap mengawal akselerasi instansi dan operasional bisnis Anda.";
  const words = statement.split(" ");

  // Badge atas & pills bawah
  const badgeOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  const badgeY = useTransform(scrollYProgress, [0.25, 0.45], [20, 0]);

  const pillsOpacity = useTransform(scrollYProgress, [0.65, 0.85], [0, 1]);
  const pillsY = useTransform(scrollYProgress, [0.65, 0.85], [25, 0]);

  // ─── 3. EFEK EXIT FADE (Keluar Halus Menuju Section Portofolio) ─────────────
  const sectionOpacity = useTransform(scrollYProgress, [0.88, 1], [1, 0.15]);
  const sectionScale = useTransform(scrollYProgress, [0.88, 1], [1, 0.96]);

  return (
    <section
      ref={containerRef}
      className="relative h-[220vh] w-full bg-[#030712] text-white"
      aria-label="Standar Rekayasa ecoDigital"
    >
      {/* ─── STICKY VIEWPORT CONTAINER (Layar Terkunci Sesaat) ─────────────── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Animated Card Container dengan Clip-Path Zoom */}
        <motion.div
          style={{
            clipPath,
            opacity: sectionOpacity,
            scale: sectionScale,
          }}
          className="relative h-full w-full will-change-[clip-path,opacity] bg-[#040810] flex items-center justify-center overflow-hidden"
        >
          {/* Ambient Background Glows & Grid */}
          <motion.div
            style={{ scale: bgScale }}
            className="absolute inset-0 pointer-events-none will-change-transform"
          >
            {/* Grid Pattern */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
                backgroundSize: "36px 36px",
              }}
            />

            {/* Glowing Radial Auras */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] sm:h-[700px] sm:w-[700px] rounded-full bg-emerald-500/15 blur-[120px] pointer-events-none" />
            <div className="absolute top-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-teal-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[110px] pointer-events-none" />
          </motion.div>

          {/* Border Overlay Melayang saat Masih Berbentuk Kartu */}
          <motion.div
            style={{ opacity: cardBorderOpacity }}
            className="pointer-events-none absolute inset-[14%_18%] rounded-[36px] border border-emerald-500/40 shadow-[0_0_60px_-15px_rgba(16,185,129,0.3)] z-10 hidden sm:block"
          />

          {/* ─── KONTEN UTAMA: STATEMENT & SCRUBBER ────────────────────────── */}
          <div className="relative z-20 mx-auto max-w-5xl px-6 sm:px-10 text-center flex flex-col items-center justify-center">
            {/* Pill Badge */}
            <motion.div
              style={{ opacity: badgeOpacity, y: badgeY }}
              className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-500/10"
            >
              <HugeiconsIcon icon={SparklesIcon} size={14} className="text-emerald-400" />
              <span>FILOSOFI REKAYASA SISTEM</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </motion.div>

            {/* Typography Scrubber Headline */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-black leading-[1.25] sm:leading-[1.2] tracking-tight max-w-4xl mx-auto">
              {words.map((word, i) => {
                // Rentang aktif scrub untuk masing-masing kata (antara 0.35 s/d 0.75)
                const start = 0.32 + (i / words.length) * 0.38;
                const end = start + 0.38 / words.length;
                return (
                  <ScrubWord
                    key={i}
                    word={word}
                    progress={scrollYProgress}
                    range={[start, end]}
                  />
                );
              })}
            </h2>

            {/* 3 Core Value Pillars (Fade-In di Akhir Scroll) */}
            <motion.div
              style={{ opacity: pillsOpacity, y: pillsY }}
              className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2.5 backdrop-blur-md text-xs sm:text-sm font-semibold text-slate-200">
                <HugeiconsIcon icon={CodeIcon} size={16} className="text-emerald-400" />
                <span>Clean Architecture Modular</span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2.5 backdrop-blur-md text-xs sm:text-sm font-semibold text-slate-200">
                <HugeiconsIcon icon={ShieldCheckIcon} size={16} className="text-teal-400" />
                <span>100% Source Code Tanpa Enkripsi</span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2.5 backdrop-blur-md text-xs sm:text-sm font-semibold text-slate-200">
                <HugeiconsIcon icon={ServerStack01Icon} size={16} className="text-cyan-400" />
                <span>Staging Live &amp; Video Panduan Admin</span>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator Prompt */}
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.2, 0.45], [1, 1, 0]),
            }}
            className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-[10px] sm:text-xs uppercase tracking-widest pointer-events-none"
          >
            <span>Gulir untuk Menjelajahi</span>
            <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 rounded-full bg-emerald-400"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

