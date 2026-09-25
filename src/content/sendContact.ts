import { recordDelivery } from "./deliveryLog";

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  honeypot: string;
}

const ENDPOINT = "https://formspree.io/f/xvgagrlg";

/** True only when both consents are set and the fields look like a real message. */
export function canSendContact(input: ContactMessage, accepted: boolean): boolean {
  return (
    accepted &&
    input.honeypot.trim() === "" &&
    input.name.trim().length > 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim()) &&
    input.message.trim().length > 10
  );
}

/** Sends the form to the confirmed Formspree endpoint. A filled honeypot is dropped quietly. */
export async function sendContact(input: ContactMessage): Promise<void> {
  if (input.honeypot.trim() !== "") return;

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: input.name.trim(),
      email: input.email.trim(),
      message: input.message.trim(),
      _subject: "Motitech — new contact",
      // Formspree discards the submission when this hidden field is filled.
      _gotcha: input.honeypot,
    }),
  });

  const body = (await response.json().catch(() => ({}))) as {
    ok?: boolean;
    error?: string;
    message?: string;
  };
  const detail = body.error || body.message || "";

  if (!response.ok || body.ok === false) {
    recordDelivery({ ok: false, status: response.status, detail: detail || "Contact delivery failed" });
    throw new Error(detail || "Contact delivery failed");
  }

  recordDelivery({ ok: true, status: response.status, detail: "accepted" });
}
