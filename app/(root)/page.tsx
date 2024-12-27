"use client";

import React from "react";
// import { useTranslation } from "react-i18next";
// import Image from "next/image";
import Projects from "@/components/Projects";
import StepTransition from "@/components/StepTransition";
import { useStep } from "@/components/StepContext";
import Experiences from "@/components//Experiences";
import Link from "next/link";
import Image from "next/image";
import { InboxIcon } from "@heroicons/react/16/solid";
import LanguageToggle from "@/components/LanguageToggle";
import ThemeToggle from "@/components/ThemeToggle";

const Home = () => {
  // const { t } = useTranslation();
  const { incrementStep } = useStep();

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8 max-w-screen-xl mx-auto lg:py-0 p-12">
      <div className="flex flex-col justify-between lg:sticky lg:top-0 lg:py-24 max-h-screen lg:flex-1">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-6xl font-light tracking-tight text-left">
            Forest Welch
          </h1>
          {/* <Image
          className="max-w-48 max-h-48 rounded-full border border-dotted border-gray-400 p-1 object-cover opacity-80"
          src="/assets/images/self.webp"
          alt="Self"
          width={300}
          height={300}
        /> */}
          <h2 className="text-xl font-medium">Fullstack Software Engineer</h2>
          <p className="font-light">
            I build user-friendly apps to make the digital
            <br /> world more intuitive and beautiful.
          </p>
          <StepTransition />
        </div>
        <div className="flex flex-row gap-x-4">
          <Link href="https://www.linkedin.com/in/nwelchr/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              className="fill-current text-gray-400 hover:text-blue-500"
            >
              <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/in/nwelchr/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="40"
              height="40"
              className="fill-current text-gray-400 hover:text-blue-500"
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
            </svg>
          </Link>
          <Link href="emailto:forest.r.welch@gmail.com">
            <InboxIcon className="h-10 w-10 text-gray-400 hover:text-blue-500 icon" />
          </Link>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
      <section className="flex flex-col lg:flex-1 gap-y-8 lg:py-24">
        <p className="lg:hidden text-lg tracking-tight font-semibold">
          About Me
        </p>
        <p className="text-md">
          From a young age, my fascination with language—spoken, signed, and
          coded—has been unwavering: language is our most powerful bridge to
          understanding and connection. As a developer, I channel this passion
          to craft tools that amplify users&apos; potential.
          <br />
          <br />
          My journey began in elementary school, where I taught myself coding to
          create custom MySpace designs and scripts for a community of 50k
          followers. I later honed my skills at App Academy in 2018, where I
          learned to transform my natural talents into production-ready
          applications.
          <br />
          <br />
          Currently, I’m focused on building projects that combine my technical
          skills with a commitment to creating positive impact, while also
          pushing me toward new growth opportunities.
          <br />
          <br />
          Throughout my career, I’ve had the chance to work across a range of
          environments—from{" "}
          <a href="https://www.autodesk.com/">large corporations</a> to{" "}
          <a href="https://www.buildingconnected.com/">growing startups</a> and{" "}
          <a href="https://www.buildvision.io/">pre-seed projects</a>
          —helping them scale with thoughtful, impactful solutions.
          <br />
          <br />
          When I’m not coding, I’m likely practicing yoga, meditating in nature,
          <button onClick={incrementStep}>doing tarot readings</button>,
          tinkering with retro consoles, or playing Kingdom Hearts. I’m a
          software engineer with a passion for creating unique, user-friendly
          applications that make the digital world more intuitive and beautiful.
        </p>
        <Experiences />
        <Projects />
      </section>
    </div>
  );
};

export default Home;
