import { CONTACT_HREF } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBand } from "@/components/ui/CtaBand";
export function EducationCta() {
  return (
    <CtaBand
      title="Discuss organizational education and workforce development."
      lead="If your organization is strengthening its people, its processes, or the capability its work depends on, start with a short note through the contact page. Inquiries are reviewed to determine whether the work may be a fit and what an appropriate next step may be."
      actions={
        <>
          <ButtonLink href={CONTACT_HREF}>Contact Huerta Group</ButtonLink>
          <ButtonLink href="/about" variant="secondary">
            Learn about Huerta Group
          </ButtonLink>
        </>
      }
    />
  );
}
