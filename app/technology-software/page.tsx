import type { Metadata } from "next";
import { ExtendingInstitution } from "@/components/sections/technology/ExtendingInstitution";
import { PurposeBeforeTools } from "@/components/sections/technology/PurposeBeforeTools";
import { ResponsibleAi } from "@/components/sections/technology/ResponsibleAi";
import { ResponsibleTechnologyPrinciples } from "@/components/sections/technology/ResponsibleTechnologyPrinciples";
import { SoftwareFromNeed } from "@/components/sections/technology/SoftwareFromNeed";
import { TechCta } from "@/components/sections/technology/TechCta";
import { TechHero } from "@/components/sections/technology/TechHero";
import { SITE_NAME } from "@/lib/site";

const PAGE_TITLE = `${SITE_NAME} Technology & Software`;
const PAGE_DESCRIPTION =
  "Technology & Software at Huerta Group LLC: technology applied in service of organizational systems — methodology before tools, software from validated organizational need, and responsible, governed use of artificial intelligence that strengthens organizational capability.";

export const metadata: Metadata = {
  title: "Technology & Software",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/technology-software",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: "/technology-software",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function TechnologySoftwarePage() {
  return (
    <>
      <TechHero />
      <PurposeBeforeTools />
      <SoftwareFromNeed />
      <ResponsibleTechnologyPrinciples />
      <ResponsibleAi />
      <ExtendingInstitution />
      <TechCta />
    </>
  );
}
