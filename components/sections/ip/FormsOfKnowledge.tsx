import { Section } from "@/components/ui/Section";

/**
 * Broad institutional forms — deliberately categories, not an inventory.
 * No named asset, count, or completed public portfolio is implied.
 */
const FORMS = [
  "Consulting frameworks",
  "Operating models",
  "Standards",
  "Assessment concepts",
  "Tools and templates",
  "Educational materials",
  "Research",
  "Structured organizational knowledge",
  "Software concepts",
  "Business systems",
] as const;

export function FormsOfKnowledge() {
  return (
    <Section
      eyebrow="Forms of institutional knowledge"
      title="How reusable knowledge takes shape."
      lead="Institutional knowledge is organized into durable forms rather than left as scattered insight."
    >
      <ul className="mt-12 grid max-w-4xl gap-x-12 gap-y-4 sm:grid-cols-2">
        {FORMS.map((form) => (
          <li
            key={form}
            className="flex gap-3 leading-relaxed text-silver-300"
          >
            <span aria-hidden="true" className="text-gold-600">
              —
            </span>
            {form}
          </li>
        ))}
      </ul>
      <p className="mt-10 max-w-3xl text-sm leading-relaxed text-silver-500">
        These are the forms through which institutional knowledge is
        organized — not a public catalog. What lives within them is
        developed, refined, and protected inside the Company: public where
        publication serves the work, internal where stewardship requires
        it.
      </p>
    </Section>
  );
}
