import React from "react";
import { motion } from "framer-motion";


interface AboutMeProps {
  name?: string;
  title?: string;
  description?: React.ReactNode;
  profileImage?: string;
}

const skills = [
  "C# & .NET Development", "Backend & API Integration", "SQL Server",
  "SCRUM", "Git & GitHub", "Design Patterns", "Xamarin.Forms",
  "Azure DevOps", "AWS", "Angular", "ReactJs"
];

const AboutMe: React.FC<AboutMeProps> = ({
  name = "Jeysson Cárdenas",
  title = ".NET Developer | ReactJs Developer",
  description,
  profileImage = "src/assets/images/profile/profile.png",
}) => {
  const defaultDescription = (
    <>
      <p className="text-white text-justify mb-4">
        ¡Hola! Soy <strong>Jeysson Cárdenas</strong>, ingeniero en Mecatrónica
        con pasión por el desarrollo backend y la arquitectura moderna. Cuento
        con más de <strong>6 años de experiencia</strong> construyendo
        soluciones robustas y escalables con tecnologías como{" "}
        <strong>.NET Core, C#, LINQ</strong>, y principios como{" "}
        <strong>DDD, SOLID</strong> y <strong>Onion Architecture</strong>.
      </p>
      <p className="text-white text-justify mb-4">
        Actualmente trabajo como <strong>Senior Software Engineer</strong> y
        colaboro como freelancer con empresas que buscan optimizar sus sistemas,
        migrar a la nube o construir APIs desde cero. Tengo experiencia en{" "}
        <strong>REST APIs, microservicios, RabbitMQ, CI/CD</strong> y despliegue
        en la nube (<strong>Azure & AWS</strong>).
      </p>
      <p className="text-white text-justify mb-4">
        Me enfoco en escribir <strong>código limpio</strong>, probar lo que
        desarrollo y entregar soluciones que aporten verdadero valor al negocio.
        Conozco tecnologías emergentes como{" "}
        <strong>EDA (Arquitectura Dirigida por Eventos)</strong> y tengo
        experiencia en <strong>arquitecturas empresariales</strong>.
      </p>
    </>
  );

  return (
    <div className="max-w-screen-xl mx-auto sm:p-x5  m:p-5 min-h-screen flex flex-col lg:flex-row">
      {/* Imagen con animación */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center bg-zinc-800 p-8"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={profileImage}
          alt={name}
          className="rounded-md shadow-lg w-full h-full object-cover max-h-[90vh]"
        />
      </motion.div>

      {/* Información y descripción */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col justify-center p-10 bg-zinc-700 text-white overflow-y-auto"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">{name}</h1>    
        <p className="text-xl text-gray-300 mb-6">—— {title}</p>
        <div className="text-base leading-relaxed">
          {description || defaultDescription}
        </div>

        <section>
          <h2 className="text-white text-2xl font-semibold my-10">Habilidades</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <span key={i} className="bg-zinc-600 px-3 py-1 rounded-sm text-sm">{s}</span>
            ))}
          </div>
        </section>
        <p className="text-sm text-center mt-20 text-gray-200">
          Última actualización: 23 de abril del 2025
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
