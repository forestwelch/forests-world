import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Forest's World",
  description:
    "I’m a full-stack developer who believes in bridging ideas and technology for real impact—let’s build something beautiful together.",
  openGraph: {
    title: "Forest's World",
    description:
      "I’m a full-stack developer who believes in bridging ideas and technology for real impact—let’s build something beautiful together.",
    url: "https://www.forestsworld.me",
    siteName: "Forest's World",
    images: [
      {
        url: "/images/open-graph.png",
        width: 800,
        height: 600,
        alt: "Forest's World Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forest's World",
    description:
      "I’m a full-stack developer who believes in bridging ideas and technology for real impact—let’s build something beautiful together.",
    images: ["/images/open-graph.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
        (function() {
          const theme = localStorage.getItem('theme') || 'dark';
          document.documentElement.classList.add(theme);
        })();
      `}
        </Script>
      </head>
      <body>
        <Providers>
          <div className="background" />
          <main className="fade-in min-h-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
