import Link from "next/link";
import { MobileNav } from "@/components/layout/MobileNav";
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
        <Link
          href="/"
          className="whitespace-nowrap font-serif text-lg tracking-wide text-silver-100"
        >
          {SITE_NAME}
        </Link>

        {/* Desktop navigation appears at xl — measured: the seven-label
            row plus CTA overflows at lg's 1024px minimum, and no standard
            breakpoint exists between lg and xl, so xl is the smallest
            width at which one line is guaranteed. gap-6 (not gap-8) keeps
            a comfortable margin inside the max-w-6xl container;
            whitespace-nowrap prevents label wrapping. */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 xl:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap py-2 text-sm text-silver-400 transition-colors duration-200 hover:text-silver-100"
            >
              {link.label}
            </Link>
          ))}
          <ButtonLink href={CONTACT_HREF} className="px-5 py-2">
            Start a conversation
          </ButtonLink>
        </nav>

        <MobileNav />
      </Container>
    </header>
  );
}
