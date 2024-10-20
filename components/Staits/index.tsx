import { motion } from "framer-motion";

const stairanimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};
const Stairs = () => {
  return (
    <>
      {/* renfer 6 moyion divs . each representing a step of stairs. Each div will have the same animation defined by the stairs animation object . The delay for each div is calculated sinamically based on it's reversed index, 
          The delay for each div is calculated sinamically based on its' reversed index , creating a staggered effect with decreasing delay for each subsequent step */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairanimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            delay: reverseIndex(index) * 0.1,
            ease: "easeInOut",
          }}
              className="w-full h-full bg-white relative"
        />
      ))}
    </>
  );
};

export default Stairs;
