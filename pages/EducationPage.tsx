import React from "react";

const educationData = [
  {
    year: "2016-2020",
    institution: "University of Kelaniya, Sri Lanka",
    degree: "BSc. (Hons.) in Software Engineering",
    details: ["Activities and societies: Junior Treasurer of Tamil Students'"],
    image: "https://ditmis.kln.ac.lk/std/logo.png",
  },
  {
    year: "2013",
    institution: "MU/Vidyananda college, Sri Lanka",
    degree: "G.C.E. Advanced Level - Mathematics Stream",
    details: [],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhiRzqbDZXYirS52fmLBpclZs6NvaHQlKrQ&s",
  },
];

const Education = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start">
      {/* Left Side - Education Title */}
      <div className="md:w-1/3 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Education
        </h2>
        <div className="border-b-2 border-purple-500 w-20 mt-2"></div>
      </div>

      {/* Right Side - Education List */}
      <div className="md:w-2/3 space-y-10">
        {educationData.map((edu, index) => (
          <div key={index} className="flex items-start gap-6">
            {/* Image */}
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={edu.image}
                alt="Education"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Education Details */}
            <div>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                {edu.year}
              </p>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {edu.institution}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{edu.degree}</p>
              <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
