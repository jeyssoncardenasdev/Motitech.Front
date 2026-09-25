import SocialLinks from "../../shared/SocialLinks";
import { useI18n } from "../../../i18n/LanguageProvider";

const Socials = () => {
  const { messages } = useI18n();

  return (
    <section id="socials" className="py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{messages.socials.title}</h2>
        <p className="text-muted mb-8">{messages.socials.intro}</p>
        <SocialLinks />
      </div>
    </section>
  );
};

export default Socials;
