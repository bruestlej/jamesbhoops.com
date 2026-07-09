import { useState } from "react";
import { Menu, X } from "lucide-react";

import { btnPrimary } from "@/components/ui/buttonClasses";
import { TRAINER_NAME } from "@/constants/site";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#training", label: "Training" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tight text-foreground">
              {TRAINER_NAME}
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
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

          <div className="hidden md:block">
            <a href="#book" className={btnPrimary}>
              Book a Session
            </a>
          </div>

          <button
            type="button"
            className="p-2 text-muted-foreground hover:text-foreground md:hidden"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-border py-4 md:hidden">
            <nav className="flex flex-col gap-4" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#book"
                className={`${btnPrimary} mt-2 w-fit`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Session
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
