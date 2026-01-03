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
  liveLink?: string;
  technologies: string[];
}) => {
  const handleClick = () => {
    if (liveLink && window.innerWidth >= 1024) {
      window.open(liveLink.toString(), "_blank");
    }
  };

  return (
    <div
      className="group/link gap-4 lg:p-4 sm:p-2 lg:group-hover:opacity-50 bg-transparent rounded-xl flex flex-row max-sm:flex-col transition-opacity transition-bg duration-150 ease-in-out lg:hover:bg-black/5 dark:lg:hover:bg-white/5 lg:hover:!opacity-100 lg:opacity-75 lg:cursor-pointer w-full"
      onClick={handleClick}
    >
      <Image
        loading="lazy"
        className="object-contain self-start rounded-lg max-sm:hidden w-[300px]"
        src={image}
        alt={description}
        width={300}
        height={196}
        layout="intrinsic"
      />
      <div className="flex flex-col gap-y-2">
        {liveLink ? (
          <ArrowLink href={liveLink} text={name} />
        ) : (
          <h4 className="text-lg font-medium">{name}</h4>
        )}
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
