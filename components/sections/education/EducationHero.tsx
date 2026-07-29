import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { CONTACT_HREF } from "@/lib/site";

export function EducationHero() {
  return (
    <section className="bg-gradient-to-b from-ink-900 to-ink-950">
      <Container className="py-20 sm:py-28">
        <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-gold-500">
          <span aria-hidden="true" className="h-px w-8 bg-gold-600" />
          Education &amp; Workforce Development
        </p>
        <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-silver-100 sm:text-5xl">
          Learning built to develop real capability.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver-400">
          Huerta Group is establishing an educational branch to translate
          its methodology, organizational knowledge, and practical
          experience into learning that builds demonstrable professional
          and organizational capability. Formal programs are under
          development — this page describes the direction.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href={CONTACT_HREF}>Contact Huerta Group</ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            Explore our services
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
