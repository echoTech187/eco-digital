"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Provider untuk Lenis smooth scroll.
 * Pasang di root layout agar aktif di seluruh halaman.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Attach instance to window for global access
    const win = window as unknown as { __lenis?: Lenis };
    win.__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Global click listener to smoothly scroll to anchor links with Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Match #section or /#section (when currently on homepage)
      const isHashOnly = href.startsWith("#");
      const isRootHash =
        href.startsWith("/#") &&
        (window.location.pathname === "/" || window.location.pathname === "");

      if (isHashOnly || isRootHash) {
        const hash = isRootHash ? href.substring(1) : href;
        if (hash.length > 1) {
          const targetEl = document.querySelector(hash);
          if (targetEl) {
            e.preventDefault();
            const offset = hash === "#layanan" || hash === "#solusi" ? 0 : 0;
            lenis.scrollTo(targetEl as HTMLElement, { offset, duration: 1.1 });
            window.history.pushState(null, "", hash);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });

    // Handle initial hash on page load (e.g. user opens site with #portofolio in URL)
    if (window.location.hash) {
      setTimeout(() => {
        const initialTarget = document.querySelector(window.location.hash);
        if (initialTarget) {
          const offset = window.location.hash === "#layanan" || window.location.hash === "#solusi" ? 0 : 0;
          lenis.scrollTo(initialTarget as HTMLElement, { offset, immediate: true });
        }
      }, 150);
    }

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      lenis.destroy();
      delete win.__lenis;
    };
  }, []);

  return <>{children}</>;
}
