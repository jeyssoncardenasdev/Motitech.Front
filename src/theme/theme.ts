export type Theme = "dark" | "light";

const STORAGE_KEY = "motitech-theme";

/** Dark unless this browser explicitly saved light mode. */
export function readTheme(): Theme {
  try {
    return localStorage.getItem(STORAGE_KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

/** Applies the theme on the document and remembers the choice. */
export function applyTheme(theme: Theme): void {
  if (theme === "light") document.documentElement.dataset.theme = "light";
  else delete document.documentElement.dataset.theme;

  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Private mode can block storage. The attribute still updates this visit.
  }
}
