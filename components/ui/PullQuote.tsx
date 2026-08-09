import { cx } from "@/lib/cx";

interface PullQuoteProps {
  className?: string;
  children: React.ReactNode;
}

/** Serif emphasis paragraph with the gold left rule (DDR-0004). */
export function PullQuote({ className, children }: PullQuoteProps) {
  return (
    <p
      className={cx(
        "border-l-2 border-gold-600 pl-5 font-serif text-xl text-silver-300",
        className,
      )}
    >
      {children}
    </p>
  );
}
