"use client";

import React from "react";
import { motion } from "framer-motion";

interface SplitWordsTitleProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export function SplitWordsTitle({
  text,
  className = "",
  as: Component = "h2",
  delay = 0,
  highlightWords = [],
  highlightClassName = "text-emerald-600 dark:text-emerald-400",
}: SplitWordsTitleProps) {
  const words = text.split(" ");

  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`${className} flex flex-wrap items-baseline`}
    >
      {words.map((word, index) => {
        const isHighlight = highlightWords.some(
          (hw) => hw.toLowerCase() === word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
        );

        return (
          <span
            key={index}
            className="inline-block overflow-hidden py-1 pr-[0.28em] align-top leading-[inherit]"
          >
            <motion.span
              variants={{
                hidden: { y: "110%", opacity: 0 },
                visible: {
                  y: "0%",
                  opacity: 1,
                  transition: {
                    duration: 0.55,
                    ease: [0.2, 0.8, 0.2, 1],
                    delay: delay + index * 0.032,
                  },
                },
              }}
              className={`inline-block will-change-transform ${
                isHighlight ? highlightClassName : ""
              }`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </MotionComponent>
  );
}
