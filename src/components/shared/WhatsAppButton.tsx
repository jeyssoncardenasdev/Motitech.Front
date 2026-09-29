import { useI18n } from "../../i18n/LanguageProvider";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

const WHATSAPP_NUMBER = "573057403814";

export default function WhatsAppButton() {
  const { messages } = useI18n();
  const text = encodeURIComponent(messages.whatsapp.defaultMessage);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={messages.whatsapp.label}
      className="fixed bottom-20 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white/80 shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 [:root[data-theme='light']_&]:bg-black/80 [:root[data-theme='light']_&]:focus:ring-black/50"
    >
      <img
        src={whatsappIcon}
        alt=""
        className="h-8 w-8 brightness-0 [:root[data-theme='light']_&]:brightness-0 [:root[data-theme='light']_&]:invert"
      />
    </a>
  );
}
