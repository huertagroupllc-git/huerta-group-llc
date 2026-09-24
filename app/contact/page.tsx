import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import {
  ASSESSMENT_HREF,
  ASSESSMENT_NAME,
  CONSULTATION_LENGTH,
  CONSULTATION_NAME,
  SITE_NAME,
} from "@/lib/site";

const PAGE_TITLE = `Contact ${SITE_NAME}`;
const PAGE_DESCRIPTION =
  "Contact Huerta Group LLC about an operating condition your organization is experiencing. Inquiries are reviewed for fit; where the work may be a fit, the next step may be a Complimentary Initial Consultation of up to 30 minutes, with no obligation to proceed.";

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

const INLINE_LINK =
  "text-gold-400 transition-colors duration-200 ease-brand hover:text-gold-300";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start the conversation."
        lead="If your organization is experiencing an operating problem that crosses systems — unclear ownership, fragmented information, processes that no longer fit, disconnected tools, or too much resting on particular people — this is the place to begin. Business owners, executives, operations leaders, and potential partners are all welcome to write."
      />

      <section className="border-t border-edge">
        <Container className="py-20 sm:py-28">
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
                  Your organization, the operating condition or problem you
                  are experiencing, any context that bears on it, and how to
                  reach you — which is what the form asks for. Detail is
                  welcome but not required; a starting point is enough.
                </p>
              </div>
              <div>
                <h2 className="font-serif text-xl text-silver-100">
                  What happens next
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-silver-400">
                  Inquiries are reviewed to determine whether the work may
                  be a fit and what an appropriate next step may be. Where
                  it is, that step may be a{" "}
                  {CONSULTATION_NAME} of {CONSULTATION_LENGTH}: a conversation
                  to understand the operating condition you are experiencing,
                  determine whether the work is a fit, and identify an
                  appropriate next step.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-silver-400">
                  The consultation is not a free {ASSESSMENT_NAME}, not a
                  findings session, and not substantive implementation advice,
                  and it authorizes no further work. There is no obligation to
                  proceed after it, and nothing to prepare for it.
                </p>
              </div>
              <div>
                <h2 className="font-serif text-xl text-silver-100">
                  Not sure yet?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-silver-400">
                  Read how the{" "}
                  <Link href={ASSESSMENT_HREF} className={INLINE_LINK}>
                    {ASSESSMENT_NAME}
                  </Link>{" "}
                  works, or how Huerta Group thinks about organizations on the{" "}
                  <Link href="/about" className={INLINE_LINK}>
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
