"use client";

import { useEffect, useState } from "react";
import { useStep } from "../StepContext";

const mysticalPhrases = [
  "Consulting the universe...",
  "Channeling cosmic energy...",
  "Aligning with the stars...",
  "Seeking hidden truths...",
  "Opening the gateway of knowledge...",
  "Tuning into the ethereal frequencies...",
  "Communing with the infinite...",
  "Exploring the unknown realms...",
  "Receiving divine wisdom...",
  "Unlocking the secrets of the universe...",
];

const LoadingText = () => {
  const { incrementStep } = useStep();

  const [phrase] = useState(
    mysticalPhrases[Math.floor(Math.random() * mysticalPhrases.length)]
  );

  useEffect(() => {
    const timeoutId = setTimeout(incrementStep, 4000);

    return () => clearTimeout(timeoutId);
  }, [incrementStep]);

  return <p className="text-2xl font-light">{phrase}</p>;
};

export default LoadingText;
