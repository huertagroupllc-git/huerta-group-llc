# ddr-0009 — Quiet Numeral System and Open Editorial Cards

**Classification: Institutional Record** — Design Decision Record
(lightweight; fd-0005 decision rules). Date: 2026-08-09. Status:
Accepted (validated visually across services, home, education, about).

## Context
The zero-padded serif markers ("01"…) were an existing signature seed
rendered timidly (text-sm gold); the Capabilities boxed cards were the
site's most generic dark-SaaS element. The gunmetal brand primitive
remained reserved and unused.

## Decision
Ordinal markers become large quiet numerals: `w-12 shrink-0 font-serif
text-3xl leading-none text-gunmetal` (activating the reserved gunmetal
primitive as the subdued structural numeral color; gold remains for
eyebrows and accents). The Capabilities cards abandon the boxed
`border border-edge bg-ink-950 p-8` recipe for the site's top-border
editorial language (`border-t border-edge pt-8`), superseding their
internal gold hairline. The form success card retains its box (a
functional feedback container, not an editorial card).

## Alternatives
Gold numerals at larger size (rejected: over-golds the page); keeping
boxed cards with radius/shadow refinement (rejected: deepens the SaaS
resemblance instead of removing it).

## Affected implementation / Validation
Five marker sites; Capabilities.tsx. Verified visually at both widths;
numerals are decorative-adjacent but remain real text (announced;
acceptable — they are ordinals with meaning).
