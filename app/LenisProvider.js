"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";

const LenisContext = createContext(null);

// Use this hook in NavBar/Footer instead of element.scrollIntoView()
// so section-scrolling doesn't fight with Lenis's smooth scroll engine.
// Returns the ref object itself (not .current) - only read `.current`
// inside an event handler (e.g. onClick), never during render.
// Example:
//   const lenisRef = useLenis();
//   const handleClick = () => lenisRef.current?.scrollTo(element);
export function useLenis() {
  return useContext(LenisContext);
}

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Respect users who prefer reduced motion (accessibility)
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2, // Smoothness (higher = slower). 2 felt sluggish, 1.2 is snappier.
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId); // properly stop the loop on unmount
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef}>
      {children}
    </LenisContext.Provider>
  );
}
