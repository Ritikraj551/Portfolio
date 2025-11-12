import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-background/40 backdrop-blur-xl border-t border-white/5 mt-20 pt-10 pb-6">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center gap-6">
          {/* Brand */}
          <h3 className="font-anime text-primary text-2xl glow-breath tracking-widest">
            Ritik's Portfolio
          </h3>

          {/* Links */}
          <ul className="flex flex-col md:flex-row gap-8 text-white/80">
            {["about", "projects", "skills", "experience", "contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative hover:text-primary transition-colors group uppercase tracking-wide"
                  >
                    {item}

                    {/* underline glow */}
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-300 rounded-full"></span>
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Social */}
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

        {/* Bottom Section */}
        <div className="text-center mt-10 text-sm text-white/50 tracking-wider">
          © {new Date().getFullYear()} Ritik Raj Singh. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
