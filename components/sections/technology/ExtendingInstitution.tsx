import Link from "next/link";
import { Section } from "@/components/ui/Section";

export function ExtendingInstitution() {
  return (
    <Section
      eyebrow="Extending the institution"
      title="Technology runs through the institutional model."
    >
      <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Across Huerta Group&apos;s work, technology plays the same
          supporting role. In services, it strengthens engagements where
          organizational need justifies it — never as a requirement of
          working together. In methodology, it supports consistent
          application, measurement, and scale. Approved institutional
          knowledge can be extended through software; structured learning
          can be supported in its access, practice, and continuity; and
          sustained operations can draw on technology for visibility,
          coordination, and improvement.
        </p>
        <p>
          In every case the direction is the same: technology extends what
          the institution has already established — its method, its
          knowledge, its standards. It amplifies substance. It does not
          substitute for it.
        </p>
        <p>
          <Link
            href="/intellectual-property"
            className="inline-block py-1 text-sm text-gold-400 transition-colors duration-200 hover:text-gold-300"
          >
            The knowledge technology extends: explore Intellectual
            Property →
          </Link>
        </p>
      </div>
    </Section>
  );
}
