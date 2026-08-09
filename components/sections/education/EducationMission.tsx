import { PullQuote } from "@/components/ui/PullQuote";
import { Section } from "@/components/ui/Section";

export function EducationMission() {
  return (
    <Section
      layout="split"
      eyebrow="Education as organizational capability"
      title="Stronger organizations are built by capable people."
    >
      <div className="mt-10 lg:mt-0 space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Huerta Group works inside organizations — understanding,
          designing, improving, and implementing the systems through which
          they operate. An organization is only as strong as the people
          who run those systems: their judgment, their methods, and their
          ability to keep improving what they build.
        </p>
        <p>
          Education &amp; Workforce Development carries that conviction
          into practice. The division transforms the Company&apos;s
          methodology, intellectual property, and operating knowledge into
          structured learning — for professionals strengthening their own
          capability, and for organizations developing their people.
          Workforce development, done seriously, is institutional
          capability building.
        </p>
        <PullQuote>
          It is not content production for its own sake. Education that
          loses its connection to real practice loses the reason it is
          worth teaching.
        </PullQuote>
      </div>
    </Section>
  );
}
