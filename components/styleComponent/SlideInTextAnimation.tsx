"use client";
import { useState, useEffect, useRef, ReactNode } from "react";

interface RootComponentProps {
  children: ReactNode;
}

export default function SlideInText({ children }: RootComponentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a slight delay to prevent the animation from triggering too frequently
            timeout = setTimeout(() => {
              setIsVisible(true);
            }, 150); // Adjust this delay as needed
          } else {
            setIsVisible(false); // Reset animation when out of view
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
      if (timeout) {
        clearTimeout(timeout); // Clean up timeout
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${
        isVisible ? "slide-in" : ""
      } font-size-1.5rem font-weight-bold`}
    >
      {children}
    </div>
  );
}
