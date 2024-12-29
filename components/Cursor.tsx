"use client";

import React, { useState, useEffect } from "react";

const Cursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const { x, y } = cursorPosition;

  return (
    <div
      className="pointer-events-none fixed inset-0 min-h-screen z-30 transition duration-150 ease-in-out lg:absolute"
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, rgba(0, 0, 0, 0.2), transparent 80%)`,
      }}
    ></div>
  );
};

export default Cursor;
