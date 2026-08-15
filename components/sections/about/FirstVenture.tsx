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
          venture: Huerta Group Publishing, a publishing house being
          built under its own imprint. The charter gave governed form to
          work already under way — and a clear shape to the
          relationship: the venture is owned and governed by Huerta
          Group LLC, and carries out its own editorial and production
          work under a mandate that defines what is delegated and what
          is retained.
        </p>
        <p>
          The venture exists to publish books that sound like their
          authors — developing each book from manuscript through human
          editorial review to durable, production-ready publication
          records. To do that work it builds and operates its own
          software: the Author Operating System, the platform through
          which the venture&apos;s publishing is done.
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
