import { ArrowLink } from "@/components/ui/ArrowLink";
import { PullQuote } from "@/components/ui/PullQuote";
import { Section } from "@/components/ui/Section";
import {
  ASSESSMENT_NAME,
  CONSULTATION_LENGTH,
  CONSULTATION_NAME,
  CONTACT_HREF,
} from "@/lib/site";

/**
 * The Organizational Systems Assessment: the primary entry engagement for
 * organizational-systems work (2027 launch alignment).
 *
 * The public boundaries are deliberate and complete: bounded around one
 * defined condition; methods conditional on condition and agreed scope, drawn
 * only from the work the Services page already describes (discovery,
 * structured assessment, process observation and mapping, operational
 * analysis); no duration, no price, no guaranteed artifact, no guaranteed
 * outcome; and completion authorizes nothing further. Do not add a standard
 * duration, a price, a mandatory artifact, or an implication that
 * implementation follows.
 */
const CONDITIONAL_METHODS = [
  "Discovery conversations with leadership and with the people who carry the work day to day.",
  "Structured assessment of the relevant processes, roles, information flows, technology, and measures against the outcome the organization intends.",
  "Process observation and process mapping, so the work is examined as it actually happens rather than as it is described.",
  "Operational analysis of the evidence — relationships, contributing factors, dependencies, and risks — to distinguish symptoms from the underlying condition.",
] as const;

export function Assessment() {
  return (
    <Section
      layout="split"
      id="assessment"
      eyebrow="Primary entry engagement"
      title={`The ${ASSESSMENT_NAME}.`}
      lead="Understand the operating condition before deciding what to change."
      tone="raised"
    >
      <div className="mt-10 lg:mt-0 space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          The {ASSESSMENT_NAME} is a bounded professional engagement focused
          on one defined material operating condition. Huerta Group examines
          that condition across the organizational systems reasonably
          necessary to understand it, establishes evidence-based findings, and
          provides leadership with recommendations sufficient to make informed
          decisions about what — if anything — should happen next.
        </p>
        <p>
          The assessment is bounded around the defined condition. It is not an
          unlimited examination of the whole organization: the systems
          examined are those reasonably necessary to understand the condition,
          and the scope is agreed before the work begins.
        </p>
        <p>Depending on the condition and agreed scope, assessment work may include:</p>
        <ul className="space-y-3 text-base">
          {CONDITIONAL_METHODS.map((method) => (
            <li key={method} className="flex gap-3 leading-relaxed text-silver-300">
              <span aria-hidden="true" className="text-gold-600">
                —
              </span>
              {method}
            </li>
          ))}
        </ul>
        <p>
          What leadership receives is evidence-based findings and
          recommendations sufficient to decide well — including the decision
          that nothing should change yet.
        </p>
        <PullQuote>
          Completing an assessment authorizes nothing by itself.
        </PullQuote>
        <p>
          It does not commit the organization to implementation, software
          work, ongoing consulting, or any further Huerta Group work. Each of
          those is a separate decision, made by leadership, and the assessment
          exists so that decision can be made on evidence rather than
          assumption.
        </p>
        <p>
          The assessment is the primary entry point for organizational-systems
          work. It is not a mandatory prerequisite for every engagement with
          Huerta Group; where an organization&apos;s need is already well
          understood, work may begin elsewhere.
        </p>
        <p>
          <ArrowLink href={CONTACT_HREF}>Begin with a {CONSULTATION_NAME} ({CONSULTATION_LENGTH})</ArrowLink>
        </p>
      </div>
    </Section>
  );
}
