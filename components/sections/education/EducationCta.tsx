import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { CONTACT_HREF } from "@/lib/site";

export function EducationCta() {
  return (
    <section className="border-t border-edge">
      <Container className="py-20 text-center sm:py-28">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl text-silver-100 sm:text-4xl">
          Discuss organizational education and workforce development.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-silver-400">
          If your organization is strengthening its people, its processes,
          or the capability its work depends on, start with a short note
          through the contact page. Every inquiry is read and reviewed.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href={CONTACT_HREF}>Contact Huerta Group</ButtonLink>
          <ButtonLink href="/about" variant="secondary">
            Learn about Huerta Group
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
