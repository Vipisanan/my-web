import React from "react";

const skills = [
  {
    category: "MARKETING",
    skills: [
      { name: "Account management", level: 80 },
      { name: "Strategic and Social selling", level: 75 },
    ],
  },
  {
    category: "DATA ANALYSIS",
    skills: [
      {
        name: "Proficient in Customer Relationship Management software",
        level: 85,
      },
    ],
  },
];

const Skills = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Section Title */}
      <div className="mb-10">
        <p className="text-sm uppercase font-semibold text-gray-600 dark:text-gray-400">
          What I Can Do
        </p>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Skills & Proficiencies
        </h2>
        <div className="border-b-2 border-purple-500 w-20 mt-2"></div>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {skills.map((skillCategory, index) => (
          <div key={index}>
            <h3 className="font-bold text-gray-800 dark:text-white mb-4">
              {skillCategory.category}
            </h3>
            {skillCategory.skills.map((skill, i) => (
              <div key={i} className="mb-4">
                <p className="text-gray-700 dark:text-gray-300">{skill.name}</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gray-800 dark:bg-gray-300 h-3 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
