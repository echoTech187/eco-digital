"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface ScrollIndicatorProps {
  className?: string;
}

export function ScrollIndicator({ className }: ScrollIndicatorProps) {
  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <span className="text-xs font-medium uppercase tracking-widest text-white/60">
        Scroll
      </span>
      {/* Animated bouncing arrow */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur"
      >
        <motion.div
          animate={{ height: ["20%", "60%", "20%"] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="mt-1.5 w-0.5 rounded-full bg-white/70"
        />
      </motion.div>
    </div>
  );
}

