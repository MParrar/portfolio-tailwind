import React from "react";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      info: "Weather App, here you can get the weather info of the cities.",
      codeLink: "https://github.com/MParrar/weather-app/tree/main",
    },
    {
      id: 2,
      info: "Cachipún App, here you can play the cachipún game.",
      codeLink: "https://github.com/MParrar/cachipun",
    },
    {
      id: 3,
      info: "To Do List App, here you can add your thing for to do.",
      codeLink: "https://github.com/MParrar/reactjs-todo-list",
    },
    {
      id: 4,
      info: "Quiz App, here you can play a quiz.",
      codeLink: "https://github.com/MParrar/quiz-app",
    },
    {
      id: 5,
      info: "Sell GifCards Front end, here you cana add and sell gif cards.",
      codeLink: "https://github.com/MParrar/super-ratas-front",
    },
    {
      id: 5,
      info: "Sell GifCards API, here you cana add and sell gif cards.",
      codeLink: "https://github.com/MParrar/super_ratas_api",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, info, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <span className="flex justify-center text-center p-2">
                {info}
              </span>
              <div className="flex items-center justify-center mb-3">
                <a href={codeLink} target="_blank">
                  <FaGithub size={30} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
