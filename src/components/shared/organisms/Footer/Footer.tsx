import { Link } from "react-router-dom";
import { useI18n } from "../../../../i18n/LanguageProvider";

const Footer = () => {
  // Taken from the clock so the copyright year is never a fixed number in source.
  const year = new Date().getFullYear();
  const { messages } = useI18n();

  return (
    <footer className="bg-footer text-faint px-6 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted">
            © {year} Jeysson Cárdenas. {messages.footer.rights}
          </p>
          <p className="text-xs text-faint mt-1">{messages.footer.builtWithAi}</p>
        </div>
        <div className="flex items-center justify-center gap-4 text-center text-sm">
          <Link to="/terms" className="w-28 hover:text-ink sm:w-auto">
            {messages.footer.terms}
          </Link>
          <span aria-hidden="true" className="h-8 w-px shrink-0 bg-current" />
          <Link to="/privacy-policy" className="w-28 hover:text-ink sm:w-auto">
            {messages.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
