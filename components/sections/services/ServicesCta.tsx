import { CONTACT_HREF } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBand } from "@/components/ui/CtaBand";
export function ServicesCta() {
  return (
    <CtaBand
      title="Start with how your organization works today."
      lead="Share a brief description of your organization and where work feels harder than it should. Every inquiry is read and reviewed."
      actions={
        <>
          <ButtonLink href={CONTACT_HREF}>Contact Huerta Group</ButtonLink>
        </>
      }
    />
  );
}
