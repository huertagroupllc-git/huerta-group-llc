import { PullQuote } from "@/components/ui/PullQuote";
import { Section } from "@/components/ui/Section";

/**
 * Governed venture representation under FD-V4 (fd-0009): the minimum
 * fact set, institutional-plane sourced, within the venture's maturity
 * ceiling. Representation precedes linking — no link to the venture
 * platform until its launch determination activates one (FD-V4 §13).
 */
export function FirstVenture() {
  return (
    <Section
      layout="split"
      eyebrow="The first venture"
      title="Huerta Group Publishing."
      tone="raised"
    >
      <div className="mt-10 lg:mt-0 space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          In August 2026, the Company formally chartered its first
          venture: Huerta Group Publishing, a venture centered on
          authors and the development of books, publishing under its own
          imprint. The charter gave governed form to work already under
          way — and a clear shape to the relationship: the venture is
          owned and governed by Huerta Group LLC, and carries out its
          own editorial and production work under a mandate that defines
          what is delegated and what is retained.
        </p>
        <p>
          The venture exists to help authors develop books that sound
          like themselves — not just manuscripts, but developed works,
          matured through writing, human editorial review, and
          deliberation. Its software is the Author Operating System: an
          author&apos;s workshop, a coherent environment in which a book
          is developed stage by stage with the author at the center.
          Publishing is where that development leads — the capability
          that carries a developed work into durable publication records
          under the venture&apos;s imprint.
        </p>
        <PullQuote>
          The venture does its own work. The Company governs what it is.
        </PullQuote>
        <p>
          Its operations today are internal. Access is provisioned by
          the publisher rather than open to the public, nothing is
          offered for sale, and the venture&apos;s platform — though
          built and running — has not been publicly launched. As the
          work matures, what the Company says about it will grow only as
          fast as what is true.
        </p>
      </div>
    </Section>
  );
}
