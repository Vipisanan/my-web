"use client";
import RootComponent from "@/components/layout/RootComponent";
import App from "@/pages/Index";
import Image from "next/image";
import Intro from "./Intro";
import { useState, useEffect } from "react";
import ProfilePage from "./ProfilePage";

// items-center justify-center

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => setIsVisible(false), 2000); // Delay removal after fade-out
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <RootComponent>
      <div className="flex w-full flex-col">
        <div className="w-full mt-6">
          {isVisible && (
            <div
              className={`p-0 rounded transition-all duration-2000 ${
                isFading ? "opacity-0 translate-y-[90px]" : "opacity-100"
              }`}
            >
              <Intro />
            </div>
          )}
          <ProfilePage />
        </div>
      </div>
    </RootComponent>
  );
}
