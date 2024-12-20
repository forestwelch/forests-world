"use client";

import React from "react";
import { useStep } from "@/components/StepContext";

const StepTransition = () => {
  const { step, fadeOut } = useStep();

  return (
    <div className="p-20 flex flex-col gap-8 fade-in">
      <div
        className={`w-96 h-96 transition-opacity duration-2000 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <h2 className="text-2xl">{step}</h2>
      </div>
    </div>
  );
};

export default StepTransition;
