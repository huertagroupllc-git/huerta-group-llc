import { Container } from "@/components/ui/Container";

export function Contact() {
  return (
    <section id="contact" className="border-t border-edge">
      <Container className="py-20 text-center sm:py-28">
        <p className="flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-gold-500">
          <span aria-hidden="true" className="h-px w-8 bg-gold-600" />
          Next step
          <span aria-hidden="true" className="h-px w-8 bg-gold-600" />
        </p>
        <h2 className="mx-auto mt-5 max-w-2xl font-serif text-3xl text-silver-100 sm:text-4xl">
          Start the conversation.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-silver-400">
          Every engagement begins the same way: with a clear-eyed look at how
          your organization operates today, and where its systems are holding
          it back. If your organization is preparing to scale — or already
          feeling the strain of growth — we welcome the conversation.
        </p>
        {/* TEMPORARY: replace with the approved contact channel (email,
            form, or /contact route) once it is established. */}
        <p className="mx-auto mt-10 inline-block border border-edge px-6 py-4 text-sm text-silver-400">
          Our formal contact and intake channel is currently being
          established. Contact details will be published here shortly.
        </p>
      </Container>
    </section>
  );
}
