import { ArrowLink } from "@/components/ui/ArrowLink";
import { Card, CardOrdinal } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const AREAS = [
  {
    number: "01",
    title: "Organizational Assessment & Operational Analysis",
    condition:
      "For organizations that need clarity before change — where it is hard to say precisely why work feels harder than it should.",
    work:
      "Work may include discovery, structured assessment, process observation, and operational analysis to identify constraints, risks, and opportunities.",
    value:
      "The result is a grounded, shared understanding of how the organization actually operates — the foundation every other area of work builds on.",
  },
  {
    number: "02",
    title: "Process & Workflow Design",
    condition:
      "For organizations where outcomes depend on who does the work rather than on how the work is designed.",
    work:
      "Work may include business process mapping, workflow design, and clarifying responsibility structures so that work follows a deliberate, repeatable path.",
    value:
      "Well-designed processes make quality consistent and growth manageable — and they give documentation, technology, and measurement something solid to attach to.",
  },
  {
    number: "03",
    title: "Documentation & Knowledge Systems",
    condition:
      "For organizations where critical know-how lives in individuals instead of in the organization itself.",
    work:
      "Work may include standard operating procedures, documentation standards, and knowledge systems that keep operational knowledge current and usable.",
    value:
      "Documented systems protect the organization from turnover, shorten onboarding, and turn individual experience into institutional capability.",
  },
  {
    number: "04",
    title: "Technology, Automation & AI Implementation",
    condition:
      "For organizations carrying excessive manual work, disconnected tools, or technology that no longer fits the operation.",
    work:
      "Work may include technology strategy and selection, configuration and integration, workflow automation, and AI implementation — applied where technology materially supports a defined operating need.",
    value:
      "Technology fitted to a well-designed system removes real friction. It serves the processes and people around it rather than reshaping the organization to fit a tool.",
  },
  {
    number: "05",
    title: "Performance Measurement & Operational Visibility",
    condition:
      "For leaders making decisions without timely, reliable operational information.",
    work:
      "Work may include KPI development, reporting systems, and operational dashboards that reflect how the organization actually runs.",
    value:
      "Measurement closes the loop: it shows whether the system is working, where it is straining, and what deserves attention next.",
  },
  {
    number: "06",
    title: "Implementation, Change & Project Leadership",
    condition:
      "For organizations where good plans stall — where recommendations exist but operating reality has not changed.",
    work:
      "Work may include implementation planning, change support, training, and hands-on project leadership through the transition.",
    value:
      "Designs only matter once they are put into operation. This is the work that carries improvements from paper into daily practice.",
  },
  {
    number: "07",
    title: "Ongoing Operational Advisory",
    condition:
      "For organizations that want their systems to keep improving after the initial work is done.",
    work:
      "Depending on the organization, work may include periodic operational review, continued advisory to leadership, and support for continuous improvement.",
    value:
      "Systems drift without attention. A continuing advisory relationship keeps them aligned with the organization as it grows and changes.",
  },
] as const;

export function ServiceAreas() {
  return (
    <Section
      layout="split"
      id="areas"
      eyebrow="Core areas of work"
      title="Seven areas. One connected practice."
      lead="Each area addresses a different organizational condition. No engagement includes all of them by default — the work is scoped to the operating need."
      tone="raised"
    >
      <ol className="mt-14 space-y-5 lg:mt-0">
        {AREAS.map((area) => (
          <Card as="li" interactive key={area.number}>
            <CardOrdinal>{area.number}</CardOrdinal>
            <h3 className="font-serif text-2xl text-silver-100">
              {area.title}
            </h3>
            <p className="mt-3 leading-relaxed text-silver-400">
              {area.condition}
            </p>
            <p className="mt-3 leading-relaxed text-silver-400">{area.work}</p>
            <p className="mt-3 leading-relaxed text-silver-300">{area.value}</p>
          </Card>
        ))}
      </ol>
      <p className="mt-12">
        <ArrowLink href="/managed-services">Where support continues beyond a defined engagement: explore
          Managed Services</ArrowLink>
      </p>
    </Section>
  );
}
