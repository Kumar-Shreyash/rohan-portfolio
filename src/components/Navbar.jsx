import gsap from "gsap";
import { useEffect, useState } from "react";
import resume from "../assets/Rohan_Kumar_Gupta.pdf";
import rohan from "../assets/rohan.webp";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResumeClick = () => {
    window.open(resume, "_blank");

    const link = document.createElement("a");
    link.href = resume;
    link.download = "Rohan_Kumar_Gupta.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // GSAP animation on load
  useEffect(() => {
    const tl = gsap.timeline();
    tl.set(".gsap", { opacity: 0, y: -70 });
    tl.set(".gsap1", { opacity: 0, y: 70 });

    tl.to(".gsap", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: 0.2,
      stagger: 0.3,
    });

    tl.to(".gsap1", {
      opacity: 1,
      y: 0,
    });
  }, []);

  // Disable scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Background blur overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm z-40 lg:hidden"></div>
      )}

      <nav className="sticky top-0 z-50 bg-white shadow-md px-5 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold gsap">
          <img className="w-15" src={rohan} alt="Logo" />
        </div>

        {/* Hamburger Button */}
        <button
          className="lg:hidden focus:outline-none z-50 group p-2 rounded-md hover:bg-green-100 transition duration-300"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5 flex flex-col justify-between items-center">
            <span
              className={`block h-0.5 w-full bg-green-600 transform transition duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-green-600 transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-green-600 transform transition duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Nav Links */}
        <div
          className={`flex flex-col lg:flex-row lg:items-center lg:gap-6 absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none transition-all duration-300 overflow-hidden lg:overflow-visible z-50
          ${
            menuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 lg:opacity-100 lg:max-h-full"
          }
        `}
        >
          {[
            "About",
            "Skills",
            "Projects",
            "Education",
            "Experience",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="gsap px-4 py-3 lg:py-2 border-b lg:border-0 border-gray-200 lg:border-transparent text-center font-medium text-gray-800 hover:text-green-600 hover:border-green-400 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button
            onClick={() => {
              handleResumeClick();
              setMenuOpen(false);
            }}
            className="gsap1 m-2 lg:ml-0 px-4 py-2 bg-green-500 text-white font-semibold rounded hover:rounded-full hover:cursor-pointer hover:bg-green-600 transition"
          >
            Resume
          </button>
        </div>
      </nav>
    </>
  );
};
