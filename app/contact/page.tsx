"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import Link from "next/link";

import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col  py-12 xl:px-0"
    >
      <div className="flex gap-16 ">
        <div className="w-7/12  bg-[#232329] min-h-[70vh] px-12 py-12 rounded-[8px]">
          <p className="text-2xl text-accent">Let&apos;s work together</p>
          <p className=" text-white/60 leading-8 text-sm mt-4">
            I am available for freelance work. Connect with me through the
            following platforms.{" "}
          </p>
          <div className="flex flex-col gap-6 mt-4 ">
            <div className="flex gap-4 items-center">
              <Input placeholder="Firstname" />
              <Input placeholder="Lastname" />
            </div>
            <div className="flex gap-4  items-center">
              <Input className="" placeholder="Email address" />
              <Input placeholder="Phone number" />
            </div>

            <Textarea
              placeholder="Type your message here"
              className="h-[300px]"
            />
          </div>

          <Button className="bg-accent text-primary px-6 rounded-full mt-6">Send Message</Button>
        </div>
        <div className="w-5/12 flex flex-col gap-12 justify-center pl-12">
          <div className="flex gap-4">
            <div className=" flex text-accent h-16 w-16 justify-center items-center bg-[#232329]">
              <FaPhoneAlt size={20} />
            </div>
            <div className="flex pt-3 flex-col justify-between content-between">
              <p className="text-white/60 text-sm">Phone</p>
              <p className="  text-lg">(+91) 8795401994</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className=" flex text-accent h-16 w-16 justify-center items-center bg-[#232329]">
              <FaEnvelope size={20} />
            </div>
            <div className="flex pt-3 flex-col justify-between content-between">
              <p className="text-white/60 text-sm">Email</p>
              <Link href="mailto:imsandeep8795@gmail.com">
                imsandeep8795@gmail.com
              </Link>
            </div>
          </div>
          <div className="flex gap-4">
            <div className=" flex text-accent h-16 w-16 justify-center items-center bg-[#232329]">
              <FaLinkedin size={20} />
            </div>
            <div className="flex pt-3 flex-col justify-between content-between">
              <p className="text-white/60 text-sm">LinkedIn</p>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/sandeep-sharma2/"
                className="  text-lg"
              >
                {" "}
                Sandeep Sharma
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
