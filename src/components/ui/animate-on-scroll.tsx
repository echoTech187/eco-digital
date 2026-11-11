"use client";

import { motion, type Variants, type MotionProps } from "framer-motion";
import { type ReactNode } from "react";

// ─── Preset variants ───────────────────────────────────────────────────────────

const presets = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
} satisfies Record<string, Variants>;

export type AnimationPreset = keyof typeof presets;

// ─── AnimateOnScroll ───────────────────────────────────────────────────────────

interface AnimateOnScrollProps extends Omit<MotionProps, "variants"> {
  children: ReactNode;
  preset?: AnimationPreset;
  /** Custom Framer Motion variants (overrides preset) */
  variants?: Variants;
  /** Delay sebelum animasi mulai (detik) */
  delay?: number;
  /** Durasi animasi (detik) */
  duration?: number;
  /** Seberapa besar elemen harus terlihat sebelum trigger (0–1 atau "some") */
  threshold?: number | "some" | "all";
  /** Hanya animasi sekali saat pertama kali masuk viewport */
  once?: boolean;
  /** Animasi langsung saat mount (untuk elemen above the fold / Hero) */
  immediate?: boolean;
  className?: string;
}

export function AnimateOnScroll({
  children,
  preset = "fade-up",
  variants,
  delay = 0,
  duration = 0.5,
  threshold = "some",
  once = true,
  immediate = false,
  className,
  ...props
}: AnimateOnScrollProps) {
  const selectedVariants = variants ?? presets[preset];

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={immediate ? "visible" : undefined}
      whileInView={immediate ? undefined : "visible"}
      viewport={immediate ? undefined : { once, amount: threshold }}
      variants={selectedVariants}
      transition={{ duration, delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerContainer ──────────────────────────────────────────────────────────
// Wrapper yang membuat children-nya muncul satu per satu (berurutan)

interface StaggerContainerProps {
  children: ReactNode;
  /** Jarak waktu antar child (detik) */
  staggerDelay?: number;
  /** Delay awal sebelum stagger mulai */
  delay?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delay = 0,
  threshold = 0.1,
  once = true,
  className,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerItem ───────────────────────────────────────────────────────────────
// Dipakai sebagai child langsung dari StaggerContainer

interface StaggerItemProps {
  children: ReactNode;
  preset?: AnimationPreset;
  className?: string;
}

export function StaggerItem({
  children,
  preset = "fade-up",
  className,
}: StaggerItemProps) {
  return (
    <motion.div className={className} variants={presets[preset]}>
      {children}
    </motion.div>
  );
}

