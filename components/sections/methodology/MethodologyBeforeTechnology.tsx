import Link from "next/link";
import { Section } from "@/components/ui/Section";

export function MethodologyBeforeTechnology() {
  return (
    <Section
      eyebrow="Methodology before technology"
      title="The foundation is the method, not the tool."
    >
      <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-silver-400">
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
        <p className="border-l-2 border-gold-600 pl-5 font-serif text-xl text-silver-300">
          The method leads. The tools serve.
        </p>
        <p>
          <Link
            href="/technology-software"
            className="inline-block py-1 text-sm text-gold-400 transition-colors duration-200 hover:text-gold-300"
          >
            How the Company puts technology to work: explore Technology
            &amp; Software →
          </Link>
        </p>
      </div>
    </Section>
  );
}
