import Image from "next/image";
import { CONTACT_HREF, TAGLINE } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * The home hero (ddr-0011): the passover's signature composition — an
 * editorial left column against a gunmetal gradient panel holding the brand
 * lockup on a black plaque.
 *
 * The panel stacks beneath the content below lg, where a side-by-side split
 * would leave neither half enough measure. The lockup is never rendered wider
 * than its native 415px: the passover ships crops of the brand sheet and warns
 * that they soften at large sizes, so it is composed to the size the asset can
 * actually carry.
 */
export function Hero() {
  return (
    <section className="border-b border-edge">
      <div className="mx-auto grid max-w-6xl lg:grid-cols-[1.15fr_1fr]">
        <div className="px-6 py-20 sm:px-8 sm:py-24 lg:py-28 lg:pr-14">
          <Eyebrow>{TAGLINE}</Eyebrow>
          <h1 className="mt-7 text-balance font-serif text-4xl leading-[1.06] tracking-display text-silver-100 sm:text-5xl lg:text-6xl">
            We build the systems your organization runs on.
          </h1>
          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-silver-400">
            Huerta Group is an organizational systems company. We help
            leadership teams build, optimize, and scale — connecting people,
            processes, technology, and information into systems that support
            growth instead of straining under it.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={CONTACT_HREF}>Start a conversation</ButtonLink>
            <ButtonLink href="#capabilities" variant="secondary">
              Explore capabilities
            </ButtonLink>
          </div>
        </div>

        <div className="relative flex min-h-[20rem] items-center justify-center bg-linear-[135deg,#2A2D33_0%,var(--color-gunmetal)_45%,#1B1D21_100%] lg:min-h-[32rem]">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-linear-[115deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0)_38%,rgba(0,0,0,0.28)_100%)]"
          />
          <div className="relative m-5 w-full max-w-[26rem] border border-gold-500/35 bg-ink-950 p-1.5 shadow-[0_26px_60px_rgba(0,0,0,0.55)]">
            <Image
              src="/brand/hg-lockup.png"
              alt="Huerta Group LLC — Building. Growing. Leading."
              width={415}
              height={285}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
