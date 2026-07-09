import { ArrowRight } from "lucide-react";

import { btnOutlineLg, btnPrimaryLg } from "@/components/ui/buttonClasses";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm uppercase tracking-widest text-primary">
          Basketball Training
        </p>

        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Elevate your game with focused, one-on-one training
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
          Train with a coach dedicated to building your skill, confidence, and
          game-ready habits. Every session is tailored to your goals.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#book" className={`${btnPrimaryLg} gap-2`}>
            Book Your Free Session
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
          </a>
          <a href="#about" className={btnOutlineLg}>
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
