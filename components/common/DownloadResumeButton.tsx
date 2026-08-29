import React from "react";
import { FaDownload } from "react-icons/fa";
import { RESUME_URL } from "@/data/profile";

const DownloadResumeButton = () => {
  return (
    <a
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-lg bg-accent px-3.5 py-2 font-mono text-xs font-semibold !text-accent-contrast hover:opacity-85"
    >
      CV
      <FaDownload className="h-3 w-3" />
    </a>
  );
};

export default DownloadResumeButton;
