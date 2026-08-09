import { ArrowLink } from "@/components/ui/ArrowLink";
import { PullQuote } from "@/components/ui/PullQuote";
import { Section } from "@/components/ui/Section";

export function LongTerm() {
  return (
    <Section
      eyebrow="The long view"
      title="Built to be an institution, not a moment."
    >
      <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Huerta Group is being built deliberately and for the long term.
          Today, that takes the form of the work this site describes.
        </p>
        <p>
          The Company&apos;s work already takes more than one form — the
          organizational systems practice this site describes, the
          Education &amp; Workforce Development division that teaches from
          it, and the Managed Services function that sustains what the
          work builds. Over time it may take others — software,
          publishing, partnerships. None of that is promised here, and
          none of it would change the identity underneath: an
          organizational systems company, accountable for what it builds.
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
