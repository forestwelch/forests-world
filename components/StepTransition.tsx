"use client";

import React from "react";
import { useStep } from "@/components/StepContext";

const StepTransition = () => {
  const { step, fadeOut } = useStep();

  return (
    <section className="p-20 flex justify-center items-center fade-in">
      <div
        className={`w-96 h-96 flex flex-col justify-center items-center transition-opacity duration-2000 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        {step}
      </div>
    </section>
  );
};

export default StepTransition;
