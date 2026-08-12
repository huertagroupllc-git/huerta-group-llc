import { Section } from "@/components/ui/Section";

export function StewardshipAndProtection() {
  return (
    <Section
      layout="split"
      eyebrow="Stewardship and protection"
      title="Held responsibly. Disclosed deliberately."
      tone="raised"
    >
      <div className="mt-10 lg:mt-0 space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Intellectual property carries obligations. What a client shares
          in confidence stays in confidence — reusable knowledge is drawn
          from the disciplined abstraction of experience, never from any
          client&apos;s confidential material. Internal frameworks, tools,
          and standards remain protected inside the Company, and what
          becomes public is a deliberate decision, made when publication
          serves the work and the people it reaches.
        </p>
        <p>
          Stewardship also refuses to let documented knowledge go stale.
          Institutional knowledge is strengthened through use — evaluated
          against real operating conditions, corrected when practice
          disagrees with it, and refined as organizations and technologies
          change. Documentation is where knowledge starts being useful,
          not where it stops being examined.
        </p>
      </div>
    </Section>
  );
}
