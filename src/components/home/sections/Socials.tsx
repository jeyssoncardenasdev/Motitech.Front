const Socials = () => (
  <section id="socials" className="py-20 bg-zinc-800">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Redes Sociales Laborales
      </h2>
      <p className="text-slate-300 mb-6">
        Puedes conocer más sobre mi trabajo y experiencia profesional en las
        siguientes plataformas:
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="https://linkedin.com/in/jsdeveloper1990
"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-orange-400 transition"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4zM8.5 8h3.5v2.3h.1c.49-.92 1.69-1.9 3.48-1.9 3.72 0 4.4 2.4 4.4 5.5V24h-4v-7.8c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 4v7.9h-4V8z" />
          </svg>
          LinkedIn
        </a>
        <a
          href="https://github.com/jeyssoncardenas"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-orange-400 transition"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 .5C5.65.5.5 5.64.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.8-.25.8-.56v-2c-3.2.7-3.88-1.38-3.88-1.38-.53-1.34-1.3-1.7-1.3-1.7-1.06-.74.08-.73.08-.73 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.73 1.26 3.4.96.1-.75.4-1.27.72-1.56-2.55-.3-5.23-1.27-5.23-5.64 0-1.25.44-2.27 1.16-3.07-.12-.29-.5-1.48.1-3.08 0 0 .95-.3 3.1 1.16a10.8 10.8 0 012.82-.38c.96 0 1.92.13 2.82.38 2.15-1.47 3.1-1.16 3.1-1.16.6 1.6.22 2.79.1 3.08.72.8 1.16 1.82 1.16 3.07 0 4.38-2.68 5.33-5.24 5.63.42.36.77 1.08.77 2.18v3.24c0 .31.22.68.8.56A10.52 10.52 0 0023.5 12C23.5 5.64 18.35.5 12 .5z" />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Socials;
