import { Container } from "@/components/ui/Container";

export function AboutHero() {
  return (
    <section className="bg-gradient-to-b from-ink-900 to-ink-950">
      <Container className="py-20 sm:py-28">
        <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-gold-500">
          <span aria-hidden="true" className="h-px w-8 bg-gold-600" />
          About Huerta Group
        </p>
        <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-silver-100 sm:text-5xl">
          An organizational systems company.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver-400">
          Huerta Group exists to help organizations become stronger — by
          design. This page explains what that means: how the company sees
          organizations, what it believes makes them strong, and the kind of
          institution it is being built to be.
        </p>
      </Container>
    </section>
  );
}
