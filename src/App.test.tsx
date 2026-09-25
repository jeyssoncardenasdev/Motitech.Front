import { act, cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import { SERVICE_AUTOPLAY_MS } from "./components/home/sections/Services";

function renderAt(path: string) {
  cleanup();
  window.history.pushState({}, "", path);
  return render(<App />);
}

describe("Motitech", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("opens the home page in English", () => {
    renderAt("/");
    expect(screen.getByRole("heading", { name: "Hello, welcome" })).toBeInTheDocument();
    expect(document.title).toBe("Motitech | Jeysson Cárdenas — Software Developer");
    expect(screen.getByRole("link", { name: "Projects" })).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("en");
  });

  it("switches the whole interface to Spanish", async () => {
    const user = userEvent.setup();
    renderAt("/");
    await user.click(screen.getAllByRole("button", { name: "ES" })[0]);
    expect(screen.getByRole("heading", { name: "Hola, bienvenido" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Proyectos" })).toBeInTheDocument();
    expect(localStorage.getItem("motitech-locale")).toBe("es");
    expect(document.documentElement.lang).toBe("es");
  });

  it("shows airline, mortgage, and insurance work", async () => {
    const user = userEvent.setup();
    renderAt("/");
    await user.click(screen.getByRole("link", { name: "Projects" }));
    expect(screen.getByRole("heading", { name: "Airline technology platforms" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Mortgage loan origination" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Insurance products and operations" })).toBeInTheDocument();
  });

  it("moves the services carousel", async () => {
    const user = userEvent.setup();
    renderAt("/");
    expect(screen.getByRole("heading", { name: "APIs and microservices" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Next service" }));
    expect(screen.getByRole("heading", { name: "Azure and AWS" })).toBeInTheDocument();
  });

  it("advances the services carousel on its own", async () => {
    vi.useFakeTimers();
    try {
      renderAt("/");
      expect(screen.getByRole("heading", { name: "APIs and microservices" })).toBeInTheDocument();
      await act(async () => {
        await vi.advanceTimersByTimeAsync(SERVICE_AUTOPLAY_MS);
      });
      expect(screen.getByRole("heading", { name: "Azure and AWS" })).toBeInTheDocument();
    } finally {
      vi.useRealTimers();
    }
  });

  it("renders hire, contact, terms, and privacy", () => {
    renderAt("/hire");
    expect(screen.getByRole("heading", { name: "Work with me" })).toBeInTheDocument();

    renderAt("/contact");
    expect(screen.getByRole("button", { name: "Send an email" })).toBeDisabled();
    expect(screen.queryByRole("link", { name: "Send an email" })).not.toBeInTheDocument();

    renderAt("/terms");
    expect(screen.getByRole("heading", { name: "Terms and conditions" })).toBeInTheDocument();

    renderAt("/privacy-policy");
    expect(screen.getByRole("heading", { name: "Privacy policy" })).toBeInTheDocument();
  });

  it("sends the contact form only after both agreements", async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true }),
    });
    vi.stubGlobal("fetch", fetchMock);
    renderAt("/contact");

    expect(screen.getByRole("button", { name: "Send an email" })).toBeDisabled();
    await user.type(screen.getByRole("textbox", { name: "Name" }), "Ana Ruiz");
    await user.type(screen.getByRole("textbox", { name: "Email" }), "ana@example.com");
    await user.type(screen.getByRole("textbox", { name: "Message" }), "I need an API for a loan flow.");
    expect(screen.getByRole("button", { name: "Send an email" })).toBeDisabled();

    await user.click(screen.getByRole("checkbox", { name: /Cursor and Claude Code/ }));
    await user.click(screen.getByRole("checkbox", { name: /terms and conditions/i }));
    await user.click(screen.getByRole("button", { name: "Send an email" }));

    expect(fetchMock).toHaveBeenCalledOnce();
    expect(String(fetchMock.mock.calls[0][0])).toContain("formspree.io/f/xvgagrlg");
    expect(await screen.findByText(/Message sent/)).toBeInTheDocument();
    expect(screen.getByText(/You can send another in 15 min/)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Send an email" })).toBeDisabled();
    vi.unstubAllGlobals();
  });

  it("explains an unknown address", () => {
    renderAt("/missing");
    expect(screen.getByRole("heading", { name: "This page does not exist" })).toBeInTheDocument();
  });

  it("honors a language set in the address", () => {
    renderAt("/?lang=es");
    expect(screen.getByRole("heading", { name: "Hola, bienvenido" })).toBeInTheDocument();
  });
});
