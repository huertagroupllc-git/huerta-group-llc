import { CONTACT_HREF } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBand } from "@/components/ui/CtaBand";
export function AboutCta() {
  return (
    <CtaBand
      title="The conversation starts with how your organization works today."
      lead="If this perspective fits the way you want your organization to be built, the next step is a conversation."
      actions={
        <>
          <ButtonLink href={CONTACT_HREF}>Start a conversation</ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            Explore the services
          </ButtonLink>
        </>
      }
    />
  );
}
