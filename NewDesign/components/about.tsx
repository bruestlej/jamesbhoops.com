import Image from "next/image";
import { Target, Users, Trophy } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Hard Work",
    description: "Every session emphasizes effort, discipline, and pushing past your comfort zone.",
  },
  {
    icon: Users,
    title: "Personal Attention",
    description: "Every session is one-on-one, ensuring you get the focused coaching you deserve.",
  },
  {
    icon: Trophy,
    title: "Attention to Detail",
    description: "Small details create big results. We focus on fundamentals and technique.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/james-bruestle-training-ZP3hqSmw2NvNvH9IAwHAx0NdCmcQxv.jpg"
                alt="James Bruestle training a player on the court"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden mt-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MercerCornrows-HbYHvQKdgVlQ5L0gKcOmMnJjz3WOPZ.jpg"
                alt="James Bruestle playing college basketball at Mercer"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm uppercase tracking-widest text-primary mb-2">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              James Bruestle
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              College playing experience, camp coaching, and a focus on disciplined, detail-oriented sessions.
            </p>
            
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As a former college basketball player, I bring firsthand experience in what it takes to develop at the next level — not just physically, but mentally. I have worked with athletes from local rec leagues through serious competitors, including coaching at multiple basketball camps.
              </p>
              <p>
                Sessions emphasize hard work, attention to detail, and a positive environment. My goal is simple: help you build confidence, discipline, and game-ready skills every time we train.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 grid gap-6">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
