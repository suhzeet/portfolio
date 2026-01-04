"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  slideInLeft,
  slideInRight,
} from "@/utils/animations";

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects = [
    {
      number: "01",
      title: "SideJobs - Job Platform ",
      description:
        "A full-stack MERN platform connecting freelancers with clients. Features secure authentication, dynamic job postings, and a seamless application process.",
      technologies: "React.JS, Node.JS, Express.JS, MongoDB",
      livedemo: "https://sidejobs.vercel.app/",
      github: "https://github.com/suhzeet/sideJobs-frontend",
      image: "/assets/images/sidejobs.png",
      alt: "sidejobs screenshot",
    },
    {
      number: "02",
      title: "To-Do List App",
      description:
        "A sleek and efficient React.js to-do application for managing daily tasks. Add, edit, delete, and mark tasks as complete to boost your productivity.",
      technologies: "HTML, CSS, JS, React.JS",
      livedemo: "https://todo-list-suhzeet.netlify.app/",
      github: "https://github.com/suhzeet/To-Do-List",
      image: "/assets/images/ToDoList.png",
      alt: "to-do list app screenshot",
    },
    {
      number: "03",
      title: "Aakashvani - Weather App",

      description:
        "A real-time weather application providing accurate forecasts for any location worldwide. Features dynamic UI updates, temperature and condition insights.",
      technologies: "HTML, CSS, JS",
      livedemo: "https://aakashvani-suzeet.netlify.app/",
      github: "https://github.com/suhzeet/Aakashvani",
      image: "/assets/images/Aakashvani.png",
      alt: "aakashvani weather app screenshot",
    },

    {
      number: "04",
      title: "Guess a Number Game",
      description:
        "A fun and interactive browser-based game where players guess a secret number. Features instant feedback, a score-tracking system, and a high-score leaderboard.",
      technologies: "HTML, CSS, JS",
      livedemo: "https://suhzeet.github.io/guess-a-number/",
      github: "https://github.com/suhzeet/guess-a-number",
      image: "/assets/images/guessNumber.png",
      alt: "guess a number game screenshot",
    },
  ];

  const currentProject = projects[currentProjectIndex];

  const goToNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      id="projects"
      className=" container  max-w-6xl mx-auto py-8 md:py-20 flex items-center justify-center scroll-mt-20"
    >
      <section>
        <ul>
          <li
            key={currentProject.title}
            className=" grid grid-cols-1 lg:grid-cols-2 h-100 "
          >
            <div className=" flex flex-col text-left mx-auto lg:text-left gap-8 min-w-[350px] sm:min-w-[500px] max-w-[550px]">
              <motion.p
                {...fadeIn}
                transition={{ delay: 0.5, duration: 0.3 }}
                className=" text-5xl sm:text-6xl text-gray-200"
              >
                {currentProject.number}{" "}
              </motion.p>
              <motion.h2
                {...slideInLeft}
                transition={{ delay: 0.3, duration: 0.3 }}
                className=" text-2xl sm:text-3xl font-semibold"
              >
                {currentProject.title}{" "}
              </motion.h2>
              <motion.p
                {...slideInLeft}
                transition={{ delay: 0.3, duration: 0.3 }}
                className=" text-md text-gray-400"
              >
                {currentProject.description}{" "}
              </motion.p>
              <motion.div
                {...fadeIn}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <p className=" text-primary mb-8">
                  {" "}
                  {currentProject.technologies}{" "}
                </p>
                <hr className=" text-gray-600 border " />
              </motion.div>
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.5, duration: 0.4 }}
                className=" flex gap-6 items-center justify-start"
              >
                <Link
                  href={currentProject.livedemo}
                  title="Live Demo"
                  target="_blank"
                  className="text-xl sm:text-2xl p-3 sm:p-4 bg-card-bg rounded-full hover:text-primary duration-300 "
                >
                  <FaExternalLinkAlt />
                </Link>
                <Link
                  href={currentProject.github}
                  title="GitHub repository"
                  target="_blank"
                  className=" text-xl sm:text-2xl p-3 sm:p-4 bg-card-bg rounded-full hover:text-primary  duration-300"
                >
                  <FaGithub />
                </Link>
              </motion.div>
            </div>
            <motion.div
              {...slideInRight}
              transition={{ delay: 0.3, duration: 0.3 }}
              className=" pr-8 hidden lg:inline overflow-hidden max-w-[550px] min-w-[500px] "
            >
              <Image
                src={currentProject.image}
                alt={currentProject.alt}
                width={400}
                height={600}
                className=" w-full overflow-hidden h-full object-cover rounded-sm hover:scale-102 duration-300 "
              />
            </motion.div>
          </li>
        </ul>
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="flex gap-2 justify-end lg:items-center mt-2 sm:mt-4 pr-2 sm:pr-8"
        >
          <button
            onClick={goToPreviousProject}
            title="Previous project"
            className="text-black bg-primary p-2 text-2xl rounded-sm cursor-pointer"
          >
            <IoIosArrowBack />
          </button>
          <button
            title="Next project"
            onClick={goToNextProject}
            className="text-black bg-primary p-2 text-2xl rounded-sm cursor-pointer"
          >
            <IoIosArrowForward />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
