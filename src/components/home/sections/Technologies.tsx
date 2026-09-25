import { techVisuals } from "../../../content/catalog";
import { useI18n } from "../../../i18n/LanguageProvider";

const Technologies = () => {
  const { messages } = useI18n();

  return (
    <section id="technologies" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          {messages.technologies.title}
        </h2>
        <p className="text-muted mb-12 max-w-3xl mx-auto text-center">
          {messages.technologies.intro}
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {messages.technologies.items.map((tech, index) => (
            <li key={tech.name} className="bg-raised p-4 sm:p-6 text-center">
              <img
                src={techVisuals[index].src}
                alt=""
                data-mark={tech.name === "Cursor" ? "cursor" : undefined}
                className="w-16 h-16 mx-auto mb-4 object-contain"
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
