import Image from "next/image";
import Link from "next/link";
import { NavLink } from "@/components/layout/NavLink";
import { Container } from "@/components/ui/Container";
import {
  CAPABILITY_GROUP_LABEL,
  CAPABILITY_NAV,
  LEGAL_NAME,
  PRIMARY_NAV,
  SITE_NAME,
  TAGLINE,
} from "@/lib/site";

/**
 * Global site footer: the quiet institutional close of every page.
 *
 * ddr-0011 sets it on the deepest gradient beneath the raised CTA band, opens
 * it with the brand lockup, and gives the tagline the mono eyebrow treatment.
 * It continues to link all eight governed destinations, now in two labelled
 * groups: the client journey the header carries, and the institutional
 * capabilities the header no longer does (2027 launch alignment).
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-edge bg-linear-[180deg,var(--color-foot-top),var(--color-foot-bottom)]">
      <Container className="py-16 sm:py-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="flex w-fit items-center gap-3.5 transition-opacity duration-200 ease-brand hover:opacity-90"
            >
              <Image
                src="/brand/hg-mark.png"
                alt=""
                width={230}
                height={170}
                className="h-10 w-auto"
              />
              <span aria-hidden="true" className="h-7 w-px bg-edge" />
              <span className="whitespace-nowrap text-sm font-medium uppercase tracking-[0.17em] text-silver-100">
                {SITE_NAME}
              </span>
            </Link>
            <p className="mt-5 font-mono text-[0.65rem] uppercase tracking-eyebrow text-gold-500">
              {TAGLINE}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-silver-500">
              An organizational systems company.
            </p>
          </div>

          <nav aria-label="Footer" className="mt-10 lg:col-span-7 lg:mt-0">
            {/* py-1 + vertical rhythm ≈ the original spacing while
                keeping each link's touch target */}
            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              <div>
                <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-eyebrow text-silver-500">
                  Company
                </p>
                <ul className="grid gap-y-1">
                  <li>
                    <NavLink href="/" variant="footer">
                      Home
                    </NavLink>
                  </li>
                  {PRIMARY_NAV.map((link) => (
                    <li key={link.href}>
                      <NavLink href={link.href} variant="footer">
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-eyebrow text-silver-500">
                  {CAPABILITY_GROUP_LABEL}
                </p>
                <ul className="grid gap-y-1">
                  {CAPABILITY_NAV.map((link) => (
                    <li key={link.href}>
                      <NavLink href={link.href} variant="footer">
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
