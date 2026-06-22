import python from "../assets/python.svg";
import c from "../assets/letter-c.png";
import sql from "../assets/sql.png";
import r from "../assets/r.png";
import java from "../assets/java.png";
import matplotlib from "../assets/matplotlib.png";
import numpy from "../assets/numpy.png";
import pandas from "../assets/pandas.png";
import excel from "../assets/excel.png";
import word from "../assets/word.png";
import powerpoint from "../assets/powerpoint.png";

import vscode from "../assets/vscode.svg";
import postman from "../assets/postman.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import vite from "../assets/vite.svg";
import npm from "../assets/npm.svg";

export const Skills = () => {
  const techStack = [
    { name: "Python", img: python },
    { name: "C", img: c },
    { name: "R", img: r },
    { name: "Java", img: java },
    { name: "SQL", img: sql },
    { name: "NumPy", img: numpy },
    { name: "Pandas", img: pandas },
    { name: "Matplotlib", img: matplotlib },
  ];

  const tools = [
    { name: "MS Exel", img: excel },
    { name: "MS Powerpoint", img: powerpoint },
    { name: "MS Word", img: word },
  ];

  const cardStyles = `
    flex flex-col items-center text-gray-700 bg-white 
    rounded-xl border border-transparent p-4 
    hover:border-green-500 hover:shadow-xl hover:shadow-green-100
    hover:scale-110 hover:-rotate-1
    transition-all duration-300 ease-in-out
  `;

  return (
    <div id="skills" className="p-10 max-w-5xl mx-auto font-sans">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-gray-900 text-center mt-10 whitespace-nowrap overflow-x-auto">
        Tech Stack & Tools
      </h1>

      {/* Tech Stack Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-green-600 inline-block">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {techStack.map((tech) => (
            <div key={tech.name} className={cardStyles}>
              <img
                src={tech.img}
                alt={tech.name}
                className="w-16 h-16 mb-3 object-contain"
              />
              <p className="text-lg font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-green-600 inline-block">
          Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <div key={tool.name} className={cardStyles}>
              <img
                src={tool.img}
                alt={tool.name}
                className="w-16 h-16 mb-3 object-contain"
              />
              <p className="text-lg font-medium">{tool.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
