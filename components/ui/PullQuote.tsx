import { cx } from "@/lib/cx";

interface PullQuoteProps {
  className?: string;
  children: React.ReactNode;
}

/**
 * Serif emphasis paragraph with the gold left rule (DDR-0004; scale
 * refined by ddr-0006 for editorial presence).
 */
export function PullQuote({ className, children }: PullQuoteProps) {
  return (
    <p
      className={cx(
        "border-l-2 border-gold-600 pl-6 font-serif text-2xl leading-snug tracking-display text-silver-300",
        className,
      )}
    >
      {children}
    </p>
  );
}
