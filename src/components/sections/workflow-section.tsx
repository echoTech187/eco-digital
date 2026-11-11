"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { WORKFLOW_STEPS } from "@/data/landing-data";

export function WorkflowSection() {
  return (
    <div id="cara-kerja" className="relative z-20 w-full bg-[#060A14] px-6 py-16 lg:px-14 scroll-mt-20">
      <div className="mx-auto max-w-5xl text-center">
        <AnimateOnScroll preset="fade-up" className="mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">
            CARA KERJA ANTI-GHOSTING
          </span>
          <h2 className="mt-3 text-3xl font-black text-white lg:text-4xl">
            4 Langkah Simpel, Tanpa Birokrasi Ribet
          </h2>
          <p className="mt-2 text-sm text-white/60">
            Dari obrolan pertama di WhatsApp sampai aplikasi jalan di laptopmu.
          </p>
        </AnimateOnScroll>

        {/* Workflow Sequence with Connecting Progress Indicators */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
          {WORKFLOW_STEPS.map((s, si) => (
            <div
              key={s.step}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-[#10B981]/40 hover:bg-white/[0.08]"
            >
              {/* Connecting Arrow for Desktop Workflow */}
              {si < 3 && (
                <span className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 h-7 w-7 items-center justify-center rounded-full bg-emerald-950 border border-emerald-400/40 text-emerald-300 shadow-md">
                  <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                </span>
              )}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-[#10B981]">
                  {s.step}
                </span>
                <span className="rounded-full bg-white/5 px-2 py-0.5 text-[9px] font-medium text-white/60">
                  {s.tag}
                </span>
              </div>
              <h4 className="mt-3 text-sm font-bold text-white">
                {s.title}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-white/60">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
