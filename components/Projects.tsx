"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Project from "@/components/Project";

const projects = [
  {
    image: "/images/projects/koetori.webp",
    name: "Koetori",
    descriptionKey: "Koetori",
    liveLink: "https://koetori.com",
    githubLink: "https://github.com/nwelchr/koetori",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Groq", "Supabase"],
  },
  {
    image: "/images/projects/visio.webp",
    name: "Visio",
    descriptionKey: "Visio",
    liveLink: "https://visio.forestsworld.me/",
    githubLink: "https://github.com/nwelchr/visio",
    technologies: [
      "Next.js",
      "TypeScript",
      "Express",
      "MongoDB",
      "Mongoose",
      "OpenAI",
      "DALL-E",
      "Cloudinary",
      "Render",
      "Vercel",
    ],
  },
  {
    image: "/images/projects/livedocs.webp",
    name: "LiveDocs App",
    descriptionKey: "LiveDocs",
    liveLink: "https://livedocs.forestsworld.me/",
    githubLink: "https://github.com/nwelchr/realtime-docs",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Shadcn",
      "Clerk",
      "Liveblocks",
      "Vercel",
    ],
  },
  {
    image: "/images/projects/bop.webp",
    name: "Bop",
    descriptionKey: "Bop",
    liveLink: "https://bop.forestsworld.me",
    githubLink: "https://github.com/nwelchr/bop",
    technologies: [
      "React",
      "Redux",
      "Ruby on Rails",
      "Express",
      "Postgres",
      "Heroku",
    ],
  },
  {
    image: "/images/projects/buildingconnected.webp",
    name: "BuildingConnected Styleguide",
    descriptionKey: "BuildingConnected",
    liveLink: "https://design.buildingconnected.com/",
    technologies: ["React", "Redux", "Styled Components"],
  },
  {
    image: "/images/projects/power-of-friendship.webp",
    name: "The Power of Friendship",
    descriptionKey: "ThePowerOfFriendship",
    liveLink: "https://friendship.forestsworld.me/",
    githubLink: "https://github.com/nwelchr/The-Power-of-Friendship",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: "/images/projects/project-phantom.webp",
    name: "Project Phantom",
    descriptionKey: "ProjectPhantom",
    liveLink: "https://phantomvrtranslate.github.io/website/",
    githubLink: "https://github.com/PhantomVRtranslate/PhantomVR",
    technologies: ["React VR", "NPM"],
  },
  // {
  //   image: "/images/synergia.webp",
  //   name: "Synergia",
  //   descriptionKey: "Synergia",
  //   liveLink: "https://synergiaihr.com/",
  //   technologies: [],
  // },
  // {
  //   image: "/images/verbling.webp",
  //   name: "Verbling Challenge",
  //   descriptionKey: "Verbling",
  //   liveLink: "https://nwelchr.github.io/verbling-challenge/",
  //   githubLink: "https://github.com/nwelchr/verbling-challenge",
  //   technologies: ["React", "Context API"],
  // },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="lg:pt-24" id="projects">
      <h3 className="lg:hidden text-xl tracking-tight font-medium mb-4 text-gray-800 dark:text-gray-200 bg-light-700/10 dark:bg-dark-500/10 p-2">
        Projects
      </h3>
      <div className="flex flex-wrap justify-center gap-12 group">
        {projects.map(
          ({ image, descriptionKey, liveLink, name, technologies }) => (
            <Project
              key={descriptionKey}
              image={image}
              description={t(descriptionKey)}
              liveLink={liveLink}
              name={name}
              technologies={technologies}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
