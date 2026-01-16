import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import { useRef } from "react";

import { DownloadIcon } from "../Svgs";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="py-10" id="hero">
      <div className="w-full lg:max-w-[90%] mx-auto">
        <div className="max-w-[1500px] px-[20px] lg:px-[30px] mx-auto">
          <div className="font-inter lg:max-w-[800px] flex-col flex gap-10 items-start">
            <motion.h1
              animate={{ y: 0 }}
              className="max-w-[90%] lg:max-w-full text-[3.3rem] leading-[3.5rem] lg:text-7xl font-bold text-primary"
              initial={{ y: 50 }}
              transition={{ duration: 0.8, delay: 2.8 }}
            >
              Bringing your ideas to life through software
            </motion.h1>
            <motion.p
              animate={{ y: 0 }}
              className="sm:text-lg text-secondary lg:max-w-[60%]"
              initial={{ y: 50 }}
              transition={{ duration: 0.8, delay: 3 }}
            >
              Create and use the right strategy to jump start your next idea
              with a solid foundation. Full software development services
              available.
            </motion.p>
            <motion.div
              animate={{ y: 0 }}
              className="flex flex-col gap-5"
              initial={{ y: 50 }}
              transition={{ duration: 0.8, delay: 3.2 }}
            >
              <Button
                aria-label="Download Resume"
                className="transition duration-300 bg-primary  group hover:opacity-70"
              >
                <a
                  aria-label="Download Rasheed Adekunle's resume as a PDF"
                  className="flex items-center"
                  download="Rasheed CV"
                  href="/assets/pdf/rasheed_adekunle_cv.pdf"
                  rel="noreferral"
                  target="_blank"
                >
                  <span className="text-bgprimary">Download Resume </span>
                  <span className="h-[14px] w-[14px] ml-4 overflow-hidden">
                    <div>
                      <DownloadIcon className="transition duration-300 group-hover:-translate-y-full fill-bgprimary" />
                    </div>
                    <div>
                      <DownloadIcon className="transition duration-300 group-hover:-translate-y-full fill-bgprimary" />
                    </div>
                  </span>
                </a>
              </Button>
              <motion.p
                animate={{ y: 0, opacity: 1 }}
                className="text-xs text-secondary"
                initial={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 3.4 }}
              >
                I am committed to building an amazing app <br /> Pay attention
                to details
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
