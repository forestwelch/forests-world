"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

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
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/projects" className="text-white hover:text-gray-300">
            Projects
          </Link>
          <Link href="/tarot" className="text-white hover:text-gray-300">
            Tarot
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
          <Link
            href="/assets/resume.pdf"
            className="text-white hover:text-gray-300"
          >
            Resume
          </Link>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
