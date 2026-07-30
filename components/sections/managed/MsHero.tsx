import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { CONTACT_HREF } from "@/lib/site";

export function MsHero() {
  return (
    <section className="bg-gradient-to-b from-ink-900 to-ink-950">
      <Container className="py-20 sm:py-28">
        <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-gold-500">
          <span aria-hidden="true" className="h-px w-8 bg-gold-600" />
          Managed Services
        </p>
        <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-silver-100 sm:text-5xl">
          Systems, sustained.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver-400">
          Managed Services is the institutional function through which
          Huerta Group helps organizations keep their systems strong:
          carried into daily operation, held to their standard, reviewed
          honestly, and improved as conditions change. It is sustained
          organizational capability support — and the organization&apos;s
          purpose, decisions, and accountability stay exactly where they
          belong.
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
