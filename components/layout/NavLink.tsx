"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cx } from "@/lib/cx";

const VARIANTS = {
  header: {
    base: "whitespace-nowrap border-b py-2 text-sm transition-colors duration-200 ease-brand",
    active: "border-gold-500 text-silver-100",
    inactive: "border-transparent text-silver-400 hover:text-silver-100",
  },
  menu: {
    base: "block py-3 text-base transition-colors duration-200 ease-brand",
    active: "text-silver-100",
    inactive: "text-silver-300 hover:text-silver-100",
  },
  footer: {
    base: "inline-block py-1 text-sm transition-[color,padding-left] duration-200 ease-brand hover:pl-1.5",
    active: "text-silver-100",
    inactive: "text-silver-400 hover:text-gold-500",
  },
  /** Wordmark: constant tone; contributes aria-current on the home route. */
  brand: {
    base: "whitespace-nowrap font-serif text-lg tracking-wide text-silver-100",
    active: "",
    inactive: "",
  },
} as const;

interface NavLinkProps {
  href: string;
  variant: keyof typeof VARIANTS;
  onClick?: () => void;
  children: React.ReactNode;
}

/**
 * Navigation link with current-page state: aria-current="page" plus the
 * emphasized text tone on the active route (DDR-0005). Variants map to
 * the three navigation contexts; active/inactive classes are computed
 * exclusively so no conflicting utilities are emitted.
 */
export function NavLink({ href, variant, onClick, children }: NavLinkProps) {
  const pathname = usePathname();
  const active = pathname === href;
  const v = VARIANTS[variant];
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
      className={cx(v.base, active ? v.active : v.inactive)}
    >
      {children}
    </Link>
  );
}
