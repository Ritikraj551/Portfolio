import { useState } from "react";

const Navbar = ({ active, setActive }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/20 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="relative">
            <img
              src="/PortLogo.png"
              alt="Portfolio Logo"
              className="w-14 h-14 rounded-full drop-shadow-md drop-shadow-primary"
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8 font-anime">
            {["about", "projects", "skills", "experience", "contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => setActive(item)}
                    className={`relative uppercase hover:text-primary tracking-wide transition-all duration-300 ${
                      active === item ? "text-primary" : "text-primary-light/80"
                    } group`}
                  >
                    {item}

                    {/* underline animation */}
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300 rounded-full"></span>
                    <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-primary/40 blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <div
              className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            open ? "max-h-75" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-5 py-2 text-center">
            {["about", "projects", "skills", "experience", "contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => {
                      setActive(item);
                      setOpen(false);
                    }}
                    className={`uppercase tracking-wide text-lg transition-all duration-300 ${
                      active === item ? "text-primary" : "text-white/80"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
