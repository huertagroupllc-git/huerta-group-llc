import { Section } from "@/components/ui/Section";

export function AuthorityBoundary() {
  return (
    <Section
      layout="split"
      eyebrow="Support without surrendered authority"
      title="Your organization stays in charge."
      tone="raised"
    >
      <div className="mt-10 lg:mt-0 space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Sustained support raises a question every organization should
          ask: who is in charge? The answer does not change. In any
          sustained engagement, client leaders and authorized
          decision-makers retain responsibility for organizational
          direction and every consequential decision. Huerta Group&apos;s
          role is to support, coordinate, advise, implement, document,
          review, and reinforce — never to assume executive authority,
          board authority, legal accountability, or operational control
          that belongs to the organization.
        </p>
        <p>
          That boundary is not a limitation of Managed Services. It is a
          condition of doing it honestly. Support that blurs who owns
          decisions weakens the institution it claims to serve. Support
          that keeps authority clear strengthens it.
        </p>
      </div>
    </Section>
  );
}
