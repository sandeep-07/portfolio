import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

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
      date: "2018-2020",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    },
    {
      title: "Backend Developer",
      company: "Facebook",
      date: "2018-2020",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    },
  ],
};

const education = {
  title: "Education",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
  info: [
    {
      title: "Frontend Developer",
      company: "Google",
      date: "2018-2020",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    },
    {
      title: "Backend Developer",
      company: "Facebook",
      date: "2018-2020",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    },
  ],
};

const skills = {
  title: "Skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
  info: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },

  ],
};
const Resume = () => {
  return <div>S</div>;
};

export default Resume;
