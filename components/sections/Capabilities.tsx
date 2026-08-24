import { ArrowLink } from "@/components/ui/ArrowLink";
import { Card, CardOrdinal } from "@/components/ui/Card";
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
      lead="The work draws on three core disciplines — applied together, so improvements in one area reinforce the others."
      tone="raised"
      align="center"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {CAPABILITY_GROUPS.map((group, index) => (
          <Card as="div" interactive key={group.title}>
            <CardOrdinal>{`Discipline ${String(index + 1).padStart(2, "0")}`}</CardOrdinal>
            <h3 className="font-serif text-xl text-silver-100">
              {group.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-silver-400">
              {group.description}
            </p>
            {/* The passover sets a discipline's constituent services as
                bordered chips. They stay a real list, and they stay static:
                a chip is not a link, so it does not respond to the pointer
                (ddr-0011 — restraint governs where fidelity and the
                affordance rule disagree). */}
            <ul className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border border-card-edge px-3 py-1.5 text-xs leading-snug text-silver-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-silver-500">
        AI and automation are tools within this practice — applied
        deliberately, inside a broader operational design, never as the
        starting point.
      </p>
      <p className="mt-6 text-center">
        <ArrowLink href="/services">Explore the full services</ArrowLink>
      </p>
    </Section>
  );
}
