import Image from "next/image";
import React from "react";

const Achievements = () => {
  return (
    <div className="container max-w-6xl mx-auto py-20">
      <section>
        <h1 className=" text-4xl font-semibold mb-8 ">Achievements</h1>

        <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Won Hackathon as 3rd, IS Hackathon 2024",
              issuer: "IS CLUB - KUSOM",
              image: "/isHackathon.JPG",
            },
            {
              title: "Finalist, DeekHack Hackathon 2023",
              issuer: "DeerHack - DEERWALK",
              image: "/deerhack.JPG",
            },
            {
              title: "Achievement loading...",
              issuer: "",
              image: "/",
            },
          ].map((item, index) => (
            <li
              key={index}
              className=" flex flex-col  bg-card-bg   rounded-lg cursor-pointer hover:scale-102 duration-300 overflow-hidden "
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={200}
                className=" rounded-t-lg hover:scale-102 duration-300"
              />
              <div className=" p-6">
                <h3 className=" text-xl">{item.title}</h3>
                <p className=" text-sm text-primary mt-2">{item.issuer}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Achievements;
