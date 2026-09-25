import { useI18n } from "../../i18n/LanguageProvider";

const Works = () => {
  const { messages } = useI18n();

  return (
    <div className="bg-zinc-900 text-white">
      <header className="max-w-5xl mx-auto px-4 pt-16 pb-8">
        <p className="text-orange-400 mb-2">{messages.projects.eyebrow}</p>
        <h1 className="text-4xl font-bold mb-4">{messages.projects.title}</h1>
        <p className="text-slate-300 max-w-3xl">{messages.projects.intro}</p>
      </header>
      <div className="max-w-5xl mx-auto px-4 pb-20 space-y-8">
        {messages.projects.items.map((project) => (
          <article id={project.id} key={project.id} className="bg-zinc-800 p-6 md:p-10 scroll-mt-24">
            <p className="text-orange-400 text-sm mb-2">{project.sector}</p>
            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
            <p className="text-slate-300 mb-6">{project.summary}</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm text-slate-400 mb-2">{messages.projects.stackLabel}</p>
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li key={item} className="bg-zinc-700 px-3 py-1 text-sm">
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
