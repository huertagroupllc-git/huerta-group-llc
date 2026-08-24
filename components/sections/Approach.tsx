import { ArrowLink } from "@/components/ui/ArrowLink";
import { Card, CardOrdinal } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const STEPS = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start with how work actually happens — not how the org chart says it should. Observation before prescription.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We design systems around your people, constraints, and goals: processes, tools, and accountability that fit together.",
  },
  {
    number: "03",
    title: "Implement",
    description:
      "We build alongside your team, not from a distance. Recommendations only matter once they are put into operation.",
  },
  {
    number: "04",
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
        {STEPS.map((step) => (
          <Card as="li" interactive key={step.number}>
            <CardOrdinal>{step.number}</CardOrdinal>
            <h3 className="font-serif text-xl text-silver-100">
              {step.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-silver-400">
              {step.description}
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
