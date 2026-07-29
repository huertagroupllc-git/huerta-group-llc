import type { Metadata } from "next";
import { CapabilityDomains } from "@/components/sections/education/CapabilityDomains";
import { CompetencyOverCompletion } from "@/components/sections/education/CompetencyOverCompletion";
import { EducationAudiences } from "@/components/sections/education/EducationAudiences";
import { EducationCta } from "@/components/sections/education/EducationCta";
import { EducationHero } from "@/components/sections/education/EducationHero";
import { EducationMission } from "@/components/sections/education/EducationMission";
import { IntegratedApproach } from "@/components/sections/education/IntegratedApproach";
import { PracticeToEducation } from "@/components/sections/education/PracticeToEducation";
import { SITE_NAME } from "@/lib/site";

const PAGE_TITLE = `${SITE_NAME} Education & Workforce Development`;
const PAGE_DESCRIPTION =
  "Education & Workforce Development at Huerta Group LLC transforms the Company's methodology, intellectual property, and operating experience into structured learning that develops practical professional and organizational capability.";

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
      <IntegratedApproach />
      <EducationCta />
    </>
  );
}
