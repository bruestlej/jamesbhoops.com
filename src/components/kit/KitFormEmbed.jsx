import { useEffect, useRef } from "react";

import {
  kitFormConfigured,
  kitFormScriptUrl,
  kitFormUid,
} from "@/config/kit";

export default function KitFormEmbed({ className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!kitFormConfigured || !containerRef.current) return;

    const container = containerRef.current;
    const existing = container.querySelector(
      `script[data-uid="${kitFormUid}"]`,
    );
    if (existing) return;

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-uid", kitFormUid);
    script.src = kitFormScriptUrl;
    container.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  if (!kitFormConfigured) {
    return (
      <div
        className={`rounded-lg border border-dashed border-border bg-card p-6 text-left text-sm text-muted-foreground ${className}`}
        role="status"
      >
        <p className="font-medium text-foreground">Kit form not configured</p>
        <p className="mt-2">
          Add <code className="text-primary">VITE_KIT_FORM_UID</code> and{" "}
          <code className="text-primary">VITE_KIT_FORM_SCRIPT_URL</code> to a{" "}
          <code className="text-primary">.env</code> file, then restart the dev
          server.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`kit-form-embed min-h-[3.5rem] ${className}`}
      aria-label="Email signup form"
    />
  );
}
