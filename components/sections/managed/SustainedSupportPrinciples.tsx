import { Section } from "@/components/ui/Section";

/**
 * Enduring principles presented as an unordered set — deliberately not a
 * delivery lifecycle, package structure, tier list, or service model.
 */
const PRINCIPLES = [
  {
    statement: "Methodology throughout.",
    detail:
      "Sustained support is the Company's methodology applied over time — the same standard of reasoning, evidence, and review. It is never routine activity detached from purpose.",
  },
  {
    statement: "Proportionate support.",
    detail:
      "The level and duration of support reflect actual organizational need, capability, complexity, and risk — not a package, and not a default.",
  },
  {
    statement: "Reviewability.",
    detail:
      "Purpose, scope, responsibilities, results, and continuing need remain open to evaluation. Sustained support must keep demonstrating why it exists.",
  },
  {
    statement: "Adaptation.",
    detail:
      "Support responds to changes in organizational conditions, capability, and priorities — deliberately, never as uncontrolled expansion of scope.",
  },
  {
    statement: "Knowledge transfer.",
    detail:
      "What Huerta Group learns about an organization's systems is taught, documented, and transferred — not concentrated where the organization cannot reach it.",
  },
  {
    statement: "Responsible transition.",
    detail:
      "Support is structured so it can be reduced, redesigned, or concluded responsibly when organizational conditions change.",
  },
  {
    statement: "Continuous improvement.",
    detail:
      "Sustained work is evaluated for what it strengthens — through observation, learning, and correction. Ongoing activity alone is not evidence of organizational value.",
  },
] as const;

export function SustainedSupportPrinciples() {
  return (
    <Section
      layout="split"
      eyebrow="Principles of sustained support"
      title="What keeps ongoing work honest."
      lead="These principles govern how Huerta Group approaches sustained organizational support — whatever form a particular arrangement takes."
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
