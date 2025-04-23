import { useState, useEffect } from "react";

interface Service {
  src: string;
  title: string;
  description: string;
}

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const services: Service[] = [
    {
      src: "develop_web_banner.svg",
      title: "Desarrollo Web",
      description:
        "Creación de sitios web modernos, responsivos y optimizados para SEO.",
    },
    {
      src: "develop_mobile_banner.svg",
      title: "Desarrollo Móvil",
      description: "Aplicaciones nativas y multiplataforma para iOS y Android.",
    },
    {
      src: "consultancy_banner.svg",
      title: "Consultoría Técnica",
      description:
        "Asesoramiento experto para optimizar tus soluciones tecnológicas.",
    },
    {
      src: "migration_banner.svg",
      title: "Migración de Aplicaciones a Nuevas Tecnologías y la Nube",
      description:
        "Estrategias para actualizar y trasladar tus aplicaciones a plataformas más modernas y eficientes en la nube.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="services" className="py-5 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Te puedo ayudar con:
        </h2>

        <div className="relative max-w-4xl mx-auto px-4 py-1">
          <div className="overflow-hidden bg-zinc-700 shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="min-w-full ">
                  <div className="text-center">
                    <img
                      src={`src/assets/images/banners/${service.src}`}
                      alt={`${service.title} banner`}
                      className="max-w-7xl mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-semibold mb-3 text-orange-400">
                      {service.title}
                    </h3>
                    <p className="text-white pb-8">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-600 p-2 rounded-full text-white hover:bg-orange-800"
            onClick={prevSlide}
            aria-label="Anterior"
          >
            ←
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-600 p-2 rounded-full text-white hover:bg-orange-800"
            onClick={nextSlide}
            aria-label="Siguiente"
          >
            →
          </button>

          <div className="flex justify-center mt-4 gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? "bg-orange-400" : "bg-zinc-500"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
