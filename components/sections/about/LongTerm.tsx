import { ArrowLink } from "@/components/ui/ArrowLink";
import { PullQuote } from "@/components/ui/PullQuote";
import { Section } from "@/components/ui/Section";
import { CAPABILITY_GROUP_LABEL, CAPABILITY_NAV } from "@/lib/site";

export function LongTerm() {
  return (
    <Section
      layout="split"
      eyebrow="The long view"
      title="Built to be an institution, not a moment."
      tone="raised"
    >
      <div className="mt-10 lg:mt-0 space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Huerta Group is being built deliberately and for the long term.
          Today, that takes the form of the work this site describes.
        </p>
        <p>
          The Company&apos;s work is designed to take more than one form.
          The first is the organizational systems practice described
          here — the Company&apos;s current client-facing work. Education
          &amp; Workforce Development and Managed Services are broader
          institutional directions: capability areas the Company is
          defining, not services it offers today. The Company
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
        {/* Secondary access to the four institutional branches, now that the
            header no longer carries them (2027 launch alignment). */}
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-gold-500">
            {CAPABILITY_GROUP_LABEL}
          </p>
          <ul className="mt-2 space-y-1">
            {CAPABILITY_NAV.map((item) => (
              <li key={item.href}>
                <ArrowLink href={item.href}>{item.label}</ArrowLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
