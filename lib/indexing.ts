/**
 * Pre-launch indexing switch (2027 launch alignment) — SERVER-ONLY.
 *
 * Kept apart from lib/site.ts, which client components import for
 * navigation: this module is read only by the three server surfaces that
 * emit indexing signals, so the environment lookup never enters a client
 * bundle.
 *
 * Read once, at build time, from the server-only environment variable
 * `SITE_INDEXING_ENABLED`. Only the exact value `true` enables indexing;
 * absent or any other value keeps the site out of search indexes. The
 * fail-safe default is deliberate: a missing variable can never open the
 * site to indexing by accident.
 *
 * The three readers, and nothing else:
 *   - the root metadata `robots` directive (app/layout.tsx), inherited by
 *     every route, which emits `noindex, nofollow` while disabled;
 *   - app/robots.ts, which keeps crawling allowed (so the noindex is seen)
 *     and declares the sitemap only while indexing is enabled;
 *   - app/sitemap.ts, which lists the public routes only while enabled.
 *
 * Launch switch: set `SITE_INDEXING_ENABLED=true` in the Vercel production
 * environment and redeploy. No page edits are required.
 */
export const SITE_INDEXING_ENABLED =
  process.env.SITE_INDEXING_ENABLED === "true";
