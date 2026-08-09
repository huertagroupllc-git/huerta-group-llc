import { PullQuote } from "@/components/ui/PullQuote";
import { Section } from "@/components/ui/Section";

export function ImplementationToOperation() {
  return (
    <Section
      eyebrow="From implementation to sustained capability"
      title="Improvement is not durable until it is operated."
    >
      <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Analysis, design, education, and implementation can put a
          stronger system in place. What they cannot do on their own is
          keep it strong. New processes compete with old habits.
          Documentation ages. People change roles. Growth adds load the
          original design never carried. The distance between a system
          that was implemented and a system that is operated is where much
          organizational improvement quietly unwinds.
        </p>
        <p>
          Managed Services exists for that distance. Where sustained
          organizational need justifies it, Huerta Group provides
          structured continuity — continued coordination, review,
          implementation support, reinforcement, measurement, and
          maintenance of operating discipline — until a new system is no
          longer the initiative the organization remembers, but the way it
          works.
        </p>
        <PullQuote>
          Improvement becomes real when it survives ordinary operation.
        </PullQuote>
      </div>
    </Section>
  );
}
