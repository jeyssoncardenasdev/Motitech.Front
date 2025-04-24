import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-gray-400 px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-white-900">
          © {year} Jeysson Cárdenas. Todos los derechos reservados.
        </div>    
        <div className="flex gap-4 text-sm">
          <Link to="/terms" className="text-gray-400 hover:text-white">
            Términos y Condiciones
          </Link>
          <span className="text-gray-400">|</span>
          <Link to="/privacy-policy" className="text-gray-400 hover:text-white">
            Política de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
