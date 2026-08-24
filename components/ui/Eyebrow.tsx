import { cx } from "@/lib/cx";

interface EyebrowProps {
  /** Centered variant (hairlines flank the label). Unused since the
   * centered CTA composition was retired (ddr-0008); retained for
   * future centered contexts. */
  centered?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * Uppercase gold section/hero label with a gold hairline accent.
 *
 * ddr-0011 sets it in JetBrains Mono at the adopted scale; the tracking token
 * from ddr-0002 continues to govern its letter-spacing, and the hairline
 * lengthens to the passover's 40px rule.
 */
export function Eyebrow({ centered = false, className, children }: EyebrowProps) {
  return (
    <p
      className={cx(
        "flex items-center gap-3.5 font-mono text-[0.7rem] uppercase tracking-eyebrow text-gold-500",
        centered && "justify-center",
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-10 bg-gold-500" />
      {children}
      {centered ? (
        <span aria-hidden="true" className="h-px w-10 bg-gold-500" />
      ) : null}
    </p>
  );
}
