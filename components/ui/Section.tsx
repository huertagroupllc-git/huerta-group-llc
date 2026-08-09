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
  className,
  children,
}: SectionProps) {
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
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif text-3xl text-silver-100 sm:text-4xl">
          {title}
        </h2>
        {lead ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-silver-400">
            {lead}
          </p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
