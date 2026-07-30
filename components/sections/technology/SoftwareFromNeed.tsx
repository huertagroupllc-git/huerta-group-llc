import { Section } from "@/components/ui/Section";

export function SoftwareFromNeed() {
  return (
    <Section
      eyebrow="Software from validated need"
      title="Software earns its place."
      tone="raised"
    >
      <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Custom software, automation, and artificial intelligence are not
          default answers. Software earns its place when a real
          organizational need repeats, existing solutions fall short, the
          underlying process is well understood, and building would
          materially improve the outcome.
        </p>
        <p>
          Sometimes the right answer is advanced software. Sometimes it is
          configuration of what already exists, a simpler workflow, clearer
          documentation — or no new technology at all. The discipline is
          the same either way: understand the system first, then choose
          the least technology that genuinely strengthens it.
        </p>
        <p className="border-l-2 border-gold-600 pl-5 font-serif text-xl text-silver-300">
          The question is never what the tool can do. It is what the
          organization needs.
        </p>
      </div>
    </Section>
  );
}
