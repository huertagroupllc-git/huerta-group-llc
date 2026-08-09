import { PullQuote } from "@/components/ui/PullQuote";
import { Section } from "@/components/ui/Section";

export function KnowledgeBeyondEngagement() {
  return (
    <Section
      layout="split"
      eyebrow="Knowledge beyond the engagement"
      title="What is learned should not be lost."
    >
      <div className="mt-10 lg:mt-0 space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Consulting produces more than recommendations. Each engagement
          produces lessons: patterns that repeat across organizations,
          solutions that hold up in practice, decisions whose consequences
          teach something durable. In many firms, that learning lives only
          in individuals — and leaves when they do.
        </p>
        <p>
          Huerta Group treats knowledge as an institutional asset. Useful
          knowledge is captured, organized, refined, and made reusable
          where appropriate — so experience compounds instead of
          evaporating, and expertise belongs to the institution rather than
          to memory.
        </p>
        <PullQuote>
          Experience that is not captured is expertise the organization has
          to earn twice.
        </PullQuote>
      </div>
    </Section>
  );
}
