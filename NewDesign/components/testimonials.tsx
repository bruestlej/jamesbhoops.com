import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "James helped me take my game to the next level. His attention to detail and ability to break down complex moves into learnable steps made all the difference.",
    name: "Marcus T.",
    role: "High School Varsity Player",
  },
  {
    quote: "My son has been training with James for six months now. The improvement in his confidence and court awareness has been remarkable.",
    name: "Sarah K.",
    role: "Parent",
  },
  {
    quote: "I was struggling with my shooting form for years. After just a few sessions, James identified the issue and helped me rebuild my shot from the ground up.",
    name: "Devon R.",
    role: "College Player",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-primary mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            What Athletes Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from players who have trained with me and seen real results.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-secondary/50 border border-border rounded-lg p-6"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <blockquote className="text-foreground leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 pt-4 border-t border-border">
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
