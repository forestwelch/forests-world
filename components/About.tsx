import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="p-20 flex flex-col gap-8 fade-in">
      <h1 className="text-8xl font-thin text-center lg:hidden">
        {t("WelcomeShort")}
      </h1>
      <h1 className="text-8xl font-thin text-center hidden lg:block">
        {t("WelcomeFull")}
      </h1>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
        <section className="max-w-xl">
          <p className="text-justify text-xl">{t("Blurb")}</p>
        </section>
        <div className="">
          <Image
            className="max-w-64 max-h-64 rounded-full border border-dotted border-gray-400 p-1 object-cover"
            src="/assets/images/self.webp"
            alt="Self"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
