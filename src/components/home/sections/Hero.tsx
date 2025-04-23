import { motion } from "framer-motion";

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center text-center px-4">
    <div className="max-w-4xl mx-auto">
      {/* Línea 1: Saludo */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hola, bienvenido
      </motion.h1>

      {/* Línea 2: Nombre destacado */}
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-4 text-orange-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Soy Jeysson Cárdenas
      </motion.h2>

      {/* Línea 3: Descripción */}
      <motion.p
        className="text-xl md:text-2xl text-slate-300 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Desarrollador de software
      </motion.p>

       {/* Línea 4: Descripción 2 */}
       <motion.p
        className="text-xl md:text-1xl text-slate-300 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        ¿Cómo puedo ayudarte a impulsar tu proyecto?
      </motion.p>

      {/* Botón */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <a
          href="#contact"
          className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-8  inline-block transition-all"
        >
          Contáctame
        </a>
      </motion.div>
    </div>

    {/* Flecha abajo */}
    <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a href="#technologies" className="text-slate-400 hover:text-white">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </div>
  </section>
);

export default Hero;
