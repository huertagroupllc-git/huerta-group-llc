import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { CONTACT_HREF } from "@/lib/site";

export function TechCta() {
  return (
    <section className="border-t border-edge">
      <Container className="py-20 text-center sm:py-28">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl text-silver-100 sm:text-4xl">
          Start with the system, not the software.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-silver-400">
          If technology is on your organization&apos;s mind — too many
          tools, too much manual work, or a question about where AI
          actually fits — the conversation starts with how your
          organization operates today. Every inquiry is read and reviewed.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href={CONTACT_HREF}>Contact Huerta Group</ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            Explore our services
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
