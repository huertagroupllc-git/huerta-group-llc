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
 * TEMPORARY — production domain has not been confirmed yet.
 * Replace with the approved domain before launch. Used for canonical
 * URLs, Open Graph metadata, robots, and the sitemap.
 */
export const SITE_URL = "https://huertagroupllc.com";

/**
 * TEMPORARY — no approved contact destination exists yet.
 * Points to the homepage contact section until a formal contact or
 * intake channel (email or /contact route) is established. Referenced
 * by every call-to-action button.
 */
export const CONTACT_HREF = "#contact";

/** Primary navigation. In-page anchors until dedicated routes exist. */
export const NAV_LINKS = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#approach", label: "Approach" },
  { href: "#difference", label: "Why Huerta Group" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
