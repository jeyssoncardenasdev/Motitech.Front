import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaGlobeAmericas } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [language, setLanguage] = useState("en");

  const navItems = [
    { label: "Inicio", path: "/" },
    { label: "Sobre mí", path: "/about" },
    { label: "Contratación", path: "/hire" },
    { label: "Proyectos", path: "/works" },
    { label: "Contacto", path: "/contact" },
  ];

  const getLinkStyle = (path: string) =>
    location.pathname === path
      ? "text-orange-400 font-normal"
      : "text-white hover:text-orange-400";

  return (
    <nav className="bg-zinc-800 text-white sticky top-0 z-50 shadow-md w-full">
      <div className="w-full flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-normal">Motitech |</h1>
        </div>

        {/* Enlaces */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={getLinkStyle(item.path)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Idioma */}
        <div className="hidden md:flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-zinc-700 px-2 py-1 rounded-md">
          <FaGlobeAmericas className="text-white" />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-zinc-700 text-white text-sm focus:outline-none"
          >
            <option value="en">🇺🇸 EN</option>
            <option value="es">🇪🇸 ES</option>
          </select>
        </div>
        </div>

        {/* Menú hamburguesa */}
        <div className="md:hidden">
          <button
            className="text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${getLinkStyle(item.path)} text-lg`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Idioma móvil */}
          <div className="flex items-center space-x-2 bg-zinc-700 px-2 py-1 rounded-md">
            <FaGlobeAmericas className="text-white" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-zinc-700 text-white text-sm focus:outline-none"
            >
              <option value="en">🇺🇸 EN</option>
              <option value="es">🇪🇸 ES</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
