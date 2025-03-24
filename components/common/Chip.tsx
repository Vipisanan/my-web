"use client";

import { useTheme } from "@/hooks/useTheme";
import React, { useState } from "react";

const Chip = ({ text }: { text: string }) => {
  const theme = useTheme();

  return (
    <>
      <p
        className={`
            ${
              theme === "light"
                ? "bg-gray-300 text-gray-800"
                : "bg-gray-800 text-gray-400"
            }
        px-3 py-1  font-semibold rounded-lg text-sm`}
      >
        {text}
      </p>
    </>
  );
};
export default Chip;
