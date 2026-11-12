"use client";

import React, { useState, useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  WhatsappIcon,
  Cancel01Icon,
  Menu01Icon,
  FlashIcon,
  Wrench01Icon,
  Mortarboard01Icon,
  Building03Icon,
  ArrowDown01Icon,
  ArrowRight01Icon,
  CreditCardIcon,
  ShieldCheckIcon,
  HelpCircleIcon,
} from "@hugeicons/core-free-icons";
import logoMarkImg from "../../../public/images/logo/logo-vertical-transparent.png";
import { getWaUrl, WA_DISPLAY } from "@/data/landing-data";

const emptySubscribe = () => () => {};

export function NavbarSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"layanan" | "biaya" | "tentang" | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  // Click outside to close active mega menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [mobileMenuOpen]);

  // Close drawer and mega menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleMenu = (key: "layanan" | "biaya" | "tentang") => {
    setOpenMenu((prev) => (prev === key ? null : key));
  };

  const closeMenu = () => {
    setOpenMenu(null);
  };

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetHash: string
  ) => {
    closeMenu();
    setMobileMenuOpen(false);

    if (typeof window !== "undefined") {
      const isHome =
        window.location.pathname === "/" || window.location.pathname === "";
      if (isHome) {
        const id = targetHash.replace(/^(\/)?#/, "");
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          const win = window as unknown as {
            __lenis?: {
              scrollTo: (
                target: HTMLElement,
                opts?: { offset?: number; duration?: number }
              ) => void;
            };
          };
          if (win.__lenis && typeof win.__lenis.scrollTo === "function") {
            win.__lenis.scrollTo(element, { offset: -80, duration: 1.1 });
          } else {
            const top = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: "smooth" });
          }
          window.history.pushState(null, "", `#${id}`);
        }
      }
    }
  };

  const isLayananOpen = openMenu === "layanan";
  const isBiayaOpen = openMenu === "biaya";
  const isTentangOpen = openMenu === "tentang";

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#060A14] backdrop-blur-xl transition-all">
        <div ref={navRef} className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-14 relative">
          {/* Left: Brand Logo */}
          <Link href="/" onClick={closeMenu} className="group flex items-center gap-2 sm:gap-3 shrink-0">
            <Image
              src={logoMarkImg}
              alt="ecoDigital — Jasa Pembuatan Website & Aplikasi Custom"
              width={320}
              height={100}
              priority
              loading="eager"
              unoptimized
              className="h-8 sm:h-10 lg:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-md"
            />
          </Link>

          {/* Center: Navigation Links with Click-to-Toggle & Snap-to-Navbar Mega Menu */}
          <nav className="hidden items-center gap-1.5 lg:gap-3 xl:gap-5 lg:flex whitespace-nowrap">
            {/* Menu 1: Layanan (Mega Menu Hostinger-Style 3 Kolom) */}
            <div>
              <button
                type="button"
                onClick={() => toggleMenu("layanan")}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  isLayananOpen
                    ? "text-emerald-300 bg-white/10 shadow-inner"
                    : "text-white/80 hover:text-emerald-300 hover:bg-white/5"
                }`}
                aria-expanded={isLayananOpen}
              >
                <span>Layanan</span>
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  size={12}
                  className={`transition-transform duration-200 ${
                    isLayananOpen ? "rotate-180 text-emerald-400" : "text-white/40"
                  }`}
                />
              </button>
            </div>

            {/* Menu 2: Portofolio */}
            <Link
              href="/#portofolio"
              onClick={(e) => handleAnchorClick(e, "#portofolio")}
              className="px-3 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-white/80 transition-all hover:text-emerald-300 hover:bg-white/5 whitespace-nowrap cursor-pointer"
            >
              Portofolio
            </Link>

            {/* Menu 3: Biaya & Paket */}
            <div>
              <button
                type="button"
                onClick={() => toggleMenu("biaya")}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  isBiayaOpen
                    ? "text-emerald-300 bg-white/10 shadow-inner"
                    : "text-white/80 hover:text-emerald-300 hover:bg-white/5"
                }`}
                aria-expanded={isBiayaOpen}
              >
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Biaya &amp; Paket</span>
                </span>
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  size={12}
                  className={`transition-transform duration-200 ${
                    isBiayaOpen ? "rotate-180 text-emerald-400" : "text-white/40"
                  }`}
                />
              </button>
            </div>

            {/* Menu 4: Tentang & FAQ */}
            <div>
              <button
                type="button"
                onClick={() => toggleMenu("tentang")}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  isTentangOpen
                    ? "text-emerald-300 bg-white/10 shadow-inner"
                    : "text-white/80 hover:text-emerald-300 hover:bg-white/5"
                }`}
                aria-expanded={isTentangOpen}
              >
                <span>Tentang</span>
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  size={12}
                  className={`transition-transform duration-200 ${
                    isTentangOpen ? "rotate-180 text-emerald-400" : "text-white/40"
                  }`}
                />
              </button>
            </div>
          </nav>

          {/* ─── Mega Menu Dropdown Panels (Posisi Naik Flush Tepat Di Bawah Header, Tetap Tampil Saat Di-Klik) ─── */}

          {/* Panel 1: Layanan (Mega Menu 3 Kolom Lebar 920px) */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 w-[920px] max-w-[calc(100vw-32px)] mt-0.5 z-50 transition-all duration-200 ease-out ${
              isLayananOpen
                ? "opacity-100 visible pointer-events-auto translate-y-0"
                : "opacity-0 invisible pointer-events-none -translate-y-2"
            }`}
          >
            <div className="rounded-2xl border border-white/20 bg-[#0A0F1D] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.98)] ring-1 ring-white/10 grid grid-cols-12 gap-5 text-left whitespace-normal">
              {/* Col 1 (3/12): Sidebar Kategori & Quick Info */}
              <div className="col-span-3 bg-white/[0.03] border border-white/5 rounded-xl p-3.5 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block px-2 mb-2">
                    Kategori Layanan
                  </span>
                  <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                    <span>👨‍💻</span>
                    <span>Direct Developer</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 text-xs font-medium transition-colors">
                    <span>⚡</span>
                    <span>Perbaikan Kilat</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 text-xs font-medium transition-colors">
                    <span>🎓</span>
                    <span>Skripsi &amp; Riset</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 text-xs font-medium transition-colors">
                    <span>🏢</span>
                    <span>Sistem Bisnis</span>
                  </div>
                </div>

                {/* Bottom Hotline Info */}
                <div className="mt-4 pt-3 border-t border-white/10 px-1">
                  <span className="text-[10px] text-white/40 block">WhatsApp Resmi:</span>
                  <span className="text-xs font-bold text-emerald-400 block mt-0.5">{WA_DISPLAY}</span>
                  <span className="text-[10px] text-white/50 block mt-0.5">Respon cepat &amp; cek error gratis</span>
                </div>
              </div>

              {/* Col 2 (5/12): Main 3 Services List */}
              <div className="col-span-5 flex flex-col justify-between space-y-2">
                <div className="space-y-2">
                  <Link
                    href="/#layanan"
                    onClick={(e) => handleAnchorClick(e, "#layanan")}
                    className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-white/[0.06]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 group-hover/item:bg-emerald-500/20 group-hover/item:border-emerald-400/50 transition-colors">
                      <HugeiconsIcon icon={Wrench01Icon} size={18} />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white group-hover/item:text-emerald-300">
                          Klinik Koding: Fix Error
                        </span>
                        <span className="rounded-full bg-emerald-950/80 border border-emerald-500/40 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-400">
                          ⚡ Kilat
                        </span>
                      </div>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-white/60">
                        Perbaikan bug PHP, Laravel, JS, Flutter, query macet &amp; tambah fitur.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/#layanan"
                    onClick={(e) => handleAnchorClick(e, "#layanan")}
                    className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-white/[0.06]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400 group-hover/item:bg-blue-500/20 group-hover/item:border-blue-400/50 transition-colors">
                      <HugeiconsIcon icon={Mortarboard01Icon} size={18} />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white group-hover/item:text-blue-300">
                          Partner Sistem: TA &amp; Skripsi
                        </span>
                        <span className="rounded-full bg-blue-950/80 border border-blue-500/40 px-1.5 py-0.5 text-[9px] font-semibold text-blue-400">
                          🎓 Siap Sidang
                        </span>
                      </div>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-white/60">
                        Sistem informasi, SPK, bimbingan live &amp; video bedah kode sampai paham.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/#layanan"
                    onClick={(e) => handleAnchorClick(e, "#layanan")}
                    className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-white/[0.06]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-teal-500/30 bg-teal-500/10 text-teal-400 group-hover/item:bg-teal-500/20 group-hover/item:border-teal-400/50 transition-colors">
                      <HugeiconsIcon icon={Building03Icon} size={18} />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white group-hover/item:text-teal-300">
                          Web Instansi &amp; Bisnis
                        </span>
                        <span className="rounded-full bg-teal-950/80 border border-teal-500/40 px-1.5 py-0.5 text-[9px] font-semibold text-teal-400">
                          🏢 Siap Pakai
                        </span>
                      </div>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-white/60">
                        Website sekolah, profil instansi, kasir (POS), inventori &amp; langsung online.
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Bottom Alur Kerja Link */}
                <div className="pt-2 border-t border-white/10">
                  <Link
                    href="/#cara-kerja"
                    onClick={(e) => handleAnchorClick(e, "#cara-kerja")}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] text-white/70 hover:text-emerald-300 hover:bg-white/5 transition-colors"
                  >
                    <span className="font-medium">Lihat 4 Langkah Alur Kerja Anti-Ghosting</span>
                    <HugeiconsIcon icon={ArrowRight01Icon} size={13} className="text-emerald-400" />
                  </Link>
                </div>
              </div>

              {/* Col 3 (4/12): Featured Guarantee Card (Seperti Card Kanan Hostinger) */}
              <div className="col-span-4 rounded-xl border border-emerald-400/30 bg-gradient-to-br from-emerald-950/60 via-slate-900 to-blue-950/60 p-4 flex flex-col justify-between shadow-lg">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300 uppercase tracking-wider">
                    <span>🛡️</span>
                    <span>Garansi ecoDigital</span>
                  </span>

                  <h4 className="mt-3 text-sm font-extrabold text-white leading-snug">
                    Tanpa DP Mengambang &amp; Source Code 100% Hak Milik
                  </h4>

                  <p className="mt-2 text-xs leading-relaxed text-white/70">
                    Bayar bertahap sesuai progres yang jalan di laptopmu. Diskusi santai langsung dengan developer tanpa perantara sales.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10">
                  <a
                    href={getWaUrl("Halo Mas (ecoDigital), saya mau konsultasi langsung untuk kodingan / sistem saya.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-500/30 hover:from-emerald-400 hover:to-teal-400 transition-all hover:scale-[1.02]"
                  >
                    <HugeiconsIcon icon={WhatsappIcon} size={15} />
                    <span>Diskusi Langsung via WA →</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Panel 2: Biaya & Paket (2 Kolom Lebar 660px) */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 w-[660px] max-w-[calc(100vw-32px)] mt-0.5 z-50 transition-all duration-200 ease-out ${
              isBiayaOpen
                ? "opacity-100 visible pointer-events-auto translate-y-0"
                : "opacity-0 invisible pointer-events-none -translate-y-2"
            }`}
          >
            <div className="rounded-2xl border border-white/20 bg-[#0A0F1D] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.98)] ring-1 ring-white/10 grid grid-cols-2 gap-4 text-left whitespace-normal">
              {/* Col 1: Paket Harga */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block px-2 mb-2">
                  Pilihan Paket
                </span>
                <Link
                  href="/#paket-harga"
                  onClick={(e) => handleAnchorClick(e, "#paket-harga")}
                  className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-white/[0.06]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-colors group-hover/item:border-emerald-400/50 group-hover/item:bg-emerald-500/20 group-hover/item:text-emerald-400">
                    <HugeiconsIcon icon={CreditCardIcon} size={18} />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white group-hover/item:text-emerald-300">
                        Penyelamat Fix Error
                      </span>
                      <span className="rounded-full bg-emerald-950/80 border border-emerald-500/40 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-400">
                        Mulai 150rb
                      </span>
                    </div>
                    <p className="mt-0.5 text-[11px] leading-snug text-white/60">
                      Solusi kilat revisi mentok, benerin query &amp; bayar setelah beres.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/#paket-harga"
                  onClick={(e) => handleAnchorClick(e, "#paket-harga")}
                  className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-white/[0.06]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 transition-colors group-hover/item:scale-105">
                    <HugeiconsIcon icon={FlashIcon} size={18} />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white group-hover/item:text-emerald-300">
                        Paket Reguler Web Baru
                      </span>
                      <span className="rounded-full bg-emerald-500/20 border border-emerald-400/30 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-300">
                        Mulai 499rb
                      </span>
                    </div>
                    <p className="mt-0.5 text-[11px] leading-snug text-white/60">
                      Tugas Akhir, SPK, Sistem Informasi, atau Landing Page UMKM.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/#paket-harga"
                  onClick={(e) => handleAnchorClick(e, "#paket-harga")}
                  className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-white/[0.06]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400 transition-colors group-hover/item:scale-105">
                    <HugeiconsIcon icon={Building03Icon} size={18} />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white group-hover/item:text-blue-300">
                        Sistem Skala Penuh
                      </span>
                      <span className="rounded-full bg-blue-950/80 border border-blue-500/40 px-1.5 py-0.5 text-[9px] font-semibold text-blue-400">
                        Custom App
                      </span>
                    </div>
                    <p className="mt-0.5 text-[11px] leading-snug text-white/60">
                      Aplikasi instansi, mobile Flutter, integrasi API &amp; deploy server.
                    </p>
                  </div>
                </Link>
              </div>

              {/* Col 2: Featured Kalkulator Biaya */}
              <div className="rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-950/40 via-slate-900 to-emerald-950/40 p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 px-2.5 py-0.5 text-[10px] font-bold text-cyan-300 uppercase tracking-wider">
                      <span>⚡</span>
                      <span>Hitung Mandiri</span>
                    </span>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                    </span>
                  </div>

                  <h4 className="mt-3 text-sm font-extrabold text-white leading-snug">
                    Simulasi Biaya Interaktif
                  </h4>

                  <p className="mt-2 text-xs leading-relaxed text-white/70">
                    Klik kategori sistem dan centang fasilitas tambahan yang kamu butuhkan. Dapatkan estimasi kasar instan lalu bawa hasilnya ke WhatsApp untuk negosiasi santai.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10">
                  <Link
                    href="/#kalkulator-biaya"
                    onClick={(e) => handleAnchorClick(e, "#kalkulator-biaya")}
                    className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-xs font-bold text-black hover:bg-cyan-400 transition-all hover:scale-[1.02]"
                  >
                    <HugeiconsIcon icon={FlashIcon} size={15} />
                    <span>Coba Kalkulator Biaya ↓</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Panel 3: Tentang & FAQ (2 Kolom Lebar 580px, Posisi Rata Kanan) */}
          <div
            className={`absolute top-full right-4 lg:right-14 w-[580px] max-w-[calc(100vw-32px)] mt-0.5 z-50 transition-all duration-200 ease-out ${
              isTentangOpen
                ? "opacity-100 visible pointer-events-auto translate-y-0"
                : "opacity-0 invisible pointer-events-none -translate-y-2"
            }`}
          >
            <div className="rounded-2xl border border-white/20 bg-[#0A0F1D] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.98)] ring-1 ring-white/10 grid grid-cols-2 gap-4 text-left whitespace-normal">
              {/* Col 1: Keunggulan */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block px-2 mb-2">
                  Standar Kerja
                </span>
                <Link
                  href="/#keunggulan"
                  onClick={(e) => handleAnchorClick(e, "#keunggulan")}
                  className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-white/[0.06]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 transition-colors group-hover/item:border-emerald-400/50 group-hover/item:bg-emerald-500/20">
                    <HugeiconsIcon icon={ShieldCheckIcon} size={18} />
                  </span>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-white group-hover/item:text-emerald-300 block">
                      4 Jaminan Nyata
                    </span>
                    <p className="mt-0.5 text-[11px] leading-snug text-white/60">
                      Tanpa DP mengambang &amp; source code 100% hak milik.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/#cara-kerja"
                  onClick={(e) => handleAnchorClick(e, "#cara-kerja")}
                  className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-white/[0.06]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400 transition-colors group-hover/item:scale-105">
                    <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
                  </span>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-white group-hover/item:text-blue-300 block">
                      Alur Anti-Ghosting
                    </span>
                    <p className="mt-0.5 text-[11px] leading-snug text-white/60">
                      Bisa dipantau live dari awal sampai serah terima tuntas.
                    </p>
                  </div>
                </Link>
              </div>

              {/* Col 2: Bantuan & FAQ */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block px-2 mb-2">
                  Bantuan &amp; Kontak
                </span>
                <Link
                  href="/#faq"
                  onClick={(e) => handleAnchorClick(e, "#faq")}
                  className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-white/[0.06]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-colors group-hover/item:border-emerald-400/50 group-hover/item:bg-emerald-500/20 group-hover/item:text-emerald-400">
                    <HugeiconsIcon icon={HelpCircleIcon} size={18} />
                  </span>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-white group-hover/item:text-emerald-300 block">
                      Tanya Jawab (FAQ)
                    </span>
                    <p className="mt-0.5 text-[11px] leading-snug text-white/60">
                      Jawaban jujur seputar garansi, revisi, &amp; bimbingan.
                    </p>
                  </div>
                </Link>

                <a
                  href={getWaUrl("Halo Mas (ecoDigital), saya mau tanya-tanya dulu seputar layanan.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-white/[0.06]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 transition-colors group-hover/item:scale-105">
                    <HugeiconsIcon icon={WhatsappIcon} size={18} />
                  </span>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-emerald-300 group-hover/item:text-emerald-200 block">
                      Chat WhatsApp Langsung
                    </span>
                    <p className="mt-0.5 text-[11px] leading-snug text-white/60">
                      {WA_DISPLAY} (Fast respon &amp; gratis).
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Direct WhatsApp CTA Button & Mobile/Tablet Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={getWaUrl(
                "Halo Mas (ecoDigital), saya mau konsultasi pembuatan website / sistem."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-3 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:from-emerald-400 hover:to-teal-400 hover:scale-105 active:scale-95 whitespace-nowrap shrink-0"
            >
              <HugeiconsIcon icon={WhatsappIcon} size={15} />
              <span className="hidden sm:inline">Chat Developer</span>
              <span className="sm:hidden">Ngobrol Yuk!</span>
            </a>

            {/* Mobile & Tablet Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-colors hover:bg-white/10 hover:text-white lg:hidden cursor-pointer"
              aria-label="Buka Menu Navigasi"
              aria-expanded={mobileMenuOpen}
            >
              <HugeiconsIcon icon={Menu01Icon} size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile & Tablet Right Drawer via Portal (Full Width) ──────────── */}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-[999] lg:hidden transition-all duration-300 ${
              mobileMenuOpen
                ? "pointer-events-auto opacity-100 visible"
                : "pointer-events-none opacity-0 invisible"
            }`}
          >
            {/* 100% Solid Opaque Full Width Panel Sliding from Right */}
            <div
              className={`fixed inset-0 z-[1000] w-full h-full h-[100dvh] bg-[#060A14] p-5 sm:p-8 flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-out ${
                mobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
              role="dialog"
              aria-modal="true"
              aria-label="Menu Navigasi Mobile"
            >
              <div className="mx-auto w-full max-w-lg flex flex-col justify-between h-full">
                {/* Header: Logo & Close Button */}
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <Link
                      href="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2"
                    >
                      <Image
                        src={logoMarkImg}
                        alt="ecoDigital — Jasa Pembuatan Website & Aplikasi Custom"
                        width={180}
                        height={56}
                        unoptimized
                        className="h-8 w-auto object-contain"
                      />
                    </Link>

                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-colors cursor-pointer"
                      aria-label="Tutup Menu"
                    >
                      <HugeiconsIcon icon={Cancel01Icon} size={22} />
                    </button>
                  </div>

                  {/* Nav Links */}
                  <nav className="flex flex-col gap-2 text-base font-semibold">
                    <Link
                      href="/#layanan"
                      onClick={(e) => handleAnchorClick(e, "#layanan")}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-white/90 hover:text-white hover:bg-white/10 active:bg-white/15 transition-colors"
                    >
                      <span>Layanan</span>
                      <span className="text-xs text-white/40">01</span>
                    </Link>

                    <Link
                      href="/#portofolio"
                      onClick={(e) => handleAnchorClick(e, "#portofolio")}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-white/90 hover:text-white hover:bg-white/10 active:bg-white/15 transition-colors"
                    >
                      <span>Portofolio</span>
                      <span className="text-xs text-white/40">02</span>
                    </Link>

                    <Link
                      href="/#keunggulan"
                      onClick={(e) => handleAnchorClick(e, "#keunggulan")}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-white/90 hover:text-white hover:bg-white/10 active:bg-white/15 transition-colors"
                    >
                      <span>Keunggulan</span>
                      <span className="text-xs text-white/40">03</span>
                    </Link>

                    <Link
                      href="/#cara-kerja"
                      onClick={(e) => handleAnchorClick(e, "#cara-kerja")}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-white/90 hover:text-white hover:bg-white/10 active:bg-white/15 transition-colors"
                    >
                      <span>Alur Kerja</span>
                      <span className="text-xs text-white/40">04</span>
                    </Link>

                    <Link
                      href="/#paket-harga"
                      onClick={(e) => handleAnchorClick(e, "#paket-harga")}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-white/90 hover:text-white hover:bg-white/10 active:bg-white/15 transition-colors"
                    >
                      <span>Paket Harga</span>
                      <span className="text-xs text-emerald-400 font-bold">Mulai 150rb</span>
                    </Link>

                    <Link
                      href="/#kalkulator-biaya"
                      onClick={(e) => handleAnchorClick(e, "#kalkulator-biaya")}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 font-bold hover:bg-emerald-900/60 active:bg-emerald-800/60 transition-colors"
                    >
                      <span className="flex items-center gap-2.5">
                        <HugeiconsIcon icon={FlashIcon} size={18} />
                        <span>Simulasi Biaya</span>
                      </span>
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    </Link>

                    <Link
                      href="/#faq"
                      onClick={(e) => handleAnchorClick(e, "#faq")}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-white/90 hover:text-white hover:bg-white/10 active:bg-white/15 transition-colors"
                    >
                      <span>Tanya Jawab (FAQ)</span>
                      <span className="text-xs text-white/40">06</span>
                    </Link>
                  </nav>
                </div>

                {/* Footer WhatsApp Button */}
                <div className="pt-6 border-t border-white/10 space-y-3 mt-4">
                  <a
                    href={getWaUrl(
                      "Halo Mas (ecoDigital), saya mau konsultasi pembuatan website / sistem."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 py-4 px-5 text-sm font-bold text-white shadow-lg shadow-emerald-500/30 hover:scale-[1.01] active:scale-95 transition-all"
                  >
                    <HugeiconsIcon icon={WhatsappIcon} size={20} />
                    <span>Chat Developer ({WA_DISPLAY})</span>
                  </a>
                  <p className="text-xs text-center text-white/50">
                    ⚡ Respon Cepat • Diskusi Bebas Tanpa Biaya
                  </p>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
