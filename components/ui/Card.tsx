import { cx } from "@/lib/cx";

interface CardProps {
  /** Rendered as a list item where the card sits in an enumerated set. */
  as?: "div" | "li";
  /**
   * Interactive cards lift and warm their hairline on hover. Static cards —
   * a card that is not a link and leads nowhere — do not, because a surface
   * that responds to the pointer and then does nothing is a false affordance.
   */
  interactive?: boolean;
  /**
   * Compact cards carry a principle statement rather than an offering: the
   * passover sets them tighter, at a smaller type scale, four to a row.
   */
  size?: "default" | "compact";
  className?: string;
  children: React.ReactNode;
}

/**
 * The adopted card surface (ddr-0011): a vertical gradient on a hairline,
 * warming to gold and lifting on hover.
 *
 * Rationed deliberately. Cards are for enumerated peers at two scales — the
 * default for substantive units (the problem set, the disciplines, the
 * engagement phases, the service areas) and `compact` for principle
 * statements. Prose sections, short bullet lists and editorial splits keep the
 * open top-border language ddr-0009 established, because wrapping every block
 * in a card is precisely the generic-SaaS drift ddr-0011 forbids.
 */
export function Card({
  as: Tag = "div",
  interactive = false,
  size = "default",
  className,
  children,
}: CardProps) {
  return (
    <Tag
      className={cx(
        "card-surface group/card border border-card-edge transition-[border-color,box-shadow,transform] duration-200 ease-brand",
        size === "compact" ? "p-7" : "p-8",
        interactive &&
          "hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-[0_0_0_1px_rgba(176,141,87,0.18),0_18px_42px_rgba(0,0,0,0.55)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/**
 * The mono ordinal that heads an enumerated card, with the hairline that runs
 * out to the card edge. ddr-0009's quiet numeral, reset in the adopted mono
 * face at the passover's scale.
 */
export function CardOrdinal({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="font-mono text-[0.65rem] tracking-[0.16em] text-gold-500">
        {children}
      </span>
      <span aria-hidden="true" className="h-px flex-1 bg-card-edge" />
    </div>
  );
}

/**
 * The expanding gold rule that heads a compact principle card. It widens on
 * hover of the card — the passover's one motion on a surface that leads
 * nowhere, and the reason `interactive` is still correct on a card that is not
 * a link: the response is to the pointer being over a readable unit, not a
 * promise of navigation.
 */
export function CardRule() {
  return (
    <span
      aria-hidden="true"
      className="mb-5 block h-0.5 w-[1.375rem] bg-gold-500 transition-[width] duration-300 ease-brand group-hover/card:w-13"
    />
  );
}
