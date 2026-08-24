import { ArrowLink } from "@/components/ui/ArrowLink";
import { Card, CardOrdinal } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const STAGES = [
  {
    number: "01",
    title: "Vision",
    description:
      "The long-term institutional direction that governs every branch of the Company's work.",
  },
  {
    number: "02",
    title: "Methodology",
    description:
      "Consulting and operational experience, refined into structured, repeatable methods.",
  },
  {
    number: "03",
    title: "Intellectual property",
    description:
      "Methods preserved as frameworks, standards, and tools to teach from.",
  },
  {
    number: "04",
    title: "Education",
    description:
      "Learning built to extend that knowledge to professionals and organizations — the role of this capability.",
  },
  {
    number: "05",
    title: "Technology & software",
    description:
      "Will support how learning is delivered, accessed, and scaled. Technology serves the educational substance; it does not define it.",
  },
  {
    number: "06",
    title: "Managed services",
    description:
      "Meant to extend the operational value organizations build through consulting and education.",
  },
] as const;

export function PracticeToEducation() {
  return (
    <Section
      layout="split"
      eyebrow="From knowledge to practice"
      title="Where education sits in the Company's model."
      lead="Huerta Group operates on a deliberate institutional progression. Education is built to draw its substance from the stages before it and to strengthen the stages around it."
      tone="raised"
    >
      <ol className="mt-14 space-y-5 lg:mt-0">
        {STAGES.map((stage) => (
          <Card as="li" interactive key={stage.number}>
            <CardOrdinal>{stage.number}</CardOrdinal>
            <h3 className="font-serif text-xl text-silver-100">
              {stage.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-silver-400">
              {stage.description}
            </p>
          </Card>
        ))}
      </ol>
      <p className="mt-10 text-sm leading-relaxed text-silver-500">
        This is the Company&apos;s operating model, not a sales sequence.
        Each element disciplines the others: education is built to teach
        what the Company practices, and what is learned in practice
        sharpens what is taught.
      </p>
      <p className="mt-6">
        <ArrowLink href="/methodology">Explore the methodology this work draws from</ArrowLink>
      </p>
    </Section>
  );
}
