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
    title: "File Explorer",
    description:
      "Designed and implemented a web-based File Explorer using JavaScript, React.js, and Redux, allowing users to create, delete, and organize files and folders in a user-friendly interface. Integrated caching for optimized state management and efficient storage of state objects, making it resemble a virtual operating system.",
    stack: [{ name: "React" }, { name: "Redux" }, { name: "TypeScript" }],
    image: "/assets/image.png",
    live: "https://file-management-system-5wty4fx7t-sandeep-07.vercel.app/",
    github: "https://github.com/sandeep-07/file-manager",
  },
  {
    num: "02",
    category: "backend",
    title: "Project 2",
    description:
      "An ecommerce website built with React.js and Redux on the frontend a. The website allows users to browse products, add them to their cart, and make purchases.",
    stack: [{ name: "React.js" }, { name: "Redux" }],
    image: "/assets/estore.png",
    live: "https://cocky-allen-7068e0.netlify.app/",
    github: "https://github.com/sandeep-07/E-Shop",
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
