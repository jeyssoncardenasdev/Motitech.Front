const Projects = () => (
  <section id="projects" className="py-20 bg-zinc-800">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Proyectos Destacados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-zinc-700 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="h-48 bg-slate-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Proyecto {item}</h3>
              <p className="text-slate-300 mb-4">
                Descripción breve del proyecto y las tecnologías utilizadas.
              </p>
              <a
                href="#"
                className="text-orange-400 hover:text-orange-300 inline-flex items-center"
              >
                Ver proyecto
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
