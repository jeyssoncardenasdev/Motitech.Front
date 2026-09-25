import { useI18n } from "../../../i18n/LanguageProvider";

const Certifications = () => {
  const { about } = useI18n().messages;

  return (
    <section className="bg-canvas py-12">
      <h2 className="text-3xl font-bold text-center text-ink mb-10">{about.certificationsTitle}</h2>
      <ul className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-12">
        {about.certifications.map((cert) => (
          <li key={`${cert.title}-${cert.date}`} className="bg-raised p-5 text-ink">
            <h3 className="font-semibold mb-2">{cert.title}</h3>
            <p className="text-sm text-muted">{cert.institution}</p>
            <p className="text-sm text-link mt-1">{cert.date}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
