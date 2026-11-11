"use client";

import React, { useState } from "react";
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

  return (
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
            <span className="sm:hidden">Chat WA</span>
          </a>

          {/* Mobile & Tablet Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <HugeiconsIcon icon={Cancel01Icon} size={18} />
            ) : (
              <HugeiconsIcon icon={Menu01Icon} size={18} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#060A14]/98 px-5 sm:px-8 py-5 backdrop-blur-2xl lg:hidden animate-fade-in max-h-[calc(100vh-64px)] overflow-y-auto">
          <nav className="flex flex-col gap-3.5 text-sm font-semibold">
            <Link
              href="#layanan"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-white/80 hover:text-emerald-400"
            >
              Layanan
            </Link>
            <Link
              href="#portofolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-white/80 hover:text-emerald-400"
            >
              Portofolio
            </Link>
            <Link
              href="#keunggulan"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-white/80 hover:text-emerald-400"
            >
              Keunggulan
            </Link>
            <Link
              href="#cara-kerja"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-white/80 hover:text-emerald-400"
            >
              Alur Kerja
            </Link>
            <Link
              href="#paket-harga"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-white/80 hover:text-emerald-400"
            >
              Paket Harga (Mulai Rp150rb)
            </Link>
            <Link
              href="#kalkulator-biaya"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1.5"
            >
              <HugeiconsIcon icon={FlashIcon} size={15} />
              <span>Simulasi Biaya</span>
            </Link>
            <Link
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-white/80 hover:text-emerald-400"
            >
              FAQ
            </Link>
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <a
                href={getWaUrl(
                  "Halo Mas (ecoDigital), saya mau konsultasi pembuatan website / sistem."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-xs font-bold text-white shadow"
              >
                <HugeiconsIcon icon={WhatsappIcon} size={16} />
                <span>Chat Developer ({WA_DISPLAY})</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

