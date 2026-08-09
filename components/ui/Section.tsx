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
  className,
  children,
}: SectionProps) {
  const header = (
    <>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className={cx(
          "mt-5 max-w-2xl text-balance font-serif text-3xl tracking-display text-silver-100 sm:text-4xl",
          layout === "split" && "lg:max-w-none",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cx(
            "mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-silver-400",
            layout === "split" && "lg:max-w-none",
          )}
        >
          {lead}
        </p>
      ) : null}
    </>
  );

  return (
    <section
      id={id}
      className={cx(
        "border-t border-edge py-20 sm:py-28",
        tone === "raised" && "bg-ink-900",
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
            {children}
          </>
        )}
      </Container>
    </section>
  );
}
