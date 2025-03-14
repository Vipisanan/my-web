"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };

    checkTheme(); // Check on mount

    // Observe class changes on <html>
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return (
    <nav
      className={`navbar mx-auto w-full max-w-[1800px] 
        px-4 py-5 
        items-center 
        shadow-lg shadow-gray-400 
        dark:shadow-gray-600 
        fixed left-0 right-0 top-0 ${
          theme == "light" ? "bg-white" : "bg-black"
        }`}
    >
      <div className="w-full flex items-center justify-between">
        {/* Left side of the navbar - Vipisanan (Center vertically) */}
        <div className="navbar-start flex items-center w-full justify-start">
          <a
            className="link text-base-content link-neutral text-xl font-semibold no-underline flex items-center"
            href="#"
          >
            Vipisanan
          </a>
        </div>

        {/* Right side - Home, About, Services */}
        <div className="hidden md:flex md:items-center md:gap-2 justify-center flex-grow">
          <ul className="flex gap-4">
            <li>
              <a href="#home" className="text-lg">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-lg">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-lg">
                Services
              </a>
            </li>
          </ul>
        </div>
        {/* Place Theme Toggle button on the right side, always visible */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>

        {/* Mobile (md and below) menu icon */}
        <div className="md:hidden">
          <button
            type="button"
            className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
            aria-controls="navbar-collapse"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-800" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* For smaller screens (below md), list will be displayed below the navbar with background */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden w-full mt-4 bg-gray-100 p-4 rounded-lg transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col gap-4 text-lg">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
