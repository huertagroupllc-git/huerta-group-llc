import type { Metadata } from "next";
import { Engagement } from "@/components/sections/services/Engagement";
import { Fit } from "@/components/sections/services/Fit";
import { HowItConnects } from "@/components/sections/services/HowItConnects";
import { ServiceAreas } from "@/components/sections/services/ServiceAreas";
import { ServicesCta } from "@/components/sections/services/ServicesCta";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { SystemsFirst } from "@/components/sections/services/SystemsFirst";
import { TechnologyRole } from "@/components/sections/services/TechnologyRole";
import { SITE_NAME } from "@/lib/site";

const PAGE_TITLE = `${SITE_NAME} Services`;
const PAGE_DESCRIPTION =
  "Organizational systems services from Huerta Group LLC: assessment and operational analysis, process and workflow design, documentation and knowledge systems, technology and AI implementation, performance measurement, implementation leadership, and ongoing operational advisory.";

export const metadata: Metadata = {
  title: "Services",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: "/services",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <SystemsFirst />
      <ServiceAreas />
      <HowItConnects />
      <Engagement />
      <TechnologyRole />
      <Fit />
      <ServicesCta />
    </>
  );
}
