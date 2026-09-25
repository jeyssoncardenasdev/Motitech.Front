import { Link } from "react-router-dom";
import { useI18n } from "../../../i18n/LanguageProvider";

const Projects = () => {
  const { messages } = useI18n();

  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-link text-center mb-2">{messages.projects.eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{messages.projects.title}</h2>
        <p className="text-muted text-center max-w-3xl mx-auto mb-12">{messages.projects.intro}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {messages.projects.items.map((project) => (
            <article key={project.id} className="bg-raised p-6 flex flex-col">
              <p className="text-sm text-link mb-2">{project.sector}</p>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted mb-6 flex-1">{project.summary}</p>
              <Link to={`/works#${project.id}`} className="text-link hover:text-link-hover">
                {messages.projects.viewDetails}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
