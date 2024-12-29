import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

const ArrowLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link
      className="group/icon font-semibold transition-colors duration-150 ease-in-out hover:text-violet-700 dark:hover:text-teal-400 lg:group-hover/link:text-violet-700 dark:lg:group-hover/link:text-teal-400"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
      <ArrowUpRightIcon className="inline-block ml-1 w-4 h-4 transform transition-transform duration-150 ease-in-out lg:group-hover/link:translate-x-1 lg:group-hover/link:-translate-y-1 group-hover/icon:translate-x-1 group-hover/icon:-translate-y-1" />
    </Link>
  );
};

export default ArrowLink;
