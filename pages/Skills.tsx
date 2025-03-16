import React from "react";

const skills = [
  {
    category: "Backend Development",
    skills: [
      { name: "Java", level: 90 },
      { name: "Spring Boot", level: 85 },
      { name: "Microservices", level: 80 },
      { name: "Event-driven Microservices", level: 75 },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "ReactJS", level: 85 },
      { name: "Redux", level: 80 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Linux", level: 85 },
      { name: "Jira", level: 80 },
      { name: "Git", level: 90 },
      { name: "Swagger", level: 75 },
      { name: "Postman", level: 80 },
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
        <h2 className="text-3xl font-bold ">Skills & Proficiencies</h2>
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
