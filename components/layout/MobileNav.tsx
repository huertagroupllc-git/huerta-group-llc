"use client";

import { useEffect, useRef, useState } from "react";
import { NavLink } from "@/components/layout/NavLink";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  CAPABILITY_NAV,
  CONTACT_HREF,
  PRIMARY_NAV,
  SECONDARY_NAV,
} from "@/lib/site";

/**
 * Menu toggle for viewports below lg. Renders a button and a full-width panel
 * under the header.
 *
 * ddr-0011 completes the responsive design the passover did not contain. The
 * panel carries the same grouping the desktop disclosure does — Capabilities
 * appears as a labelled group with its ordinals rather than a nested dropdown,
 * because a disclosure inside a disclosure is a worse answer on a touch screen
 * than a section heading. Every destination stays one tap away.
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
        className="-mr-2 flex h-11 w-11 items-center justify-center text-silver-300 transition-colors duration-200 ease-brand hover:text-silver-100"
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
        <>
          {/* Scrim: dims the page under the panel and closes on tap, which is
              the touch equivalent of the desktop disclosure's outside-click.
              aria-hidden with tabIndex -1 keeps it out of both the a11y tree
              and the tab order — Escape and the toggle are the keyboard
              routes out. */}
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-x-0 bottom-0 top-[4.2rem] z-30 cursor-default bg-ink-950/70"
          />
          <nav
            id="mobile-nav"
            aria-label="Primary"
            className="absolute inset-x-0 top-[4.2rem] z-40 max-h-[calc(100dvh-4.2rem)] overflow-y-auto border-b border-edge bg-linear-[180deg,var(--color-panel-top),var(--color-panel-bottom)] shadow-[0_28px_60px_rgba(0,0,0,0.6)]"
          >
            <ul className="px-6 py-5">
              {PRIMARY_NAV.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    variant="menu"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}

              <li className="mt-4 border-t border-card-edge pt-4">
                <p className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-gold-500">
                  Capabilities
                </p>
                <ul className="mt-1">
                  {CAPABILITY_NAV.map((item) => (
                    <li key={item.href} className="flex items-baseline gap-3">
                      <span
                        aria-hidden="true"
                        className="font-mono text-[0.6rem] tracking-[0.16em] text-gunmetal"
                      >
                        {item.ordinal}
                      </span>
                      <NavLink
                        href={item.href}
                        variant="menu"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="mt-4 border-t border-card-edge pt-4">
                <ul>
                  {SECONDARY_NAV.map((link) => (
                    <li key={link.href}>
                      <NavLink
                        href={link.href}
                        variant="menu"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="pb-2 pt-5">
                <ButtonLink
                  href={CONTACT_HREF}
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Start a conversation
                </ButtonLink>
              </li>
            </ul>
          </nav>
        </>
      ) : null}
    </div>
  );
}
