"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Pic from "../../../assets/Subject.png";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 2,
            ease: "easeIn",
          },
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: 2.4,
              ease: "easeInOut",
            },
          }}
        >
          <div className=" w-[298px] h-[298px] xl:h-[498px] xl:w-[498px] mix-blend-lighten">
            <Image
              src={Pic}
              alt="Sandeep"
              priority
              quality={100}
              fill
              className="border object-contain brightness-50 zoom-in-150 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
