"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkBadge01Icon,
  FlashIcon,
  ShieldCheckIcon,
} from "@hugeicons/core-free-icons";

export function DashboardAnalyticsShowcase() {
  return (
    <div className="relative w-full max-w-[580px] sm:max-w-[600px] select-none mx-auto flex flex-col items-center justify-center py-1">
      
      {/* ─── Ambient Glow Pools behind Device (NO CARD CONTAINER!) ─── */}
      <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[440px] h-[440px] rounded-full bg-emerald-500/12 dark:bg-emerald-500/18 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 w-[360px] h-[360px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-[90px]" />

      {/* ─── PURE HARDWARE DEVICE: MACBOOK PRO (Full-Screen Screen Viewport) ─── */}
      <div className="relative w-full aspect-[1134/652] select-none cursor-pointer group">
        
        {/* Laptop Screen Viewport (100% Full-Screen Dashboard - Zero Cropping!) */}
        <div
          className="absolute overflow-hidden bg-slate-950 shadow-inner z-0"
          style={{
            left: "11.287%",
            top: "6.288%",
            width: "77.337%",
            height: "84.356%",
            borderRadius: "2px 2px 0 0",
          }}
        >
          {/* SI-PELANTAS Dashboard Screen Content (Complete Sidebar, KPI & Table) */}
          <div className="relative w-full h-full bg-[#F8FAFC] dark:bg-[#070C16] overflow-hidden">
            <Image
              src="/images/showcase/dashboard-simpelantas.png"
              alt="SI-PELANTAS Admin Console Dashboard"
              fill
              className="w-full h-full object-fill pointer-events-none select-none transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              priority
            />
            {/* Screen Glass Reflection Highlight */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.06]" />
          </div>
        </div>

        {/* MacBook Hardware Bezel & Base Frame */}
        <Image
          src="/images/showcase/device-macbook-frame.png"
          alt="MacBook Frame"
          fill
          sizes="(max-width: 789px) 100vw, 600px"
          className="object-contain pointer-events-none z-10 drop-shadow-[0_20px_45px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
          priority
        />

        {/* Realistic Floor Contact Shadow */}
        <div className="pointer-events-none absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-7 bg-slate-900/15 dark:bg-black/60 blur-xl rounded-full" />
      </div>

      {/* ─── FLOATING VALUE BADGES (Below Device, No Card Box!) ─── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-[11px] font-bold text-slate-700 dark:text-slate-200"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/10 shadow-xs backdrop-blur-md">
          <HugeiconsIcon icon={CheckmarkBadge01Icon} size={13} className="text-emerald-500" />
          Real-Time Data Sync
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/10 shadow-xs backdrop-blur-md">
          <HugeiconsIcon icon={FlashIcon} size={13} className="text-amber-500" />
          Ekspor XLSX Otomatis
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/10 shadow-xs backdrop-blur-md">
          <HugeiconsIcon icon={ShieldCheckIcon} size={13} className="text-cyan-500" />
          Hak Akses Berjenjang (RBAC)
        </span>
      </motion.div>

    </div>
  );
}
