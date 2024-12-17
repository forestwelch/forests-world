"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-center font-thin text-5xl tracking-tight px-[5%] sm:text-3xl sm:px-[20%]">
        {t("Welcome")} {t("World")}.
      </h1>
      <div className="flex flex-row items-center justify-around sm:flex-col-reverse">
        <section className="flex max-w-[600px] p-2 sm:max-w-[90%] sm:p-1 sm:text-center">
          <p>{t("Blurb")}</p>
        </section>
        <Image
          className="rounded-full object-cover border border-dotted border-gray-500 p-0.5"
          width={300}
          height={300}
          src="/assets/images/self.webp"
          alt="Self"
        />
      </div>
    </div>
  );
};

export default About;
