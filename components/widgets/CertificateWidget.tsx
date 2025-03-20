"use client";

import React, { useState } from "react";
import ImageViewModal from "../common/ImageViewModal";

export interface OnlineCoursesDataType {
  year: string;
  providerName: string;
  providerLogo: string;
  title: string;
  details: string;
  skills: string[];
  certificateUrl: string;
}

interface CertificateWidgetProps {
  certificateData: OnlineCoursesDataType;
}

const CertificateWidget: React.FC<CertificateWidgetProps> = ({
  certificateData,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col h-full">
        {isOpen && (
          <ImageViewModal
            src={certificateData.certificateUrl}
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
              <h3 className="text-xl font-semibold text-purple-700">
                {certificateData.title}
              </h3>
              <p className="text-gray-500">
                {certificateData.year} | {certificateData.providerName}
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-700">{certificateData.details}</p>

          {certificateData.skills && certificateData.skills.length > 0 && (
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-800">
                Key Skills:
              </h4>
              <ul className="flex flex-wrap gap-2 mt-2">
                {certificateData.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="px-3 py-1 bg-purple-100 text-purple-800 rounded-lg text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-auto">
          <p
            rel="noopener noreferrer"
            className="mt-2 cursor-pointer text-purple-600 font-semibold flex items-center gap-2"
            onClick={() => setIsOpen(true)}
          >
            🎓 View Certificate
          </p>
        </div>
      </div>
    </>
  );
};

export default CertificateWidget;
