"use client";

import React, { useState } from "react";
import ImageViewModal from "../common/ImageViewModal";
import { useTheme } from "@/hooks/useTheme";
import Chip from "../common/Chip";

export interface OnlineCoursesDataType {
  year: string;
  providerName: string;
  providerLogo: string;
  title: string;
  details: string;
  skills: string[];
  certificateUrl: string;
  certificate: string;
}

interface CertificateWidgetProps {
  certificateData: OnlineCoursesDataType;
}

const CertificateWidget: React.FC<CertificateWidgetProps> = ({
  certificateData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <>
      <div
        className={` ${theme === "light" ? "bg-gray-50" : "bg-gray-900"}
         p-6 rounded-lg shadow-lg flex flex-col h-full`}
      >
        {isOpen && (
          <ImageViewModal
            src={
              certificateData.certificate
                ? certificateData.certificate
                : certificateData.certificateUrl
            }
            handleClose={() => setIsOpen(false)}
            cssClassName="h-4/5"
          />
        )}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={certificateData.providerLogo}
              alt={certificateData.providerName}
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-xl font-semibold">{certificateData.title}</h3>
              <p
                className={`${
                  theme === "light" ? "  text-gray-500 " : "text-gray-500"
                } text-sm`}
              >
                {certificateData.year} | {certificateData.providerName}
              </p>
            </div>
          </div>

          <p
            className={`${
              theme === "light" ? "  text-gray-700 " : "bg-white-700"
            } text-sm`}
          >
            {certificateData.details}
          </p>

          {certificateData.skills && certificateData.skills.length > 0 && (
            <div className="mt-4">
              <h4
                className={`${
                  theme === "light" ? "  text-gray-800 " : "bg-white-700"
                }
                text-lg font-semibold`}
              >
                Key Skills:
              </h4>
              <ul className="flex flex-wrap gap-2 mt-2">
                {certificateData.skills.map((skill, i) => (
                  <React.Fragment key={i}>
                    <Chip text={skill} />
                  </React.Fragment>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-auto flex justify-between items-center">
          {/* Left Side - View Certificate */}
          <p
            rel="noopener noreferrer"
            className="mt-2 cursor-pointer font-semibold flex items-center gap-2 text-blue-500"
            onClick={() => setIsOpen(true)}
          >
            <span>🎓</span>View Certificate
          </p>

          {/* Right Side - View */}
          <p className="mt-2 cursor-pointer font-semibold flex items-center gap-2">
            <a
              href={certificateData.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              <span>🔗</span> Verify
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default CertificateWidget;
