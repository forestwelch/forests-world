"use client";

import React, { createContext, useContext, useState } from "react";

/**
 * Function to reset body styles after the theme change.
 *
 * On page load, the browser may apply `overflow: hidden` and `padding-right: 15px`
 * due to theme toggling. This behavior can cause layout shifts.
 * We explicitly reset these styles to ensure the page layout remains stable
 * and prevents unexpected scrolling or layout issues.
 */

const ThemeContext = createContext<
  { theme: string; toggleTheme: () => void } | undefined
>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem("theme")
  );

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
