"use client";

import React, { useRef, useState, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowRight02Icon,
  StarIcon,
  CheckmarkCircle01Icon,
} from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { getWaUrl } from "@/data/landing-data";
import { VectorAvatar } from "@/components/ui/vector-art/client-avatars";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  campusOrOrg: string;
  projectTitle: string;
  rating: number;
  badge: string;
  badgeColor: "emerald" | "cyan" | "amber" | "purple";
  quote: string;
  avatarInitials: string;
  avatarGradient: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "rifqi",
    name: "Rifqi Pratama",
    role: "Mahasiswa Teknik Informatika",
    campusOrOrg: "Teknik Informatika S1",
    projectTitle: "SPK AHP & TOPSIS (Skripsi)",
    rating: 5,
    badge: "Nilai A Sidang Skripsi",
    badgeColor: "emerald",
    quote:
      "Awalnya sempat trauma kena joki yang kirim file zip doang terus nomornya nggak aktif. Di ecoDigital malah dibikinin video rekaman bedah kode 15 menit yang ngejelasin alur rumus TOPSIS-nya langkah demi langkah. Pas sidang ditanya dosen penguji kenapa matriksnya begitu, saya bisa jawab lancar. Alhamdulillah langsung ACC nilai A!",
    avatarInitials: "RP",
    avatarGradient: "from-emerald-500 to-teal-700",
  },
  {
    id: "bambang",
    name: "H. Bambang S.",
    role: "Kasubag IT Kedinasan",
    campusOrOrg: "Instansi Pelayanan Publik",
    projectTitle: "SIMOPMAS Surat Warga QR Code",
    rating: 5,
    badge: "Lolos Uji Lapangan",
    badgeColor: "cyan",
    quote:
      "Aplikasi pelayanan surat warga selesai tepat waktu sebelum evaluasi pimpinan. Yang paling kami apresiasi adalah Mas Eko komunikasinya langsung developer tanpa perantara sales yang kaku. Selama pengerjaan kami dikasih link staging live aktif, jadi pimpinan bisa langsung tes fitur cetak surat ber-QR dari browser masing-masing.",
    avatarInitials: "HB",
    avatarGradient: "from-blue-600 to-indigo-800",
  },
  {
    id: "dimas",
    name: "Dimas Arya Nugraha",
    role: "Owner Retail & Grosir",
    campusOrOrg: "UMKM Retail Multi-Cabang",
    projectTitle: "Aplikasi Kasir POS & Struk WA",
    rating: 5,
    badge: "3 Cabang Toko Aktif",
    badgeColor: "amber",
    quote:
      "Sistem kasir toko saya butuh fitur kirim nota otomatis ke WhatsApp pelanggan dan scan barcode cepat. Mas Eko bikinnya rapi dan enteng diakses. Sistem pembayarannya juga amanah banget pakai milestone bertahap—saya baru pelunasan setelah aplikasinya didemokan jalan normal di tablet kasir toko. Sangat recommended!",
    avatarInitials: "DA",
    avatarGradient: "from-amber-500 to-orange-700",
  },
  {
    id: "vania",
    name: "dr. Vania Rahmadhani",
    role: "Dokter Residen & Peneliti Medis",
    campusOrOrg: "Riset Spesialis Medis",
    projectTitle: "Klasifikasi Citra Medis (Python ML)",
    rating: 5,
    badge: "Publikasi Jurnal S2",
    badgeColor: "emerald",
    quote:
      "Karena latar belakang saya kedokteran, saya sama sekali buta koding Python untuk pengolahan dataset medis. Mas Eko telaten banget bimbing cara kerja confusion matrix, akurasi model, dan parameter testing-nya sampai saya benar-benar paham. Penjelasannya runtut, sabar, dan sangat solutif.",
    avatarInitials: "VR",
    avatarGradient: "from-teal-500 to-emerald-800",
  },
  {
    id: "kevin",
    name: "Kevin Sanjaya",
    role: "Mahasiswa Sistem Informasi",
    campusOrOrg: "Sistem Informasi S1",
    projectTitle: "Fix Token Auth JWT & API Flutter",
    rating: 5,
    badge: "Beres dalam 45 Menit",
    badgeColor: "purple",
    quote:
      "Pernah stuck error token auth nggak sync antara Flutter sama backend Laravel 3 hari nggak ketemu solusinya, padahal jadwal pra-sidang tinggal 2 hari. Hubungi Mas Eko, dibantu remote screen sebentar, nggak sampai 45 menit kelar dan dijelasin kenapa sebelumnya error. Tarifnya ramah di kantong mahasiswa.",
    avatarInitials: "KS",
    avatarGradient: "from-purple-600 to-indigo-900",
  },
  {
    id: "subagyo",
    name: "Drs. M. Subagyo",
    role: "Kepala Lab Komputer SMK",
    campusOrOrg: "SMK Negeri Jawa Timur",
    projectTitle: "Portal CBT & Raport LMS",
    rating: 5,
    badge: "1.200+ Siswa Bersamaan",
    badgeColor: "cyan",
    quote:
      "Tahun lalu ujian semester sempat kacau karena server lokal down. Tahun ini kami minta tolong ecoDigital bangun sistem ujian berbasis web cloud. Waktu dipakai 1.200 siswa serentak performanya stabil tanpa kendala lag. Dokumentasi lengkap dan diajarin cara backup databasenya secara mandiri.",
    avatarInitials: "MS",
    avatarGradient: "from-cyan-600 to-blue-900",
  },
];

const BADGE_COLOR_MAP: Record<string, string> = {
  emerald: "border-emerald-500/30 bg-emerald-500/15 text-emerald-300",
  cyan: "border-cyan-500/30 bg-cyan-500/15 text-cyan-300",
  amber: "border-amber-500/30 bg-amber-500/15 text-amber-300",
  purple: "border-purple-500/30 bg-purple-500/15 text-purple-300",
};

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicated items for seamless continuous marquee loop
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  // Silky Smooth Auto-Marquee via RequestAnimationFrame
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    const speed = 0.65; // pixels per frame (calm, readable, elegant pace)

    const step = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed;
        // Seamless loop: when passing the first half, wrap back silently
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -370 : 370;
      // Loop backward if scrolling left from the beginning
      if (direction === "left" && scrollRef.current.scrollLeft <= 10) {
        scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2;
      }
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="testimoni"
      className="relative z-20 w-full bg-[#060A14] px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <span id="ulasan" className="scroll-mt-24 block" />
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll preset="fade-up" once={false} duration={0.6}>
          {/* ─── Panoramic Showcase Shelf Container ─── */}
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/10 bg-gradient-to-r from-slate-950 via-[#0a1120] to-[#070d18] p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-2xl min-h-[480px] lg:min-h-[520px] flex flex-col justify-center">
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute -top-24 -left-20 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />
            <div className="pointer-events-none absolute top-1/2 right-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row items-stretch lg:items-center gap-8 lg:gap-10">
              
              {/* ─── LEFT COLUMN: Title, Description, & CTA ─── */}
              <div className="flex flex-col justify-between shrink-0 lg:w-[280px] xl:w-[320px] text-left">
                <div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#10B981] mb-2">
                    BUKTI KEPUASAN NYATA
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-white tracking-tight leading-[1.2]">
                    Kisah Mereka yang Lolos Sidang &amp; Go-Live
                  </h2>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300/80">
                    Kisah nyata dari mahasiswa dan instansi yang membuktikan sendiri standar kerja kami. Arahkan kursor untuk menjeda dan membaca ulasan lengkap.
                  </p>
                </div>

                <div className="mt-6 pt-2">
                  <a
                    href={getWaUrl(
                      "Halo Mas (ecoDigital), saya membaca testimoni di website dan ingin konsultasi pembuatan sistem saya."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 hover:bg-white/20 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Konsultasi Sekarang</span>
                    <HugeiconsIcon icon={ArrowRight02Icon} size={15} />
                  </a>
                </div>
              </div>

              {/* ─── RIGHT COLUMN: Navigation Controls + Continuous Auto-Marquee Track ─── */}
              <div className="flex-1 min-w-0 flex flex-col justify-between relative py-2">
                {/* Top Controls Row */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                   
                    <span className="hidden sm:inline text-slate-500">•</span>
                    <span className="hidden sm:inline">Arahkan kursor untuk pause</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleScroll("left")}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all hover:bg-white/15 hover:text-white active:scale-95 cursor-pointer"
                      aria-label="Scroll ulasan ke kiri"
                      title="Geser ke kiri"
                    >
                      <HugeiconsIcon icon={ArrowLeft01Icon} size={15} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScroll("right")}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all hover:bg-white/15 hover:text-white active:scale-95 cursor-pointer"
                      aria-label="Scroll ulasan ke kanan"
                      title="Geser ke kanan"
                    >
                      <HugeiconsIcon icon={ArrowRight01Icon} size={15} />
                    </button>
                  </div>
                </div>

                {/* Horizontal Auto-Marquee Track with Cinematic Right Fade Mask */}
                <div className="relative">
                  <div
                    ref={scrollRef}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                    className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto scrollbar-none py-3.5 pl-3 sm:pl-4 pr-16 sm:pr-24 scroll-smooth cursor-grab active:cursor-grabbing"
                    style={{
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                      maskImage:
                        "linear-gradient(to right, black 0%, black calc(100% - 80px), transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to right, black 0%, black calc(100% - 80px), transparent 100%)",
                    }}
                  >
                    {marqueeItems.map((item, idx) => (
                      <div
                        key={`${item.id}-${idx}`}
                        className={`group flex flex-col justify-between w-[310px] sm:w-[350px] md:w-[370px] shrink-0 rounded-[24px] border border-white/10 bg-gradient-to-b from-[#0c1424] via-[#090f1d] to-[#060a14] p-5 sm:p-6 backdrop-blur-2xl hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-950/40 transition-all duration-300 select-none hover:scale-[1.02] ${
                          idx === 0 ? "ml-1 sm:ml-2" : ""
                        }`}
                      >
                        {/* Top Row: 5 Stars + Verified Metric Badge */}
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3.5">
                            <div className="flex items-center gap-1 text-amber-400">
                              {[...Array(item.rating)].map((_, i) => (
                                <HugeiconsIcon
                                  key={i}
                                  icon={StarIcon}
                                  size={13}
                                  className="fill-amber-400 text-amber-400"
                                />
                              ))}
                            </div>
                            <span
                              className={`rounded-full border px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-tight ${
                                BADGE_COLOR_MAP[item.badgeColor] || "border-emerald-500/30 bg-emerald-500/15 text-emerald-300"
                              }`}
                            >
                              ✓ {item.badge}
                            </span>
                          </div>

                          {/* Authentic Testimonial Quote */}
                          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-200/90 italic">
                            &ldquo;{item.quote}&rdquo;
                          </p>
                        </div>

                        {/* Bottom Area: Project Tag & Client Profile */}
                        <div className="mt-5 pt-3.5 border-t border-white/10">
                          {/* Project Tag */}
                          <div className="mb-2.5 flex items-center gap-1.5 text-[10.5px] font-mono text-emerald-400/90 truncate">
                            <HugeiconsIcon icon={CheckmarkCircle01Icon} size={11} className="shrink-0" />
                            <span className="truncate">{item.projectTitle}</span>
                          </div>

                          {/* Client Identity */}
                          <div className="flex items-center gap-3">
                            {/* Stylized Vector Avatar */}
                            <VectorAvatar id={item.id} className="h-9 w-9 shrink-0 shadow-md" />

                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1.5">
                                <h4 className="font-bold text-xs sm:text-sm text-white truncate">
                                  {item.name}
                                </h4>
                                <span
                                  className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20 shrink-0"
                                  title="Klien Terverifikasi"
                                >
                                  ✓ Verified
                                </span>
                              </div>
                              <p className="text-[10.5px] text-slate-400 truncate mt-0.5">
                                {item.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
