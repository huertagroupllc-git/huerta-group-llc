import { Section } from "@/components/ui/Section";

const AUDIENCES = [
  "Professionals strengthening their systems and operational capability",
  "Emerging leaders and managers",
  "Executives and organizational decision-makers",
  "Operational teams",
  "Organizations strengthening workforce capability",
  "People responsible for processes, governance, technology, implementation, or continuous improvement",
] as const;

export function EducationAudiences() {
  return (
    <Section
      layout="split"
      eyebrow="Who the division serves"
      title="Workforce development for individuals and organizations."
      lead="The division serves the people and organizations that carry responsibility for how organizations actually run."
      tone="raised"
    >
      <ul className="mt-12 lg:mt-0 space-y-4">
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
      <p className="mt-10 text-sm leading-relaxed text-silver-500">
        For organizations, workforce development is scoped to the
        organization itself — its systems, its responsibilities, and the
        capability its work depends on.
      </p>
    </Section>
  );
}
