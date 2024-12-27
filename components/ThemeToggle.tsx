"use client";

import { useTheme } from "@/theme/ThemeProvider";
import React from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`${
        theme === "dark"
          ? "bg-white/50 text-gray-300"
          : "bg-black/50 text-gray-800"
      } rounded-full border-0 py-2 px-4 cursor-pointer transition-all duration-500 ease-in-out hover:${
        theme === "dark" ? "bg-white/20" : "bg-black/20"
      }`}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
