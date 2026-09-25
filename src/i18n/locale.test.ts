import { describe, expect, it } from "vitest";
import { localeFromLanguageTag, localeFromLanguages, parseLocale } from "./locale";

describe("parseLocale", () => {
  it("accepts only the two supported languages", () => {
    expect(parseLocale("en")).toBe("en");
    expect(parseLocale("es")).toBe("es");
  });

  it("rejects unexpected or injected values", () => {
    expect(parseLocale(null)).toBeNull();
    expect(parseLocale("")).toBeNull();
    expect(parseLocale("en ")).toBeNull();
    expect(parseLocale("javascript:alert(1)")).toBeNull();
    expect(parseLocale("<script>")).toBeNull();
    expect(parseLocale("../en")).toBeNull();
  });
});

describe("localeFromLanguages", () => {
  it("reads the language of a regional tag", () => {
    expect(localeFromLanguageTag("es-CO")).toBe("es");
    expect(localeFromLanguageTag("es_MX")).toBe("es");
    expect(localeFromLanguageTag("EN-us")).toBe("en");
    expect(localeFromLanguageTag("fr-FR")).toBeNull();
  });

  it("uses the first supported device language", () => {
    expect(localeFromLanguages(["fr-FR", "es-CO", "en"])).toBe("es");
    expect(localeFromLanguages(["en-GB"])).toBe("en");
    expect(localeFromLanguages(["pt-BR", "de"])).toBe("en");
    expect(localeFromLanguages([])).toBe("en");
  });
});
