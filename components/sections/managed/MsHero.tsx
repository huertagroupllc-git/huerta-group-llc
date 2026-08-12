import { CONTACT_HREF } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";
export function MsHero() {
  return (
    <PageHero
      eyebrow="Managed Services"
      title="Systems, sustained."
      lead="Managed Services is the institutional function Huerta Group is building to keep implemented systems strong: carried into daily operation, held to their standard, reviewed honestly, and improved as conditions change. It is meant as sustained organizational capability support where need justifies it — and the organization's purpose, decisions, and accountability stay exactly where they belong."
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
