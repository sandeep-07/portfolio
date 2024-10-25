"use client";

import { ReusableTooltip } from "@/components/Tooltip";
import { motion } from "framer-motion";
import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import WorkSliderBtns from "@/lib/modules/Work/WorkSliderButtons";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project 1",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
    stack: [{ name: "React" }, { name: "TypeScript" }, { name: "TailwindCSS" }],
    image:
      "https://plus.unsplash.com/premium_photo-1664444320101-d277eac712d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2Vic2l0ZSUyMHByb2plY3RzfGVufDB8fDB8fHww",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "backend",
    title: "Project 2",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
    stack: [{ name: "Node.js" }, { name: "Express" }, { name: "MongoDB" }],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2Vic2l0ZSUyMHByb2plY3RzfGVufDB8fDB8fHww",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Project 3",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
    stack: [{ name: "React" }, { name: "Node.js" }, { name: "MongoDB" }],
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGUlMjBwcm9qZWN0c3xlbnwwfHwwfHx8MA%3D%3D",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;

    //updateProject state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* project num */}
              <div
                className="xl:text-8xl text-4xl leading-none font-extrabold text-transparent
              text-outline "
              >
                {project.num}
              </div>

              {/* project category */}
              <h2
                className="xl:text-[42px] text-[20px] font-bold leading-none
              text-white group-hover:text-accent transition-all duration-500 capitalize
              "
              >
                {project.category}
              </h2>

              {/* project description */}
              <p className="text-white/60 xl:text-base text-sm">
                {project.description}
              </p>

              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent ">
                    {item.name}
                    {index < project.stack.length - 1 && <span>,</span>}
                  </li>
                ))}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <ReusableTooltip
                    triggerClassName="w-[70px] h-[70px] bg-white/5 flex items-center justify-center  rounded-full group"
                    tooltipContent={<div>Live Content</div>}
                    triggerContent={
                      <BsArrowUpRight className="text-white  text-3xl group-hover:text-accent" />
                    }
                  />
                </Link>

                {/* live project button */}
                <Link href={project.github}>
                  <ReusableTooltip
                    triggerClassName="w-[70px] h-[70px] bg-white/5 flex items-center justify-center  rounded-full group"
                    tooltipContent={<div>Github repository</div>}
                    triggerContent={
                      <BsGithub className="text-white  text-3xl group-hover:text-accent" />
                    }
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper
              onSlideChange={handleSlideChange}
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full ">
                    <div className="xl:h-[460px] h-[200px]  relative group flex justify-center items-center bg-pink-50/20">
                      {/* {overlay} */}

                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          fill
                          className="object-cover"
                          src={project.image}
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles={` flex gap-2 absolute right-0 bottom-0 [calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between
                xl:w-max xl:justify-none `}
                btnStyles={`bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center
              items-center transition-all `}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
