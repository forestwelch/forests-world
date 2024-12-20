"use client";

import IntroductionButton from "@/components/steps/IntroductionButton";
import LoadingText from "@/components/steps/LoadingText";
import CardReveal from "@/components/steps/CardReveal";
import React from "react";
import useStep from "@/lib/hooks/useStep";

const StepTransition = () => {
  const steps: React.ReactNode[] = [
    <IntroductionButton key="step-1" />,
    <LoadingText key="step-2" />,
    <CardReveal key="step-3" />,
  ];

  const { currentStep, fadeOut, incrementStep } = useStep(steps);

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
