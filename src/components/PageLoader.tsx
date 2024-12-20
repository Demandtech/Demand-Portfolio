import { motion } from "framer-motion";

function PageLoader({ isMounted }: { isMounted: boolean }) {
  const loaderVariant = {
    initial: {
      height: "100dvh",
    },
    hidden: {
      height: 0,
    },
  };

  return (
    <motion.div
      animate={isMounted ? "hidden" : "initial"}
      className="bg-black100 flex items-center justify-center"
      initial="initial"
      transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
      variants={loaderVariant}
    >
      <motion.div
        animate={{ opacity: 0, y: 10 }}
        className="text-white/50 leading-5 text-center text-2xl font-noto uppercase"
        initial={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
      >
        <p>Demand</p>
        <p className="">Tech</p>
      </motion.div>
    </motion.div>
  );
}

export default PageLoader;
