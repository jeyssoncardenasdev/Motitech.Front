import React from "react";
import { motion } from "framer-motion";

const strengths = [
    "Actitud proactiva y aprendizaje rápido",
    "Dominio de herramientas de desarrollo (VS, VS Code)",
    "Desarrollo móvil (Xamarin.Forms)",
    "Frontend con Angular y React",
    "Experticia en el ecosistema .NET",
    "Patrones de diseño y principios SOLID",
    "Desarrollo de APIs y servicios",
    "Gestión de bases de datos con SQL Server",
    "Conocimientos en la nube (AWS, Azure)",
    "Contenedores y Kubernetes"
];


const education = [
    { level: "Universidad", name: "Universidad de Pamplona", detail: "Ingeniero en Mecatrónica (2007 - 2013)" },
    { level: "Bachillerato", name: "Colegio Padre Luis Variará", detail: "(2001 - 2006)" },
    { level: "Primaria", name: "Colegio Padre Luis Variará", detail: "(1995 - 2000)" }
];

const experiences = [
    {
        company: "SoftwareOne Colombia",
        role: "Ingeniero de Software Senior",
        date: "Ene 2024 - Actualidad",
        location: "Remoto",
        details: [
            "Desarrollo y mantenimiento en .NET Framework y Azure",
            "Implementación de arquitecturas escalables en la nube"
        ]
    },
    {
        company: "Intergrupo",
        role: "Ingeniero de Desarrollo",
        date: "Feb 2022 - Ene 2024",
        location: "Remoto",
        details: [
            "Desarrollo sobre plataformas .NET",
            "Proyectos de modernización y migración a la nube"
        ]
    },
    {
        company: "Newshore (una empresa FLYR)",
        role: "Desarrollador Backend Semi-Senior",
        date: "Jul 2020 - Feb 2022",
        location: "Remoto",
        details: [
            "Desarrollo backend con .NET Core y C#",
            "Creación de APIs y servicios web, corrección de errores"
        ]
    },
    {
        company: "AC-Electronics",
        role: "Desarrollador Xamarin Junior",
        date: "Ene 2018 - Dic 2019",
        location: "Remoto",
        details: [
            "Desarrollo multiplataforma con Xamarin.Forms",
            "Soporte al cliente y solución de problemas"
        ]
    }
];


const languages = [
    { lang: "Español", level: "Nativo" },
    { lang: "Inglés", level: "A2" }
];

const Experience: React.FC = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-10 sm:p-x5  m:p-5 min-h-screen bg-zinc-00 text-white space-y-8">
            <section className="bg-zinc-800 p-8 sm:p-8 md:p-16 lg:p-20">
                <h2 className="text-2xl font-semibold mb-4">Fortalezas Clave</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none">
                    {strengths.map((s, i) => (
                        <li key={i} className="relative pl-5 before:content-['■'] before:absolute before:left-0 before:text-white">
                            {s}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="bg-zinc-700 p-8 sm:p-8 md:p-16 lg:p-20">
                <h2 className="text-2xl font-semibold mb-4">Experiencia Profesional</h2>
                <div className="space-y-4">
                    {experiences.map((job, i) => (
                        <motion.div key={i} className="bg-zinc-800 p-4 shadow-lg" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.2 }}>
                            <h3 className="text-xl font-bold">{job.company} — {job.role}</h3>
                            <p className="text-sm text-gray-400">{job.date} | {job.location}</p>
                            <ul className="list-disc list-inside mt-2">
                                {job.details.map((d, j) => (
                                    <li key={j}>{d}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="bg-zinc-800 p-8 sm:p-8 md:p-16 lg:p-20">
                <h2 className="text-2xl font-semibold mb-4">Educación</h2>
                <ul className="space-y-2">
                    {education.map((e, i) => (
                        <li key={i} className="flex gap-2 text-white">
                            <span className="text-zinc-400">■</span>
                            <span>
                                <strong>{e.name}</strong> — {e.detail}
                            </span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="bg-zinc-700 p-8 sm:p-8 md:p-16 lg:p-20">
                <h2 className="text-2xl font-semibold mb-4">Idiomas</h2>
                <ul className="list-disc list-inside">
                    {languages.map((l, i) => (
                        <li key={i}><strong>{l.lang}</strong>: {l.level}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Experience;
