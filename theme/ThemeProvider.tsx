"use client";

import React, {
  createContext,
  useContext,
  useState,
  useLayoutEffect,
} from "react";

/**
 * Function to reset body styles after the theme change.
 *
 * On page load, the browser may apply `overflow: hidden` and `padding-right: 15px`
 * due to theme toggling. This behavior can cause layout shifts.
 * We explicitly reset these styles to ensure the page layout remains stable
 * and prevents unexpected scrolling or layout issues.
 */
const disableBodyLock = () => {
  // document.body.style.overflowY = "auto";
  document.body.style.paddingRight = "0px";
};

const ThemeContext = createContext<
  { theme: string; toggleTheme: () => void } | undefined
>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string | null>(null);

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }

    // Force reset after theme is applied
    setTimeout(disableBodyLock, 100);
  }, []);

  const toggleTheme = () => {
    const newTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);

    // Reset styles after theme toggle
    setTimeout(disableBodyLock, 100);
  };

  if (theme === null) {
    return null;
  }

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
