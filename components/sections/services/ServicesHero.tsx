import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { CONTACT_HREF } from "@/lib/site";

export function ServicesHero() {
  return (
    <section className="bg-gradient-to-b from-ink-900 to-ink-950">
      <Container className="py-20 sm:py-28">
        <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-gold-500">
          <span aria-hidden="true" className="h-px w-8 bg-gold-600" />
          Services
        </p>
        <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-silver-100 sm:text-5xl">
          Work that strengthens the systems behind your organization.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver-400">
          Organizational performance is shaped by the systems through which
          work gets done — how responsibilities, processes, information,
          technology, and leadership fit together. Huerta Group&apos;s
          services are different ways of strengthening that system,
          depending on where your organization needs it most.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href={CONTACT_HREF}>Start a conversation</ButtonLink>
          <ButtonLink href="/about" variant="secondary">
            How we think about organizations
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
