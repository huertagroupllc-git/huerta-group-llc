/**
 * Central site constants. Single source of truth for brand copy,
 * navigation, and link targets used across layout and pages.
 */

export const SITE_NAME = "Huerta Group";
export const LEGAL_NAME = "Huerta Group LLC";
export const TAGLINE = "Building. Growing. Leading.";

export const SITE_DESCRIPTION =
  "Huerta Group LLC is an operations and organizational systems consulting firm. We help organizations build, optimize, and scale through systems design, process improvement, workflow automation, and operational leadership.";

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

/** Primary navigation. */
export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/education", label: "Education" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
