import { ArrowLink } from "@/components/ui/ArrowLink";
import { PullQuote } from "@/components/ui/PullQuote";
import { Section } from "@/components/ui/Section";

export function LongTerm() {
  return (
    <Section
      layout="split"
      eyebrow="The long view"
      title="Built to be an institution, not a moment."
    >
      <div className="mt-10 lg:mt-0 space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Huerta Group is being built deliberately and for the long term.
          Today, that takes the form of the work this site describes.
        </p>
        <p>
          The Company&apos;s work is designed to take more than one form.
          The first is the organizational systems practice described
          here; an Education &amp; Workforce Development capability is
          being developed to teach from it, and a Managed Services
          function is intended to sustain what it builds. The Company
          now also operates through its first formally chartered
          venture — Huerta Group Publishing, a distinct endeavor it owns
          and governs, doing its own work under a defined mandate. Over
          time the work may take other forms as well; none of that is
          promised here, and none of it would change the identity
          underneath: an organizational systems company, accountable for
          what it builds.
        </p>
        <PullQuote>
          What will not change is the orientation: decisions weighed on long
          horizons, obligations taken seriously, and growth pursued only at
          a pace the work can honestly support.
        </PullQuote>
        <p>
          <ArrowLink href="/education">Explore Education &amp; Workforce Development</ArrowLink>
        </p>
      </div>
    </Section>
  );
}
