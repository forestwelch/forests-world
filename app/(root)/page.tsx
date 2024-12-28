"use client";

import React from "react";
import Projects from "@/components/Projects";
import StepTransition from "@/components/StepTransition";
import { useStep } from "@/components/StepContext";
import Experiences from "@/components/Experiences";
import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";
import ThemeToggle from "@/components/ThemeToggle";
import LinkedinIcon from "@/components/LinkedinIcon";
import GithubIcon from "@/components/GithubIcon";
import { InboxIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Sparkles from "@/components/Sparkles";
import { useTheme } from "@/theme/ThemeProvider";

const Home = () => {
  const { incrementStep } = useStep();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8 max-w-screen-xl mx-auto lg:py-0 p-8 sm:p-12">
      <header className="flex flex-col justify-between lg:sticky lg:top-0 lg:py-24 max-h-screen lg:flex-1">
        <section aria-labelledby="site-title">
          <div className="flex items-center gap-4">
            <div>
              <h1
                id="site-title"
                className="text-5xl font-semibold tracking-tight text-left"
              >
                Forest Welch
              </h1>
              <h2 className="text-xl font-medium">
                Fullstack Software Engineer
              </h2>
            </div>
            <Image
              className="max-w-28 max-h-28 object-cover opacity-80 max-md:hidden"
              src="/assets/images/logo.webp"
              alt="Self"
              width={300}
              height={300}
            />
          </div>

          <p className="font-light pt-8">
            I build user-friendly apps to make the digital
            <br /> world more intuitive and beautiful.
          </p>
          {/* <div className="flex gap-8 lg:mb-4" aria-label="Site controls">
            <LanguageToggle />
            <ThemeToggle />
          </div> */}
          <StepTransition />
        </section>
        <nav aria-label="Social links" className="flex flex-row gap-x-4">
          <Link href="https://www.github.com/nwelchr/" aria-label="GitHub">
            <GithubIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nwelchr/"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </Link>
          <Link href="mailto:forest.r.welch@gmail.com" aria-label="Email">
            <InboxIcon className="h-10 w-10 text-gray-400 hover:text-blue-500 icon" />
          </Link>
        </nav>
      </header>
      <main className="flex flex-col lg:flex-1 gap-y-8 lg:py-24">
        <section>
          <h2 className="lg:hidden text-lg tracking-tight font-semibold">
            About Me
          </h2>
          <span>
            From a young age, my fascination with language—spoken, signed, and
            coded—has been unwavering: language is our most powerful bridge to
            understanding and connection. As a developer, I channel this passion
            to craft tools that amplify users&apos; potential.
            <br />
            <br />
            My journey began in elementary school, where I taught myself coding
            to create custom MySpace designs and scripts for a community of 50k
            followers. I later honed my skills at App Academy in 2018, where I
            learned to transform my natural talents into production-ready
            applications.
            <br />
            <br />
            Currently, I’m focused on building projects that combine my
            technical skills with a commitment to creating positive impact,
            while also pushing me toward new growth opportunities.
            <br />
            <br />
            Throughout my career, I’ve had the chance to work across a range of
            environments—from{" "}
            <a href="https://www.autodesk.com/">large corporations</a> to{" "}
            <a href="https://www.buildingconnected.com/">growing startups</a>{" "}
            and <a href="https://www.buildvision.io/">pre-seed projects</a>
            —helping them scale with thoughtful, impactful solutions.
            <br />
            <br />
            When I’m not coding, I’m likely practicing yoga, meditating in
            nature,{" "}
          </span>
          <Sparkles>
            <button
              className="font-bold hover:text-violet-600 dark:hover:text-violet-300 transition-color duration-500"
              onClick={incrementStep}
            >
              doing tarot readings
            </button>
          </Sparkles>
          <span>
            , tinkering with retro consoles, or playing Kingdom Hearts.
          </span>
        </section>
        <Experiences />
        <Projects />
        <footer>
          <p>
            You&apos;ve been viewing this site in{" "}
            <span className="p-[2px] rounded-lg font-bold bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
              <Sparkles
                color={
                  theme === "dark" ? "hsl(252, 56%, 26%)" : "hsl(170, 53%, 62%)"
                }
              >
                {theme}
              </Sparkles>
            </span>{" "}
            mode.
          </p>
          <button
            className="font-bold hover:text-violet-800 dark:hover:text-teal-200"
            onClick={toggleTheme}
          >
            Click here to change to{" "}
            <span className="p-[2px] rounded-lg font-bold bg-gray-800 text-gray-200 dark:bg-gray-200 dark:text-gray-800">
              {theme === "dark" ? "light" : "dark"}
            </span>{" "}
            mode.
          </button>
        </footer>
      </main>
    </div>
  );
};

export default Home;
