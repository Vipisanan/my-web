"use client";
import React from "react";
import LandingPage from "./LandingPage";
import "../styles/animation.css";
import DownloadResumeButton from "@/components/common/DownloadResumeButton";
import { Analytics } from "@vercel/analytics/next";

export default function App() {
  return (
    <>
      <Analytics />
      {/* Fixed Background Shapes */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <div className="absolute w-64 h-64 bg-purple-700 rounded-full opacity-20 -top-32 -left-32 animate-float"></div>

        <div
          className={`absolute w-90 h-90 bg-indigo-700 rounded-full opacity-20
             top-10 
             right-160 animate-float-delay`}
        ></div>

        <div
          className={`absolute w-68 h-68 bg-indigo-700 rounded-full opacity-20 
            top-1/2
            left-1/4 animate-float-delay`}
        ></div>

        <div
          className={`absolute w-18 h-18 bg-indigo-700 rounded-full opacity-20 
          bottom-10 
          right-1/2 animate-float-delay`}
        ></div>

        <div className="absolute w-56 h-56 bg-purple-600 rounded-full opacity-20 bottom-0 right-0 animate-float"></div>
      </div>
      <DownloadResumeButton />

      <LandingPage />
    </>
  );
}
