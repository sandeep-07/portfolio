"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

import { motion } from "framer-motion";
import { ReusableTooltip } from "@/components/Tooltip";
import Image from "next/image";

const about = {
  title: "About Me",
  description: "Frontend Dev excel at bringing designs to life",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sandeep Sharma",
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
      fieldValue: "Enlish, Hindi",
    },
  ],
};

const experience = {
  icon: "",
  title: "Experience",
  description:
    "Experienced Software Engineer with a solid foundation in full-stack development, specializing in crafting scalable applications and UI solutions.",
  info: [
    {
      title: "Founding Frontend Engineer",
      company: "Keychain",
      logo: "/assets/keychain-logo.webp",
      date: "November 2023 - Present",
      description:
        "As a Founding Engineer at Keychain, I improved SEO, built a scalable design system, and developed a revenue-boosting admin tool while enhancing system reliability with error tracking and monitoring",
    },
    {
      title: "Frontent Developer",
      company: "Groww",
      logo: "/assets/groww.jpeg",
      date: "2022- 2023",
      description:
        "At Groww, I enhanced website performance through SDK integrations, bundle size monitoring, and automation tools, contributing to a seamless user onboarding experience",
    },
    {
      title: "Web Intern",
      company: "Groww",
      date: "2021 - 2022",
      logo: "/assets/groww.jpeg",
      description:
        "Made user onboarding flows, and reuable encryption packages hosted on npm",
    },
    {
      title: "App Intern",
      company: "Dashmed",
      date: "2021 - 2021",
      logo: "/assets/download.png",
      description:
        "Developed user flows in React Native for patient appointments, medication reminders enhancing user experience in the medical app.",
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
              Experienced in Next.js, React, and UI/UX, I build high-quality,
              user-centered applications with a proven track record at Keychain
              and Groww.
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
            className="flex flex-col xl:items-start items-center gap-2 bg-[#232329] px-8 py-8 rounded-[6px]"
          >
            <p className="text-sm text-accent ">{item.date}</p>
            <p className="text-xl">{item.title}</p>
            <div className="flex gap-2">
              <p className="">{item.company}</p>
              <Image
                src={item.logo}
                width={20}
                height={20}
                className="object-contain zoom-in-150"
                alt={"logo"}
              />
            </div>
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
