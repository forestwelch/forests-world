import { redirect } from "next/navigation";
import redirectsJson from "@/public/redirects.json" assert { type: "json" };

type Redirects = { [key: string]: string };

const redirects = redirectsJson as Redirects;

export default function RedirectPage({ params }: { params: { slug: string } }) {
  const destination = redirects[params.slug];

  if (destination) {
    redirect(destination);
  } else {
    redirect("/404");
  }
}
