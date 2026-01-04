"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { scaleIn, slideInLeft, slideInRight } from "@/utils/animations";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div
      id="contact"
      className=" container max-w-6xl py-4 pb-6 lg:py-4 flex items-center justify-center  "
    >
      <div className=" grid grid-cols-1 items-center md:grid-cols-2 gap-4 lg:gap-12 pr-0 sm:pr-4 lg:pr-8">
        {/* contact info */}
        <motion.div
          {...slideInLeft}
          transition={{ delay: 0.3, duration: 0.3 }}
          className=" space-y-8 py-4 pb-12 sm:py-0 pl-0 sm:pl-6 lg:pl-18 order-2 md:order-1 mx-auto"
        >
          <div className=" space-y-6 mt-6">
            <div className=" flex items-center gap-4">
              <motion.div
                {...scaleIn}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <FaPhone className="text-4xl text-primary bg-card-bg p-2 rounded-lg" />
              </motion.div>
              <div>
                <h3 className=" font-semibold">Phone</h3>
                <Link
                  href="tel:+9779841106557"
                  className=" text-gray-400 hover:text-primary"
                >
                  +977-9841106557
                </Link>
              </div>
            </div>
            <div className=" flex items-center gap-4">
              <motion.div
                {...scaleIn}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <FaEnvelope className=" text-4xl text-primary bg-card-bg p-2 rounded-lg" />
              </motion.div>
              <div>
                <h3 className=" font-semibold">Email</h3>
                <Link
                  href="mailto:sujeetneupane28@gmail.com"
                  className=" text-gray-400 hover:text-primary"
                >
                  sujeetneupane28@gmail.com
                </Link>
              </div>
            </div>
            <div className=" flex items-center gap-4">
              <motion.div
                {...scaleIn}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                {" "}
                <FaLocationPin className="text-4xl text-primary bg-card-bg p-2 rounded-lg" />
              </motion.div>
              <div>
                <h3 className=" font-semibold">Location</h3>
                <p className=" text-gray-400 hover:text-primary">
                  Bharatpur-11, Chitwan, Nepal
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* contact */}
        <motion.div
          {...slideInRight}
          transition={{ delay: 0.3, duration: 0.3 }}
          className=" mx-auto bg-card-bg rounded-md min-h-130 p-6 min-w-[300px] max-w-[400px] sm:max-w-[500px] order-1 md:order-2"
        >
          <h2 className=" text-3xl font-semibold text-primary">Get in Touch</h2>
          <p className=" text-gray-400 w-full mb-6 mt-4 text-sm">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <form onSubmit={handleSubmit} action="" className=" space-y-6">
            <div>
              <label
                htmlFor="name"
                className=" block text-md mb-2 text-gray-200"
              >
                Name
              </label>
              <input
                required
                value={formData.name}
                onChange={handleChange}
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-md outline-none  bg-dark focus:ring-1 focus:ring-primary focus:border-none placeholder:text-gray-500 "
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className=" block text-md mb-2 text-gray-200"
              >
                Email
              </label>
              <input
                required
                value={formData.email}
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md outline-none  bg-dark focus:ring-1 focus:ring-primary focus:border-none placeholder:text-gray-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className=" block text-md mb-2 text-gray-200"
              >
                Message
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                name="message"
                id="message"
                placeholder="Enter your message"
                className="w-full px-4 py-2 rounded-md outline-none  bg-dark focus:ring-1 focus:ring-primary focus:border-none placeholder:text-gray-500 "
              />
            </div>
            <motion.button
              {...scaleIn}
              transition={{ delay: 0.5, duration: 0.3 }}
              type="submit"
              className="  btn btn-primary text-black cursor-pointer "
            >
              {status === "loading" ? "Sending..." : "Send message"}
            </motion.button>

            {status === "success" && (
              <p className=" ml-6 inline text-green-500 text-center text-sm">
                Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className=" ml-6 inline text-red-500 text-center text-sm ">
                Failed. Please try again!
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
