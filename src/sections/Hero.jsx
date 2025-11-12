import { motion } from "framer-motion";
import React from "react";
import DarkVeil from "../components/DarkVeil";

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
      <DarkVeil hueShift={62} /> {/* Sanemi green tone */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <div className="flex justify-between items-center w-full gap-20 max-w-6xl px-10">
          <div>
            <motion.h1
              initial="hidden"
              animate="show"
              variants={slashReveal}
              onAnimationComplete={() =>
                document.querySelector(".hero-title")?.classList.add("revealed")
              }
              className="hero-title font-anime text-4xl md:text-7xl font-bold drop-shadow-lg"
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
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative aura-glow transition duration-100 rounded-full"
            >
              <img
                src="/heroProfile.png"
                alt="profile"
                className="md:w-[330px] slas-glow"
                style={{ transitionDelay: "0.4s" }}
              />

              <div
                className="absolute bottom-[-30px] left-[-50px]"
                style={{ transitionDelay: "0.6s" }}
              ></div>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
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
