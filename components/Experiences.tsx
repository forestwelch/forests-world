"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Experience from "@/components/Experience";
import Link from "next/link";

const experiences = [
  {
    role: "Consultant, Software Engineer",
    company: "Self-Employed",
    companyLink: "https://forestsworld.me",
    dates: "2024 - Present",
    description:
      "Delivered SEO and UX optimization services to Bullseye Collectibles, increasing website traffic by 100%. Built various tools including an esports bracket manager and real-time text editor.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Clerk", "Liveblocks"],
  },
  {
    role: "Software Engineer (Contract)",
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
    role: "Freelance Educator & Organizer",
    company: "Self-Employed",
    companyLink: "https://forestsworld.me",
    dates: "2022 - 2023",
    description:
      "Taught over 1000 personalized lessons in French, ASL, and English. Traveled Asia for a year while gaining mindfulness and coaching skills.",
    technologies: ["React", "JavaScript", "TypeScript", "Node.js"],
  },
  {
    role: "Software Engineer",
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
    role: "Software Engineer (Contract)",
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
  {
    role: "Mentor & Educator",
    company: "iTalki",
    companyLink: "https://www.italki.com/",
    dates: "2018 - 2020",
    description:
      "Taught personalized French, ASL, and English lessons to over 1000 students, while providing mentorship and guidance to language learners.",
    technologies: ["Language Teaching", "French", "ASL", "English"],
  },
];

const Experiences = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-wrap justify-center gap-8 group">
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
      <Link className="p-1.5 m-2 text-md font-light" href="/assets/resume.pdf">
        View full resume
      </Link>
    </div>
  );
};

export default Experiences;
