import { motion } from "framer-motion";
import { useI18n } from "../../../i18n/LanguageProvider";

const Experience = () => {
  const { about } = useI18n().messages;

  return (
    <div className="max-w-screen-xl mx-auto py-10 px-4 space-y-8 text-ink">
      <section className="bg-surface p-5 sm:p-8 md:p-12">
        <h2 className="text-2xl font-semibold mb-4">{about.strengthsTitle}</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {about.strengths.map((item) => (
            <li key={item} className="pl-5 relative before:content-['■'] before:absolute before:left-0">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-raised p-5 sm:p-8 md:p-12">
        <h2 className="text-2xl font-semibold mb-4">{about.experienceTitle}</h2>
        <div className="space-y-4">
          {about.jobs.map((job, index) => (
            <motion.article
              key={job.company}
              className="bg-surface p-4"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold">
                {job.company} — {job.role}
              </h3>
              <p className="text-sm text-faint">
                {job.date} | {job.location}
              </p>
              <ul className="list-disc list-inside mt-2">
                {job.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-surface p-5 sm:p-8 md:p-12">
        <h2 className="text-2xl font-semibold mb-4">{about.educationTitle}</h2>
        <ul className="space-y-2">
          {about.education.map((item) => (
            <li key={item.detail}>
              <strong>{item.name}</strong> — {item.detail}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-raised p-5 sm:p-8 md:p-12">
        <h2 className="text-2xl font-semibold mb-4">{about.languagesTitle}</h2>
        <ul className="list-disc list-inside">
          {about.languages.map((item) => (
            <li key={item.name}>
              <strong>{item.name}</strong>: {item.level}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Experience;
