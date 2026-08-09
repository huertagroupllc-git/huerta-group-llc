import { PullQuote } from "@/components/ui/PullQuote";
import { Section } from "@/components/ui/Section";

export function ConsistencyWithAdaptation() {
  return (
    <Section
      eyebrow="Consistency with responsible adaptation"
      title="Repeatable is not rigid."
      tone="raised"
    >
      <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          A disciplined methodology is what makes Huerta Group&apos;s work
          consistent — transferable, reviewable, and accountable across
          organizations and over time, rather than dependent on any one
          individual&apos;s intuition. It is also what allows the work to
          scale without lowering its standard.
        </p>
        <p>
          Consistency does not mean identical prescriptions. The same
          disciplined way of reasoning produces different answers in
          different organizations, because the organizations are different.
          What stays constant is the standard of the work — how it is
          reasoned, evidenced, implemented, and reviewed. What adapts,
          responsibly, is the work itself: to the organization&apos;s
          actual context, constraints, and capacity. That is adaptation
          with discipline, not improvisation.
        </p>
        <PullQuote>
          The standard is constant. The answer belongs to the organization.
        </PullQuote>
      </div>
    </Section>
  );
}
