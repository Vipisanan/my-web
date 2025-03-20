"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { useTheme } from "@/hooks/useTheme";
import React from "react";

interface NavBarOptionType {
  label: string;
  path: string;
}
const navBarList: NavBarOptionType[] = [
  { label: "Profile", path: "#profile" },
  { label: "Education", path: "#education" },
  { label: "Skills", path: "#skills" },
  { label: "Reach out", path: "#reach-out" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const theme = useTheme();

  return (
    <nav
      className={`navbar mx-auto w-full max-w-[1800px] 
        px-4 py-3 
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
            className="link text-base-content link-neutral text-xl font-semibold no-underline flex items-center glowing-text slide-in"
            href="#"
          >
            Vipisanan
          </a>
        </div>

        {/* Right side - Home, About, Services */}
        <div className="hidden md:flex md:items-center md:gap-2 justify-center flex-grow">
          <ul className="flex gap-4">
            {navBarList.map((da: NavBarOptionType, i) => (
              <React.Fragment key={i}>
                <li className="text-lg">
                  <a href={da.path} className="whitespace-nowrap">
                    {da.label}
                  </a>
                </li>
                {i !== navBarList.length - 1 && (
                  <span className="text-lg text-gray-400 transition-all duration-300 hover:text-blue-500">
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
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
        } md:hidden w-full mt-4  p-4 rounded-lg transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col gap-4 text-lg">
          {navBarList.map((da: NavBarOptionType, i) => (
            <li key={i}>
              <a href={da.path}>{da.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
