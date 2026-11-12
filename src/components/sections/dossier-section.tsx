"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { getWaUrl } from "@/data/landing-data";

interface DossierStat {
  label: string;
  value: string;
  sub?: string;
}

const DOSSIER_STATS: DossierStat[] = [
  { label: "CODENAME / LEAD", value: "Eko (Lead Developer)", sub: "Arsitek Utama ecoDigital" },
  { label: "DIRECT PROTOCOL", value: "100% Direct Developer", sub: "Tanpa Perantara Sales / Makelar" },
  { label: "CORE WEAPON STACK", value: "Laravel 11, Next.js 15, MySQL", sub: "Clean MVC, Tailwind, REST API" },
  { label: "BATTLE RECORD", value: "50+ Mahasiswa Lulus & 12 Web Bisnis", sub: "100% Sukses Sidang Tanpa Kendala" },
  { label: "DEFENCE SHIELD", value: "Garansi Bebas Revisi Dosen", sub: "Ditemani Sampai Lembar Pengesahan" },
  { label: "MENTORING MODE", value: "Sesi Privat Bedah Kode Live", sub: "AnyDesk / Google Meet 1-on-1" },
];

const TACTIC_CARDS = [
  {
    id: "01",
    tag: "TACTIC 01 // ARCHITECTURE FIRST",
    title: "Struktur Kodingan Bersih & Sesuai Kaidah Akademik",
    desc: "Bukan sekadar kode jalan di localhost lalu ditinggal. Setiap controller, model, migration, dan query dirancang modular. Saat dosen penguji tanya 'kenapa pakai relasi ini?', kamu bisa jawab dengan santai dan ilmiah.",
    badge: "Clean Architecture",
  },
  {
    id: "02",
    tag: "TACTIC 02 // CODE DISSECTION",
    title: "Sesi Bedah Kode AnyDesk / Meet Sampai Paham 100%",
    desc: "Mahasiswa sering gagal sidang bukan karena kodenya error, tapi karena blank saat ditanya alur kerja sistem. Sebelum sidang, kita adakan sesi privat bedah kode baris per baris. Kamu diajari cara demo dan menjawab pertanyaan maut dosen.",
    badge: "Anti-Blank Sidang",
  },
  {
    id: "03",
    tag: "TACTIC 03 // LECTURER REVISION SHIELD",
    title: "Garansi Revisi Dosen Tanpa Biaya Tersembunyi",
    desc: "Dosen minta ubah metode SPK? Minta tambah filter laporan PDF atau ganti role permission? Tenang, ecoDigital memberikan garansi revisi sesuai kesepakatan awal sampai skripsimu resmi di-ACC penguji.",
    badge: "Garansi ACC",
  },
];

export function DossierSection() {
  const [activeTactic, setActiveTactic] = useState(0);

  return (
    <section
      id="dossier"
      className="relative w-full border-t border-white/10 bg-[#04070F] px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-20 lg:py-28 overflow-hidden text-white"
    >
      {/* Background Subtle Tech Grid & Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Editorial Section Header (Unifiers of Japan Style) */}
        <AnimateOnScroll preset="fade-up" duration={0.6}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
                Biodata &amp; Spesifikasi Teknis
              </h2>
            </div>

            <div className="font-mono text-right text-[11px] text-white/40 hidden sm:block">
              <div>[ ARCHIVE REF // ECO-DEV-EKO ]</div>
              <div className="text-emerald-400 font-semibold">[ STATUS: DIRECT ACCESS VERIFIED ]</div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* 2-Column Dossier Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column (5 Cols): The Data Sheet Dossier Card */}
          <div className="lg:col-span-5">
            <AnimateOnScroll preset="fade-right" duration={0.6}>
              <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.06] to-transparent p-6 xl:p-8 backdrop-blur-xl shadow-2xl overflow-hidden">
                {/* Crosshairs & Serial watermark */}
                <span className="pointer-events-none absolute left-3 top-3 font-mono text-[9px] text-emerald-400/40">+</span>
                <span className="pointer-events-none absolute right-3 top-3 font-mono text-[9px] text-emerald-400/40">+</span>
                <span className="pointer-events-none absolute left-3 bottom-3 font-mono text-[9px] text-emerald-400/40">+</span>
                <span className="pointer-events-none absolute right-3 bottom-3 font-mono text-[9px] text-emerald-400/40">+</span>

                {/* Dossier Card Header */}
                <div className="flex items-center gap-4 border-b border-white/10 pb-5 mb-5">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border-2 border-emerald-400/60 bg-slate-900 shadow-lg">
                    <Image
                      src="/images/founder.png"
                      alt="Eko Susanto — Lead Developer ecoDigital"
                      fill
                      className="object-cover object-top"
                      unoptimized
                    />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">
                      [ LEAD ARCHITECT IDENTITY ]
                    </span>
                    <h3 className="text-lg font-bold text-white">Eko Susanto</h3>
                    <p className="text-xs text-white/60">Fullstack Engineer &amp; Code Mentor</p>
                  </div>
                </div>

                {/* Technical Spec Grid */}
                <div className="space-y-3.5 font-mono text-xs">
                  {DOSSIER_STATS.map((stat, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-white/5 bg-white/[0.02] p-3 hover:border-emerald-500/30 transition-colors"
                    >
                      <div className="text-[10px] font-bold text-emerald-400/90 tracking-wider">
                        [ {stat.label} ]
                      </div>
                      <div className="text-sm font-semibold text-white/95 mt-0.5">
                        {stat.value}
                      </div>
                      {stat.sub && (
                        <div className="text-[10px] text-white/45 mt-0.5">
                          {stat.sub}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Direct Action inside Dossier */}
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-white/40">
                    KONSULTASI LANGSUNG
                  </span>
                  <a
                    href={getWaUrl("Halo Mas Eko, saya membaca dossier profil Mas di ecoDigital dan ingin diskusi langsung.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/50 px-3.5 py-1.5 font-mono text-xs font-bold text-emerald-300 hover:bg-emerald-500 hover:text-black transition-all"
                  >
                    <HugeiconsIcon icon={WhatsappIcon} size={14} />
                    <span>Chat Mas Eko</span>
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column (7 Cols): Tactic Cards (Battle Strategy) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <AnimateOnScroll preset="fade-left" duration={0.6}>
              <div className="mb-4">
                <span className="font-mono text-xs font-bold text-cyan-400 tracking-widest uppercase">
                  [ OPERATIONAL DOCTRINE ]
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  Kenapa Bekerja Langsung Dengan Developer Berbeda dari Agensi Biasa?
                </h3>
                <p className="text-sm text-white/70 mt-2 leading-relaxed">
                  Banyak jasa koding bertindak seperti makelar: orderan diterima oleh sales, lalu dilempar ke freelancer anonim murah. Di ecoDigital, kamu berbicara dan berdiskusi langsung dengan orang yang mengetik kodenya.
                </p>
              </div>

              {/* Interactive Tactic Selector Tabs */}
              <div className="space-y-3.5 mt-6">
                {TACTIC_CARDS.map((tactic, idx) => {
                  const isActive = activeTactic === idx;
                  return (
                    <div
                      key={tactic.id}
                      onClick={() => setActiveTactic(idx)}
                      className={`cursor-pointer rounded-2xl border p-5 transition-all duration-300 ${
                        isActive
                          ? "border-emerald-400/60 bg-emerald-950/20 shadow-xl shadow-emerald-950/40"
                          : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] font-bold text-emerald-400 tracking-wider">
                          {tactic.tag}
                        </span>
                        <span className="font-mono text-[10px] bg-white/10 border border-white/15 px-2 py-0.5 rounded text-white/80">
                          {tactic.badge}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white mb-2">
                        {tactic.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                        {tactic.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Navigation Link */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="font-mono text-xs text-white/40">
                  SIAP LANJUT KE STRATEGI ALUR KERJA?
                </span>
                <Link
                  href="#alur-kerja"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Buka Alur Kerja Anti-Ghosting</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
