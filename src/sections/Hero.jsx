import { motion } from "framer-motion";
import DarkVeil from "../components/DarkVeil";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const slashReveal = {
  hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
  show: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <DarkVeil hueShift={62} /> 
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <div className="flex justify-between items-center w-full gap-8 max-w-6xl md:max-w-7xl px-10">
          <div>
            <motion.h1
              initial="hidden"
              animate="show"
              variants={slashReveal}
              onAnimationComplete={() =>
                document.querySelector(".hero-title")?.classList.add("revealed")
              }
              className="hero-title font-anime text-5xl md:text-8xl font-bold drop-shadow-md drop-shadow-primary-dark"
            >
              Ritik Raj Singh
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              // className="text-gray-300 font-body text-xl mt-4 tracking-wider"
              className="text-text-gray font-body md:text-lg mt-4 tracking-[0.25em]"
            >
              Frontend Engineer | Interactive UI | Modern Web
            </motion.p>

            {/* ACTION BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col md:flex-row justify-center gap-4 mt-4"
            >
              {/* Projects Button */}
              <a
                href="#projects"
                className="relative p-2 md:px-6 md:py-3 rounded-xl border border-primary text-primary font-body text-md 
                          bg-surface/40 backdrop-blur-lg overflow-hidden group 
                          hover:scale-[1.05] transition-all duration-300"
              >
                <span className="relative z-10 lg:text-xl text-xs">
                  My Projects
                </span>
                <span
                  className="absolute inset-0 bg-primary/15 translate-x-[-120%] group-hover:translate-x-0 
                                transition-transform duration-500 skew-x-20"
                />
              </a>

              {/* CV Button */}
              <a
                href="/Ritik_Raj_Singh_Dev.pdf"
                download="Ritik_Raj_Singh_Dev.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-2 md:px-6 md:py-3 rounded-xl bg-primary text-background shadow-lg shadow-primary/50
                          font-body text-md overflow-hidden group hover:scale-[1.05] transition-all duration-300"
              >
                <span className="relative z-10 lg:text-xl text-xs">
                  Download CV
                </span>
                <span
                  className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 
                                transition-all duration-300"
                />
              </a>
              <div className="flex gap-2 items-center justify-center">
                {/* GitHub Orb */}
                <a
                  href="https://github.com/Ritikraj551"
                  target="_blank"
                  className="group relative w-11 h-11 flex items-center justify-center rounded-full
                              border border-primary bg-surface/40 backdrop-blur-md overflow-hidden
                              hover:scale-[1.12] transition-all duration-300"
                >
                  <span
                    className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100
                                     blur-md transition duration-300"
                  />
                  <FaGithub
                    className="text-primary group-hover:scale-110 transition"
                    size={25}
                  />
                </a>
                {/* LinkedIn Orb */}
                <a
                  href="https://www.linkedin.com/in/ritik-raj-singh-92b018301/"
                  target="_blank"
                  className="group relative w-11 h-11 flex items-center justify-center rounded-full
                              border border-primary bg-surface/40 backdrop-blur-md overflow-hidden
                              hover:scale-[1.12] transition-all duration-300"
                >
                  <span
                    className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100
                                     blur-md transition duration-300"
                  />
                  <FaLinkedin
                    className="text-primary group-hover:scale-110 transition"
                    size={25}
                  />
                </a>
              </div>
            </motion.div>
          </div>
          {/* === RIGHT SIDE IMAGE === */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative aura-glow transition duration-100 rounded-full"
          >
            <img
              src="/heroProfile.png"
              alt="profile"
              className="sm:w-[330px]"
              style={{ transitionDelay: "0.4s" }}
            />
          </motion.div>
        </div>
        {/* Scroll Hint */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 text-gray-400 text-sm tracking-widest"
        >
          Scroll to Explore ⬇
        </motion.span>
      </div>
    </section>
  );
}
