"use client";

import React from "react";
import { useStep } from "@/components/StepContext";

const StepTransition = () => {
  const { step, fadeOut } = useStep();

  return (
    <div
      className={`pr-8 py-8 flex flex-col transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {step}
    </div>
  );
};

export default StepTransition;
