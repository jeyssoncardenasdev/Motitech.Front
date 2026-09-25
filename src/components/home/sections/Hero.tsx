import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useI18n } from "../../../i18n/LanguageProvider";

const Hero = () => {
  const { messages } = useI18n();

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-center px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {messages.hero.greeting}
        </motion.h1>
        <motion.p
          className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 text-orange-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {messages.hero.name}
        </motion.p>
        <motion.p
          className="text-xl md:text-2xl text-slate-300 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {messages.hero.role}
        </motion.p>
        <motion.p
          className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {messages.hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <Link
            to="/contact"
            className="bg-orange-400 hover:bg-orange-500 text-zinc-900 font-bold py-3 px-8 inline-block"
          >
            {messages.hero.cta}
          </Link>
        </motion.div>
      </div>
      <a
        href="#technologies"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white animate-bounce"
        aria-label={messages.hero.scroll}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
