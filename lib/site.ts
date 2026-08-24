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
 * Primary navigation. "Technology" is the deliberate short label for the
 * Technology & Software page (/technology-software) — the full label
 * cannot render on one line at any supported desktop width alongside the
 * other institutional labels; the route, page heading, and metadata keep
 * the full name.
 */
/**
 * Header navigation (ddr-0011). The eight-label row is replaced by five items
 * and a Capabilities disclosure holding the four institutional branches —
 * answering gr-0003's navigation-capacity ceiling and restoring the full
 * "Technology & Software" name, which the flat row could not fit.
 *
 * The routes are unchanged. This is presentation: every governed destination
 * remains, and the footer continues to link all eight.
 */
export const PRIMARY_NAV = [
  { href: "/services", label: "Services" },
  { href: "/methodology", label: "Methodology" },
] as const;

export const SECONDARY_NAV = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/**
 * The four institutional branches, with the one-line descriptions the adopted
 * design gives them. Each summarises its own page and asserts nothing the page
 * does not; they exist because the disclosure panel is a composition the flat
 * row never had.
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

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/methodology", label: "Methodology" },
  { href: "/intellectual-property", label: "Intellectual Property" },
  { href: "/education", label: "Education" },
  { href: "/technology-software", label: "Technology" },
  { href: "/managed-services", label: "Managed Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
