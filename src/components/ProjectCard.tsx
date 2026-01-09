import { useRef, Suspense } from "react";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/image";

import { AnchorSvg, GithubRepoIcon } from "./Svgs";

import { useTheme } from "@/contexts/ThemeContext";
import { ProjectType } from "@/types";

export default function ProjectCard({ project }: { project: ProjectType }) {
  const cardRef = useRef(null);
  const { theme } = useTheme();

  const imageVariants = {
    initial: {
      scale: 0.9,
      opacity: 0,
      transition: { duration: 0.4, type: "spring" },
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, type: "spring" },
    },
  };

  const detailsVariants = {
    initial: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.4, type: "spring" },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.9, type: "spring" },
    },
  };

  return (
    <div
      ref={cardRef}
      className="flex gap-8 lg:gap-12 flex-col lg:flex-row relative lg:items-center"
    >
      <motion.div
        animate="initial"
        className="lg:w-3/5 relative h-full max-h-[400px] overflow-hidden"
        initial="initial"
        variants={imageVariants}
        whileInView="animate"
      >
        <div className="absolute top-0 left-0 bg-[#00000034] w-full h-full z-50" />
        <Suspense fallback="Loading...">
          <div key={theme}>
            <Image
              className="object-cover h-full w-full"
              classNames={{
                img: "object-contain",
              }}
              radius="none"
              src={
                theme === "dark"
                  ? project.image
                  : project.light_img
                    ? project.light_img
                    : project.image
              }
              width={"100%"}
            />
          </div>
        </Suspense>
      </motion.div>
      <motion.div
        className="font-comic text-primary flex flex-col lg:w-2/5 gap-5 lg:gap-7 pb-10"
        initial="initial"
        transition={{ duration: 0.4 }}
        variants={detailsVariants}
        whileInView="animate"
      >
        <p className="font-comic text-lg md:text-xl font-semibold text-secondary">
          {project.index + 1}
        </p>
        <a
          className="text-3xl lg:text-5xl font-medium font-noto capitalize"
          href={project.live_url}
          rel="noreferrer"
          target="_blank"
        >
          {project.name}
        </a>
        <p className="text-lg text-secondary">{project.description}</p>
        <p className="text-lg text-secondary">{project.tools}</p>
        <div className="flex items-center gap-2">
          <a href={project.live_url} rel="noreferrer" target="_blank">
            <AnchorSvg className="fill-accent stroke-accent" />
          </a>
          {project.repo_url && (
            <a href={project.repo_url} rel="noreferrer" target="_blank">
              <GithubRepoIcon />
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
