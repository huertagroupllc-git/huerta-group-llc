import { CONTACT_HREF } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBand } from "@/components/ui/CtaBand";
export function MsCta() {
  return (
    <CtaBand
      title="Discuss sustained organizational support."
      lead="If your organization is carrying systems it needs to keep strong — through growth, transition, complexity, or the demands of implementation — describe where things stand today. Every inquiry is read and reviewed."
      actions={
        <>
          <ButtonLink href={CONTACT_HREF}>Contact Huerta Group</ButtonLink>
          <ButtonLink href="/methodology" variant="secondary">
            Explore the methodology
          </ButtonLink>
        </>
      }
    />
  );
}
