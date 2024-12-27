"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import Badge from "./ui/badge";

const Project = ({
  description,
  name,
  image,
  liveLink,
  githubLink,
  technologies,
}: {
  description: string;
  name: string;
  image: string;
  liveLink: URL;
  githubLink?: URL;
  technologies: string[];
}) => {
  const handleClick = () => {
    if (window.innerWidth >= 1024) {
      window.open(liveLink.toString(), "_blank");
    }
  };

  return (
    <div
      className="gap-8 lg:group-hover:opacity-50 bg-transparent rounded-xl p-4 flex flex-row transition-opacity transition-bg duration-300 lg:hover:bg-black/10 lg:hover:!opacity-100 opacity-75 lg:cursor-pointer"
      onClick={handleClick}
    >
      <Image
        loading="lazy"
        className="object-contain self-start rounded-lg"
        src={image}
        alt={description}
        width={150}
        height={98}
        layout="intrinsic"
      />
      <div className="flex flex-col gap-y-2">
        <Link
          className="font-medium"
          href={liveLink.toString()}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </Link>
        <p className="text-base font-light">{description}</p>
        <ul className="gap-2 flex flex-wrap">
          {technologies.map((tech, idx) => (
            <Badge key={idx} term={tech} />
          ))}
        </ul>
      </div>
      {/* {githubLink && (
        <li>
          <Link
            className="font-medium text-lg p-2"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
        </li>
      )} */}
    </div>
  );
};

export default Project;
