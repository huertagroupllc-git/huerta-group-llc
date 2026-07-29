import { Section } from "@/components/ui/Section";

const AUDIENCES = [
  "Professionals strengthening their systems and operational capability",
  "Emerging leaders and managers",
  "Executives and organizational decision-makers",
  "Operational teams",
  "Organizations pursuing structured workforce development",
  "Professionals responsible for processes, governance, technology, or continuous improvement",
  "Future Huerta Group professionals and collaborators",
] as const;

export function EducationAudiences() {
  return (
    <Section
      eyebrow="Audiences"
      title="Who the educational ecosystem may serve."
      lead="As programs are developed, the educational branch may serve individuals and organizations across several forms of responsibility."
      tone="raised"
    >
      <ul className="mt-12 max-w-3xl space-y-4">
        {AUDIENCES.map((audience) => (
          <li
            key={audience}
            className="flex gap-3 leading-relaxed text-silver-300"
          >
            <span aria-hidden="true" className="text-gold-600">
              —
            </span>
            {audience}
          </li>
        ))}
      </ul>
      <p className="mt-10 max-w-3xl text-sm leading-relaxed text-silver-500">
        Formal programs for these audiences do not yet exist. This list
        describes who the work is being designed to serve — not who can
        enroll today.
      </p>
    </Section>
  );
}
