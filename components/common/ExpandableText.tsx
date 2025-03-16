"use client";
import React, { useState } from "react";

const ExpandableText = (text: string) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const charLimit = 150; // Character limit for truncated text
  return (
    <>
      {/* See More / See Less Button */}
      {text.length > charLimit && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 hover:underline mt-1 block"
        >
          {isExpanded ? "See Less" : "See More"}
        </button>
      )}
    </>
  );
};
