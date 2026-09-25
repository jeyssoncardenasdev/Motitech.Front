import { motion } from "framer-motion";
import { formatToday } from "../../../i18n/formatToday";
import { useI18n } from "../../../i18n/LanguageProvider";

const AboutMe = () => {
  const { locale, messages } = useI18n();
  const { about } = messages;

  return (
    <section className="max-w-screen-xl mx-auto min-h-[70vh] flex flex-col lg:flex-row">
      <motion.div
        className="w-full lg:w-2/5 flex items-center justify-center bg-surface p-8 sm:p-10"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">
          <p className="mx-auto mb-6 flex h-36 w-36 items-center justify-center rounded-full bg-brand text-4xl font-bold text-brand-ink">
            JC
          </p>
          <p className="text-muted">{about.title}</p>
        </div>
      </motion.div>
      <motion.div
        className="w-full lg:w-3/5 bg-raised p-6 sm:p-8 md:p-12"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{about.name}</h1>
        <div className="space-y-4 text-ink leading-relaxed">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <h2 className="text-2xl font-semibold my-8">{about.skillsTitle}</h2>
        <ul className="flex flex-wrap gap-2">
          {about.skills.map((skill) => (
            <li key={skill} className="bg-chip px-3 py-1 text-sm">
              {skill}
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted mt-10">
          {about.updated}: {formatToday(locale)}
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
