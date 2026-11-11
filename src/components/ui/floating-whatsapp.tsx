"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { WhatsappIcon } from "@hugeicons/core-free-icons";

export function FloatingWhatsApp() {
  const waUrl =
    "https://wa.me/6287875856918?text=Halo%20Mas%20(ecoDigital)%2C%20saya%20mau%20konsultasi%20pembuatan%20website%20%2F%20aplikasi.";

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center">
      {/* Soft Breathing Ambient Glow Ring */}
      <span className="pointer-events-none absolute -inset-1 rounded-full bg-emerald-500/30 blur-md animate-pulse" />

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi Gratis via WhatsApp 0878-7585-6918"
        className="group relative flex items-center gap-3 rounded-full border border-emerald-400/50 bg-[#060A14]/95 p-1.5 sm:py-2.5 sm:pl-4 sm:pr-2.5 shadow-2xl shadow-emerald-950/80 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95"
      >
        <div className="hidden sm:flex flex-col text-right">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
            Konsultasi Gratis
          </span>
          <span className="text-xs font-semibold text-white">0878-7585-6918</span>
        </div>

        <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white shadow-lg shadow-emerald-500/50 transition-transform duration-300 group-hover:scale-110 animate-pulse">
          <HugeiconsIcon icon={WhatsappIcon} size={24} className="text-white" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-80" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-400 border-2 border-[#060A14]" />
          </span>
        </div>
      </a>
    </div>
  );
}
