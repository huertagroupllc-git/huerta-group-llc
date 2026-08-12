import { CONTACT_HREF } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";
export function IpHero() {
  return (
    <PageHero
      eyebrow="Intellectual Property"
      title="Knowledge, treated as an asset."
      lead="Intellectual property is the institutional function through which Huerta Group turns methodology, experience, and organizational learning into reusable knowledge — so that what the Company learns can strengthen any organization it serves, not only the engagement where the learning occurs."
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
