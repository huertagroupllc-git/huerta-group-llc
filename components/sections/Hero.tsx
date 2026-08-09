import { CONTACT_HREF, TAGLINE } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";

export function Hero() {
  return (
    <PageHero
      eyebrow={TAGLINE}
      title="We build the systems your organization runs on."
      lead="Huerta Group is an organizational systems company. We help leadership teams build, optimize, and scale — connecting people, processes, technology, and information into systems that support growth instead of straining under it."
      size="display"
      actions={
        <>
          <ButtonLink href={CONTACT_HREF}>Start a conversation</ButtonLink>
          <ButtonLink href="#capabilities" variant="secondary">
            Explore capabilities
          </ButtonLink>
        </>
      }
    />
  );
}
