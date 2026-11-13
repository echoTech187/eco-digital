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
import logoLightImg from "../../../public/images/logo/logo-vertical-light.png";
import { getWaUrl, WA_DISPLAY } from "@/data/landing-data";

export function SiteFooter() {
  return (
    <footer className="relative z-20 w-full border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#040810] pt-12 sm:pt-16 pb-12 px-4 sm:px-8 lg:px-14 transition-colors">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left pb-12 border-b border-slate-200 dark:border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" prefetch={false} className="inline-flex items-center gap-2 sm:gap-3">
              <Image
                src={logoMarkImg}
                alt="ecoDigital Logo"
                width={120}
                height={35}
                className="hidden dark:block h-8 sm:h-9 w-auto object-contain aspect-[120/35]"
                style={{ aspectRatio: "120 / 35" }}
              />
              <Image
                src={logoLightImg}
                alt="ecoDigital Logo"
                width={120}
                height={35}
                className="block dark:hidden h-8 sm:h-9 w-auto object-contain aspect-[120/35]"
                style={{ aspectRatio: "120 / 35" }}
              />
              <span className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
                ecoDigital
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-white/60 max-w-sm">
              Software engineering partner untuk instansi, perusahaan, dan tim teknis: <strong>Aplikasi Custom</strong>, <strong>Jasa API &amp; Backend</strong>, dan <strong>Web Instansi &amp; Bisnis</strong>. Ngoding transparan, arsitektur bersih, dan serah terima tuntas bergaransi.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={getWaUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-emerald-500/15 dark:bg-emerald-500/20 hover:bg-emerald-500/25 dark:hover:bg-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 transition-colors"
                aria-label="WhatsApp ecoDigital"
              >
                <HugeiconsIcon icon={WhatsappIcon} size={18} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 flex items-center justify-center text-slate-700 dark:text-white transition-colors"
                aria-label="X ecoDigital"
              >
                <HugeiconsIcon icon={NewTwitterIcon} size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 flex items-center justify-center text-slate-700 dark:text-white transition-colors"
                aria-label="Facebook ecoDigital"
              >
                <HugeiconsIcon icon={Facebook01Icon} size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 flex items-center justify-center text-slate-700 dark:text-white transition-colors"
                aria-label="Instagram ecoDigital"
              >
                <HugeiconsIcon icon={InstagramIcon} size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Ringkasan Layanan */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Layanan Utama
            </h4>
            <ul className="mt-3 space-y-2 text-xs text-slate-600 dark:text-white/70">
              <li>
                <Link href="/#aplikasi-custom" prefetch={false} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Aplikasi Custom (Web &amp; Mobile)
                </Link>
              </li>
              <li>
                <Link href="/#jasa-api-backend" prefetch={false} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Jasa API &amp; Backend
                </Link>
              </li>
              <li>
                <Link href="/#web-instansi-bisnis" prefetch={false} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Web Instansi &amp; Bisnis
                </Link>
              </li>
              <li>
                <Link href="/portofolio" prefetch={false} className="hover:text-emerald-600 dark:hover:text-emerald-300 font-medium transition-colors">
                  Katalog Portofolio Lengkap →
                </Link>
              </li>
              <li>
                <Link href="/#paket-harga" prefetch={false} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Paket Harga &amp; Estimasi
                </Link>
              </li>
              <li>
                <Link href="/simulasi-biaya" prefetch={false} className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
                  Simulasi Biaya Mandiri
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Kontak Resmi */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Kontak Resmi
            </h4>
            <ul className="mt-3 space-y-2 text-xs text-slate-600 dark:text-white/70">
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">WA:</span>
                <a
                  href={getWaUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
                >
                  {WA_DISPLAY}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  prefetch={false}
                  className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold transition-colors"
                >
                  <span>Formulir Brief Konsultasi</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={12} />
                </Link>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <span className="text-cyan-600 dark:text-cyan-400 font-medium">Layanan:</span>
                <span className="text-slate-700 dark:text-white/80">Konsultasi Seluruh Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-white/40 gap-3">
          <p>&copy; {new Date().getFullYear()} ecoDigital. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-500 dark:text-white/50">
            <Link href="/" prefetch={false} className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Beranda
            </Link>
            <Link href="/portofolio" prefetch={false} className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Portofolio
            </Link>
            <Link href="/contact" prefetch={false} className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

