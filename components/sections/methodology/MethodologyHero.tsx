import { CONTACT_HREF } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";
export function MethodologyHero() {
  return (
    <PageHero
      eyebrow="Methodology"
      title="The discipline behind the work."
      lead="Huerta Group's work does not rest on individual intuition, isolated recommendations, or the technology of the moment. It rests on methodology — a disciplined, structured, repeatable way of understanding organizations and improving the systems through which they operate."
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
