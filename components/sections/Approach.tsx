import { ArrowLink } from "@/components/ui/ArrowLink";
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
    >
      <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step) => (
          <li key={step.number} className="border-t border-edge pt-5">
            <span className="font-serif text-sm text-gold-500">
              {step.number}
            </span>
            <h3 className="mt-3 font-serif text-xl text-silver-100">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-silver-400">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
      <p className="mt-10">
        <ArrowLink href="/methodology">Explore the methodology behind the work</ArrowLink>
      </p>
    </Section>
  );
}
