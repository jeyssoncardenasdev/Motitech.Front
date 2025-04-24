import React from "react";

type Certification = {
  title: string;
  institution: string;
  date: string;
  src: string;
  url: string;
};

const certifications: Certification[] = [
  {
    title: "Curso de React.js",
    institution: "Platzi",
    date: "14 de agosto, 2023",
    src: "certificate-react.png",
    url: "",
  },
  {
    title: "Curso de Arquitecturas Limpias para Desarrollo de Software",
    institution: "Platzi",
    date: "11 de agosto, 2023",
    src: "certificate-arquitecturas-limpias.png",
    url: "",
  },
  {
    title: "Curso Práctico de Frontend Developer",
    institution: "Platzi",
    date: "27 de junio, 2023",
    src: "certificate-frontend-developer-practice.png",
    url: "",
  },
  {
    title: "Curso de Buenas Prácticas y Código Limpio en C#",
    institution: "Platzi",
    date: "12 de mayo, 2023",
    src: "certificate-clean-architecture-dotnet.png",
    url: "",
  },
  {
    title: "Curso de Introducción a C# con .NET 3.1",
    institution: "Platzi",
    date: "12 de mayo, 2023",
    src: "certificate-csharp-introduccion.png",
    url: "",
  },
  {
    title: "Curso de Fundamentos de Entity Framework",
    institution: "Platzi",
    date: "12 de mayo, 2023",
    src: "certificate-entity-framework.png",
    url: "",
  },
  {
    title: "Curso de Manejo de Datos en C# con LINQ",
    institution: "Platzi",
    date: "11 de mayo, 2023",
    src: "certificate-linq.png",
    url: "",
  },
  {
    title: "Curso de Principios SOLID en C# y .NET",
    institution: "Platzi",
    date: "7 de mayo, 2023",
    src: "certificate-solid-csharp-net.png",
    url: "",
  },
  {
    title: "Curso de Fundamentos de .NET",
    institution: "Platzi",
    date: "6 de mayo, 2023",
    src: "certificate-dotnet-fundamental.png",
    url: "",
  },
  {
    title: "Curso de APIs con .NET",
    institution: "Platzi",
    date: "6 de mayo, 2023",
    src: "certificate-api.png",
    url: "",
  },
  {
    title: "Curso de Frontend Developer",
    institution: "Platzi",
    date: "27 de diciembre, 2022",
    src: "certificate-front-developer.png",
    url: "",
  },
  {
    title: " Curso de C# .NET AVANZADO",
    institution: "Udemy",
    date: "13 de noviembre, 2024",
    src: "certificate-dotnet-advance.png",
    url: "",
  },
  {
    title: "Scrum Team Member",
    institution: "International Scrum Institute",
    date: "29 de Abril, 2023",
    src: "certificate-scrum-team.png",
    url: "",
  },
];

const Certifications: React.FC = () => {
  // Duplicamos la lista para crear efecto infinito
  const infiniteCerts = [...certifications, ...certifications];

  return (
    <div className="w-full bg-zinc-900 overflow-hidden">
      <h2 className="text-4xl font-bold text-center p-10 text-white relative before:content-[''] before:absolute before:w-1/4 before:h-px before:bg-gray-300 before:top-1/2 before:left-0 after:content-[''] after:absolute after:w-1/4 after:h-px after:bg-gray-300 after:top-1/2 after:right-0">
        Certificaciones
      </h2>
      <div className="relative w-full">
        <div
          className="flex w-max animate-marquee gap-8"
          style={{
            animation: "scroll-left 60s linear infinite",
          }}
        >
          {infiniteCerts.map((cert, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-zinc-700 text-gray-200 p-4 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={`src/assets/images/certifications/${cert.src}`}
                alt={cert.title}
                className="w-full h-64 object-contain mb-5 mx-auto"
              />
              <h3 className="text-lg font-bold">{cert.title}</h3>
              <p className="text-sm text-gray-200">{cert.institution}</p>
              <p className="text-sm text-white">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            display: flex;
            width: max-content;
          }
        `}
      </style>
    </div>
  );
};

export default Certifications;
