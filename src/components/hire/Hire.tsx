import React from "react";

const Hire: React.FC = () => {
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
    <div className="max-w-4xl mx-auto p-6 bg-zinc-800 rounded-2xl shadow-md space-y-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center text-blue-700">
        Términos y Condiciones de Servicio
      </h1>
      <p className="text-sm text-center text-gray-500">
        Última actualización: [Agrega la fecha]
      </p>

      <section>
        <h2 className="text-xl font-semibold text-blue-600">
          1. Objeto del Servicio
        </h2>
        <p>
          Este documento establece los términos bajo los cuales Jeysson Cárdenas
          (en adelante, “El Freelancer”) ofrece servicios profesionales de
          desarrollo de software, APIs, soporte técnico y asesorías.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-blue-600">
          2. Alcance del Servicio
        </h2>
        <p>
          El alcance será definido por acuerdo entre El Freelancer y El Cliente.
          Cualquier cambio puede implicar ajustes de tiempos y costos.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-blue-600">
          3. Honorarios y Formas de Pago
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Pagos mediante transferencia bancaria u otras plataformas acordadas.
          </li>
          <li>Anticipo del 50% requerido al inicio del proyecto.</li>
          <li>Saldo restante al entregar el trabajo.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-blue-600">
          4. Propiedad Intelectual
        </h2>
        <p>
          El Cliente será propietario de los entregables tras el pago total. El
          Freelancer puede mostrar ejemplos del trabajo en su portafolio, salvo
          que se indique lo contrario.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-blue-600">
          5. Confidencialidad
        </h2>
        <p>
          Toda información del cliente será tratada de forma confidencial y no
          será divulgada sin autorización previa.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-blue-600">
          6. Plazos y Entregas
        </h2>
        <p>
          Los plazos se definirán en conjunto. Su cumplimiento depende de la
          colaboración activa del Cliente.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-blue-600">
          7. Garantías y Soporte
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Garantía de 15 a 30 días por errores atribuibles al desarrollo
            entregado.
          </li>
          <li>Cambios posteriores se consideran como nuevos servicios.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-blue-600">
          8. Responsabilidad
        </h2>
        <p>
          El Freelancer no será responsable por errores causados por terceros,
          servicios externos o mal uso de los entregables.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-700 mt-10">
          Política de Privacidad
        </h2>
        <p>
          El Freelancer protegerá los datos personales del Cliente y los
          utilizará únicamente para ejecutar el servicio. No serán compartidos
          sin consentimiento, salvo obligación legal.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-blue-600 mt-6">Aceptación</h2>
        <p>
          Al aceptar una propuesta o iniciar un servicio con El Freelancer, el
          Cliente acepta estos términos y condiciones.
        </p>
      </section>
    </div>
    </div>
  );
};

export default Hire;
