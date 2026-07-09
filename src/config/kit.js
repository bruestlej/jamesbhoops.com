/**
 * Kit (ConvertKit) inline form embed.
 *
 * In Kit: open your form → Embed → JavaScript. Copy:
 * - data-uid from the script tag → VITE_KIT_FORM_UID
 * - script src URL → VITE_KIT_FORM_SCRIPT_URL
 *
 * Example script:
 *   <script async data-uid="abc123" src="https://you.kit.com/abc123.js"></script>
 */

function sanitizeKitValue(raw) {
  const s = typeof raw === "string" ? raw.trim() : "";
  if (!s || s === "..." || s.toLowerCase() === "your-form-uid-here") return "";
  return s;
}

export const kitFormUid = sanitizeKitValue(import.meta.env.VITE_KIT_FORM_UID);

export const kitFormScriptUrl = sanitizeKitValue(
  import.meta.env.VITE_KIT_FORM_SCRIPT_URL,
);

export const kitFormConfigured = Boolean(kitFormUid && kitFormScriptUrl);
