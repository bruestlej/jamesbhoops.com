import { Check } from "lucide-react";

import KitFormEmbed from "@/components/kit/KitFormEmbed";
import GuideHeader from "@/components/layout/GuideHeader";
import {
  EBOOK_BULLETS,
  EBOOK_DESCRIPTION,
  EBOOK_IDEAL_FOR,
  EBOOK_TAGLINE,
  EBOOK_TESTIMONIAL,
  EBOOK_TITLE,
} from "@/constants/guide";
import { COACH_PHOTO, TRAINER_NAME } from "@/constants/site";
import { usePageMeta } from "@/hooks/usePageMeta";

function GuideFormBlock({ id }) {
  return (
    <div id={id} className="mx-auto w-full max-w-md">
      <KitFormEmbed />
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Instant delivery to your inbox. Unsubscribe anytime.
      </p>
    </div>
  );
}

export default function GuidePage() {
  usePageMeta({
    title: `${EBOOK_TITLE} · Free Guide · ${TRAINER_NAME}`,
    description: EBOOK_DESCRIPTION,
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <GuideHeader />

      <main>
        <section className="border-b border-border bg-gradient-to-b from-background via-background to-card py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-3 text-sm uppercase tracking-widest text-primary">
              {EBOOK_TAGLINE}
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {EBOOK_TITLE}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              {EBOOK_DESCRIPTION}
            </p>
            <div className="mt-10">
              <GuideFormBlock id="signup" />
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
              What&apos;s inside
            </h2>
            <ul className="mx-auto mt-10 max-w-xl space-y-4">
              {EBOOK_BULLETS.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-muted-foreground">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-y border-border bg-card py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
              <img
                src={COACH_PHOTO.src}
                alt={`${TRAINER_NAME} on the court`}
                width={280}
                height={420}
                className="aspect-[2/3] w-48 rounded-lg object-cover shadow-lg sm:w-56"
                loading="lazy"
              />
              <div>
                <p className="text-sm uppercase tracking-widest text-primary">
                  From {TRAINER_NAME}
                </p>
                <p className="mt-2 text-lg text-foreground">
                  College basketball experience · Camp coach · 1-on-1 trainer
                </p>
                <blockquote className="mt-6 border-l-2 border-primary pl-4 text-left text-muted-foreground">
                  &ldquo;{EBOOK_TESTIMONIAL.quote}&rdquo;
                  <footer className="mt-3 text-sm text-foreground">
                    — {EBOOK_TESTIMONIAL.name}, {EBOOK_TESTIMONIAL.role}
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
              This guide is for you if&hellip;
            </h2>
            <ul className="mx-auto mt-10 max-w-xl space-y-4">
              {EBOOK_IDEAL_FOR.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-14">
              <GuideFormBlock />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-4xl px-4 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
          <p>
            We respect your inbox — no spam. Unsubscribe in one click.
          </p>
          <p className="mt-2">
            <a
              href="/"
              className="text-foreground underline-offset-4 hover:underline"
            >
              jamesbhoops.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
