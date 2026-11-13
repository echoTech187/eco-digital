"use client";

import { useState } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  WhatsappIcon,
  LaptopProgrammingIcon,
  ShieldCheckIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { NavbarSection } from "@/components/sections/navbar-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { WA_NUMBER, WA_DISPLAY, getWaUrl } from "@/data/landing-data";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [waOrEmail, setWaOrEmail] = useState("");
  const [category, setCategory] = useState("Riset & Tugas Akhir (SPK)");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const safeName = name.trim().slice(0, 100) || "Calon Klien";
    const safeContact = waOrEmail.trim().slice(0, 80) || "-";
    const safeCategory = category.slice(0, 100);
    const safeMessage = message.trim().slice(0, 1500) || "Mohon info estimasi dan ketersediaan waktu.";

    const formatted = `Halo ecoDigital, saya ingin konsultasi sistem melalui formulir web:
• Nama: ${safeName}
• Kontak: ${safeContact}
• Kategori: ${safeCategory}
• Pesan/Kebutuhan: ${safeMessage}`;

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(formatted)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#060A14] text-white">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-emerald-500/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[140px]" />

      {/* Standard Sticky Global Navigation */}
      <NavbarSection />

      {/* Main Content */}
      <main className="relative z-20 mx-auto max-w-5xl px-4 sm:px-8 py-10 lg:py-14">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/50">
          <Link href="/" prefetch={false} className="hover:text-emerald-400 transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <span className="text-emerald-400 font-medium">Konsultasi</span>
        </nav>

        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Hubungi Tim ecoDigital
          </span>
          <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Konsultasikan Kebutuhan Sistem Anda
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">
            Mulai dari ide awal riset tugas akhir/skripsi, otomasi operasional instansi dinas &amp; sekolah, hingga prototipe aplikasi mobile dan sistem bisnis Anda.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-5 items-start">
          {/* Contact Details Side */}
          <div className="space-y-4 md:col-span-2">
            {/* WhatsApp Card */}
            <div className="rounded-3xl border border-emerald-400/30 bg-emerald-950/20 p-6 backdrop-blur-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
                <HugeiconsIcon icon={WhatsappIcon} size={24} />
              </div>
              <h3 className="mt-3 text-base font-bold text-white">WhatsApp Resmi ecoDigital</h3>
              <p className="mt-1 text-xs text-white/70">
                Respon cepat untuk diskusi fitur, estimasi biaya, dan jadwal pengerjaan.
              </p>
              <a
                href={getWaUrl("Halo ecoDigital, saya ingin konsultasi kebutuhan pembuatan website / aplikasi.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#10B981] hover:underline"
              >
                <span>Ngobrol via WhatsApp : {WA_DISPLAY}</span>
                <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
              </a>
            </div>

            {/* Sesi Bedah Koding & Konsultasi Card */}
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400">
                <HugeiconsIcon icon={LaptopProgrammingIcon} size={24} />
              </div>
              <h3 className="mt-3 text-base font-bold text-white">Sesi Bedah Koding</h3>
              <p className="mt-1 text-xs text-white/60">
                Konsultasikan rancangan arsitektur, pemilihan tech stack, hingga sesi bimbingan teknis 1-on-1 sampai paham.
              </p>
              <a
                href={getWaUrl("Halo ecoDigital, saya ingin konsultasi teknis & jadwal sesi bedah koding sistem.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:underline"
              >
                <span>Jadwalkan Sesi Konsultasi</span>
                <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
              </a>
            </div>

            {/* Garansi Card */}
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
                <HugeiconsIcon icon={ShieldCheckIcon} size={24} />
              </div>
              <h3 className="mt-3 text-base font-bold text-white">Garansi &amp; Sesi Bimbingan</h3>
              <p className="mt-1 text-xs text-white/60">
                100% full source code tanpa enkripsi, garansi bug fixing, dan bimbingan bedah koding 1-on-1 sampai paham.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-[32px] border border-white/20 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-2xl md:col-span-3">
            <h2 className="text-xl font-bold text-white">Kirim Formulir Brief</h2>
            <p className="mt-1 text-xs text-white/60">
              Isi formulir di bawah ini untuk tersambung ke WhatsApp developer ecoDigital dengan rincian kebutuhan Anda.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="contact-name" className="text-xs font-semibold text-white/80">
                  Nama Lengkap
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="Nama Anda atau Instansi"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#10B981] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="contact-info" className="text-xs font-semibold text-white/80">
                  Nomor WhatsApp / Email Kontak
                </label>
                <input
                  id="contact-info"
                  name="contact"
                  type="text"
                  autoComplete="tel email"
                  required
                  maxLength={80}
                  placeholder="0812xxxxxx atau email@anda.com"
                  value={waOrEmail}
                  onChange={(e) => setWaOrEmail(e.target.value)}
                  className="mt-1 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#10B981] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="contact-category" className="text-xs font-semibold text-white/80">
                  Kategori Proyek
                </label>
                <select
                  id="contact-category"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1 w-full rounded-2xl border border-white/20 bg-[#060A14] px-4 py-3 text-sm text-white focus:border-[#10B981] focus:outline-none cursor-pointer"
                >
                  <option value="Riset & Tugas Akhir (SPK)">Riset &amp; Tugas Akhir / Skripsi (SPK / Algoritma)</option>
                  <option value="Website Profil UMKM / Bisnis">Website Profil UMKM &amp; Bisnis</option>
                  <option value="Sistem Informasi & Dashboard Admin">Sistem Informasi &amp; Dashboard Admin Operasional</option>
                  <option value="Aplikasi Mobile Android (Flutter)">Aplikasi Mobile Android (Flutter)</option>
                  <option value="Perbaikan Bug / Modul Tambahan">Perbaikan Bug &amp; Penambahan Modul Koding</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="text-xs font-semibold text-white/80">
                  Rincian Kebutuhan / Judul Proyek
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  maxLength={1500}
                  placeholder="Ceritakan judul tugas akhir, proses bisnis, atau fitur sistem yang ingin dibuat..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#10B981] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-xl shadow-emerald-950/40 transition-all hover:scale-[1.02] hover:from-emerald-400 hover:to-teal-400 active:scale-95 cursor-pointer"
              >
                <HugeiconsIcon icon={WhatsappIcon} size={18} />
                <span>Kirim Brief ke WhatsApp ecoDigital →</span>
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Global Clean 3-Column Footer */}
      <SiteFooter />
    </div>
  );
}
