import { Check, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const features = [
  "One-on-one coaching",
  "Personalized skill assessment",
  "Drills tailored to your level",
  "Post-session feedback",
  "Flexible scheduling",
  "All ages and skill levels welcome",
];

export function Training() {
  return (
    <section id="training" className="py-24 sm:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm uppercase tracking-widest text-primary mb-2">
              Training
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              1-on-1 Training
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Personalized basketball training sessions designed to elevate your game, 
              no matter your current skill level.
            </p>

            {/* Free First Session Banner */}
            <div className="mt-8 p-4 rounded-lg bg-primary/10 border border-primary/20 flex items-start gap-3">
              <Gift className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground">First Session Free</p>
                <p className="text-sm text-muted-foreground">
                  Try a session with no commitment. See if we&apos;re the right fit for your training goals.
                </p>
              </div>
            </div>

            {/* Features */}
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Pricing */}
            <div className="mt-8 p-6 rounded-lg bg-card border border-border">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-foreground">$75</span>
                <span className="text-muted-foreground">/ 60 minute session</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Package pricing available for multiple sessions. Reach out to discuss options.
              </p>
            </div>

            <Button asChild size="lg" className="mt-8 w-full sm:w-auto">
              <Link href="#book">Book Your Free Session</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flex-cYENHHCv5MYYNfnr8XKPNwOIKPFzq4.jpg"
              alt="James Bruestle basketball training"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
