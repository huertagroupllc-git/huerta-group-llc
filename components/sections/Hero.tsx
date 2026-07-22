import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { CONTACT_HREF, TAGLINE } from "@/lib/site";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-ink-900 to-ink-950">
      <Container className="py-24 sm:py-32 lg:py-40">
        <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-gold-500">
          <span aria-hidden="true" className="h-px w-8 bg-gold-600" />
          {TAGLINE}
        </p>
        <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-silver-100 sm:text-5xl lg:text-6xl">
          We build the systems your organization runs on.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver-400">
          Huerta Group is an operations and organizational systems consulting
          firm. We help leadership teams build, optimize, and scale —
          connecting people, processes, technology, and information into
          systems that support growth instead of straining under it.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href={CONTACT_HREF}>Start a conversation</ButtonLink>
          <ButtonLink href="#capabilities" variant="secondary">
            Explore capabilities
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
