import { formatToday } from "../../i18n/formatToday";
import { useI18n } from "../../i18n/LanguageProvider";

const Privacy = () => {
  const { locale, messages } = useI18n();
  const { legal } = messages;

  return (
    <div className="bg-canvas text-ink">
      <article className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-center text-3xl font-light">{legal.privacyTitle}</h1>
        <p className="text-sm text-center text-muted mt-2 mb-10">
          {legal.updated}: {formatToday(locale)}
        </p>
        <div className="space-y-8">
          {legal.privacy.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-3 text-xl">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-ink">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </div>
  );
};

export default Privacy;
