import { Section } from "@/components/ui/Section";

export function Identity() {
  return (
    <Section
      eyebrow="Identity"
      title="Organizations are systems before they are anything else."
    >
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6 text-lg leading-relaxed text-silver-400">
          <p>
            Every organization — whatever its size or mission — runs on the
            same underlying material: people carrying responsibility,
            processes that shape their work, information that guides
            decisions, technology that carries the load, and leadership that
            holds it all together.
          </p>
          <p>
            Huerta Group works at the level where these elements meet. Not
            the org chart alone, not the tools alone, but the connected
            system they form together.
          </p>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-silver-400 lg:border-l lg:border-edge lg:pl-10">
          <p>
            When that system is designed deliberately, an organization
            becomes clearer, steadier, and easier to lead. When it is left to
            accumulate on its own, friction compounds quietly until growth
            exposes it.
          </p>
          <p className="font-serif text-xl text-silver-300">
            That is the company&apos;s field of work: the design and
            improvement of the systems organizations run on.
          </p>
        </div>
      </div>
    </Section>
  );
}
