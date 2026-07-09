import { Instagram, Mail } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-primary mb-2">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions? Reach out directly or follow along on social media.
          </p>

          <div className="mt-10 flex items-center justify-center gap-6">
            <Link
              href="mailto:james@example.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
