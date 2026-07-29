import { Section } from "@/components/ui/Section";

const DOMAINS = [
  "Systems thinking",
  "Organizational design",
  "Operational improvement",
  "Process development",
  "Structured problem-solving",
  "Governance awareness",
  "Responsible artificial intelligence use",
  "Leadership and professional judgment",
  "Continuous improvement",
  "Sustainable organizational systems",
] as const;

export function CapabilityDomains() {
  return (
    <Section
      eyebrow="Areas of capability"
      title="The capabilities Huerta Group develops."
      lead="Ten connected domains, developed together — integrated professional capability rather than isolated topics."
    >
      <ul className="mt-12 grid max-w-4xl gap-x-12 gap-y-4 sm:grid-cols-2">
        {DOMAINS.map((domain) => (
          <li
            key={domain}
            className="flex gap-3 leading-relaxed text-silver-300"
          >
            <span aria-hidden="true" className="text-gold-600">
              —
            </span>
            {domain}
          </li>
        ))}
      </ul>
    </Section>
  );
}
