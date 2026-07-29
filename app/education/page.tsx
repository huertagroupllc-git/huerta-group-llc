import type { Metadata } from "next";
import { CapabilityDomains } from "@/components/sections/education/CapabilityDomains";
import { CompetencyOverCompletion } from "@/components/sections/education/CompetencyOverCompletion";
import { DevelopmentStatus } from "@/components/sections/education/DevelopmentStatus";
import { EducationAudiences } from "@/components/sections/education/EducationAudiences";
import { EducationCta } from "@/components/sections/education/EducationCta";
import { EducationHero } from "@/components/sections/education/EducationHero";
import { EducationMission } from "@/components/sections/education/EducationMission";
import { FutureFormats } from "@/components/sections/education/FutureFormats";
import { PracticeToEducation } from "@/components/sections/education/PracticeToEducation";
import { SITE_NAME } from "@/lib/site";

const PAGE_TITLE = `${SITE_NAME} Education & Workforce Development`;
const PAGE_DESCRIPTION =
  "Huerta Group LLC is developing an Education & Workforce Development branch: learning built from the Company's methodology and operating experience to develop practical professional and organizational capability. Formal programs are under development.";

export const metadata: Metadata = {
  title: "Education & Workforce Development",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/education",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: "/education",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function EducationPage() {
  return (
    <>
      <EducationHero />
      <EducationMission />
      <PracticeToEducation />
      <CapabilityDomains />
      <EducationAudiences />
      <CompetencyOverCompletion />
      <FutureFormats />
      <DevelopmentStatus />
      <EducationCta />
    </>
  );
}
