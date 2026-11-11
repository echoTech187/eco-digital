"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { TECH_STACK_ITEMS } from "@/data/landing-data";

export function TechStackMarquee() {
  return (
    <div className="relative z-25 w-full overflow-hidden border-y border-white/10 bg-[#050913]/95 py-3.5 backdrop-blur-xl">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
          {TECH_STACK_ITEMS.concat(TECH_STACK_ITEMS).map((t, idx) => {
            const IconComp = t.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/80 transition-colors hover:border-[#10B981] hover:text-white"
              >
                <span className="text-emerald-400">
                  <HugeiconsIcon icon={IconComp} size={15} />
                </span>
                <span>{t.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

