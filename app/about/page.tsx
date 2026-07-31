import type { Metadata } from "next";
import { AboutCta } from "@/components/sections/about/AboutCta";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { Identity } from "@/components/sections/about/Identity";
import { LongTerm } from "@/components/sections/about/LongTerm";
import { PeopleSystemsTechnology } from "@/components/sections/about/PeopleSystemsTechnology";
import { Perspective } from "@/components/sections/about/Perspective";
import { Strength } from "@/components/sections/about/Strength";
import { SITE_NAME } from "@/lib/site";

const PAGE_TITLE = `About ${SITE_NAME}`;
const PAGE_DESCRIPTION =
  "Huerta Group LLC is an organizational systems company. Learn how the Company sees organizations, what it believes makes them strong, and the kind of institution it is being built to be.";

export const metadata: Metadata = {
  title: "About",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: "/about",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Identity />
      <Strength />
      <PeopleSystemsTechnology />
      <Perspective />
      <LongTerm />
      <AboutCta />
    </>
  );
}
