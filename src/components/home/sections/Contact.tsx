import { Link } from "react-router-dom";
import { useI18n } from "../../../i18n/LanguageProvider";

const Contact = () => {
  const { messages } = useI18n();

  return (
    <section id="contact" className="py-20 bg-canvas">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{messages.contact.title}</h2>
        <p className="text-xl text-muted mb-10">{messages.contact.intro}</p>
        <Link
          to="/contact"
          className="bg-brand hover:bg-brand-hover text-brand-ink font-bold py-3 px-8 inline-block"
        >
          {messages.contact.emailCta}
        </Link>
      </div>
    </section>
  );
};

export default Contact;
