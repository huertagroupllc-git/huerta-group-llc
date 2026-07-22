import Link from "next/link";
import { Section } from "@/components/ui/Section";

const CONTRASTS = [
  {
    them: "Advice-only consultants deliver recommendations and leave.",
    us: "We stay through implementation.",
  },
  {
    them: "Technology vendors start from the tool.",
    us: "We start from the operation.",
  },
  {
    them: "Automation agencies optimize isolated tasks.",
    us: "We design the connected system.",
  },
] as const;

export function Differentiation() {
  return (
    <Section
      id="difference"
      eyebrow="Why Huerta Group"
      title="Systems, not symptoms."
      lead="Most providers solve a slice of the problem. The slice is rarely the problem."
      tone="raised"
    >
      <dl className="mt-14 max-w-3xl space-y-10">
        {CONTRASTS.map((contrast) => (
          <div key={contrast.us} className="border-l-2 border-gold-600 pl-6">
            <dt className="text-sm leading-relaxed text-silver-500">
              {contrast.them}
            </dt>
            <dd className="mt-2 font-serif text-xl text-silver-100">
              {contrast.us}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-14 max-w-2xl text-lg leading-relaxed text-silver-400">
        We design the systems that connect people, processes, technology,
        information, and accountability — so improvements hold together
        instead of drifting apart.
      </p>
      <p className="mt-6">
        <Link
          href="/about"
          className="inline-block py-1 text-sm text-gold-400 transition-colors duration-200 hover:text-gold-300"
        >
          Learn more about the company →
        </Link>
      </p>
    </Section>
  );
}
