import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/40 backdrop-blur-xl border-b border-white/5">
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
          <ul className="hidden md:flex items-center gap-8">
            {["about", "projects", "skills", "experience", "contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => setActive(item)}
                    className={`relative uppercase tracking-wide transition-all duration-300 ${
                      active === item ? "text-primary" : "text-white/80"
                    } group`}
                  >
                    {item}

                    {/* underline animation */}
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-300 rounded-full"></span>
                    <span className="absolute -bottom-[6px] left-0 w-full h-[2px] bg-primary/40 blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-[6px]"
          >
            <div
              className={`w-6 h-[2px] bg-primary transition-all duration-300 ${
                open ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <div
              className={`w-6 h-[2px] bg-primary transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            open ? "max-h-65" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-6 py-2 text-center">
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
