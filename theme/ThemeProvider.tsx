"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { DM_Sans } from "next/font/google";

/**
 * ThemeProvider manages theme state and applies theme classes to the document.
 * The theme class is applied to <html> (documentElement) to enable CSS selectors
 * like .dark body, .dark .background, etc. A blocking script in layout.tsx sets
 * the initial theme class before React hydrates to prevent hydration mismatches.
 */

const ThemeContext = createContext<
  { theme: string; toggleTheme: () => void } | undefined
>(undefined);

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string | null>(null);

  // Initialize theme from localStorage and set font on body
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
    document.body.className = `${dmSans.variable} antialiased`;
  }, []);

  useEffect(() => {
    if (theme) {
      const rootClassList = document.documentElement.classList;
      rootClassList.remove("light", "dark");
      if (!rootClassList.contains(theme)) {
        rootClassList.add(theme);
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  if (!theme) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeProvider;
