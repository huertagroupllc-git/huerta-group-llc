import type { MetadataRoute } from "next";
import { SITE_INDEXING_ENABLED } from "@/lib/indexing";
import { SITE_URL } from "@/lib/site";

/**
 * Every public route, listed exactly once. Secondary routes are secondary in
 * navigation only; they are public pages and stay in the sitemap.
 *
 * While pre-launch indexing is disabled the sitemap is a valid, empty urlset:
 * a sitemap must not offer search engines URLs whose pages ask not to be
 * indexed. The route inventory itself is unchanged — the launch switch
 * (`SITE_INDEXING_ENABLED=true`) restores the listing without any edit here.
 */
const PUBLIC_ROUTES: MetadataRoute.Sitemap = [
  {
    url: SITE_URL,
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    url: `${SITE_URL}/about`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/contact`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/education`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/intellectual-property`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/managed-services`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/methodology`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/services`,
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${SITE_URL}/technology-software`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_INDEXING_ENABLED ? PUBLIC_ROUTES : [];
}
