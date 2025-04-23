import React from "react";

const Terms: React.FC = () => {
  return (
    <div
      className="max-w-4xl mx-auto bg-zinc-700 text-white 
            p-4 sm:p-8 sm:mt-10 sm:mb-20 md:p-12 md:mt-10 md:mb-20 lg:p-16 lg:mt-10 lg:mb-20 xl:p-20 xl:mt-10 xl:mb-20"
    >
      <div className="py-10">
        <h1 className="text-3xl font-light text-center text-orange-300">
          TÉRMINOS Y CONDICIONES
        </h1>
        <p className="text-sm text-center text-gray-200">
          Última actualización: 21 de abril del 2025
        </p>
      </div>

      <section>
        <h2 className="text-xl pb-5 font-light text-orange-300 text-left sm:text-justify">Objeto</h2>
        <p>
          Este documento establece los términos bajo los cuales Jeysson Cárdenas
          (en adelante, “El Freelancer”) ofrece servicios profesionales de
          desarrollo de software, APIs, soporte técnico y asesorías.
        </p>
      </section>

      <div className="h-px w-full bg-gray-200 my-8 mx-auto" />

      <section>
        <h2 className="text-xl pb-5 font-light text-orange-300">Alcance</h2>
        <p>
          El alcance será definido por acuerdo entre El Freelancer y El Cliente.
          Cualquier cambio puede implicar ajustes de tiempos y costos.
        </p>
      </section>

      <div className="h-px w-full bg-gray-200 my-8 mx-auto" />

      <section>
        <h2 className="text-xl pb-5 font-light text-orange-300">
          Honorarios y Formas de Pago
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Pagos mediante transferencia bancaria u otras plataformas acordadas.
          </li>
          <li>Anticipo del 50% requerido al inicio del proyecto.</li>
          <li>Saldo restante al entregar el trabajo.</li>
        </ul>
      </section>

      <div className="h-px w-full bg-gray-200 my-8 mx-auto" />

      <section>
        <h2 className="text-xl pb-5 font-light text-orange-300">
          Propiedad Intelectual
        </h2>
        <p>
          El Cliente será propietario de los entregables tras el pago total. El
          Freelancer puede mostrar ejemplos del trabajo en su portafolio, salvo
          que se indique lo contrario.
        </p>
      </section>

      <div className="h-px w-full bg-gray-200 my-8 mx-auto" />

      <section>
        <h2 className="text-xl pb-5 font-light text-orange-300">
          Confidencialidad
        </h2>
        <p>
          Toda información del cliente será tratada de forma confidencial y no
          será divulgada sin autorización previa.
        </p>
      </section>

      <div className="h-px w-full bg-gray-200 my-8 mx-auto" />

      <section>
        <h2 className="text-xl pb-5 font-light text-orange-300">
          Plazos y Entregas
        </h2>
        <p>
          Los plazos se definirán en conjunto. Su cumplimiento depende de la
          colaboración activa del Cliente.
        </p>
      </section>

      <div className="h-px w-full bg-gray-200 my-8 mx-auto" />

      <section>
        <h2 className="text-xl pb-5 font-light text-orange-300">
          Garantías y Soporte
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Garantía de 15 a 30 días por errores atribuibles al desarrollo
            entregado.
          </li>
          <li>Cambios posteriores se consideran como nuevos servicios.</li>
        </ul>
      </section>

      <div className="h-px w-full bg-gray-200 my-8 mx-auto" />

      <section>
        <h2 className="text-xl pb-5 font-light text-orange-300">
          Responsabilidad
        </h2>
        <p>
          El Freelancer no será responsable por errores causados por terceros,
          servicios externos o mal uso de los entregables.
        </p>
      </section>
    </div>
  );
};

export default Terms;
