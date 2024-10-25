"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger
// } from '@/components/ui/tooltip'

// import {
//   ScrollArea
// } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";
import { ReusableTooltip } from "@/components/Tooltip";

const about = {
  title: "About Me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
  info: [
    {
      fieldName: "Name",
      fieldValue: "John Doe",
    },
    {
      fieldName: "Email",
      fieldValue: "imsandeep8795@gmail.com",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91-8795401994",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 years",
    },
    {
      fieldName: "Location",
      fieldValue: "India",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Enlish, India",
    },
  ],
};

const experience = {
  icon: "",
  title: "Experience",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
  info: [
    {
      title: "Frontend Developer",
      company: "Google",
      date: "2018 - 2020",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    },
    {
      title: "Backend Developer",
      company: "Facebook",
      date: "2018 - 2020",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    },
    {
      title: "Fullstack Developer",
      company: "Amazon",
      date: "2018 - 2020",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    },
    {
      title: "UI/UX Designer",
      company: "Microsoft",
      date: "2018 - 2020",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    },
  ],
};

const skills = {
  title: "Skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
  info: [
    {
      icon: (size: number) => <FaHtml5 size={size} />,
      name: "HTML 5",
    },
    {
      icon: (size: number) => <FaCss3 size={size} />,
      name: "CSS 3",
    },
    {
      icon: (size: number) => <FaJs size={size} />,
      name: "JavaScript",
    },
    {
      icon: (size: number) => <SiTypescript size={size} />,
      name: "TypeScript",
    },
    {
      icon: (size: number) => <FaReact size={size} />,
      name: "React",
    },
    {
      icon: (size: number) => <SiNextdotjs size={size} />,
      name: "Next.js",
    },
    {
      icon: (size: number) => <SiTailwindcss size={size} />,
      name: "Tailwind CSS",
    },
    {
      icon: (size: number) => <FaNodeJs size={size} />,
      name: "Node.js",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col"
    >
      <div className="container mx-auto py-16">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-10"
        >
          <div className="xl:w-1/3 w-full flex flex-col gap-6">
            <p className="text-4xl">Why hire me?</p>
            <p className="text-white/70 text-sm">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit
            </p>
            <TabsList className="flex flex-col gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="skill">Skill</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
            </TabsList>
          </div>
          <div className="flex-1 min-h[70vh]">
            <TabsContent value="experience">
              <Experience />
            </TabsContent>
            <TabsContent value="skill">
              <Skills />
            </TabsContent>
            <TabsContent value="about">
              <About />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="flex flex-col gap-6 text-center xl:text-left ">
      <p className="text-4xl">Experience</p>
      <p className="text-white/70 text-sm">
        {" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit
      </p>
      <div className="xl:grid xl:grid-cols-2 flex flex-col gap-6">
        {experience.info.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 bg-[#232329] px-8 py-8 rounded-[6px]"
          >
            <p className="text-sm text-accent ">{item.date}</p>
            <p className="text-xl">{item.title}</p>
            <p className="text-white/70 text-sm">{item.company}</p>
            <p className="text-white/70 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="flex flex-col gap-6 text-center xl:text-left ">
      <p className="text-4xl">My Skills</p>
      <p className="text-white/70 text-sm">
        {" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit
      </p>
      <div className="grid grid-cols-4  flex-wrap gap-y-10">
        {skills.info.map((item, index) => (
          <div
            key={index}
            className="flex justify-center bg-[#232329] h-40 w-40 items-center rounded-[6px]"
          >
            <ReusableTooltip
              tooltipContent={item.name}
              triggerContent={
                <div className="flex justify-center hover:text-accent duration-500 cursor-pointer transition-all del">
                  {item.icon(75)}
                </div>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="flex flex-col gap-6 text-center xl:text-left ">
      <p className="text-4xl">About Me</p>
      <p className="text-white/70 text-sm">
        {" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit
      </p>
      <div className="xl:grid xl:grid-cols-2 flex flex-col">
        {about.info.map((item, index) => (
          <div key={index} className="flex gap-2 p-4 rounded-[6px]">
            <p className=" text-white/50 ">{item.fieldName}</p>
            <p className="">{item.fieldValue}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
