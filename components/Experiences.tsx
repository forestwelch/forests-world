"use client";

import React from "react";
import Experience from "@/components/Experience";
import Link from "next/link";

const experiences = [
  {
    role: "Software Engineer",
    company: "BuildVision",
    companyLink: "https://www.buildvision.io/",
    dates: "2023 - 2024",
    description:
      "Spearheaded the development of app views using Next.js, Nest.js, and Postgres. Optimized data retrieval with RTK Query, improving API load times by 40%. Developed a component specification tool that saved 10 hours per week for admins.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Nest.js",
      "PostgreSQL",
      "Bun",
    ],
  },
  {
    role: "Senior Software Engineer I",
    company: "Autodesk",
    companyLink: "https://www.autodesk.com/",
    dates: "2020 - 2022",
    description:
      "Migrated internal tools from Angular to React, saving 20 hours/week. Developed a user event tracking system and A/B testing framework, optimizing the onboarding flow and increasing registrations by 15%.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Backbone",
      "Jest",
      "ElasticSearch",
      "LaunchDarkly",
      "Snowflake",
      "Mode Analytics",
    ],
  },
  {
    role: "Software Engineer II",
    company: "BuildingConnected",
    companyLink: "https://www.buildingconnected.com/",
    dates: "2018 - 2020",
    description:
      "Led the internationalization initiative, reducing component library size by 30% and increasing functionality. Developed a centralized i18n system and unified the component library.",
    technologies: [
      "React",
      "Redux",
      "Styled Components",
      "Node.js",
      "MongoDB",
      "Express",
      "I18n",
      "Mongoose",
      "Heroku",
      "CircleCI",
      "Angular",
      "Webpack",
    ],
  },
  {
    role: "Fullstack Software Engineer",
    company: "App Academy",
    companyLink: "https://www.appacademy.io/",
    dates: "2018",
    description:
      "Completed a fullstack engineering bootcamp, focusing on building applications using JavaScript, React, Redux, Node.js, and PostgreSQL.",
    technologies: [
      "JavaScript",
      "React",
      "Node.js",
      "Postgres",
      "Redux",
      "CSS",
    ],
  },
];

const Experiences = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-wrap justify-center gap-12 group">
        {experiences.map(
          (
            { role, company, companyLink, dates, description, technologies },
            idx
          ) => (
            <Experience
              key={idx}
              role={role}
              company={company}
              companyLink={companyLink}
              dates={dates}
              description={description}
              technologies={technologies}
            />
          )
        )}
      </div>
      <Link
        className="font-semibold lg:group-hover/link:text-teal-700 hover:text-teal-700 dark:lg:group-hover/link:text-teal-400 dark:hover:text-teal-400 transition-color duration-500"
        href="/assets/resume.pdf"
      >
        View full resume
      </Link>
    </div>
  );
};

export default Experiences;
