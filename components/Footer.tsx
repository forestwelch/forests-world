import React from "react";
import Sparkles from "./Sparkles";
import { useTheme } from "@/theme/ThemeProvider";
import Link from "next/link";

const Footer = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="flex flex-col gap-y-12 pb-12">
      <p className="text-center">
        You&apos;re viewing this in{" "}
        <span className="p-[2px] rounded-lg font-bold bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 transition duration-150 ease-in-out inline-block w-12 text-center">
          <Sparkles
            color={
              theme === "dark" ? "hsl(150, 40%, 40%)" : "hsl(260, 70%, 60%)"
            }
          >
            {theme}
          </Sparkles>
        </span>{" "}
        mode.{" "}
        <button
          className="font-bold hover:text-dark-700 dark:hover:text-light-300 transition-color duration-150 ease-in-out"
          onClick={toggleTheme}
        >
          Click here to switch to{" "}
          <span className="p-[2px] rounded-lg font-bold bg-gray-800 text-gray-200 dark:bg-gray-200 dark:text-gray-800 transition duration-150 ease-in-out inline-block w-12 text-center">
            <Sparkles
              color={
                theme === "dark" ? "hsl(150, 40%, 40%)" : "hsl(260, 70%, 60%)"
              }
            >
              {theme === "dark" ? "light" : "dark"}
            </Sparkles>
          </span>{" "}
          mode.
        </button>
      </p>

      <div className="max-w-md max-lg:self-center max-lg:text-center">
        <span className="opacity-70 text-sm">
          My site’s design draws inspiration from the lovely{" "}
          <Link
            className="font-semibold hover:text-light-700 dark:hover:text-dark-400 transition-all duration-150"
            href="https://brittanychiang.com/"
          >
            portfolio of Brittany Chiang
          </Link>
          . However, I coded it from scratch and will continue to make it
          uniquely mine. Thank you Brittany!
        </span>
      </div>
    </footer>
  );
};

export default Footer;
