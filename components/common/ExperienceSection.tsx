import React from "react";
import SectionHeading from "./SectionHeading";
import ExperienceWidget from "@/components/widgets/ExperienceWidget";
import SlideInText from "@/components/styleComponent/SlideInTextAnimation";
import { EXPERIENCE, ExperienceDataType } from "@/data/profile";

export default function ExperienceSection() {
  return (
    <div className="w-full pt-22">
      <SectionHeading index="02" title="Experience" meta="2018 — present" />
      <ol className="flex flex-col">
        {EXPERIENCE.map((role: ExperienceDataType, index) => (
          <li key={index}>
            <SlideInText>
              <ExperienceWidget data={role} />
            </SlideInText>
          </li>
        ))}
      </ol>
    </div>
  );
}
