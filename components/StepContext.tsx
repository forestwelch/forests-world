"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import Introduction from "./steps/Introduction";
import LoadingText from "./steps/LoadingText";
import CardReveal from "./steps/CardReveal";

const StepContext = createContext<
  | { step: React.ReactNode; fadeOut: boolean; incrementStep: () => void }
  | undefined
>(undefined);

export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) throw new Error("useStep must be used within a StepProvider");
  return context;
};

const StepProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const steps = useMemo(
    () => [
      <Introduction key="step-1" />,
      <LoadingText key="step-2" />,
      <CardReveal key="step-3" />,
    ],
    []
  );

  const incrementStep = async () => {
    setFadeOut(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setCurrentStep((prev) => {
      return (prev + 1) % steps.length;
    });
    setFadeOut(false);
  };

  return (
    <StepContext.Provider
      value={{ step: steps[currentStep], fadeOut, incrementStep }}
    >
      {children}
    </StepContext.Provider>
  );
};

export default StepProvider;
