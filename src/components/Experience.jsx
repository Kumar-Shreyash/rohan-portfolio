import mxp from "../assets/mxp.png";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen w-full flex items-center justify-center py-20 px-4 bg-gray-50 font-sans"
    >
      <div className="w-full max-w-5xl space-y-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800">
          Experience
        </h2>

        {/* ================= Cognizant ================= */}
        <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 md:p-12 hover:scale-[1.03] transform">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <img
              src={mxp}
              alt="MX Player"
              className="w-24 h-24 object-contain rounded-xl shadow transition-transform duration-300 ease-in-out hover:-translate-y-2"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 transition-colors duration-300 hover:text-blue-600">
                MXP Media India Limited
              </h3>
              <p className="text-lg text-gray-700 font-semibold">Internship</p>
              <p className="text-sm text-gray-500">Jan 2022 – May 2022</p>
            </div>
          </div>

          {/* Description Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Worked on platforms like
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Db Visualizer – For Writing SQL codes and Extracting Data from
                  Server(Redshift).
                </li>
                <li>Sisense – Created Databases.</li>
                <li>Also Worked on Firebase and Google Analytics.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Training - At Webtek Labs.
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Course – Data Science using Python & R Language.</li>
                <li>Worked on Python using ANACONDA.</li>
              </ul>
            </div>
          </div>

          {/* Tools */}
          <div className="mt-10">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Tools & Technologies
            </h4>
            <div className="flex flex-wrap gap-3 text-sm text-gray-600">
              <span className="bg-gray-100 px-3 py-1 rounded-full">Excel</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">Python</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">SQL</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Firebase
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">NumPy</span>
            </div>
          </div>

          {/* Reflection */}
          <div className="mt-10">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Personal Reflection
            </h4>
            <p className="text-gray-700 leading-relaxed">
              My internship at MXP Media India Limited strengthened my data
              analysis skills, providing hands-on experience with SQL, Redshift,
              Sisense, Firebase, and Google Analytics. It enhanced my ability to
              transform raw data into meaningful insights and support
              data-driven product decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
