import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="py-10" id="hero">
      <div className="max-w-[95%] md:max-w-[90%] mx-auto">
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
            Create and use the right strategy to jump start your next idea with
            a solid foundation. Full software development services available.
          </motion.p>
          <motion.div
            animate={{ y: 0 }}
            className="flex flex-col gap-5"
            initial={{ y: 50 }}
            transition={{ duration: 0.8, delay: 3.2 }}
          >
            <Button
              aria-label="Download Resume"
              className="bg-primary text-bgprimary"
            >
              Download CV
            </Button>
            <motion.p
              animate={{ y: 0, opacity: 1 }}
              className="text-xs text-secondary"
              initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 3.4 }}
            >
              Transparent pricing. No obligations. <br /> Clear, actionable
              outcomes.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
