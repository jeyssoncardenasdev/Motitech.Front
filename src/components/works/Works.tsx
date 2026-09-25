import { useI18n } from "../../i18n/LanguageProvider";
import SectionHeading from "../shared/SectionHeading";

const Works = () => {
  const { messages } = useI18n();

  return (
    <div className="bg-canvas text-ink">
      <header className="max-w-5xl mx-auto px-4 pt-16">
        <SectionHeading
          as="h1"
          align="start"
          eyebrow={messages.projects.eyebrow}
          title={messages.projects.title}
          intro={messages.projects.intro}
        />
      </header>
      <div className="max-w-5xl mx-auto px-4 pb-20 space-y-8">
        {messages.projects.items.map((project) => (
          <article id={project.id} key={project.id} className="scroll-mt-24 bg-surface p-6 md:p-10">
            <p className="mb-2 text-sm uppercase tracking-[0.16em] text-faint">{project.sector}</p>
            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
            <p className="text-muted mb-6">{project.summary}</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm text-faint mb-2">{messages.projects.stackLabel}</p>
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li key={item} className="bg-raised px-3 py-1 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Works;
