import { NavLink } from "@/components/layout/NavLink";
import { Container } from "@/components/ui/Container";
import { LEGAL_NAME, NAV_LINKS, SITE_NAME, TAGLINE } from "@/lib/site";

/**
 * Global site footer: the quiet institutional close of every page.
 * Sits on the deepest surface beneath the raised CTA band, composed on
 * the same 12-column editorial grid as split sections (ddr-0011).
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-edge bg-ink-950">
      <Container className="py-16 sm:py-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-5">
            <NavLink href="/" variant="brand">
              {SITE_NAME}
            </NavLink>
            <p className="mt-3 text-sm text-gold-500">{TAGLINE}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-silver-500">
              An organizational systems company.
            </p>
          </div>

          <nav aria-label="Footer" className="mt-10 lg:col-span-7 lg:mt-0">
            {/* py-1 + vertical rhythm ≈ the original spacing while
                keeping each link's touch target */}
            <ul className="grid gap-x-8 sm:grid-cols-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href} variant="footer">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 border-t border-edge pt-6">
          <p className="text-xs text-silver-500">
            © {year} {LEGAL_NAME}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
