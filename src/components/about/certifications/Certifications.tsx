import { useI18n } from "../../../i18n/LanguageProvider";

const Certifications = () => {
  const { about } = useI18n().messages;

  return (
    <section className="bg-zinc-900 py-12">
      <h2 className="text-3xl font-bold text-center text-white mb-10">{about.certificationsTitle}</h2>
      <ul className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-12">
        {about.certifications.map((cert) => (
          <li key={`${cert.title}-${cert.date}`} className="bg-zinc-700 p-5 text-slate-100">
            <h3 className="font-semibold mb-2">{cert.title}</h3>
            <p className="text-sm text-slate-300">{cert.institution}</p>
            <p className="text-sm text-orange-300 mt-1">{cert.date}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
