import cbse from "../assets/cbse.webp";
import jac from "../assets/jac.jpeg";
import jbit from "../assets/jbit.jpeg";

export const Education = () => {
  const educationData = [
    {
      degree: "B. TECH in Computer  Science and Engineering",
      institution: "J B Institute of  Technology, Dehradun",
      year: "2016 - 2020",
      imgSrc: jbit,
      alt: "J B Institute of  Technology, Dehradun",
    },
    {
      degree: "Higher Secondary",
      institution: "S S N M S Inter  College",
      year: "2015",
      imgSrc: jac,
      alt: "S S N M S Inter  College",
    },
    {
      degree: "Matriculation",
      institution: "Rajkamal Saraswati Vidya Mandir",
      year: "2013",
      imgSrc: cbse,
      alt: "Rajkamal Saraswati Vidya Mandir",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 bg-gray-50 font-sans"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10 text-gray-900">
        Education
      </h2>

      <div className="w-full max-w-4xl space-y-12">
        {educationData.map(
          ({ degree, institution, year, imgSrc, alt }, idx) => (
            <div
              key={idx}
              className="flex items-center gap-8 p-6 bg-white rounded-3xl
                       border-l-4 border-green-500 shadow-md
                       hover:shadow-green-400/50 hover:bg-gradient-to-r from-green-50 to-white
                       transition-all duration-400 transform hover:-translate-y-1 cursor-pointer"
            >
              {imgSrc ? (
                <img
                  src={imgSrc}
                  alt={alt}
                  className="w-24 h-24 object-contain rounded-xl shadow-sm
                           transition-all duration-400
                           hover:scale-110 hover:ring-4 hover:ring-green-400"
                />
              ) : (
                <div className="w-24 h-24 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 font-semibold">
                  No Image
                </div>
              )}

              <div>
                <p className="text-xl font-extrabold text-green-600">
                  {degree}
                </p>
                <p className="text-gray-700 mt-1 text-lg">{institution}</p>
                <p className="text-sm text-gray-500 mt-2">{year}</p>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
};
