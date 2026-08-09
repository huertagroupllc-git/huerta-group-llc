import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cx } from "@/lib/cx";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lead: string;
  /** "display" is reserved for the homepage (larger padding + type). */
  size?: "standard" | "display";
  /** Action row (ButtonLinks); omitted where a hero takes no actions. */
  actions?: React.ReactNode;
}

/**
 * Page-opening hero band: gradient surface, eyebrow, page h1, lead,
 * optional action row (DDR-0004). Exactly one PageHero per route.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  size = "standard",
  actions,
}: PageHeroProps) {
  return (
    <section className="bg-gradient-to-b from-ink-900 to-ink-950">
      <Container
        className={
          size === "display" ? "py-24 sm:py-32 lg:py-40" : "py-20 sm:py-28"
        }
      >
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1
          className={cx(
            "mt-6 max-w-3xl font-serif text-4xl leading-tight text-silver-100 sm:text-5xl",
            size === "display" && "lg:text-6xl",
          )}
        >
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver-400">
          {lead}
        </p>
        {actions ? (
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">{actions}</div>
        ) : null}
      </Container>
    </section>
  );
}
