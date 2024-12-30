"use client";

import React from "react";
import Experience from "@/components/Experience";

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
    <section className="lg:pt-24" id="experiences">
      <h3 className="lg:hidden text-xl tracking-tight font-medium mb-4 bg-violet-700/10 dark:bg-teal-500/10 p-2">
        Experiences
      </h3>
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
    </section>
  );
};

export default Experiences;
