import { describe, expect, it } from "vitest";
import { parseLocale } from "./locale";

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
