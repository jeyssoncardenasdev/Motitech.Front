export interface DeliveryLogEntry {
  at: string;
  ok: boolean;
  status: number;
  detail: string;
}

const STORAGE_KEY = "motitech-delivery-log";
const MAX_ENTRIES = 20;

/** Reads the recent contact-delivery results kept for this browser tab. */
export function readDeliveryLog(): DeliveryLogEntry[] {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as DeliveryLogEntry[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * Stores the Formspree outcome without the visitor's name, email, or message.
 * The trail lives in sessionStorage and the console so a failed send can be checked later.
 */
export function recordDelivery(entry: Omit<DeliveryLogEntry, "at">): void {
  const next: DeliveryLogEntry = { ...entry, at: new Date().toISOString() };
  const stored = [next, ...readDeliveryLog()].slice(0, MAX_ENTRIES);
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  const write = entry.ok ? console.info : console.warn;
  write("[motitech] contact delivery", next);
}
