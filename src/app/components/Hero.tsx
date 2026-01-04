"use client";

import {
  fadeIn,
  fadeInUp,
  slideInLeft,
  slideInRight,
} from "@/utils/animations";
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <section className=" py-8 sm:py-20 container max-w-6xl h-max-vh mx-auto ">
      <div className=" mx-auto text-center grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 items-center   ">
        <div className=" text-center sm:text-left order-2 sm:order-1">
          <motion.p
            {...fadeIn}
            transition={{ delay: 0.4, duration: 0.3 }}
            className=" mb-4 text-gray-200 text-md"
          >
            Web Developer
          </motion.p>
          <motion.h1
            {...slideInLeft}
            transition={{ delay: 0.3, duration: 0.3 }}
            className=" text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
          >
            Hello I&apos;m
            <span className="text-primary block mt-2">Sujit Neupane</span>
          </motion.h1>
          <motion.p
            {...fadeIn}
            transition={{ delay: 0.4 }}
            className=" text-gray-300 text-sm mt-8"
          >
            Turning ideas into clean, functional code. Building digital
            experiences that just work.
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.6, duration: 0.4 }}
            className=" flex flex-row sm:flex-col md:flex-row justify-center sm:justify-start items-center sm:items-start md:items-center gap-6 mt-8 "
          >
            <div>
              <Link
                href="/assets/resume/sujit_neupane_resume.pdf"
                rel="noopener noreferrer"
                target="_blank"
                className=" text-md px-6 py-1 rounded-xl ring-1 ring-primary text-primary hover:bg-primary hover:text-dark hover:scale-105 transition-colors duration-300 block  "
              >
                {/* Mobile */}
                <span className="inline sm:hidden md:inline lg:hidden">
                  CV <FiDownload className="inline ml-1" />
                </span>

                {/* Tablet & Desktop */}
                <span className="hidden sm:inline md:hidden lg:inline">
                  Download CV <FiDownload className="inline ml-1" />
                </span>
              </Link>
            </div>
            <div className=" flex justify-start items-center space-x-6 ">
              <Link
                href="https://github.com/suhzeet"
                target="_blank"
                className=" text-md  text-primary  rounded-full ring-1 ring-primary hover:bg-primary hover:text-dark p-2 transition-colors duration-300  hover:scale-110 "
              >
                <FaGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sujitneupane2002/"
                target="_blank"
                className=" text-md  text-primary  rounded-full ring-1 ring-primary hover:bg-primary hover:text-dark p-2 transition-colors duration-300  hover:scale-110"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://www.instagram.com/sujitneupane.47/"
                target="_blank"
                className=" text-md  text-primary  rounded-full ring-1 ring-primary hover:bg-primary hover:text-dark p-2 transition-colors duration-300  hover:scale-110"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://x.com/suhzeet"
                target="_blank"
                className=" text-md  text-primary  rounded-full ring-1 ring-primary hover:bg-primary hover:text-dark p-2 transition-colors duration-300  hover:scale-110"
              >
                <FaXTwitter />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...slideInRight}
          transition={{ delay: 0.3, duration: 0.3 }}
          className=" flex justify-center items-center h-64 w-64 md:h-84 md:w-84 lg:h-96 lg:w-96 mx-auto order-1 sm:order-2 relative"
        >
          <motion.div
            animate={{
              scale: [1, 0.9, 0.9, 1],
              rotate: [0, 90, 90, 0],
              borderRadius: ["50%", "50%", "20%", "50%"],
            }}
            transition={{
              delay: 1,
              duration: 5,
              ease: easeInOut,
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className=" w-3/3 h-3/3  shadow-md ring-2 ring-primary overflow-hidden absolute inset-0"
          >
            <motion.div
              animate={{
                rotate: [0, -90, -90, 0],
                scale: [1.1, 1.2, 1.2, 1.1],
              }}
              transition={{
                delay: 1,
                duration: 5,
                ease: easeInOut,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="w-full h-full"
            >
              <Image
                src="/assets/images/profile.png"
                alt="profile image"
                width={400}
                height={400}
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
