import { ArrowLink } from "@/components/ui/ArrowLink";
import { Card, CardHeadRule } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

/**
 * The public work groupings, as they apply to an engagement.
 *
 * The same four groupings the homepage carries, described here by the work
 * involved rather than the posture taken. They group the eight authoritative
 * elements of methodology-foundation-v1.md §3; the order is substantive and
 * preserved, so the set stays an <ol>.
 *
 * No ordinals, and the word "phase" does not appear. §3 closes: "It is not
 * approved as a branded, numbered, proprietary phase model."
 */
const WORK_GROUPINGS = [
  {
    title: "Understand",
    activities:
      "Discovery, organizational assessment, process mapping, and operational analysis.",
  },
  {
    title: "Design",
    activities:
      "Recommendations, system design, implementation planning, and documentation.",
  },
  {
    title: "Implement",
    activities:
      "Technology selection, configuration, or development where justified, together with change support and training.",
  },
  {
    title: "Sustain",
    activities:
      "Performance tracking, continued measurement, and support for continuous improvement.",
  },
] as const;

export function Engagement() {
  return (
    <Section
      eyebrow="Working together"
      title="What an engagement may involve."
      lead="An adaptable model, not a fixed package — the work below is drawn on as the organization's situation requires."
      tone="raised"
    >
      <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {WORK_GROUPINGS.map((grouping) => (
          <Card as="li" interactive key={grouping.title}>
            <CardHeadRule />
            <h3 className="font-serif text-xl text-silver-100">
              {grouping.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-silver-400">
              {grouping.activities}
            </p>
          </Card>
        ))}
      </ol>
      <p className="mt-10 max-w-2xl text-sm leading-relaxed text-silver-500">
        The shape and depth of the work depend on the organization. Some
        engagements are focused on a single area of work; others move
        through the full arc.
      </p>
      <p className="mt-6">
        <ArrowLink href="/education">Structured training also belongs to the Company&apos;s
          Education &amp; Workforce Development capability</ArrowLink>
      </p>
    </Section>
  );
}
