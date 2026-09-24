import { PullQuote } from "@/components/ui/PullQuote";
import { Section } from "@/components/ui/Section";

export function HowItConnects() {
  return (
    <Section
      layout="split"
      eyebrow="How the areas connect"
      title="Each area strengthens the others."
    >
      <div className="mt-10 lg:mt-0 space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          When change is warranted, assessment gives later work something
          true to build on. Design can give documentation something worth
          capturing; documentation can give technology a well-understood
          process to support; measurement can show whether a system is
          working; implementation leadership can carry a change, and
          advisory can keep a system improving after it lands. None of that
          follows automatically. Engagements may begin in any of these
          areas, an assessment may close with no further Huerta Group work,
          and implementation and continuing advisory each require their own
          decision and authorization.
        </p>
        <PullQuote>
          This is not a rigid sequence. Engagements begin wherever the
          organization&apos;s need is greatest — the connections simply mean
          the work compounds instead of fragmenting.
        </PullQuote>
      </div>
    </Section>
  );
}
