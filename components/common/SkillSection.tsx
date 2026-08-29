import React from "react";
import SectionHeading from "./SectionHeading";
import SkillWidget from "@/components/widgets/SkillWidget";
import SlideInText from "@/components/styleComponent/SlideInTextAnimation";
import { STACK, SkillDataType } from "@/data/profile";

const SkillSection = () => {
  return (
    <div className="w-full pt-22">
      <SectionHeading index="03" title="Stack" />
      <div className="reveal-stagger grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {STACK.map((group: SkillDataType, index) => (
          <SlideInText key={index} direction="up" index={index}>
            <SkillWidget skillData={group} />
          </SlideInText>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
