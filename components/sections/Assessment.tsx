import { ArrowLink } from "@/components/ui/ArrowLink";
import { Section } from "@/components/ui/Section";
import { ASSESSMENT_HREF, ASSESSMENT_NAME } from "@/lib/site";

/**
 * The entry engagement, stated once on the home page (2027 launch alignment).
 * The full public boundaries live on the Services page; this section carries
 * the approved definition and the orientation it rests on, and leads there.
 */
export function Assessment() {
  return (
    <Section
      layout="split"
      id="assessment"
      eyebrow="The entry engagement"
      title="Understand the operating condition before deciding what to change."
      tone="raised"
    >
      <div className="mt-10 lg:mt-0 space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          For organizational-systems work, the {ASSESSMENT_NAME} is Huerta
          Group&apos;s primary entry engagement: a bounded professional
          engagement focused on one defined material operating condition.
          Huerta Group examines that condition across the organizational
          systems reasonably necessary to understand it, establishes
          evidence-based findings, and provides leadership with
          recommendations sufficient to make informed decisions about what —
          if anything — should happen next.
        </p>
        <p>
          The assessment is bounded around the condition, not an unlimited
          examination of the whole organization. It is not a prerequisite for
          every engagement, and it decides nothing on its own: what follows —
          if anything — is leadership&apos;s decision, made on the
          assessment&apos;s evidence.
        </p>
        <p>
          <ArrowLink href={ASSESSMENT_HREF}>How the assessment works</ArrowLink>
        </p>
      </div>
    </Section>
  );
}
