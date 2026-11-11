"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Wrench01Icon,
  Mortarboard01Icon,
  Building03Icon,
  CheckmarkCircle01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { getWaUrl } from "@/data/landing-data";

export function ServicesSection() {
  return (
    <div id="layanan" className="relative z-20 w-full bg-[#060A14] px-4 sm:px-8 lg:px-14 py-12 sm:py-16 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll preset="fade-up" className="mb-10 sm:mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">
            APA YANG BISA DIBANTU?
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-white">
            Masuk di Kondisi Apa Pun, Pilih Sesuai Kebutuhanmu
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-white/60">
            Entah kamu baru punya ide kasar di kertas, atau sudah punya kodingan tapi berantakan dan <em>error</em> terus—saya siap masuk bantu beresin.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Klinik Koding: Fix Error & Tambah Fitur */}
          <div className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-7 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/50 hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/30">
            <div>
              {/* Header: Icon & Category Badge */}
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-[#10B981] shadow-lg shadow-emerald-950/40 transition-transform duration-300 group-hover:scale-105">
                  <HugeiconsIcon icon={Wrench01Icon} size={32} />
                </div>
                <span className="rounded-full border border-emerald-400/25 bg-emerald-950/50 px-3 py-1 text-[11px] font-semibold text-emerald-300 shadow-sm">
                  ⚡ Perbaikan Kilat
                </span>
              </div>

              {/* Title with balanced accent */}
              <h3 className="mt-4 text-[19px] sm:text-xl font-extrabold text-white leading-snug tracking-tight">
                <span className="text-emerald-400">Klinik Koding:</span> Fix Error &amp; Tambah Fitur
              </h3>

              <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-white/70">
                Kodingan lama macet, ditinggal <em>developer</em> sebelumnya, atau mendadak disuruh dosen tambah fitur? Nggak perlu bikin ulang dari nol.
              </p>

              <ul className="mt-5 space-y-2.5 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-[#10B981] shrink-0" />
                  <span>Perbaikan bug/error PHP, Laravel, JS, Flutter, dll.</span>
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-[#10B981] shrink-0" />
                  <span>Tambah modul/fitur baru sesuai catatan revisi.</span>
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-[#10B981] shrink-0" />
                  <span>Redesign tampilan UI biar lebih modern &amp; rapi.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10">
              <a
                href={getWaUrl(
                  "Halo Mas (ecoDigital), saya mau konsultasi perbaikan error / tambah fitur kodingan."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] hover:from-emerald-400 hover:to-teal-400 active:scale-95"
              >
                <HugeiconsIcon icon={WhatsappIcon} size={16} />
                <span>Beresin Error Sekarang →</span>
              </a>
            </div>
          </div>

          {/* Card 2: Partner Sistem Tugas Akhir, SPK & Riset */}
          <div className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-7 backdrop-blur-md transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/30">
            <div>
              {/* Header: Icon & Category Badge */}
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 shadow-lg shadow-blue-950/40 transition-transform duration-300 group-hover:scale-105">
                  <HugeiconsIcon icon={Mortarboard01Icon} size={32} />
                </div>
                <span className="rounded-full border border-blue-400/25 bg-blue-950/50 px-3 py-1 text-[11px] font-semibold text-blue-300 shadow-sm">
                  🎓 Skripsi &amp; Riset
                </span>
              </div>

              {/* Title with balanced accent */}
              <h3 className="mt-4 text-[19px] sm:text-xl font-extrabold text-white leading-snug tracking-tight">
                <span className="text-blue-400">Partner Sistem:</span> Tugas Akhir, SPK &amp; Riset
              </h3>

              <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-white/70">
                Bikin aplikasi web/mobile untuk penelitian atau skripsi yang nggak cuma sekadar jalan, tapi juga bikin kamu siap menjawab pertanyaan penguji.
              </p>

              <ul className="mt-5 space-y-2.5 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-blue-400 shrink-0" />
                  <span>Alur program &amp; database sesuai flowchart kamu.</span>
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-blue-400 shrink-0" />
                  <span>Bebas request metode (SPK, Sistem Informasi, dll.).</span>
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-blue-400 shrink-0" />
                  <span>Bonus: Video penjelasan alur kode &amp; bimbingan 1-on-1.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10">
              <a
                href={getWaUrl(
                  "Halo Mas (ecoDigital), saya mau konsultasi pembuatan sistem Tugas Akhir / SPK / riset skripsi."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] hover:from-emerald-400 hover:to-teal-400 active:scale-95"
              >
                <HugeiconsIcon icon={WhatsappIcon} size={16} />
                <span>Konsultasi Judul / Sistem →</span>
              </a>
            </div>
          </div>

          {/* Card 3: Aplikasi Sekolah, Instansi & Bisnis UMKM */}
          <div className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-7 backdrop-blur-md transition-all duration-300 hover:border-teal-500/50 hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-950/30">
            <div>
              {/* Header: Icon & Category Badge */}
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-500/20 bg-teal-500/10 text-teal-400 shadow-lg shadow-teal-950/40 transition-transform duration-300 group-hover:scale-105">
                  <HugeiconsIcon icon={Building03Icon} size={32} />
                </div>
                <span className="rounded-full border border-teal-400/25 bg-teal-950/50 px-3 py-1 text-[11px] font-semibold text-teal-300 shadow-sm">
                  🏢 Skala Bisnis
                </span>
              </div>

              {/* Title with balanced accent */}
              <h3 className="mt-4 text-[19px] sm:text-xl font-extrabold text-white leading-snug tracking-tight">
                <span className="text-teal-400">Aplikasi Sistem:</span> Sekolah, Instansi &amp; UMKM
              </h3>

              <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-white/70">
                Bangun sistem operasional yang siap pakai di lapangan—bukan sekadar <em>template</em> pajangan.
              </p>

              <ul className="mt-5 space-y-2.5 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-teal-400 shrink-0" />
                  <span>Sistem informasi sekolah, BK, &amp; pelayanan publik.</span>
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-teal-400 shrink-0" />
                  <span>Website profil usaha, katalog, hingga kasir/inventori.</span>
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={15} className="text-teal-400 shrink-0" />
                  <span>Langsung online (termasuk setup domain/hosting/Vercel).</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10">
              <a
                href={getWaUrl(
                  "Halo Mas (ecoDigital), saya mau diskusi pembuatan aplikasi sekolah / instansi / bisnis UMKM."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] hover:from-emerald-400 hover:to-teal-400 active:scale-95"
              >
                <HugeiconsIcon icon={WhatsappIcon} size={16} />
                <span>Diskusi Sistem Bisnis →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
