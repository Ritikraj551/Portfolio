import ProjectCard from "../components/ui/ProjectCard";
import projectsData from "../data/projects.json";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-10">
      <div className="container mx-auto px-4 gap-8 py-4">
        <h2 className="flex gap-2 justify-center items-center mb-8 text-primary font-anime font-semibold text-3xl text-shadow-lg text-shadow-primary-dark">
          <span className="text-primary-light">My</span>Projects
        </h2>
        {/* Add projects grid here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-8xl mx-auto">
          {projectsData.map((project) => (
            <ProjectCard
              className="reveal"
              style={{ transitionDelay: "100ms" }}
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              demo={project.demo}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
