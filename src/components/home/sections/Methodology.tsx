import { useI18n } from "../../../i18n/LanguageProvider";

const Methodology = () => {
  const { methodology } = useI18n().messages;

  return (
    <section id="methodology" className="py-20 bg-canvas">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{methodology.title}</h2>
        <p className="text-muted text-center max-w-3xl mx-auto mb-10">{methodology.intro}</p>
        <ol className="grid gap-4 md:grid-cols-3">
          {methodology.steps.map((step, index) => (
            <li key={step.title} className="bg-surface p-5">
              <p className="text-link text-sm mb-2">{index + 1}</p>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted text-sm">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Methodology;
