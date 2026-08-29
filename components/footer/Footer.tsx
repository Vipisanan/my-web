import React from "react";
import { PROFILE } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[1160px] flex-wrap items-center gap-5 px-7 pb-12 pt-14 font-mono text-[11.5px] text-faint">
      <span>&copy; {new Date().getFullYear()} {PROFILE.name}</span>
      <span className="ml-auto">
        {PROFILE.location} · {PROFILE.timezone}
      </span>
      <a href="#home" className="text-faint hover:text-accent">
        back to top ↑
      </a>
    </footer>
  );
}
