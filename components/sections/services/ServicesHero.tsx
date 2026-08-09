import { CONTACT_HREF } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";
export function ServicesHero() {
  return (
    <PageHero
      eyebrow="Services"
      title="Work that strengthens the systems behind your organization."
      lead="Organizational performance is shaped by the systems through which work gets done — how responsibilities, processes, information, technology, and leadership fit together. Huerta Group's services are different ways of strengthening that system, depending on where your organization needs it most."
      actions={
        <>
          <ButtonLink href={CONTACT_HREF}>Start a conversation</ButtonLink>
          <ButtonLink href="/about" variant="secondary">
            How we think about organizations
          </ButtonLink>
        </>
      }
    />
  );
}
