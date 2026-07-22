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
 * TEMPORARY — no approved contact destination exists yet.
 * Points to the homepage contact section until a formal contact or
 * intake channel (email or /contact route) is established. Referenced
 * by every call-to-action button. Root-relative so it resolves
 * correctly from every route.
 */
export const CONTACT_HREF = "/#contact";

/**
 * Primary navigation. Homepage-section anchors are root-relative so
 * they resolve correctly from every route.
 */
export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#approach", label: "Approach" },
  { href: "/#difference", label: "Why Huerta Group" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
