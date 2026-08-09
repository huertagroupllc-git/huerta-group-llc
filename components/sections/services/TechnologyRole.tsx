import { ArrowLink } from "@/components/ui/ArrowLink";
import { Section } from "@/components/ui/Section";

export function TechnologyRole() {
  return (
    <Section
      layout="split"
      eyebrow="Technology's place"
      title="Technology, in service of the system."
    >
      <div className="mt-10 lg:mt-0 space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Automation, software, data systems, and AI have a defined place in
          this work: they are applied when technology materially improves a
          system that has been deliberately designed — and not before.
          Automating a poorly designed process only makes the poor process
          run faster.
        </p>
        <p>
          That discipline cuts both ways. Sometimes the right answer is
          advanced software; sometimes it is a simpler workflow, clearer
          documentation, a revised responsibility structure — or no new
          technology at all.
        </p>
        <p>
          <ArrowLink href="/technology-software">The Company&apos;s technology philosophy: explore Technology
            &amp; Software</ArrowLink>
        </p>
      </div>
    </Section>
  );
}
