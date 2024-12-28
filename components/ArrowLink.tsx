import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

const ArrowLink = ({
  href,
  text,
  hoverColor = "teal",
}: {
  href: string;
  text: string;
  hoverColor?: string;
}) => {
  const hoverClass =
    hoverColor === "teal"
      ? "lg:group-hover/link:text-teal-700 dark:lg:group-hover/link:text-teal-400 hover:text-teal-700 dark:hover:text-teal-400"
      : "lg:group-hover/link:text-violet-700 dark:lg:group-hover/link:text-violet-400 hover:text-violet-700 dark:hover:text-violet-400";

  return (
    <Link
      className={`group/icon font-semibold ${hoverClass} transition-colors duration-300`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
      <ArrowUpRightIcon className="inline-block ml-1 w-4 h-4 transform transition-transform duration-150 lg:group-hover/link:translate-x-1 lg:group-hover/link:-translate-y-1 group-hover/icon:translate-x-1 group-hover/icon:-translate-y-1" />
    </Link>
  );
};

export default ArrowLink;
