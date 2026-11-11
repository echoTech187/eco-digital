"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  WhatsappIcon,
  Cancel01Icon,
  Menu01Icon,
  FlashIcon,
} from "@hugeicons/core-free-icons";
import logoMarkImg from "../../../public/images/logo/logo-vertical-transparent.png";
import { getWaUrl, WA_DISPLAY } from "@/data/landing-data";

export function NavbarSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scroll when drawer is open
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

  // Close drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#060A14]/90 backdrop-blur-xl transition-all">
        <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-14">
          {/* Left: Brand Logo */}
          <Link href="/" className="group flex items-center gap-2 sm:gap-3 shrink-0">
            <Image
              src={logoMarkImg}
              alt="ecoDigital"
              width={320}
              height={100}
              priority
              loading="eager"
              unoptimized
              className="h-8 sm:h-10 lg:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-md"
            />
          </Link>

          {/* Center: Navigation Links (Desktop & Notebook) */}
          <nav className="hidden items-center gap-4 xl:gap-8 lg:flex">
            <Link
              href="#layanan"
              className="text-xs font-semibold uppercase tracking-wider text-white/80 transition-colors hover:text-emerald-300"
            >
              Layanan
            </Link>
            <Link
              href="#portofolio"
              className="text-xs font-semibold uppercase tracking-wider text-white/80 transition-colors hover:text-emerald-300"
            >
              Portofolio
            </Link>
            <Link
              href="#keunggulan"
              className="text-xs font-semibold uppercase tracking-wider text-white/80 transition-colors hover:text-emerald-300"
            >
              Keunggulan
            </Link>
            <Link
              href="#cara-kerja"
              className="text-xs font-semibold uppercase tracking-wider text-white/80 transition-colors hover:text-emerald-300"
            >
              Alur Kerja
            </Link>
            <Link
              href="#paket-harga"
              className="text-xs font-semibold uppercase tracking-wider text-white/80 transition-colors hover:text-emerald-300"
            >
              Paket Harga
            </Link>
            <Link
              href="#kalkulator-biaya"
              className="text-xs font-semibold uppercase tracking-wider text-emerald-400 transition-colors hover:text-emerald-300 flex items-center gap-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              Simulasi Biaya
            </Link>
            <Link
              href="#faq"
              className="text-xs font-semibold uppercase tracking-wider text-white/80 transition-colors hover:text-emerald-300"
            >
              FAQ
            </Link>
          </nav>

          {/* Right: Direct WhatsApp CTA Button & Mobile/Tablet Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={getWaUrl(
                "Halo Mas (ecoDigital), saya mau konsultasi pembuatan website / sistem."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-3 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:from-emerald-400 hover:to-teal-400 hover:scale-105 active:scale-95"
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
                        alt="ecoDigital"
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
                      href="#layanan"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-white/90 hover:text-white hover:bg-white/10 active:bg-white/15 transition-colors"
                    >
                      <span>Layanan</span>
                      <span className="text-xs text-white/40">01</span>
                    </Link>

                    <Link
                      href="#portofolio"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-white/90 hover:text-white hover:bg-white/10 active:bg-white/15 transition-colors"
                    >
                      <span>Portofolio</span>
                      <span className="text-xs text-white/40">02</span>
                    </Link>

                    <Link
                      href="#keunggulan"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-white/90 hover:text-white hover:bg-white/10 active:bg-white/15 transition-colors"
                    >
                      <span>Keunggulan</span>
                      <span className="text-xs text-white/40">03</span>
                    </Link>

                    <Link
                      href="#cara-kerja"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-white/90 hover:text-white hover:bg-white/10 active:bg-white/15 transition-colors"
                    >
                      <span>Alur Kerja</span>
                      <span className="text-xs text-white/40">04</span>
                    </Link>

                    <Link
                      href="#paket-harga"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-white/90 hover:text-white hover:bg-white/10 active:bg-white/15 transition-colors"
                    >
                      <span>Paket Harga</span>
                      <span className="text-xs text-emerald-400 font-bold">Mulai 150rb</span>
                    </Link>

                    <Link
                      href="#kalkulator-biaya"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 font-bold hover:bg-emerald-900/60 active:bg-emerald-800/60 transition-colors"
                    >
                      <span className="flex items-center gap-2.5">
                        <HugeiconsIcon icon={FlashIcon} size={18} />
                        <span>Simulasi Biaya</span>
                      </span>
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    </Link>

                    <Link
                      href="#faq"
                      onClick={() => setMobileMenuOpen(false)}
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
