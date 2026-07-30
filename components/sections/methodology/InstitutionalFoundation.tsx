import Link from "next/link";
import { Section } from "@/components/ui/Section";

export function InstitutionalFoundation() {
  return (
    <Section
      eyebrow="An institutional foundation"
      title="Methodology runs through the whole Company."
    >
      <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Methodology is where Huerta Group&apos;s institutional model
          holds together. The Company&apos;s services are delivered through
          it: services describe the areas in which Huerta Group works;
          methodology is the disciplined foundation on which that work is
          performed — so quality depends on the institution&apos;s
          standard, not on any single person&apos;s intuition.
        </p>
        <p>
          The same discipline compounds. Practiced methodology produces
          reusable organizational knowledge — the frameworks, tools, and
          intellectual property a durable institution refines and protects.
          Education &amp; Workforce Development extends that knowledge into
          structured learning and practical capability. Technology and
          software serve the methodology&apos;s consistency, coordination,
          and scale. And sustained operational support extends its value
          beyond the work that first produced it.
        </p>
        <p>
          <Link
            href="/intellectual-property"
            className="inline-block py-1 text-sm text-gold-400 transition-colors duration-200 hover:text-gold-300"
          >
            How knowledge becomes an institutional asset: explore
            Intellectual Property →
          </Link>
        </p>
      </div>
    </Section>
  );
}
