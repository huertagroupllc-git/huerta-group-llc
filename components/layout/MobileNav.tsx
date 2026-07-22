"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CONTACT_HREF, NAV_LINKS } from "@/lib/site";

/**
 * Mobile navigation toggle — the only client component on the page.
 * Renders a hamburger button and a full-width panel under the header.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close on Escape, returning focus to the toggle so keyboard users
  // keep their place (focus would otherwise drop to <body> when the
  // panel unmounts).
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
        className="-mr-2 flex h-11 w-11 items-center justify-center text-silver-300 transition-colors duration-200 hover:text-silver-100"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-6 w-6"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="absolute inset-x-0 top-16 border-b border-edge bg-ink-950"
        >
          <ul className="px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-silver-300 transition-colors duration-200 hover:text-silver-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pb-2 pt-4">
              <ButtonLink href={CONTACT_HREF} className="w-full">
                Start a conversation
              </ButtonLink>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
