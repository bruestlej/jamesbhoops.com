/**
 * Square Appointments “embed” is usually only a <script src="…square.site/…/widget/….js"> snippet.
 * There is no separate iframe-HTML URL from Square for that flow — the script injects the UI
 * (and its own inner iframe) after it runs.
 *
 * If the browser console shows `Unrecognized origin` / `embedIframe` from Square’s widget:
 * in Square Dashboard, open Appointments → online booking / website embed settings and add
 * every origin where the widget runs (exact URL, including scheme and port), for example
 * `http://localhost:5173` for Vite dev and `https://your-production-domain.com` for prod.
 * Square validates your page origin against that allowlist before loading `app.squareup.com`.
 *
 * Configure this project like so:
 *
 * - VITE_SQUARE_EMBED_URL — paste the script `src` from Square’s embed snippet (the .js URL).
 *   We load it with a script tag + click-to-show (same behavior as dropping their snippet on a page).
 *
 * - VITE_SQUARE_BOOKING_URL — optional “Book” link / fallback (opens full flow in a new tab).
 *
 * - VITE_SQUARE_USE_SCRIPT_WIDGET=false — avoids the repo’s duplicate default widget .js so
 *   VITE_SQUARE_EMBED_URL is the single source for the widget script.
 *
 * Rare: if Square ever gives a real HTML page URL for <iframe src>, put it in VITE_SQUARE_EMBED_URL
 * (non-.js); we will use an iframe. Appointments today: expect the .js URL only.
 */

const DEFAULT_SQUARE_APPOINTMENTS_SCRIPT =
  "https://square.site/appointments/buyer/widget/7ywtx42mruo7p3/LYSYDTA0QR8KG.js";

const scriptWidgetDisabled =
  import.meta.env.VITE_SQUARE_USE_SCRIPT_WIDGET === "false" ||
  import.meta.env.VITE_SQUARE_USE_SCRIPT_WIDGET === "0";

export const bookingUrl =
  import.meta.env.VITE_SQUARE_BOOKING_URL?.trim() || "";

function sanitizeEmbedUrl(raw) {
  const s = typeof raw === "string" ? raw.trim() : "";
  if (!s) return "";
  const lower = s.toLowerCase();
  if (lower === "https://..." || lower === "http://...") return "";
  try {
    const u = new URL(s);
    if (!u.hostname || u.hostname === "...") return "";
    return s;
  } catch {
    return "";
  }
}

export const embedUrl = sanitizeEmbedUrl(import.meta.env.VITE_SQUARE_EMBED_URL);

/** Square’s snippet `src` — always a `.js` buyer widget; loaded via script tag, not iframe src. */
export const embedWidgetScriptUrl =
  embedUrl && /\.js([?#]|$)/i.test(embedUrl) ? embedUrl : "";

/** Only if Square provides a non-script document URL for <iframe src> (unusual for Appointments). */
export const embedIframeSrc =
  embedUrl && !embedWidgetScriptUrl ? embedUrl : "";

const explicitScriptSrc =
  import.meta.env.VITE_SQUARE_APPOINTMENTS_SCRIPT_URL?.trim() || "";

export const squareAppointmentsScriptSrc = scriptWidgetDisabled
  ? explicitScriptSrc
  : explicitScriptSrc || DEFAULT_SQUARE_APPOINTMENTS_SCRIPT;
