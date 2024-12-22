import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

import { GithubIcon, LinkedInIcon, EmailIcon, TwitterIcon } from "./Svgs";

function Aside({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}) {
  const backdropVariants = {
    open: {
      opacity: 1,
      visibility: "visible" as "visible",
      transition: { duration: 0.3, delay: 0.5 },
    },
    closed: {
      opacity: 0,
      visibility: "hidden" as "hidden",
      transition: { duration: 0.3, delay: 1.2 },
    },
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

  const handleScrollToSection = (section: string) => {
    const sectionElement = document.getElementById(section);

    if (!sectionElement) return;

    sectionElement.scrollIntoView();
    setOpenMenu(false);
  };

  return (
    <motion.div
      animate={openMenu ? "open" : "closed"}
      className="h-full w-full fixed top-0 left-0 bg-bgprimary/40 z-[60]"
      initial="closed"
      variants={backdropVariants}
      onClick={() => setOpenMenu(false)}
    >
      <motion.aside
        animate={openMenu ? "open" : "closed"}
        className="bg-bgsecondary max-w-3xl h-full ml-auto w-full"
        initial="closed"
        role="button"
        tabIndex={-1}
        variants={asideVariants}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <div className="pt-24 md:pt-32 max-w-[80%] mx-auto flex flex-col items-center md:items-start">
          <motion.h3
            animate={openMenu ? "visible" : "hidden"}
            className="text-3xl font-noto text-primary/80 ml-2"
            initial="hidden"
            // transition={titleTransition}
            variants={titleVariants}
          >
            Meet Me
          </motion.h3>
          <ul className="mt-8 text-primary text-xl space-y-5 font-comic text-center">
            {navList.map((item: { name: string; href: string }, index) => (
              <motion.li
                key={index}
                animate={openMenu ? "visible" : "hidden"}
                className="justify-center md:justify-start group flex items-center cursor-pointer transition-all duration-300 ease-linear"
                custom={index}
                initial="hidden"
                variants={navItemVariants}
                whileHover="hover"
                onClick={() => handleScrollToSection(item.href)}
              >
                <motion.span
                  className="block bg-primary h-[2px] mr-2"
                  variants={hoverVariants}
                />
                <span className="capitalize">{item.name}</span>
              </motion.li>
            ))}
            <motion.li
              animate={openMenu ? "visible" : "hidden"}
              className="justify-center md:justify-start group flex items-center cursor-pointer transition-all duration-300 ease-linear"
              custom={navList.length}
              initial="hidden"
              variants={navItemVariants}
              whileHover="hover"
            >
              <motion.span
                className="block bg-primary h-[2px] mr-2"
                variants={hoverVariants}
              />
              <span className="capitalize">My Resume</span>
            </motion.li>
          </ul>
          <motion.div
            animate={openMenu ? "visible" : "hidden"}
            className="h-[1px] bg-primary ml-2 my-8"
            initial="hidden"
            variants={dividerVariants}
          />
          <div className="text-center  gap-3 flex flex-col items-center w-full text-primary">
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
                className="hover:opacity-65 transition-opacity"
                href="https://github.com/demandtech"
                rel="noreferrer"
                target="_blank"
              >
                <GithubIcon className="stroke-accent" />
              </a>
              <a
                className="hover:opacity-65 transition-opacity"
                href="https://x.com/ara_tuntun"
                rel="noreferrer"
                target="_blank"
              >
                <TwitterIcon className="fill-accent" />
              </a>
              <a
                className="hover:opacity-65 transition-opacity"
                href="https://www.linkedin.com/in/demandwork"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedInIcon className="stroke-accent" />
              </a>
              <a
                className="hover:opacity-65 transition-opacity"
                href="mailto:rasheedadekunle91@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <EmailIcon className="stroke-accent" />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.aside>
    </motion.div>
  );
}

export default Aside;

const navList = [
  { name: "My Projects", href: "projects" },
  { name: "About me", href: "about" },
  { name: "Contact", href: "contact" },
  // "my resume",
];
