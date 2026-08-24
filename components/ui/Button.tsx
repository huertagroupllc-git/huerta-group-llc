import { cx } from "@/lib/cx";

export type ButtonVariant = "primary" | "secondary";

/**
 * ddr-0011 adopts the passover's metallic button: a vertical gold gradient
 * that glows on hover and takes a bounded scale on press. The press transform
 * is deliberate feedback, not animation — it lasts 120 ms and collapses under
 * the global reduced-motion rule like every other transition.
 */
const BASE =
  "inline-flex items-center justify-center rounded-sm px-8 py-4 text-sm font-semibold tracking-wide transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-brand active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60";

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-linear-[180deg,var(--color-gold-300),var(--color-gold-500)] text-ink-900 hover:shadow-[0_8px_22px_rgba(176,141,87,0.4)]",
  secondary:
    "border border-edge text-silver-300 hover:border-gold-500 hover:text-gold-500 active:border-gold-500",
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

/**
 * Real <button>. The caller controls the disabled state; the shared
 * base provides the uniform disabled styling (ddr-0004/ddr-0005).
 */
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
