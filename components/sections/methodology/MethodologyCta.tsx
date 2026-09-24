import { CONTACT_HREF } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBand } from "@/components/ui/CtaBand";
export function MethodologyCta() {
  return (
    <CtaBand
      title="Discuss an organizational need."
      lead="Methodology matters most in application. Share a brief description of your organization and where its systems are holding it back — inquiries are reviewed to determine whether the work may be a fit and what an appropriate next step may be."
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
