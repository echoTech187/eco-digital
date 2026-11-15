"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  StarIcon,
  CheckmarkCircle01Icon,
} from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
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
    role: "Project Owner & Research Lead",
    campusOrOrg: "Sistem Informasi & Data",
    projectTitle: "Platform Monitoring & Evaluasi Kinerja",
    rating: 5,
    badge: "Deployed & Uji Lapangan",
    badgeColor: "emerald",
    quote:
      "Sempat ragu cari developer untuk bangun sistem evaluasi internal kami. Di ecoDigital, komunikasinya to the point langsung sama developernya tanpa perantara. Arsitektur kodenya rapi, alur database jelas, dan kita bisa pantau progres lewat link staging setiap hari. Hasilnya deployed tepat waktu dan langsung dipakai operasional tim.",
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
    role: "Mobile App Engineer",
    campusOrOrg: "Proyek Startup Edukasi",
    projectTitle: "Fix Token Auth JWT & API Flutter",
    rating: 5,
    badge: "Beres dalam 45 Menit",
    badgeColor: "purple",
    quote:
      "Pernah stuck error token auth nggak sync antara Flutter sama backend Laravel 3 hari nggak ketemu solusinya, padahal jadwal peluncuran tinggal 2 hari. Hubungi Mas Eko, dibantu remote screen sebentar, nggak sampai 45 menit kelar dan dijelasin kenapa sebelumnya error. Sangat responsif dan profesional.",
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
  emerald: "border-emerald-500/30 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
  cyan: "border-cyan-500/30 bg-cyan-500/15 text-cyan-700 dark:text-cyan-300",
  amber: "border-amber-500/30 bg-amber-500/15 text-amber-700 dark:text-amber-300",
  purple: "border-purple-500/30 bg-purple-500/15 text-purple-700 dark:text-purple-300",
};

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Deck stacking: exit parallax as Pricing Section slides up and covers Testimonials
  const { scrollYProgress: exitProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentScale = useTransform(exitProgress, [0, 0.7, 1], [1, 0.98, 0.92]);
  const contentOpacity = useTransform(exitProgress, [0, 0.65, 1], [1, 0.75, 0.25]);
  const contentY = useTransform(exitProgress, [0, 1], [0, 50]);

  // Tripled items (3 sets) for truly seamless, infinite circular looping
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  // Set initial scroll position to the start of Set 2 on mount
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const initTimer = setTimeout(() => {
      const singleSetWidth = el.scrollWidth / 3;
      if (singleSetWidth > 0) {
        el.scrollLeft = singleSetWidth;
      }
    }, 100);
    return () => clearTimeout(initTimer);
  }, []);

  // Silky Smooth Auto-Marquee via RequestAnimationFrame with Seamless Wrap
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    const speed = 0.65; // pixels per frame (calm, readable, elegant pace)

    const step = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed;
        const singleSetWidth = el.scrollWidth / 3;
        // Seamless loop: when passing the end of Set 2 into Set 3, wrap back by 1 set
        if (singleSetWidth > 0 && el.scrollLeft >= singleSetWidth * 2) {
          el.scrollLeft -= singleSetWidth;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Passive handler to seamlessly wrap if user manually drags/swipes to edges
  const handleContainerScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const singleSetWidth = el.scrollWidth / 3;
    if (singleSetWidth <= 0) return;

    if (el.scrollLeft >= singleSetWidth * 2.5) {
      el.scrollLeft -= singleSetWidth;
    } else if (el.scrollLeft <= 5) {
      el.scrollLeft += singleSetWidth;
    }
  };

  return (
    <section
      id="testimoni"
      ref={sectionRef}
      className="relative z-20 w-full sticky top-0 flex flex-col rounded-t-[36px] sm:rounded-t-[56px] border-t border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-[#060A14] pt-14 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 shadow-[0_-25px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_-30px_70px_-20px_rgba(0,0,0,0.6)] scroll-mt-20 transition-colors duration-300 overflow-hidden"
    >
      <span id="ulasan" className="scroll-mt-24 block" />

      {/* Subtle Ambient Background Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 blur-3xl" />

      <motion.div
        style={{ scale: contentScale, opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto w-full will-change-transform origin-top"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll preset="fade-up" once={false} duration={0.6}>
            {/* ─── TOP HEADER: Heading & Subtitle ─── */}
            <div className="max-w-3xl text-left mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                BUKTI KEPUASAN NYATA
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
                Kisah Sukses Sistem yang Telah Go-Live
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300/80">
                Kisah nyata kepuasan klien dalam pembuatan <strong>Aplikasi Custom</strong>, arsitektur <strong>Jasa API &amp; Backend</strong>, serta <strong>Web Instansi &amp; Bisnis</strong> bersama ecoDigital.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        {/* ─── FULL-WIDTH TESTIMONIALS SLIDER TRACK ─── */}
        <div className="relative w-full">
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            onScroll={handleContainerScroll}
            className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto scrollbar-none py-4 px-4 sm:px-6 lg:px-8 cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 28px, black calc(100% - 28px), transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 28px, black calc(100% - 28px), transparent 100%)",
            }}
          >
            {marqueeItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="group flex flex-col justify-between w-[320px] sm:w-[380px] md:w-[420px] shrink-0 rounded-[24px] border border-slate-200/90 dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#0c1424] dark:via-[#090f1d] dark:to-[#060a14] p-6 sm:p-7 shadow-xs hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-emerald-950/30 transition-all duration-300 select-none hover:-translate-y-1"
              >
                {/* Top Row: 5 Stars + Verified Metric Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <HugeiconsIcon
                          key={i}
                          icon={StarIcon}
                          size={14}
                          className="fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400"
                        />
                      ))}
                    </div>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-tight ${
                        BADGE_COLOR_MAP[item.badgeColor] || "border-emerald-500/30 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                      }`}
                    >
                      ✓ {item.badge}
                    </span>
                  </div>

                  {/* Authentic Testimonial Quote */}
                  <p className="text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-200/90 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Bottom Area: Project Tag & Client Profile */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10">
                  {/* Project Tag */}
                  <div className="mb-3 flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400/90 truncate">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={12} className="shrink-0" />
                    <span className="truncate">{item.projectTitle}</span>
                  </div>

                  {/* Client Identity */}
                  <div className="flex items-center gap-3">
                    {/* Stylized Vector Avatar */}
                    <VectorAvatar id={item.id} className="h-10 w-10 shrink-0 shadow-sm" />

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white truncate">
                          {item.name}
                        </h4>
                        <span
                          className="text-[9px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20 shrink-0"
                          title="Klien Terverifikasi"
                        >
                          ✓ Verified
                        </span>
                      </div>
                      <p className="text-[10.5px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {item.role} • {item.campusOrOrg}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
