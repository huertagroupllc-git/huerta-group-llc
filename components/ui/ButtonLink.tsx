import Link from "next/link";
import { buttonClasses, type ButtonVariant } from "@/components/ui/Button";

interface ButtonLinkProps {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

/** Link styled as a button. Calls to action are links; forms use Button. */
export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
}: ButtonLinkProps) {
  return (
    <Link href={href} className={buttonClasses(variant, className)}>
      {children}
    </Link>
  );
}
