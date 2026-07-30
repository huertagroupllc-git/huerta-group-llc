import Link from "next/link";
import { Section } from "@/components/ui/Section";

export function IntegratedModel() {
  return (
    <Section
      eyebrow="An integrated institutional model"
      title="Managed Services completes the model."
    >
      <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Managed Services is the final branch of Huerta Group&apos;s
          institutional model, and it draws on every branch before it.
          Services address defined organizational needs; Managed Services
          provides structured continuity where continued support is
          appropriate — and one does not automatically become the other.
          Methodology gives sustained work its discipline: the same
          standard of reasoning, evidence, and review, applied over time
          rather than once.
        </p>
        <p>
          Approved institutional knowledge keeps that support consistent,
          repeatable, and reviewable. Education &amp; Workforce
          Development reinforces what support alone cannot create —
          people who understand and operate their own systems. And
          technology may support coordination, documentation, visibility,
          and measurement within sustained operations, in the same
          subordinate role it plays everywhere else in the Company&apos;s
          work.
        </p>
        <p>
          <Link
            href="/technology-software"
            className="inline-block py-1 text-sm text-gold-400 transition-colors duration-200 hover:text-gold-300"
          >
            Technology&apos;s place in sustained operations: explore
            Technology &amp; Software →
          </Link>
        </p>
      </div>
    </Section>
  );
}
