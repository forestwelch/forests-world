import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ClientTheme from "@/components/ClientTheme";
import Providers from "@/components/Providers";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forest's World",
  description: "Hire me to build your next project!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <Providers>
        <ClientTheme>
          <div className="background" />
          <Navigation />
          <section className="p-12 flex flex-col gap-8 fade-in">
            {children}
          </section>
        </ClientTheme>
      </Providers>
    </html>
  );
}
