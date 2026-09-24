import { PullQuote } from "@/components/ui/PullQuote";
import { Card, CardOrdinal } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

/**
 * The recognition conditions (2027 launch alignment). Each names a condition a
 * prospective client can recognize in their own organization; together they
 * describe a material operating problem that crosses systems. They restrict
 * nothing else — no industry, size, or stage.
 */
const CONDITIONS = [
  {
    title: "Unclear ownership",
    description:
      "Responsibility for outcomes is ambiguous, shared by default, or held by no one in particular.",
  },
  {
    title: "Fragmented information",
    description:
      "The information decisions depend on lives in several places, in several versions, and rarely agrees.",
  },
  {
    title: "Processes that no longer fit",
    description:
      "The documented way of working and the way work actually happens have drifted apart.",
  },
  {
    title: "Disconnected tools",
    description:
      "Systems multiply faster than the processes they were meant to support, and the gaps between them are bridged by hand.",
  },
  {
    title: "Dependence on particular people",
    description:
      "The operation runs on what specific individuals know and carry, and strains whenever they are unavailable.",
  },
  {
    title: "Weak management visibility",
    description:
      "Leaders make decisions without timely, reliable information about how the operation is actually running.",
  },
] as const;

export function Problems() {
  return (
    <Section
      id="challenges"
      eyebrow="Who this is for"
      title="When the problem runs across systems."
      lead="Huerta Group works with organizations experiencing material operating problems that no single team, tool, or process explains — conditions that show up across the systems the organization runs on, and that make coordinating work across those systems harder than the work itself. They are recognizable."
      align="center"
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CONDITIONS.map((condition, index) => (
          <Card as="li" interactive key={condition.title}>
            <CardOrdinal>{String(index + 1).padStart(2, "0")}</CardOrdinal>
            <h3 className="font-serif text-xl text-silver-100">{condition.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-silver-400">
              {condition.description}
            </p>
          </Card>
        ))}
      </ul>
      <PullQuote className="mx-auto mt-14 max-w-2xl leading-relaxed">
        None of these are people problems. They are systems problems — and
        systems can be understood, and then designed.
      </PullQuote>
    </Section>
  );
}
