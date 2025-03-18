import React from "react";

export interface SkillDataType {
  category: string;
  skills: string[];
}

interface SkillWidgetProps {
  skillData: SkillDataType;
}

const SkillWidget: React.FC<SkillWidgetProps> = ({ skillData }) => {
  return (
    <>
      <div className="bg-gray-50 h-full p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-purple-700 mb-4">
          {skillData.category}
        </h3>
        <ul className="space-y-2 ">
          {skillData.skills.map((skill, i) => (
            <li
              key={i}
              className="text-sm text-gray-700 flex items-center gap-2"
            >
              <span className="text-green-500">✔️</span> {skill}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SkillWidget;
