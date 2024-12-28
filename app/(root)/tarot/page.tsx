"use client";

import React, { useEffect } from "react";
import { useStep } from "@/components/StepContext";
import Link from "next/link";
import StepTransition from "@/components/StepTransition";

const TarotPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Back button */}
      <Link
        href="/"
        className="absolute top-4 left-4 text-gray-700 dark:text-gray-200 hover:underline"
      >
        ← Back to Home
      </Link>

      {/* StepTransition component */}
      <div className="w-full max-w-lg p-4">
        <StepTransition />
      </div>
    </div>
  );
};

export default TarotPage;
