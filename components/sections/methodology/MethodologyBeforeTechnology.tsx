import { ArrowLink } from "@/components/ui/ArrowLink";
import { PullQuote } from "@/components/ui/PullQuote";
import { Section } from "@/components/ui/Section";

export function MethodologyBeforeTechnology() {
  return (
    <Section
      layout="split"
      eyebrow="Methodology before technology"
      title="The foundation is the method, not the tool."
    >
      <div className="mt-10 lg:mt-0 space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Technology, artificial intelligence, software, data systems, and
          automation all have a place in Huerta Group&apos;s work. None of
          them is its foundation. They strengthen analysis, coordination,
          implementation, measurement, and scale — when they serve a sound
          method applied to a well-understood organization.
        </p>
        <p>
          What no tool replaces is the substance underneath: organizational
          understanding, human judgment, professional responsibility,
          governance, evidence, and accountability. Methodology keeps that
          order intact — organizational purpose defines the work, method
          disciplines it, and technology serves it.
        </p>
        <PullQuote>
          The method leads. The tools serve.
        </PullQuote>
        <p>
          <ArrowLink href="/technology-software">How the Company puts technology to work: explore Technology
            &amp; Software</ArrowLink>
        </p>
      </div>
    </Section>
  );
}
