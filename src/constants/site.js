export const TRAINER_NAME = "James Bruestle";

/**
 * Registered legal business name (LLC, etc.) for the footer copyright line.
 * Set to your exact Secretary-of-State / Square business name; use "" if you
 * only operate under your own name (confirm with your accountant or attorney).
 */
export const LEGAL_ENTITY_NAME = "JB1 Enterprise LLC";

/** Hostname for display and defaults (no protocol). */
export const PUBLIC_SITE_DOMAIN = "jamesbhoops.com";

const rawSiteOrigin = import.meta.env.VITE_PUBLIC_SITE_ORIGIN?.trim();
/** Canonical `https://` origin, no trailing slash. Override via `VITE_PUBLIC_SITE_ORIGIN` in `.env`. */
export const PUBLIC_SITE_ORIGIN = (
  rawSiteOrigin || `https://${PUBLIC_SITE_DOMAIN}`
).replace(/\/$/, "");

/** Absolute URL for a path starting with `/` (e.g. Open Graph images). */
export function absolutePublicUrl(pathname) {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${PUBLIC_SITE_ORIGIN}${path}`;
}

/** Public contact address (mailto on the site). */
export const CONTACT_EMAIL = "train@jamesbhoops.com";

export const COACH_PHOTO = {
  src: "/images/james-bruestle-training.jpeg",
  width: 4640,
  height: 6960,
};

export const GALLERY_IMAGES = [
  {
    src: "/images/flex.jpg",
    alt: `${TRAINER_NAME} on the court`,
  },
  {
    src: "/images/MercerCornrows.jpg",
    alt: `${TRAINER_NAME} playing at Mercer County Community College`,
  },
];

export const SOCIAL_LINKS = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/jamesbhoops/",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@jamesbhoops",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@JamesBHoopsTV",
  },
];

export const HERO_BULLETS = [
  "Skill work tailored to your level — from fundamentals to game-speed reps",
  "Clear feedback every session so you know what to improve next",
  "Accountability and structure so progress shows up on the court",
];

export const FAQS = [
  {
    question: "Who is one-on-one training for?",
    answer:
      "Anyone serious about getting better — from younger players building fundamentals to athletes who want game-speed reps and accountability. I tailor the plan to where you are today while pushing you toward where you want to be.",
  },
  {
    question: "What does a session actually look like?",
    answer:
      "We start with a focused warm-up, then move into skill work that matches your goals — footwork, finishing, shooting, defense, or whatever the session calls for. You will get clear coaching, a lot of touches on the ball, and honest feedback you can use the next time you play.",
  },
  {
    question: "How do I book or change a time?",
    answer:
      "Use the booking section on this site to reserve a slot. After you book, your confirmation and reminder emails are the best place to reschedule or cancel — follow the steps there so we stay aligned on the calendar.",
  },
  {
    question: "What should I bring to my first session?",
    answer:
      "Court shoes, athletic clothes you can move in, and water. Show up a few minutes early so we can warm up and talk goals. If you are not sure what to work on yet, we will figure it out together before we start.",
  },
];

export const ABOUT_LEAD =
  "College playing experience, camp coaching, and a focus on disciplined, detail-oriented sessions.";

export const ABOUT_BODY = `As a former college basketball player, I bring firsthand experience in what it takes to develop at the next level — not just physically, but mentally. I have worked with athletes from local rec leagues through serious competitors, including coaching at multiple basketball camps. Sessions emphasize hard work, attention to detail, and a positive environment. My goal is simple: help you build confidence, discipline, and game-ready skills every time we train.`;
