import { ReactNode } from "react";

const Link = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <a
      className={`inline-block py-2.5 px-5 border rounded transition-all duration-1000 ease-in-out opacity-60 hover:opacity-80 
        dark:bg-white/10 dark:border-white/10 dark:hover:shadow-white/20 dark:focus:shadow-white/20 
        bg-black/10 border-black/10 hover:shadow-black/20 ${className}`}
    >
      {children}
    </a>
  );
};

export default Link;
