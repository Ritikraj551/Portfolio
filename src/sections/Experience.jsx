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
    </section>
  );
}
