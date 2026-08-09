import { ArrowLink } from "@/components/ui/ArrowLink";
import { Section } from "@/components/ui/Section";

export function IntegratedModel() {
  return (
    <Section
      layout="split"
      eyebrow="An integrated institutional model"
      title="Managed Services completes the model."
    >
      <div className="mt-10 lg:mt-0 space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Managed Services is the final branch of Huerta Group&apos;s
          institutional model, and it draws on every branch before it.
          Services address defined organizational needs; Managed Services
          provides structured continuity where continued support is
          appropriate — and one does not automatically become the other.
          Methodology gives sustained work its discipline: the same
          standard of reasoning, evidence, and review, applied over time
          rather than once.
        </p>
        <p>
          Approved institutional knowledge keeps that support consistent,
          repeatable, and reviewable. Education &amp; Workforce
          Development reinforces what support alone cannot create —
          people who understand and operate their own systems. And
          technology may support coordination, documentation, visibility,
          and measurement within sustained operations, in the same
          subordinate role it plays everywhere else in the Company&apos;s
          work.
        </p>
        <p>
          <ArrowLink href="/technology-software">Technology&apos;s place in sustained operations: explore
            Technology &amp; Software</ArrowLink>
        </p>
      </div>
    </Section>
  );
}
