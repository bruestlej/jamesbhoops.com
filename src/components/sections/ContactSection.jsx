import { Mail } from "lucide-react";

import { btnOutlineLg } from "@/components/ui/buttonClasses";
import SocialIconRow from "@/components/social/SocialIconRow";
import { CONTACT_EMAIL } from "@/constants/site";

export default function ContactSection() {
  const email = CONTACT_EMAIL.trim();
  const mailto = `mailto:${email}`;

  function openEmail(e) {
    e.preventDefault();
    window.location.assign(mailto);
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions? Email me or follow along on social media — links
            below.
          </p>

          <div className="relative z-20 mt-10 flex flex-col items-center gap-8">
            <a
              href={mailto}
              className={`${btnOutlineLg} cursor-pointer gap-2`}
              onClick={openEmail}
              aria-label={`Email ${email}`}
            >
              <Mail className="h-5 w-5 shrink-0" aria-hidden />
              {email}
            </a>
            <SocialIconRow />
          </div>
        </div>
      </div>
    </section>
  );
}
