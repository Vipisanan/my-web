import React from "react";
import { FaDownload } from "react-icons/fa"; // Importing the FaDownload icon from react-icons

const DownloadResumeButton = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1F_usjW6ygboqxpuK7UXP-CmwVqLlTyYt/view?usp=sharing"; // Replace this with your Google Drive link

  return (
    <a
      href={resumeLink}
      target="_blank"
      rel="noopener noreferrer"
      className="z-50 fixed top-24 right-3 md:right-18 bg-blue-600 text-white p-3 
      rounded-full shadow-lg hover:bg-blue-700 transition duration-300 
      flex items-center justify-center"
    >
      <FaDownload className="w-6 h-6" />
    </a>
  );
};

export default DownloadResumeButton;
