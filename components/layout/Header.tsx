import Image from "next/image";
import Link from "next/link";
import { CapabilitiesNav } from "@/components/layout/CapabilitiesNav";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavLink } from "@/components/layout/NavLink";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { CONTACT_HREF, PRIMARY_NAV, SECONDARY_NAV, SITE_NAME } from "@/lib/site";

/**
 * Global site header (ddr-0011): raised chrome, the brand mark set beside the
 * wordmark, and a five-item row whose middle item is the Capabilities
 * disclosure. `relative` anchors that panel, which spans the full header width.
 *
 * The desktop row now appears at lg rather than xl: five items and a CTA fit
 * where eight labels did not, which is the capacity gr-0003 asked for.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-linear-[180deg,var(--color-chrome-top),var(--color-chrome-bottom)]">
      <Container className="relative flex h-[4.2rem] items-center justify-between gap-8">
        <Link
          href="/"
          className="flex flex-none items-center gap-3 transition-opacity duration-200 ease-brand hover:opacity-90"
        >
          <Image
            src="/brand/hg-mark.png"
            alt=""
            width={230}
            height={170}
            priority
            className="h-[2.1rem] w-auto"
          />
          <span aria-hidden="true" className="h-6 w-px bg-edge" />
          <span className="whitespace-nowrap text-[0.82rem] font-medium uppercase tracking-[0.17em] text-silver-100">
            {SITE_NAME}
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 lg:flex"
        >
          {PRIMARY_NAV.map((link) => (
            <NavLink key={link.href} href={link.href} variant="header">
              {link.label}
            </NavLink>
          ))}
          <CapabilitiesNav />
          {SECONDARY_NAV.map((link) => (
            <NavLink key={link.href} href={link.href} variant="header">
              {link.label}
            </NavLink>
          ))}
          <ButtonLink
            href={CONTACT_HREF}
            className="ml-2 whitespace-nowrap px-5 py-2.5"
          >
            Start a conversation
          </ButtonLink>
        </nav>

        <MobileNav />
      </Container>
    </header>
  );
}
