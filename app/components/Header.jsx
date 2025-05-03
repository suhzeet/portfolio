import React from "react";
import Image from "next/image";
import Profile from "@/app/assets/profile.png";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Header() {
  return (
    <div className=" w-screen py-8">
      <div className=" px-16 flex justify-center items-center gap-6 md:px-24 lg:px-36 ">
        <div className=" w-[50%] flex flex-col gap-32">
          <div>
            <div className=" text-8xl font-bold">Sujit Neupane.</div>
            <div className=" w-18 h-2 mt-8 bg-[#ffc257]"></div>
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
        <div className=" rounded-3xl relative overflow-hidden w-[450px] h-[550px] shadow-lg  ">
          <Image
            src={Profile}
            alt="sujit neupane"
            fill
            className=" object-cover "
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
