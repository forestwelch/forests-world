import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/i18n/I18nProvider";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/theme/ThemeProvider";
import Cursor from "@/components/Cursor";

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
    <html className="dark">
      <body className={`${dmSans.variable} antialiased`}>
        <I18nProvider>
          <ThemeProvider>
            <Navigation />
            <section className="p-12 flex flex-col gap-8 fade-in">
              {children}
            </section>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
