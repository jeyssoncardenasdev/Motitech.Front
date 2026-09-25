import type { Locale } from "./types";

function isLocale(value: string): value is Locale {
  return value === "en" || value === "es";
}

/** Only English and Spanish are accepted. Anything else is ignored. */
export function parseLocale(value: string | null): Locale | null {
  if (value !== null && isLocale(value)) return value;
  return null;
}
