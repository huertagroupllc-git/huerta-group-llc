import { Section } from "@/components/ui/Section";

const QUALITIES = [
  {
    title: "Clear responsibility",
    description: "Ownership that stays sharp as the organization grows.",
  },
  {
    title: "Reliable processes",
    description:
      "Outcomes designed into how work happens, not left to individual habit.",
  },
  {
    title: "Usable information",
    description:
      "Data organized so decisions do not have to wait for answers.",
  },
  {
    title: "Consistent execution",
    description:
      "Quality that survives busy seasons, growth, and staff changes.",
  },
  {
    title: "Institutional knowledge",
    description:
      "Know-how documented so it belongs to the organization, not only to individuals.",
  },
  {
    title: "Adaptability",
    description:
      "Structure sound enough to change deliberately without breaking.",
  },
] as const;

export function Strength() {
  return (
    <Section
      eyebrow="Organizational strength"
      title="Strength is structural."
      lead="A strong organization is not defined by intensity of effort. It is defined by what its structure makes reliable — over time and under pressure."
      tone="raised"
    >
      <ul className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {QUALITIES.map((quality) => (
          <li
            key={quality.title}
            className="border-l border-edge pl-6"
          >
            <h3 className="font-serif text-xl text-silver-100">
              {quality.title}
            </h3>
            <p className="mt-2 leading-relaxed text-silver-400">
              {quality.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
