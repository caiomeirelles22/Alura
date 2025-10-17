"use client";
import { Moon } from "@/icons/Moon";
import { Sun } from "@/icons/Sun";
import { useEffect, useState } from "react";

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) {
        const dark = stored === "dark";
        setIsDark(dark);
        document.documentElement.classList.toggle("dark", dark);
      } else if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setIsDark(true);
        document.documentElement.classList.add("dark");
      }
    } catch {
      console.log("Error no localStorage");
    }
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      console.log("Error no localStorage");
    }
    document.documentElement.classList.toggle("dark", next);
  }

  return (
    <button
      onClick={toggle}
      aria-pressed={isDark}
      className="p-2 rounded-md text-cyan-primary hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 transition-colors duration-200"
      aria-label="Alternar tema"
    >
      {isDark ? <Moon /> : <Sun />}
    </button>
  );
}
