import { Target, Trophy, Users } from "lucide-react";

import {
  ABOUT_BODY,
  ABOUT_LEAD,
  COACH_PHOTO,
  GALLERY_IMAGES,
  TRAINER_NAME,
} from "@/constants/site";

const values = [
  {
    icon: Target,
    title: "Hard Work",
    description:
      "Every session emphasizes effort, discipline, and pushing past your comfort zone.",
  },
  {
    icon: Users,
    title: "Personal Attention",
    description:
      "Every session is one-on-one, ensuring you get the focused coaching you deserve.",
  },
  {
    icon: Trophy,
    title: "Attention to Detail",
    description:
      "Small details create big results. We focus on fundamentals and technique.",
  },
];

export default function AboutSection() {
  const coachAlt = `${TRAINER_NAME} training a player on the court`;
  const second = GALLERY_IMAGES[1] ?? GALLERY_IMAGES[0];

  return (
    <section id="about" className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={COACH_PHOTO.src}
                width={COACH_PHOTO.width}
                height={COACH_PHOTO.height}
                alt={coachAlt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={second.src}
                alt={second.alt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm uppercase tracking-widest text-primary">
              About
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {TRAINER_NAME}
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">{ABOUT_LEAD}</p>

            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>{ABOUT_BODY}</p>
            </div>

            <div className="mt-10 grid gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <Icon className="h-5 w-5 text-primary" aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {value.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
