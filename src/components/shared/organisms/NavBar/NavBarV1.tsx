import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useI18n } from "../../../../i18n/LanguageProvider";
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
  const { locale, setLocale, messages } = useI18n();

  const itemClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-orange-400" : "text-white hover:text-orange-400";

  const switchLanguage = (next: Locale) => {
    setLocale(next);
    setIsOpen(false);
  };

  return (
    <nav className="bg-zinc-800 text-white sticky top-0 z-50 shadow-md" aria-label="Main">
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

        <LanguageSwitch
          locale={locale}
          label={messages.nav.language}
          onChange={switchLanguage}
          className="hidden lg:flex"
        />

        <button
          type="button"
          className="lg:hidden text-2xl px-2 min-h-11 min-w-11"
          aria-expanded={isOpen}
          aria-label={isOpen ? messages.nav.closeMenu : messages.nav.openMenu}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4 px-4 pb-4">
          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={itemClass}
              onClick={() => setIsOpen(false)}
            >
              {messages.nav[item.key]}
            </NavLink>
          ))}
          <LanguageSwitch
            locale={locale}
            label={messages.nav.language}
            onChange={switchLanguage}
            className="flex"
          />
        </div>
      )}
    </nav>
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
    <div className={`${className} items-center gap-1 bg-zinc-700 rounded-md p-1`} role="group" aria-label={label}>
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
      className={`px-2 py-1 text-sm rounded ${active ? "bg-orange-400 text-zinc-900" : "text-white"}`}
    >
      {children}
    </button>
  );
}
