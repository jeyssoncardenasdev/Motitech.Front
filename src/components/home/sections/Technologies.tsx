const Technologies = () => (
  <section id="technologies" className="py-20 bg-zinc-800">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Soluciones Tecnológicas Integrales en:
      </h2>
      <p className="text-left text-slate-300 mb-8">
        Cuento con experiencia en un amplio ecosistema de herramientas y
        tecnologías, lo que me permite construir soluciones completas,
        eficientes y escalables. Estas son algunas de las principales
        tecnologías con las que trabajo:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {[
          {
            src: "react_logo.svg",
            name: "React",
            desc: "Biblioteca de JavaScript para interfaces de usuario.",
          },
          {
            src: "Node.js_logo.svg",
            name: "Node.js",
            desc: "Plataforma para aplicaciones del lado del servidor.",
          },
          {
            src: "dotnet-logo.svg",
            name: ".NET",
            desc: "Framework multiplataforma de Microsoft ideal para construir APIs robustas y escalables.",
          },
          {
            src: "typescript_logo.svg",
            name: "TypeScript",
            desc: "Superset de JavaScript que añade tipado estático.",
          },
          {
            src: "mongoDB_Logo.svg",
            name: "MongoDB",
            desc: "Base de datos NoSQL orientada a documentos.",
          },
          {
            src: "aws_logo.svg",
            name: "AWS",
            desc: "Servicios en la nube para infraestructura y aplicaciones.",
          },
          {
            src: "Tailwind_CSS_Logo.svg",
            name: "Tailwind CSS",
            desc: "Framework de CSS para diseñar sitios web rápidamente.",
          },
          {
            src: "azure-logo.svg",
            name: "Azure",
            desc: "Plataforma en la nube de Microsoft para desplegar, escalar y administrar aplicaciones modernas.",
          },
          {
            src: "sql-server-logo.svg",
            name: "SQL Server",
            desc: "Sistema de gestión de bases de datos relacional de Microsoft.",
          },
          {
            src: "kubernetes-logo.svg",
            name: "Kubernetes",
            desc: "Plataforma de orquestación de contenedores.",
          },
        ].map((tech, index) => (
          <div key={index} className="bg-zinc-700 p-6 text-center">
            <img
              src={`src/assets/images/logos/${tech.src}`}
              alt={`${tech.name} Logo`}
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{tech.name}</h3>
            <p className="text-slate-300">{tech.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Technologies;
