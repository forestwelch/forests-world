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
  return (
    <Link
      className={`group/icon font-semibold lg:group-hover/link:text-${hoverColor}-700 dark:lg:group-hover/link:text-${hoverColor}-400 hover:text-${hoverColor}-700 dark:hover:text-${hoverColor}-400 transition-colors duration-300`}
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
