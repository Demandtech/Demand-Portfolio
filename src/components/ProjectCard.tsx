import { Image } from "@nextui-org/image";
import { motion } from "framer-motion";

export default function ProjectCard({
  project,
}: {
  project: {
    index: number;
    name: string;
    live_url: string;
    description: string;
    tools: string;
    repo_url?: string;
    image: string;
  };
}) {
  return (
    <div className="flex gap-8 lg:gap-12 flex-col lg:flex-row ">
      <motion.div
        className="lg:w-3/5 relative h-full max-h-[400px] overflow-hidden"
        whileHover={{ scale: 1.02 }}
      >
        <Image
          className="object-cover"
          classNames={{
            img: "object-contain",
          }}
          radius="none"
          src={project.image}
          width={"100%"}
        />
      </motion.div>
      <div className="font-comic text-primary flex flex-col lg:w-2/5 gap-5 lg:gap-7 pb-10">
        <p className="font-comic text-lg">{project.index + 1}</p>
        <a
          className="text-3xl lg:text-5xl font-medium font-noto capitalize"
          href={project.live_url}
        >
          {project.name}
        </a>
        <p className="text-lg">{project.description}</p>
        <p className="text-lg">{project.tools}</p>
        <div>
          <a href={project.live_url}>Icon</a>
          {project.repo_url && <a href={project.repo_url}>icon2</a>}
        </div>
      </div>
    </div>
  );
}
