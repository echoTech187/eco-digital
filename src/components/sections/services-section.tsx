"use client";

import React from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  LaptopProgrammingIcon,
  ApiIcon,
  Building03Icon,
  CheckmarkCircle01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import {
  AnimateOnScroll,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animate-on-scroll";
import { getWaUrl } from "@/data/landing-data";
import founderImg from "../../../public/images/founder.png";

// ─── Types ────────────────────────────────────────────────────────────────────

interface KondisiSolusi {
  id: string;
  kondisiLabel: string;
  visitorBubble: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  accentShadow: string;
  badgeText: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  serviceTitle: string;
  serviceSubtitle: string;
  masEkoReply: string;
  checklistItems: string[];
  ctaLabel: string;
  waMessage: string;
  isReversed: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const KONDISI_SOLUSI: KondisiSolusi[] = [
  {
    id: "pembuatan-aplikasi",
    kondisiLabel: "Kondisi #1 — Mahasiswa / Skripsi",
    visitorBubble:
      "Mas, butuh bantu bikin aplikasi untuk TA. Deadline 3 minggu lagi, belum ada apa-apa. Dosen minta ada login, database, sama laporan. Nggak tau harus mulai dari mana... 😭",
    accentColor: "#10B981",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/30",
    accentText: "text-emerald-400",
    accentShadow: "shadow-emerald-500/10",
    badgeText: "🚀 Pembuatan Aplikasi",
    icon: LaptopProgrammingIcon,
    serviceTitle: "Pembuatan Aplikasi Custom",
    serviceSubtitle: "Web, Mobile & Sistem Akademik",
    masEkoReply:
      "Oke, ceritakan detailnya — fitur apa yang dibutuhkan, teknologi yang diminta dosen, dan timeframe-nya. Kita susun plan-nya bareng, langsung eksekusi.",
    checklistItems: [
      "Aplikasi web / mobile sesuai kebutuhan TA & skripsi.",
      "Teknologi bebas: Laravel, React, Flutter, Next.js, dll.",
      "Source code 100% milikmu + rekaman bedah kode.",
    ],
    ctaLabel: "Diskusi Kebutuhan Aplikasi →",
    waMessage:
      "Halo Mas (ecoDigital), saya mau konsultasi pembuatan aplikasi custom untuk Tugas Akhir / skripsi saya.",
    isReversed: false,
  },
  {
    id: "jasa-api-backend",
    kondisiLabel: "Kondisi #2 — Developer / Startup",
    visitorBubble:
      "Mas, lagi develop frontend tapi bingung setup backend-nya. Butuh REST API yang clean, ada dokumentasinya, dan bisa handle banyak user. Tim saya nggak ada yang spesialisasi backend... 😅",
    accentColor: "#A78BFA",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/30",
    accentText: "text-violet-400",
    accentShadow: "shadow-violet-500/10",
    badgeText: "⚙️ API & Backend",
    icon: ApiIcon,
    serviceTitle: "Jasa API & Backend",
    serviceSubtitle: "REST API, Database & Integrasi",
    masEkoReply:
      "Gampang. Kasih tahu endpoint apa yang dibutuhkan, struktur data yang diinginkan, dan autentikasi yang dipakai — saya bangun backend-nya rapi, documented, dan siap produksi.",
    checklistItems: [
      "REST API clean architecture dengan dokumentasi Postman.",
      "Database design & optimasi query (MySQL, PostgreSQL, dsb.).",
      "Integrasi third-party: payment gateway, Midtrans, WhatsApp API.",
    ],
    ctaLabel: "Konsultasi Kebutuhan API →",
    waMessage:
      "Halo Mas (ecoDigital), saya mau konsultasi pembuatan REST API / backend untuk project saya.",
    isReversed: true,
  },
  {
    id: "aplikasi-sistem",
    kondisiLabel: "Kondisi #3 — Bisnis / Instansi",
    visitorBubble:
      "Saya punya usaha kecil-kecilan tapi semua masih dicatat manual. Mau buat sistem tapi nggak tau harus minta apa ke developer. Pernah kecewa karena developer sebelumnya tiba-tiba ghosting... 😤",
    accentColor: "#2DD4BF",
    accentBg: "bg-teal-500/10",
    accentBorder: "border-teal-500/30",
    accentText: "text-teal-400",
    accentShadow: "shadow-teal-500/10",
    badgeText: "🏢 Skala Bisnis",
    icon: Building03Icon,
    serviceTitle: "Aplikasi Sistem",
    serviceSubtitle: "Sekolah, Instansi & UMKM",
    masEkoReply:
      "Nggak perlu tau istilah teknisnya. Cukup ceritakan kondisi bisnis kamu sekarang — saya bantu terjemahkan jadi sistem yang langsung bisa dipakai, bukan sekadar template pajangan.",
    checklistItems: [
      "Sistem informasi sekolah, BK, & pelayanan publik.",
      "Website profil usaha, katalog, hingga kasir/inventori.",
      "Langsung online (termasuk setup domain/hosting/Vercel).",
    ],
    ctaLabel: "Diskusi Sistem Bisnis →",
    waMessage:
      "Halo Mas (ecoDigital), saya mau diskusi pembuatan aplikasi sekolah / instansi / bisnis UMKM.",
    isReversed: false,
  },
];

// ─── Visitor Cloud Bubble ─────────────────────────────────────────────────────

function VisitorBubble({
  item,
}: {
  item: KondisiSolusi;
}) {
  return (
    <AnimateOnScroll
      preset={item.isReversed ? "fade-left" : "fade-right"}
      duration={0.6}
      className="flex flex-col"
    >
      {/* Label kondisi */}
      <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-white/30">
        {item.kondisiLabel}
      </p>

      {/* Cloud bubble — same style as hero */}
      <div
        className="rounded-[22px] bg-white px-5 py-4 text-slate-900 max-w-md"
        style={{
          border: "2.5px solid #0f172a",
          boxShadow:
            "0 14px 30px -10px rgba(16, 185, 129, 0.35), 4px 4px 0px #10b981",
        }}
      >
        <p className="text-sm font-medium leading-relaxed text-slate-800">
          {item.visitorBubble}
        </p>
        <div className="mt-2.5 border-t border-slate-100 pt-2 flex items-center gap-1.5">
          <span className="text-[11px] font-semibold text-slate-400">
            👤 Guest
          </span>
          <span className="text-[10px] text-slate-300">· ecoDigital.id</span>
        </div>
      </div>

      {/* Cloud trail dots */}
      <div
        className={`flex flex-col space-y-1 mt-0.5 ${item.isReversed ? "items-end pr-10" : "items-start pl-10"}`}
      >
        <div
          className="w-3.5 h-3.5 rounded-full bg-white"
          style={{
            border: "2px solid #0f172a",
            boxShadow: "1.5px 1.5px 0px #10b981",
          }}
        />
        <div
          className={`w-2 h-2 rounded-full bg-white ${item.isReversed ? "mr-1.5" : "ml-1.5"}`}
          style={{
            border: "1.5px solid #0f172a",
            boxShadow: "1.5px 1.5px 0px #10b981",
          }}
        />
      </div>

      {/* Visitor avatar chip */}
      <div
        className={`mt-2 flex items-center gap-2.5 ${item.isReversed ? "justify-end" : ""}`}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-700 bg-slate-800 text-base shadow-md">
          🧑‍💻
        </div>
        <span className="text-xs text-white/40">Visitor yang butuh bantuan</span>
      </div>
    </AnimateOnScroll>
  );
}

// ─── Mas Eko Solution Card ────────────────────────────────────────────────────

function MasEkoCard({ item }: { item: KondisiSolusi }) {
  return (
    <AnimateOnScroll
      preset={item.isReversed ? "fade-right" : "fade-left"}
      duration={0.6}
      delay={0.15}
      className="w-full"
    >
      <div
        className={`rounded-3xl border ${item.accentBorder} bg-white/[0.03] shadow-xl ${item.accentShadow} backdrop-blur-sm overflow-hidden`}
      >
        {/* Top accent bar */}
        <div
          className="h-[3px] w-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${item.accentColor}80, ${item.accentColor}, ${item.accentColor}80, transparent)`,
          }}
        />

        <div className="p-6 sm:p-7">
          {/* Mas Eko header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-emerald-400/60 shadow-lg">
              <Image
                src={founderImg}
                alt="Mas Eko — Lead Developer ecoDigital"
                fill
                unoptimized
                sizes="44px"
                className="object-cover object-top scale-[1.4] translate-y-1"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Mas Eko</p>
              <p className={`text-[11px] font-semibold ${item.accentText}`}>
                Lead Developer · ecoDigital
              </p>
            </div>
            {/* Badge */}
            <span
              className={`ml-auto text-[11px] font-semibold px-3 py-1 rounded-full border ${item.accentBorder} ${item.accentBg} ${item.accentText}`}
            >
              {item.badgeText}
            </span>
          </div>

          {/* Mas Eko reply bubble */}
          <div
            className={`mb-5 rounded-2xl ${item.accentBg} border ${item.accentBorder} px-4 py-3`}
          >
            <p className={`text-sm leading-relaxed text-white/85 italic`}>
              &ldquo;{item.masEkoReply}&rdquo;
            </p>
          </div>

          {/* Service title */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${item.accentBorder} ${item.accentBg} ${item.accentText}`}
            >
              <HugeiconsIcon icon={item.icon} size={20} />
            </div>
            <div>
              <h3 className={`text-base font-extrabold ${item.accentText}`}>
                {item.serviceTitle}
              </h3>
              <p className="text-xs text-white/50">{item.serviceSubtitle}</p>
            </div>
          </div>

          {/* Checklist */}
          <StaggerContainer
            staggerDelay={0.08}
            delay={0.2}
            className="mb-5 space-y-2"
          >
            {item.checklistItems.map((it, i) => (
              <StaggerItem key={i} preset="fade-up">
                <div className="flex items-start gap-2 text-xs text-white/75">
                  <HugeiconsIcon
                    icon={CheckmarkCircle01Icon}
                    size={14}
                    className={`${item.accentText} mt-0.5 shrink-0`}
                  />
                  <span>{it}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA */}
          <a
            href={getWaUrl(item.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] hover:from-emerald-400 hover:to-teal-400 active:scale-95"
          >
            <HugeiconsIcon icon={WhatsappIcon} size={16} />
            <span>{item.ctaLabel}</span>
          </a>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export function ServicesSection() {
  return (
    <>
      <span id="solusi" className="scroll-mt-0 block" />

      {/* Section header */}
      <div
        id="layanan"
        className="relative z-20 w-full bg-[#060A14] scroll-mt-0 px-4 sm:px-8 lg:px-14 pt-16 sm:pt-20"
      >
        <AnimateOnScroll
          preset="fade-up"
          className="mx-auto max-w-5xl text-center mb-4"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
            Masuk dari Kondisi Mana Pun
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-white">
            Ceritakan Masalahmu — Kami Punya Jawabannya
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/50">
            Scroll ke bawah. Temukan kondisi yang paling mirip dengan situasimu
            sekarang.
          </p>
        </AnimateOnScroll>
      </div>

      {/* 3 Kondisi → Solusi sections */}
      {KONDISI_SOLUSI.map((item, index) => (
        <section
          key={item.id}
          id={index === 0 ? undefined : item.id}
          className="relative w-full bg-[#060A14] scroll-mt-0"
        >
          {/* Subtle ambient glow per section */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(ellipse 60% 50% at ${item.isReversed ? "75%" : "25%"} 50%, ${item.accentColor}18 0%, transparent 70%)`,
            }}
          />

          {/* Divider */}
          {index > 0 && (
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
          )}

          <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-8 lg:px-14 py-16 sm:py-20 lg:py-24">
            <div
              className={`flex flex-col gap-8 lg:gap-12 lg:items-center ${
                item.isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Visitor Bubble — 5/12 */}
              <div className="w-full lg:w-5/12">
                <VisitorBubble item={item} />
              </div>

              {/* Connecting arrow — only on desktop */}
              <div className="hidden lg:flex flex-col items-center justify-center w-auto shrink-0 gap-1">
                <div className="h-px w-10 bg-white/20" />
                <span className="text-white/20 text-lg">
                  {item.isReversed ? "←" : "→"}
                </span>
                <div className="h-px w-10 bg-white/20" />
              </div>

              {/* Mas Eko Solution Card — 6/12 */}
              <div className="w-full lg:flex-1">
                <MasEkoCard item={item} />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom spacing */}
      <div className="bg-[#060A14] pb-6" />
    </>
  );
}
