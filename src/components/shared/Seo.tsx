import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useI18n } from "../../i18n/LanguageProvider";

function pageFor(pathname: string) {
  if (pathname === "/") return "home" as const;
  if (pathname === "/about") return "about" as const;
  if (pathname === "/hire") return "hire" as const;
  if (pathname === "/works") return "works" as const;
  if (pathname === "/contact") return "contact" as const;
  if (pathname === "/terms") return "terms" as const;
  if (pathname === "/privacy-policy") return "privacy" as const;
  return "notFound" as const;
}

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

/** Keeps the document title and share tags aligned with the open page and language. */
export default function Seo() {
  const { pathname } = useLocation();
  const { locale, messages } = useI18n();
  const page = messages.meta.pages[pageFor(pathname)];

  useEffect(() => {
    const pageUrl = `${window.location.origin}${pathname}`;
    document.title = page.title;
    upsertMeta("name", "description", page.description);
    upsertMeta("name", "robots", "index, follow");
    upsertMeta("property", "og:title", page.title);
    upsertMeta("property", "og:description", page.description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", locale === "es" ? "es_CO" : "en_US");
    upsertMeta("property", "og:url", pageUrl);
    upsertMeta("name", "twitter:card", "summary");
    upsertMeta("name", "twitter:title", page.title);
    upsertMeta("name", "twitter:description", page.description);
    upsertLink("canonical", pageUrl);
  }, [locale, page, pathname]);

  return null;
}
