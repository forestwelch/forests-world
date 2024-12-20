"use client";

import { useState } from "react";

const useStep = (steps: React.ReactNode[]) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const incrementStep = async () => {
    setFadeOut(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setCurrentStep((prev) => (prev + 1) % steps.length);
    setFadeOut(false);
  };

  return { currentStep, fadeOut, incrementStep };
};

export default useStep;
