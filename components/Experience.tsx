"use client";

import Image from "next/image";
import React from "react";
import Badge from "./ui/badge";
import ArrowLink from "./ArrowLink";

const Experience = ({
  company,
  companyLink,
  dates,
  description,
  image,
  technologies,
}: {
  company: string;
  companyLink: string;
  dates: string;
  description: string;
  image: string;
  technologies: string[];
}) => {
  const handleClick = () => {
    if (window.innerWidth >= 1024) {
      window.open(companyLink, "_blank");
    }
  };

  return (
    <div
      className="group/link gap-4 lg:p-4 sm:p-2 lg:group-hover:opacity-50 bg-transparent rounded-xl flex flex-row max-sm:flex-col transition-opacity transition-bg duration-150 ease-in-out lg:hover:bg-black/5 dark:lg:hover:bg-white/5 lg:hover:!opacity-100 lg:opacity-75 lg:cursor-pointer w-full"
      onClick={handleClick}
    >
      <Image
        loading="lazy"
        className="object-contain self-start rounded-lg max-sm:hidden w-[300px] grayscale-[20%] brightness-[0.2] invert-[0.2] dark:invert-[0.6]"
        src={image}
        alt={company}
        width={300}
        height={196}
        layout="intrinsic"
      />
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center justify-between gap-4">
          <ArrowLink href={companyLink} text={company} />
          <span className="text-sm capitalize font-semibold text-gray-600 dark:text-gray-400 opacity-75">
            {dates}
          </span>
        </div>
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

export default Experience;
