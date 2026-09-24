/**
 * Central site constants. Single source of truth for brand copy,
 * navigation, and link targets used across layout and pages.
 */

export const SITE_NAME = "Huerta Group";
export const LEGAL_NAME = "Huerta Group LLC";
export const TAGLINE = "Building. Growing. Leading.";

export const SITE_DESCRIPTION =
  "Huerta Group LLC is an organizational systems company. We help organizations understand, design, improve, implement, and continuously strengthen the systems through which they operate.";

/**
 * TEMPORARY — the intended custom domain (huertagroupllc.com) is not
 * yet connected or confirmed in Vercel, so this deliberately uses the
 * active Vercel production domain. Canonical URLs, Open Graph metadata,
 * robots, and the sitemap must always point at a domain that resolves.
 * Replace once the custom domain is live.
 */
export const SITE_URL = "https://huerta-group-llc.vercel.app";

/**
 * Formal contact destination. The /contact page hosts the inquiry form
 * backed by the Huerta Group LLC Supabase project. Referenced by every
 * call-to-action button.
 */
export const CONTACT_HREF = "/contact";

/**
 * The primary entry engagement for organizational-systems work, and the
 * complimentary conversation that precedes any engagement. Named once here so
 * every page describes them identically. The consultation's duration is the
 * only public figure the Company states about either; the assessment carries
 * no public duration or price.
 */
export const ASSESSMENT_NAME = "Organizational Systems Assessment";
export const ASSESSMENT_HREF = "/services#assessment";
export const CONSULTATION_NAME = "Complimentary Initial Consultation";
export const CONSULTATION_LENGTH = "up to 30 minutes";

/**
 * Header navigation (2027 launch alignment, taken against the ddr-0011
 * structure). The desktop row carries the four pages of the prospective-client
 * journey — Services, Methodology, About, Contact — beside the wordmark, which
 * is the Home link, and the contact CTA. The four institutional branches leave
 * the header row and the former Capabilities disclosure: they remain public
 * routes, reached from the mobile menu's secondary group, the About page, and
 * the footer, which continues to link all eight destinations.
 */
export const PRIMARY_NAV = [
  { href: "/services", label: "Services" },
  { href: "/methodology", label: "Methodology" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/**
 * The four institutional branches, with the one-line descriptions the adopted
 * design gives them (ddr-0011). Each summarises its own page and asserts
 * nothing the page does not. Secondary navigation: the mobile menu's labelled
 * group, the About page's institutional links, and the footer.
 */
export const CAPABILITY_NAV = [
  {
    ordinal: "01",
    href: "/intellectual-property",
    label: "Intellectual Property",
    description:
      "Methodology and experience captured as reusable institutional knowledge.",
  },
  {
    ordinal: "02",
    href: "/education",
    label: "Education & Workforce Development",
    description:
      "Structured learning built to develop demonstrable capability.",
  },
  {
    ordinal: "03",
    href: "/technology-software",
    label: "Technology & Software",
    description: "Technology applied in service of organizational systems.",
  },
  {
    ordinal: "04",
    href: "/managed-services",
    label: "Managed Services",
    description: "Sustained support that keeps implemented systems strong.",
  },
] as const;

/** The group heading under which secondary navigation lists the branches. */
export const CAPABILITY_GROUP_LABEL = "Institutional capabilities";
