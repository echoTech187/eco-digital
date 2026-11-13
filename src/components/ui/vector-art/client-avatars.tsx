"use client";

import React from "react";

interface VectorAvatarProps {
  id: string;
  className?: string;
}

export function VectorAvatar({ id, className = "w-10 h-10" }: VectorAvatarProps) {
  switch (id) {
    case "rifqi":
      // Mahasiswa Teknik Informatika: Modern tech student with spectacles and hoodie
      return (
        <div className={`relative shrink-0 rounded-2xl overflow-hidden border border-emerald-400/40 bg-gradient-to-tr from-emerald-950 to-slate-900 shadow-md ${className}`}>
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Background Halo */}
            <circle cx="24" cy="24" r="20" fill="#10B981" fillOpacity="0.15" />
            {/* Hoodie Body */}
            <path d="M12 44 C12 36 17 32 24 32 C31 32 36 36 36 44 Z" fill="#047857" />
            <path d="M17 34 L24 44 L31 34" stroke="#34D399" strokeWidth="1" />
            {/* Neck */}
            <rect x="21" y="27" width="6" height="6" fill="#FBCFE8" />
            {/* Face */}
            <ellipse cx="24" cy="21" rx="8" ry="9" fill="#FDE047" fillOpacity="0.85" />
            {/* Hair */}
            <path d="M16 19 C16 13 19 11 24 11 C29 11 32 13 32 19 C29 17 25 17 20 18 Z" fill="#0F172A" />
            {/* Glasses */}
            <rect x="18" y="19" width="4.5" height="3.5" rx="1" stroke="#0F172A" strokeWidth="1" fill="#FFFFFF" fillOpacity="0.4" />
            <rect x="25.5" y="19" width="4.5" height="3.5" rx="1" stroke="#0F172A" strokeWidth="1" fill="#FFFFFF" fillOpacity="0.4" />
            <line x1="22.5" y1="20.5" x2="25.5" y2="20.5" stroke="#0F172A" strokeWidth="1" />
            {/* Smile */}
            <path d="M22 26 Q24 28 26 26" stroke="#B45309" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "bambang":
      // Kasubag Kedinasan: Formal officer with collar and neat executive hair
      return (
        <div className={`relative shrink-0 rounded-2xl overflow-hidden border border-blue-400/40 bg-gradient-to-tr from-blue-950 to-slate-900 shadow-md ${className}`}>
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="24" cy="24" r="20" fill="#3B82F6" fillOpacity="0.15" />
            {/* Formal Suit & Tie */}
            <path d="M10 44 C10 35 16 31 24 31 C32 31 38 35 38 44 Z" fill="#1E3A8A" />
            <polygon points="24,31 20,44 28,44" fill="#FFFFFF" />
            <polygon points="24,33 22,44 26,44" fill="#EF4444" />
            {/* Neck */}
            <rect x="21" y="26" width="6" height="6" fill="#FED7AA" />
            {/* Face */}
            <ellipse cx="24" cy="20" rx="8" ry="9" fill="#FED7AA" />
            {/* Executive Hair with Silver touch */}
            <path d="M16 18 C16 11 20 10 24 10 C28 10 32 11 32 18 C30 16 27 15 22 16 Z" fill="#334155" />
            <path d="M28 14 C30 14 31 16 32 18" stroke="#94A3B8" strokeWidth="1" />
            {/* Eyes & Smile */}
            <circle cx="21" cy="19" r="1" fill="#1E293B" />
            <circle cx="27" cy="19" r="1" fill="#1E293B" />
            <path d="M21.5 25 Q24 27 26.5 25" stroke="#9A3412" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "dimas":
      // Owner Retail & Grosir: Energetic young entrepreneur
      return (
        <div className={`relative shrink-0 rounded-2xl overflow-hidden border border-amber-400/40 bg-gradient-to-tr from-amber-950 to-slate-900 shadow-md ${className}`}>
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="24" cy="24" r="20" fill="#F59E0B" fillOpacity="0.15" />
            {/* Casual Jacket */}
            <path d="M11 44 C11 35 17 31 24 31 C31 31 37 35 37 44 Z" fill="#78350F" />
            <path d="M20 33 L24 44 L28 33" fill="#D97706" />
            {/* Neck */}
            <rect x="21" y="27" width="6" height="5" fill="#FDE047" />
            {/* Face */}
            <ellipse cx="24" cy="20" rx="8" ry="9" fill="#FDE047" />
            {/* Cap */}
            <path d="M16 16 C16 12 19 10 24 10 C29 10 32 12 32 16 Z" fill="#0F172A" />
            <ellipse cx="24" cy="15" rx="9" ry="2" fill="#D97706" />
            {/* Eyes & Smile */}
            <circle cx="21" cy="19" r="1" fill="#1E293B" />
            <circle cx="27" cy="19" r="1" fill="#1E293B" />
            <path d="M21 24 Q24 27 27 24" stroke="#78350F" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "vania":
      // dr. Vania: Medical researcher with stethoscope
      return (
        <div className={`relative shrink-0 rounded-2xl overflow-hidden border border-teal-400/40 bg-gradient-to-tr from-teal-950 to-slate-900 shadow-md ${className}`}>
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="24" cy="24" r="20" fill="#14B8A6" fillOpacity="0.15" />
            {/* Doctor's White Coat */}
            <path d="M11 44 C11 35 17 31 24 31 C31 31 37 35 37 44 Z" fill="#F8FAFC" />
            {/* Stethoscope */}
            <path d="M18 33 C18 40 30 40 30 33" stroke="#0D9488" strokeWidth="1.2" fill="none" />
            <circle cx="24" cy="38" r="2" fill="#0F766E" />
            {/* Neck */}
            <rect x="21" y="26" width="6" height="6" fill="#FECDD3" />
            {/* Face */}
            <ellipse cx="24" cy="19" rx="7.5" ry="8.5" fill="#FECDD3" />
            {/* Hair */}
            <path d="M15 18 C15 10 19 9 24 9 C29 9 33 10 33 18 C33 24 31 25 31 27 C29 20 28 15 24 15 C20 15 19 20 17 27 C17 25 15 24 15 18 Z" fill="#3B0764" />
            {/* Eyes & Smile */}
            <circle cx="21" cy="18" r="1" fill="#1E293B" />
            <circle cx="27" cy="18" r="1" fill="#1E293B" />
            <path d="M22 23 Q24 25 26 23" stroke="#E11D48" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "kevin":
      // Kevin: Sistem Informasi student with headset
      return (
        <div className={`relative shrink-0 rounded-2xl overflow-hidden border border-purple-400/40 bg-gradient-to-tr from-purple-950 to-slate-900 shadow-md ${className}`}>
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="24" cy="24" r="20" fill="#A855F7" fillOpacity="0.15" />
            {/* T-Shirt */}
            <path d="M12 44 C12 36 17 32 24 32 C31 32 36 36 36 44 Z" fill="#581C87" />
            {/* Headset on neck */}
            <path d="M15 32 C15 36 33 36 33 32" stroke="#9333EA" strokeWidth="2.5" fill="none" />
            {/* Neck */}
            <rect x="21" y="27" width="6" height="6" fill="#FDE047" />
            {/* Face */}
            <ellipse cx="24" cy="20" rx="8" ry="9" fill="#FDE047" />
            {/* Modern Haircut */}
            <path d="M16 17 C16 11 19 9 24 9 C29 9 32 11 32 17 C28 14 20 14 16 17 Z" fill="#18181B" />
            {/* Eyes & Smile */}
            <circle cx="21" cy="19" r="1" fill="#1E293B" />
            <circle cx="27" cy="19" r="1" fill="#1E293B" />
            <path d="M21.5 24 Q24 26.5 26.5 24" stroke="#A16207" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "subagyo":
      // Drs. M. Subagyo: Senior IT Teacher & Lab Head
      return (
        <div className={`relative shrink-0 rounded-2xl overflow-hidden border border-cyan-400/40 bg-gradient-to-tr from-cyan-950 to-slate-900 shadow-md ${className}`}>
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="24" cy="24" r="20" fill="#06B6D4" fillOpacity="0.15" />
            {/* Batik / Formal Collar */}
            <path d="M10 44 C10 35 16 31 24 31 C32 31 38 35 38 44 Z" fill="#164E63" />
            <line x1="24" y1="31" x2="24" y2="44" stroke="#06B6D4" strokeWidth="1.5" />
            {/* Neck */}
            <rect x="21" y="26" width="6" height="6" fill="#FED7AA" />
            {/* Face */}
            <ellipse cx="24" cy="19" rx="8" ry="9" fill="#FED7AA" />
            {/* Hair */}
            <path d="M16 17 C16 10 20 10 24 10 C28 10 32 10 32 17 C30 15 26 14 20 15 Z" fill="#475569" />
            {/* Teacher's Glasses */}
            <rect x="18" y="17.5" width="4.5" height="3.5" rx="1" stroke="#0891B2" strokeWidth="1" fill="#FFFFFF" fillOpacity="0.4" />
            <rect x="25.5" y="17.5" width="4.5" height="3.5" rx="1" stroke="#0891B2" strokeWidth="1" fill="#FFFFFF" fillOpacity="0.4" />
            <line x1="22.5" y1="19" x2="25.5" y2="19" stroke="#0891B2" strokeWidth="1" />
            {/* Smile */}
            <path d="M21 24 Q24 26 27 24" stroke="#9A3412" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      );

    default:
      return (
        <div className={`relative shrink-0 rounded-2xl overflow-hidden border border-emerald-400/40 bg-emerald-950 flex items-center justify-center text-white font-bold text-xs ${className}`}>
          {id.slice(0, 2).toUpperCase()}
        </div>
      );
  }
}

