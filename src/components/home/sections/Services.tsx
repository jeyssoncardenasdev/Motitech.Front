import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { serviceBanners } from "../../../content/catalog";
import { useI18n } from "../../../i18n/LanguageProvider";
import SectionHeading from "../../shared/SectionHeading";

export const SERVICE_AUTOPLAY_MS = 5000;

const prefersReducedMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

const Services = () => {
  const { messages } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [manualPause, setManualPause] = useState(false);
  const [held, setHeld] = useState(false);
  const items = messages.services.items;
  const current = items[currentIndex];
  const paused = manualPause || held;

  const go = (index: number) => {
    setCurrentIndex((index + items.length) % items.length);
  };

  useEffect(() => {
    if (paused || prefersReducedMotion()) return;
    const timer = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % items.length);
    }, SERVICE_AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, items.length, currentIndex]);

  return (
    <section id="services" className="bg-canvas py-24 md:py-28" aria-roledescription="carousel">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading eyebrow={messages.services.eyebrow} title={messages.services.title} />
        <div
          className="bg-raised"
          onPointerEnter={(event) => {
            if (event.pointerType === "mouse") setHeld(true);
          }}
          onPointerLeave={(event) => {
            if (event.pointerType === "mouse") setHeld(false);
          }}
          onFocusCapture={() => setHeld(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setHeld(false);
          }}
        >
          <div className="flex items-center gap-1 sm:gap-3 bg-canvas px-1 sm:px-3">
            <button
              type="button"
              className="shrink-0 text-muted hover:text-link p-1"
              onClick={() => go(currentIndex - 1)}
              aria-label={messages.services.previous}
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                <path d="M14.5 6.5 9 12l5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="relative h-28 sm:h-36 md:h-44 flex-1 overflow-hidden">
              <AnimatePresence initial={false}>
                <motion.img
                  key={serviceBanners[currentIndex]}
                  src={serviceBanners[currentIndex]}
                  alt=""
                  className="absolute inset-0 h-full w-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: prefersReducedMotion() ? 0 : 0.45 }}
                />
              </AnimatePresence>
            </div>
            <button
              type="button"
              className="shrink-0 text-muted hover:text-link p-1"
              onClick={() => go(currentIndex + 1)}
              aria-label={messages.services.next}
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                <path d="M9.5 6.5 15 12l-5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="p-4 sm:p-6 text-center">
            <h3 className="mb-3 text-xl font-semibold sm:text-2xl">{current.title}</h3>
            <p className="text-muted">{current.description}</p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 gap-4">
          <div className="flex gap-2">
            {items.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={`h-2.5 w-2.5 rounded-full ${index === currentIndex ? "bg-brand" : "bg-dot"}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`${messages.services.goTo} ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>
          <button
            type="button"
            className="text-sm text-muted hover:text-ink"
            onClick={() => setManualPause((value) => !value)}
            aria-pressed={manualPause}
          >
            {manualPause ? messages.services.resume : messages.services.pause}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
