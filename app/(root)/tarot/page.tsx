"use client";

import IntroductionButton from "@/components/steps/IntroductionButton";
import LoadingText from "@/components/steps/LoadingText";
import CardReveal from "@/components/steps/CardReveal";
import React, { useState } from "react";

const StepTransition = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const steps = [
    <IntroductionButton key="step-1" />,
    <LoadingText key="step-2" />,
    <CardReveal key="step-3" />,
  ];

  const incrementStep = async () => {
    setFadeOut(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setCurrentStep((prev) => (prev + 1) % steps.length);
    setFadeOut(false);
  };

  return (
    <div className="p-20 flex flex-col gap-8 fade-in">
      <div
        className={`w-96 h-96 transition-opacity duration-2000 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <h2 className="text-2xl">{steps[currentStep]}</h2>
      </div>

      <button
        onClick={incrementStep}
        className="mt-4 p-4 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  );
};

export default StepTransition;
