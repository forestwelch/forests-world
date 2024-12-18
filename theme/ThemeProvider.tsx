"use client";

import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext<
  { theme: string; toggleTheme: () => void } | undefined
>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 z-[-1] ${
          theme === "dark" ? "bg-gradient-dark" : "bg-gradient-light"
        }`}
      >
        {children}
      </div>
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
