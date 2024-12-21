import { projects } from "../../data";
import ProjectCard from "../ProjectCard";

function Projects() {
  return (
    <section className="mb-10 pt-10" id="projects">
      <div className="w-full lg:max-w-[90%] mx-auto py-12">
        <div className="max-w-[1500px] px-[20px] lg:px-[30px] mx-auto">
          <div className="mb-16">
            <h2 className="text-primary font-noto text-5xl font-semibold mb-3">
              My Projects
            </h2>
            <p className="text-secondary text-xl font-comic">
              Each one is unique. Take a look.
            </p>
          </div>
          <div className="flex flex-col gap-14">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={{ ...project, index }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
