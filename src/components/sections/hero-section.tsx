"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  WhatsappIcon,
  ArrowDown01Icon,
  LaptopProgrammingIcon,
} from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import founderImg from "../../../public/images/founder.png";
import { getWaUrl, WA_DISPLAY } from "@/data/landing-data";

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
    <section className="relative flex w-full flex-col justify-between overflow-hidden bg-[#060A14] xl:min-h-[calc(100vh-80px)]">
      {/* Ambient Radial Atmosphere (Seamless Mesh Glow) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-28 top-1/4 h-[600px] w-[600px] rounded-full bg-emerald-500/20 blur-[140px]" />
        <div className="absolute -right-28 top-1/4 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute left-1/2 bottom-10 -translate-x-1/2 h-[350px] w-[600px] rounded-full bg-emerald-950/25 blur-[120px]" />

        {/* Decorative Stars (Hanya aktif di desktop agar tidak mengotori background mobile) */}
        <PropellerStar className="hidden lg:block left-[8%] top-[55%] h-20 w-20" size="75px" blur={0} />
        <PropellerStar className="hidden lg:block left-[25%] top-[75%] h-28 w-28" size="45px" blur={1} />
        <PropellerStar className="hidden lg:block right-[28%] top-[25%] h-32 w-32" size="65px" blur={0} />
        <PropellerStar className="hidden lg:block right-[10%] top-[45%] h-16 w-16" size="25px" blur={2} />
      </div>

      {/* Hero Interactive Stage (Headline & CTA di Kiri, Foto di Kanan) */}
      <div className="relative z-20 flex flex-1 items-center px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-6">
        <div className="mx-auto w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headline, Sub-headline, Dual CTA, & Explore Button */}
          <div className="md:col-span-7 xl:col-span-7 flex flex-col justify-center text-left">
            <AnimateOnScroll preset="fade-right" duration={0.6} immediate>
              {/* Status Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-950/60 px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-300 backdrop-blur-md shadow-md shadow-emerald-950/40 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                </span>
                <span>TERSEDIA UNTUK PROYEK BARU &amp; PERBAIKAN KILAT</span>
              </div>

              {/* Headline Utama Sesuai Dokumen Blueprint */}
              <h1 className="mt-3.5 sm:mt-5 text-2xl sm:text-3xl md:text-[32px] lg:text-[38px] xl:text-[46px] font-black tracking-tight text-white leading-[1.22]">
                Ngoding Mentok atau Mau Bikin Sistem dari Nol?{" "}
                <span className="block mt-1 sm:mt-0 sm:inline bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
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
                  className="flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl shadow-emerald-950/50 transition-all hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <HugeiconsIcon icon={WhatsappIcon} size={18} />
                  <span>Chat &amp; Diskusi Gratis via WA</span>
                </a>

                <Link
                  href="#portofolio"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 sm:px-5 py-3.5 text-xs sm:text-sm font-semibold text-white/90 backdrop-blur-xl transition-all hover:bg-white/20 hover:text-white active:scale-[0.98]"
                >
                  <span>Coba Live Demo Karya Saya ↓</span>
                </Link>
              </div>

              {/* Badge Kecepatan Respon */}
              <div className="mt-3.5 sm:mt-4 flex items-center gap-2 text-[11px] sm:text-xs text-white/70">
                <span className="text-amber-400 font-bold">⚡</span>
                <span className="font-medium">
                  Respon cepat via WhatsApp • Diskusi alur &amp; cek error gratis
                </span>
              </div>

              {/* 3 Jaminan Utama dalam Card Grid Rapi & Adaptif */}
              <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-2.5 sm:p-2 lg:p-2.5 xl:p-3 text-white/90 backdrop-blur-sm">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] text-emerald-400 font-bold">
                    ✓
                  </span>
                  <span className="text-[11px] xl:text-xs font-medium leading-tight">Tanpa DP Mengambang</span>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-2.5 sm:p-2 lg:p-2.5 xl:p-3 text-white/90 backdrop-blur-sm">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] text-emerald-400 font-bold">
                    ✓
                  </span>
                  <span className="text-[11px] xl:text-xs font-medium leading-tight">Source Code 100% Hak Milik</span>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-2.5 sm:p-2 lg:p-2.5 xl:p-3 text-white/90 backdrop-blur-sm">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] text-emerald-400 font-bold">
                    ✓
                  </span>
                  <span className="text-[11px] xl:text-xs font-medium leading-tight">Bisa Cicil Sesuai Progres</span>
                </div>
              </div>

              {/* Highlight Direct Developer Tambahan di Mobile (Hidden di Tablet/Desktop karena sudah ada di foto) */}
              <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-white/60 md:hidden">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-1 text-emerald-300 font-medium">
                  <span>👨‍💻</span>
                  <span>Direct Developer (Tanpa Perantara Sales)</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-950/40 border border-blue-500/20 px-2.5 py-1 text-blue-300 font-medium">
                  <span>💻</span>
                  <span>Sesi Bedah Kode &amp; Bimbingan Live</span>
                </span>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column: Founder Photo & Mockup Preview (Adaptive: muncul dari tablet md:flex hingga desktop) */}
          <div className="hidden md:flex md:col-span-5 xl:col-span-5 relative items-end justify-center md:justify-end mt-4 md:mt-0">
            <AnimateOnScroll
              preset="fade-left"
              duration={0.7}
              immediate
              className="relative w-full flex items-end justify-center md:justify-end"
            >
              {/* Soft Radial Ambient Behind Founder */}
              <div className="pointer-events-none absolute h-[260px] w-[260px] sm:h-[340px] sm:w-[340px] md:h-[400px] md:w-[400px] lg:h-[440px] lg:w-[440px] rounded-full bg-gradient-to-tr from-emerald-500/25 via-blue-600/30 to-cyan-400/25 blur-[90px] -z-10" />

              {/* Floating Badge 1: Direct Developer (Tanpa Perantara) */}
              <div className="hidden sm:flex absolute left-0 xl:-left-4 top-10 md:top-12 xl:top-16 z-20 items-center gap-2 sm:gap-2.5 rounded-2xl border border-white/20 bg-black/60 px-3 sm:px-4 py-2 sm:py-2.5 shadow-xl backdrop-blur-xl animate-float">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
                  <HugeiconsIcon icon={LaptopProgrammingIcon} size={18} />
                </span>
                <div>
                  <span className="block text-[11px] font-bold text-white">👨‍💻 Direct Developer</span>
                  <span className="block text-[9px] text-emerald-300">Tanpa Perantara</span>
                </div>
              </div>

              {/* Floating Badge 2: Sesi Bedah Kode */}
              <div className="hidden sm:flex absolute -right-1 sm:-right-2 bottom-14 md:bottom-18 xl:bottom-24 z-20 items-center gap-2 sm:gap-2.5 rounded-2xl border border-white/20 bg-black/60 px-3 sm:px-4 py-2 sm:py-2.5 shadow-xl backdrop-blur-xl animate-float-delayed">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                  <HugeiconsIcon icon={LaptopProgrammingIcon} size={18} />
                </span>
                <div>
                  <span className="block text-[11px] font-bold text-white">💻 Sesi Bedah Kode</span>
                  <span className="block text-[9px] text-cyan-300">Diajari Sampai Paham</span>
                </div>
              </div>

              {/* Founder Image with Transparent Fade-Out at Bottom */}
              <div
                className="relative h-[360px] sm:h-[440px] md:h-[480px] lg:h-[540px] xl:h-[620px] w-full max-w-[300px] md:max-w-[340px] lg:max-w-[390px] xl:max-w-[430px]"
                style={{
                  maskImage:
                    "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.4) 4%, black 15%, black 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.4) 4%, black 15%, black 100%)",
                }}
              >
                <Image
                  src={founderImg}
                  alt="Developer & Founder ecoDigital — Layanan Pembuatan Website & Aplikasi"
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

      {/* Hero Bottom Anchor Bar (Scroll Button on Left, Official WA on Right) */}
      <div className="relative z-30 w-full border-t border-white/10 bg-[#060A14]/80 backdrop-blur-md px-4 sm:px-8 lg:px-14 xl:px-18 py-3 sm:py-3.5">
        <div className="mx-auto flex max-w-7xl items-center justify-between sm:pr-48 lg:pr-52">
          <Link
            href="#layanan"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur-md transition-all hover:border-emerald-400/50 hover:bg-white/10 hover:text-white active:scale-95 cursor-pointer"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-xs text-emerald-400 transition-transform group-hover:translate-y-0.5">
              <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
            </span>
            <span>Scroll Untuk Eksplorasi</span>
          </Link>

          {/* Hanya ditampilkan di layar sm ke atas agar tidak tumpang tindih dengan Floating WhatsApp di mobile */}
          <a
            href={getWaUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-xs text-white/60 hover:text-emerald-300 transition-colors"
          >
            <span className="text-white/40">WhatsApp Resmi:</span>
            <span className="font-bold text-emerald-400 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              {WA_DISPLAY}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
