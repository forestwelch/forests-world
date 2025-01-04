import { redirect } from "next/navigation";
import redirectsJson from "@/public/redirects.json" assert { type: "json" };

type Redirects = { [key: string]: string };

const redirects = redirectsJson as Redirects;

async function sendEmail(slug: string) {
  const emailResponse = await fetch(
    "https://api.emailjs.com/api/v1.0/email/send",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "service_u649y0i",
        template_id: "template_qwn6d83",
        user_id: "yMN-k1fnQZjnrX1j7",
        template_params: {
          message: `Someone accessed the redirect: ${slug}`,
        },
      }),
    }
  );

  if (!emailResponse.ok) {
    console.error("Failed to send email:", await emailResponse.text());
  }
}

export default async function RedirectPage({
  params,
}: {
  params: { slug: string };
}) {
  const destination = redirects[params.slug];

  if (destination) {
    // Send an email before redirecting
    await sendEmail(params.slug);
    redirect(destination);
  } else {
    redirect("/404");
  }
}
