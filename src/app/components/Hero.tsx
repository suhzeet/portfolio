"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="py-20 container max-w-6xl h-max-vh mx-auto ">
      <div className=" mx-auto text-center grid grid-cols-2 gap-12 items-center   ">
        <div className="  text-left">
          <p className=" mb-4 text-gray-200 text-md">Web Developer</p>
          <h1 className=" text-4xl md:text-6xl font-bold mb-8">
            Hello I'm{" "}
            <span className="text-primary block mt-2">Sujit Neupane</span>
          </h1>
          <p className=" text-gray-300 text-sm mt-8">
            Turning ideas into clean, functional code. Building digital
            experiences that just work.
          </p>

          <div className=" flex justify-start items-center space-x-6 mt-8 ">
            <Link
              href="/"
              className=" text-md px-8 py-2 rounded-2xl ring-1 ring-primary text-primary hover:bg-primary hover:text-dark transition-colors duration-300 "
            >
              Download CV <FiDownload className=" inline" />
            </Link>
            <Link
              href="/"
              className=" text-md  text-primary  rounded-full ring-1 ring-primary hover:bg-primary hover:text-dark p-2 transition-colors duration-300 "
            >
              <FaGithub />
            </Link>
            <Link
              href="/"
              className=" text-md  text-primary  rounded-full ring-1 ring-primary hover:bg-primary hover:text-dark p-2 transition-colors duration-300 "
            >
              <FaLinkedin />
            </Link>
            <Link
              href="/"
              className=" text-md  text-primary  rounded-full ring-1 ring-primary hover:bg-primary hover:text-dark p-2 transition-colors duration-300 "
            >
              <FaInstagram />
            </Link>
            <Link
              href="/"
              className=" text-md  text-primary  rounded-full ring-1 ring-primary hover:bg-primary hover:text-dark p-2 transition-colors duration-300 "
            >
              <FaXTwitter />
            </Link>
          </div>
        </div>

        <div className=" flex justify-center items-center ">
          <Image
            src="/profile.png"
            alt="profile image"
            width={400}
            height={400}
            className=" rounded-full ring-2 ring-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
