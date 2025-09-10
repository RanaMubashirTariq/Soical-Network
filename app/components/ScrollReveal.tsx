"use client";
import React, { useEffect, useRef } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delayMs?: number;
  variant?: "reveal-up" | "reveal-left" | "reveal-right";
};

export default function ScrollReveal({ children, className = "", threshold = 0.15, delayMs = 0, variant = "reveal-up" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const t = setTimeout(() => {
              el.classList.add("is-visible");
            }, delayMs);
            return () => clearTimeout(t);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delayMs]);

  return (
    <div ref={ref} className={`${variant} ${className}`}>
      {children}
    </div>
  );
}


