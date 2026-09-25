import SocialLinks from "../../shared/SocialLinks";
import SectionHeading from "../../shared/SectionHeading";
import { useI18n } from "../../../i18n/LanguageProvider";

const Socials = () => {
  const { messages } = useI18n();

  return (
    <section id="socials" className="bg-surface py-24 md:py-28">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <SectionHeading eyebrow={messages.socials.eyebrow} title={messages.socials.title} intro={messages.socials.intro} />
        <SocialLinks />
      </div>
    </section>
  );
};

export default Socials;
