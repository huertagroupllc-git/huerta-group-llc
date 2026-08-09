import { ArrowLink } from "@/components/ui/ArrowLink";
import { Section } from "@/components/ui/Section";

export function ExtendingCapability() {
  return (
    <Section
      eyebrow="Extending capability"
      title="Knowledge that works in more places than its author."
    >
      <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Reusable knowledge is what lets disciplined work scale without
          diluting. It supports consistency across engagements, makes
          quality transferable and reviewable, and gives the Company&apos;s
          other institutional branches something substantive to build on.
        </p>
        <p>
          Education &amp; Workforce Development extends approved
          methodology and institutional knowledge into structured learning
          and practical capability. Technology and software serve
          established knowledge — improving access, consistent
          application, coordination, measurement, and scale. And sustained
          operational support draws on the same foundation, extending the
          value of sound work beyond the engagement that produced it.
        </p>
        <p>
          <ArrowLink href="/education">Explore Education &amp; Workforce Development</ArrowLink>
        </p>
      </div>
    </Section>
  );
}
