import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import RootComponent from "@/components/layout/RootComponent";
import HeroSection from "@/components/common/HeroSection";
import ProfileSection from "@/components/common/ProfileSection";
import ExperienceSection from "@/components/common/ExperienceSection";
import SampleWorkSection from "@/components/common/SampleWorkSection";
import SkillSection from "@/components/common/SkillSection";
import CredentialsSection from "@/components/common/CredentialsSection";
import ReachOutSection from "@/components/common/ReachOutSection";
import "../../styles/animation.css";

export default function LandingPage() {
  return (
    <RootComponent>
      <div className="flex w-full flex-col">
        <section id="home">
          <HeroSection />
        </section>
        <section id="profile">
          <ProfileSection />
        </section>
        <section id="sample-work">
          <SampleWorkSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="skills">
          <SkillSection />
        </section>
        <section id="credentials">
          <CredentialsSection />
        </section>
        <section id="reach-out">
          <ReachOutSection />
        </section>
      </div>
      <Analytics />
      <SpeedInsights />
    </RootComponent>
  );
}
