"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  WhatsappIcon,
  NewTwitterIcon,
  Facebook01Icon,
  InstagramIcon,
} from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import logoMarkImg from "../../../public/images/logo/logo-vertical-transparent.png";
import { getWaUrl, WA_NUMBER, WA_DISPLAY } from "@/data/landing-data";

export function ConsultationFormSection() {
  const [formName, setFormName] = useState("");
  const [formWa, setFormWa] = useState("");
  const [formType, setFormType] = useState("Fix Error & Tambah Fitur");
  const [formNotes, setFormNotes] = useState("");

  const handleQuickFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameStr = formName.trim() ? `kenalin saya ${formName.trim()}` : "saya mau konsultasi";
    const waStr = formWa.trim() ? ` (No. WA: ${formWa.trim()})` : "";
    const noteStr = formNotes.trim() ? formNotes.trim() : "Mohon info ketersediaan & jadwal diskusi.";
    const msg = `Halo Mas (ecoDigital), ${nameStr}${waStr}.
Saya mau konsultasi untuk kebutuhan: ${formType}.
Detail singkatnya: ${noteStr}
Kira-kira bisa dibantu? Terima kasih!`;

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="relative z-20 w-full bg-[#060A14] px-4 sm:px-8 lg:px-14 pt-6 pb-12 border-t border-white/10">
      {/* High-Converting Closing Section (Form Brief + Direct WhatsApp) */}
      <div className="mx-auto max-w-4xl mb-12 sm:mb-16">
        <AnimateOnScroll preset="zoom-in">
          <div className="rounded-3xl sm:rounded-[36px] border border-white/20 bg-gradient-to-r from-emerald-950/60 via-black/60 to-blue-950/60 p-5 sm:p-8 md:p-12 backdrop-blur-2xl shadow-2xl">
            <div className="text-center mb-6 sm:mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">
                MULAI DISKUSI SEKARANG
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white md:text-4xl">
                Masih Bingung Mulai dari Mana? Obrolin Aja Dulu, Gratis Kok!
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm leading-relaxed text-white/75">
                Isi detail singkat di bawah ini, nanti pesannya otomatis terformat rapi dan langsung masuk ke WhatsApp saya ({WA_DISPLAY}).
              </p>
            </div>

            {/* Form Input Brief Interaktif */}
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-6 md:p-8 backdrop-blur-xl max-w-2xl mx-auto shadow-inner">
              <form onSubmit={handleQuickFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-semibold text-white/70 block mb-1">
                      Nama Panggilanmu
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nama Panggilanmu"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-white/30 focus:border-emerald-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-white/70 block mb-1">
                      Nomor WhatsApp (Opsional)
                    </label>
                    <input
                      type="tel"
                      placeholder="08xxxxxxxxxx (Boleh dikosongkan)"
                      value={formWa}
                      onChange={(e) => setFormWa(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-white/30 focus:border-emerald-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-white/70 block mb-1">
                    Pilih Kebutuhan
                  </label>
                  <select
                    value={formType}
                    onChange={(e) => setFormType(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#060A14] px-4 py-2.5 text-xs text-white focus:border-emerald-400 focus:outline-none cursor-pointer"
                  >
                    <option value="Fix Error & Tambah Fitur">Fix Error &amp; Tambah Fitur</option>
                    <option value="Bikin Sistem TA & Riset">Bikin Sistem TA &amp; Riset</option>
                    <option value="Web Bisnis & Instansi">Web Bisnis &amp; Instansi</option>
                    <option value="Konsultasi Dulu">Konsultasi Dulu</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-white/70 block mb-1">
                    Detail Singkat Kebutuhan
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ceritakan singkat masalah kodinganmu, judul TA, atau sistem yang mau dibuat (sebutkan juga kalau ada deadline mepet)..."
                    value={formNotes}
                    onChange={(e) => setFormNotes(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-white/30 focus:border-emerald-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 py-4 px-6 text-sm sm:text-base font-extrabold text-white shadow-xl shadow-emerald-500/30 transition-all duration-200 hover:from-emerald-400 hover:to-teal-400 hover:shadow-emerald-500/50 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <HugeiconsIcon icon={WhatsappIcon} size={20} className="shrink-0" />
                  <span>Kirim &amp; Mulai Ngobrol →</span>
                </button>
              </form>

              <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
                <span className="font-medium">Atau chat langsung tanpa isi form:</span>
                <a
                  href={getWaUrl("Halo Mas (ecoDigital), saya mau konsultasi pembuatan website / sistem.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-950/50 px-4 py-2 text-xs font-bold text-emerald-300 hover:bg-emerald-900/60 hover:border-emerald-400/60 hover:text-white transition-all shadow-md cursor-pointer"
                >
                  <HugeiconsIcon icon={WhatsappIcon} size={15} className="text-emerald-400" />
                  <span>Chat Langsung via WhatsApp ({WA_DISPLAY})</span>
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Global Footer Details */}
      <footer className="mx-auto max-w-7xl pt-10 border-t border-white/10">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-4 text-left">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src={logoMarkImg}
                alt="ecoDigital Logo — Jasa Pembuatan Website & Aplikasi Custom"
                width={280}
                height={88}
                unoptimized
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="mt-3 text-xs leading-relaxed text-white/60 max-w-md">
              ecoDigital — Partner ngoding pembuatan website, aplikasi custom, dan penyelamat revisi sistem. Dikerjakan langsung oleh developer secara transparan, rapi, dan bergaransi.
            </p>
            <div className="mt-4 flex items-center gap-3 text-white/80">
              <a
                href={getWaUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 flex items-center justify-center text-emerald-400 transition-colors"
                aria-label="WhatsApp ecoDigital"
              >
                <HugeiconsIcon icon={WhatsappIcon} size={18} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="X ecoDigital"
              >
                <HugeiconsIcon icon={NewTwitterIcon} size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Facebook ecoDigital"
              >
                <HugeiconsIcon icon={Facebook01Icon} size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Instagram ecoDigital"
              >
                <HugeiconsIcon icon={InstagramIcon} size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Ringkasan Layanan */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Layanan
            </h4>
            <ul className="mt-3 space-y-2 text-xs text-white/70">
              <li>
                <Link href="#layanan" className="hover:text-white transition-colors">
                  Fix Error &amp; Tambah Fitur
                </Link>
              </li>
              <li>
                <Link href="#layanan" className="hover:text-white transition-colors">
                  Sistem Tugas Akhir &amp; Riset SPK
                </Link>
              </li>
              <li>
                <Link href="#layanan" className="hover:text-white transition-colors">
                  Aplikasi Sekolah &amp; Instansi
                </Link>
              </li>
              <li>
                <Link href="#layanan" className="hover:text-white transition-colors">
                  Web Profil UMKM &amp; Bisnis
                </Link>
              </li>
              <li>
                <Link href="#paket-harga" className="hover:text-white transition-colors">
                  Paket Harga (Mulai Rp150rb)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Kontak Resmi */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Kontak Resmi
            </h4>
            <ul className="mt-3 space-y-2 text-xs text-white/70">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">WA:</span>
                <a
                  href={getWaUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-emerald-300 transition-colors"
                >
                  {WA_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">Layanan:</span>
                <span className="text-white/80">Konsultasi Seluruh Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-3">
          <p>&copy; 2026 ecoDigital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

