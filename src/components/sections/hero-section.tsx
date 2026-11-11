"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  WhatsappIcon,
  ArrowDown01Icon,
  LaptopProgrammingIcon,
  ShieldCheckIcon,
} from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import founderImg from "../../../public/images/founder.png";
import { getWaUrl } from "@/data/landing-data";

// ─── Depth Bokeh 3-Blade Star Glyph ──────────────────────────────────────────
function PropellerStar({
  className,
  size = "20px",
  blur = 4,
}: {
  className?: string;
  size?: string;
  blur?: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute select-none ${className}`}
      style={{ filter: `blur(${blur}px)`, width: size, height: size }}
    >
      <Image
        src="/images/Star 3.png"
        alt=""
        fill
        priority
        unoptimized
        sizes="(max-width: 768px) 500px, (max-width: 1200px) 680px, 800px"
        className="object-cover"
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] w-full flex-col justify-between overflow-hidden bg-[#060A14]">
      {/* Ambient Radial Atmosphere (Seamless Mesh Glow) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-28 top-1/4 h-[600px] w-[600px] rounded-full bg-emerald-500/20 blur-[140px]" />
        <div className="absolute -right-28 top-1/4 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute left-1/2 bottom-10 -translate-x-1/2 h-[350px] w-[600px] rounded-full bg-emerald-950/25 blur-[120px]" />

        {/* Decorative Stars */}
        <PropellerStar className="left-[8%] top-[55%] h-20 w-20" size="75px" blur={0} />
        <PropellerStar className="left-[25%] top-[75%] h-28 w-28" size="45px" blur={1} />
        <PropellerStar className="right-[28%] top-[25%] h-32 w-32" size="65px" blur={0} />
        <PropellerStar className="right-[10%] top-[45%] h-16 w-16" size="25px" blur={2} />
      </div>

      {/* Hero Interactive Stage (Headline & CTA di Kiri, Foto di Kanan) */}
      <div className="relative z-20 flex flex-1 items-center px-4 sm:px-8 lg:px-14 xl:px-18 py-6 sm:py-8 lg:py-6">
        <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headline, Sub-headline, Dual CTA, & Explore Button */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center text-left">
            <AnimateOnScroll preset="fade-right" duration={0.6} immediate>
              {/* Status Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-950/60 px-3.5 sm:px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-300 backdrop-blur-md shadow-lg shadow-emerald-950/40 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                </span>
                <span>TERSEDIA UNTUK PROYEK BARU &amp; PERBAIKAN KILAT</span>
              </div>

              {/* Headline Utama Sesuai Dokumen Blueprint */}
              <h1 className="mt-3.5 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[48px] font-black tracking-tight text-white leading-[1.2]">
                Ngoding Mentok atau Mau Bikin Sistem dari Nol?{" "}
                <span className="block sm:inline bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Kita Beresin Bareng Sampai Jalan.
                </span>
              </h1>

              {/* Sub-headline Blueprint */}
              <p className="mt-3 sm:mt-4 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-white/80">
                Nggak perlu pusing hadapi <em>error</em> sendirian atau bayar mahal ke agensi. Di <strong>ecoDigital</strong>, kamu diskusi langsung sama <em>developer</em>-nya. Mulai dari benerin <em>bug</em> H-3 bimbingan, bangun aplikasi Tugas Akhir, sampai sistem operasional sekolah &amp; bisnis—semua dikerjakan rapi, bisa dipantau <em>live</em>, dan dibimbing sampai kamu paham luar-dalam.
              </p>

              {/* Call to Action (CTA) Ganda */}
              <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={getWaUrl(
                    "Halo Mas (ecoDigital), saya mau chat dan diskusi gratis untuk kebutuhan kodingan / sistem saya."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl shadow-emerald-950/50 transition-all hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <HugeiconsIcon icon={WhatsappIcon} size={18} />
                  <span>Chat &amp; Diskusi Gratis via WA</span>
                </a>

                <Link
                  href="#portofolio"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-white/90 backdrop-blur-xl transition-all hover:bg-white/20 hover:text-white active:scale-[0.98]"
                >
                  <span>Coba Live Demo Karya Saya ↓</span>
                </Link>
              </div>

              {/* Badge Kecil di Bawah Tombol */}
              <div className="mt-3.5 sm:mt-4 flex items-center gap-2 text-[11px] sm:text-xs text-white/70">
                <span className="text-amber-400 font-bold">⚡</span>
                <span className="font-medium">
                  Respon cepat via WhatsApp • Diskusi alur &amp; cek error gratis
                </span>
              </div>

              {/* Garansi & Transparansi Jaminan di Bawah Tombol Hero */}
              <div className="mt-3 flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-1.5 text-[11px] sm:text-xs text-emerald-300 font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] text-emerald-400 font-bold">
                    ✓
                  </span>
                  Tanpa DP Mengambang
                </span>
                <span className="hidden sm:inline text-white/20">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] text-emerald-400 font-bold">
                    ✓
                  </span>
                  Source Code 100% Hak Milik
                </span>
                <span className="hidden sm:inline text-white/20">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] text-emerald-400 font-bold">
                    ✓
                  </span>
                  Bisa Dicicil Sesuai Progres
                </span>
              </div>

              {/* Tombol Scroll untuk Eksplorasi */}
              <div className="mt-6 sm:mt-8 flex items-center">
                <Link
                  href="#layanan"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur-md transition-all hover:border-emerald-400/50 hover:bg-white/10 hover:text-white active:scale-95"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-xs text-emerald-400 transition-transform group-hover:translate-y-0.5">
                    <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
                  </span>
                  <span>Scroll Untuk Eksplorasi</span>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column: Founder Photo & Mockup Preview (Visual Asli) */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex items-end justify-center lg:justify-end mt-4 lg:mt-0">
            <AnimateOnScroll
              preset="fade-left"
              duration={0.7}
              immediate
              className="relative w-full flex items-end justify-center lg:justify-end"
            >
              {/* Soft Radial Ambient Behind Founder */}
              <div className="pointer-events-none absolute h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] lg:h-[440px] lg:w-[440px] rounded-full bg-gradient-to-tr from-emerald-500/25 via-blue-600/30 to-cyan-400/25 blur-[90px] -z-10" />

              {/* Floating Badge 1: Direct Developer (Tanpa Perantara) */}
              <div className="hidden sm:flex absolute -left-4 top-16 z-20 items-center gap-2.5 rounded-2xl border border-white/20 bg-black/60 px-4 py-2.5 shadow-xl backdrop-blur-xl animate-float">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
                  <HugeiconsIcon icon={LaptopProgrammingIcon} size={18} />
                </span>
                <div>
                  <span className="block text-[11px] font-bold text-white">👨‍💻 Direct Developer</span>
                  <span className="block text-[9px] text-emerald-300">Tanpa Perantara</span>
                </div>
              </div>

              {/* Floating Badge 2: 100% Source Code + Video Bedah Kode */}
              <div className="hidden sm:flex absolute -right-2 bottom-24 z-20 items-center gap-2.5 rounded-2xl border border-white/20 bg-black/60 px-4 py-2.5 shadow-xl backdrop-blur-xl animate-float-delayed">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                  <HugeiconsIcon icon={ShieldCheckIcon} size={18} />
                </span>
                <div>
                  <span className="block text-[11px] font-bold text-white">🎥 100% Source Code</span>
                  <span className="block text-[9px] text-cyan-300">+ Video Bedah Kode</span>
                </div>
              </div>

              {/* Founder Image with Transparent Fade-Out at Bottom */}
              <div
                className="relative h-[320px] sm:h-[420px] md:h-[480px] lg:h-[580px] xl:h-[640px] w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] aspect-[1397/2485]"
                style={{
                  maskImage:
                    "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.3) 5%, rgba(0,0,0,0.9) 15%, black 25%, black 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.3) 5%, rgba(0,0,0,0.9) 15%, black 25%, black 100%)",
                }}
              >
                <Image
                  src={founderImg}
                  alt="Founder ecoDigital"
                  fill
                  priority
                  loading="eager"
                  unoptimized
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 450px, 500px"
                  className="object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
                />
              </div>
            </AnimateOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}

