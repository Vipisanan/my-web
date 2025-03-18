import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Ensure this runs only on the client side
    if (typeof window !== "undefined") {
      const checkTheme = () => {
        const isDark = document.documentElement.classList.contains("dark");
        setTheme(isDark ? "dark" : "light");
      };

      checkTheme(); // Check on mount

      // Observe <html> class changes
      const observer = new MutationObserver(checkTheme);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      // Cleanup
      return () => observer.disconnect();
    }
  }, []);

  return theme; // Return current theme
}
