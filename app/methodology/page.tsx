import type { Metadata } from "next";
import { ConsistencyWithAdaptation } from "@/components/sections/methodology/ConsistencyWithAdaptation";
import { GuidingPrinciples } from "@/components/sections/methodology/GuidingPrinciples";
import { InstitutionalFoundation } from "@/components/sections/methodology/InstitutionalFoundation";
import { MethodologyBeforeTechnology } from "@/components/sections/methodology/MethodologyBeforeTechnology";
import { MethodologyCta } from "@/components/sections/methodology/MethodologyCta";
import { MethodologyHero } from "@/components/sections/methodology/MethodologyHero";
import { UnderstandingBeforeChange } from "@/components/sections/methodology/UnderstandingBeforeChange";
import { SITE_NAME } from "@/lib/site";

const PAGE_TITLE = `${SITE_NAME} Methodology`;
const PAGE_DESCRIPTION =
  "Methodology is the foundation of Huerta Group LLC's work: a disciplined, structured, repeatable way of understanding organizations and improving the systems through which they operate — with technology and AI in service of sound method, never in place of it.";

export const metadata: Metadata = {
  title: "Methodology",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/methodology",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: "/methodology",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function MethodologyPage() {
  return (
    <>
      <MethodologyHero />
      <MethodologyBeforeTechnology />
      <UnderstandingBeforeChange />
      <GuidingPrinciples />
      <ConsistencyWithAdaptation />
      <InstitutionalFoundation />
      <MethodologyCta />
    </>
  );
}
