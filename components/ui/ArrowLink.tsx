import Link from "next/link";
import { cx } from "@/lib/cx";

interface ArrowLinkProps {
  href: string;
  /** Render as block (full-line tap target) instead of inline-block. */
  block?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * Tertiary gold text link with a trailing arrow glyph. The arrow is
 * decorative and hidden from assistive technology (DDR-0005).
 */
export function ArrowLink({
  href,
  block = false,
  className,
  children,
}: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={cx(
        block ? "block" : "inline-block",
        "py-1 text-sm text-gold-400 transition-colors duration-200 ease-brand hover:text-gold-300",
        className,
      )}
    >
      {children} <span aria-hidden="true">→</span>
    </Link>
  );
}
