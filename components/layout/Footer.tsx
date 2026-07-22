import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CONTACT_HREF, LEGAL_NAME, NAV_LINKS, SITE_NAME, TAGLINE } from "@/lib/site";

/** Global site footer. Legal links and contact details are added later. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-edge bg-ink-900">
      <Container className="py-14">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div>
            <Link
              href="/"
              className="font-serif text-lg tracking-wide text-silver-100"
            >
              {SITE_NAME}
            </Link>
            <p className="mt-3 text-sm text-gold-500">{TAGLINE}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-silver-500">
              Operations and organizational systems consulting.
            </p>
          </div>

          <nav aria-label="Footer">
            {/* py-1 + space-y-1 ≈ the previous space-y-3 rhythm while
                enlarging each link's touch target */}
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-1 text-sm text-silver-400 transition-colors duration-200 hover:text-silver-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={CONTACT_HREF}
                  className="inline-block py-1 text-sm text-silver-400 transition-colors duration-200 hover:text-silver-100"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-edge pt-6">
          <p className="text-xs text-silver-500">
            © {year} {LEGAL_NAME}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
