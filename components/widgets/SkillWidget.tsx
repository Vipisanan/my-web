import React from "react";
import { SkillDataType } from "@/data/profile";

interface SkillWidgetProps {
  skillData: SkillDataType;
}

const SkillWidget: React.FC<SkillWidgetProps> = ({ skillData }) => {
  return (
    <div className="h-full bg-surface px-6 pb-7 pt-6.5">
      <h3 className="mb-4.5 font-mono text-[11px] uppercase tracking-wider text-accent">
        {skillData.category}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {skillData.skills.map((skill, i) => (
          <li key={i} className="text-[15px] text-ink">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillWidget;
