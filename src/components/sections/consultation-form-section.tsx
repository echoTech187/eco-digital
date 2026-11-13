"use client";

import React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  WhatsappIcon,
  PencilEdit02Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { SiteFooter } from "@/components/layout/site-footer";
import { getWaUrl } from "@/data/landing-data";

export function ConsultationFormSection() {
  return (
    <div id="kontak" className="relative z-20 w-full bg-[#060A14] pt-8 border-t border-white/10 scroll-mt-20">
      <span id="konsultasi" className="scroll-mt-24 block" />
      {/* ─── High-Converting Closing Section (CTA Banner -> /contact & WhatsApp) ─── */}
      <div className="mx-auto max-w-4xl px-4 sm:px-8 mb-14 sm:mb-20">
        <AnimateOnScroll preset="zoom-in" duration={0.6}>
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[36px] border border-white/20 bg-gradient-to-br from-emerald-950/70 via-[#0a1424] to-slate-950 p-6 sm:p-10 md:p-14 backdrop-blur-2xl shadow-2xl text-center">
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#10B981] mb-2 sm:mb-3">
                MULAI DISKUSI SEKARANG
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Masih Bingung Mulai dari Mana? Obrolin Aja Dulu, Gratis Kok!
              </h2>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-slate-300/80">
                Punya rancangan sistem, butuh bantuan bedah koding, atau ingin tahu estimasi biayanya? Kamu bisa mengisi formulir brief kebutuhan di halaman konsultasi terpisah atau ngobrol santai langsung via WhatsApp bersama lead developer.
              </p>

              {/* Action Button Duo */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
                {/* Button 1: Separate Page Contact Form */}
                <Link
                  href="/contact"
                  prefetch={false}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-bold text-slate-950 shadow-xl shadow-emerald-500/25 transition-all duration-200 hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <HugeiconsIcon icon={PencilEdit02Icon} size={18} />
                  <span>Isi Formulir Brief Konsultasi</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={15} />
                </Link>

                {/* Button 2: Direct WhatsApp Chat */}
                <a
                  href={getWaUrl("Halo Mas (ecoDigital), saya mau konsultasi pembuatan website / sistem custom.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 hover:bg-white/15 px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <HugeiconsIcon icon={WhatsappIcon} size={18} className="text-emerald-400" />
                  <span>Chat WhatsApp Langsung</span>
                </a>
              </div>

              {/* Reassurance Ticker */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400/90">
                <div className="flex items-center justify-center gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Konsultasi Awal 100% Gratis</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Langsung Ngobrol ke Developer</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Source Code 100% Hak Milik</span>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      {/* ─── Global Clean 3-Column Footer ─── */}
      <SiteFooter />
    </div>
  );
}
