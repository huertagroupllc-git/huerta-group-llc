import { PullQuote } from "@/components/ui/PullQuote";
import { Section } from "@/components/ui/Section";

export function CapabilityOverDependency() {
  return (
    <Section
      eyebrow="Capability over dependency"
      title="The goal is an organization that needs less help."
      tone="raised"
    >
      <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-silver-400">
        <p>
          The measure of sustained support is what the organization can
          do — increasingly on its own. Managed Services reinforces
          internal capability: understanding documented and taught,
          operating discipline carried into roles and routines, and
          decisions grounded in the organization&apos;s own grasp of its
          systems. It works hand in hand with education and knowledge
          transfer, because capable people are what make systems durable.
        </p>
        <p>
          Dependence is the failure mode of this work, not its business
          model. Huerta Group does not measure success by how
          indispensable it becomes. It measures success by how capable
          the organization becomes — and structures support so it can
          responsibly step back as that capability grows.
        </p>
        <PullQuote>
          Support that cannot step back is not support. It is dependency.
        </PullQuote>
      </div>
    </Section>
  );
}
