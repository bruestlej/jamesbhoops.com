import { SiteFooter, SiteHeader } from "@/components/layout";
import {
  AboutSection,
  BookingSection,
  ContactSection,
  HeroSection,
  TestimonialsSection,
  TrainingSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <TrainingSection />
        <TestimonialsSection />
        <BookingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
