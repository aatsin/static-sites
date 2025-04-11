import { MenuIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const MenuItem = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`
            relative group overflow-hidden cursor-pointer
            ${isActive ? "pointer-events-none" : ""}
        `}
    >
      <li className="relative">
        <span
          className={`
                    block relative z-10 px-3 py-1
                    ${
                      isActive
                        ? "bg-gradient-to-r from-gatsby-gold-400 via-gatsby-gold-300 to-gatsby-gold-400 bg-clip-text text-transparent"
                        : "bg-gradient-to-r from-gatsby-iron-300 via-gatsby-iron-200 to-gatsby-iron-300 bg-clip-text text-transparent hover:from-gatsby-gold-400 hover:via-gatsby-gold-300 hover:to-gatsby-gold-400"
                    }
                    transition-all duration-300
                `}
        >
          {children}
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
      </li>
    </Link>
  );
};

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="relative">
      <button
        className="p-2 rounded-md hover:bg-gatsby-gold-500/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gatsby-gold-500 focus:ring-offset-2 focus:ring-offset-gatsby-night-500"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <MenuIcon className="h-8 w-8 text-gatsby-gold-500" />
      </button>
      {isOpen && (
        <div className="absolute z-10 top-full right-0 w-[200px] rounded-md bg-gatsby-night-500/95 backdrop-blur-sm border border-gatsby-gold-500/30 shadow-lg">
          <div className="flex flex-col text-gatsby-gold-500 items-center justify-center h-full">
            <ul className="flex flex-col items-end w-full p-4 gap-y-2 text-lg font-gatsby">
              <MenuItem to="/">Inici</MenuItem>
              <MenuItem to="/day-of-the-event">Dia de l'obra</MenuItem>
              <MenuItem to="/faqs">FAQs</MenuItem>
              <MenuItem to="/upcoming-production">Propera producció</MenuItem>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
