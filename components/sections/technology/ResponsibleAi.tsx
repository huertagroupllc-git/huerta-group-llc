import { PullQuote } from "@/components/ui/PullQuote";
import { Section } from "@/components/ui/Section";

export function ResponsibleAi() {
  return (
    <Section
      layout="split"
      eyebrow="Artificial intelligence, with responsibility"
      title="A capable tool. Not an authority."
      tone="raised"
    >
      <div className="mt-10 lg:mt-0 space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Artificial intelligence has a real place in modern organizational
          systems. Applied well, it can support analysis, coordination,
          access to knowledge, productivity, learning, and scale — and
          Huerta Group treats it as exactly that: a governed,
          purpose-driven capability inside a well-designed system.
        </p>
        <p>
          What AI does not do is replace the foundations. It does not
          supply organizational purpose, exercise professional judgment,
          carry accountability, or govern itself. Its output is evaluated
          within organizational context and remains subject to human
          review and responsibility — like every other tool the Company
          puts to work.
        </p>
        <PullQuote>
          AI belongs inside a governed system — never above it.
        </PullQuote>
      </div>
    </Section>
  );
}
