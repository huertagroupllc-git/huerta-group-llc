"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { CAPABILITY_NAV } from "@/lib/site";
import { cx } from "@/lib/cx";

/**
 * The Capabilities disclosure (ddr-0011).
 *
 * A button, not a hover target: the panel opens on click or Enter and closes on
 * Escape, on an outside pointer, or when one of its links is followed — so
 * nothing here depends on a pointer (ddr-0005). Focus returns to the button
 * when Escape closes it, the only case where focus would otherwise fall to
 * <body>. Closing happens in the click handler rather than an effect on the
 * path, which would cascade a render on every navigation.
 *
 * The four routes it holds are unchanged; this groups them, it does not
 * reorganise the information architecture.
 */
export function CapabilitiesNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const inGroup = CAPABILITY_NAV.some((item) => item.href === pathname);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="contents">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={cx(
          "flex items-center gap-1.5 whitespace-nowrap border-b py-2 text-sm transition-colors duration-200 ease-brand",
          inGroup
            ? "border-gold-500 text-silver-100"
            : "border-transparent text-silver-400 hover:text-silver-100",
        )}
      >
        Capabilities
        <span
          aria-hidden="true"
          className={cx(
            "text-[0.6rem] transition-transform duration-200 ease-brand",
            open && "rotate-180",
          )}
        >
          ▼
        </span>
      </button>

      {open ? (
        <div
          id={panelId}
          className="absolute inset-x-0 top-full border-b border-edge bg-linear-[180deg,var(--color-panel-top),var(--color-panel-bottom)] shadow-[0_28px_60px_rgba(0,0,0,0.6)]"
        >
          <div className="mx-auto grid max-w-6xl gap-px bg-card-edge px-0 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITY_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="group bg-ink-900 px-7 py-8 transition-colors duration-200 ease-brand hover:bg-ink-700"
              >
                <span className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-[0.65rem] tracking-[0.16em] text-gold-500">
                    {item.ordinal}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-card-edge" />
                </span>
                <span className="block font-serif text-xl text-silver-100">
                  {item.label}
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-silver-400">
                  {item.description}
                </span>
              </Link>
            ))}
          </div>
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-card-edge px-7 py-4">
            <span className="text-sm text-gunmetal">
              Every service is delivered through disciplined methodology
            </span>
            <ArrowLink href="/methodology" onClick={() => setOpen(false)}>
              Explore the methodology
            </ArrowLink>
          </div>
        </div>
      ) : null}
    </div>
  );
}
