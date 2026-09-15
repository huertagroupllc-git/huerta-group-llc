import { ArrowLink } from "@/components/ui/ArrowLink";
import { Card, CardHeadRule } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

/**
 * The public work groupings.
 *
 * These four are a public grouping of the eight authoritative elements in
 * methodology-foundation-v1.md §3 — Understand covers 3.1–3.3, Design 3.4,
 * Implement 3.5, Sustain 3.6–3.8. The order is substantive and is preserved,
 * which is why the set stays an <ol>.
 *
 * They carry no ordinals. §3 closes: "It is not approved as a branded,
 * numbered, proprietary phase model." The institutional methodology governs
 * this page; this page does not govern the methodology. Do not reintroduce
 * 01/02/03/04, and do not describe these four as phases.
 */
const WORK_GROUPINGS = [
  {
    title: "Understand",
    description:
      "We start with how work actually happens — not how the org chart says it should. Observation before prescription.",
  },
  {
    title: "Design",
    description:
      "We design systems around your people, constraints, and goals: processes, tools, and accountability that fit together.",
  },
  {
    title: "Implement",
    description:
      "We build alongside your team, not from a distance. Recommendations only matter once they are put into operation.",
  },
  {
    title: "Sustain",
    description:
      "We document, measure, and transfer ownership — so the systems keep working long after the engagement ends.",
  },
] as const;

export function Approach() {
  return (
    <Section
      id="approach"
      eyebrow="How we work"
      title="Disciplined, practical, built to last."
      lead="A structured way of working that stays grounded in your organization's reality — and ends with your team in control of the result."
      align="center"
    >
      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {WORK_GROUPINGS.map((grouping) => (
          <Card as="li" interactive key={grouping.title}>
            <CardHeadRule />
            <h3 className="font-serif text-xl text-silver-100">
              {grouping.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-silver-400">
              {grouping.description}
            </p>
          </Card>
        ))}
      </ol>
      <p className="mt-10 text-center">
        <ArrowLink href="/methodology">Explore the methodology behind the work</ArrowLink>
      </p>
    </Section>
  );
}
