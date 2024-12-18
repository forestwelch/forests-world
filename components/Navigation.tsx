"use client";

import React from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
// import LanguageToggle from "./LanguageToggle";
// import { Logo } from "..";

const Navigation = () => {
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
          {/* <LanguageToggle /> */}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
