import { Link } from "react-router-dom";
import { useI18n } from "../../i18n/LanguageProvider";

const NotFound = () => {
  const { notFound } = useI18n().messages;

  return (
    <div className="bg-zinc-900 text-white min-h-[60vh] flex items-center">
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">{notFound.title}</h1>
        <p className="text-slate-300 mb-8">{notFound.body}</p>
        <Link to="/" className="bg-orange-400 text-zinc-900 font-bold py-3 px-8 inline-block">
          {notFound.cta}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
