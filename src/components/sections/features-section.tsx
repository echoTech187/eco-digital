"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { WHY_US_ITEMS } from "@/data/landing-data";

export function FeaturesSection() {
  return (
    <div id="keunggulan" className="relative z-20 w-full bg-[#060A14] px-6 py-16 lg:px-14 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll preset="fade-up" className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">
            STANDAR KERJA ECODIGITAL
          </span>
          <h2 className="mt-3 text-3xl font-black text-white lg:text-4xl">
            Kenapa Ngoding Bareng ecoDigital Jauh Lebih Tenang?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
            Empat jaminan nyata supaya kamu nggak kena drama joki lepas tangan atau proyek mangkrak.
          </p>
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US_ITEMS.map((k, ki) => {
            const WhyUsIcon = k.icon;
            return (
              <div
                key={ki}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/[0.08]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-emerald-400">
                    <HugeiconsIcon icon={WhyUsIcon} size={28} />
                  </span>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-950/40 px-2 py-0.5 text-[9px] font-semibold text-emerald-300">
                    {k.badge}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white">{k.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-white/60">
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
