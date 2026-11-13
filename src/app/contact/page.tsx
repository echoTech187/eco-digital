"use client";

import { useState } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  WhatsappIcon,
  LaptopProgrammingIcon,
  ShieldCheckIcon,
  ArrowRight01Icon,
  CheckmarkCircle01Icon,
} from "@hugeicons/core-free-icons";
import { NavbarSection } from "@/components/sections/navbar-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { WA_NUMBER, WA_DISPLAY, getWaUrl, LEADS_WEBHOOK_URL } from "@/data/landing-data";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [waOrEmail, setWaOrEmail] = useState("");
  const [category, setCategory] = useState("Aplikasi Custom (Web & Mobile)");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [lastSubmittedWaUrl, setLastSubmittedWaUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");

    const safeName = name.trim().slice(0, 100) || "Calon Klien";
    const safeContact = waOrEmail.trim().slice(0, 80) || "-";
    const safeCategory = category.slice(0, 100);
    const safeMessage = message.trim().slice(0, 1500) || "Mohon info estimasi dan ketersediaan waktu.";

    const formatted = `Halo ecoDigital, saya ingin konsultasi sistem melalui formulir web:
• Nama: ${safeName}
• Kontak: ${safeContact}
• Kategori: ${safeCategory}
• Pesan/Kebutuhan: ${safeMessage}`;

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(formatted)}`;
    setLastSubmittedWaUrl(waUrl);

    // 1. Rekam data ke Google Sheets / Webhook jika URL sudah dikonfigurasi
    if (LEADS_WEBHOOK_URL) {
      try {
        await fetch(LEADS_WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({
            name: safeName,
            contact: safeContact,
            category: safeCategory,
            message: safeMessage,
            source: "Formulir Halaman Konsultasi (/contact)",
          }),
        });
      } catch (err) {
        console.warn("Gagal mengirim ke webhook leads:", err);
      }
    }

    // 2. Buka WhatsApp di tab baru
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setStatus("success");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-50 dark:bg-[#060A14] text-slate-900 dark:text-white transition-colors">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[600px] w-[600px] rounded-full bg-blue-500/10 dark:bg-blue-500/15 blur-[140px]" />

      {/* Standard Sticky Global Navigation */}
      <NavbarSection />

      {/* Main Content */}
      <main className="relative z-20 mx-auto max-w-5xl px-4 sm:px-8 pt-24 sm:pt-28 pb-10 lg:pb-14">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500 dark:text-white/50">
          <Link href="/" prefetch={false} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">Konsultasi</span>
        </nav>

        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            Hubungi Tim ecoDigital
          </span>
          <h1 className="mt-4 text-3xl font-black text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Konsultasikan Kebutuhan Sistem Anda
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-white/70">
            Mulai dari perancangan web instansi dinas &amp; sekolah, otomasi operasional bisnis, hingga aplikasi mobile dan arsitektur backend custom Anda.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-5 items-start">
          {/* Contact Details Side */}
          <div className="space-y-4 md:col-span-2">
            {/* WhatsApp Card */}
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-50/70 dark:bg-emerald-950/20 p-6 backdrop-blur-xl shadow-sm dark:shadow-none">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                <HugeiconsIcon icon={WhatsappIcon} size={24} />
              </div>
              <h3 className="mt-3 text-base font-bold text-slate-900 dark:text-white">WhatsApp Resmi ecoDigital</h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-white/70">
                Respon cepat untuk diskusi fitur, estimasi biaya, dan jadwal pengerjaan.
              </p>
              <a
                href={getWaUrl("Halo ecoDigital, saya ingin konsultasi kebutuhan pembuatan website / aplikasi.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-[#10B981] hover:underline"
              >
                <span>Ngobrol via WhatsApp : {WA_DISPLAY}</span>
                <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
              </a>
            </div>

            {/* Sesi Bedah Koding & Konsultasi Card */}
            <div className="rounded-3xl border border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 p-6 backdrop-blur-xl shadow-sm dark:shadow-none">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/15 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                <HugeiconsIcon icon={LaptopProgrammingIcon} size={24} />
              </div>
              <h3 className="mt-3 text-base font-bold text-slate-900 dark:text-white">Konsultasi Arsitektur</h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-white/60">
                Konsultasikan rancangan arsitektur, pemilihan tech stack, hingga alur implementasi teknis langsung dengan developer.
              </p>
              <a
                href={getWaUrl("Halo ecoDigital, saya ingin konsultasi teknis arsitektur sistem.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
              >
                <span>Jadwalkan Konsultasi</span>
                <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
              </a>
            </div>

            {/* Garansi Card */}
            <div className="rounded-3xl border border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 p-6 backdrop-blur-xl shadow-sm dark:shadow-none">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                <HugeiconsIcon icon={ShieldCheckIcon} size={24} />
              </div>
              <h3 className="mt-3 text-base font-bold text-slate-900 dark:text-white">Garansi &amp; Pendampingan</h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-white/60">
                100% full source code tanpa enkripsi, garansi bug fixing, dan pendampingan teknis hingga sistem siap beroperasi.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-[32px] border border-slate-200 dark:border-white/20 bg-white dark:bg-white/[0.06] p-8 shadow-xl dark:shadow-2xl backdrop-blur-2xl md:col-span-3">
            {status === "success" ? (
              <div className="py-6 text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={36} />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  Formulir Berhasil Terkirim &amp; Tercatat!
                </h3>
                <p className="mx-auto max-w-md text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-white/70">
                  Terima kasih, <strong>{name || "Bapak/Ibu"}</strong>. Rincian kebutuhan proyek Anda telah otomatis tercatat di sistem kami dan jendela WhatsApp telah dibuka untuk terhubung langsung dengan Lead Developer.
                </p>
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={lastSubmittedWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <HugeiconsIcon icon={WhatsappIcon} size={18} />
                    <span>Buka Chat WhatsApp Sekarang</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setName("");
                      setWaOrEmail("");
                      setMessage("");
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/10 px-6 py-3.5 text-xs font-bold text-slate-700 dark:text-white/80 hover:bg-slate-200 dark:hover:bg-white/15 transition-all cursor-pointer"
                  >
                    <span>Kirim Pesan Lain</span>
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Kirim Formulir Brief</h2>
                <p className="mt-1 text-xs text-slate-600 dark:text-white/60">
                  Isi formulir di bawah ini untuk tersambung ke WhatsApp developer ecoDigital dengan rincian kebutuhan Anda.
                </p>

                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="contact-name" className="text-xs font-semibold text-slate-700 dark:text-white/80">
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
                      className="mt-1 w-full rounded-2xl border border-slate-300 dark:border-white/20 bg-slate-50 dark:bg-black/40 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-info" className="text-xs font-semibold text-slate-700 dark:text-white/80">
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
                      className="mt-1 w-full rounded-2xl border border-slate-300 dark:border-white/20 bg-slate-50 dark:bg-black/40 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-category" className="text-xs font-semibold text-slate-700 dark:text-white/80">
                      Kategori Proyek
                    </label>
                    <select
                      id="contact-category"
                      name="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="mt-1 w-full rounded-2xl border border-slate-300 dark:border-white/20 bg-slate-50 dark:bg-[#060A14] px-4 py-3 text-sm text-slate-900 dark:text-white focus:border-emerald-500 focus:outline-none cursor-pointer"
                    >
                      <option value="Aplikasi Custom (Web & Mobile)">Aplikasi Custom (Web &amp; Mobile)</option>
                      <option value="Jasa API & Backend Architecture">Jasa API &amp; Backend Architecture</option>
                      <option value="Web Instansi & Bisnis (Siap Online)">Web Instansi &amp; Bisnis (Siap Online)</option>
                      <option value="Perbaikan Bug & Optimasi Sistem">Perbaikan Bug &amp; Optimasi Sistem</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="text-xs font-semibold text-slate-700 dark:text-white/80">
                      Rincian Kebutuhan / Gambaran Proyek
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      maxLength={1500}
                      placeholder="Ceritakan gambaran sistem, alur proses operasional, atau fitur yang ingin dibangun..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mt-1 w-full rounded-2xl border border-slate-300 dark:border-white/20 bg-slate-50 dark:bg-black/40 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.02] hover:from-emerald-400 hover:to-teal-400 active:scale-95 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>
                        <span className="h-4 w-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                        <span>Mencatat &amp; Menghubungkan ke WhatsApp...</span>
                      </>
                    ) : (
                      <>
                        <HugeiconsIcon icon={WhatsappIcon} size={18} />
                        <span>Kirim Brief ke WhatsApp ecoDigital →</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </main>

      {/* Global Clean 3-Column Footer */}
      <SiteFooter />
    </div>
  );
}
