import Link from "next/link";
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
      "Methods preserved as frameworks, standards, and tools the Company teaches from.",
  },
  {
    number: "04",
    title: "Education",
    description:
      "Learning that extends that knowledge to professionals and organizations — the work of this division.",
  },
  {
    number: "05",
    title: "Technology & software",
    description:
      "Supports how learning is delivered, accessed, and scaled. Technology serves the educational substance; it does not define it.",
  },
  {
    number: "06",
    title: "Managed services",
    description:
      "Extends the operational value organizations build through consulting and education.",
  },
] as const;

export function PracticeToEducation() {
  return (
    <Section
      eyebrow="From knowledge to practice"
      title="Where education sits in the Company's model."
      lead="Huerta Group operates on a deliberate institutional progression. Education draws its substance from the stages before it and strengthens the stages around it."
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
        This is the Company&apos;s operating model, not a sales sequence.
        Each element disciplines the others: education teaches what the
        Company practices, and what its people learn in the field sharpens
        what it teaches.
      </p>
      <p className="mt-6">
        <Link
          href="/methodology"
          className="inline-block py-1 text-sm text-gold-400 transition-colors duration-200 hover:text-gold-300"
        >
          Explore the methodology this division teaches from →
        </Link>
      </p>
    </Section>
  );
}
