import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cx } from "@/lib/cx";

interface CtaBandProps {
  id?: string;
  /** Optional eyebrow (the homepage closing band uses one; left-aligned per ddr-0008). */
  eyebrow?: string;
  title: string;
  lead: string;
  /** One or two ButtonLinks. Buttons are full-width on mobile (DDR-0004). */
  actions: React.ReactNode;
}

/**
 * Closing call-to-action band (ddr-0008): raised surface, editorial
 * left-aligned composition — heading and lead on the left, actions
 * aligned to the reading baseline on the right at large screens. One
 * CtaBand closes each page.
 */
export function CtaBand({ id, eyebrow, title, lead, actions }: CtaBandProps) {
  return (
    <section id={id} className="border-t border-edge bg-linear-[180deg,var(--color-chrome-top),var(--color-ink-900)]">
      <Container className="py-24 sm:py-32">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-2xl">
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            <h2
              className={cx(
                "text-balance font-serif text-3xl tracking-display text-silver-100 sm:text-4xl",
                eyebrow && "mt-5",
              )}
            >
              {title}
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-silver-400">
              {lead}
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:mt-0 lg:shrink-0 lg:flex-col lg:items-end xl:flex-row">
            {actions}
          </div>
        </div>
      </Container>
    </section>
  );
}
