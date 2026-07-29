import { Section } from "@/components/ui/Section";

const FORMATS = [
  "Professional training programs",
  "Workshops",
  "Executive education",
  "Organizational and team training",
  "Cohort-based learning",
  "Self-paced learning",
  "Learning pathways",
  "Practical projects and capstones",
  "Competency assessments",
  "Continuing education",
  "Professional and organizational certifications",
] as const;

export function FutureFormats() {
  return (
    <Section
      eyebrow="Anticipated forms"
      title="Forms the educational work may take."
      lead="As the branch matures, learning may be offered through several forms. Each is anticipated, not available — none is open for enrollment, scheduled, or priced."
      tone="raised"
    >
      <ul className="mt-12 grid max-w-4xl gap-x-12 gap-y-4 sm:grid-cols-2">
        {FORMATS.map((format) => (
          <li
            key={format}
            className="flex gap-3 leading-relaxed text-silver-300"
          >
            <span aria-hidden="true" className="text-gold-600">
              —
            </span>
            {format}
          </li>
        ))}
      </ul>
      <p className="mt-10 max-w-3xl text-sm leading-relaxed text-silver-500">
        Educational technology may eventually support delivery, assessment,
        and access across these forms. Which forms are developed, and in
        what order, will be decided as programs are designed and approved.
      </p>
    </Section>
  );
}
