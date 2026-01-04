"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { div } from "framer-motion/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/utils/animations";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/achievements", label: "Achievements" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <nav className=" fixed w-full  backdrop-blur-sm z-50">
      <div className="container max-w-7xl mx-auto px-4 py-2 ">
        <div className="flex items-center justify-between h-16">
          <motion.div
            {...slideInLeft}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <Link href="/" className="text-4xl font-extrabold text-primary">
              sujit<span className="text-white">.</span>
            </Link>
          </motion.div>

          {/* desktop menu */}
          <motion.div
            {...slideInRight}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="hidden md:flex items-center space-x-8"
          >
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg font-semibold border-b-3 pb-1 border-collapse hover:text-primary transition-color ${
                    isActive
                      ? " border-primary text-primary"
                      : "border-transparent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            {/* <button
              onClick={toggleTheme}
              className=" p-2 rounded-lg dark:text-white hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-500 transition-colors cursor-pointer"
            >
              {theme === "dark" ? (
                <SunIcon className="w-8 h-8" />
              ) : (
                <MoonIcon className="w-8 h-8" />
              )}
            </button> */}
          </motion.div>

          {/* mobile menu botton */}
          <button
            className=" md:hidden p-2 rounded-lg hover:bg-gray-600 hover:text-primary dark:hover:bg-gray-800 transition-colors cursor-pointer"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className=" w-8 h-8" />
            ) : (
              <Bars3Icon className=" w-8 h-8" />
            )}
          </button>
        </div>

        {/* mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="py-4 space-y-4">
              {menuItems.map((item, index) => (
                <div key={index} onClick={toggleMobileMenu}>
                  <Link
                    href={item.href}
                    className={` block py-2 text-xl font-semibold hover:text-primary transition-colors `}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}

              {/* <div>
                <button
                  onClick={toggleTheme}
                  className=" flex text-xl font-semibold items-center py-2 hover:text-primary transition-colors"
                >
                  {theme === "dark" ? (
                    <>
                      <SunIcon className="w-6 h-6 mr-2" /> Light mode
                    </>
                  ) : (
                    <>
                      <MoonIcon className="w-6 h-6 mr-2" /> Dark mode
                    </>
                  )}
                </button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
