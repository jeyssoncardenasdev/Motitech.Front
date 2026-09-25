import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { useI18n } from "../../../../i18n/LanguageProvider";
import { useTheme } from "../../../../theme/ThemeProvider";
import type { Locale } from "../../../../i18n/types";

const links = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "hire", path: "/hire" },
  { key: "projects", path: "/works" },
  { key: "contact", path: "/contact" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const { locale, setLocale, messages } = useI18n();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const itemClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-link" : "text-ink hover:text-link";

  const switchLanguage = (next: Locale) => {
    setLocale(next);
    setIsOpen(false);
  };

  return (
    <nav ref={navRef} className="bg-surface text-ink sticky top-0 z-50 shadow-md" aria-label="Main">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 gap-4">
        <Link to="/" className="text-2xl shrink-0">
          Motitech
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((item) => (
            <NavLink key={item.path} to={item.path} end={item.path === "/"} className={itemClass}>
              {messages.nav[item.key]}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeSwitch
            light={theme === "light"}
            toLight={messages.nav.themeToLight}
            toDark={messages.nav.themeToDark}
            onToggle={() => setTheme(theme === "light" ? "dark" : "light")}
          />
          <LanguageSwitch
            locale={locale}
            label={messages.nav.language}
            onChange={switchLanguage}
            className="flex"
          />
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <ThemeSwitch
            light={theme === "light"}
            toLight={messages.nav.themeToLight}
            toDark={messages.nav.themeToDark}
            onToggle={() => setTheme(theme === "light" ? "dark" : "light")}
          />
          <LanguageSwitch
            locale={locale}
            label={messages.nav.language}
            onChange={switchLanguage}
            className="flex"
          />
          <button
            type="button"
            className="text-2xl px-2 min-h-11 min-w-11"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? messages.nav.closeMenu : messages.nav.openMenu}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <button
            type="button"
            className="fixed right-0 bottom-0 left-0 z-40 bg-black/50"
            style={{ top: navRef.current?.offsetHeight ?? 0 }}
            aria-label={messages.nav.closeMenu}
            tabIndex={-1}
            onClick={() => setIsOpen(false)}
          />
          <div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={messages.nav.menu}
            className="drawer-panel fixed right-0 bottom-0 z-50 flex w-64 max-w-[75vw] flex-col bg-surface px-6 py-8 shadow-md"
            style={{ top: navRef.current?.offsetHeight ?? 0 }}
            onKeyDown={(event) => keepFocusInside(event, panelRef.current)}
          >
            <div className="flex flex-col gap-1">
              {links.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `min-h-11 py-3 text-lg ${isActive ? "text-link" : "text-ink hover:text-link"}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {messages.nav[item.key]}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function keepFocusInside(event: ReactKeyboardEvent, panel: HTMLElement | null) {
  if (event.key !== "Tab" || !panel) return;
  const items = [...panel.querySelectorAll<HTMLElement>("a, button")];
  const first = items[0];
  const last = items[items.length - 1];
  if (!first || !last) return;
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function ThemeSwitch({
  light,
  toLight,
  toDark,
  onToggle,
}: {
  light: boolean;
  toLight: string;
  toDark: string;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={light}
      aria-label={light ? toDark : toLight}
      onClick={onToggle}
      className="min-h-11 min-w-11 border border-line text-sm text-ink"
    >
      {light ? "☾" : "☀"}
    </button>
  );
}

function LanguageSwitch({
  locale,
  label,
  onChange,
  className,
}: {
  locale: Locale;
  label: string;
  onChange: (locale: Locale) => void;
  className: string;
}) {
  return (
    <div className={`${className} items-center gap-1 bg-raised p-1`} role="group" aria-label={label}>
      <LangButton active={locale === "en"} onClick={() => onChange("en")}>
        EN
      </LangButton>
      <LangButton active={locale === "es"} onClick={() => onChange("es")}>
        ES
      </LangButton>
    </div>
  );
}

function LangButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`px-2 py-1 text-sm ${active ? "bg-brand text-brand-ink" : "text-ink"}`}
    >
      {children}
    </button>
  );
}
