import { Section } from "@/components/ui/Section";

export function CompetencyOverCompletion() {
  return (
    <Section
      eyebrow="Competency over completion"
      title="Demonstrated ability, not passive completion."
    >
      <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Much professional education measures attendance: content is
          consumed, a completion is recorded, and little changes in how
          anyone actually works. Huerta Group&apos;s educational branch is
          being designed around a different standard — what a learner can
          do afterward.
        </p>
        <p>
          That standard points learning toward understanding real systems,
          applying structured methods, exercising professional judgment
          under actual operating conditions, producing useful work, and
          carrying improvements into sustained practice — for individuals,
          and for the organizations around them.
        </p>
        <p className="border-l-2 border-gold-600 pl-5 font-serif text-xl text-silver-300">
          The measure of the work is capability that holds up inside a
          real organization.
        </p>
      </div>
    </Section>
  );
}
