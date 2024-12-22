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
      className="bg-bgsecondary flex items-center justify-center fixed top-0 left-0 w-screen z-50"
      initial="initial"
      transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
      variants={loaderVariant}
    >
      <motion.div
        animate={{ opacity: isMounted ? 0 : 1, y: isMounted ? 10 : 0 }}
        className="text-accent leading-5 text-center text-2xl font-noto uppercase"
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
