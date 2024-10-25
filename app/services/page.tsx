"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
const services = [
  {
    name: "Web Development",
    description:
      "Crafting high-performance web applications with cutting-edge technologies to deliver responsive and user-friendly digital solutions.",
    num: "01",
  },
  {
    name: "UI/UX Design",
    description:
      "Designing captivating and seamless user experiences for both Android and iOS platforms, prioritizing accessibility and aesthetic appeal.",
    num: "02",
  },
  {
    name: "AWS Solutions",
    description:
      "Implementing robust, scalable AWS infrastructure to ensure secure, efficient cloud solutions tailored to your business needs.",
    num: "03",
  },
  {
    name: "SEO Optimization",
    description:
      "Enhancing website visibility through proven SEO techniques, helping you reach a broader audience and rank higher on search engines.",
    num: "04",
  },
];

const AboutPage = () => {
  return (
    <div className="py-12 flex flex-col justify-center min-h-[80vh] xl:py-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2.4,
            duration: 0.4,
            ease: "easeInOut",
          },
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-16 my-auto">
          {services.map((service) => (
            <div key={service.num} className="group">
              <div className="border-b group w-full pb-8 border-white/30 min-h-[280px] pt-12 flex flex-1 flex-col gap-4">
                <div className="flex justify-between">
                  <h1 className="text-5xl text-outline text-transparent text-outline-hover font-extrabold transition-all duration-300 group-hover:text-outline-hover">
                    {service.num}
                  </h1>
                  <div className="bg-slate-100/80 text-primary rotate-45 cursor-pointer hover:-rotate-45 transition-all duration-500 items-center justify-center rounded-full p-2 ">
                    <ArrowRight
                      size="30"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </div>
                </div>
                <h2 className="text-4xl transition-all duration-500 group-hover:text-accent">
                  {service.name}
                </h2>
                <p className="text-sm text-white/60 ">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
