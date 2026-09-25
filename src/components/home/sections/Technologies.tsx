import { techVisuals } from "../../../content/catalog";
import { useI18n } from "../../../i18n/LanguageProvider";
import SectionHeading from "../../shared/SectionHeading";

const Technologies = () => {
  const { messages } = useI18n();

  return (
    <section id="technologies" className="bg-surface py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow={messages.technologies.eyebrow}
          title={messages.technologies.title}
          intro={messages.technologies.intro}
        />
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {messages.technologies.items.map((tech, index) => (
            <li key={tech.name} className="bg-raised p-4 text-center sm:p-6">
              <img
                src={techVisuals[index].src}
                alt=""
                data-mark={tech.name === "Cursor" ? "cursor" : undefined}
                className="mx-auto mb-4 h-16 w-16 object-contain"
                loading="lazy"
                decoding="async"
              />
                <h3 className="text-xl font-semibold">{tech.name}</h3>
              <p className="text-muted text-sm mt-2">{tech.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Technologies;
