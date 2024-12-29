import React from "react";

const Badge = ({ term }: { term: string }) => {
  return (
    <li className="font-medium badge rounded-xl text-sm px-2 py-1 transition-bg duration-150 ease-in-out text-violet-900 bg-violet-200/50 dark:text-teal-200 dark:bg-teal-900/50 border border-violet-900/20 dark:border-teal-200/20">
      {term}
    </li>
  );
};

export default Badge;
