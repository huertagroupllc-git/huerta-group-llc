import { Section } from "@/components/ui/Section";

export function HowItConnects() {
  return (
    <Section
      eyebrow="How the areas connect"
      title="Each area strengthens the others."
    >
      <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Assessment gives design something true to build on. Design gives
          documentation something worth capturing. Documentation gives
          technology a well-understood process to support. Measurement shows
          whether the system is working. Implementation leadership carries
          the change, and advisory keeps the system improving after it
          lands.
        </p>
        <p className="border-l-2 border-gold-600 pl-5 font-serif text-xl text-silver-300">
          This is not a rigid sequence. Engagements begin wherever the
          organization&apos;s need is greatest — the connections simply mean
          the work compounds instead of fragmenting.
        </p>
      </div>
    </Section>
  );
}
