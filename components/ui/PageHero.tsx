import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lead: string;
  /** Action row (ButtonLinks); omitted where a hero takes no actions. */
  actions?: React.ReactNode;
}

/**
 * Page-opening hero band: panel gradient closing on a hairline, mono eyebrow,
 * serif h1, lead, optional action row (ddr-0004, restated at ddr-0011).
 * Exactly one PageHero per route.
 *
 * The former `size="display"` variant is gone: the homepage now opens with its
 * own split composition rather than a larger copy of this band, so the variant
 * had no caller and a hero API with an unreachable branch invites drift.
 */
export function PageHero({ eyebrow, title, lead, actions }: PageHeroProps) {
  return (
    <section className="border-b border-edge bg-linear-[180deg,var(--color-panel-top),var(--color-panel-bottom)]">
      <Container className="py-20 sm:py-24 lg:py-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-7 max-w-4xl text-balance font-serif text-4xl leading-[1.06] tracking-display text-silver-100 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-silver-400">
          {lead}
        </p>
        {actions ? (
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">{actions}</div>
        ) : null}
      </Container>
    </section>
  );
}
