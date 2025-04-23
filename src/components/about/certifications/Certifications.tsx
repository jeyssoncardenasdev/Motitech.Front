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
];

const Certifications: React.FC = () => {
  return (
  <div className="bg-zinc-800 max-w-6xl mx-auto sm:p-10 md:p-10 lg:p-10">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">
        Mis Certificaciones
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-zinc-700 text-gray-200 p-4 shadow-lg hover:scale-105 transition-transform duration-300"
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
  );
};

export default Certifications;
