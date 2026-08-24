import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cx } from "@/lib/cx";

interface SectionProps {
  id?: string;
  eyebrow: string;
  title: string;
  lead?: string;
  /** Slightly lifted background for visual rhythm between sections. */
  tone?: "base" | "raised";
  /**
   * Editorial composition (ddr-0007). "split" places the section header
   * in a left column with the content beside it on large screens —
   * reserved for narrow content stacks; wide grids stay "stack".
   */
  layout?: "stack" | "split";
  /**
   * Centred section header (ddr-0011). The adopted design centres the header
   * above enumerated card grids; editorial and split sections stay left,
   * preserving the ddr-0007 composition.
   */
  align?: "left" | "center";
  className?: string;
  children: React.ReactNode;
}

/**
 * Shared section shell: consistent vertical rhythm, eyebrow label with a
 * gold hairline, serif heading, and optional lead paragraph.
 */
export function Section({
  id,
  eyebrow,
  title,
  lead,
  tone = "base",
  layout = "stack",
  align = "left",
  className,
  children,
}: SectionProps) {
  const centered = align === "center";
  const header = (
    <div className={cx(centered && "mx-auto max-w-3xl text-center")}>
      <Eyebrow centered={centered}>{eyebrow}</Eyebrow>
      <h2
        className={cx(
          "mt-5 text-balance font-serif text-4xl leading-[1.12] tracking-display text-silver-100 sm:text-5xl",
          !centered && "max-w-2xl",
          layout === "split" && "lg:max-w-none",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cx(
            "mt-5 text-pretty text-lg leading-relaxed text-silver-400",
            !centered && "max-w-2xl",
            layout === "split" && "lg:max-w-none",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );

  return (
    <section
      id={id}
      className={cx(
        "border-t border-edge py-20 sm:py-24",
        // The body ground is ink-900 under ddr-0011, so a raised band lifts
        // *above* it rather than sitting a step below as it did when the page
        // ground was ink-950. Same alternation, inverted direction.
        tone === "raised" && "bg-ink-800",
        className,
      )}
    >
      <Container>
        {layout === "split" ? (
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-5">{header}</div>
            <div className="lg:col-span-7">{children}</div>
          </div>
        ) : (
          <>
            {header}
            <div className={cx(centered && "mt-14")}>{children}</div>
          </>
        )}
      </Container>
    </section>
  );
}
