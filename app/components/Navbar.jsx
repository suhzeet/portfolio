"use client";

import { IoMoonOutline } from "react-icons/io5";

import React from "react";
import Image from "next/image";
import Logo from "@/app/assets/logo.png";

function Navbar() {
  return (
    <div className=" w-screen flex align-center justify-center text-white">
      <nav className=" w-[80%] mt-2 flex items-center justify-between p-4 px-8 ">
        <a href="#" className="relative w-[58px] h-[72px]">
          <Image
            src={Logo}
            fill
            alt="sujit image"
            className=" rounded-xl shadow-xl object-cover"
          />
        </a>
        <ul className="flex gap-12 py-4 px-16 text-2xl font-[500] shadow-2xl-white text-[#5e6271]">
          <li className=" hover:text-white text-white border-b-4 border-b-solid pb-1 border-b-[#ffc257]">
            <a href="#">Home</a>
          </li>
          <li className=" hover:text-white">
            <a href="#">Skills</a>
          </li>
          <li className=" hover:text-white">
            <a href="#">Achievements</a>
          </li>
          <li className=" hover:text-white">
            <a href="#">Projects</a>
          </li>
          <li className=" hover:text-white">
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="flex align-center justify-center ">
          <IoMoonOutline className=" w-8 h-8" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
