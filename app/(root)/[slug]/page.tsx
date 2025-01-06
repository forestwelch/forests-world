"use client";

import { useEffect } from "react";
import redirectsJson from "@/public/redirects.json";
import emailjs from "@emailjs/browser";

const redirects = redirectsJson as { [key: string]: string };

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

export default function RedirectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const destination = redirects[slug];

  useEffect(() => {
    const send = async () => {
      try {
        const userAgent = navigator.userAgent;

        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        const ipAddress = data.ip;

        await sendEmail(slug, ipAddress, userAgent);

        window.location.href = destination;
      } catch (error) {
        console.error("Error during email or redirect:", error);
      }
    };

    if (!destination) {
      if (typeof window !== "undefined") {
        window.location.href = "/404";
      }
      return;
    }

    send();
  }, [slug, destination]);

  return null;
}
