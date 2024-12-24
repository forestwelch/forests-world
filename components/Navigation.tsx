"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full text-gray-400 bg-black bg-opacity-20 sm:w-full">
      <div className="px-8 py-2 flex items-center justify-between">
        <Image
          src="/assets/images/logo.webp"
          alt="logo"
          width={48}
          height={48}
        />

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col items-center space-y-1"
        >
          <Bars3Icon className="h-8 w-8 icon" />
        </button>

        {/* Navigation Links */}
        <div className="items-center space-x-8 hidden lg:flex">
          <Link className="p-1.5 m-2 text-md font-light" href="/tarot">
            Tarot
          </Link>
          <Link className="p-1.5 m-2 text-md font-light" href="/contact">
            Contact
          </Link>
          <Link
            className="p-1.5 m-2 text-md font-light"
            href="/assets/resume.pdf"
          >
            Resume
          </Link>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-black bg-opacity-80 absolute inset-0 z-10 flex flex-col items-center justify-center overflow-visible`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-400"
        >
          <XMarkIcon className="h-8 w-8" />
        </button>

        <Link
          className="p-4 text-xl font-light text-gray-300"
          href="/"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          className="p-4 text-xl font-light text-gray-300"
          href="/projects"
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </Link>
        <Link
          className="p-4 text-xl font-light text-gray-300"
          href="/tarot"
          onClick={() => setIsMenuOpen(false)}
        >
          Tarot
        </Link>
        <Link
          className="p-4 text-xl font-light text-gray-300"
          href="/contact"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
        <Link
          className="p-4 text-xl font-light text-gray-300"
          href="/assets/resume.pdf"
          onClick={() => setIsMenuOpen(false)}
        >
          Resume
        </Link>
        <div className="mt-4">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
