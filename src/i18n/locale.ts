import type { Locale } from "./types";

function isLocale(value: string): value is Locale {
  return value === "en" || value === "es";
}

/** Only English and Spanish are accepted. Anything else is ignored. */
export function parseLocale(value: string | null): Locale | null {
  if (value !== null && isLocale(value)) return value;
  return null;
}

/** "es-CO" and "es_MX" both mean Spanish. Other languages are ignored. */
export function localeFromLanguageTag(tag: string): Locale | null {
  const primary = tag.trim().toLowerCase().split(/[-_]/)[0] ?? "";
  return parseLocale(primary);
}

/** First supported language in the device list. English if none match. */
export function localeFromLanguages(tags: readonly string[]): Locale {
  for (const tag of tags) {
    const locale = localeFromLanguageTag(tag);
    if (locale) return locale;
  }
  return "en";
}
