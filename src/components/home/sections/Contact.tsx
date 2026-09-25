import { Link } from "react-router-dom";
import { useI18n } from "../../../i18n/LanguageProvider";
import SectionHeading from "../../shared/SectionHeading";

const Contact = () => {
  const { messages } = useI18n();

  return (
    <section id="contact" className="bg-canvas py-24 md:py-28">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <SectionHeading
          eyebrow={messages.contact.eyebrow}
          title={messages.contact.title}
          intro={messages.contact.intro}
        />
        <Link
          to="/contact"
          className="brand-button"
        >
          {messages.contact.emailCta}
        </Link>
      </div>
    </section>
  );
};

export default Contact;
