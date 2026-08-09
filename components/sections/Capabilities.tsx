import { ArrowLink } from "@/components/ui/ArrowLink";
import { Section } from "@/components/ui/Section";

const CAPABILITY_GROUPS = [
  {
    title: "Operations & Systems Design",
    description:
      "The structural foundation: how work is organized, documented, and made repeatable across the organization.",
    items: [
      "Operations consulting",
      "Organizational systems design",
      "Business process mapping",
      "Standard Operating Procedure development",
    ],
  },
  {
    title: "Automation & Technology",
    description:
      "Technology in service of operations — introduced where it removes real friction, and implemented to fit the way your organization actually works.",
    items: [
      "Workflow automation",
      "AI implementation and adoption",
      "Technology implementation",
    ],
  },
  {
    title: "Visibility & Leadership",
    description:
      "The measurement and management layer: accurate operational visibility for decision-makers, and steady execution on the ground.",
    items: [
      "KPI and dashboard development",
      "Data reporting systems",
      "Operational leadership",
    ],
  },
] as const;

export function Capabilities() {
  return (
    <Section
      id="capabilities"
      eyebrow="Capabilities"
      title="Three disciplines, one connected practice."
      lead="Each engagement draws on the same core disciplines — applied together, so improvements in one area reinforce the others."
      tone="raised"
    >
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {CAPABILITY_GROUPS.map((group) => (
          <article
            key={group.title}
            className="border-t border-edge pt-8"
          >
            <h3 className="font-serif text-xl text-silver-100">
              {group.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-silver-400">
              {group.description}
            </p>
            <ul className="mt-6 space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-silver-300">
                  <span aria-hidden="true" className="text-gold-600">
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="mt-10 max-w-2xl text-sm leading-relaxed text-silver-500">
        AI and automation are tools within this practice — applied
        deliberately, inside a broader operational design, never as the
        starting point.
      </p>
      <p className="mt-6">
        <ArrowLink href="/services">Explore the full services</ArrowLink>
      </p>
    </Section>
  );
}
