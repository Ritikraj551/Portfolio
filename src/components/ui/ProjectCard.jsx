import React from "react";
import GlareHover from "../ui/GlareHover";
import Carousel from "../ui/Carousel";

function ProjectCard({ title, description, tech, github, demo, image }) {
  return (
    <div className="flex max-w-sm mx-auto wind-border rounded-2xl border border-primary-dark shadow-glow backdrop-blur-lg hover:scale-[1.03] transition duration-300 p-4">
      <GlareHover
        glareColor="#ffffff"
        glareAngle={-30}
        glareSize={300}
        transitionDuration={800}
        playOnce={false}
      >
        <div className="flex flex-col justify-center items-center pb-4">
          <Carousel
            autoplay="false"
            autoplayDelay={3000}
            loop="true"
            pauseOnHover="true"
            items={image.map((src) => ({ src }))}
          />
          <h3 className="text-primary font-anime text-lg md:text-2xl m-2">
            {title}
          </h3>
          <p className="text-text-gray text-center font-body text-sm md:text-md max-w-xs md:max-w-xl">
            {description}
          </p>
          {/* tech will be shown here */}
          <div className="flex max-w-2xs md:max-w-xl gap-2 flex-wrap justify-center mt-3 ">
            {tech.map((items, index) => (
              <span
                key={index}
                className="text-xs md:text-sm px-3 py-1 rounded-full border border-primary-light shadow-subtle"
              >
                {items}
              </span>
            ))}
          </div>
          <div className="flex gap-3 m-5">
            <a
              href={github}
              target="_blank"
              className="text-sm md:text-md bg-surface border border-primary text-primary px-4 py-2 rounded-lg"
            >
              GitHub
            </a>
            <a
              href={demo}
              target="_blank"
              className="text-sm md:text-md bg-primary text-background shadow-subtle px-4 py-2 rounded-lg"
            >
              Demo
            </a>
          </div>
        </div>
      </GlareHover>
    </div>
  );
}

export default ProjectCard;
