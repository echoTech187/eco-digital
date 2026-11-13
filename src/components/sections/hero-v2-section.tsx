"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { WhatsappIcon } from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { getWaUrl, TECH_STACK_ITEMS } from "@/data/landing-data";
import founderImg from "../../../public/images/founder.png";

const HERO_BUBBLE_SCRIPTS = [
  "Butuh aplikasi custom yang modular, fondasi REST API kencang, atau web instansi siap pakai? Semua bermula dari satu sapaan santai.",
  "Di ecoDigital, Anda langsung berdiskusi dengan lead developer. Ceritakan alur sistem atau spesifikasi teknismu tanpa perantara sales.",
  "Clean architecture rapi, relasi database teroptimasi, serta integrasi payment gateway & WhatsApp API yang handal.",
  "Progres terpantau lewat staging live 24/7, sistem stabil, arsitektur bersih, dan tanpa biaya tersembunyi.",
  "Solusi rekayasa software tepat guna: Aplikasi Custom, Jasa API & Backend, dan Web Instansi & Bisnis — dimulai dari sapaan 'Halo'!",
];

export function HeroV2Section({ videoSrc }: { videoSrc?: string | null } = {}) {
  void videoSrc;
  const [currentScriptIdx, setCurrentScriptIdx] = useState(0);
  const [typewriterText, setTypewriterText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Typewriter effect cycling through the 4 scripts smoothly
  useEffect(() => {
    const fullText = HERO_BUBBLE_SCRIPTS[currentScriptIdx];
    let charIndex = 0;
    let nextTimer: NodeJS.Timeout | null = null;

    const interval = setInterval(() => {
      charIndex++;
      setTypewriterText(fullText.slice(0, charIndex));
      if (charIndex >= fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
        nextTimer = setTimeout(() => {
          setTypewriterText("");
          setIsTyping(true);
          setCurrentScriptIdx((prev) => (prev + 1) % HERO_BUBBLE_SCRIPTS.length);
        }, 3600);
      }
    }, 22);

    return () => {
      clearInterval(interval);
      if (nextTimer) clearTimeout(nextTimer);
    };
  }, [currentScriptIdx]);

  // Click bubble to either finish typing instantly or advance to next message
  const handleBubbleClick = () => {
    const fullText = HERO_BUBBLE_SCRIPTS[currentScriptIdx];
    if (isTyping) {
      setTypewriterText(fullText);
      setIsTyping(false);
    } else {
      setTypewriterText("");
      setIsTyping(true);
      setCurrentScriptIdx((prev) => (prev + 1) % HERO_BUBBLE_SCRIPTS.length);
    }
  };

  return (
    <section
      id="hero"
      className="relative flex w-full flex-col justify-center bg-slate-50 dark:bg-[#060A14] pt-24 sm:pt-28 lg:pt-20 pb-16 sm:pb-20 lg:pb-14 lg:h-screen lg:max-h-screen lg:overflow-hidden transition-colors duration-200"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-10 -left-20 w-[480px] h-[480px] rounded-full bg-emerald-500/15 dark:bg-emerald-500/25 blur-[120px]" />
      <div className="pointer-events-none absolute -top-10 right-0 w-[520px] h-[520px] rounded-full bg-cyan-500/15 dark:bg-cyan-500/20 blur-[130px]" />

      {/* ─── 1. TOP/MIDDLE STAGE: HEADLINE + FOUNDER + BUBBLE ─────────────────── */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 my-0 lg:my-auto py-2 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* ── LEFT COLUMN: Headline, Deskripsi Persuasif, CTA, & Value Points (7 cols di desktop, full di mobile & tablet) ── */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center text-center lg:items-start lg:text-left space-y-4 sm:space-y-5 lg:space-y-6 w-full">
            <AnimateOnScroll preset="fade-right" once={false} duration={0.6} delay={0.15}>
              {/* Primary H1 Heading */}
              <h1
                id="heroMainHeading"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2] lg:leading-[1.18] max-w-2xl mx-auto lg:mx-0"
              >
                Wujudkan Aplikasi Custom, API &amp; Backend Handal,{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  hingga Web Instansi &amp; Bisnis Anda.
                </span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll preset="fade-right" once={false} duration={0.6} delay={0.3}>
              {/* Persuasive Description Subheadline */}
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base lg:text-[17px] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Nggak perlu pusing hadapi arsitektur sistem sendirian atau bayar mahal ke agensi kaku. Di{" "}
                <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">ecoDigital</strong>, Anda diskusi langsung sama{" "}
                <span className="text-slate-900 dark:text-white font-medium">lead developer-nya</span> — mulai dari rancang bangun <strong>Aplikasi Custom</strong>, fondasi <strong>Jasa API &amp; Backend</strong>, hingga <strong>Web Instansi &amp; Bisnis</strong> siap online.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll preset="fade-right" once={false} duration={0.6} delay={0.45}>
              {/* Action CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5 pt-1 w-full sm:w-auto">
                <a
                  id="btnHeroWA"
                  href={getWaUrl(
                    "Halo Mas Eko, saya mau diskusi santai seputar pembuatan sistem website / aplikasi kustom di ecoDigital."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all transform hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2.5"
                >
                  <HugeiconsIcon icon={WhatsappIcon} size={18} />
                  <span>Konsultasi Gratis</span>
                </a>

                <a
                  href="#portofolio"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-sm dark:bg-slate-900/90 dark:hover:bg-slate-800 dark:text-slate-200 dark:border-slate-700/80 font-semibold text-sm sm:text-base transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Lihat Portofolio
                </a>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll preset="fade-right" once={false} duration={0.6} delay={0.6}>
              {/* 3 Core Value / Trust Guarantees */}
              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">✓</span>
                  <span>Anti-Ghosting &amp; Transparan</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">✓</span>
                  <span>Konsultasi Langsung Developer</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">✓</span>
                  <span>Garansi Sistem &amp; Tanpa DP Mengambang</span>
                </span>
              </div>
            </AnimateOnScroll>
          </div>

          {/* ── RIGHT COLUMN: Foto Founder Alami + Cloud Speech Bubble (Hanya tampil di Desktop lg ke atas) ── */}
          <div className="hidden lg:flex lg:col-span-5 relative flex-col items-center justify-end mt-0 w-full">
            <AnimateOnScroll preset="fade-left" once={false} duration={0.7} className="w-full flex flex-col items-center justify-end">

              {/* Soft Ambient Radial Behind Founder */}
              <div className="pointer-events-none absolute h-[320px] w-[320px] sm:h-[380px] sm:w-[380px] lg:h-[440px] lg:w-[440px] rounded-full bg-gradient-to-tr from-emerald-500/10 via-sky-500/15 to-teal-400/10 dark:from-emerald-500/20 dark:via-blue-600/25 dark:to-cyan-400/20 blur-[100px] -z-10" />

              {/* 1. Clean Comic Cloud Bubble (Floating above Eko) */}
              <div
                onClick={handleBubbleClick}
                className="w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] -mb-4 sm:-mb-6 lg:-mb-7 z-20 animate-float cursor-pointer select-none transition-transform active:scale-[0.98]"
                title="Klik untuk lanjut membaca percakapan"
              >
                <div
                  className="px-5 py-3 sm:py-3.5 rounded-[22px] bg-white text-slate-900 border-[2.5px] border-slate-900 shadow-[0_14px_30px_-10px_rgba(16,185,129,0.35),4px_4px_0px_#10b981]"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#0f172a",
                    border: "2.5px solid #0f172a",
                    boxShadow: "0 14px 30px -10px rgba(16, 185, 129, 0.35), 4px 4px 0px #10b981",
                  }}
                >
                  <div className="min-h-[58px] sm:min-h-[64px] flex items-start">
                    <p
                      id="heroTypewriterText"
                      className="text-xs sm:text-[13px] text-slate-900 font-bold leading-snug sm:leading-relaxed typing-cursor"
                    >
                      {typewriterText}
                    </p>
                  </div>

                  {/* Script indicators / Interactive Stepper Dots */}
                  <div className="mt-1.5 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                    <span className="font-semibold text-emerald-600 flex items-center gap-1">
                      <span>💬 Mas Eko</span>
                      <span className="text-[9px] text-slate-400 font-normal">({currentScriptIdx + 1}/{HERO_BUBBLE_SCRIPTS.length})</span>
                    </span>
                    <div className="flex items-center gap-1.5">
                      {HERO_BUBBLE_SCRIPTS.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentScriptIdx(idx);
                          }}
                          className={`h-1.5 rounded-full transition-all ${idx === currentScriptIdx
                              ? "w-4 bg-emerald-500"
                              : "w-1.5 bg-slate-300 hover:bg-slate-400"
                            }`}
                          aria-label={`Lihat pesan ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Comic Cloud Trail Dots Pointing to Developer */}
                <div className="flex flex-col items-end pr-14 -mt-1 space-y-1">
                  <div
                    className="w-3.5 h-3.5 rounded-full bg-white border-[2px] border-slate-900 shadow-[1.5px_1.5px_0px_#10b981]"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "2px solid #0f172a",
                      boxShadow: "1.5px 1.5px 0px #10b981",
                    }}
                  />
                  <div
                    className="w-2 h-2 mr-1.5 rounded-full bg-white border-[1.5px] border-slate-900 shadow-[1.5px_1.5px_0px_#10b981]"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1.5px solid #0f172a",
                      boxShadow: "1.5px 1.5px 0px #10b981",
                    }}
                  />
                </div>
              </div>

              {/* 2. Founder Photo Standing Tall (Besar & Mantap, menjulang ke bawah hingga dipotong rapi oleh Tech Stack Bar di bottom: 0) */}
              <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px] xl:max-w-[420px] flex justify-center items-end">
                <div className="relative h-[270px] sm:h-[330px] md:h-[370px] lg:h-[420px] xl:h-[460px] w-full">
                  <Image
                    src={founderImg}
                    alt="Eko Susanto — Developer & Systems Architect ecoDigital"
                    fill
                    priority
                    loading="eager"
                    unoptimized
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 450px, 500px"
                    className="object-contain object-bottom drop-shadow-[0_12px_28px_rgba(15,23,42,0.10)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.75)] select-none pointer-events-none"
                  />
                  {/* Smooth bottom fade overlay to cleanly blend the waist cutoff into background & Tech Stack Bar */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-slate-50 via-slate-50/70 to-transparent dark:from-[#060A14] dark:via-[#060A14]/70 dark:to-transparent z-10" />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      {/* ─── 2. INTEGRATED TECH STACK BAR (ABSOLUTE BOTTOM: 0, OVERLAY DI ATAS BAGIAN BAWAH FOTO FOUNDER) ─── */}
      <div className="absolute bottom-0 inset-x-0 z-30 w-full border-t border-slate-200/80 dark:border-slate-800/80 bg-white/85 dark:bg-slate-950/85 py-3 sm:py-3.5 backdrop-blur-xl transition-colors duration-200">
        <div
          className="relative flex overflow-x-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="animate-marquee flex items-center gap-4 sm:gap-6 whitespace-nowrap">
            {TECH_STACK_ITEMS.concat(TECH_STACK_ITEMS).map((t, idx) => {
              const IconComp = t.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 sm:gap-3 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-white/[0.05] px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-white/90 shadow-xs dark:shadow-md transition-all hover:scale-105 hover:border-emerald-500 dark:hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:text-emerald-700 dark:hover:text-white"
                >
                  <span className="text-emerald-600 dark:text-emerald-400 shrink-0">
                    <HugeiconsIcon icon={IconComp} size={18} />
                  </span>
                  <span>{t.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
