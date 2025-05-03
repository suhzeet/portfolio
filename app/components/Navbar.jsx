"use client";

import { IoMoonOutline } from "react-icons/io5";

import React from "react";
import Image from "next/image";
import Logo from "@/app/assets/logo.png";

function Navbar() {
  return (
    <div className=" relative top-0">
      <div className=" w-screen flex align-center justify-center text-white z-50  ">
        <nav className=" w-[95%] lg:w-[85%] flex items-center justify-between py-2 px-16 shadow-xl rounded-2xl ">
          <a href="#" className="relative w-[50px] h-[60px]">
            <Image
              src={Logo}
              fill
              alt="sujit image"
              className=" rounded-xl shadow-xl object-cover"
            />
          </a>
          <ul className="hidden md:flex md:text-xl gap-6 lg:gap-8 py-4 lg:px-8 lg:text-2xl font-[500] shadow-2xl-white text-[#5e6271] ">
            <li className=" hover:text-white text-white border-b-4 border-b-solid pb-1 border-b-[#ffc257]">
              <a href="">Home</a>
            </li>
            <li className=" hover:text-white">
              <a href="#about">Skills</a>
            </li>
            <li className=" hover:text-white">
              <a href="#achievements">Achievements</a>
            </li>
            <li className=" hover:text-white">
              <a href="#projects">Projects</a>
            </li>
            <li className=" hover:text-white">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="flex align-center justify-center ">
            <IoMoonOutline className=" w-8 h-8" />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
