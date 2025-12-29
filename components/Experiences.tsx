"use client";

import React from "react";
import Experience from "@/components/Experience";

const experiences = [
  {
    role: "Software Engineer",
    company: "Rula",
    companyLink: "https://www.rula.com/",
    dates: "2025 - Present",
    image: "/images/companies/rula.webp",
    description:
      "As a frontend engineer on the Patient Matching team, I build tools that help people find the right therapist through intuitive search and a seamless onboarding experience.",
    technologies: ["Next.js", "TypeScript", "Storybook", "Amplitude", "Rails"],
  },
  {
    role: "Software Engineer",
    company: "BuildVision",
    companyLink: "https://www.buildvision.io/",
    dates: "2023 - 2024",
    image: "/images/companies/buildvision.webp",
    description:
      "As the second engineer on the team, I was entrusted with building the groundwork for the platform—from crafting the initial UI to designing the core APIs. This early foundation helped secure the company's first seed funding and shaped the direction of our product.",
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
    image: "/images/companies/autodesk.webp",
    description:
      "After Autodesk acquired us, I guided our platform's global expansion by implementing a robust internationalization framework. Working with the Growth and Network teams, I focused on boosting user engagement and driving retention through thoughtful product enhancements.",
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
    image: "/images/companies/buildingconnected.webp",
    description:
      "As a member of the Risk and Frontend Platform teams, I pushed forward new features while modernizing older systems. A highlight of my time here was migrating our internal tools, which significantly streamlined the work of our Customer Success team and set the stage for future innovation.",
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
];

const Experiences = () => {
  return (
    <section className="lg:pt-24" id="experiences">
      <h3 className="lg:hidden text-xl tracking-tight font-medium mb-4 text-gray-800 dark:text-gray-200 bg-light-700/10 dark:bg-dark-500/10 p-2">
        Experiences
      </h3>
      <div className="flex flex-wrap justify-center gap-12 group">
        {experiences.map(
          (
            { company, companyLink, dates, description, image, technologies },
            idx
          ) => (
            <Experience
              key={idx}
              company={company}
              companyLink={companyLink}
              dates={dates}
              description={description}
              image={image}
              technologies={technologies}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Experiences;
