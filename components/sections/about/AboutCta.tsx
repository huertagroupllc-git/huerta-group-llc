import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { CONTACT_HREF } from "@/lib/site";

export function AboutCta() {
  return (
    <section className="border-t border-edge">
      <Container className="py-20 text-center sm:py-28">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl text-silver-100 sm:text-4xl">
          The conversation starts with how your organization works today.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-silver-400">
          If this perspective fits the way you want your organization to be
          built, the next step is a conversation.
        </p>
        <div className="mt-10">
          <ButtonLink href={CONTACT_HREF}>Start a conversation</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
