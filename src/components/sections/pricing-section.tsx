"use client";

import React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Wrench01Icon,
  FireIcon,
  Building03Icon,
  CheckmarkCircle01Icon,
  WhatsappIcon,
  CalculatorIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { getWaUrl } from "@/data/landing-data";

export function PricingSection() {
  return (
    <div className="relative z-20 w-full bg-[#060A14] px-4 sm:px-8 lg:px-14 pt-2 sm:pt-4 pb-16 sm:pb-24">
      <div className="mx-auto max-w-6xl">
        {/* Anchor targets placed exactly at top of pricing content */}
        <div id="paket-harga" className="scroll-mt-0" />
        <span id="harga" className="scroll-mt-0 block" />
        <AnimateOnScroll preset="fade-up" className="mb-6 sm:mb-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">
            HARGA TERBUKA &amp; TRANSPARAN
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-white">
            Pilih Paket Sesuai Kondisi Proyekmu Saat Ini
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-xs sm:text-sm leading-relaxed text-white/60">
            Nggak perlu takut kemahalan. Kalau cuma butuh benerin <em>error</em> sedikit, cukup ambil paket hemat mulai Rp150 ribuan.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Paket 1: Penyelamat Revisi & Fix Error */}
          <div className="relative rounded-[32px] border border-white/15 bg-white/5 p-5 sm:p-7 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/80">
                <HugeiconsIcon icon={Wrench01Icon} size={12} className="text-emerald-400" />
                <span>Paket Fix Error &amp; Modul</span>
              </span>
              <h3 className="mt-4 text-xl font-black text-white">
                Penyelamat Revisi &amp; Fix Error
              </h3>
              <p className="mt-2 text-xs font-semibold leading-relaxed text-emerald-300/90">
                Cocok buat kodingan yang mentok <em>error</em>, benerin tampilan berantakan, atau tambah 1–2 fitur cepat.
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-xs text-white/40">Mulai dari</span>
                <span className="text-2xl font-black text-white">Rp 150.000</span>
              </div>
              <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-emerald-400 shrink-0" />
                  <span>Cek sumber error/bug gratis di awal</span>
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-emerald-400 shrink-0" />
                  <span>Perbaikan fungsi / query database macet</span>
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-emerald-400 shrink-0" />
                  <span>Tambah fitur / modul revisi dosen</span>
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-emerald-400 shrink-0" />
                  <span>Bayar setelah bukti error beres dikirim</span>
                </li>
              </ul>
            </div>
            <a
              href={getWaUrl(
                "Halo Mas (ecoDigital), saya mau tanya biaya fix error / revisi kodingan saya."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 py-3 text-xs font-bold text-white transition-all hover:bg-white/20 hover:scale-[1.02]"
            >
              <HugeiconsIcon icon={WhatsappIcon} size={16} />
              <span>Tanya Biaya Fix Error</span>
            </a>
          </div>

          {/* Paket 2: Bangun Web / Sistem Baru (Reguler) — Paling Banyak Dipilih */}
          <div className="relative rounded-[32px] border-2 border-emerald-400/40 bg-gradient-to-b from-emerald-950/30 via-white/[0.06] to-black/40 p-5 sm:p-7 backdrop-blur-xl shadow-2xl shadow-emerald-950/30 flex flex-col justify-between">
            <span className="absolute -top-3.5 left-6 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-lg shadow-emerald-500/40">
              <HugeiconsIcon icon={FireIcon} size={12} className="text-amber-300" />
              <span>Paling Banyak Dipilih</span>
            </span>

            <div>
              <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#10B981]">
                Paket Reguler Standar
              </span>
              <h3 className="mt-4 text-xl font-black text-white">
                Bangun Web / Sistem Baru (Reguler)
              </h3>
              <p className="mt-2 text-xs font-semibold leading-relaxed text-emerald-300">
                Cocok buat Tugas Akhir, SPK, Sistem Informasi standar, atau Landing Page UMKM siap online.
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-xs text-white/40">Mulai dari</span>
                <span className="text-3xl font-black text-[#10B981]">Rp 499.000</span>
              </div>
              <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-[#10B981] shrink-0" />
                  <span>100% Custom sesuai alur/flowchart</span>
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-[#10B981] shrink-0" />
                  <span>Desain responsif (rapi di HP &amp; Laptop)</span>
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-[#10B981] shrink-0" />
                  <span>Full Source Code &amp; Database lengkap</span>
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-[#10B981] shrink-0" />
                  <span>Bonus: Video penjelasan kode &amp; bimbingan</span>
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-[#10B981] shrink-0" />
                  <span>Garansi revisi &amp; bug fixing</span>
                </li>
              </ul>
            </div>
            <a
              href={getWaUrl(
                "Halo Mas (ecoDigital), saya tertarik ambil Paket Reguler (mulai Rp499.000) untuk sistem / web saya."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#10B981] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#059669] hover:scale-[1.02]"
            >
              <HugeiconsIcon icon={WhatsappIcon} size={16} />
              <span>Ambil Paket Reguler</span>
            </a>
          </div>

          {/* Paket 3: Sistem Skala Penuh / Custom App */}
          <div className="relative rounded-[32px] border border-blue-500/30 bg-gradient-to-b from-blue-950/40 via-white/[0.05] to-black/40 p-5 sm:p-7 backdrop-blur-xl flex flex-col justify-between md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none w-full">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-400">
                <HugeiconsIcon icon={Building03Icon} size={12} />
                <span>Paket Enterprise &amp; Scale-Up</span>
              </span>
              <h3 className="mt-4 text-xl font-black text-white">
                Sistem Skala Penuh / Custom App
              </h3>
              <p className="mt-2 text-xs font-semibold leading-relaxed text-cyan-300">
                Cocok buat Aplikasi Sekolah/Instansi, Mobile App (Android), atau integrasi sistem kompleks.
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-2xl font-black text-blue-400">Penawaran Tertulis</span>
                <span className="text-xs text-white/40">(fleksibel sesuai spek)</span>
              </div>
              <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-blue-400 shrink-0" />
                  <span>Web System + Mobile App (Flutter/Android)</span>
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-blue-400 shrink-0" />
                  <span>Integrasi Open API / Payment Gateway</span>
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-blue-400 shrink-0" />
                  <span>Deployment ke Server / Cloud / Vercel</span>
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-blue-400 shrink-0" />
                  <span>Dokumentasi teknis &amp; maintenance berkala</span>
                </li>
              </ul>
            </div>
            <a
              href={getWaUrl(
                "Halo Mas (ecoDigital), saya ingin diskusi proyek custom untuk sistem skala penuh / aplikasi instansi."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-blue-500 hover:scale-[1.02]"
            >
              <HugeiconsIcon icon={WhatsappIcon} size={16} />
              <span>Diskusi Proyek Custom</span>
            </a>
          </div>
        </div>

        {/* Interactive Calculator Promotion Banner */}
        <AnimateOnScroll preset="fade-up" className="mt-12 sm:mt-16">
          <div className="relative rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-white/[0.03] to-blue-950/30 p-6 sm:p-8 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl overflow-hidden">
            <div className="flex items-start sm:items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <HugeiconsIcon icon={CalculatorIcon} size={24} />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Kalkulator Mandiri
                </div>
                <h4 className="mt-1.5 text-base sm:text-lg font-bold text-white">
                  Punya Kebutuhan Fitur Spesifik? Hitung Estimasinya di Sini
                </h4>
                <p className="mt-1 text-xs text-white/60 max-w-xl leading-relaxed">
                  Pilih kategori sistemmu dan centang fitur tambahan yang kamu inginkan di halaman simulasi biaya interaktif kami. Hasil estimasi langsung terhitung secara transparan.
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
    </div>
  );
}

