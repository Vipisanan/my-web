"use client";
import RootComponent from "@/components/layout/RootComponent";
import Intro from "./Intro";
import { useState, useEffect } from "react";
import ProfilePage from "./ProfilePage";
import EducationPage from "./EducationPage";
import OnlineCoursesSection from "@/components/common/OnlineCoursesSection";
import SkillsSection from "@/components/common/SkillSection";
import SampleWorkComponent from "@/components/common/SampleWorkSection";
import ReachOutSection from "@/components/common/ReachOutSection";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => setIsVisible(false), 1500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <RootComponent>
      <div className="flex w-full flex-col ">
        <div className="w-full mt-2" id="home">
          {isVisible && (
            <div
              className={`p-0 rounded transition-all duration-1500 ${
                isFading ? "opacity-0 translate-y-[90px]" : "opacity-1000"
              }`}
            >
              <Intro />
            </div>
          )}
          <div id="profile">
            <ProfilePage />
          </div>
          <div id="education">
            <EducationPage />
          </div>
          <div id="online-courses">
            <OnlineCoursesSection />
          </div>
          <div id="skills">
            <SkillsSection />
          </div>
          <div id="sample-work">
            <SampleWorkComponent />
          </div>
          <div id="reach-out">
            <ReachOutSection />
          </div>
        </div>
      </div>
    </RootComponent>
  );
}
