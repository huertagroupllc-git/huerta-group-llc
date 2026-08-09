import { Section } from "@/components/ui/Section";

export function PurposeBeforeTools() {
  return (
    <Section
      layout="split"
      eyebrow="Purpose before tools"
      title="The organization decides what technology is for."
    >
      <div className="mt-10 lg:mt-0 space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Huerta Group is an organizational systems company. Technology is
          one of the means through which sound systems are supported —
          never the starting point. Organizational purpose, operating
          reality, evidence, governance, and implementation requirements
          determine whether technology should be used at all, and how.
        </p>
        <p>
          That order is deliberate. A tool chosen before the system is
          understood tends to reshape the organization around the tool.
          Methodology leads and technology serves — so the result is
          technology that fits the organization, instead of an
          organization bent to fit its software.
        </p>
      </div>
    </Section>
  );
}
