import Image from "next/image";
import Link from "next/link";
import LinkedinIcon from "@/components/LinkedinIcon";
import GithubIcon from "@/components/GithubIcon";
import { InboxIcon } from "@heroicons/react/16/solid";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="flex flex-col justify-between lg:sticky lg:top-0 lg:py-24 max-h-screen lg:flex-1">
      <div aria-labelledby="site-title">
        <div className="flex items-center gap-4">
          <div>
            <h1
              id="site-title"
              className="text-5xl font-semibold tracking-tight text-left"
            >
              Forest Welch
            </h1>
            <h2 className="text-xl font-medium">Fullstack Software Engineer</h2>
          </div>
          <Image
            className="max-w-28 max-h-28 object-cover opacity-80 max-md:hidden"
            src="/assets/images/logo.webp"
            alt="Self"
            width={300}
            height={300}
          />
        </div>

        <p className="font-light pt-8">
          I build user-friendly apps to make the digital
          <br /> world more intuitive and beautiful.
        </p>
        {/* <div className="flex gap-8 lg:mb-4" aria-label="Site controls">
        <LanguageToggle />
        <ThemeToggle />
      </div> */}
        <Navigation />
      </div>
      <nav aria-label="Social links" className="flex flex-row gap-x-4 mt-8">
        <Link href="https://www.github.com/nwelchr/" aria-label="GitHub">
          <GithubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/nwelchr/" aria-label="LinkedIn">
          <LinkedinIcon />
        </Link>
        <Link href="mailto:forest.r.welch@gmail.com" aria-label="Email">
          <InboxIcon className="h-8 w-8 text-gray-600 dark:text-gray-200 opacity-70 hover:opacity-100 transition duration-500" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
