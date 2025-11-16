import React from "react";
import GlareHover from "../ui/GlareHover";
import Carousel from "../ui/Carousel";
import Carouseln from "../ui/Carouseln";

function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
  image,
  className,
  style,
}) {
  return (
    <div
      className={`flex w-full md:max-w-sm md:mx-auto wind-border rounded-2xl border border-primary-dark md:shadow-glow backdrop-blur-lg md:hover:scale-[1.03] transition duration-300 p-4 ${className}`}
      style={style}
    >
      <div className="flex w-full flex-col justify-center items-center pb-4">
        <Carouseln>
          {image.map((src) => (
            <img className="mx-auto w-82 h-42" src={src} alt="" />
          ))}
        </Carouseln>
        <h3 className="text-primary font-anime text-lg md:text-2xl m-2">
          {title}
        </h3>
        <p className="text-text-gray text-center font-body text-sm md:text-md max-w-3xs md:max-w-xl">
          {description}
        </p>
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
    </div>
  );
}

export default ProjectCard;
