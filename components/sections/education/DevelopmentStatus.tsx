import { Section } from "@/components/ui/Section";

export function DevelopmentStatus() {
  return (
    <Section
      eyebrow="Current status"
      title="Where the educational branch stands today."
    >
      <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          The educational ecosystem is under development. Current work is
          focused on the foundation programs will be built on: the
          methodology, the capability domains, and the institutional
          structure behind them.
        </p>
        <p>
          Formal programs, learning pathways, assessments, and
          certifications are not yet open for enrollment. This page
          establishes the direction of the educational branch; additional
          public detail will be introduced as programs are developed and
          approved.
        </p>
        <p>
          Organizations with training or workforce-development needs do
          not have to wait for formal programs — that work can already be
          taken up within a consulting engagement, and inquiries about
          future programs are welcome now.
        </p>
      </div>
    </Section>
  );
}
