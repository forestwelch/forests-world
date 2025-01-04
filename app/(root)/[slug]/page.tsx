import { redirect } from "next/navigation";
import { headers } from "next/headers";
import redirectsJson from "@/public/redirects.json" assert { type: "json" };
import twilio from "twilio";

const redirects = redirectsJson as { [key: string]: string };

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const senderNumber = process.env.TWILIO_SENDER;
const recipientNumber = process.env.TWILIO_RECIPIENT;

const client = twilio(accountSid, authToken);

async function sendWhatsapp(slug: string, userInfo: string) {
  try {
    await client.messages.create({
      body: `Redirect accessed: ${slug}\nUser Info: ${userInfo}`,
      from: senderNumber,
      to: recipientNumber as string,
    });
    console.log("WhatsApp message sent successfully!");
  } catch (error) {
    console.error("Failed to send WhatsApp message:", error);
  }
}

export default async function RedirectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const destination = redirects[slug];

  if (!destination) {
    redirect("/404");
  }

  // Grab headers to get IP/user-agent (if available)
  const h = await headers();
  const userAgent = h.get("user-agent") || "Unknown";
  // "x-forwarded-for" may be the user’s IP if your hosting provides it
  const ipAddress = h.get("x-forwarded-for") || "Unknown";

  await sendWhatsapp(slug, `IP: ${ipAddress}, User-Agent: ${userAgent}`);
  redirect(destination);
}
