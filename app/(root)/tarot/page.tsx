import { StepProvider } from "@/components/StepContext";
import StepTransition from "@/components/StepTransition";
import React from "react";

const TarotPage = () => {
  return (
    <StepProvider>
      <StepTransition />
    </StepProvider>
  );
};

export default TarotPage;
