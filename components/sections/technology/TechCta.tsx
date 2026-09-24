import { CONTACT_HREF } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBand } from "@/components/ui/CtaBand";
export function TechCta() {
  return (
    <CtaBand
      title="Start with the system, not the software."
      lead="If technology is on your organization's mind — too many tools, too much manual work, or a question about where AI actually fits — the conversation starts with how your organization operates today. Inquiries are reviewed to determine whether the work may be a fit and what an appropriate next step may be."
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
