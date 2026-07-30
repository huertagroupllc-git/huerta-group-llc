import Link from "next/link";
import { Section } from "@/components/ui/Section";

export function InstitutionalContinuity() {
  return (
    <Section
      eyebrow="Institutional continuity"
      title="An institution that remembers."
      tone="raised"
    >
      <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Intellectual property is how Huerta Group preserves what it
          knows — across people, engagements, time, and forms of delivery.
          It reduces dependence on memory, informal practice, and any
          single individual&apos;s expertise, so the Company&apos;s
          capability belongs to the Company.
        </p>
        <p>
          It is also how the Company creates value beyond direct
          consulting hours. Knowledge that is captured and refined works
          in more places than one person&apos;s calendar allows: in the
          next engagement, in structured learning, in the systems that
          carry it. Every engagement done well strengthens the foundation
          the next one stands on.
        </p>
        <p className="border-l-2 border-gold-600 pl-5 font-serif text-xl text-silver-300">
          What the Company learns, the Company keeps — and puts back to
          work.
        </p>
        <p>
          <Link
            href="/technology-software"
            className="inline-block py-1 text-sm text-gold-400 transition-colors duration-200 hover:text-gold-300"
          >
            The systems that carry it: explore Technology &amp; Software →
          </Link>
        </p>
      </div>
    </Section>
  );
}
