import React from "react";

const Badge = ({ term }: { term: string }) => {
  return (
    <li className="badge rounded-xl text-sm px-2 py-1 transition-bg duration-500">
      {term}
    </li>
  );
};

export default Badge;
