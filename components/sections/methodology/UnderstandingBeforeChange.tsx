import { ArrowLink } from "@/components/ui/ArrowLink";
import { Section } from "@/components/ui/Section";
import { ASSESSMENT_HREF, ASSESSMENT_NAME } from "@/lib/site";

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
        {/* The entry engagement, placed where it belongs in the method: as
            the bounded form understanding usually takes, and nothing more.
            It is not a prerequisite for every engagement, it does not lead
            automatically to design, and its recommendations authorize no
            implementation (2027 launch alignment). */}
        <p>
          For an organization that comes to Huerta Group with a defined
          operating condition, that understanding most often takes the form
          of the {ASSESSMENT_NAME}: a bounded engagement focused on one
          material operating condition, examined across the systems
          reasonably necessary to understand it, and closed with
          evidence-based findings and recommendations. The assessment is
          where understanding is established — not a prerequisite for every
          engagement, and not a decision about what follows. Whether the work
          moves on to design or implementation is leadership&apos;s decision,
          made on the assessment&apos;s evidence.
        </p>
        <p>
          <ArrowLink href={ASSESSMENT_HREF}>The {ASSESSMENT_NAME}</ArrowLink>
        </p>
      </div>
    </Section>
  );
}
