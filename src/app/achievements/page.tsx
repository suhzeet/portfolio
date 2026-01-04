"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft } from "@/utils/animations";

const Achievements = () => {
  return (
    <div
      id="achievements"
      className="container  max-w-6xl mx-auto py-12 md:py-20 flex items-center justify-center "
    >
      <section>
        <motion.h1
          {...slideInLeft}
          transition={{ delay: 0.3, duration: 0.3 }}
          className=" text-4xl text-center md:text-left font-semibold mb-8 "
        >
          Achievements
        </motion.h1>

        <motion.ul
          {...slideInLeft}
          transition={{ delay: 0.5, duration: 0.3 }}
          className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Won Hackathon as 3rd, IS Hackathon 2024",
              issuer: "IS CLUB - KUSOM",
              image: "/assets/images/isHack.JPG",
            },
            {
              title: "Finalist, DeekHack Hackathon 2023",
              issuer: "DeerHack - DEERWALK",
              image: "/assets/images/deerhack.jpg",
            },
            {
              title: "Achieved 100+ wpm typing speed",
              issuer: "monkeytype",
              image: "/assets/images/monkeyType.png",
            },
          ].map((item, index) => (
            <li
              key={index}
              className=" max-w-[400px] flex flex-col mx-auto   bg-card-bg   rounded-lg cursor-pointer hover:scale-102 duration-300 overflow-hidden "
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={200}
                className=" rounded-t-lg hover:scale-102 duration-300"
              />
              <div className=" p-6">
                <motion.h3
                  {...fadeInUp}
                  transition={{ delay: 0.7, duration: 0.3 }}
                  className=" text-xl"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  {...fadeInUp}
                  transition={{ delay: 0.8, duration: 0.3 }}
                  className=" text-sm text-primary mt-2"
                >
                  {item.issuer}
                </motion.p>
              </div>
            </li>
          ))}
        </motion.ul>
      </section>
    </div>
  );
};

export default Achievements;
