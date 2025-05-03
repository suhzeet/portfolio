import React from "react";
import Image from "next/image";
import User from "@/app/assets/user-image.png";

function About() {
  return (
    <div id="about" className=" w-screen h-screen bg-[#242734] ">
      <div className=" flex flex-col sm:flex-row gap-16 justify-center items-center px-48 py-28">
        <div className=" w-[50%] h-full flex flex-col gap-4 text-gray-300">
          <div className=" w-[78px] h-[78px] z-50 relative  ">
            <Image
              src={User}
              alt="sujit neupane"
              fill
              className=" object-cover rounded-full"
            />
          </div>
          <p className=" mt-4  text-lg leading-relaxed">
            A passionate web developer with a strong focus on building fast,
            modern, and responsive web applications using{" "}
            <span className=" text-[#ffc257]">React</span> and{" "}
            <span className=" text-[#ffc257]">Next.js</span>. Currently pursuing
            my studies, I continuously explore new technologies to sharpen my
            skills and bring creative ideas to life.
          </p>
          <p className=" text-lg leading-relaxed">
            With a keen eye for detail and a deep interest in{" "}
            <span className=" text-[#ffc257]">UI/UX</span>, I enjoy crafting
            smooth user experiences and writing clean, efficient code. I'm
            always eager to learn, collaborate, and contribute to meaningful
            projects.
          </p>
        </div>
        <div className="w-[50%] text-white flex flex-col justify-center gap-6">
          <h2 className="text-3xl font-bold text-[#ffc257] mb-4">Skills</h2>

          {[
            { name: "HTML", percent: 90 },
            { name: "CSS", percent: 80 },
            { name: "JavaScript", percent: 70 },
            { name: "React.js", percent: 60 },
            { name: "Next.js", percent: 30 },
            { name: "Tailwind CSS", percent: 70 },
          ].map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-lg text-gray-200 font-medium mb-1">
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
              <div className="w-full bg-gray-400 rounded-full h-3">
                <div
                  className="bg-[#c38926] h-3 rounded-full"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
