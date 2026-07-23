import { Section } from "@/components/ui/Section";

const CONDITIONS = [
  "Growth is outpacing the processes that used to work",
  "Outcomes depend on who does the work, not how it is designed",
  "Information and tools are fragmented across the organization",
  "Manual work is consuming time that belongs to real priorities",
  "Documentation is thin, outdated, or lives in people's heads",
  "Accountability and ownership have become unclear",
  "Technology has accumulated faster than it has been integrated",
  "Leadership lacks reliable visibility into operations",
] as const;

export function Fit() {
  return (
    <Section
      eyebrow="Appropriate fit"
      title="When it makes sense to talk."
      lead="These conditions are common in growing and changing organizations. If several feel familiar, a conversation is likely worth having."
      tone="raised"
    >
      <ul className="mt-12 grid max-w-4xl gap-x-12 gap-y-4 sm:grid-cols-2">
        {CONDITIONS.map((condition) => (
          <li key={condition} className="flex gap-3 leading-relaxed text-silver-300">
            <span aria-hidden="true" className="text-gold-600">
              —
            </span>
            {condition}
          </li>
        ))}
      </ul>
    </Section>
  );
}
