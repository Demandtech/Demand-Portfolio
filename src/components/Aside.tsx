import { motion } from "framer-motion";

import { GithubIcon, TwitterIcon, LinkedInIcon, EmailIcon } from "./Svgs";

function Aside({ openMenu }: { openMenu: boolean }) {
  const backdropVariants = {
    open: { opacity: 1, transition: { duration: 0.3, delay: 0.5 } },
    closed: { opacity: 0, transition: { duration: 0.3, delay: 1.2 } },
  };

  const asideVariants = {
    open: { x: 0, transition: { type: "tween", duration: 0.3, delay: 0.6 } },
    closed: {
      x: "100%",
      transition: { type: "tween", duration: 0.3, delay: 1 },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      transition: { duration: 0.3, delay: 0.4 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: 1.2 },
    },
  };

  const navItemVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      y: 10,
      transition: { duration: 0.3, delay: 0.4 + index * 0.1 },
    }),
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: 1.2 + index * 0.1 },
    }),
  };

  const dividerVariants = {
    hidden: { width: 0, transition: { duration: 0.8 } },
    visible: { width: "100%", transition: { duration: 0.8, delay: 1.6 } },
  };

  const hoverVariants = {
    rest: { width: 0 },
    hover: { width: 20, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const bottomHeaderVariants = {
    hidden: () => ({
      opacity: 0,
      y: 10,
      transition: { duration: 0.3, delay: 0.4 },
    }),
    visible: () => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: 1.7 },
    }),
  };
  const bottomParaVariants = {
    hidden: () => ({
      opacity: 0,
      y: 10,
      transition: { duration: 0.3, delay: 0.6 },
    }),
    visible: () => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: 1.8 },
    }),
  };
  const socialsVariants = {
    hidden: () => ({
      opacity: 0,
      y: 10,
      transition: { duration: 0.3, delay: 0.8 },
    }),
    visible: () => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: 1.9 },
    }),
  };

  return (
    <motion.div
      animate={openMenu ? "open" : "closed"}
      className="h-full w-full fixed top-0 left-0 bg-black/40"
      initial="closed"
      variants={backdropVariants}
    >
      <motion.aside
        animate={openMenu ? "open" : "closed"}
        className="bg-black150 max-w-3xl h-full ml-auto w-full"
        initial="closed"
        variants={asideVariants}
      >
        <div className="pt-20 md:pt-24 max-w-[80%] mx-auto flex flex-col items-center md:items-start">
          <motion.h3
            animate={openMenu ? "visible" : "hidden"}
            className="text-3xl font-noto text-white/80 ml-2"
            initial="hidden"
            // transition={titleTransition}
            variants={titleVariants}
          >
            Meet Me
          </motion.h3>
          <ul className="mt-8 text-white text-xl space-y-5 font-comic text-center">
            {navList.map((item, index) => (
              <motion.li
                key={index}
                animate={openMenu ? "visible" : "hidden"}
                className="justify-center md:justify-start group flex items-center cursor-pointer transition-all duration-300 ease-linear"
                custom={index}
                initial="hidden"
                variants={navItemVariants}
                whileHover="hover"
              >
                <motion.span
                  className="block bg-white h-[2px] mr-2"
                  variants={hoverVariants}
                />
                <span className="capitalize">{item}</span>
              </motion.li>
            ))}
          </ul>
          <motion.div
            animate={openMenu ? "visible" : "hidden"}
            className="h-[1px] bg-white ml-2 my-8"
            initial="hidden"
            variants={dividerVariants}
          />
          <div className="text-center  gap-3 flex flex-col items-center w-full text-white">
            <motion.h4
              animate={openMenu ? "visible" : "hidden"}
              className="text-4xl font-noto font-bold"
              initial="hidden"
              variants={bottomHeaderVariants}
            >
              Have an idea?{" "}
            </motion.h4>
            <motion.p
              animate={openMenu ? "visible" : "hidden"}
              className="font-comic text-xl"
              initial="hidden"
              variants={bottomParaVariants}
            >
              Tell me about it.
            </motion.p>
            <motion.div
              animate={openMenu ? "visible" : "hidden"}
              className="flex gap-10"
              initial="hidden"
              variants={socialsVariants}
            >
              <a
                className=""
                href="https://github.com/demandtech"
                rel="noreferrer"
                target="_blank"
              >
                <GithubIcon className="stroke-white/70" />
              </a>
              <a
                className=""
                href="https://x.com/ara_tuntun"
                rel="noreferrer"
                target="_blank"
              >
                <TwitterIcon className="stroke-white/70" />
              </a>
              <a
                className=""
                href="https://www.linkedin.com/in/demandwork"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedInIcon className="stroke-white/70" />
              </a>
              <a
                className=""
                href="mailto:rasheedadekunle91@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <EmailIcon className="stroke-white/70" />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.aside>
    </motion.div>
  );
}

export default Aside;

const navList = ["My Projects", "my story", "Testimomials", "my resume"];
