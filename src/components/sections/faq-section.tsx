"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, type Variants } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { FAQ_ITEMS } from "@/data/landing-data";

// ─── Motion Variants for Staggered Scroll Entrance ───────────────────────────

const faqContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const faqItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 240,
      damping: 22,
      mass: 0.8,
    },
  },
};

export function FaqSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (idx: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [35, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.4, 1]);

  return (
    <div
      id="faq"
      ref={sectionRef}
      className="relative z-20 w-full -mt-10 sm:-mt-14 rounded-t-[36px] sm:rounded-t-[56px] border-t border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#060A14] px-4 sm:px-8 lg:px-14 py-16 sm:py-20 shadow-[0_-25px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_-30px_70px_-20px_rgba(0,0,0,0.6)] scroll-mt-0 transition-colors duration-300 overflow-hidden"
    >
      {/* Subtle Ambient Background Glow */}
      <div className="pointer-events-none absolute -top-20 right-1/4 h-80 w-80 rounded-full bg-emerald-500/8 dark:bg-emerald-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 left-1/4 h-72 w-72 rounded-full bg-cyan-500/6 dark:bg-cyan-500/10 blur-[120px]" />

      <motion.div
        style={{ scale, y, opacity }}
        className="mx-auto max-w-4xl relative z-10 will-change-transform origin-top"
      >
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

        {/* ─── Staggered Scroll Motion Accordion Grid ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={faqContainerVariants}
          className="space-y-3 sm:space-y-3.5"
        >
          {FAQ_ITEMS.map((faq, i) => {
            const isOpen = !!openItems[i];

            return (
              <motion.div
                key={i}
                variants={faqItemVariants}
                className={`group rounded-2xl border transition-all duration-300 p-4 sm:p-5 backdrop-blur-md shadow-xs hover:shadow-md ${
                  isOpen
                    ? "border-emerald-500/60 bg-emerald-50/50 dark:bg-emerald-950/20 shadow-sm"
                    : "border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-slate-300 dark:hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(i)}
                  className="w-full flex cursor-pointer items-center justify-between font-semibold text-slate-900 dark:text-white/90 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 text-left transition-colors"
                >
                  <span className="text-sm font-bold leading-snug">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="ml-4 text-xs text-emerald-600 dark:text-[#10B981] shrink-0"
                  >
                    <HugeiconsIcon icon={ArrowDown01Icon} size={15} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-white/70 pt-2 border-t border-slate-200/60 dark:border-white/10">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
