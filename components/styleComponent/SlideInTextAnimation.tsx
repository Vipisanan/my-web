"use client";
import { useState, useEffect, useRef, ReactNode } from "react";

interface RootComponentProps {
  children: ReactNode;
}

export default function SlideInText({ children }: RootComponentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Detect window size and update state
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Consider mobile view below 768px
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsVisible(true); // Force visibility on mobile (no animation)
      return;
    }

    let timeout: NodeJS.Timeout;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeout = setTimeout(() => {
              setIsVisible(true);
            }, 150);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.disconnect();
      if (timeout) clearTimeout(timeout);
    };
  }, [isMobile]);

  return (
    <div
      ref={ref}
      className={`${isVisible ? (isMobile ? "" : "slide-in") : ""}`}
    >
      {children}
    </div>
  );
}
