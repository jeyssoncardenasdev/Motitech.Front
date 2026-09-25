import { useI18n } from "../../../i18n/LanguageProvider";
import SectionHeading from "../../shared/SectionHeading";

const Methodology = ({ className = "bg-canvas py-24 md:py-28" }: { className?: string }) => {
  const { methodology } = useI18n().messages;

  return (
    <section id="methodology" className={className}>
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading eyebrow={methodology.eyebrow} title={methodology.title} intro={methodology.intro} />
        <ol className="grid gap-4 md:grid-cols-3">
          {methodology.steps.map((step, index) => (
            <li key={step.title} className="bg-surface p-5">
              <p className="mb-2 text-sm text-faint">{index + 1}</p>
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
