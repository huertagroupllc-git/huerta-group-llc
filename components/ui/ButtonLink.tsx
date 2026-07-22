import Link from "next/link";
import { cx } from "@/lib/cx";

type ButtonVariant = "primary" | "secondary";

interface ButtonLinkProps {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

const BASE =
  "inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-gold-500 text-ink-950 hover:bg-gold-400",
  secondary:
    "border border-edge text-silver-300 hover:border-gold-600 hover:text-silver-100",
};

/** Link styled as a button. All calls to action are links, not buttons. */
export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
}: ButtonLinkProps) {
  return (
    <Link href={href} className={cx(BASE, VARIANTS[variant], className)}>
      {children}
    </Link>
  );
}
