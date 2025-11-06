"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import {
  cardHover,
  fadeIn,
  fadeInUp,
  scaleIn,
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
      image: "/sidejobs.png",
    },
    {
      number: "02",
      title: "Omnifood - Food Platform",
      description:
        "A sleek, responsive landing page for a premium food delivery service. Built with pure HTML, CSS, and JS for optimal performance and a seamless user experience.",
      technologies: "HTML, CSS, JS",
      livedemo: "https://omnifood-suhzeet.netlify.app/",
      github: "https://github.com/suhzeet/omnifood-suhzeet",
      image: "/omnifood.png",
    },
    {
      number: "03",
      title: "Guess a Number Game",
      description:
        "A fun and interactive browser-based game where players guess a secret number. Features instant feedback, a score-tracking system, and a high-score leaderboard.",
      technologies: "HTML, CSS, JS",
      livedemo: "https://suhzeet.github.io/guess-a-number/",
      github: "https://github.com/suhzeet/guess-a-number",
      image: "/guessNumber.png",
    },
    {
      number: "04",
      title: "To-Do List App",
      description:
        "A sleek and efficient React.js to-do application for managing daily tasks. Add, edit, delete, and mark tasks as complete to boost your productivity.",
      technologies: "HTML, CSS, JS, React.JS",
      livedemo: "https://todo-list-suhzeet.netlify.app/",
      github: "https://github.com/suhzeet/To-Do-List",
      image: "/todoList.png",
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
    <div className=" container max-w-6xl mx-auto py-20">
      <section>
        <ul>
          <li key={currentProject.title} className=" grid grid-cols-2 h-100 ">
            <div className=" flex flex-col gap-8">
              <motion.p
                {...fadeIn}
                transition={{ delay: 0.5, duration: 0.3 }}
                className=" text-6xl text-gray-200"
              >
                {currentProject.number}{" "}
              </motion.p>
              <motion.h2
                {...slideInLeft}
                transition={{ delay: 0.3, duration: 0.3 }}
                className=" text-3xl font-semibold"
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
                  className=" text-2xl p-4 bg-card-bg rounded-full hover:text-primary duration-300 "
                >
                  <FaExternalLinkAlt />
                </Link>
                <Link
                  href={currentProject.github}
                  title="GitHub repository"
                  target="_blank"
                  className=" text-2xl p-4 bg-card-bg rounded-full hover:text-primary  duration-300"
                >
                  <FaGithub />
                </Link>
              </motion.div>
            </div>
            <motion.div
              {...slideInRight}
              transition={{ delay: 0.3, duration: 0.3 }}
              className=" pr-8 overflow-hidden "
            >
              <Image
                src={currentProject.image}
                alt="sidejobs screenshot"
                width={400}
                height={600}
                className=" w-full h-full object-cover rounded-sm hover:scale-102 duration-300 "
              />
            </motion.div>
          </li>
        </ul>
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="flex gap-2 justify-end items-center mt-4 pr-8"
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
