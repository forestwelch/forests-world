"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Project from "@/components/Project";

const projects = [
  {
    image: "/assets/images/livedocs.webp",
    descriptionKey: "LiveDocs",
    liveLink: "https://realtime-docs-theta.vercel.app/",
    githubLink: "https://github.com/nwelchr/realtime-docs",
  },
  {
    image: "/assets/images/bop.webp",
    descriptionKey: "Bop",
    liveLink: "https://bop-aa-b461179cab20.herokuapp.com/#/",
    githubLink: "https://github.com/nwelchr/bop",
  },
  {
    image: "/assets/images/power-of-friendship.webp",
    descriptionKey: "ThePowerOfFriendship",
    liveLink: "https://nwelchr.github.io/The-Power-of-Friendship/",
    githubLink: "https://github.com/nwelchr/The-Power-of-Friendship",
  },
  {
    image: "/assets/images/project-phantom.webp",
    descriptionKey: "ProjectPhantom",
    liveLink: "https://phantomvrtranslate.github.io/website/",
    githubLink: "https://github.com/PhantomVRTranslate/PhantomVR",
  },
  {
    image: "/assets/images/synergia.webp",
    descriptionKey: "Synergia",
    liveLink: "https://synergiaihr.com/",
  },
  {
    image: "/assets/images/verbling.webp",
    descriptionKey: "Verbling",
    liveLink: "https://nwelchr.github.io/verbling-challenge/",
    githubLink: "https://github.com/nwelchr/verbling-challenge",
  },
];

const ProjectsPage = () => {
  const { t } = useTranslation();

  return (
    <section className="p-20 flex flex-col gap-12 fade-in h-full items-center overflow-y-scroll">
      <h1 className="text-8xl font-thin text-center pt-24">
        Take a look at what I got.
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ image, descriptionKey, liveLink, githubLink }) => (
          <Project
            key={descriptionKey}
            image={image}
            description={t(descriptionKey)}
            liveLink={liveLink}
            githubLink={githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
