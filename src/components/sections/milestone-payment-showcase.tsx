"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ShieldCheckIcon,
  CheckmarkBadge01Icon,
  FingerPrintScanIcon,
  LockIcon,
  FlashIcon,
  Tick01Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";

export function MilestonePaymentShowcase() {
  const [activeStep, setActiveStep] = useState<number>(1); // 0: 30% Kickoff, 1: 40% Demo Staging, 2: 30% Pelunasan

  // Auto-progress milestones smoothly every 4 seconds (interactive on click)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  const milestones = [
    {
      step: 1,
      percentage: "30%",
      label: "Kickoff & Desain",
      sublabel: "Setup UI/UX & Database",
      statusColor: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 border-emerald-500/30",
      isComplete: true,
      escrowStatus: "Lunas (30%)",
    },
    {
      step: 2,
      percentage: "40%",
      label: "Demo Staging Live",
      sublabel: "Tes Fitur Langsung 24/7",
      statusColor: "text-cyan-600 dark:text-cyan-400 bg-cyan-500/15 border-cyan-500/30",
      isComplete: activeStep >= 1,
      escrowStatus: "Diuji Klien",
    },
    {
      step: 3,
      percentage: "30%",
      label: "Serah Terima Final",
      sublabel: "Domain, Server & Source Code",
      statusColor: "text-amber-600 dark:text-amber-400 bg-amber-500/15 border-amber-500/30",
      isComplete: activeStep >= 2,
      escrowStatus: "Bayar Pas Puas",
    },
  ];

  return (
    <div className="relative w-full max-w-[560px] select-none mx-auto flex flex-col items-center justify-center py-1 isolate">
      
      {/* ─── Lightweight Ambient Backglow (GPU-Safe Radial Gradients, Zero Heavy Blur) ─── */}
      <div
        className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 w-[360px] h-[360px] rounded-full opacity-30 dark:opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.35) 0%, rgba(6,182,212,0.15) 50%, transparent 75%)",
        }}
      />

      {/* ─── FLOATING STAGE CONTAINER: Phone + Floating Shield + Floating Card ─── */}
      <div className="relative w-full flex items-center justify-center min-h-[580px] lg:min-h-[610px] isolate">

        {/* ══════════════════════════════════════════════════════════════════
            1. FLOATING 3D SECURITY SHIELD (Top-Left, Perfectly Balanced, No Text Overlap)
           ══════════════════════════════════════════════════════════════════ */}
        <div
          className="absolute top-5 -left-3 sm:-left-5 z-30 pointer-events-none flex flex-col items-center transform-gpu animate-float"
          style={{ willChange: "transform" }}
        >
          {/* Glowing Shield Shape */}
          <div className="relative flex items-center justify-center">
            {/* Outer Glow Halo */}
            <div className="absolute inset-0 rounded-2xl bg-emerald-500/20 blur-md" />
            
            {/* Shield Body (Clean Solid Contrast, No Buggy Backdrop-Blur) */}
            <div className="relative w-15 h-18 sm:w-18 sm:h-22 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 p-[2px] shadow-[0_12px_28px_rgba(16,185,129,0.35)]">
              <div className="w-full h-full rounded-[14px] bg-[#070D18] flex flex-col items-center justify-center p-2 relative overflow-hidden">
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-white/10 rounded-full pointer-events-none" />
                
                <HugeiconsIcon
                  icon={ShieldCheckIcon}
                  size={28}
                  className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.7)] sm:size-8"
                />
                
                <span className="mt-0.5 text-[8px] font-black tracking-wider text-emerald-300 uppercase font-mono">
                  100% AMAN
                </span>
              </div>
            </div>

            {/* Checkmark Ping Badge */}
            <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-md border-2 border-white dark:border-slate-900">
              <HugeiconsIcon icon={CheckmarkBadge01Icon} size={13} />
            </div>
          </div>

          {/* Floating Pill Label */}
          <div className="mt-1.5 px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-900 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[9.5px] font-bold tracking-tight shadow-md flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Escrow Terproteksi</span>
          </div>
        </div>


        {/* ══════════════════════════════════════════════════════════════════
            2. CENTRAL SMARTPHONE MOCKUP: iPHONE 17 PRO MAX FORM FACTOR
           ══════════════════════════════════════════════════════════════════ */}
        <div
          className="relative w-[285px] sm:w-[295px] lg:w-[305px] h-[575px] sm:h-[595px] lg:h-[610px] rounded-[48px] sm:rounded-[52px] p-[6.5px] sm:p-[7.5px] bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 dark:from-slate-600 dark:via-slate-800 dark:to-slate-900 shadow-[0_25px_60px_rgba(0,0,0,0.35)] dark:shadow-[0_30px_75px_rgba(0,0,0,0.85)] border border-slate-600/70 dark:border-slate-500/50 z-20 transform-gpu isolate"
          style={{ willChange: "transform" }}
        >
          
          {/* Phone Side Hardware Buttons (iPhone 17 Pro Max Titanium Action & Control Buttons) */}
          <div className="absolute -left-[8px] top-[72px] w-[2.5px] h-[20px] bg-slate-500/80 rounded-l-xs" />
          <div className="absolute -left-[8px] top-[106px] w-[2.5px] h-[40px] bg-slate-500/80 rounded-l-xs" />
          <div className="absolute -left-[8px] top-[156px] w-[2.5px] h-[40px] bg-slate-500/80 rounded-l-xs" />
          <div className="absolute -right-[8px] top-[106px] w-[2.5px] h-[54px] bg-slate-500/80 rounded-r-xs" />
          <div className="absolute -right-[7px] bottom-[110px] w-[2px] h-[34px] bg-slate-500/60 rounded-r-xs" />

          {/* Phone Screen Container */}
          <div className="relative w-full h-full rounded-[42px] sm:rounded-[46px] overflow-hidden flex flex-col justify-between bg-slate-100 dark:bg-[#070C16] text-slate-900 dark:text-slate-100 transition-colors duration-200">
            
            {/* Top Status Bar with Dynamic Island */}
            <div className="relative w-full pt-2.5 pb-1.5 px-4 flex items-center justify-between text-[10.5px] font-semibold text-slate-700 dark:text-slate-300 z-10 shrink-0">
              <span className="font-mono tracking-tight text-[10.5px]">10:30</span>
              
              {/* Dynamic Island Pill with Escrow Lock */}
              <div className="w-[94px] h-[22px] bg-black rounded-full flex items-center justify-center gap-1.5 px-2 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[8.5px] font-mono text-emerald-300 font-bold tracking-wider">30•40•30</span>
                <HugeiconsIcon icon={LockIcon} size={8.5} className="text-emerald-400" />
              </div>

              <div className="flex items-center gap-1.5 text-[9.5px]">
                <span>5G</span>
                <span className="w-3.5 h-2 border border-current rounded-xs p-0.5 flex items-center">
                  <span className="w-full h-full bg-emerald-500 rounded-2xs" />
                </span>
              </div>
            </div>

            {/* Main Phone Content: Escrow Milestone Tracker */}
            <div className="flex-1 px-3.5 py-1.5 flex flex-col justify-between overflow-hidden">
              
              {/* Header Box: Escrow Balance / Status */}
              <div className="rounded-2xl p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-xs">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-md bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                    <HugeiconsIcon icon={ShieldCheckIcon} size={13} />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block leading-none">
                      Garansi Pembayaran
                    </span>
                    <span className="text-[11px] font-black text-slate-900 dark:text-white leading-tight">
                      Sistem Escrow Milestone
                    </span>
                  </div>
                </div>

                {/* Progress Bar (30% - 40% - 30%) */}
                <div className="mt-2">
                  <div className="flex items-center justify-between text-[8.5px] font-mono font-bold mb-0.5 text-slate-500">
                    <span>Fase 1: 30%</span>
                    <span>Fase 2: 40%</span>
                    <span>Fase 3: 30%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 flex overflow-hidden p-0.5 gap-0.5">
                    <div className="h-full rounded-full bg-emerald-500 transition-all duration-300" style={{ width: "30%" }} />
                    <div className={`h-full rounded-full transition-all duration-300 ${activeStep >= 1 ? "bg-cyan-500" : "bg-transparent"}`} style={{ width: "40%" }} />
                    <div className={`h-full rounded-full transition-all duration-300 ${activeStep >= 2 ? "bg-amber-500" : "bg-transparent"}`} style={{ width: "30%" }} />
                  </div>
                </div>
              </div>

              {/* 3 Interactive Milestone Cards (Zero scale glitch, pure paint-safe transitions) */}
              <div className="space-y-1.5 my-1">
                {milestones.map((m, idx) => {
                  const isCurrent = activeStep === idx;
                  return (
                    <div
                      key={m.step}
                      onClick={() => setActiveStep(idx)}
                      className={`p-2.5 rounded-2xl border cursor-pointer flex items-center justify-between gap-2 transition-colors duration-200 ${
                        isCurrent
                          ? "bg-white dark:bg-slate-900 border-emerald-500/60 shadow-xs ring-1 ring-emerald-500/20"
                          : "bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-white/5 opacity-80 hover:opacity-100"
                      }`}
                    >
                      {/* Left: Step Badge + Title */}
                      <div className="flex items-center gap-2 min-w-0">
                        <div
                          className={`w-6 h-6 rounded-md flex items-center justify-center font-mono font-black text-[10px] shrink-0 transition-colors duration-200 ${
                            isCurrent
                              ? "bg-emerald-500 text-slate-950 shadow-xs"
                              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                          }`}
                        >
                          {m.percentage}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1">
                            <span className="text-[10.5px] font-bold text-slate-900 dark:text-white truncate">
                              {m.label}
                            </span>
                            {m.isComplete && (
                              <HugeiconsIcon icon={Tick01Icon} size={10} className="text-emerald-500 shrink-0" />
                            )}
                          </div>
                          <span className="text-[8.5px] text-slate-500 dark:text-slate-400 truncate block">
                            {m.sublabel}
                          </span>
                        </div>
                      </div>

                      {/* Right: Status Pill */}
                      <span className={`text-[8px] font-bold font-mono px-2 py-0.5 rounded-full border whitespace-nowrap shrink-0 ${m.statusColor}`}>
                        {m.escrowStatus}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Biometric Fingerprint Verification Area */}
              <div className="rounded-2xl p-2.5 bg-slate-200/70 dark:bg-slate-900 border border-slate-300/80 dark:border-white/10 flex items-center justify-between gap-2.5 relative overflow-hidden">
                
                {/* Fingerprint Scanner with Hardware-Accelerated Neon Scan */}
                <div className="relative w-9 h-9 rounded-lg bg-slate-900 dark:bg-black flex items-center justify-center shrink-0 overflow-hidden border border-emerald-500/30">
                  <HugeiconsIcon
                    icon={FingerPrintScanIcon}
                    size={20}
                    className="text-emerald-400 drop-shadow-[0_0_6px_rgba(52,211,153,0.6)]"
                  />
                  {/* Moving Neon Laser Scan Line */}
                  <div
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_6px_#34d399] animate-float"
                    style={{ animationDuration: "2.4s" }}
                  />
                </div>

                {/* Verification Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 text-[8.5px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Verifikasi Escrow</span>
                  </div>
                  <p className="text-[9.5px] font-bold text-slate-800 dark:text-slate-200 leading-tight">
                    Dana Cair HANYA Jika Hasil Staging Disetujui
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Home Indicator Bar */}
            <div className="w-full pb-1.5 pt-0.5 flex justify-center shrink-0">
              <div className="w-24 h-1 rounded-full bg-slate-400 dark:bg-slate-600 opacity-60" />
            </div>

          </div>
        </div>


        {/* ══════════════════════════════════════════════════════════════════
            3. FLOATING SMART PAYMENT CARD (Bottom-Right, Inspired by Video)
           ══════════════════════════════════════════════════════════════════ */}
        <div
          className="absolute -bottom-2 right-1 sm:right-2 z-30 pointer-events-none transform-gpu animate-float-delayed"
          style={{ willChange: "transform" }}
        >
          {/* Obsidian Emerald Glassmorphism Card */}
          <div className="relative w-44 sm:w-50 h-28 sm:h-31 rounded-2xl p-3 sm:p-3.5 bg-gradient-to-br from-slate-900 via-[#0B1E19] to-emerald-950 border border-emerald-500/40 shadow-[0_16px_36px_rgba(0,0,0,0.4)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.85)] flex flex-col justify-between overflow-hidden -rotate-6">
            
            {/* Holographic Sheen */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-400/[0.05] to-cyan-300/[0.10]" />

            {/* Card Header: Chip + SafePay Logo */}
            <div className="flex items-center justify-between relative z-10">
              {/* Golden EMV Smart Chip */}
              <div className="w-7 h-5 rounded-sm bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 border border-amber-300/60 flex items-center justify-center p-0.5 shadow-xs">
                <div className="w-full h-full border border-amber-900/40 rounded-2xs grid grid-cols-2 gap-0.5 opacity-60" />
              </div>
              
              <div className="flex items-center gap-1">
                <HugeiconsIcon icon={SparklesIcon} size={12} className="text-emerald-400" />
                <span className="text-[9px] font-black tracking-wider text-emerald-300 uppercase font-mono">
                  SafePay
                </span>
              </div>
            </div>

            {/* Masked Milestone Card Number */}
            <div className="relative z-10 my-0.5">
              <span className="font-mono text-xs sm:text-[13px] font-bold tracking-[0.2em] text-white/90 drop-shadow-sm">
                •••• 3040 3000
              </span>
            </div>

            {/* Card Footer: Holder & Milestone Tag */}
            <div className="flex items-center justify-between relative z-10 text-[8.5px] font-mono text-slate-300">
              <div>
                <span className="text-[7px] uppercase tracking-wider text-slate-400 block leading-none">
                  Sistem Pembayaran
                </span>
                <span className="font-bold text-white tracking-wide">MILESTONE 30-40-30</span>
              </div>
              <span className="px-1.5 py-0.5 rounded-sm bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-400/30 text-[7.5px]">
                NO RISK
              </span>
            </div>

          </div>
        </div>

        {/* Floor Contact Shadow */}
        <div className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-6 bg-slate-900/10 dark:bg-black/50 blur-lg rounded-full" />
      </div>

      {/* ─── FLOATING VALUE BADGES (Below Device, No Card Box!) ─── */}
      <div className="mt-4 relative z-30 flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-[11px] font-bold text-slate-700 dark:text-slate-200">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-white/10 shadow-xs">
          <HugeiconsIcon icon={CheckmarkBadge01Icon} size={13} className="text-emerald-500" />
          Tanpa DP Mengambang
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-white/10 shadow-xs">
          <HugeiconsIcon icon={FlashIcon} size={13} className="text-cyan-500" />
          Uji Coba Staging Dulu
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-white/10 shadow-xs">
          <HugeiconsIcon icon={ShieldCheckIcon} size={13} className="text-amber-500" />
          Pelunasan Pas Puas
        </span>
      </div>

    </div>
  );
}
