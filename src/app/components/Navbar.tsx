"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/utils/animations";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Section-based links (same page)
  const sectionItems = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#achievements", label: "Achievements" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
  ];

  // Route-based link
  const pageItems = [{ href: "/contact", label: "Hire Me" }];

  // Scroll spy logic
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full h-16 backdrop-blur-sm z-50">
      <div className="container max-w-7xl mx-auto px-4 py-4  h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <motion.div
            {...slideInLeft}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <Link href="/" className="text-4xl font-extrabold text-primary">
              sujit<span className="text-white">.</span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            {...slideInRight}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="hidden md:flex items-center  space-x-8"
          >
            {sectionItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg font-semibold   transition-colors
                    ${
                      isActive
                        ? "border-primary text-primary"
                        : "border-transparent hover:text-primary"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {pageItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="ml-4 text-lg px-4 py-1 rounded-xl bg-primary text-dark font-semibold hover:scale-105 transition"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 backdrop-blur-sm z-50">
            {sectionItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 text-xl font-semibold transition-colors
                    ${isActive ? "text-primary" : "hover:text-primary"}`}
                >
                  {item.label}
                </Link>
              );
            })}

            {pageItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-block px-5 py-2 rounded-xl bg-primary text-dark font-semibold hover:scale-105 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
