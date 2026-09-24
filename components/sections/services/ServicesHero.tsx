import { ASSESSMENT_NAME, CONTACT_HREF } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";

export function ServicesHero() {
  return (
    <PageHero
      eyebrow="Services"
      title="Work that strengthens the systems behind your organization."
      lead={`Organizational performance is shaped by the systems through which work gets done — how responsibilities, processes, information, technology, and leadership fit together. Huerta Group's organizational systems practice works on that system. For an organization experiencing a material operating condition that crosses those systems, the work usually begins with the ${ASSESSMENT_NAME}.`}
      actions={
        <>
          <ButtonLink href={CONTACT_HREF}>
            Request a complimentary consultation
          </ButtonLink>
          <ButtonLink href="#assessment" variant="secondary">
            The {ASSESSMENT_NAME}
          </ButtonLink>
        </>
      }
    />
  );
}
