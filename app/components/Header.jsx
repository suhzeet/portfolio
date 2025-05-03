import React from "react";
import Image from "next/image";
import Profile from "@/app/assets/profile.png";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Header() {
  return (
    <div className=" w-screen h-screen py-8">
      <div className=" px-16 flex flex-col md:flex-row justify-center items-center gap-8 md:px-18 lg:px-28  ">
        <div className=" w-[50%] flex flex-col gap-28 order-2 md:order-1">
          <div>
            <div className=" text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold ">
              Sujit Neupane.
            </div>
            <p className=" mt-8 text-xl text-gray-300 ">
              - Front-End Web Developer
            </p>
            <div className=" w-18 h-2 mt-12 bg-[#ffc257]"></div>
          </div>
          <div>
            <ul className=" flex gap-4">
              <li>
                <a href="https://github.com/suhzeet" target="_blank">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/sujitneupane2002"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sujitneupane.47/"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className=" rounded-3xl relative overflow-hidden w-[250px] h-[300px] sm:w-[300px] sm:h-[375px] md:w-[400px] md:h-[500px] lg:w-[450px] lg:h-[550px]  shadow-lg z-50  ">
            <Image
              src={Profile}
              alt="sujit neupane"
              fill
              className=" object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
