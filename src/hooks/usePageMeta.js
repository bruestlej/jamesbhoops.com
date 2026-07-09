import { useEffect } from "react";

/**
 * Updates document title and meta description for SPA routes.
 */
export function usePageMeta({ title, description }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content") ?? "";

    if (meta && description) {
      meta.setAttribute("content", description);
    }

    return () => {
      document.title = previousTitle;
      if (meta && description) {
        meta.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);
}
