import { cx } from "@/lib/cx";

interface EyebrowProps {
  /** Centered variant (CTA bands): hairlines flank the label. */
  centered?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * Uppercase gold section/hero label with gold hairline accent.
 * Tracking comes from the eyebrow token (DDR-0002).
 */
export function Eyebrow({ centered = false, className, children }: EyebrowProps) {
  return (
    <p
      className={cx(
        "flex items-center gap-3 text-xs font-medium uppercase tracking-eyebrow text-gold-500",
        centered && "justify-center",
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-8 bg-gold-600" />
      {children}
      {centered ? (
        <span aria-hidden="true" className="h-px w-8 bg-gold-600" />
      ) : null}
    </p>
  );
}
