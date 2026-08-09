import { CONTACT_HREF } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBand } from "@/components/ui/CtaBand";
export function Contact() {
  return (
    <CtaBand
      id="contact"
      eyebrow="Next step"
      title="Start the conversation."
      lead="Every engagement begins the same way: with a clear-eyed look at how your organization operates today, and where its systems are holding it back. If your organization is preparing to scale — or already feeling the strain of growth — we welcome the conversation."
      actions={
        <>
          <ButtonLink href={CONTACT_HREF}>Contact Huerta Group</ButtonLink>
        </>
      }
    />
  );
}
