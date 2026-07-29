import { Section } from "@/components/ui/Section";

export function EducationMission() {
  return (
    <Section
      eyebrow="Educational mission"
      title="Why the Company is building an educational branch."
    >
      <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          Huerta Group works inside organizations — understanding,
          designing, improving, and implementing the systems through which
          they operate. That work produces something durable: methods that
          hold up in practice, knowledge of how organizations actually
          behave, and experience carrying change through to results.
        </p>
        <p>
          Education &amp; Workforce Development exists to turn that
          accumulated methodology, intellectual property, and operating
          knowledge into scalable learning experiences — for professionals
          building their own capability, and for organizations developing
          their people. It is part of building Huerta Group into a durable
          institution whose knowledge outlasts any single engagement.
        </p>
        <p className="border-l-2 border-gold-600 pl-5 font-serif text-xl text-silver-300">
          It is not content production for its own sake. Educational work
          that loses its connection to real practice loses the reason it
          is worth teaching.
        </p>
      </div>
    </Section>
  );
}
