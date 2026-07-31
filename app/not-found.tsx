import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you were looking for does not exist on the Huerta Group website.",
};

/** Branded 404 — correct status, institutional voice, clear ways back. */
export default function NotFound() {
  return (
    <section className="bg-gradient-to-b from-ink-900 to-ink-950">
      <Container className="py-24 sm:py-32">
        <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-gold-500">
          <span aria-hidden="true" className="h-px w-8 bg-gold-600" />
          Page not found
        </p>
        <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-silver-100 sm:text-5xl">
          This page does not exist.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver-400">
          The address may have been mistyped, or the page may have moved.
          Everything Huerta Group publishes is reachable from the pages
          below.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/">Go to the homepage</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact Huerta Group
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
