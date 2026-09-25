import { Link } from "react-router-dom";
import { useI18n } from "../../i18n/LanguageProvider";

const NotFound = () => {
  const { notFound } = useI18n().messages;

  return (
    <div className="bg-canvas text-ink min-h-[60vh] flex items-center">
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">{notFound.title}</h1>
        <p className="text-muted mb-8">{notFound.body}</p>
        <Link to="/" className="brand-button">
          {notFound.cta}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
