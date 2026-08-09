import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you were looking for does not exist on the Huerta Group website.",
};

/** Branded 404 — correct status, institutional voice, clear ways back. */
export default function NotFound() {
  return (
    <PageHero
      eyebrow="Page not found"
      title="This page does not exist."
      lead="The address may have been mistyped, or the page may have moved. Everything Huerta Group publishes is reachable from the pages below."
      actions={
        <>
          <ButtonLink href="/">Go to the homepage</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact Huerta Group
          </ButtonLink>
        </>
      }
    />
  );
}
