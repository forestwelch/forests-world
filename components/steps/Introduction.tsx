import React from "react";
import { useStep } from "../StepContext";

const Introduction = () => {
  const { incrementStep } = useStep();
  return (
    <div>
      <h1 className="text-3xl font-bold">Introduction</h1>
      <p className="mt-4">
        Welcome to the Tarot card reading experience. This is a simple
        demonstration of how you can use React to create a card reading
        experience. Click the button below to get started.
      </p>
      <button
        onClick={incrementStep}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Commence
      </button>
    </div>
  );
};

export default Introduction;
