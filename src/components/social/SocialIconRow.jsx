import { SOCIAL_LINKS } from "@/constants/site";

function InstagramIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TiktokIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M14 5v7.2a4.2 4.2 0 1 1-3-4V10" />
      <path d="M14 5c1 .95 2.2 1.5 3.7 1.5V9c-1.5 0-2.8-.45-3.7-1.25" />
    </svg>
  );
}

function YoutubeIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <rect x="3" y="6.5" width="18" height="11" rx="3" />
      <path d="m10 9.5 5 2.5-5 2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const ICONS = {
  instagram: InstagramIcon,
  tiktok: TiktokIcon,
  youtube: YoutubeIcon,
};

export default function SocialIconRow() {
  return (
    <nav aria-label="Social media profiles">
      <ul className="flex items-center justify-center gap-0.5 sm:gap-1">
        {SOCIAL_LINKS.map(({ id, label, href }) => {
          const Icon = ICONS[id];
          if (!Icon) return null;
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="inline-flex rounded-full p-2.5 text-muted-foreground transition hover:bg-secondary hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
