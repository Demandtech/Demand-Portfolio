import { useRef, Suspense, lazy } from "react";
import { motion, useInView } from "framer-motion";

import { AnchorSvg } from "./Svgs";

const LazyImage = lazy(() =>
  import("@nextui-org/image").then((module) => ({ default: module.Image })),
);

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
  const cardRef = useRef(null);
  const isInVieww = useInView(cardRef, { once: true });

  const cardVariants = {
    initial: {
      scale: 0.9,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <div
      ref={cardRef}
      className="flex gap-8 lg:gap-12 flex-col lg:flex-row relative"
    >
      <motion.div
        animate={isInVieww ? "animate" : "initial"}
        className="lg:w-3/5 relative h-full max-h-[400px] overflow-hidden"
        initial="initial"
        transition={{ duration: 0.4 }}
        variants={cardVariants}
        whileHover={{ scale: 1.02 }}
      >
        <div className="absolute top-0 left-0 bg-[#00000034] w-full h-full z-50" />
        <Suspense fallback="Loading...">
          <LazyImage
            className="object-cover"
            classNames={{
              img: "object-contain",
            }}
            radius="none"
            src={project.image}
            width={"100%"}
          />
        </Suspense>
      </motion.div>
      <motion.div
        animate={isInVieww ? "animate" : "initial"}
        className="font-comic text-primary flex flex-col lg:w-2/5 gap-5 lg:gap-7 pb-10"
        initial="initial"
        transition={{ duration: 0.4 }}
        variants={cardVariants}
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
        <div>
          <a href={project.live_url} rel="noreferrer" target="_blank">
            <AnchorSvg className="fill-accent stroke-accent" />
          </a>
          {project.repo_url && <a href={project.repo_url}>icon2</a>}
        </div>
      </motion.div>
    </div>
  );
}
