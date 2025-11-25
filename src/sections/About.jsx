import { useEffect, useRef } from "react";
import CircularText from "../components/CircularText";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const revealElements = sectionRef.current.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }

          if (entry.target.classList.contains("float-target")) {
            setTimeout(() => entry.target.classList.add("floating"), 800);
          }
        });
      },
      { threshold: 0.3 }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-10 py-30"
    >
      <div className="flex flex-col-reverse md:flex-row gap-20 justify-between items-center max-w-6xl">
        {/* LEFT — Profile + Circle Text */}
        <div
          className="relative reveal float-target"
          style={{ transitionDelay: "0.3s" }}
        >
          <div className="absolute inset-0 blur-3xl opacity-30 bg-primary rounded-full -z-10 wind-border "></div>

          <img
            src="/aboutProf.png"
            alt="profile"
            className="w-[110px] md:w-[340px] rounded-xl"
          />

          <div
            className="absolute bottom-[-35px] left-[-50px] reveal"
            style={{ transitionDelay: "0.6s" }}
          >
            <CircularText
              text=" FRONTEND DEVELOPER • REACT • UI/UX •"
              spinDuration={20}
            />
          </div>
        </div>

        {/* RIGHT — Text Content */}
        <div
          className="md:w-1/2 space-y-6 reveal"
          style={{ transitionDelay: "0.2s" }}
        >
          <p className="text-primary-light tracking-widest uppercase text-sm font-body">
            Who am I?
          </p>

          <h2 className="text-5xl font-anime text-primary">
            <span className="text-primary-light">About</span> Me
          </h2>

          <p className="font-body text-lg leading-relaxed text-text-gray">
            I'm a front-end developer who builds fast and interactive web
            experiences with React, TailwindCSS, and Motion. My design style
            combines minimal UX with cinematic anime-inspired visuals.
          </p>

          <div className="border border-primary p-6 rounded-xl bg-surface shadow-subtle space-y-3">
            <p className="text-primary">What I excel at:</p>

            <ul className="space-y-2 text-text-gray text-sm">
              <li>• Turning UI/UX ideas into pixel-perfect frontends</li>
              <li>• Adding animation and micro-interaction that feels alive</li>
              <li>• Writing maintainable and scalable component structures</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
