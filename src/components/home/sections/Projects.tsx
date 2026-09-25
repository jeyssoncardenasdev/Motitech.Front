import { Link } from "react-router-dom";
import { useI18n } from "../../../i18n/LanguageProvider";
import SectionHeading from "../../shared/SectionHeading";

const Projects = () => {
  const { messages } = useI18n();

  return (
    <section id="projects" className="bg-surface py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow={messages.projects.eyebrow}
          title={messages.projects.title}
          intro={messages.projects.intro}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {messages.projects.items.map((project) => (
            <article key={project.id} className="flex flex-col bg-raised p-6">
              <p className="mb-2 text-sm uppercase tracking-[0.16em] text-faint">{project.sector}</p>
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
