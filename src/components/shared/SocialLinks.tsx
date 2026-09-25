import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL } from "../../content/catalog";
import { useI18n } from "../../i18n/LanguageProvider";

const linkClass =
  "inline-flex items-center gap-2 text-ink hover:text-link transition";

export default function SocialLinks() {
  const { messages } = useI18n();

  return (
    <div className="flex flex-wrap justify-center gap-6">
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        referrerPolicy="strict-origin"
        className={linkClass}
      >
        <FaLinkedin className="text-2xl" aria-hidden="true" />
        {messages.socials.linkedin}
      </a>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        referrerPolicy="strict-origin"
        className={linkClass}
      >
        <FaGithub className="text-2xl" aria-hidden="true" />
        {messages.socials.github}
      </a>
    </div>
  );
}
