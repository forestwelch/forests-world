"use client";

import Image from "next/image";
import React from "react";
import Badge from "./ui/badge";
import ArrowLink from "./ArrowLink";

const Project = ({
  description,
  name,
  image,
  liveLink,
  technologies,
}: {
  description: string;
  name: string;
  image: string;
  liveLink: string;
  technologies: string[];
}) => {
  const handleClick = () => {
    if (window.innerWidth >= 1024) {
      window.open(liveLink.toString(), "_blank");
    }
  };

  return (
    <div
      className="group/link gap-4 max-sm:p-4 lg:group-hover:opacity-50 bg-transparent rounded-xl flex flex-row max-sm:flex-col transition-opacity transition-bg duration-500 lg:hover:bg-black/10 lg:hover:!opacity-100 lg:opacity-75 lg:cursor-pointer"
      onClick={handleClick}
    >
      <Image
        loading="lazy"
        className="object-contain self-start rounded-lg max-sm:w-full"
        src={image}
        alt={description}
        width={150}
        height={98}
        layout="intrinsic"
      />
      <div className="flex flex-col gap-y-2">
        <ArrowLink href={liveLink} text={name} />
        <p className="text-base font-light">{description}</p>
        <ul className="gap-2 flex flex-wrap">
          {technologies.map((tech, idx) => (
            <Badge key={idx} term={tech} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
