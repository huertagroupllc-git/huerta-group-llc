import { Section } from "@/components/ui/Section";

const ORDER = [
  {
    number: "01",
    title: "Purpose",
    description:
      "Every system exists to serve the organization's purpose. Design starts there, or it drifts.",
  },
  {
    number: "02",
    title: "People",
    description:
      "Human capability is the point, not a constraint to engineer around. Good systems make people more effective at work worth doing.",
  },
  {
    number: "03",
    title: "Processes and systems",
    description:
      "Structure turns individual effort into organizational capability — repeatable, teachable, and improvable.",
  },
  {
    number: "04",
    title: "Technology",
    description:
      "Software, automation, and AI carry real weight inside that structure. They are tools that earn their place by serving the first three.",
  },
] as const;

export function PeopleSystemsTechnology() {
  return (
    <Section
      layout="split"
      eyebrow="Order of operations"
      title="Purpose first. People always. Technology in service of both."
      lead="The hierarchy matters. It is the difference between systems that strengthen an organization and tools that merely accumulate."
    >
      <ol className="mt-14 lg:mt-0 space-y-10">
        {ORDER.map((item) => (
          <li key={item.number} className="flex gap-6 border-t border-edge pt-6">
            <span className="w-12 shrink-0 font-serif text-3xl leading-none text-gunmetal">
              {item.number}
            </span>
            <div>
              <h3 className="font-serif text-xl text-silver-100">
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-silver-400">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
