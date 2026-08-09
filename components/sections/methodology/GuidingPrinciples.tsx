import { Section } from "@/components/ui/Section";

/**
 * Enduring principles presented as an unordered set — deliberately not a
 * numbered sequence, lifecycle, or framework. The public page explains
 * how the Company reasons; it does not disclose internal process.
 */
const PRINCIPLES = [
  {
    statement: "Structured thinking.",
    detail:
      "Consequential organizational decisions deserve disciplined analysis and explicit reasoning — not assumptions, isolated symptoms, or personal preference.",
  },
  {
    statement: "Systems thinking.",
    detail:
      "Organizations are interconnected systems. Improvement accounts for how processes, people, governance, information, technology, and incentives affect one another.",
  },
  {
    statement: "Evidence-informed judgment.",
    detail:
      "Decisions draw on relevant evidence and operating reality, weighed with professional judgment. Data informs decisions; it does not replace responsibility for them.",
  },
  {
    statement: "Practical implementation.",
    detail:
      "Analysis has limited value until it becomes responsible action — carried into operating reality with organizational ownership and clear accountability.",
  },
  {
    statement: "Sustainable capability.",
    detail:
      "The objective is never dependency. Sound work strengthens an organization's own ability to understand its systems, decide well, implement, evaluate, and sustain progress.",
  },
  {
    statement: "Continuous improvement.",
    detail:
      "Systems are observed, evaluated, and refined as an ongoing organizational discipline — not corrected once and left to drift.",
  },
  {
    statement: "Governance awareness.",
    detail:
      "Improvement respects authority, responsibility, accountability, decision rights, and oversight — so change strengthens institutions rather than working around them.",
  },
] as const;

export function GuidingPrinciples() {
  return (
    <Section
      layout="split"
      eyebrow="Principles that guide the work"
      title="Enduring principles, consistently applied."
      lead="These principles govern how Huerta Group reasons and works — across organizations, industries, and time."
    >
      <div className="mt-14 lg:mt-0 divide-y divide-edge">
        {PRINCIPLES.map((principle) => (
          <div
            key={principle.statement}
            className="py-8 first:pt-0 last:pb-0"
          >
            <h3 className="font-serif text-2xl text-silver-100">
              {principle.statement}
            </h3>
            <p className="mt-2 leading-relaxed text-silver-400">
              {principle.detail}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
