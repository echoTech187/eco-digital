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
  LaptopProgrammingIcon,
  ApiIcon,
  Building03Icon,
  ArrowDown01Icon,
  ArrowRight01Icon,
  CreditCardIcon,
  ShieldCheckIcon,
  HelpCircleIcon,
  PencilEdit02Icon,
  StarIcon,
} from "@hugeicons/core-free-icons";
import logoMarkImg from "../../../public/images/logo/logo-vertical-transparent.png";
import logoMarkLightImg from "../../../public/images/logo/logo-vertical-light.png";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { getWaUrl, WA_DISPLAY } from "@/data/landing-data";

const emptySubscribe = () => () => {};

function subscribeScroll(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function getScrollSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return window.scrollY > 10;
}

export function NavbarSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"layanan" | "biaya" | "tentang" | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const isScrolled = useSyncExternalStore(subscribeScroll, getScrollSnapshot, () => false);

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

    const id = targetHash.replace(/^(\/)?#/, "");

    if (typeof window !== "undefined") {
      const isHome =
        window.location.pathname === "/" || window.location.pathname === "";
      if (isHome) {
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
          const targetOffset = id === "paket-harga" || id === "harga" ? 0 : -70;
          if (win.__lenis && typeof win.__lenis.scrollTo === "function") {
            win.__lenis.scrollTo(element, { offset: targetOffset, duration: 1.1 });
          } else {
            const top = element.getBoundingClientRect().top + window.scrollY + targetOffset;
            window.scrollTo({ top, behavior: "smooth" });
          }
          window.history.pushState(null, "", `#${id}`);
        }
      } else {
        // Cross-page navigation: user is on /simulasi-biaya or /contact
        // Store target ID in sessionStorage so when homepage mounts it scrolls down
        try {
          sessionStorage.setItem("ecodigital_scroll_target", id);
        } catch {
          // ignore
        }
      }
    }
  };

  const isLayananOpen = openMenu === "layanan";
  const isBiayaOpen = openMenu === "biaya";
  const isTentangOpen = openMenu === "tentang";
  const isHeaderOpaque = isScrolled || openMenu !== null;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isHeaderOpaque
            ? "border-b border-slate-200/80 dark:border-white/10 bg-white/85 dark:bg-[#060A14]/85 backdrop-blur-xl shadow-xs dark:shadow-md"
            : "border-b border-transparent bg-transparent backdrop-blur-none shadow-none"
        }`}
      >
        <div ref={navRef} className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-14 relative">
          {/* Left: Brand Logo (Adaptive for Dark & Light Mode) */}
          <Link href="/" onClick={closeMenu} className="group flex items-center gap-2 sm:gap-3 shrink-0">
            <Image
              src={logoMarkImg}
              alt="ecoDigital — Jasa Pembuatan Website & Aplikasi Custom"
              width={320}
              height={100}
              priority
              loading="eager"
              unoptimized
              className="hidden dark:block h-8 sm:h-10 lg:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-md aspect-[320/100]"
              style={{ aspectRatio: "320 / 100" }}
            />
            <Image
              src={logoMarkLightImg}
              alt="ecoDigital — Jasa Pembuatan Website & Aplikasi Custom"
              width={320}
              height={100}
              priority
              loading="eager"
              unoptimized
              className="block dark:hidden h-8 sm:h-10 lg:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-xs aspect-[320/100]"
              style={{ aspectRatio: "320 / 100" }}
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
                    ? "text-emerald-700 bg-emerald-500/10 shadow-xs dark:text-emerald-300 dark:bg-white/10 dark:shadow-inner"
                    : "text-slate-700 hover:text-emerald-600 hover:bg-slate-100 dark:text-white/80 dark:hover:text-emerald-300 dark:hover:bg-white/5"
                }`}
                aria-expanded={isLayananOpen}
              >
                <span>Layanan</span>
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  size={12}
                  className={`transition-transform duration-200 ${
                    isLayananOpen
                      ? "rotate-180 text-emerald-600 dark:text-emerald-400"
                      : "text-slate-400 dark:text-white/40"
                  }`}
                />
              </button>
            </div>

            {/* Menu 2: Portofolio */}
            <Link
              href="/#portofolio"
              onClick={(e) => handleAnchorClick(e, "#portofolio")}
              className="px-3 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-emerald-600 hover:bg-slate-100 dark:text-white/80 dark:hover:text-emerald-300 dark:hover:bg-white/5 whitespace-nowrap cursor-pointer transition-all"
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
                    ? "text-emerald-700 bg-emerald-500/10 shadow-xs dark:text-emerald-300 dark:bg-white/10 dark:shadow-inner"
                    : "text-slate-700 hover:text-emerald-600 hover:bg-slate-100 dark:text-white/80 dark:hover:text-emerald-300 dark:hover:bg-white/5"
                }`}
                aria-expanded={isBiayaOpen}
              >
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                  <span>Biaya &amp; Paket</span>
                </span>
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  size={12}
                  className={`transition-transform duration-200 ${
                    isBiayaOpen
                      ? "rotate-180 text-emerald-600 dark:text-emerald-400"
                      : "text-slate-400 dark:text-white/40"
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
                    ? "text-emerald-700 bg-emerald-500/10 shadow-xs dark:text-emerald-300 dark:bg-white/10 dark:shadow-inner"
                    : "text-slate-700 hover:text-emerald-600 hover:bg-slate-100 dark:text-white/80 dark:hover:text-emerald-300 dark:hover:bg-white/5"
                }`}
                aria-expanded={isTentangOpen}
              >
                <span>Tentang</span>
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  size={12}
                  className={`transition-transform duration-200 ${
                    isTentangOpen
                      ? "rotate-180 text-emerald-600 dark:text-emerald-400"
                      : "text-slate-400 dark:text-white/40"
                  }`}
                />
              </button>
            </div>
          </nav>

          {/* ─── Mega Menu Dropdown Panels (Posisi Naik Flush Tepat Di Bawah Header, Tetap Tampil Saat Di-Klik) ─── */}

          {/* Panel 1: Layanan (Mega Menu 2 Kolom Lebar 760px) */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 w-[760px] max-w-[calc(100vw-32px)] mt-0.5 z-50 transition-all duration-200 ease-out ${
              isLayananOpen
                ? "opacity-100 visible pointer-events-auto translate-y-0"
                : "opacity-0 invisible pointer-events-none -translate-y-2"
            }`}
          >
            <div className="rounded-2xl border border-slate-200 dark:border-white/20 bg-white dark:bg-[#0A0F1D] p-5 shadow-[0_20px_50px_rgba(15,23,42,0.12)] dark:shadow-[0_30px_90px_rgba(0,0,0,0.98)] ring-1 ring-slate-900/5 dark:ring-white/10 grid grid-cols-12 gap-5 text-left whitespace-normal text-slate-800 dark:text-white">
              {/* Col 1 (7/12): Main 3 Services List */}
              <div className="col-span-7 flex flex-col justify-between space-y-2">
                <div className="space-y-2">
                  <Link
                    href="/#aplikasi-custom"
                    onClick={(e) => handleAnchorClick(e, "#aplikasi-custom")}
                    className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-slate-100 dark:hover:bg-white/[0.06]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover/item:bg-emerald-500/20 group-hover/item:border-emerald-400/50 transition-colors">
                      <HugeiconsIcon icon={LaptopProgrammingIcon} size={18} />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900 group-hover/item:text-emerald-600 dark:text-white dark:group-hover/item:text-emerald-300">
                          Aplikasi Custom
                        </span>
                        <span className="rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-500/30 dark:border-emerald-500/40 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-700 dark:text-emerald-400">
                          🚀 Web &amp; Mobile
                        </span>
                      </div>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500 dark:text-white/60">
                        Pengembangan aplikasi web &amp; mobile custom sesuai alur operasional dan kebutuhan sistem instansi.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/#jasa-api-backend"
                    onClick={(e) => handleAnchorClick(e, "#jasa-api-backend")}
                    className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-slate-100 dark:hover:bg-white/[0.06]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400 group-hover/item:bg-violet-500/20 group-hover/item:border-violet-400/50 transition-colors">
                      <HugeiconsIcon icon={ApiIcon} size={18} />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900 group-hover/item:text-violet-600 dark:text-white dark:group-hover/item:text-violet-300">
                          Jasa API &amp; Backend
                        </span>
                        <span className="rounded-full bg-violet-100 dark:bg-violet-950/80 border border-violet-500/30 dark:border-violet-500/40 px-1.5 py-0.5 text-[9px] font-semibold text-violet-700 dark:text-violet-400">
                          ⚙️ High Performance
                        </span>
                      </div>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500 dark:text-white/60">
                        REST API clean architecture, database design, integrasi Midtrans &amp; WA API.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/#web-instansi-bisnis"
                    onClick={(e) => handleAnchorClick(e, "#web-instansi-bisnis")}
                    className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-slate-100 dark:hover:bg-white/[0.06]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-400 group-hover/item:bg-teal-500/20 group-hover/item:border-teal-400/50 transition-colors">
                      <HugeiconsIcon icon={Building03Icon} size={18} />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900 group-hover/item:text-teal-600 dark:text-white dark:group-hover/item:text-teal-300">
                          Web Instansi &amp; Bisnis
                        </span>
                        <span className="rounded-full bg-teal-100 dark:bg-teal-950/80 border border-teal-500/30 dark:border-teal-500/40 px-1.5 py-0.5 text-[9px] font-semibold text-teal-700 dark:text-teal-400">
                          🏢 Siap Online
                        </span>
                      </div>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500 dark:text-white/60">
                        Website sekolah, profil instansi, kasir (POS), inventori &amp; langsung online.
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Bottom Alur Kerja Link */}
                <div className="pt-2 border-t border-slate-200 dark:border-white/10">
                  <Link
                    href="/#cara-kerja"
                    onClick={(e) => handleAnchorClick(e, "#cara-kerja")}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] text-slate-600 dark:text-white/70 hover:text-emerald-600 dark:hover:text-emerald-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                  >
                    <span className="font-medium">Lihat 4 Langkah Alur Kerja Anti-Ghosting</span>
                    <HugeiconsIcon icon={ArrowRight01Icon} size={13} className="text-emerald-600 dark:text-emerald-400" />
                  </Link>
                </div>
              </div>

              {/* Col 2 (5/12): Featured Guarantee Card (Seperti Card Kanan Hostinger) */}
              <div className="col-span-5 rounded-xl border border-emerald-400/30 bg-gradient-to-br from-emerald-950/60 via-slate-900 to-blue-950/60 p-4 flex flex-col justify-between shadow-lg">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300 uppercase tracking-wider">
                    <span>🛡️</span>
                    <span>Garansi ecoDigital</span>
                  </span>

                  <h4 className="mt-3 text-sm font-extrabold text-white leading-snug">
                    Tanpa DP Mengambang &amp; Transparansi Penuh
                  </h4>

                  <p className="mt-2 text-xs leading-relaxed text-white/70">
                    Bayar bertahap sesuai progres live staging yang terbukti jalan normal. Diskusi langsung bersama lead developer tanpa perantara sales.
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
            <div className="rounded-2xl border border-slate-200 dark:border-white/20 bg-white dark:bg-[#0A0F1D] p-5 shadow-[0_20px_50px_rgba(15,23,42,0.12)] dark:shadow-[0_30px_90px_rgba(0,0,0,0.98)] ring-1 ring-slate-900/5 dark:ring-white/10 grid grid-cols-2 gap-4 text-left whitespace-normal text-slate-800 dark:text-white">
              {/* Col 1: Paket Harga */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block px-2 mb-2">
                  Pilihan Paket
                </span>
                <Link
                  href="/#paket-harga"
                  onClick={(e) => handleAnchorClick(e, "#paket-harga")}
                  className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-slate-100 dark:hover:bg-white/[0.06]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 dark:border-white/20 bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white transition-colors group-hover/item:border-emerald-500/50 group-hover/item:bg-emerald-500/20 group-hover/item:text-emerald-600 dark:group-hover/item:text-emerald-400">
                    <HugeiconsIcon icon={CreditCardIcon} size={18} />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900 group-hover/item:text-emerald-600 dark:text-white dark:group-hover/item:text-emerald-300">
                        Penyelamat Fix Error
                      </span>
                      <span className="rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-500/30 dark:border-emerald-500/40 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-700 dark:text-emerald-400">
                        Mulai 150rb
                      </span>
                    </div>
                    <p className="mt-0.5 text-[11px] leading-snug text-slate-500 dark:text-white/60">
                      Solusi kilat revisi mentok, benerin query &amp; bayar setelah beres.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/#paket-harga"
                  onClick={(e) => handleAnchorClick(e, "#paket-harga")}
                  className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-slate-100 dark:hover:bg-white/[0.06]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 transition-colors group-hover/item:scale-105">
                    <HugeiconsIcon icon={FlashIcon} size={18} />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900 group-hover/item:text-emerald-600 dark:text-white dark:group-hover/item:text-emerald-300">
                        Paket Reguler Web Baru
                      </span>
                      <span className="rounded-full bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-500/30 dark:border-emerald-400/30 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-700 dark:text-emerald-300">
                        Mulai 499rb
                      </span>
                    </div>
                    <p className="mt-0.5 text-[11px] leading-snug text-slate-500 dark:text-white/60">
                      Aplikasi Custom, Web Bisnis, Sistem Informasi, atau Landing Page.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/#paket-harga"
                  onClick={(e) => handleAnchorClick(e, "#paket-harga")}
                  className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-slate-100 dark:hover:bg-white/[0.06]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 transition-colors group-hover/item:scale-105">
                    <HugeiconsIcon icon={Building03Icon} size={18} />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900 group-hover/item:text-blue-600 dark:text-white dark:group-hover/item:text-blue-300">
                        Sistem Skala Penuh
                      </span>
                      <span className="rounded-full bg-blue-100 dark:bg-blue-950/80 border border-blue-500/30 dark:border-blue-500/40 px-1.5 py-0.5 text-[9px] font-semibold text-blue-700 dark:text-blue-400">
                        Custom App
                      </span>
                    </div>
                    <p className="mt-0.5 text-[11px] leading-snug text-slate-500 dark:text-white/60">
                      Aplikasi instansi, mobile Flutter, integrasi API &amp; deploy server.
                    </p>
                  </div>
                </Link>
              </div>

              {/* Col 2: Featured Kalkulator Biaya */}
              <div className="rounded-xl border border-cyan-500/30 dark:border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 via-slate-50 to-emerald-500/10 dark:from-cyan-950/40 dark:via-slate-900 dark:to-emerald-950/40 p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 px-2.5 py-0.5 text-[10px] font-bold text-cyan-700 dark:text-cyan-300 uppercase tracking-wider">
                      <span>⚡</span>
                      <span>Hitung Mandiri</span>
                    </span>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                    </span>
                  </div>

                  <h4 className="mt-3 text-sm font-extrabold text-slate-900 dark:text-white leading-snug">
                    Simulasi Biaya Interaktif
                  </h4>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-white/70">
                    Klik kategori sistem dan centang fasilitas tambahan yang kamu butuhkan. Dapatkan estimasi kasar instan lalu bawa hasilnya ke WhatsApp untuk negosiasi santai.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10">
                  <Link
                    href="/simulasi-biaya"
                    prefetch={false}
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition-all hover:scale-[1.02]"
                  >
                    <HugeiconsIcon icon={FlashIcon} size={15} />
                    <span>Coba Kalkulator Biaya →</span>
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
            <div className="rounded-2xl border border-slate-200 dark:border-white/20 bg-white dark:bg-[#0A0F1D] p-5 shadow-[0_20px_50px_rgba(15,23,42,0.12)] dark:shadow-[0_30px_90px_rgba(0,0,0,0.98)] ring-1 ring-slate-900/5 dark:ring-white/10 grid grid-cols-2 gap-4 text-left whitespace-normal text-slate-800 dark:text-white">
              {/* Col 1: Keunggulan */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block px-2 mb-2">
                  Standar Kerja
                </span>
                <Link
                  href="/#keunggulan"
                  onClick={(e) => handleAnchorClick(e, "#keunggulan")}
                  className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-slate-100 dark:hover:bg-white/[0.06]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 transition-colors group-hover/item:border-emerald-500/50 group-hover/item:bg-emerald-500/20">
                    <HugeiconsIcon icon={ShieldCheckIcon} size={18} />
                  </span>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-slate-900 group-hover/item:text-emerald-600 dark:text-white dark:group-hover/item:text-emerald-300 block">
                      4 Jaminan Nyata
                    </span>
                    <p className="mt-0.5 text-[11px] leading-snug text-slate-500 dark:text-white/60">
                      Tanpa DP mengambang &amp; progres transparan bergaransi.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/#cara-kerja"
                  onClick={(e) => handleAnchorClick(e, "#cara-kerja")}
                  className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-slate-100 dark:hover:bg-white/[0.06]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 transition-colors group-hover/item:scale-105">
                    <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
                  </span>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-slate-900 group-hover/item:text-blue-600 dark:text-white dark:group-hover/item:text-blue-300 block">
                      Alur Anti-Ghosting
                    </span>
                    <p className="mt-0.5 text-[11px] leading-snug text-slate-500 dark:text-white/60">
                      Bisa dipantau live dari awal sampai serah terima tuntas.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/#testimoni"
                  onClick={(e) => handleAnchorClick(e, "#testimoni")}
                  className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-slate-100 dark:hover:bg-white/[0.06]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-500 dark:text-amber-400 transition-colors group-hover/item:border-amber-500/50 group-hover/item:bg-amber-500/20">
                    <HugeiconsIcon icon={StarIcon} size={18} className="fill-amber-500 dark:fill-amber-400" />
                  </span>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-slate-900 group-hover/item:text-amber-600 dark:text-white dark:group-hover/item:text-amber-300 block">
                      Testimoni Klien
                    </span>
                    <p className="mt-0.5 text-[11px] leading-snug text-slate-500 dark:text-white/60">
                      Rating 5.0 ★ &amp; cerita sukses sistem go-live.
                    </p>
                  </div>
                </Link>
              </div>

              {/* Col 2: Bantuan & FAQ */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 block px-2 mb-2">
                  Bantuan &amp; Kontak
                </span>
                <Link
                  href="/contact"
                  prefetch={false}
                  onClick={closeMenu}
                  className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-slate-100 dark:hover:bg-white/[0.06]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 transition-colors group-hover/item:border-cyan-500/50 group-hover/item:bg-cyan-500/20">
                    <HugeiconsIcon icon={PencilEdit02Icon} size={18} />
                  </span>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-slate-900 group-hover/item:text-cyan-600 dark:text-white dark:group-hover/item:text-cyan-300 block">
                      Formulir Brief Proyek
                    </span>
                    <p className="mt-0.5 text-[11px] leading-snug text-slate-500 dark:text-white/60">
                      Isi rincian kebutuhan di halaman konsultasi terpisah.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/#faq"
                  onClick={(e) => handleAnchorClick(e, "#faq")}
                  className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-slate-100 dark:hover:bg-white/[0.06]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 dark:border-white/20 bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white transition-colors group-hover/item:border-emerald-500/50 group-hover/item:bg-emerald-500/20 group-hover/item:text-emerald-600 dark:group-hover/item:text-emerald-400">
                    <HugeiconsIcon icon={HelpCircleIcon} size={18} />
                  </span>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-slate-900 group-hover/item:text-emerald-600 dark:text-white dark:group-hover/item:text-emerald-300 block">
                      Tanya Jawab (FAQ)
                    </span>
                    <p className="mt-0.5 text-[11px] leading-snug text-slate-500 dark:text-white/60">
                      Jawaban jujur seputar alur kerja, harga paket, &amp; garansi teknis.
                    </p>
                  </div>
                </Link>

                <a
                  href={getWaUrl("Halo Mas (ecoDigital), saya mau tanya-tanya dulu seputar layanan.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-slate-100 dark:hover:bg-white/[0.06]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 transition-colors group-hover/item:scale-105">
                    <HugeiconsIcon icon={WhatsappIcon} size={18} />
                  </span>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 group-hover/item:text-emerald-600 dark:group-hover/item:text-emerald-200 block">
                      Chat WhatsApp Langsung
                    </span>
                    <p className="mt-0.5 text-[11px] leading-snug text-slate-500 dark:text-white/60">
                      {WA_DISPLAY} (Fast respon &amp; gratis).
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Theme Switcher, Direct WhatsApp CTA Button & Mobile/Tablet Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <ThemeToggle variant="navbar" />

            <a
              href={getWaUrl(
                "Halo Mas (ecoDigital), saya mau konsultasi pembuatan website / sistem."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-3 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:from-emerald-400 hover:to-teal-400 hover:scale-105 active:scale-95 whitespace-nowrap shrink-0"
            >
              <HugeiconsIcon icon={WhatsappIcon} size={15} />
              <span className="hidden sm:inline">Konsultasi Sekarang</span>
              <span className="sm:hidden">Konsultasi</span>
            </a>

            {/* Mobile & Tablet Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-slate-700 dark:text-white/80 transition-colors hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-950 dark:hover:text-white lg:hidden cursor-pointer"
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
              className={`fixed inset-0 z-[1000] w-full h-full h-[100dvh] bg-white dark:bg-[#060A14] text-slate-900 dark:text-white p-5 sm:p-8 flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-out ${
                mobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
              role="dialog"
              aria-modal="true"
              aria-label="Menu Navigasi Mobile"
            >
              <div className="mx-auto w-full max-w-lg flex flex-col justify-between h-full">
                {/* Header: Logo & Close Button */}
                <div>
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4 mb-4">
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
                        priority
                        loading="eager"
                        unoptimized
                        className="hidden dark:block h-8 w-auto object-contain aspect-[180/56]"
                        style={{ aspectRatio: "180 / 56" }}
                      />
                      <Image
                        src={logoMarkLightImg}
                        alt="ecoDigital — Jasa Pembuatan Website & Aplikasi Custom"
                        width={180}
                        height={56}
                        priority
                        loading="eager"
                        unoptimized
                        className="block dark:hidden h-8 w-auto object-contain aspect-[180/56]"
                        style={{ aspectRatio: "180 / 56" }}
                      />
                    </Link>

                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white/80 hover:bg-slate-200 dark:hover:bg-white/20 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer"
                      aria-label="Tutup Menu"
                    >
                      <HugeiconsIcon icon={Cancel01Icon} size={22} />
                    </button>
                  </div>

                  {/* Mobile Theme Toggle Row */}
                  <div className="mb-4">
                    <ThemeToggle variant="drawer" />
                  </div>

                  {/* Nav Links */}
                  <nav className="flex flex-col gap-2 text-base font-semibold">
                    <Link
                      href="/#layanan"
                      onClick={(e) => handleAnchorClick(e, "#layanan")}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-slate-800 dark:text-white/90 hover:text-emerald-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 active:bg-slate-200 dark:active:bg-white/15 transition-colors"
                    >
                      <span>Layanan</span>
                      <span className="text-xs text-slate-400 dark:text-white/40">01</span>
                    </Link>

                    <Link
                      href="/#portofolio"
                      onClick={(e) => handleAnchorClick(e, "#portofolio")}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-slate-800 dark:text-white/90 hover:text-emerald-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 active:bg-slate-200 dark:active:bg-white/15 transition-colors"
                    >
                      <span>Portofolio</span>
                      <span className="text-xs text-slate-400 dark:text-white/40">02</span>
                    </Link>

                    <Link
                      href="/#keunggulan"
                      onClick={(e) => handleAnchorClick(e, "#keunggulan")}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-slate-800 dark:text-white/90 hover:text-emerald-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 active:bg-slate-200 dark:active:bg-white/15 transition-colors"
                    >
                      <span>Keunggulan</span>
                      <span className="text-xs text-slate-400 dark:text-white/40">03</span>
                    </Link>

                    <Link
                      href="/#testimoni"
                      onClick={(e) => handleAnchorClick(e, "#testimoni")}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-amber-600 dark:text-amber-300 hover:text-amber-700 dark:hover:text-white hover:bg-amber-500/10 dark:hover:bg-white/10 active:bg-amber-500/20 dark:active:bg-white/15 transition-colors font-semibold"
                    >
                      <span className="flex items-center gap-2">
                        <HugeiconsIcon icon={StarIcon} size={16} className="fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400" />
                        <span>Testimoni Klien</span>
                      </span>
                      <span className="text-xs text-amber-600/80 dark:text-amber-400/70 font-mono">5.0 ★</span>
                    </Link>

                    <Link
                      href="/#cara-kerja"
                      onClick={(e) => handleAnchorClick(e, "#cara-kerja")}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-slate-800 dark:text-white/90 hover:text-emerald-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 active:bg-slate-200 dark:active:bg-white/15 transition-colors"
                    >
                      <span>Alur Kerja</span>
                      <span className="text-xs text-slate-400 dark:text-white/40">04</span>
                    </Link>

                    <Link
                      href="/#paket-harga"
                      onClick={(e) => handleAnchorClick(e, "#paket-harga")}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-slate-800 dark:text-white/90 hover:text-emerald-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 active:bg-slate-200 dark:active:bg-white/15 transition-colors"
                    >
                      <span>Paket Harga</span>
                      <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">Mulai 499rb</span>
                    </Link>

                    <Link
                      href="/simulasi-biaya"
                      prefetch={false}
                      onClick={() => {
                        closeMenu();
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/60 border border-emerald-500/30 font-bold hover:bg-emerald-500/20 dark:hover:bg-emerald-900/60 transition-colors"
                    >
                      <span className="flex items-center gap-2.5">
                        <HugeiconsIcon icon={FlashIcon} size={18} />
                        <span>Simulasi Biaya</span>
                      </span>
                      <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
                    </Link>

                    <Link
                      href="/contact"
                      prefetch={false}
                      onClick={closeMenu}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-slate-800 dark:text-white/90 hover:text-emerald-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 active:bg-slate-200 dark:active:bg-white/15 transition-colors"
                    >
                      <span className="flex items-center gap-2.5">
                        <HugeiconsIcon icon={PencilEdit02Icon} size={18} className="text-cyan-600 dark:text-cyan-400" />
                        <span>Formulir Brief Proyek</span>
                      </span>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30">
                        Baru
                      </span>
                    </Link>

                    <Link
                      href="/#faq"
                      onClick={(e) => handleAnchorClick(e, "#faq")}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-slate-800 dark:text-white/90 hover:text-emerald-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 active:bg-slate-200 dark:active:bg-white/15 transition-colors"
                    >
                      <span>Tanya Jawab (FAQ)</span>
                      <span className="text-xs text-slate-400 dark:text-white/40">06</span>
                    </Link>
                  </nav>
                </div>

                {/* Footer WhatsApp Button */}
                <div className="pt-6 border-t border-slate-200 dark:border-white/10 space-y-3 mt-4">
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
                  <p className="text-xs text-center text-slate-500 dark:text-white/50">
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
