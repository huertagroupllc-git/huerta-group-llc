import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { SITE_NAME } from "@/lib/site";

const PAGE_TITLE = `Contact ${SITE_NAME}`;
const PAGE_DESCRIPTION =
  "Start a conversation with Huerta Group LLC about your organization's operations, processes, and systems. Share a brief description of your situation and your inquiry will be reviewed.";

export const metadata: Metadata = {
  title: "Contact",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: "/contact",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-ink-900 to-ink-950">
        <Container className="py-20 sm:py-28">
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-gold-500">
            <span aria-hidden="true" className="h-px w-8 bg-gold-600" />
            Contact
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-silver-100 sm:text-5xl">
            Start the conversation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver-400">
            If your organization is preparing to scale, feeling the strain of
            growth, or simply ready to work more deliberately, this is the
            place to begin. Business owners, executives, operations leaders,
            and potential partners are all welcome to write.
          </p>
        </Container>
      </section>

      <section className="border-t border-edge">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
            <div className="max-w-2xl">
              <ContactForm />
            </div>
            <aside className="space-y-8 lg:border-l lg:border-edge lg:pl-10">
              <div>
                <h2 className="font-serif text-xl text-silver-100">
                  What helps
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-silver-400">
                  A short description of your organization, where work feels
                  harder than it should, and what prompted you to reach out.
                  Detail is welcome but not required — a starting point is
                  enough.
                </p>
              </div>
              <div>
                <h2 className="font-serif text-xl text-silver-100">
                  What happens next
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-silver-400">
                  Every inquiry is read and reviewed. If there is a
                  productive way to help, you will hear back at the email
                  address you provide.
                </p>
              </div>
              <div>
                <h2 className="font-serif text-xl text-silver-100">
                  Not sure yet?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-silver-400">
                  Learn how Huerta Group thinks about organizations on the{" "}
                  <Link
                    href="/about"
                    className="text-gold-400 transition-colors duration-200 hover:text-gold-300"
                  >
                    About page
                  </Link>
                  .
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
