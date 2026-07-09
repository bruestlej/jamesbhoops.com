import { Check, Gift } from "lucide-react";

import { btnPrimaryLg } from "@/components/ui/buttonClasses";
import { GALLERY_IMAGES, TRAINER_NAME } from "@/constants/site";

const features = [
  "One-on-one coaching",
  "Personalized skill assessment",
  "Drills tailored to your level",
  "Post-session feedback",
  "Flexible scheduling",
  "All ages and skill levels welcome",
];

export default function TrainingSection() {
  const flexImage = GALLERY_IMAGES[0];

  return (
    <section id="training" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-2 text-sm uppercase tracking-widest text-primary">
              Training
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              1-on-1 Training
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Personalized basketball training sessions designed to elevate your
              game, no matter your current skill level.
            </p>

            <div className="mt-8 flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/10 p-4">
              <Gift
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                aria-hidden
              />
              <div>
                <p className="font-semibold text-foreground">First Session Free</p>
                <p className="text-sm text-muted-foreground">
                  Try a session with no commitment. See if we&apos;re the right fit
                  for your training goals.
                </p>
              </div>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <Check
                    className="h-4 w-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-lg border border-border bg-card p-6">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-foreground">$35</span>
                <span className="text-muted-foreground">/ 60 minute session</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Package pricing available for multiple sessions. Reach out to discuss
                options.
              </p>
            </div>

            <a href="#book" className={`${btnPrimaryLg} mt-8 inline-flex w-full sm:w-auto`}>
              Book Your Free Session
            </a>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-lg">
            <img
              src={flexImage.src}
              alt={flexImage.alt || `${TRAINER_NAME} basketball training`}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
