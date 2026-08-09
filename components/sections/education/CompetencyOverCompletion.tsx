import { PullQuote } from "@/components/ui/PullQuote";
import { Section } from "@/components/ui/Section";

export function CompetencyOverCompletion() {
  return (
    <Section
      layout="split"
      eyebrow="Competency beyond completion"
      title="Demonstrated ability, not passive completion."
    >
      <div className="mt-10 lg:mt-0 space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Much professional education measures attendance: content is
          consumed, a completion is recorded, and little changes in how
          anyone actually works. Huerta Group&apos;s educational work is
          built on a different standard — what a learner can do
          afterward.
        </p>
        <p>
          That standard points learning toward understanding real systems,
          applying structured methods, exercising professional judgment
          under actual operating conditions, producing useful work, making
          better decisions, and carrying improvements into sustained
          practice — for individuals, and for the organizations around
          them.
        </p>
        <PullQuote>
          The measure of the work is capability that holds up inside a
          real organization.
        </PullQuote>
      </div>
    </Section>
  );
}
