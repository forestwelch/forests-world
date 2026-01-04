"use client";

import { useEffect } from "react";
import emailjs from "@emailjs/browser";

const serviceId = "service_u649y0i";
const templateId = "template_4stuu19";
const publicKey = "yMN-k1fnQZjnrX1j7";

async function sendEmail(slug: string, ipAddress: string, userAgent: string) {
  const templateParams = {
    slug,
    ipAddress,
    userAgent,
    date: new Date().toISOString(),
  };

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );
    console.log("Email sent successfully!", response.status, response.text);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}

export default function RedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  useEffect(() => {
    const handleRedirect = async () => {
      try {
        const { slug } = await params;

        const response = await fetch("/redirects.json");
        const redirects = (await response.json()) as { [key: string]: string };
        const dest = redirects[slug];

        if (!dest) {
          window.location.href = "/404";
          return;
        }

        const userAgent = navigator.userAgent;
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();
        const ipAddress = ipData.ip;

        await sendEmail(slug, ipAddress, userAgent);
        window.location.href = dest;
      } catch (error) {
        console.error("Error during redirect:", error);
        window.location.href = "/404";
      }
    };

    handleRedirect();
  }, [params]);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center p-4">
      <h1 className="text-6xl mb-2">Redirecting...</h1>
    </div>
  );
}
