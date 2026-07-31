import { Section } from "@/components/ui/Section";

/**
 * Enduring principles presented as an unordered set — deliberately not a
 * technology framework, stack disclosure, or product roadmap.
 */
const PRINCIPLES = [
  {
    statement: "Systems fit.",
    detail:
      "Technology must fit the organization as a system — its people, processes, governance, information, incentives, and existing infrastructure — not arrive as an answer looking for a problem.",
  },
  {
    statement: "Practical implementation.",
    detail:
      "A technical recommendation has limited value unless it can be adopted, operated, maintained, governed, and improved in daily practice.",
  },
  {
    statement: "Human responsibility.",
    detail:
      "Technology does not eliminate responsibility. Decisions, oversight, interpretation, and consequences remain human and institutional.",
  },
  {
    statement: "Interoperability and independence.",
    detail:
      "Durable systems avoid unnecessary dependence on one vendor, one platform, one model, or one trend. Portability, interoperability, and institutional control weigh in every choice.",
  },
  {
    statement: "Security, privacy, and stewardship.",
    detail:
      "Technical decisions account for security, privacy, access, data stewardship, and organizational authority — as design considerations, not afterthoughts.",
  },
  {
    statement: "Maintainability and continuity.",
    detail:
      "A system must remain understandable, supportable, and adaptable over time. Novelty alone is not institutional value.",
  },
  {
    statement: "Capability, not dependency.",
    detail:
      "Technology should strengthen an organization's own capability rather than create avoidable dependence on consultants, vendors, or opaque systems.",
  },
  {
    statement: "Continuous improvement.",
    detail:
      "Deployment is not the end of responsibility. Technology systems are evaluated, maintained, corrected, and refined as conditions change.",
  },
] as const;

export function ResponsibleTechnologyPrinciples() {
  return (
    <Section
      eyebrow="Principles for responsible technology"
      title="What every technical decision answers to."
      lead="These principles govern how Huerta Group evaluates, recommends, and applies technology — for the organizations it serves and for itself."
    >
      <div className="mt-14 max-w-3xl divide-y divide-edge">
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
