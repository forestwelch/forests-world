import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "about";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id")!;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ul className="max-lg:hidden mt-16 w-max">
      {[
        { href: "#about", id: "about", label: "About" },
        { href: "#experiences", id: "experiences", label: "Experiences" },
        { href: "#projects", id: "projects", label: "Projects" },
      ].map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            className={`group flex items-center py-4 ${
              activeSection === item.id && "opacity-100"
            }`}
          >
            <span
              className={`mr-4 h-[1px] transition-all duration-150 ease-in-out bg-gray-800 dark:bg-gray-200 ${
                activeSection === item.id
                  ? "w-16 opacity-100"
                  : "w-8 opacity-50 group-hover:w-16 group-hover:opacity-100"
              }`}
            ></span>
            <span
              className={`text-xs font-bold uppercase tracking-widest transition-all duration-150 ease-in-out text-gray-800 dark:text-gray-200 ${
                activeSection === item.id
                  ? "opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            >
              {item.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
