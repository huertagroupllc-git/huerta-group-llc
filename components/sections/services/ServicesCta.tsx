import {
  CONSULTATION_LENGTH,
  CONSULTATION_NAME,
  CONTACT_HREF,
} from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBand } from "@/components/ui/CtaBand";

export function ServicesCta() {
  return (
    <CtaBand
      title="Start with how your organization works today."
      lead={`The first step is a ${CONSULTATION_NAME} of ${CONSULTATION_LENGTH} — a conversation to understand the operating condition you are experiencing, determine whether the work is a fit, and identify an appropriate next step. There is no obligation to proceed.`}
      actions={
        <>
          <ButtonLink href={CONTACT_HREF}>Request a consultation</ButtonLink>
        </>
      }
    />
  );
}
