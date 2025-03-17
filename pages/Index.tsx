"use client";
import React, { useState, useEffect } from "react";
import LandingPage from "./LandingPage";

export default function App() {
  const [randomNumber, setRandomNumber] = useState<{ [key: string]: number }>(
    {}
  );

  useEffect(() => {
    const getRandomNumber = (minLimit: number, maxLimit: number) => {
      return Math.floor(Math.random() * (maxLimit - minLimit + 1)) + minLimit;
    };

    setRandomNumber({
      top1: getRandomNumber(2, 4),
      left1: getRandomNumber(3, 4),
      top2: getRandomNumber(1, 4),
      right1: getRandomNumber(2, 4),
      top3: getRandomNumber(5, 10),
      right2: getRandomNumber(1, 4),
    });
  }, []);

  return (
    <>
      {/* Fixed Background Shapes */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <div className="absolute w-64 h-64 bg-purple-700 rounded-full opacity-20 -top-32 -left-32 animate-float"></div>

        {randomNumber.top1 && randomNumber.left1 && (
          <div
            className={`absolute w-48 h-48 bg-indigo-700 rounded-full opacity-20 
            top-1/${randomNumber.top1} 
            left-1/${randomNumber.left1} animate-float-delay`}
          ></div>
        )}
        {randomNumber.top2 && randomNumber.right1 && (
          <div
            className={`absolute w-28 h-28 bg-indigo-700 rounded-full opacity-20
             top-1/${randomNumber.top2} 
             right-1/${randomNumber.right1} animate-float-delay`}
          ></div>
        )}
        {randomNumber.top3 && randomNumber.right2 && (
          <div
            className={`absolute w-18 h-18 bg-indigo-700 rounded-full opacity-20 
          top-${randomNumber.top3} 
          right-1/${randomNumber.right2} animate-float-delay`}
          ></div>
        )}
        <div className="absolute w-56 h-56 bg-purple-600 rounded-full opacity-20 bottom-0 right-0 animate-float"></div>
      </div>

      <LandingPage />
    </>
  );
}
