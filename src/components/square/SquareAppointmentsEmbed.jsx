import { useEffect, useRef, useState } from "react";

import CalendarIcon from "@/components/icons/CalendarIcon";

/**
 * Square's buyer widget script can navigate or focus the window as soon as it
 * loads. We only inject it after the visitor explicitly opens the scheduler.
 *
 * Console noise you may still see:
 * - "Unrecognized origin" / embedIframe: add your site origin in Square Dashboard
 *   (Appointments → Online booking / Website embed) — include `http://localhost:5173`
 *   for local dev and your production `https://…` URL exactly.
 * - "Permissions policy violation: payment" on pay.google.com: Chrome often requires
 *   cross-origin iframes to expose `allow="payment *"`; we patch iframes Square injects.
 * - Datadog Browser SDK tag warnings: from Square's booking bundle, not this app.
 * - Extension "message channel closed": browser extension, not this app.
 */
function patchSquareIframesForPayment(root) {
  if (!root?.querySelectorAll) return;
  root.querySelectorAll("iframe").forEach((iframe) => {
    const allow = iframe.getAttribute("allow") || "";
    if (/\bpayment\s*\*/i.test(allow) || /\bpayment\b/i.test(allow)) return;
    const next = allow.trim()
      ? `${allow.trim()}; payment *; clipboard-write`
      : "payment *; clipboard-write";
    iframe.setAttribute("allow", next);
  });
}

export default function SquareAppointmentsEmbed({ scriptSrc }) {
  const [loadWidget, setLoadWidget] = useState(false);
  const hostRef = useRef(null);

  useEffect(() => {
    if (!loadWidget || !scriptSrc || !hostRef.current) return;

    const host = hostRef.current;
    patchSquareIframesForPayment(host);

    const observer = new MutationObserver(() => patchSquareIframesForPayment(host));
    observer.observe(host, { childList: true, subtree: true });

    if (host.querySelector(`script[src="${scriptSrc}"]`)) {
      return () => observer.disconnect();
    }

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    host.appendChild(script);

    return () => {
      observer.disconnect();
      script.remove();
      host.replaceChildren();
    };
  }, [loadWidget, scriptSrc]);

  if (!loadWidget) {
    return (
      <div className="flex min-h-[280px] flex-col items-center justify-center gap-5 px-6 py-12 text-center sm:min-h-[320px]">
        <CalendarIcon className="h-10 w-10 text-muted-foreground" />
        <div className="max-w-sm">
          <p className="text-sm font-medium text-foreground">
            Ready to pick a time?
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Open the scheduler here. Your page stays put until you choose to load
            it.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setLoadWidget(true)}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          <CalendarIcon className="h-4 w-4" />
          Show availability
        </button>
      </div>
    );
  }

  return (
    <div
      ref={hostRef}
      className="min-h-[min(560px,75vh)] w-full bg-card p-2 sm:min-h-[min(640px,80vh)] sm:p-4"
    />
  );
}
