"use client";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // When the component mounts, check for the saved theme in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("light"); // Default to light theme if none is saved
    }
  }, []);

  // Update the class when the theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark"); // Add dark mode class to <html>
      localStorage.setItem("theme", "dark"); // Save theme to localStorage
    } else {
      document.documentElement.classList.remove("dark"); // Remove dark mode class
      localStorage.setItem("theme", "light"); // Save theme to localStorage
    }
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className="cursor-pointer px-5" onClick={toggleTheme}>
      {theme === "light" ? (
        <SunIcon className="h-6 w-6 text-yellow-500" />
      ) : (
        <MoonIcon className="h-6 w-6 text-blue-500" />
      )}
    </button>
  );
}
