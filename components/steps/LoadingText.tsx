"use client";

import { useEffect } from "react";
import { useStep } from "../StepContext";

const LoadingText = () => {
  const { incrementStep } = useStep();

  useEffect(() => {
    const timeoutId = setTimeout(incrementStep, 4000);

    return () => clearTimeout(timeoutId);
  }, [incrementStep]);

  return <p className="text-xl">Consulting the universe...</p>;
};

export default LoadingText;
