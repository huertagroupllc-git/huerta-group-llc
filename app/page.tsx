import type { Metadata } from "next";
import { Approach } from "@/components/sections/Approach";
import { Capabilities } from "@/components/sections/Capabilities";
import { Contact } from "@/components/sections/Contact";
import { Differentiation } from "@/components/sections/Differentiation";
import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import {
  LEGAL_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  TAGLINE,
} from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: LEGAL_NAME,
  url: SITE_URL,
  slogan: TAGLINE,
  description: SITE_DESCRIPTION,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <Hero />
      <Problems />
      <Capabilities />
      <Approach />
      <Differentiation />
      <Contact />
    </>
  );
}
