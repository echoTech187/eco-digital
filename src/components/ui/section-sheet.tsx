"use client";

import React from "react";

interface SectionSheetProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  roundedTop?: boolean;
  overlap?: boolean;
}

export function SectionSheet({
  id,
  children,
  className = "",
  roundedTop = true,
  overlap = true,
}: SectionSheetProps) {
  return (
    <div
      id={id}
      className={`relative z-20 w-full transition-colors duration-300 ${
        roundedTop
          ? "rounded-t-[32px] sm:rounded-t-[48px] border-t border-slate-200/90 dark:border-white/[0.08] shadow-[0_-16px_40px_-15px_rgba(0,0,0,0.04)] dark:shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.4)]"
          : ""
      } ${overlap ? "-mt-6 sm:-mt-10" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
