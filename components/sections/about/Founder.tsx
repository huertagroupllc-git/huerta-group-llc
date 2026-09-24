import { PullQuote } from "@/components/ui/PullQuote";
import { Section } from "@/components/ui/Section";

/**
 * The Founder (2027 launch alignment). Every fact here is Founder
 * Office-approved operating history: wireless retail, reporting and
 * visibility tools for sales teams, broader operational responsibility in a
 * multi-location wireless business across the listed areas, and inventory
 * responsibility across an 11-store operation. Nothing else is asserted — no
 * employer, owner, partner, or client names; no dates, titles, years of
 * experience, credentials, or consulting history; and no technology origin
 * story. Do not add any of these.
 */
export function Founder() {
  return (
    <Section
      layout="split"
      id="founder"
      eyebrow="The Founder"
      title="Esteban Huerta."
      lead="A perspective formed in operating work, where the fit between people, processes, information, and technology is felt every day."
    >
      <div className="mt-10 lg:mt-0 space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Esteban Huerta&apos;s organizational-systems perspective developed
          through years of operating work. It began in wireless retail, where
          he created practical reporting and visibility tools for sales teams
          — so that the people doing the work, and the managers responsible
          for it, could see how it was actually going.
        </p>
        <p>
          That work grew into broader operational responsibility in a
          multi-location wireless business: reporting, financial
          administration, payroll, bookkeeping, inventory, procedures and
          manuals, point-of-sale and system changes, and the day-to-day
          organization of the operation. He eventually held responsibility
          for inventory across an 11-store operation.
        </p>
        <PullQuote>
          The recurring work was always the same: making work, information,
          responsibilities, processes, and technology fit together.
        </PullQuote>
        <p>
          The pattern held across every one of those areas. The operation ran
          better when how the work was done, the information it depended on,
          who was responsible for it, the processes that shaped it, and the
          technology that carried it were made to fit together — and worse,
          predictably, when they were not. That is the perspective Huerta
          Group brings to a client&apos;s operating condition, and the reason
          the Company begins by understanding the condition before deciding
          what to change.
        </p>
      </div>
    </Section>
  );
}
