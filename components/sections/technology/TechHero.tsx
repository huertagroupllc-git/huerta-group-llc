import { CONTACT_HREF } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";
export function TechHero() {
  return (
    <PageHero
      eyebrow="Technology & Software"
      title="Technology, in its proper place."
      lead="Technology & Software is the institutional capability through which Huerta Group applies technology in service of organizational systems. The Company does not begin with software, artificial intelligence, or a preferred platform. It begins with purpose, methodology, and a clear understanding of how an organization actually operates — and brings in technology where it makes those systems stronger."
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
