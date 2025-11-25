import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = ({ active, setActive }) => {
  return (
    <footer className="w-full bg-background/40 backdrop-blur-xl border-t border-white/5 mt-20 pt-10 pb-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-center md:justify-between items-center text-center gap-6">
          <h3 className="font-anime text-primary text-2xl glow-breath tracking-widest">
            Ritik's Portfolio
          </h3>

          <ul className="flex flex-col md:flex-row gap-8 font-anime">
            {["about", "projects", "skills", "experience", "contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => setActive(item)}
                    className={`relative hover:text-primary transition-colors group uppercase tracking-wide ${
                      active === item ? "text-primary" : "text-white/80"
                    }`}
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300 rounded-full"></span>
                  </a>
                </li>
              )
            )}
          </ul>

          <div className="flex gap-6">
            {[
              {
                icon: <FaGithub size={22} />,
                link: "https://github.com/Ritikraj551",
              },
              {
                icon: <FaLinkedin size={22} />,
                link: "https://www.linkedin.com/in/ritik-raj-singh-92b018301/",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                className="text-white/80 hover:text-primary transition-all hover:scale-110 icon-glow"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-10 text-sm text-white/50 tracking-wider">
          © {new Date().getFullYear()} Ritik Raj Singh. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
