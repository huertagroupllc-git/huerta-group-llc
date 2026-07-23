import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { CONTACT_HREF } from "@/lib/site";

export function ServicesCta() {
  return (
    <section className="border-t border-edge">
      <Container className="py-20 text-center sm:py-28">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl text-silver-100 sm:text-4xl">
          Start with how your organization works today.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-silver-400">
          Share a brief description of your organization and where work
          feels harder than it should. Every inquiry is read and reviewed.
        </p>
        <div className="mt-10">
          <ButtonLink href={CONTACT_HREF}>Contact Huerta Group</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
