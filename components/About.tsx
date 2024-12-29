import Link from "next/link";
import React from "react";
import Sparkles from "./Sparkles";
import { useTheme } from "@/theme/ThemeProvider";

const About = () => {
  const { theme } = useTheme();

  return (
    <section className="lg:pt-24" id="about">
      <h3 className="lg:hidden text-xl tracking-tight font-medium mb-4 bg-violet-700/10 dark:bg-teal-500/10 p-2">
        About Me
      </h3>
      <span>
        From a young age, my fascination with language—spoken, signed, and
        coded—has been unwavering: language is our most powerful bridge to
        understanding and connection. As a developer, I channel this passion to
        craft tools that amplify users&apos; potential.
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
        skills with a commitment to creating positive impact, while also pushing
        me toward new growth opportunities.
        <br />
        <br />
        Throughout my career, I’ve had the chance to work across a range of
        environments—from{" "}
        <Link
          className="text-gray-900 dark:text-gray-50 font-semibold hover:text-violet-600 dark:hover:text-violet-300 transition-color duration-500"
          href="https://www.autodesk.com/"
        >
          large corporations
        </Link>{" "}
        to{" "}
        <Link
          className="text-gray-900 dark:text-gray-50 font-semibold hover:text-violet-600 dark:hover:text-violet-300 transition-color duration-500"
          href="https://www.buildingconnected.com/"
        >
          growing startups
        </Link>{" "}
        and{" "}
        <Link
          className="text-gray-900 dark:text-gray-50 font-semibold hover:text-violet-600 dark:hover:text-violet-300 transition-color duration-500"
          href="https://www.buildvision.io/"
        >
          pre-seed projects
        </Link>
        —helping them scale with thoughtful, impactful solutions.
        <br />
        <br />
        When I’m not coding, I’m likely practicing yoga, meditating in nature,{" "}
      </span>
      <Sparkles
        color={theme === "dark" ? "hsl(171, 55%, 45%)" : "hsl(252, 62%, 70%)"}
      >
        <Link
          className="text-gray-900 dark:text-gray-50 font-semibold hover:text-violet-600 dark:hover:text-violet-300 transition-color duration-500"
          href="/tarot"
        >
          doing tarot readings
        </Link>
      </Sparkles>

      <span>, tinkering with retro consoles, or playing Kingdom Hearts.</span>
    </section>
  );
};

export default About;
