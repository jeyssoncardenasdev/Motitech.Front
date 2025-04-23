// components/about/AboutMe.tsx
import React from "react";

const AboutMe: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 py-10 ">
      <section className="bg-transparent p-6 md:p-10 flex flex-col lg:flex-row items-center gap-10">
        {/* 📸 Imagen de perfil */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src="src\assets\images\profile\profile.jpg"
            alt="Jeysson Cárdenas"
            className="shadow-md w-full h-auto max-w-sm object-cover"
          />
        </div>

        {/* 🧾 Descripción profesional */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-3xl font-bold text-white mb-4">
           .NET Backend Developer | ReactJs Developer
          </h2>
          <p className="text-white text-justify mb-4">
            ¡Hola! Soy <strong>Jeysson Cárdenas</strong>, ingeniero en
            Mecatrónica con pasión por el desarrollo backend y la arquitectura
            de software moderna. Cuento con más de{" "}
            <strong>6 años de experiencia</strong> construyendo soluciones
            robustas, escalables y seguras usando tecnologías como{" "}
            <strong>.NET Framework, .NET Core, C#, LINQ</strong>, y principios
            como <strong>DDD, SOLID</strong> y{" "}
            <strong>Onion Architecture</strong>.
          </p>
          <p className="text-white text-justify mb-4">
            Actualmente trabajo como{" "}
            <strong>Senior Software Engineer</strong> y colaboro como freelancer
            con empresas que buscan optimizar sus sistemas, migrar a la nube o
            construir APIs desde cero. Tengo experiencia en{" "}
            <strong>servicios REST, microservicios, RabbitMQ, CI/CD</strong> y
            despliegue en la nube (<strong>Azure & AWS</strong>).
          </p>
          <p className="text-white text-justify mb-4">
            Me enfoco en escribir <strong>código limpio</strong>, probar lo
            que desarrollo y entregar soluciones que aporten verdadero valor al
            negocio. Estoy al tanto de nuevas tecnologías como{" "}
            <strong>EDA (Arquitectura Dirigida por Eventos)</strong> y tengo
            sólidos conocimientos en{" "}
            <strong>diseño de arquitecturas empresariales</strong>.
          </p>       
          </div>   
      </section>      
    </div>
  );
};

export default AboutMe;
