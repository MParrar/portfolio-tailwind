import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I’m a versatile software developer passionate about learning and
          adapting to new technologies. I thrive on solving problems and
          building efficient, scalable solutions, regardless of the tools or
          frameworks involved.
        </p>
        <br />
        <p className="text-xl">
          Outside of work, I’m committed to cultivating a healthy lifestyle. I
          enjoy staying active through sports and developing habits that support
          both physical and mental well-being. For me, balance is key to fueling
          creativity and maintaining focus in my career.
        </p>
      </div>
    </div>
  );
};

export default About;
