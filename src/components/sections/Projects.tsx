import { Button } from "@nextui-org/button";

import { projects } from "../../data";
import ProjectCard from "../ProjectCard";

function Projects() {
  return (
    <section className="mb-10 pt-10" id="projects">
      <div className="w-full lg:max-w-[90%] mx-auto py-12">
        <div className="max-w-[1500px] px-[20px] lg:px-[30px] mx-auto">
          <div className="mb-16">
            <h2 className="text-primary font-noto text-3xl lg:text-5xl font-semibold mb-3">
              My Projects
            </h2>
            <p className="text-secondary text-lg lg:text-xl font-comic">
              Each one is unique. Take a look.
            </p>
          </div>
          <div className="flex flex-col gap-10 lg:gap-14">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={{ ...project, index }} />
            ))}
          </div>
        </div>
        <div className="mt-14 flex justify-center">
          <Button
            className="text-primary"
            color="primary"
            size="lg"
            variant="light"
          >
            Explore more Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
