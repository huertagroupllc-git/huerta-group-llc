import { Section } from "@/components/ui/Section";

export function UnderstandingBeforeChange() {
  return (
    <Section
      layout="split"
      eyebrow="Understanding before change"
      title="Responsible change begins with understanding."
      tone="raised"
    >
      <div className="mt-10 lg:mt-0 space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Huerta Group does not prescribe before it understands. The
          organization, its operating context, its existing systems, its
          constraints, its responsibilities, and the likely consequences of
          change come first — because organizations are interconnected
          systems. Processes, people, governance, information, technology,
          incentives, and decisions affect one another, and improvement
          that ignores those relationships rarely holds.
        </p>
        <p>
          That is why structured reasoning matters more than isolated
          intuition. Complex organizational conditions call for disciplined
          analysis, explicit reasoning, and relevant evidence — drawn from
          operating reality and weighed with professional judgment, not
          reduced to whatever a dashboard happens to measure.
        </p>
      </div>
    </Section>
  );
}
