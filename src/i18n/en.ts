import type { Messages } from "./types";

export const en: Messages = {
  meta: {
    title: "Motitech | Jeysson Cárdenas — Software Developer",
    description:
      "Portfolio of Jeysson Cárdenas, senior software engineer. APIs, microservices, Azure, AWS, and data integrations for airlines, mortgage origination, and insurance.",
    pages: {
      home: {
        title: "Motitech | Jeysson Cárdenas — Software Developer",
        description:
          "Portfolio of Jeysson Cárdenas, senior software engineer. APIs, microservices, Azure, AWS, and data integrations for airlines, mortgage origination, and insurance.",
      },
      about: {
        title: "About | Motitech — Jeysson Cárdenas",
        description:
          "Senior software engineer with .NET, Azure, AWS, and legacy-system support. Experience across airlines, mortgage origination, and insurance.",
      },
      hire: {
        title: "Hire | Motitech — Jeysson Cárdenas",
        description:
          "Freelance engagements for APIs, cloud migration, legacy maintenance, and spec-driven delivery with Cursor and Claude Code.",
      },
      works: {
        title: "Projects | Motitech — Jeysson Cárdenas",
        description:
          "Selected work in airline platforms, mortgage loan origination, and insurance. Client names stay private.",
      },
      contact: {
        title: "Contact | Motitech — Jeysson Cárdenas",
        description:
          "Send a project brief. Messages are delivered after you accept the working method and the terms.",
      },
      terms: {
        title: "Terms | Motitech — Jeysson Cárdenas",
        description: "Terms for freelance software services offered by Jeysson Cárdenas.",
      },
      privacy: {
        title: "Privacy | Motitech — Jeysson Cárdenas",
        description: "What this portfolio stores and how contact messages are delivered.",
      },
      notFound: {
        title: "Page not found | Motitech",
        description: "This address is not part of the Motitech portfolio.",
      },
    },
  },
  nav: {
    home: "Home",
    about: "About",
    hire: "Hire",
    projects: "Projects",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  hero: {
    greeting: "Hello, welcome",
    name: "I'm Jeysson Cárdenas",
    role: "Senior software engineer and AI engineer",
    subtitle:
      "I design APIs, microservices, and cloud integrations for airlines, mortgage origination, and insurance. Delivery is supported with AI tools such as Cursor and Claude Code, using Spec-Driven Development.",
    cta: "Contact me",
    scroll: "Scroll to technologies",
  },
  technologies: {
    title: "Technologies I use to ship complete systems",
    intro:
      "Most of my work connects business systems to databases and to Azure or AWS. I also use AI engineering tools so the client can move faster without skipping a written spec.",
    items: [
      {
        name: ".NET",
        description: "APIs and backend services in C# for long-lived business systems.",
      },
      {
        name: "SQL Server",
        description: "Relational data, queries, and integrations with operational databases.",
      },
      {
        name: "MySQL",
        description: "Relational databases and queries when the product runs on MySQL.",
      },
      {
        name: "Azure",
        description: "Cloud hosting, delivery pipelines, and application operations.",
      },
      {
        name: "AWS",
        description: "Cloud infrastructure for services that need to scale.",
      },
      {
        name: "TypeScript",
        description: "Typed JavaScript for maintainable frontend applications.",
      },
      {
        name: "React",
        description: "Interfaces for tools and products used by real teams.",
      },
      {
        name: "Kubernetes",
        description: "Container orchestration for microservice workloads.",
      },
      {
        name: "MongoDB",
        description: "Document storage when the data model is not relational.",
      },
      {
        name: "Node.js",
        description: "JavaScript services and integration utilities.",
      },
      {
        name: "Tailwind CSS",
        description: "Consistent UI styling without a heavy custom stylesheet.",
      },
      {
        name: "Cursor",
        description: "AI coding environment used to implement and review changes against a spec.",
      },
      {
        name: "Claude Code",
        description: "AI coding assistant used to explore a codebase and draft implementation.",
      },
      {
        name: "SDD",
        description: "Spec-Driven Development: the written spec is agreed before the build is treated as done.",
      },
    ],
  },
  methodology: {
    title: "How we work",
    intro:
      "Clients who want vibe coding and an AI engineer get that support here, with a method they can read before the project starts.",
    steps: [
      {
        title: "Spec-Driven Development (SDD)",
        description:
          "We write the spec first: scope, behavior, and what is out of scope. That document is what we build against, and you can review it before implementation goes further.",
      },
      {
        title: "AI-assisted build",
        description:
          "Implementation is supported with Cursor, Claude Code, and similar platforms. The speed of vibe coding stays. An engineer reviews the result before it is delivered.",
      },
      {
        title: "The same engineering bar",
        description:
          "APIs, data, tests, and cloud delivery do not change because AI is in the loop. You still get a system you can run, and a spec you can point to.",
      },
    ],
  },
  services: {
    title: "How I can help",
    previous: "Previous service",
    next: "Next service",
    goTo: "Go to service",
    pause: "Pause",
    resume: "Resume",
    items: [
      {
        title: "APIs and microservices",
        description:
          "Backend services with clear boundaries, built so channels, partners, and internal systems can integrate without sharing one codebase.",
      },
      {
        title: "Azure and AWS",
        description:
          "Move or run applications on Azure and AWS, with delivery practices that keep releases predictable.",
      },
      {
        title: "Data and system integration",
        description:
          "Connect products to SQL Server and other data stores, and keep information flowing between existing platforms.",
      },
      {
        title: "Web applications",
        description:
          "Responsive interfaces in React and TypeScript for portals, back offices, and customer-facing tools.",
      },
    ],
  },
  projects: {
    eyebrow: "Selected work",
    title: "Domains I have worked in the most",
    intro:
      "Client names stay private. These are the industries and the kind of systems where I have spent most of my time.",
    viewDetails: "View details",
    stackLabel: "Technologies",
    items: [
      {
        id: "airlines",
        sector: "Airlines",
        title: "Airline technology platforms",
        summary:
          "Backend work for airline technology: services that support operational and commercial flows, exposed through APIs and split into maintainable components.",
        highlights: [
          "REST APIs and backend services in .NET for airline platforms.",
          "Integrations between operational systems that must stay available.",
          "Services prepared for cloud deployment and independent release.",
        ],
        stack: [".NET", "C#", "REST APIs", "Microservices", "Azure", "AWS"],
      },
      {
        id: "mortgage",
        sector: "Financial services",
        title: "Mortgage loan origination",
        summary:
          "Systems that support mortgage credit origination: application flows, validations, and the connections between channels, databases, and downstream processes.",
        highlights: [
          "Services around origination, from intake through decision support.",
          "Relational data in SQL Server and integrations with external systems.",
          "APIs that keep the origination process consistent across channels.",
        ],
        stack: [".NET", "SQL Server", "REST APIs", "Azure", "Microservices"],
      },
      {
        id: "insurance",
        sector: "Insurance",
        title: "Insurance products and operations",
        summary:
          "Integrations for insurance services: product and policy-related processes connected to core systems, databases, and cloud environments.",
        highlights: [
          "Services that connect insurance products with existing platforms.",
          "Data exchange with relational databases and partner systems.",
          "Cloud-ready components on Azure and AWS.",
        ],
        stack: [".NET", "SQL Server", "Microservices", "Azure", "AWS"],
      },
    ],
  },
  contact: {
    title: "Ready to work together?",
    intro:
      "Tell me about the system you need to build, integrate, or move to the cloud.",
    emailCta: "Send an email",
    emailLabel: "Email",
    nameLabel: "Name",
    messageLabel: "Message",
    messageHint: "Minimum 10 characters. Maximum 500.",
    pageIntro:
      "Write here. After both agreements, the message is delivered to my inbox. I reply with availability, a first read of the problem, and the next step.",
    methodConsent:
      "I agree to work with AI-assisted development (vibe coding) using platforms such as Cursor and Claude Code, and with Spec-Driven Development (SDD).",
    termsConsentLead: "I have read and accept the",
    termsConsentLink: "terms and conditions",
    blockedHint: "Name, email, message, and both boxes are required before sending.",
    cooldown: "You already sent a message. You can send another in {minutes} min.",
    sending: "Sending…",
    success: "Message sent. I will reply to the email you wrote.",
    error: "The message could not be sent. Try again in a moment.",
  },
  socials: {
    title: "Professional profiles",
    intro: "More about my background and public code:",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  about: {
    name: "Jeysson Cárdenas",
    title: ".NET Developer | AI engineer",
    paragraphs: [
      "I am a mechatronics engineer focused on backend development and modern architecture. I have more than six years building reliable systems with .NET, C#, and LINQ, using practices such as DDD, SOLID, and onion architecture.",
      "I work as a senior software engineer and take freelance engagements for teams that need stronger APIs, a move to the cloud, or a system rebuilt around clear service boundaries. That includes REST APIs, microservices, messaging, CI/CD, and deployment on Azure and AWS. I also support and maintain legacy systems: the applications that are already in production and still have to keep running.",
      "The domains where I have spent the most time are airlines, mortgage loan origination, and insurance, connecting those products to databases and to cloud platforms. Current delivery also uses AI engineering: Cursor, Claude Code, and Spec-Driven Development, so the spec stays visible to the client.",
    ],
    skillsTitle: "Skills",
    skills: [
      "C# and .NET",
      "REST APIs and microservices",
      "SQL Server",
      "MySQL",
      "Azure",
      "AWS",
      "React",
      "TypeScript",
      "SOLID and design patterns",
      "CI/CD and Azure DevOps",
      "Kubernetes",
      "Git and GitHub",
      "Scrum",
      "AI-assisted development",
      "Cursor and Claude Code",
      "Spec-Driven Development",
      "Legacy system support and maintenance",
    ],
    updated: "Last updated",
    strengthsTitle: "Strengths",
    strengths: [
      "AI engineer",
      "Proactive attitude and fast learning",
      "Day-to-day fluency with Visual Studio and VS Code",
      "Mobile development with Xamarin.Forms",
      "Frontend with Angular and React",
      ".NET ecosystem",
      "Design patterns and SOLID",
      "APIs and backend services",
      "SQL Server",
      "Cloud platforms: AWS and Azure",
      "Containers and Kubernetes",
      "Support and maintenance of legacy systems",
    ],
    experienceTitle: "Professional experience",
    // Employment dates and certification dates below are historical. Leave them as recorded.
    jobs: [
      {
        company: "SoftwareOne Colombia",
        role: "Senior Software Engineer",
        date: "Jan 2024 — Present",
        location: "Remote",
        details: [
          "Development and maintenance on .NET and Azure.",
          "Implementation of scalable architectures in the cloud.",
        ],
      },
      {
        company: "Intergrupo",
        role: "Software Engineer",
        date: "Feb 2022 — Jan 2024",
        location: "Remote",
        details: [
          "Development on .NET platforms.",
          "Modernization projects and migration to the cloud.",
        ],
      },
      {
        company: "Newshore (a FLYR company)",
        role: "Semi-senior Backend Developer",
        date: "Jul 2020 — Feb 2022",
        location: "Remote",
        details: [
          "Backend development with .NET Core and C#.",
          "APIs, web services, and defect fixing.",
        ],
      },
      {
        company: "AC-Electronics",
        role: "Junior Xamarin Developer",
        date: "Jan 2018 — Dec 2019",
        location: "Remote",
        details: [
          "Cross-platform development with Xamarin.Forms.",
          "Customer support and issue resolution.",
        ],
      },
    ],
    educationTitle: "Education",
    education: [
      {
        name: "Universidad de Pamplona",
        detail: "Mechatronics Engineer (2007–2013)",
      },
      {
        name: "Colegio Padre Luis Variará",
        detail: "High school (2001–2006)",
      },
      {
        name: "Colegio Padre Luis Variará",
        detail: "Primary school (1995–2000)",
      },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "A2" },
    ],
    certificationsTitle: "Certifications",
    certifications: [
      { title: "React.js Course", institution: "Platzi", date: "August 14, 2023" },
      {
        title: "Clean Architectures for Software Development",
        institution: "Platzi",
        date: "August 11, 2023",
      },
      {
        title: "Practical Frontend Developer Course",
        institution: "Platzi",
        date: "June 27, 2023",
      },
      {
        title: "Clean Code and Best Practices in C#",
        institution: "Platzi",
        date: "May 12, 2023",
      },
      {
        title: "Introduction to C# with .NET 3.1",
        institution: "Platzi",
        date: "May 12, 2023",
      },
      {
        title: "Entity Framework Fundamentals",
        institution: "Platzi",
        date: "May 12, 2023",
      },
      {
        title: "Data Handling in C# with LINQ",
        institution: "Platzi",
        date: "May 11, 2023",
      },
      {
        title: "SOLID Principles in C# and .NET",
        institution: "Platzi",
        date: "May 7, 2023",
      },
      { title: ".NET Fundamentals", institution: "Platzi", date: "May 6, 2023" },
      { title: "APIs with .NET", institution: "Platzi", date: "May 6, 2023" },
      {
        title: "Frontend Developer Course",
        institution: "Platzi",
        date: "December 27, 2022",
      },
      {
        title: "Advanced C# .NET Course",
        institution: "Udemy",
        date: "November 13, 2024",
      },
      {
        title: "Scrum Team Member",
        institution: "International Scrum Institute",
        date: "April 29, 2023",
      },
    ],
  },
  hire: {
    title: "Work with me",
    intro:
      "I take scoped freelance work: APIs, integrations, cloud migration, and backend support, delivered with AI tools and Spec-Driven Development. We agree on the outcome before the build starts.",
    offerTitle: "Engagements",
    offers: [
      {
        title: "APIs and microservices",
        description:
          "New services or a cleaner boundary around an existing .NET system.",
      },
      {
        title: "Cloud on Azure or AWS",
        description:
          "Move an application, or set up a path to release and run it in the cloud.",
      },
      {
        title: "Integrations and data",
        description:
          "Connect a product to SQL Server, partner systems, or another internal platform.",
      },
      {
        title: "Technical advisory",
        description:
          "A focused review of architecture, delivery, or a migration plan.",
      },
      {
        title: "Legacy support and maintenance",
        description:
          "Keep an existing system running: defects, small changes, and the care a production codebase needs while a larger change is planned.",
      },
    ],
    processTitle: "How it works",
    steps: [
      {
        title: "1. Conversation",
        description: "You describe the system, the constraint, and the deadline.",
      },
      {
        title: "2. Scope",
        description: "I reply with what is included, what is not, and an estimate.",
      },
      {
        title: "3. Build",
        description: "Work starts after the initial payment. Changes to scope are agreed in writing.",
      },
      {
        title: "4. Handover",
        description: "You receive the deliverable, a short warranty window, and the remaining invoice.",
      },
    ],
    commercialTitle: "Commercial basics",
    commercial: [
      "Payment by bank transfer or another method we both accept.",
      "50% to start. The balance is due when the work is delivered.",
      "You own the deliverables after full payment.",
      "A warranty of 15 to 30 days covers defects in the delivered work.",
    ],
    termsLink: "Read the full terms",
    cta: "Start a conversation",
  },
  legal: {
    updated: "Last updated",
    termsTitle: "Terms and conditions",
    privacyTitle: "Privacy policy",
    terms: [
      {
        heading: "Purpose",
        paragraphs: [
          "These terms describe how Jeysson Cárdenas (“the Freelancer”) provides professional services in software development, APIs, technical support, legacy maintenance, and advisory work. They are a practical framework for freelance work. A written proposal for a specific job prevails where it differs.",
        ],
      },
      {
        heading: "Independent contractor",
        paragraphs: [
          "The Freelancer is an independent contractor, not an employee, partner, or agent of the Client. The engagement does not create employment benefits, payroll, or authority to bind the Client.",
        ],
      },
      {
        heading: "Scope",
        paragraphs: [
          "Scope, price, and dates are defined in the written proposal. Work outside that scope, including extra features and later changes, is a new agreement and can adjust timeline and cost. Work starts after the Client accepts the proposal and pays the advance.",
        ],
      },
      {
        heading: "Client duties",
        items: [
          "The Client provides access, credentials, decisions, and content on the dates agreed.",
          "Waiting on the Client pauses the schedule by the same amount of time.",
          "Accounts for Azure, AWS, stores, and other third parties stay in the Client’s name. The Client pays those vendors directly.",
        ],
      },
      {
        heading: "Fees and payment",
        items: [
          "Payment by bank transfer or another agreed platform.",
          "A 50% advance is required to start. That advance covers time reserved and work begun, and it is not refunded once work has started.",
          "The remaining balance is due when the work is delivered. Source and credentials are handed over after the balance is paid.",
          "If the Client cancels, the Freelancer keeps the advance and invoices any work already done beyond it.",
        ],
      },
      {
        heading: "AI-assisted delivery",
        paragraphs: [
          "The Freelancer may use AI tools such as Cursor and Claude Code, under Spec-Driven Development. The Freelancer reviews what those tools produce before delivery. The Client should not place production secrets into a chat or ticket unless the proposal says that tool is approved for that data.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "The Client owns the deliverables of the agreed scope after full payment. Pre-existing tools, libraries, and generic know-how stay with their owners. The Freelancer may show non-confidential examples in this portfolio unless the agreement says otherwise.",
        ],
      },
      {
        heading: "Confidentiality",
        paragraphs: [
          "Client information is kept confidential and is not disclosed without prior authorization, except where the law requires it or where a subcontractor or AI tool is used only to perform the agreed work.",
        ],
      },
      {
        heading: "Timeline and delivery",
        paragraphs: [
          "Dates are agreed together. Meeting them depends on timely collaboration from the Client. A fixed date in a proposal is a target, and it moves when scope or client inputs change.",
        ],
      },
      {
        heading: "Warranty and support",
        items: [
          "A warranty of 15 to 30 days, stated in the proposal, covers defects attributable to the delivered work.",
          "The warranty does not cover third-party outages, changes in external APIs, or misuse of the deliverables.",
          "Later changes are new work.",
        ],
      },
      {
        heading: "Liability",
        paragraphs: [
          "The Freelancer is not liable for failures caused by third parties, external services, cloud bills, or misuse of the deliverables. Liability for a job is limited to the fees the Client actually paid for that job. Lost profits and indirect damages are excluded.",
        ],
      },
      {
        heading: "Acceptance",
        paragraphs: [
          "By accepting a proposal, paying the advance, or starting a service, the Client accepts these terms.",
        ],
      },
    ],
    privacy: [
      {
        heading: "Who this covers",
        paragraphs: [
          "This site is operated by Jeysson Cárdenas (Motitech). It is a portfolio. It does not sell products and it does not create user accounts.",
        ],
      },
      {
        heading: "What is stored on your device",
        paragraphs: [
          "If you choose a language, that choice is saved in local storage in your browser so the site opens in the same language next time. A short delivery log of the contact form may stay in this browser tab. It records time and whether the send succeeded. It does not record your name, email, or message. After a successful send, this browser also keeps the time of that send for 15 minutes so the form cannot be submitted again right away. That record is only a timestamp. No account data is collected by the site itself.",
        ],
      },
      {
        heading: "When you write to me",
        paragraphs: [
          "The contact form sends your name, email address, and message through Formspree, which forwards them to jeysson.cardenas.rojas@outlook.com. I use that information only to answer and, if we agree, to deliver the service. I do not sell it. I delete a contact message from my inbox when you ask, unless I must keep it for a legal or accounting duty.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "Privacy questions can be sent to jeysson.cardenas.rojas@outlook.com.",
        ],
      },
    ],
  },
  footer: {
    rights: "All rights reserved.",
    builtWithAi: "This site was built with the help of AI.",
    terms: "Terms and conditions",
    privacy: "Privacy policy",
  },
  notFound: {
    title: "This page does not exist",
    body: "The address is not part of this site.",
    cta: "Back to home",
  },
};
