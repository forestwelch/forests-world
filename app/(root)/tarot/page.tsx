"use client";

import React from "react";
import Link from "next/link";
import StepTransition from "@/components/StepTransition";

const TarotPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Link
        href="/"
        className="absolute top-4 left-4 text-gray-800 dark:text-gray-200 hover:underline"
      >
        ← Back to Home
      </Link>

      <div className="w-full max-w-lg p-4">
        We in progress boo thanks
        <StepTransition />
      </div>
    </div>
  );
};

export default TarotPage;
