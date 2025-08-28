"use client";

import { useEffect, useState } from "react";

export default function ArmeenPage() {
  const [showHeadline, setShowHeadline] = useState(false);
  const [showBody, setShowBody] = useState(false);

  useEffect(() => {
    // fade in headline after mount
    const headlineTimer = setTimeout(() => setShowHeadline(true), 100);
    // then fade in body after headline finishes (2s)
    const bodyTimer = setTimeout(() => setShowBody(true), 5100);
    return () => {
      clearTimeout(headlineTimer);
      clearTimeout(bodyTimer);
    };
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full blur-3xl" />
      </div>

      <div className="z-10 max-w-xl px-6 text-left">
        <div
          className={`text-left mb-4 text-md font-light tracking-tight transition-opacity duration-2000 ease-out ${
            showHeadline ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`space-y-2 text-lg leading-relaxed transition-opacity duration-2000 ease-out ${
              showBody ? "opacity-100" : "opacity-0"
            }`}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1r346-saBQc?si=5nWOc6Sh74yaRvbd"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <br />
          <p>like a violin, a tarot deck needs its strings loosened</p>
          <br />
          <p>its voice warmed</p>
          <br />
          <p>i thought i was making a gift for you</p>
          <br />
          <p>but it quickly unfolded into something much larger</p>
          <br />
          <p>
            thank you for letting me remember what it feels like to love myself
          </p>
          <br />
          <p>i hope you feel even an ounce of the joy i felt making this</p>
          <br />
          <p>much love</p>
        </div>
      </div>
    </div>
  );
}
