import habitHole from "../assets/habitHole.png";
import onlyPlans from "../assets/onlyPlans.png";
import skillBound from "../assets/skillBound.png";

import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

export const Project = () => {
  const iconMap = {
    JavaScript: <SiJavascript className="inline-block mr-1 text-yellow-500" />,
    HTML5: <SiHtml5 className="inline-block mr-1 text-orange-600" />,
    CSS: <SiCss3 className="inline-block mr-1 text-blue-600" />,
    Firebase: <SiFirebase className="inline-block mr-1 text-yellow-400" />,
    React: <SiReact className="inline-block mr-1 text-blue-400" />,
    TailwindCSS: <SiTailwindcss className="inline-block mr-1 text-teal-400" />,
    Redux: <SiRedux className="inline-block mr-1 text-green-700" />,
    NodeJs: <SiNodedotjs className="inline-block mr-1 text-green-600" />,
    Express: <SiExpress className="inline-block mr-1 text-gray-700" />,
    MongoDB: <SiMongodb className="inline-block mr-1 text-green-700" />,
  };

  const projects = [
    {
      title: "Habit-Hole",
      img: habitHole,
      description:
        "A Habit tracker Web Application for users to track their habits and stick with it.",
      techStack: ["JavaScript", "HTML5", "CSS", "Firebase"],
      liveLink: "https://habit-hole.netlify.app/",
      githubLink: "https://github.com/Kumar-Shreyash/Habit-Tracker",
    },
    {
      title: "Only-Plans",
      img: onlyPlans,
      description:
        "A Digital tracker Web Application for users to track their habits, Mental Health, Daily Journal Entry and Todo list with drag and drop.",
      techStack: ["React", "Firebase", "TailwindCSS", "Redux"],
      liveLink: "https://only-plans.netlify.app/",
      githubLink: "https://github.com/Kumar-Shreyash/OnlyPlans-Project",
    },
    {
      title: "Skill-Bound",
      img: skillBound,
      description:
        "An Online Course Marketplace that bridges the gap between Instructors and Learners and provide them with simple yet useful platform.",
      techStack: ["NodeJs", "Express", "MongoDB", "React", "TailwindCSS"],
      liveLink: "https://skill-bound.netlify.app/",
      githubLink: "https://github.com/Kumar-Shreyash/Skill-Bound-Backend",
    },
  ];

  return (
    <div id="projects" className="min-h-screen p-10 bg-gray-50 font-sans">
      <h2 className="mt-10 text-5xl md:text-5xl text-center font-bold mb-14 text-gray-900">
        Projects
      </h2>

      <div className="flex flex-col md:flex-row gap-10 md:gap-8 justify-center flex-wrap">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-full max-w-md md:w-[400px] bg-white rounded-2xl shadow-lg p-6
              transform transition-transform duration-300 ease-in-out
              hover:scale-105 hover:-translate-y-1 hover:shadow-green-400 cursor-pointer flex flex-col"
          >
            <img
              src={project.img}
              alt={project.title}
              className="rounded-lg mb-4 object-cover h-48 w-full"
            />

            <h3 className="text-2xl font-semibold mb-2 text-gray-900">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-4">{project.description}</p>

            <p className="font-semibold mb-2 text-gray-900">Tech Stack</p>
            <ul className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech, i) => (
                <li
                  key={i}
                  className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium flex items-center"
                >
                  {iconMap[tech] || null}
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center flex-1 text-center bg-green-600 text-white py-2 rounded-lg
                  hover:bg-green-700 hover:scale-105 transition-transform duration-300"
              >
                <FiExternalLink className="mr-2 text-lg" />
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center flex-1 text-center border border-green-600 text-green-600 py-2 rounded-lg
                  hover:bg-green-600 hover:text-white hover:scale-105 transition-transform duration-300"
              >
                <FaGithub className="mr-2 text-lg" />
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
