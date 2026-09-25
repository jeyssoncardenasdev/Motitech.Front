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
    <div className="bg-zinc-900 text-white min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">{contact.title}</h1>
        <p className="text-slate-300 mb-4 text-center">{contact.intro}</p>
        <p className="text-slate-300 mb-8 text-center">{contact.pageIntro}</p>

        <form className="bg-zinc-800 p-5 sm:p-8 space-y-5 text-left" onSubmit={onSubmit}>
          <label className="block">
            <span className="block mb-1">{contact.nameLabel}</span>
            <input
              name="name"
              required
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full bg-zinc-900 border border-zinc-600 px-3 py-2"
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
              className="w-full bg-zinc-900 border border-zinc-600 px-3 py-2"
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
              className="w-full bg-zinc-900 border border-zinc-600 px-3 py-2"
            />
            <p
              id="message-limit"
              className={`mt-2 flex justify-between gap-3 text-sm ${
                message.trim().length >= MESSAGE_MIN ? "text-slate-400" : "text-orange-300"
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
              className="mt-1 h-5 w-5 shrink-0 accent-orange-400"
              checked={acceptsMethod}
              onChange={(event) => setAcceptsMethod(event.target.checked)}
            />
            <span>{contact.methodConsent}</span>
          </label>

          <label className="flex gap-3 items-start">
            <input
              type="checkbox"
              className="mt-1 h-5 w-5 shrink-0 accent-orange-400"
              checked={acceptsTerms}
              onChange={(event) => setAcceptsTerms(event.target.checked)}
            />
            <span>
              {contact.termsConsentLead}{" "}
              <Link to="/terms" className="text-orange-400 hover:text-orange-300 underline">
                {contact.termsConsentLink}
              </Link>
              .
            </span>
          </label>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={!ready || status === "sending" || cooldownMs > 0}
              className="bg-orange-400 disabled:bg-zinc-600 disabled:text-zinc-300 disabled:cursor-not-allowed text-zinc-900 font-bold py-3 px-8"
            >
              {status === "sending" ? contact.sending : contact.emailCta}
            </button>
          </div>
          {cooldownMs > 0 && (
            <p className="text-sm text-orange-300">
              {contact.cooldown.replace("{minutes}", String(Math.max(1, Math.ceil(cooldownMs / 60000))))}
            </p>
          )}
          {!ready && status !== "sent" && cooldownMs === 0 && (
            <p className="text-sm text-slate-400">{contact.blockedHint}</p>
          )}
          {status === "sent" && <p className="text-xs text-slate-400">{contact.success}</p>}
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
