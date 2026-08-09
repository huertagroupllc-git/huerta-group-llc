import { ArrowLink } from "@/components/ui/ArrowLink";
import { Section } from "@/components/ui/Section";

export function IntegratedApproach() {
  return (
    <Section
      layout="split"
      eyebrow="An integrated institutional approach"
      title="One institution. One body of knowledge."
      tone="raised"
    >
      <div className="mt-10 lg:mt-0 space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Education &amp; Workforce Development is not a content business
          attached to a consulting firm. It is one expression of the same
          institution: the methods Huerta Group applies inside
          organizations are the methods it teaches, held to the same
          standard of practical usefulness.
        </p>
        <p>
          That integration is the division&apos;s discipline. Consulting
          grounds the knowledge in real operating conditions. Methodology
          gives it structure. Intellectual property preserves it.
          Education extends it to people and organizations — and what
          returns from teaching sharpens the practice it came from.
        </p>
        <p>
          <ArrowLink href="/intellectual-property">Explore the institutional knowledge education draws from</ArrowLink>
        </p>
      </div>
    </Section>
  );
}
