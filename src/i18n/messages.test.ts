import { describe, expect, it } from "vitest";
import { serviceBanners, techVisuals } from "../content/catalog";
import { en } from "./en";
import { es } from "./es";
import type { Messages } from "./types";

function shape(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.keys(value as object)
        .sort()
        .map((key) => [key, shape((value as Record<string, unknown>)[key])]),
    );
  }
  return typeof value;
}

describe("translations", () => {
  it("keeps English and Spanish on the same structure", () => {
    expect(shape(en satisfies Messages)).toEqual(shape(es satisfies Messages));
  });

  it("lists the same project ids in both languages", () => {
    expect(en.projects.items.map((item) => item.id)).toEqual(["airlines", "mortgage", "insurance"]);
    expect(es.projects.items.map((item) => item.id)).toEqual(en.projects.items.map((item) => item.id));
  });

  it("matches technology cards and service banners to the copy", () => {
    expect(techVisuals).toHaveLength(en.technologies.items.length);
    expect(techVisuals).toHaveLength(es.technologies.items.length);
    expect(serviceBanners).toHaveLength(en.services.items.length);
    expect(serviceBanners).toHaveLength(es.services.items.length);
  });
});
