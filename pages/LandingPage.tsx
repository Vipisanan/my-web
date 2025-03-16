"use client";
import RootComponent from "@/components/layout/RootComponent";
import App from "@/pages/Index";
import Image from "next/image";
import Intro from "./Intro";
import { useState, useEffect } from "react";
import ProfilePage from "./ProfilePage";
import EducationPage from "./EducationPage";
import Skills from "./Skills";
import OnlineCoursesSection from "@/components/common/OnlineCoursesSection";
import SkillsSection from "@/components/common/SkillSection";
import SampleWorkComponent from "@/components/common/SampleWorkSection";
import ReachOutSection from "@/components/common/ReachOutSection";

// items-center justify-center

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => setIsVisible(false), 1000); // Delay removal after fade-out
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <RootComponent>
      <div className="flex w-full flex-col">
        <div className="w-full mt-2">
          {isVisible && (
            <div
              className={`p-0 rounded transition-all duration-1000 ${
                isFading ? "opacity-0 translate-y-[90px]" : "opacity-1000"
              }`}
            >
              <Intro />
            </div>
          )}
          <ProfilePage />
          <EducationPage />
          <OnlineCoursesSection />
          {/* <Skills /> */}
          <SkillsSection />
          <SampleWorkComponent />

          <ReachOutSection />
        </div>
      </div>
    </RootComponent>
  );
}
