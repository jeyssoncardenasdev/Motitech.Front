import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { en } from "./en";
import { es } from "./es";
import type { Locale, Messages } from "./types";
import { localeFromLanguages, parseLocale } from "./locale";

const STORAGE_KEY = "motitech-locale";
const dictionaries: Record<Locale, Messages> = { en, es };

interface LanguageContextValue {
  locale: Locale;
  messages: Messages;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function deviceLanguages(): readonly string[] {
  if (navigator.languages.length > 0) return navigator.languages;
  return navigator.language ? [navigator.language] : [];
}

function readStoredLocale(): Locale {
  const fromQuery = parseLocale(new URLSearchParams(window.location.search).get("lang"));
  if (fromQuery) {
    localStorage.setItem(STORAGE_KEY, fromQuery);
    return fromQuery;
  }
  const stored = parseLocale(localStorage.getItem(STORAGE_KEY));
  if (stored) return stored;
  return localeFromLanguages(deviceLanguages());
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale);

  const setLocale = (next: Locale) => {
    const safe = parseLocale(next);
    if (!safe) return;
    localStorage.setItem(STORAGE_KEY, safe);
    setLocaleState(safe);
  };

  const messages = dictionaries[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({ locale, messages, setLocale }),
    [locale, messages],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return context;
}
