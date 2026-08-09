import { ArrowLink } from "@/components/ui/ArrowLink";
import { Section } from "@/components/ui/Section";

const STANDARDS = [
  {
    statement: "Practical over impressive.",
    detail:
      "Work is judged by how it holds up in daily operation, not by how it presents in a meeting.",
  },
  {
    statement: "Measured over assumed.",
    detail:
      "Improvement is demonstrated with evidence, not asserted after the fact.",
  },
  {
    statement: "Clear over clever.",
    detail:
      "If a system needs constant explanation, it is not finished.",
  },
  {
    statement: "Durable over fast.",
    detail:
      "Work is built to remain useful long after the engagement that produced it.",
  },
] as const;

export function Perspective() {
  return (
    <Section
      eyebrow="Operating perspective"
      title="How the work is judged."
      lead="Perspective is not what a company says about itself. It is the standard its work is held to."
      tone="raised"
    >
      <div className="mt-14 max-w-3xl divide-y divide-edge">
        {STANDARDS.map((standard) => (
          <div key={standard.statement} className="py-8 first:pt-0 last:pb-0">
            <h3 className="font-serif text-2xl text-silver-100">
              {standard.statement}
            </h3>
            <p className="mt-2 leading-relaxed text-silver-400">
              {standard.detail}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-10">
        <ArrowLink href="/methodology">The discipline behind these standards: explore the methodology</ArrowLink>
      </p>
    </Section>
  );
}
