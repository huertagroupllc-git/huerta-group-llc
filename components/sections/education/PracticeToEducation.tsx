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
      "Repeated consulting and operational experience, refined into structured, repeatable methods.",
  },
  {
    number: "03",
    title: "Intellectual property",
    description:
      "Validated methods preserved as frameworks, standards, and tools the Company can teach from.",
  },
  {
    number: "04",
    title: "Education",
    description:
      "Learning experiences that extend that knowledge to professionals and organizations — the branch this page introduces.",
  },
  {
    number: "05",
    title: "Technology & software",
    description:
      "May later support how learning is delivered, assessed, accessed, and scaled. Technology supports the educational work; it does not define it.",
  },
  {
    number: "06",
    title: "Managed services",
    description:
      "May eventually reinforce and extend the capabilities organizations develop through consulting and education.",
  },
] as const;

export function PracticeToEducation() {
  return (
    <Section
      eyebrow="From practice to education"
      title="Where education sits in the Company's development."
      lead="Huerta Group is being built in deliberate stages. Education draws on the stages before it and prepares the ground for the stages that may follow."
      tone="raised"
    >
      <ol className="mt-14 max-w-3xl space-y-10">
        {STAGES.map((stage) => (
          <li key={stage.number} className="border-t border-edge pt-6">
            <div className="flex gap-6">
              <span className="font-serif text-sm text-gold-500">
                {stage.number}
              </span>
              <div>
                <h3 className="font-serif text-xl text-silver-100">
                  {stage.title}
                </h3>
                <p className="mt-2 leading-relaxed text-silver-400">
                  {stage.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-10 max-w-3xl text-sm leading-relaxed text-silver-500">
        These stages are at different levels of maturity today, and the
        later ones describe direction rather than commitments. The point of
        the progression is discipline: education grows out of what the
        Company has actually practiced — it is not produced apart from it.
      </p>
    </Section>
  );
}
