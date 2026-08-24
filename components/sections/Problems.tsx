import { PullQuote } from "@/components/ui/PullQuote";
import { Card, CardOrdinal } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const PROBLEMS = [
  {
    title: "Fragmented workflows",
    description:
      "Work moves between people and tools without a clear, repeatable path.",
  },
  {
    title: "Unclear ownership",
    description:
      "Responsibilities blur as teams expand, and decisions slow down.",
  },
  {
    title: "Inconsistent processes",
    description:
      "Outcomes depend on who does the work, not on how the work is designed.",
  },
  {
    title: "Disconnected tools",
    description:
      "Software multiplies faster than the processes it was meant to support.",
  },
  {
    title: "Weak reporting",
    description:
      "Leaders make decisions without timely, reliable operational visibility.",
  },
  {
    title: "Trapped knowledge",
    description:
      "Critical know-how lives in individuals instead of in documented systems.",
  },
] as const;

export function Problems() {
  return (
    <Section
      id="challenges"
      eyebrow="The problem"
      title="Growth exposes the systems behind the work."
      lead="As organizations grow, the informal systems that once worked quietly begin to strain. The symptoms are familiar."
      align="center"
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((problem, index) => (
          <Card as="li" interactive key={problem.title}>
            <CardOrdinal>{String(index + 1).padStart(2, "0")}</CardOrdinal>
            <h3 className="font-serif text-xl text-silver-100">{problem.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-silver-400">
              {problem.description}
            </p>
          </Card>
        ))}
      </ul>
      <PullQuote className="mx-auto mt-14 max-w-2xl leading-relaxed">
        None of these are people problems. They are systems problems — and
        systems can be designed.
      </PullQuote>
    </Section>
  );
}
