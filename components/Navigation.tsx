import React from "react";
import Image from "next/image";
// import LanguageToggle from "./LanguageToggle";
// import ThemeToggle from "./ThemeToggle";
// import { Logo } from "..";

const Navigation = ({
  theme,
  toggleTheme,
}: {
  theme: string;
  toggleTheme: () => void;
}) => {
  return (
    <div className="w-full text-gray-400 bg-black bg-opacity-20 sm:w-full">
      <div className="px-8 py-2 flex items-center justify-between">
        <Image
          src="/assets/images/logo.webp"
          alt="logo"
          width={40}
          height={40}
        />
        <div className="flex items-center">
          {/* <LanguageToggle />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} /> */}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
