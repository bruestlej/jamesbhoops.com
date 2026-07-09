import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "James helped me take my game to the next level. His attention to detail and ability to break down complex moves into learnable steps made all the difference.",
    name: "Marcus T.",
    role: "High School Varsity Player",
  },
  {
    quote:
      "My son has been training with James for six months now. The improvement in his confidence and court awareness has been remarkable.",
    name: "Sarah K.",
    role: "Parent",
  },
  {
    quote:
      "I was struggling with my shooting form for years. After just a few sessions, James identified the issue and helped me rebuild my shot from the ground up.",
    name: "Devon R.",
    role: "College Player",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Athletes Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from players who have trained with me and seen real results.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-lg border border-border bg-secondary/50 p-6"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/30" aria-hidden />
              <blockquote className="leading-relaxed text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
