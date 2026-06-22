import resume from "../assets/Rohan_Kumar_Gupta.pdf";
import rohandp from "../assets/rohandp.jpeg";
import { useEffect, useState } from "react";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200); // fade in effect
  }, []);

  const handleResumeClick = () => {
    window.open(resume, "_blank");

    const link = document.createElement("a");
    link.href = resume;
    link.download = "Rohan_Kumar_Gupta.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className={`min-h-screen px-6 py-16 flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50 transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Profile Image */}
        <div className="relative group w-72 aspect-square mx-auto rounded-full shadow-2xl border-8 border-green-600 overflow-hidden transform transition-transform duration-700 ease-in-out hover:scale-110 hover:shadow-green-400/50">
          <img
            src={rohandp}
            alt="Rohan Kumar Gupta"
            className="w-full h-full object-cover cursor-pointer rounded-full"
          />
          <div className="absolute inset-0 rounded-full border-4 border-green-300 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-[-1]" />
        </div>

        {/* About Content */}
        <div className="text-center md:text-left space-y-6 px-4 sm:px-0">
          <h2 className="text-5xl sm:text-5xl font-extrabold text-green-700 tracking-wide leading-tight">
            Rohan Kumar Gupta
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800 tracking-wide">
            Data Analyst
          </h3>

          <p className="text-gray-700 text-lg max-w-xl mx-auto md:mx-0 leading-relaxed tracking-wide">
            Data Analyst with a background in Software Engineering, skilled at
            transforming raw data into actionable insights. Experienced across
            the full data lifecycle—from querying and cleaning data to building
            dashboards and communicating findings effectively.
          </p>

          {/* Skill Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto md:mx-0">
            {[
              { title: "Languages", skills: "C, Java, Python, SQL, R" },
              { title: "Libraries", skills: "NumPy, Pandas, Matplotlib" },
              {
                title: "Tools",
                skills: "Microsoft PowerPoint, Microsoft Word, Microsoft Excel",
              },
              {
                title: "Soft Skills",
                skills: "Problem Solving, Data Analysis, Adaptability",
              },
            ].map(({ title, skills }) => (
              <div
                key={title}
                className="bg-green-100 p-5 rounded-xl shadow-md border border-green-200"
              >
                <h4 className="text-lg font-semibold text-green-700 mb-1">
                  {title}
                </h4>
                <p className="text-gray-700 text-sm">{skills}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start mt-6">
            <a
              href="#projects"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300 ease-in-out text-lg"
            >
              View Projects
            </a>
            <button
              onClick={handleResumeClick}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300 ease-in-out text-lg"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
