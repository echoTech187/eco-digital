"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { FAQ_ITEMS } from "@/data/landing-data";

export function FaqSection() {
  return (
    <div
      id="faq"
      className="relative z-20 w-full -mt-10 sm:-mt-14 rounded-t-[36px] sm:rounded-t-[56px] border-t border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#060A14] px-4 sm:px-8 lg:px-14 py-16 sm:py-20 shadow-[0_-25px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_-30px_70px_-20px_rgba(0,0,0,0.6)] scroll-mt-0 transition-colors duration-300"
    >
      <div className="mx-auto max-w-4xl">
        <AnimateOnScroll preset="fade-up" className="mb-8 sm:mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-[#10B981]">
            TANYA JAWAB SANTAI (FAQ)
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
            Hal yang Paling Sering Ditanyain Sebelum Mulai Ngoding
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-white/60">
            Biar nggak ada keraguan atau salah paham di belakang, cek dulu jawaban jujur untuk pertanyaan yang paling sering mampir di WhatsApp saya.
          </p>
        </AnimateOnScroll>

        <div className="space-y-3 sm:space-y-3.5">
          {FAQ_ITEMS.map((faq, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 sm:p-5 backdrop-blur-md shadow-sm dark:shadow-none transition-all open:border-emerald-500/50 open:bg-emerald-50/40 dark:open:bg-white/[0.08]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-900 dark:text-white/90 group-hover:text-emerald-600 dark:group-hover:text-white">
                <span className="text-sm font-bold">{faq.q}</span>
                <span className="ml-4 text-xs text-emerald-600 dark:text-[#10B981] transition-transform group-open:rotate-180">
                  <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
                </span>
              </summary>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-white/70">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

