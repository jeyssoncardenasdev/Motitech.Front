import microsoftFundamentalsBadge from "../../../assets/images/logos/microsoft-certified-fundamentals-badge.png";
import { useI18n } from "../../../i18n/LanguageProvider";
import SectionHeading from "../../shared/SectionHeading";

const Credentials = () => {
  const { credentials } = useI18n().messages;

  return (
    <section id="certifications" className="bg-canvas py-24 md:py-28">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading
          eyebrow={credentials.eyebrow}
          title={credentials.title}
          intro={credentials.intro}
        />
        <ul className="grid gap-4">
          {credentials.items.map((item) => (
            <li
              key={item.id}
              className="flex flex-col gap-6 bg-surface p-6 sm:flex-row sm:items-start sm:p-8"
            >
              <img
                src={microsoftFundamentalsBadge}
                alt=""
                width={120}
                height={120}
                className="mx-auto h-24 w-24 shrink-0 object-contain sm:mx-0"
                loading="lazy"
                decoding="async"
              />
              <div className="min-w-0 flex-1 text-center sm:text-left">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">
                  {item.issuer} · {item.exam} · {item.date}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {item.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
                <a
                  href={item.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-button mt-6 inline-block"
                >
                  {credentials.verifyLabel}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Credentials;
