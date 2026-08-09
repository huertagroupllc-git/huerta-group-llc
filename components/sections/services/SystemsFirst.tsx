import { ArrowLink } from "@/components/ui/ArrowLink";
import { Section } from "@/components/ui/Section";

export function SystemsFirst() {
  return (
    <Section
      layout="split"
      eyebrow="The orientation"
      title="Systems first. Tools second."
    >
      <div className="mt-10 lg:mt-0 space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          The primary focus of this work is not an isolated tool or a
          surface symptom. It is the operating system underneath: people and
          their responsibilities, the processes that shape their work, the
          information decisions depend on, the technology that carries the
          load, the measures that make performance visible, and the
          leadership that holds it all accountable.
        </p>
        <p>
          Those elements behave as one connected system. Fixing one in
          isolation rarely holds. Designing them together is what makes
          improvements durable — which is why every service below is a way
          of working on the system, not a product on a shelf.
        </p>
        <p>
          <ArrowLink href="/methodology">Every service is delivered through disciplined methodology</ArrowLink>
        </p>
      </div>
    </Section>
  );
}
