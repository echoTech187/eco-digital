"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  WhatsappIcon,
  NewTwitterIcon,
  Facebook01Icon,
  InstagramIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import logoMarkImg from "../../../public/images/logo/logo-vertical-transparent.png";
import { getWaUrl, WA_DISPLAY } from "@/data/landing-data";

export function SiteFooter() {
  return (
    <footer className="relative z-20 w-full border-t border-white/10 bg-[#040810] pt-12 sm:pt-16 pb-12 px-4 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left pb-12 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" prefetch={false} className="inline-flex items-center gap-2 sm:gap-3">
              <Image
                src={logoMarkImg}
                alt="ecoDigital Logo"
                width={120}
                height={35}
                className="h-8 sm:h-9 w-auto object-contain aspect-[120/35]"
                style={{ aspectRatio: "120 / 35" }}
              />
              <span className="text-base font-extrabold tracking-tight text-white">
                ecoDigital
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-white/60 max-w-sm">
              Software house &amp; technical partner untuk mahasiswa, sekolah, instansi dinas, dan UMKM. Ngoding transparan, full source code 100% hak milikmu, dan didampingi langsung oleh lead developer.
            </p>
            <div className="flex items-center gap-2 pt-1">
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
              Layanan &amp; Katalog
            </h4>
            <ul className="mt-3 space-y-2 text-xs text-white/70">
              <li>
                <Link href="/#layanan" prefetch={false} className="hover:text-white transition-colors">
                  Fix Error &amp; Tambah Fitur
                </Link>
              </li>
              <li>
                <Link href="/#layanan" prefetch={false} className="hover:text-white transition-colors">
                  Sistem Tugas Akhir &amp; Riset SPK
                </Link>
              </li>
              <li>
                <Link href="/#layanan" prefetch={false} className="hover:text-white transition-colors">
                  Aplikasi Sekolah &amp; Instansi
                </Link>
              </li>
              <li>
                <Link href="/portofolio" prefetch={false} className="hover:text-emerald-300 font-medium transition-colors">
                  Katalog Portofolio Lengkap →
                </Link>
              </li>
              <li>
                <Link href="/#paket-harga" prefetch={false} className="hover:text-white transition-colors">
                  Paket Harga (Mulai Rp150rb)
                </Link>
              </li>
              <li>
                <Link href="/simulasi-biaya" prefetch={false} className="hover:text-emerald-300 transition-colors">
                  Simulasi Biaya Mandiri
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
                <span className="text-emerald-400 font-semibold">WA:</span>
                <a
                  href={getWaUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-emerald-300 transition-colors"
                >
                  {WA_DISPLAY}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  prefetch={false}
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                >
                  <span>Formulir Brief Konsultasi</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={12} />
                </Link>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <span className="text-cyan-400">Layanan:</span>
                <span className="text-white/80">Konsultasi Seluruh Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-3">
          <p>&copy; {new Date().getFullYear()} ecoDigital. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white/50">
            <Link href="/" prefetch={false} className="hover:text-white transition-colors">
              Beranda
            </Link>
            <Link href="/portofolio" prefetch={false} className="hover:text-white transition-colors">
              Portofolio
            </Link>
            <Link href="/contact" prefetch={false} className="hover:text-white transition-colors">
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

