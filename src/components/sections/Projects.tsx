import { Button } from "@nextui-org/button";

import { projects } from "../../data";
import ProjectCard from "../ProjectCard";
import { ArrowRight } from "../Svgs";

function Projects({ onOpen }: { onOpen: any }) {
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
          <div className="flex flex-col gap-14 lg:gap-20">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={{ ...project, index }} />
            ))}
          </div>
        </div>
        <div className="mt-14 flex justify-center">
          <div>
            <Button
              aria-label="explore more projects"
              className="text-primary group max-w-[500px]"
              color="primary"
              size="lg"
              type="button"
              variant="light"
              onPress={onOpen}
            >
              <div className="flex">
                <span>Explore more Projects</span>
                <div className="flex w-[24px] ml-5 overflow-hidden">
                  <div>
                    <ArrowRight className="group-hover:-translate-x-full transition duration-300" />
                  </div>
                  <div>
                    <ArrowRight className="group-hover:-translate-x-full transition duration-300" />
                  </div>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
