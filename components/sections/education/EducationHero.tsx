import { CONTACT_HREF } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";
export function EducationHero() {
  return (
    <PageHero
      eyebrow="Education & Workforce Development"
      title="Learning built to develop real capability."
      lead="Education & Workforce Development is the institutional capability Huerta Group is building to transform its methodology, organizational knowledge, and practical experience into structured learning — education designed to develop demonstrable professional and organizational capability."
      actions={
        <>
          <ButtonLink href={CONTACT_HREF}>Contact Huerta Group</ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            Explore our services
          </ButtonLink>
        </>
      }
    />
  );
}
