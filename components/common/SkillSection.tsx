import React from "react";
import SkillWidget, { SkillDataType } from "../widgets/SkillWidget";
import SlideInText from "../styleComponent/SlideInTextAnimation";

const SkillsSection = () => {
  const skills: SkillDataType[] = [
    {
      category: "⚙️ Backend",
      skills: [
        "Java",
        "Spring Boot",
        "Microservices",
        "Event-driven Microservices",
      ],
    },
    {
      category: "🎨 Frontend",
      skills: ["ReactJS", "Redux", "TypeScript", "JavaScript"],
    },
    {
      category: "☁️ Cloud",
      skills: ["AWS", "AWS EC2", "VPC", "S3"],
    },
    {
      category: "🛠️ Tools",
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
            <React.Fragment key={index}>
              <SlideInText>
                <SkillWidget skillData={category} />
              </SlideInText>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
