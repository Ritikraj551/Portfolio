import experiences from "../data/experience.json";
import { useEffect, useRef } from "react";

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const revealElements = sectionRef.current.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 w-full overflow-hidden"
    >
      {/* Animated Wind Background */}
      <div className="experience-bg"></div>

      <h2 className="text-center text-4xl font-anime text-primary mb-8">
        Experience
      </h2>
      {/* Quote */}
      <p className="text-center mx-auto text-primary-light font-body italic mb-16 max-w-xs md:max-w-xl">
        Every step sharpened my skills — every challenge made me stronger.
      </p>

      <div className="max-w-4xl mx-auto px-6 relative timeline-line">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`timeline-item reveal ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="timeline-content wind-card">
              <h3 className="text-primary-light font-anime text-2xl leading-tight">
                {exp.role}
              </h3>

              <p className="text-text-gray font-body">{exp.company}</p>
              <p className="text-sm opacity-70">{exp.duration}</p>

              <ul className="mt-3 space-y-1 text-text-gray text-sm list-disc ml-5">
                {exp.points.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20 flex justify-center items-center py-10">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ritikraj551@gmail.com&su=Hiring%20Inquiry%20from%20Portfolio&body=Hi%20Ritik,%0D%0A%0D%0AI%20am%20interested%20in%20working%20with%20you.%20Here%20are%20the%20details:"
          target="_blank"
          rel="noopener noreferrer"
          className="reveal px-10 py-4 rounded-full font-semibold uppercase text-primary border border-primary/50 hover:bg-primary/20 hover:scale-105 transition-all duration-300"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
}
