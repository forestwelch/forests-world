import React from "react";
import Sparkles from "./Sparkles";
import { useTheme } from "@/theme/ThemeProvider";

const Footer = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="text-center flex flex-col gap-y-2 pb-12">
      <p>
        You&apos;re viewing this in{" "}
        <span className="p-[2px] rounded-lg font-bold bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 transition duration-150 ease-in-out inline-block w-12 text-center">
          <Sparkles
            color={
              theme === "dark" ? "hsl(171, 55%, 45%)" : "hsl(252, 62%, 70%)"
            }
          >
            {theme}
          </Sparkles>
        </span>{" "}
        mode.
      </p>
      <button
        className="font-bold hover:text-teal-700 dark:hover:text-violet-300 transition-color duration-150 ease-in-out"
        onClick={toggleTheme}
      >
        Click here to switch to{" "}
        <span className="p-[2px] rounded-lg font-bold bg-gray-800 text-gray-200 dark:bg-gray-200 dark:text-gray-800 transition duration-150 ease-in-out inline-block w-12 text-center">
          <Sparkles
            color={
              theme === "dark" ? "hsl(252, 56%, 26%)" : "hsl(252, 62%, 70%)"
            }
          >
            {theme === "dark" ? "light" : "dark"}
          </Sparkles>
        </span>{" "}
        mode.
      </button>
    </footer>
  );
};

export default Footer;
