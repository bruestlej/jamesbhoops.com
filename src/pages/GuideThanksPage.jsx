import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

import GuideHeader from "@/components/layout/GuideHeader";
import SocialIconRow from "@/components/social/SocialIconRow";
import { EBOOK_TITLE } from "@/constants/guide";
import { CONTACT_EMAIL, TRAINER_NAME } from "@/constants/site";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function GuideThanksPage() {
  usePageMeta({
    title: `Check your inbox · ${EBOOK_TITLE}`,
    description: `Your free guide is on the way. Confirm your email to download ${EBOOK_TITLE}.`,
  });

  const email = CONTACT_EMAIL.trim();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <GuideHeader />

      <main className="flex flex-1 items-center py-20">
        <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-7 w-7 text-primary" aria-hidden />
          </div>

          <h1 className="mt-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Check your inbox
          </h1>

          <p className="mt-4 text-lg text-muted-foreground">
            Thanks for signing up. Open the email from {TRAINER_NAME} and tap
            the button to confirm your address — your{" "}
            <span className="text-foreground">{EBOOK_TITLE}</span> download
            starts right after that.
          </p>

          <p className="mt-6 text-sm text-muted-foreground">
            Don&apos;t see it within a few minutes? Check spam or promotions.
            Still nothing? Email{" "}
            <a
              href={`mailto:${email}`}
              className="text-foreground underline-offset-4 hover:underline"
            >
              {email}
            </a>
            .
          </p>

          <div className="mt-10 flex flex-col items-center gap-6">
            <p className="text-sm text-muted-foreground">
              While you wait — follow for daily basketball tips:
            </p>
            <SocialIconRow />
            <Link
              to="/"
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Back to jamesbhoops.com
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
