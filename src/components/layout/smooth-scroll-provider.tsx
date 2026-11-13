"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/**
 * Provider untuk Lenis smooth scroll dengan dukungan navigasi anchor antar-halaman.
 * Pasang di root layout agar aktif di seluruh halaman.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    // Attach instance to window for global access
    const win = window as unknown as { __lenis?: Lenis };
    win.__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const scrollToTarget = (targetSelector: string, immediate = false) => {
      try {
        const el = document.querySelector(targetSelector);
        if (el) {
          const targetOffset =
            targetSelector.includes("paket-harga") || targetSelector.includes("harga")
              ? 0
              : -70;
          lenis.scrollTo(el as HTMLElement, { offset: targetOffset, duration: immediate ? 0 : 1.1 });
          return true;
        }
      } catch {
        // ignore invalid selector
      }
      return false;
    };

    // Global click listener to smoothly scroll to anchor links with Lenis on same page
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
          const success = scrollToTarget(hash);
          if (success) {
            e.preventDefault();
            window.history.pushState(null, "", hash);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      lenis.destroy();
      lenisRef.current = null;
      delete win.__lenis;
    };
  }, []);

  // When pathname or route changes (e.g. from /simulasi-biaya to /#portofolio),
  // smoothly scroll to the intended target section.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const executeScroll = () => {
      let targetId: string | null = null;
      try {
        targetId = sessionStorage.getItem("ecodigital_scroll_target");
        if (targetId) {
          sessionStorage.removeItem("ecodigital_scroll_target");
        }
      } catch {
        // ignore
      }

      if (!targetId && window.location.hash) {
        targetId = window.location.hash.replace(/^#/, "");
      }

      if (targetId && lenisRef.current) {
        const el = document.getElementById(targetId);
        if (el) {
          const targetOffset =
            targetId === "paket-harga" || targetId === "harga" ? 0 : -70;
          lenisRef.current.scrollTo(el, { offset: targetOffset, duration: 1.1 });
          return true;
        }
      }
      return false;
    };

    // Try at staggered intervals to account for Next.js async component rendering
    const t1 = setTimeout(executeScroll, 60);
    const t2 = setTimeout(executeScroll, 200);
    const t3 = setTimeout(executeScroll, 500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  return <>{children}</>;
}
