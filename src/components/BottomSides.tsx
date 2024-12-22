import { motion } from "framer-motion";

import { GithubIcon, LinkedInIcon, EmailIcon, TwitterIcon } from "./Svgs";

function BottomSides() {
  const socialsVariants = {
    hidden: () => ({
      opacity: 0,
      y: 50,
    }),
    visible: () => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: 3 },
    }),
  };

  const dividerVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "100px",
      opacity: 1,
      transition: { duration: 0.1, delay: 3 },
    },
  };

  return (
    <div className="fixed bottom-0 w-full hidden md:block">
      <div className="flex justify-between w-full max-w-[95%] mx-auto items-end">
        <div className="flex gap-5 flex-col items-center">
          <motion.div
            animate={"visible"}
            className="flex gap-5 flex-col"
            initial="hidden"
            variants={socialsVariants}
          >
            <a
              className=""
              href="https://github.com/demandtech"
              rel="noreferrer"
              target="_blank"
            >
              <GithubIcon className="stroke-primary/70" />
            </a>
            <a
              className=""
              href="https://x.com/ara_tuntun"
              rel="noreferrer"
              target="_blank"
            >
              <TwitterIcon className="stroke-primary/70 fill-primary/70" />
            </a>
            <a
              className=""
              href="https://www.linkedin.com/in/demandwork"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedInIcon className="stroke-primary/70" />
            </a>
            <a
              className=""
              href="mailto:rasheedadekunle91@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <EmailIcon className="stroke-primary/70" />
            </a>
          </motion.div>
          <motion.div
            animate="visible"
            className="w-[1px] bg-primary"
            initial="hidden"
            variants={dividerVariants}
          />
        </div>
        <div className="flex gap-5 flex-col items-center">
          <motion.div
            animate={"visible"}
            className="flex gap-5 flex-col"
            initial="hidden"
            variants={socialsVariants}
          >
            <a
              className="font-comic text-primary/70 text-xl vertical-text"
              href="https://github.com/demandtech"
              rel="noreferrer"
              target="_blank"
            >
              My Resume
            </a>
          </motion.div>
          <motion.div
            animate="visible"
            className="w-[1px] bg-primary"
            initial="hidden"
            variants={dividerVariants}
          />
        </div>
      </div>
    </div>
  );
}

export default BottomSides;
