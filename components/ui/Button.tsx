import { cx } from "@/lib/cx";

export type ButtonVariant = "primary" | "secondary";

const BASE =
  "inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 ease-brand";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-gold-500 text-ink-950 hover:bg-gold-400",
  secondary:
    "border border-edge text-silver-300 hover:border-gold-600 hover:text-silver-100",
};

/** Single source of button styling for links and real buttons (DDR-0004). */
export function buttonClasses(
  variant: ButtonVariant = "primary",
  className?: string,
): string {
  return cx(BASE, VARIANTS[variant], className);
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

/** Real <button>. Pending/disabled treatment stays with the caller. */
export function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={buttonClasses(variant, className)} {...rest}>
      {children}
    </button>
  );
}
