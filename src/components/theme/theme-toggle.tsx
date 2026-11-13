"use client";

import React, { useSyncExternalStore } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Sun03Icon, Moon02Icon } from "@hugeicons/core-free-icons";
import { useTheme } from "./theme-context";

interface ThemeToggleProps {
  variant?: "navbar" | "drawer";
  className?: string;
}

const emptySubscribe = () => () => {};

export function ThemeToggle({
  variant = "navbar",
  className = "",
}: ThemeToggleProps) {
  const { toggleTheme, isDark } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Before mounting on client, render a calm placeholder to avoid SSR hydration mismatches
  if (!mounted) {
    if (variant === "drawer") {
      return (
        <div
          className={`flex items-center justify-between rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 p-3.5 text-xs ${className}`}
        >
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            Mode Tampilan
          </span>
          <div className="h-8 w-20 rounded-full bg-slate-200 dark:bg-white/10 animate-pulse" />
        </div>
      );
    }
    return (
      <div
        className={`h-9 w-9 sm:h-10 sm:w-10 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-white/5 ${className}`}
        aria-hidden="true"
      />
    );
  }

  if (variant === "drawer") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`w-full flex items-center justify-between rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 p-3.5 text-xs transition-all hover:bg-slate-200 dark:hover:bg-white/10 active:scale-[0.99] cursor-pointer ${className}`}
        aria-label={
          isDark
            ? "Beralih ke Mode Terang (Light Mode)"
            : "Beralih ke Mode Gelap (Dark Mode)"
        }
      >
        <div className="flex items-center gap-2.5">
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-lg transition-colors ${
              isDark
                ? "bg-amber-400/10 text-amber-300"
                : "bg-indigo-500/10 text-indigo-600"
            }`}
          >
            <HugeiconsIcon icon={isDark ? Sun03Icon : Moon02Icon} size={16} />
          </span>
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {isDark ? "Tema Gelap (Dark Mode)" : "Tema Terang (Light Mode)"}
          </span>
        </div>

        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-bold border border-slate-300 dark:border-white/15 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 shadow-xs">
          <span>{isDark ? "🌙 Gelap" : "☀️ Terang"}</span>
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border transition-all duration-200 active:scale-95 cursor-pointer ${
        isDark
          ? "border-white/10 bg-white/5 text-amber-300 hover:border-amber-400/40 hover:bg-amber-400/10 shadow-xs"
          : "border-slate-300/80 bg-white text-slate-700 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600 shadow-sm"
      } ${className}`}
      title={
        isDark
          ? "Beralih ke Mode Terang (Light Mode)"
          : "Beralih ke Mode Gelap (Dark Mode)"
      }
      aria-label={
        isDark
          ? "Beralih ke Mode Terang (Light Mode)"
          : "Beralih ke Mode Gelap (Dark Mode)"
      }
    >
      <span className="transition-transform duration-300 group-hover:rotate-12">
        <HugeiconsIcon
          icon={isDark ? Sun03Icon : Moon02Icon}
          size={18}
          className={
            isDark
              ? "text-amber-300 transition-colors"
              : "text-amber-500 transition-colors"
          }
        />
      </span>
    </button>
  );
}
