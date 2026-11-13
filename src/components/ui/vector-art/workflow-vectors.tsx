"use client";

import React from "react";

/**
 * ─── VECTOR ART 01: CURHAT KEBUTUHAN & DISKUSI WA ─────────────────────────────
 * Ilustrasi Vektor Interaktif: Percakapan instan, ide kodingan, dan lampu ide solutif.
 */
export function VectorStepChat() {
  return (
    <div className="relative w-full h-32 rounded-2xl overflow-hidden bg-gradient-to-b from-[#081220] to-[#040810] border border-emerald-500/20 p-2 flex items-center justify-center group-hover:border-emerald-500/40 transition-colors">
      <svg
        viewBox="0 0 240 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
      >
        <defs>
          <linearGradient id="chatGradEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
          <linearGradient id="chatBubbleUser" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <filter id="emeraldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Grid Backdrop */}
        <path
          d="M20 20 H220 M20 60 H220 M20 100 H220 M60 10 V110 M120 10 V110 M180 10 V110"
          stroke="#10B981"
          strokeOpacity="0.07"
          strokeWidth="1"
          strokeDasharray="2 3"
        />

        {/* Central Connecting Signal Wave */}
        <path
          d="M50 60 C80 30, 90 90, 120 60 C150 30, 160 90, 190 60"
          stroke="url(#chatGradEmerald)"
          strokeWidth="1.5"
          strokeOpacity="0.3"
          strokeDasharray="4 4"
        />

        {/* User Chat Bubble (Left / Incoming) */}
        <g transform="translate(24, 22)">
          <rect
            width="90"
            height="32"
            rx="10"
            fill="url(#chatBubbleUser)"
            stroke="#334155"
            strokeWidth="1"
          />
          <path d="M12 32 L8 38 L18 32 Z" fill="#0F172A" stroke="#334155" strokeWidth="1" />
          {/* Mock message lines */}
          <rect x="12" y="10" width="60" height="4" rx="2" fill="#94A3B8" />
          <rect x="12" y="18" width="42" height="4" rx="2" fill="#64748B" />
          {/* Typing dots */}
          <circle cx="80" cy="16" r="2" fill="#10B981" className="animate-pulse" />
        </g>

        {/* Developer Response Bubble (Right / Outgoing) */}
        <g transform="translate(126, 56)">
          <rect
            width="92"
            height="36"
            rx="10"
            fill="#06281E"
            stroke="#10B981"
            strokeWidth="1.2"
            filter="url(#emeraldGlow)"
          />
          <path d="M78 36 L84 42 L72 36 Z" fill="#06281E" stroke="#10B981" strokeWidth="1" />
          {/* Code badge in reply */}
          <rect x="10" y="8" width="46" height="5" rx="2.5" fill="#34D399" />
          <rect x="10" y="17" width="68" height="4" rx="2" fill="#10B981" fillOpacity="0.7" />
          <rect x="10" y="24" width="32" height="4" rx="2" fill="#10B981" fillOpacity="0.4" />
          {/* Double checkmark */}
          <path
            d="M78 26 L81 29 L86 23 M82 26 L85 29 L90 23"
            stroke="#34D399"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </g>

        {/* Floating Idea Sparkle Bulb */}
        <g transform="translate(108, 14)">
          <circle cx="12" cy="12" r="10" fill="#10B981" fillOpacity="0.15" />
          <circle cx="12" cy="12" r="6" fill="#10B981" fillOpacity="0.3" />
          <path
            d="M12 5 V8 M12 16 V19 M5 12 H8 M16 12 H19"
            stroke="#34D399"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
}

/**
 * ─── VECTOR ART 02: KUNCI FITUR & ESTIMASI BIAYA (LOCKED SCOPE) ───────────────
 * Ilustrasi Vektor Interaktif: Lembar dokumen transparan, gembok siber emas, dan stempel "NO SILUMAN".
 */
export function VectorStepScope() {
  return (
    <div className="relative w-full h-32 rounded-2xl overflow-hidden bg-gradient-to-b from-[#081220] to-[#040810] border border-emerald-500/20 p-2 flex items-center justify-center group-hover:border-emerald-500/40 transition-colors">
      <svg
        viewBox="0 0 240 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
      >
        <defs>
          <linearGradient id="docGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0B132B" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="goldLockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>

        {/* Ambient Grid Backdrop */}
        <circle cx="120" cy="60" r="45" stroke="#10B981" strokeOpacity="0.08" strokeWidth="1" />
        <circle cx="120" cy="60" r="30" stroke="#10B981" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="3 3" />

        {/* Backsheet Paper (Layered) */}
        <rect
          x="62"
          y="20"
          width="116"
          height="80"
          rx="8"
          fill="#0F172A"
          stroke="#1E293B"
          strokeWidth="1"
          transform="rotate(-4 120 60)"
        />

        {/* Main Document Sheet */}
        <rect
          x="65"
          y="18"
          width="110"
          height="84"
          rx="8"
          fill="url(#docGrad)"
          stroke="#10B981"
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />

        {/* Document Header Badge */}
        <rect x="75" y="26" width="40" height="6" rx="3" fill="#10B981" fillOpacity="0.8" />
        <rect x="120" y="27" width="22" height="4" rx="2" fill="#38BDF8" fillOpacity="0.6" />

        {/* Checklist Rows with Vector Checkmarks */}
        <g transform="translate(75, 40)">
          {/* Row 1: Fitur Terkunci */}
          <circle cx="4" cy="4" r="3.5" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="1" />
          <path d="M2.5 4 L3.5 5.2 L5.5 2.8" stroke="#34D399" strokeWidth="1" strokeLinecap="round" />
          <rect x="12" y="2" width="55" height="4" rx="2" fill="#E2E8F0" fillOpacity="0.8" />

          {/* Row 2: Biaya Flat */}
          <circle cx="4" cy="14" r="3.5" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="1" />
          <path d="M2.5 14 L3.5 15.2 L5.5 12.8" stroke="#34D399" strokeWidth="1" strokeLinecap="round" />
          <rect x="12" y="12" width="42" height="4" rx="2" fill="#94A3B8" fillOpacity="0.8" />

          {/* Row 3: Deadline Resmi */}
          <circle cx="4" cy="24" r="3.5" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="1" />
          <path d="M2.5 24 L3.5 25.2 L5.5 22.8" stroke="#34D399" strokeWidth="1" strokeLinecap="round" />
          <rect x="12" y="22" width="48" height="4" rx="2" fill="#94A3B8" fillOpacity="0.8" />
        </g>

        {/* Cyber Padlock (Foreground Icon) */}
        <g transform="translate(150, 48)">
          {/* Padlock Loop */}
          <path
            d="M8 8 V4 A7 7 0 0 1 22 4 V8"
            stroke="url(#goldLockGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Padlock Body */}
          <rect
            x="3"
            y="7"
            width="24"
            height="20"
            rx="5"
            fill="url(#goldLockGrad)"
            stroke="#FEF3C7"
            strokeWidth="0.8"
          />
          {/* Keyhole */}
          <circle cx="15" cy="15" r="2" fill="#78350F" />
          <path d="M15 16 V19" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Small "RP 0 SILUMAN" Stamp Pill */}
        <g transform="translate(75, 78)">
          <rect x="0" y="0" width="58" height="15" rx="4" fill="#065F46" stroke="#34D399" strokeWidth="0.8" />
          <text x="6" y="11" fill="#A7F3D0" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
            FIXED COST
          </text>
        </g>
      </svg>
    </div>
  );
}

/**
 * ─── VECTOR ART 03: EKSEKUSI & PANTAU LIVE STAGING ────────────────────────────
 * Ilustrasi Vektor Interaktif: Cloud server rack neon, browser live viewport, dan radar pulse.
 */
export function VectorStepStaging() {
  return (
    <div className="relative w-full h-32 rounded-2xl overflow-hidden bg-gradient-to-b from-[#081220] to-[#040810] border border-emerald-500/20 p-2 flex items-center justify-center group-hover:border-emerald-500/40 transition-colors">
      <svg
        viewBox="0 0 240 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
      >
        <defs>
          <linearGradient id="browserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B132B" />
            <stop offset="100%" stopColor="#030712" />
          </linearGradient>
          <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>

        {/* Digital Grid Horizon */}
        <path
          d="M10 95 L120 70 L230 95 M120 70 V115 M65 82 V115 M175 82 V115"
          stroke="#06B6D4"
          strokeOpacity="0.12"
          strokeWidth="1"
        />

        {/* Staging Browser Window (Main Stage) */}
        <g transform="translate(30, 16)">
          <rect
            width="140"
            height="86"
            rx="8"
            fill="url(#browserGrad)"
            stroke="#10B981"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          {/* Top Window Bar */}
          <path
            d="M0 8 C0 3.58 3.58 0 8 0 H132 C136.42 0 140 3.58 140 8 V16 H0 V8 Z"
            fill="#1E293B"
          />
          {/* Window action dots */}
          <circle cx="8" cy="8" r="2.5" fill="#EF4444" />
          <circle cx="16" cy="8" r="2.5" fill="#F59E0B" />
          <circle cx="24" cy="8" r="2.5" fill="#10B981" />
          {/* URL Pill */}
          <rect x="36" y="3.5" width="80" height="9" rx="4.5" fill="#0F172A" stroke="#334155" strokeWidth="0.8" />
          <text x="42" y="10.5" fill="#34D399" fontSize="5.5" fontFamily="monospace">
            staging.ecodigital.id
          </text>

          {/* Browser Content Layout */}
          <rect x="10" y="22" width="30" height="16" rx="3" fill="#1E293B" />
          <rect x="45" y="22" width="85" height="5" rx="2.5" fill="#38BDF8" fillOpacity="0.7" />
          <rect x="45" y="30" width="60" height="4" rx="2" fill="#64748B" />

          {/* Interactive Metric Cards */}
          <rect x="10" y="44" width="36" height="20" rx="4" fill="#064E3B" fillOpacity="0.5" stroke="#10B981" strokeWidth="0.8" />
          <rect x="14" y="48" width="18" height="3" rx="1.5" fill="#6EE7B7" />
          <rect x="14" y="55" width="26" height="4" rx="2" fill="#34D399" />

          <rect x="52" y="44" width="36" height="20" rx="4" fill="#1E293B" />
          <rect x="94" y="44" width="36" height="20" rx="4" fill="#1E293B" />

          {/* Progress Bar in Window */}
          <rect x="10" y="72" width="120" height="5" rx="2.5" fill="#0F172A" />
          <rect x="10" y="72" width="90" height="5" rx="2.5" fill="url(#cloudGrad)" />
        </g>

        {/* Cloud & Server Sync Node (Floating on right) */}
        <g transform="translate(182, 32)">
          {/* Pulse Signal Rings */}
          <circle cx="20" cy="20" r="24" stroke="#10B981" strokeOpacity="0.15" strokeWidth="1" className="animate-ping" />
          <circle cx="20" cy="20" r="18" stroke="#06B6D4" strokeOpacity="0.3" strokeWidth="1" />
          {/* Cloud Badge */}
          <rect x="4" y="6" width="32" height="28" rx="8" fill="#0F172A" stroke="#10B981" strokeWidth="1.2" />
          <circle cx="14" cy="15" r="4" fill="#34D399" />
          <circle cx="24" cy="17" r="5" fill="#06B6D4" />
          <rect x="11" y="16" width="18" height="6" rx="2" fill="#10B981" />
          {/* Status LED */}
          <circle cx="20" cy="28" r="2" fill="#34D399" />
        </g>
      </svg>
    </div>
  );
}

/**
 * ─── VECTOR ART 04: CLOUD DEPLOYMENT, VIDEO TUTORIAL & SERAH TERIMA TUNTAS ─────
 * Ilustrasi Vektor Interaktif: Cloud Server Go-Live, Video Panduan Admin player, dan Brankas Source Code.
 */
export function VectorStepHandover() {
  return (
    <div className="relative w-full h-32 rounded-2xl overflow-hidden bg-gradient-to-b from-[#081220] to-[#040810] border border-emerald-500/20 p-2 flex items-center justify-center group-hover:border-emerald-500/40 transition-colors">
      <svg
        viewBox="0 0 240 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
      >
        <defs>
          <linearGradient id="serverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0B132B" />
          </linearGradient>
          <linearGradient id="cloudGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>

        {/* Ambient Victory Starburst */}
        <g transform="translate(120, 60)" stroke="#10B981" strokeOpacity="0.1" strokeWidth="1">
          <line x1="0" y1="-45" x2="0" y2="45" />
          <line x1="-55" y1="0" x2="55" y2="0" />
          <line x1="-38" y1="-38" x2="38" y2="38" />
          <line x1="-38" y1="38" x2="38" y2="-38" />
        </g>

        {/* Production Cloud / Server Go-Live (Left Badge) */}
        <g transform="translate(24, 20)">
          {/* Server Unit */}
          <rect x="8" y="10" width="56" height="38" rx="8" fill="url(#serverGrad)" stroke="#10B981" strokeWidth="1.2" />
          {/* Server Rack Slot 1 */}
          <rect x="14" y="16" width="36" height="4" rx="2" fill="#334155" />
          <circle cx="56" cy="18" r="2" fill="#34D399" />
          {/* Server Rack Slot 2 */}
          <rect x="14" y="24" width="36" height="4" rx="2" fill="#334155" />
          <circle cx="56" cy="26" r="2" fill="#38BDF8" />
          {/* Server Rack Slot 3 */}
          <rect x="14" y="32" width="28" height="4" rx="2" fill="#334155" />
          <circle cx="56" cy="34" r="2" fill="#34D399" />

          {/* GO-LIVE 🚀 Ribbon Banner */}
          <g transform="translate(6, 44)">
            <rect x="0" y="0" width="60" height="16" rx="8" fill="#065F46" stroke="#34D399" strokeWidth="1" />
            <text x="7" y="11.5" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
              GO-LIVE 🚀
            </text>
          </g>
        </g>

        {/* Video Bedah Koding Player (Center/Right Badge) */}
        <g transform="translate(122, 26)">
          <rect
            width="86"
            height="56"
            rx="8"
            fill="#0B132B"
            stroke="#38BDF8"
            strokeWidth="1.2"
            strokeOpacity="0.6"
          />
          {/* Video Title Bar */}
          <rect x="0" y="0" width="86" height="12" rx="8" fill="#1E293B" />
          <rect x="8" y="4" width="30" height="3.5" rx="1.5" fill="#94A3B8" />
          {/* Center Play Button with Neon Glow */}
          <circle cx="43" cy="34" r="12" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="1.2" />
          <polygon points="40,29 48,34 40,39" fill="#34D399" />
          {/* Timeline */}
          <rect x="8" y="49" width="70" height="3" rx="1.5" fill="#1E293B" />
          <rect x="8" y="49" width="44" height="3" rx="1.5" fill="#38BDF8" />
        </g>

        {/* Full Source Code Package Lock Badge */}
        <g transform="translate(186, 68)">
          <circle cx="12" cy="12" r="12" fill="#0F172A" stroke="#10B981" strokeWidth="1" />
          <path d="M7 12 L10.5 15.5 L17 9" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

