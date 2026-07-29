import Link from "next/link";
import { Section } from "@/components/ui/Section";

const PHASES = [
  {
    number: "01",
    title: "Understand",
    activities:
      "Discovery, organizational assessment, process mapping, and operational analysis.",
  },
  {
    number: "02",
    title: "Design",
    activities:
      "Recommendations, system design, implementation planning, and documentation.",
  },
  {
    number: "03",
    title: "Implement",
    activities:
      "Technology selection, configuration, or development where justified, together with change support and training.",
  },
  {
    number: "04",
    title: "Sustain",
    activities:
      "Performance tracking, continued measurement, and support for continuous improvement.",
  },
] as const;

export function Engagement() {
  return (
    <Section
      eyebrow="Working together"
      title="What an engagement may involve."
      lead="An adaptable model, not a fixed package — the phases below are drawn on as the organization's situation requires."
      tone="raised"
    >
      <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {PHASES.map((phase) => (
          <li key={phase.number} className="border-t border-edge pt-5">
            <span className="font-serif text-sm text-gold-500">
              {phase.number}
            </span>
            <h3 className="mt-3 font-serif text-xl text-silver-100">
              {phase.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-silver-400">
              {phase.activities}
            </p>
          </li>
        ))}
      </ol>
      <p className="mt-10 max-w-2xl text-sm leading-relaxed text-silver-500">
        The shape and depth of each phase depend on the organization. Some
        engagements are focused on a single area of work; others move
        through the full arc.
      </p>
      <p className="mt-6">
        <Link
          href="/education"
          className="inline-block py-1 text-sm text-gold-400 transition-colors duration-200 hover:text-gold-300"
        >
          Structured training also belongs to the Company&apos;s developing
          educational branch →
        </Link>
      </p>
    </Section>
  );
}
