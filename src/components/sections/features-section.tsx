"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { WHY_US_ITEMS } from "@/data/landing-data";

export function FeaturesSection() {
  return (
    <div id="keunggulan" className="relative z-20 w-full bg-[#060A14] px-4 sm:px-8 lg:px-14 py-12 sm:py-16 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll preset="fade-up" className="mb-10 sm:mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">
            STANDAR KERJA ECODIGITAL
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-white">
            Kenapa Ngoding Bareng ecoDigital Jauh Lebih Tenang?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-white/60">
            Empat jaminan nyata supaya kamu nggak kena drama joki lepas tangan atau proyek mangkrak.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {WHY_US_ITEMS.map((k, ki) => {
            const WhyUsIcon = k.icon;
            return (
              <div
                key={ki}
                className="group flex flex-col items-center text-center sm:items-start sm:text-left rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/[0.08] hover:-translate-y-1"
              >
                {/* Header Icon & Badge: di mobile ditengah & dibesarkan (h-16 w-16, icon 36px, badge text-[11px]), di tablet/desktop tetap proporsional & compact */}
                <div className="mb-4 flex flex-col items-center justify-center gap-3 sm:w-full sm:flex-row sm:items-center sm:justify-between">
                  <span className="flex h-16 w-16 sm:h-11 sm:w-11 items-center justify-center rounded-2xl sm:rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 shadow-lg shadow-emerald-950/50 sm:shadow-none transition-transform duration-300 group-hover:scale-105">
                    <HugeiconsIcon icon={WhyUsIcon} className="h-9 w-9 sm:h-6 sm:w-6" />
                  </span>
                  <span className="rounded-full border border-emerald-400/25 bg-emerald-950/50 px-3 py-1 sm:px-2.5 sm:py-0.5 text-[11px] sm:text-[10px] font-semibold text-emerald-300 shadow-sm sm:shadow-none">
                    {k.badge}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white text-center sm:text-left">{k.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-white/60 text-center sm:text-left">
                  {k.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
