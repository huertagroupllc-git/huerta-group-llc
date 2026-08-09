import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cx } from "@/lib/cx";

interface CtaBandProps {
  id?: string;
  /** Optional centered eyebrow (the homepage closing band uses one). */
  eyebrow?: string;
  title: string;
  lead: string;
  /** One or two ButtonLinks. Buttons are full-width on mobile (DDR-0004). */
  actions: React.ReactNode;
}

/**
 * Closing call-to-action band: hairline top rule, centered heading and
 * lead, action row (DDR-0004). One CtaBand closes each page.
 */
export function CtaBand({ id, eyebrow, title, lead, actions }: CtaBandProps) {
  return (
    <section id={id} className="border-t border-edge">
      <Container className="py-20 text-center sm:py-28">
        {eyebrow ? <Eyebrow centered>{eyebrow}</Eyebrow> : null}
        <h2
          className={cx(
            "mx-auto max-w-2xl font-serif text-3xl text-silver-100 sm:text-4xl",
            eyebrow && "mt-5",
          )}
        >
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-silver-400">
          {lead}
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          {actions}
        </div>
      </Container>
    </section>
  );
}
