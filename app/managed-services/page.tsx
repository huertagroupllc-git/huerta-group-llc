import type { Metadata } from "next";
import { AuthorityBoundary } from "@/components/sections/managed/AuthorityBoundary";
import { CapabilityOverDependency } from "@/components/sections/managed/CapabilityOverDependency";
import { ImplementationToOperation } from "@/components/sections/managed/ImplementationToOperation";
import { IntegratedModel } from "@/components/sections/managed/IntegratedModel";
import { MsCta } from "@/components/sections/managed/MsCta";
import { MsHero } from "@/components/sections/managed/MsHero";
import { SustainedSupportPrinciples } from "@/components/sections/managed/SustainedSupportPrinciples";
import { SITE_NAME } from "@/lib/site";

const PAGE_TITLE = `${SITE_NAME} Managed Services`;
const PAGE_DESCRIPTION =
  "Managed Services at Huerta Group LLC: sustained organizational capability support — carrying implemented systems into durable daily operation through continued review, reinforcement, knowledge transfer, and continuous improvement, with authority and accountability remaining with the organization.";

export const metadata: Metadata = {
  title: "Managed Services",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/managed-services",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: "/managed-services",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function ManagedServicesPage() {
  return (
    <>
      <MsHero />
      <ImplementationToOperation />
      <AuthorityBoundary />
      <SustainedSupportPrinciples />
      <CapabilityOverDependency />
      <IntegratedModel />
      <MsCta />
    </>
  );
}
