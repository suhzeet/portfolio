"use client";

import React from "react";
import { BsGithub } from "react-icons/bs";
import { DiMongodb } from "react-icons/di";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { scaleIn, slideInLeft } from "@/utils/animations";

const About = () => {
  return (
    <div className="container max-w-6xl mx-auto py-12 md:pb-20 md:py-20">
      <section className=" grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* bio section */}
        <div>
          <motion.h1
            {...slideInLeft}
            transition={{ delay: 0.3, duration: 0.3 }}
            className=" text-4xl font-semibold mb-8 "
          >
            Why hire me?
          </motion.h1>
          <motion.p
            {...slideInLeft}
            transition={{ delay: 0.4, duration: 0.3 }}
            className=" text-lg mt-12 text-gray-200"
          >
            Eager student and aspiring front-end developer, passionate about
            building clean, user-friendly websites and continuously learning new
            technologies.
          </motion.p>
          <ul className=" grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {[
              {
                title: "Name",
                value: "Sujit Neupane",
              },
              {
                title: "Phone",
                value: "+977-9841106557",
              },
              {
                title: "Nationality",
                value: "Nepali",
              },
              {
                title: "Email",
                value: "sujeetneupane28@gmail.com",
              },
              {
                title: "Freelance",
                value: "Available",
              },
              {
                title: "Languages",
                value: "English, Nepali",
              },
            ].map((item, index) => (
              <li key={index} className="flex gap-4 items-center">
                <motion.h3
                  {...slideInLeft}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className=" text-sm text-gray-400  "
                >
                  {item.title}{" "}
                </motion.h3>
                <motion.p
                  {...scaleIn}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  {item.value}{" "}
                </motion.p>
              </li>
            ))}
          </ul>
        </div>

        {/* skills section */}
        <div>
          <motion.h2
            {...slideInLeft}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="text-3xl font-semibold"
          >
            My Skills
          </motion.h2>
          {/* <p className=" mt-4 text-sm text-gray-400">
            These are the skills I have learned:
          </p> */}
          <div>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {[
                { icon: <FaHtml5 className="text-5xl" />, name: "HTML5" },
                { icon: <FaCss3 className="text-5xl" />, name: "CSS3" },
                { icon: <FaJs className="text-5xl" />, name: "JavaScript" },
                { icon: <FaReact className="text-5xl" />, name: "React.JS" },
                {
                  icon: <SiTailwindcss className="text-5xl" />,
                  name: "TailwindCSS",
                },
                { icon: <BsGithub className="text-5xl" />, name: "GitHub" },
                { icon: <DiMongodb className="text-5xl" />, name: "MongoDB" },
                { icon: <FaNodeJs className="text-5xl" />, name: "Node.JS" },
              ].map((item, index) => (
                <motion.li
                  {...scaleIn}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  key={index}
                  title={item.name}
                  className="flex flex-col justify-center items-center gap-1 hover:text-primary cursor-pointer transition-colors duration-400 bg-card-bg p-6 rounded-lg hover:scale-105 "
                >
                  {item.icon}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
