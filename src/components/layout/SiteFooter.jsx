import { LEGAL_ENTITY_NAME, TRAINER_NAME } from "@/constants/site";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#training", label: "Training" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const COPYRIGHT_YEAR = 2024;

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              © {COPYRIGHT_YEAR}{" "}
              {LEGAL_ENTITY_NAME?.trim() ? LEGAL_ENTITY_NAME.trim() : TRAINER_NAME}.
              All rights reserved.
            </p>
          </div>

          <nav
            className="flex flex-wrap items-center justify-center gap-6"
            aria-label="Footer"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
