import React from "react";

const SkillsSection = () => {
  const skills = [
    {
      category: "Backend",
      skills: [
        "Java",
        "Spring Boot",
        "Microservices",
        "Event-driven Microservices",
      ],
    },
    {
      category: "Frontend",
      skills: ["ReactJS", "Redux", "TypeScript", "JavaScript"],
    },
    {
      category: "Tools",
      skills: ["Linux", "Jira", "Git", "Swagger", "Postman"],
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-sm uppercase font-semibold text-gray-600 dark:text-gray-400">
            What I Can Do
          </p>
          <h2 className="text-3xl font-bold ">Skills & Proficiencies</h2>
          <div className="border-b-2 border-purple-500 w-20 mt-2"></div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {skills.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="text-lg text-gray-700 flex items-center gap-2"
                  >
                    <span className="text-green-500">✔️</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
