import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { CONTACT_HREF } from "@/lib/site";

export function TechHero() {
  return (
    <section className="bg-gradient-to-b from-ink-900 to-ink-950">
      <Container className="py-20 sm:py-28">
        <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-gold-500">
          <span aria-hidden="true" className="h-px w-8 bg-gold-600" />
          Technology &amp; Software
        </p>
        <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-silver-100 sm:text-5xl">
          Technology, in its proper place.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver-400">
          Technology &amp; Software is the institutional capability through
          which Huerta Group applies technology in service of
          organizational systems. The Company does not begin with software,
          artificial intelligence, or a preferred platform. It begins with
          purpose, methodology, and a clear understanding of how an
          organization actually operates — and brings in technology where
          it makes those systems stronger.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href={CONTACT_HREF}>Contact Huerta Group</ButtonLink>
          <ButtonLink href="/methodology" variant="secondary">
            Explore the methodology
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
