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

        <Methodology className="py-2" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">{hire.offerTitle}</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {hire.offers.map((offer) => (
              <li key={offer.title} className="bg-surface p-5">
                <h3 className="mb-2 font-semibold">{offer.title}</h3>
                <p className="text-muted">{offer.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="rates" className="scroll-mt-24">
          <p className="mb-3 text-sm uppercase tracking-[0.16em] text-faint">{hire.ratesEyebrow}</p>
          <h2 className="text-2xl font-semibold mb-3">{hire.ratesLead}</h2>
          <p className="text-muted mb-6">{hire.ratesIntro}</p>
          <ul className="grid gap-2">
            {hire.rates.map((rate) => (
              <li
                key={rate.name}
                className="flex flex-col gap-1 bg-surface px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span>{rate.name}</span>
                <span className="shrink-0 font-semibold">{rate.price}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-faint">{hire.ratesNote}</p>
          <p className="mt-2 text-xs text-faint">{hire.ratesAnalysis}</p>

          <h3 className="mt-10 mb-2 text-xl font-semibold">{hire.packagesTitle}</h3>
          <p className="text-muted mb-4">{hire.packagesIntro}</p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {hire.packages.map((pack) => (
              <li key={pack.name} className="bg-surface px-5 py-4">
                <p className="text-sm uppercase tracking-[0.16em] text-faint">{pack.name}</p>
                <p className="mt-1 text-xl font-semibold">{pack.price}</p>
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
            className="brand-button"
          >
            {hire.cta}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hire;
