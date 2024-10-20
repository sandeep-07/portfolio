"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
const services = [
  {
    name: "Web Development",
    description: "We build web applications using modern technologies.",
    num: "01",
  },
  {
    name: "Mobile Development",
    description: "We build mobile applications for both Android and iOS.",
    num: "02",
  },
  {
    name: "UI/UX Design",
    description:
      "We design user interfaces that are easy to use and intuitive.",
    num: "03",
  },
  {
    name: "SEO Optimization",
    description:
      "We optimize websites for search engines to increase visibility.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto  gap-16 my-auto">
          {services.map((service) => (
            <div key={service.num}>
              <div className="border-b  pb-8 border-white/30 pt-12 flex flex-1 flex-col  gap-4">
                <div className="flex justify-between">
                  <h1 className="text-5xl text-outline text-transparent text-outline-hover font-extrabold transition-all duration-300">
                    {service.num}
                  </h1>
                  <div className="bg-slate-100/80 text-primary  rotate-45 cursor-pointer group-hover:bg-accent hover:-rotate-45 transition-all duration-500 items-center justify-center rounded-full p-2">
                    <ArrowRight
                      size="30"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </div>
                </div>
                <h2 className="text-4xl group-hover:text-accent text-outline-hover transition-all duration-500">
                  {service.name}
                </h2>
                <p className="text-sm text-white/60">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
