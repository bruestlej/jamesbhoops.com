import { Link } from "react-router-dom";

import { TRAINER_NAME } from "@/constants/site";

export default function GuideHeader() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          {TRAINER_NAME}
        </Link>
        <Link
          to="/"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Back to site
        </Link>
      </div>
    </header>
  );
}
