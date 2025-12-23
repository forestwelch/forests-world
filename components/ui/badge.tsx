import React from "react";

const Badge = ({ term }: { term: string }) => {
  return (
    <li className="inline-block font-medium badge rounded-xl text-sm px-2 py-1 transition-bg duration-150 ease-in-out text-light-900 bg-light-200/50 dark:text-dark-200 dark:bg-dark-900/50 border border-light-900/20 dark:border-dark-200/20">
      {term}
    </li>
  );
};

export default Badge;
