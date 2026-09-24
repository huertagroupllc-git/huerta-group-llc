import type { MetadataRoute } from "next";
import { SITE_INDEXING_ENABLED } from "@/lib/indexing";
import { SITE_URL } from "@/lib/site";

/**
 * Crawling stays allowed in both modes: a crawler blocked by robots.txt can
 * never read the `noindex` directive the pages carry while indexing is
 * disabled, so disallowing would contradict the signal that actually keeps
 * the site out of the index. The sitemap is declared only once indexing is
 * enabled, because it is empty until then (app/sitemap.ts).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    ...(SITE_INDEXING_ENABLED ? { sitemap: `${SITE_URL}/sitemap.xml` } : {}),
  };
}
