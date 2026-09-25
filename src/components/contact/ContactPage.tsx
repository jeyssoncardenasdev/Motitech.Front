import { useEffect, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  canSendContact,
  contactCooldownRemaining,
  markContactSent,
  MESSAGE_MAX,
  MESSAGE_MIN,
  sendContact,
} from "../../content/sendContact";
import { useI18n } from "../../i18n/LanguageProvider";
import SocialLinks from "../shared/SocialLinks";

const ContactPage = () => {
  const { contact } = useI18n().messages;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [acceptsMethod, setAcceptsMethod] = useState(false);
  const [acceptsTerms, setAcceptsTerms] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [failure, setFailure] = useState("");
  const [cooldownMs, setCooldownMs] = useState(() => contactCooldownRemaining());

  useEffect(() => {
    if (cooldownMs <= 0) return;
    const timer = window.setInterval(() => setCooldownMs(contactCooldownRemaining()), 30000);
    return () => window.clearInterval(timer);
  }, [cooldownMs]);

  const ready = canSendContact(
    { name, email, message, honeypot },
    acceptsMethod && acceptsTerms,
  );

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!ready || status === "sending" || cooldownMs > 0) return;
    setStatus("sending");
    setFailure("");
    try {
      await sendContact({ name, email, message, honeypot });
      markContactSent();
      setCooldownMs(contactCooldownRemaining());
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setAcceptsMethod(false);
      setAcceptsTerms(false);
    } catch (error) {
      setStatus("error");
      setFailure(error instanceof Error ? error.message : contact.error);
    }
  };

  return (
    <div className="bg-canvas text-ink min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-20">
        <p className="mb-3 text-center text-sm uppercase tracking-[0.16em] text-faint">{contact.eyebrow}</p>
        <h1 className="mb-4 text-center text-3xl font-bold sm:text-4xl">{contact.title}</h1>
        <p className="text-muted mb-4 text-center">{contact.intro}</p>
        <p className="text-muted mb-8 text-center">{contact.pageIntro}</p>

        <form className="space-y-5 bg-surface p-5 text-left sm:p-8" onSubmit={onSubmit}>
          <label className="block">
            <span className="block mb-1">{contact.nameLabel}</span>
            <input
              name="name"
              required
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full border border-line bg-canvas px-3 py-2"
            />
          </label>
          <label className="block">
            <span className="block mb-1">{contact.emailLabel}</span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full border border-line bg-canvas px-3 py-2"
            />
          </label>
          <div>
            <label htmlFor="contact-message" className="block mb-1">
              {contact.messageLabel}
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              maxLength={MESSAGE_MAX}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              aria-describedby="message-limit"
              className="w-full border border-line bg-canvas px-3 py-2"
            />
            <p
              id="message-limit"
              className={`mt-2 flex justify-between gap-3 text-sm ${
                message.trim().length >= MESSAGE_MIN ? "text-faint" : "text-link"
              }`}
            >
              <span>{contact.messageHint}</span>
              <span>
                {message.length}/{MESSAGE_MAX}
              </span>
            </p>
          </div>
          <label className="absolute left-[-9999px]" aria-hidden="true">
            Company
            <input
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(event) => setHoneypot(event.target.value)}
            />
          </label>

          <label className="flex gap-3 items-start">
            <input
              type="checkbox"
              className="mt-1 h-5 w-5 shrink-0 accent-brand"
              checked={acceptsMethod}
              onChange={(event) => setAcceptsMethod(event.target.checked)}
            />
            <span>{contact.methodConsent}</span>
          </label>

          <label className="flex gap-3 items-start">
            <input
              type="checkbox"
              className="mt-1 h-5 w-5 shrink-0 accent-brand"
              checked={acceptsTerms}
              onChange={(event) => setAcceptsTerms(event.target.checked)}
            />
            <span>
              {contact.termsConsentLead}{" "}
              <Link to="/terms" className="text-link hover:text-link-hover underline">
                {contact.termsConsentLink}
              </Link>
              .
            </span>
          </label>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={!ready || status === "sending" || cooldownMs > 0}
              className="brand-button"
            >
              {status === "sending" ? contact.sending : contact.emailCta}
            </button>
          </div>
          {cooldownMs > 0 && (
            <p className="text-sm text-faint">
              {contact.cooldown.replace("{minutes}", String(Math.max(1, Math.ceil(cooldownMs / 60000))))}
            </p>
          )}
          {!ready && status !== "sent" && cooldownMs === 0 && (
            <p className="text-sm text-faint">{contact.blockedHint}</p>
          )}
          {status === "sent" && <p className="text-xs text-faint">{contact.success}</p>}
          {status === "error" && <p className="text-red-300">{failure || contact.error}</p>}
        </form>

        <div className="mt-10">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
