import type { Locale } from "./types";

/**
 * Formats the current calendar day for labels such as "Last updated".
 * Callers must not hardcode a year; this value follows the visitor's clock.
 */
export function formatToday(locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "es" ? "es-CO" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
}
