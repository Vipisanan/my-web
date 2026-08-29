import React from "react";
import SectionHeading from "./SectionHeading";
import SampleWorkWidget from "@/components/widgets/SampleWorkWidget";
import SlideInText from "@/components/styleComponent/SlideInTextAnimation";
import { PROJECTS, SampleWorkDataType } from "@/data/profile";

const SampleWorkSection = () => {
  return (
    <div className="w-full pt-22">
      <SectionHeading index="01" title="Selected work" meta="4 products" />
      <div className="reveal-stagger grid grid-cols-1 gap-5.5 md:grid-cols-2">
        {PROJECTS.map((work: SampleWorkDataType, index) => (
          <SlideInText key={index} direction="up" index={index}>
            <SampleWorkWidget data={work} />
          </SlideInText>
        ))}
      </div>
    </div>
  );
};

export default SampleWorkSection;
