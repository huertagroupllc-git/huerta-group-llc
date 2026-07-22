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
          Today, that takes the form of the organizational systems work this
          site describes.
        </p>
        <p>
          Over time, the company&apos;s work may come to include additional
          forms — consulting engagements, software, education, publishing,
          managed services, partnerships. None of that is promised here, and
          none of it would change the identity underneath: an organizational
          systems company, accountable for what it builds.
        </p>
        <p className="border-l-2 border-gold-600 pl-5 font-serif text-xl text-silver-300">
          What will not change is the orientation: decisions weighed on long
          horizons, obligations taken seriously, and growth pursued only at
          a pace the work can honestly support.
        </p>
      </div>
    </Section>
  );
}
