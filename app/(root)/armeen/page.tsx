"use client";

import { useEffect, useState } from "react";

export default function ArmeenPage() {
  const [showHeadline, setShowHeadline] = useState(false);
  const [showBody, setShowBody] = useState(false);

  useEffect(() => {
    // fade in headline after mount
    const headlineTimer = setTimeout(() => setShowHeadline(true), 100);
    // then fade in body after headline finishes (2s)
    const bodyTimer = setTimeout(() => setShowBody(true), 2100);
    return () => {
      clearTimeout(headlineTimer);
      clearTimeout(bodyTimer);
    };
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-dark-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-light-500/10 blur-3xl" />
      </div>

      <div className="z-10 max-w-xl px-6 text-left">
        <h1
          className={`text-left mb-4 text-6xl font-light tracking-tight transition-opacity duration-2000 ease-out ${
            showHeadline ? "opacity-100" : "opacity-0"
          }`}
        >
          hi armeen
        </h1>

        <div
          className={`space-y-2 text-lg leading-relaxedtransition-opacity duration-2000 ease-out ${
            showBody ? "opacity-100" : "opacity-0"
          }`}
        >
          <p>if you’re seeing this</p>
          <p>you made it</p>
          <p>don’t worry about the usb</p>
          <p>trust that you were meant to be here</p>
          <p>i had bigger plans for this…</p>
          <p>i learned the farsi alphabet and wanted to write you a letter</p>
          <p>but for now, a doorway is enough</p>
          <br />
          <br />
          <p>
            <a
              className="font-bold hover:text-dark-700 dark:hover:text-light-300 transition-color duration-150 ease-in-out"
              href="/armeen/video"
              target="_blank"
              rel="noreferrer"
            >
              click here
            </a>{" "}
            to step through
          </p>
        </div>
      </div>
    </div>
  );
}
