import { Link } from "react-router-dom";
import { useI18n } from "../../i18n/LanguageProvider";
import Methodology from "../home/sections/Methodology";

const Hire = () => {
  const { hire } = useI18n().messages;

  return (
    <div className="bg-canvas text-ink">
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        <header>
          <h1 className="text-4xl font-bold mb-4">{hire.title}</h1>
          <p className="text-muted text-lg">{hire.intro}</p>
        </header>

        <Methodology />

        <section>
          <h2 className="text-2xl font-semibold mb-4">{hire.offerTitle}</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {hire.offers.map((offer) => (
              <li key={offer.title} className="bg-surface p-5">
                <h3 className="text-link font-semibold mb-2">{offer.title}</h3>
                <p className="text-muted">{offer.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{hire.processTitle}</h2>
          <ol className="space-y-3">
            {hire.steps.map((step) => (
              <li key={step.title} className="bg-surface p-5">
                <h3 className="font-semibold mb-1">{step.title}</h3>
                <p className="text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{hire.commercialTitle}</h2>
          <ul className="list-disc list-inside space-y-2 text-muted">
            {hire.commercial.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link to="/terms" className="inline-block mt-4 text-link hover:text-link-hover">
            {hire.termsLink}
          </Link>
        </section>

        <div className="flex justify-center">
          <Link
            to="/contact"
            className="bg-brand hover:bg-brand-hover text-brand-ink font-bold py-3 px-8 text-center"
          >
            {hire.cta}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hire;
