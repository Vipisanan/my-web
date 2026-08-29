"use client";
import React, { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import ThemeToggle from "@/components/theme/ThemeToggle";
import DownloadResumeButton from "@/components/common/DownloadResumeButton";
import { NAV_ITEMS, NavBarOptionType } from "@/data/profile";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeAndJump = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-canvas/90 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-[1160px] items-center gap-7 px-7"
      >
        <a
          href="#home"
          className="font-mono text-[13px] font-semibold tracking-tight !text-ink"
        >
          vipisanan<span className="text-accent">.dev</span>
        </a>

        <ul className="ml-auto hidden gap-6 md:flex">
          {NAV_ITEMS.map((item: NavBarOptionType) => (
            <li key={item.path}>
              <a
                href={`#${item.path}`}
                className="font-mono text-[12.5px] text-muted hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2.5 md:ml-0">
          <ThemeToggle />
          <DownloadResumeButton />
          <button
            type="button"
            aria-controls="navbar-collapse"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted hover:text-ink md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <div
        id="navbar-collapse"
        className={`${isOpen ? "block" : "hidden"} border-t border-line px-7 py-4 md:hidden`}
      >
        <ul className="flex flex-col gap-4">
          {NAV_ITEMS.map((item: NavBarOptionType) => (
            <li key={item.path}>
              <a
                href={`#${item.path}`}
                onClick={closeAndJump}
                className="font-mono text-sm text-muted hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
