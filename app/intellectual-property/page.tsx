import type { Metadata } from "next";
import { ExtendingCapability } from "@/components/sections/ip/ExtendingCapability";
import { FormsOfKnowledge } from "@/components/sections/ip/FormsOfKnowledge";
import { InstitutionalContinuity } from "@/components/sections/ip/InstitutionalContinuity";
import { IpCta } from "@/components/sections/ip/IpCta";
import { IpHero } from "@/components/sections/ip/IpHero";
import { KnowledgeBeyondEngagement } from "@/components/sections/ip/KnowledgeBeyondEngagement";
import { MethodologyToKnowledge } from "@/components/sections/ip/MethodologyToKnowledge";
import { StewardshipAndProtection } from "@/components/sections/ip/StewardshipAndProtection";
import { SITE_NAME } from "@/lib/site";

const PAGE_TITLE = `${SITE_NAME} Intellectual Property`;
const PAGE_DESCRIPTION =
  "Intellectual property is the institutional function through which Huerta Group LLC turns methodology, experience, and organizational learning into reusable knowledge — an asset that supports consistency, education, technology, and organizational capability at scale.";

export const metadata: Metadata = {
  title: "Intellectual Property",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/intellectual-property",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: "/intellectual-property",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function IntellectualPropertyPage() {
  return (
    <>
      <IpHero />
      <KnowledgeBeyondEngagement />
      <MethodologyToKnowledge />
      <FormsOfKnowledge />
      <StewardshipAndProtection />
      <ExtendingCapability />
      <InstitutionalContinuity />
      <IpCta />
    </>
  );
}
