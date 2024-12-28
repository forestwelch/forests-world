"use client";

import { useTheme } from "@/theme/ThemeProvider";
import React from "react";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const ClientTheme = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return (
    <body className={`${theme} ${dmSans.variable} antialiased smooth-scroll`}>
      {children}
    </body>
  );
};

export default ClientTheme;
