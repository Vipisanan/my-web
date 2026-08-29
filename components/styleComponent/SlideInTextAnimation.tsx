"use client";
import { useState, useEffect, useRef, ReactNode } from "react";

interface SlideInTextProps {
  children: ReactNode;
  /** "left" slides in from the left (default), "up" rises into place. */
  direction?: "left" | "up";
  /** Stagger index — multiplied by 80ms when inside a .reveal-stagger group. */
  index?: number;
}

export default function SlideInText({
  children,
  direction = "left",
  index = 0,
}: SlideInTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Reveal once — the old version replayed on every scroll pass,
            // which made the page flicker while scrolling back up.
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ "--reveal-index": index } as React.CSSProperties}
      className={`reveal reveal-${direction} ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
}
