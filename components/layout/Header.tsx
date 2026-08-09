import Link from "next/link";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavLink } from "@/components/layout/NavLink";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { CONTACT_HREF, NAV_LINKS, SITE_NAME } from "@/lib/site";

/**
 * Global site header. The brand mark is text-based for now; a future
 * vector logo replaces the contents of the brand <Link> below without
 * any structural changes to the header.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-ink-950/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <NavLink href="/" variant="brand">
          {SITE_NAME}
        </NavLink>

        {/* Desktop navigation appears at xl — measured: the full label
            row plus CTA overflows below it, and no standard breakpoint
            exists between lg and xl. With eight labels, gap-3 and the
            slightly narrower CTA keep the row on one line inside the
            max-w-6xl container (measured ~20px slack at the 1152px
            container cap); whitespace-nowrap prevents wrapping. */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-3 xl:flex"
        >
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} variant="header">
              {link.label}
            </NavLink>
          ))}
          <ButtonLink href={CONTACT_HREF} className="whitespace-nowrap px-4 py-2">
            Start a conversation
          </ButtonLink>
        </nav>

        <MobileNav />
      </Container>
    </header>
  );
}
