import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { CONTACT_HREF } from "@/lib/site";

export function MethodologyHero() {
  return (
    <section className="bg-gradient-to-b from-ink-900 to-ink-950">
      <Container className="py-20 sm:py-28">
        <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-gold-500">
          <span aria-hidden="true" className="h-px w-8 bg-gold-600" />
          Methodology
        </p>
        <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-silver-100 sm:text-5xl">
          The discipline behind the work.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver-400">
          Huerta Group&apos;s work does not rest on individual intuition,
          isolated recommendations, or the technology of the moment. It
          rests on methodology — a disciplined, structured, repeatable way
          of understanding organizations and improving the systems through
          which they operate.
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
