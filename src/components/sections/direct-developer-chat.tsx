"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AttachmentIcon,
  Camera01Icon,
  SmileIcon,
  CheckmarkBadge01Icon,
  FlashIcon,
  ShieldCheckIcon,
} from "@hugeicons/core-free-icons";

function WhatsAppDoubleCheck() {
  return (
    <svg
      viewBox="0 0 16 15"
      className="w-3.5 h-3 text-[#53BDEB] inline-block shrink-0 -mr-0.5"
      fill="none"
    >
      <path
        d="M15.01 3.316l-7.79 7.79-3.79-3.79-.71.71 4.5 4.5 8.5-8.5-.71-.71z"
        fill="currentColor"
      />
      <path
        d="M11.51 3.316l-7.79 7.79-3.79-3.79-.71.71 4.5 4.5 8.5-8.5-.71-.71z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DirectDeveloperChatShowcase() {
  // Staggered conversation steps
  // 0: Initial question & answer visible
  // 1: Client confirmation pops in
  // 2: Mas Eko execution confirmation
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Progressive natural chat timing
    timers.push(setTimeout(() => setStep(2), 2400)); // Client confirmation pops in
    timers.push(setTimeout(() => setStep(3), 4600)); // Mas Eko final reply

    // Seamless loop every 14 seconds
    const interval = setInterval(() => {
      setStep(1);
      timers.push(setTimeout(() => setStep(2), 2400));
      timers.push(setTimeout(() => setStep(3), 4600));
    }, 14000);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center select-none">
      
      {/* ─── Ambient Glow Pools behind Phone ─── */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[380px] h-[380px] rounded-full bg-emerald-500/12 dark:bg-emerald-500/18 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 w-[320px] h-[320px] rounded-full bg-teal-500/10 dark:bg-teal-500/15 blur-[90px]" />

      {/* ─── TALL REALISTIC SMARTPHONE MOCKUP: iPHONE 17 PRO MAX FORM FACTOR ─── */}
      <div className="relative w-[285px] sm:w-[295px] lg:w-[305px] h-[575px] sm:h-[595px] lg:h-[610px] rounded-[48px] sm:rounded-[52px] p-[6.5px] sm:p-[7.5px] bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 dark:from-slate-600 dark:via-slate-800 dark:to-slate-900 shadow-[0_25px_60px_rgba(0,0,0,0.35)] dark:shadow-[0_30px_75px_rgba(0,0,0,0.85)] border border-slate-600/70 dark:border-slate-500/50 z-20 transform-gpu isolate">
        
        {/* Phone Side Hardware Buttons (iPhone 17 Pro Max Titanium Action & Control Buttons) */}
        <div className="absolute -left-[8px] top-[72px] w-[2.5px] h-[20px] bg-slate-500/80 rounded-l-xs" />
        <div className="absolute -left-[8px] top-[106px] w-[2.5px] h-[40px] bg-slate-500/80 rounded-l-xs" />
        <div className="absolute -left-[8px] top-[156px] w-[2.5px] h-[40px] bg-slate-500/80 rounded-l-xs" />
        <div className="absolute -right-[8px] top-[106px] w-[2.5px] h-[54px] bg-slate-500/80 rounded-r-xs" />
        <div className="absolute -right-[7px] bottom-[110px] w-[2px] h-[34px] bg-slate-500/60 rounded-r-xs" />

        {/* ─── PHONE SCREEN CONTAINER ─── */}
        <div className="relative w-full h-full rounded-[42px] sm:rounded-[46px] overflow-hidden flex flex-col justify-between bg-[#EFEAE2] dark:bg-[#0B141A] text-slate-900 dark:text-slate-100 transition-colors duration-300">
          
          {/* Subtle WhatsApp Wallpaper Texture Overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.05] bg-repeat"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: "18px 18px",
            }}
          />

          {/* ════════════════════════════════════════════════════════════════
              1. TOP STATUS BAR + WHATSAPP APP BAR (Clean Mas Eko)
             ════════════════════════════════════════════════════════════════ */}
          <div className="relative z-20 shrink-0">
            {/* iOS Status Bar */}
            <div className="bg-[#075E54] dark:bg-[#1F2C34] text-white/90 px-4 pt-2.5 pb-1 flex items-center justify-between text-[10.5px] font-semibold tracking-tight">
              <span className="font-mono">10:15</span>
              {/* Dynamic Island Pill */}
              <div className="w-[94px] h-[22px] bg-black rounded-full flex items-center justify-center gap-1.5 px-2 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[8.5px] font-mono text-emerald-300 font-bold tracking-wider">DEV•DIRECT</span>
              </div>
              <div className="flex items-center gap-1.5 text-[9.5px]">
                <span>5G</span>
                <span className="w-3.5 h-2 border border-current rounded-xs p-0.5 flex items-center">
                  <span className="w-full h-full bg-emerald-400 rounded-2xs" />
                </span>
              </div>
            </div>

            {/* WhatsApp App Bar */}
            <div className="bg-[#075E54] dark:bg-[#1F2C34] text-white px-3 py-2 flex items-center justify-between shadow-2xs">
              {/* Back Arrow & Avatar */}
              <div className="flex items-center gap-2.5 min-w-0">
                <svg className="w-4 h-4 shrink-0 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>

                {/* Mas Eko Profile Photo with Online Indicator */}
                <div className="relative shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 border border-white/25 flex items-center justify-center font-black text-[11px] text-white shadow-2xs">
                    ME
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#075E54] dark:border-[#1F2C34]" />
                </div>

                {/* Identity & Status */}
                <div className="min-w-0 leading-tight">
                  <span className="font-bold text-[13px] tracking-tight block truncate">
                    Mas Eko
                  </span>
                  <p className="text-[10px] text-emerald-200/95 truncate flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    online
                  </p>
                </div>
              </div>

              {/* Action Icons (Video, Phone, Menu) */}
              <div className="flex items-center gap-2.5 text-white/90 shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z" />
                </svg>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
                </svg>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              2. CHAT CANVAS & CONVERSATION STREAM (Top-to-Bottom Natural Flow)
             ════════════════════════════════════════════════════════════════ */}
          <div className="relative z-10 flex-1 px-3 py-3 overflow-hidden space-y-2.5 font-sans flex flex-col justify-start">
            
            {/* Date Pill at Top */}
            <div className="flex justify-center my-0.5">
              <span className="px-2.5 py-0.5 rounded-md text-[9px] font-semibold bg-white/75 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 shadow-2xs">
                Hari Ini
              </span>
            </div>

            {/* Bubble 1: Client Inbound (Natural Revision / Inquiry) */}
            <div className="flex flex-col items-start max-w-[88%]">
              <div className="relative rounded-2xl rounded-tl-xs px-3 py-2 bg-white dark:bg-[#202C33] text-slate-800 dark:text-slate-100 text-[11px] leading-snug shadow-2xs border border-black/[0.04] dark:border-white/[0.04]">
                <p>
                  Mas Eko, dari hasil tes link demo kemarin, tim minta alur approval cuti ditambah 1 layer lagi sebelum ke pimpinan. Kira-kira ribet gak ya?
                </p>
                <div className="flex items-center justify-end mt-1 text-[9px] text-slate-400 dark:text-slate-500">
                  <span>10:15</span>
                </div>
              </div>
            </div>

            {/* Bubble 2: Mas Eko Outbound (Fast, Modular Technical Answer) */}
            <div className="flex flex-col items-end self-end max-w-[90%] ml-auto">
              <div className="relative rounded-2xl rounded-tr-xs px-3 py-2 bg-[#E7FFDB] dark:bg-[#005C4B] text-slate-900 dark:text-emerald-50 text-[11px] leading-snug shadow-2xs border border-emerald-500/10">
                <p>
                  Aman Mas! Kemarin logikanya sudah kita buat modular. Tinggal saya tambah 1 role condition di service approval-nya.
                </p>
                <p className="mt-1">
                  Nanti sore jam 4 sudah langsung bisa dicoba lagi di link demonya 👍
                </p>
                <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-emerald-700/80 dark:text-emerald-300/80">
                  <span>10:16</span>
                  <WhatsAppDoubleCheck />
                </div>
              </div>
            </div>

            {/* Bubble 3: Client Confirmation (Natural Gratitude) */}
            <AnimatePresence>
              {step >= 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-start max-w-[86%]"
                >
                  <div className="relative rounded-2xl rounded-tl-xs px-3 py-1.5 bg-white dark:bg-[#202C33] text-slate-800 dark:text-slate-100 text-[11px] leading-snug shadow-2xs border border-black/[0.04] dark:border-white/[0.04]">
                    <p>
                      Wah gercep banget Mas. Oke siap, nanti sore tim kami tes lagi ya. Thank you!
                    </p>
                    <div className="flex items-center justify-end mt-0.5 text-[9px] text-slate-400 dark:text-slate-500">
                      <span>10:17</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bubble 4: Mas Eko Final Friendly Confirmation */}
            <AnimatePresence>
              {step >= 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-end self-end max-w-[84%] ml-auto"
                >
                  <div className="relative rounded-2xl rounded-tr-xs px-3 py-1.5 bg-[#E7FFDB] dark:bg-[#005C4B] text-slate-900 dark:text-emerald-50 text-[11px] leading-snug shadow-2xs border border-emerald-500/10">
                    <p>
                      Sama-sama Mas, siap langsung saya eksekusi 🚀
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-0.5 text-[9px] text-emerald-700/80 dark:text-emerald-300/80">
                      <span>10:17</span>
                      <WhatsAppDoubleCheck />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* ════════════════════════════════════════════════════════════════
              3. WHATSAPP BOTTOM CHAT INPUT BAR
             ════════════════════════════════════════════════════════════════ */}
          <div className="relative z-20 shrink-0 px-2 py-1.5 bg-[#F0F2F5] dark:bg-[#202C33] border-t border-slate-200/60 dark:border-white/5 flex items-center gap-1.5">
            <div className="flex items-center text-slate-500 dark:text-slate-400">
              <HugeiconsIcon icon={SmileIcon} size={15} />
            </div>

            {/* Input Pill */}
            <div className="flex-1 bg-white dark:bg-[#2A3942] rounded-full px-3 py-1 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-400 shadow-2xs">
              <span className="truncate">Ketik pesan...</span>
              <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
                <HugeiconsIcon icon={AttachmentIcon} size={13} />
                <HugeiconsIcon icon={Camera01Icon} size={13} />
              </div>
            </div>

            {/* Mic / Send Button */}
            <div className="w-7 h-7 rounded-full bg-[#00A884] flex items-center justify-center text-white shadow-2xs shrink-0">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
              </svg>
            </div>
          </div>

          {/* Home Indicator Bar */}
          <div className="bg-[#F0F2F5] dark:bg-[#202C33] pb-1 flex justify-center">
            <div className="w-24 h-1 bg-slate-400/50 dark:bg-white/20 rounded-full" />
          </div>

        </div>
      </div>

      {/* ─── FLOATING VALUE BADGES (Below Device, Consistent with other tabs) ─── */}
      <div className="mt-4 relative z-30 flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-[11px] font-bold text-slate-700 dark:text-slate-200">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-white/10 shadow-xs">
          <HugeiconsIcon icon={CheckmarkBadge01Icon} size={13} className="text-emerald-500" />
          Langsung Lead Developer
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-white/10 shadow-xs">
          <HugeiconsIcon icon={FlashIcon} size={13} className="text-cyan-500" />
          Respon Cepat &amp; Solutif
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-white/10 shadow-xs">
          <HugeiconsIcon icon={ShieldCheckIcon} size={13} className="text-amber-500" />
          Tanpa Perantara Sales
        </span>
      </div>

    </div>
  );
}
