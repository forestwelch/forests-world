import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Projects from "./Projects";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-8 max-w-screen-xl mx-auto">
      <div className="flex flex-col lg:flex-1 lg:sticky lg:top-16 gap-y-4">
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
      </div>
      <section className="lg:flex-1">
        <p className="lg:hidden text-lg tracking-tight font-semibold pb-4">
          About Me
        </p>
        <p className="text-md">
          From a young age, my fascination with language—spoken, signed, and
          coded—has been unwavering: language is our most powerful bridge to
          understanding and connection. As a developer, I channel this passion
          to craft tools that amplify users' potential.
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
          <button>doing tarot readings</button>, tinkering with retro consoles,
          or playing Kingdom Hearts. I’m a software engineer with a passion for
          creating unique, user-friendly applications that make the digital
          world more intuitive and beautiful.
        </p>
        <Projects />
      </section>
    </div>
  );
};

export default About;
