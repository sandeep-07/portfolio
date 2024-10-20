"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
const AnimateLoader = (
  props: Readonly<{
    children: React.ReactNode;
  }>
) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: 0,
            transition: {
              delay: 1,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />
          {props.children}
        {/* </motion.div> */}
      </div>
    </AnimatePresence>
  );
};

export default AnimateLoader;
