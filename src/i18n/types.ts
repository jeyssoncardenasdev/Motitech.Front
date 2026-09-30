export type Locale = "en" | "es";

export interface ProjectItem {
  id: string;
  sector: string;
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface JobItem {
  company: string;
  role: string;
  date: string;
  location: string;
  details: string[];
}

export interface Messages {
  meta: {
    title: string;
    description: string;
    pages: {
      home: { title: string; description: string };
      about: { title: string; description: string };
      hire: { title: string; description: string };
      works: { title: string; description: string };
      contact: { title: string; description: string };
      terms: { title: string; description: string };
      privacy: { title: string; description: string };
      notFound: { title: string; description: string };
    };
  };
  nav: {
    brand: string;
    home: string;
    about: string;
    hire: string;
    projects: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    menu: string;
    language: string;
    themeToLight: string;
    themeToDark: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    subtitle: string;
    cta: string;
    scroll: string;
  };
  technologies: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { name: string; description: string }[];
  };
  methodology: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: { title: string; description: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    previous: string;
    next: string;
    goTo: string;
    pause: string;
    resume: string;
    ratesCta: string;
    items: { title: string; description: string }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    viewDetails: string;
    stackLabel: string;
    items: ProjectItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    emailCta: string;
    emailLabel: string;
    nameLabel: string;
    messageLabel: string;
    messageHint: string;
    pageIntro: string;
    methodConsent: string;
    termsConsentLead: string;
    termsConsentLink: string;
    whatsappNote: string;
    blockedHint: string;
    cooldown: string;
    sending: string;
    success: string;
    error: string;
  };
  socials: { eyebrow: string; title: string; intro: string; linkedin: string; github: string };
  about: {
    name: string;
    title: string;
    paragraphs: string[];
    skillsTitle: string;
    skills: string[];
    updated: string;
    strengthsTitle: string;
    strengths: string[];
    experienceTitle: string;
    jobs: JobItem[];
    educationTitle: string;
    education: { name: string; detail: string }[];
    languagesTitle: string;
    languages: { name: string; level: string }[];
    certificationsTitle: string;
    certifications: { title: string; institution: string; date: string }[];
  };
  hire: {
    title: string;
    intro: string;
    offerTitle: string;
    offers: { title: string; description: string }[];
    processTitle: string;
    steps: { title: string; description: string }[];
    commercialTitle: string;
    commercial: string[];
    termsLink: string;
    cta: string;
    ratesEyebrow: string;
    ratesLead: string;
    ratesIntro: string;
    rates: { name: string; price: string }[];
    ratesNote: string;
    ratesAnalysis: string;
    packagesTitle: string;
    packagesIntro: string;
    packages: { name: string; price: string }[];
  };
  legal: {
    updated: string;
    termsTitle: string;
    privacyTitle: string;
    terms: { heading: string; paragraphs?: string[]; items?: string[] }[];
    privacy: { heading: string; paragraphs: string[] }[];
  };
  footer: { rights: string; builtWithAi: string; terms: string; privacy: string };
  whatsapp: { label: string; defaultMessage: string };
  notFound: { title: string; body: string; cta: string };
}
