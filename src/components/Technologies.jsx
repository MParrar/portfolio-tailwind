import React from "react";
import HtmlImage from "../assets/html.png";
import CSSImage from "../assets/css.png";
import JSImage from "../assets/javascript.png";
import ReactImage from "../assets/react.png";
import GitHubImage from "../assets/github.png";
import CSharpImage from "../assets/CSharp.png";

const Technologies = () => {
  const technologies = [
    {
      id: 1,
      src: HtmlImage,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CSSImage,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JSImage,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: ReactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: GitHubImage,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 6,
      src: CSharpImage,
      title: "C#",
      style: "shadow-purple-500",
    },
  ];
  return (
    <div
      name="technologies"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">
            {" "}
            These are the technologies I’m currently using, but I’m always ready
            to explore new ones{" "}
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 text-center gap-8 py-8 sm:px-0">
          {technologies.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img className="w-20 mx-auto" src={src} alt="" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
