"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const Navigation = () => {
  return (
    <div className="w-full text-gray-400 bg-black bg-opacity-20 sm:w-full mb-24">
      <div className="px-8 py-2 flex items-center justify-between">
        <Image
          src="/assets/images/logo.webp"
          alt="logo"
          width={40}
          height={40}
        />
        <div className="flex items-center space-x-8">
          <Link
            className="inline-block p-1.5 m-2 text-md font-light relative transition-color duration-1000"
            href="/"
          >
            Home
          </Link>
          <Link
            className="inline-block p-1.5 m-2 text-md font-light relative transition-color duration-1000"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="inline-block p-1.5 m-2 text-md font-light relative transition-color duration-1000"
            href="/tarot"
          >
            Tarot
          </Link>
          <Link
            className="inline-block p-1.5 m-2 text-md font-light relative transition-color duration-1000"
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className="inline-block p-1.5 m-2 text-md font-light relative transition-color duration-1000"
            href="/assets/resume.pdf"
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
