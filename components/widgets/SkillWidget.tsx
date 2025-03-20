import { useTheme } from "@/hooks/useTheme";
import React from "react";

export interface SkillDataType {
  category: string;
  skills: string[];
}

interface SkillWidgetProps {
  skillData: SkillDataType;
}

const SkillWidget: React.FC<SkillWidgetProps> = ({ skillData }) => {
  const theme = useTheme();

  return (
    <>
      <div
        className={` ${theme === "light" ? "bg-gray-50" : "bg-gray-900"}
        bg-gray-50 h-full p-6 rounded-lg shadow-lg`}
      >
        <h3 className="text-2xl font-semibold pb-3">{skillData.category}</h3>
        <ul className="space-y-2 ">
          {skillData.skills.map((skill, i) => (
            <li
              key={i}
              className={`${
                theme === "light" ? "  text-gray-700 " : "bg-white-700"
              }
              text-sm flex items-center gap-2`}
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
