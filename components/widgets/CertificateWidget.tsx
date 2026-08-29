"use client";

import React, { useState } from "react";
import ImageViewModal from "@/components/common/ImageViewModal";
import { OnlineCoursesDataType } from "@/data/profile";

interface CertificateWidgetProps {
  certificateData: OnlineCoursesDataType;
}

const CertificateWidget: React.FC<CertificateWidgetProps> = ({ certificateData }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="grid grid-cols-[1fr_auto] items-center gap-4 border-t border-line py-4">
      {isOpen && (
        <ImageViewModal
          src={certificateData.certificate || certificateData.certificateUrl}
          alt={`${certificateData.title} certificate`}
          handleClose={() => setIsOpen(false)}
        />
      )}
      <div>
        <h4 className="mb-1 text-[15px] font-medium leading-snug text-ink">
          {certificateData.title}
        </h4>
        <p className="font-mono text-[11px] text-faint">
          {certificateData.providerName} · {certificateData.year} ·{" "}
          {certificateData.skills.join(", ")}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="cursor-pointer font-mono text-[11px] text-faint hover:text-ink"
        >
          view
        </button>
        <a
          href={certificateData.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] text-faint hover:text-accent"
        >
          verify ↗
        </a>
      </div>
    </article>
  );
};

export default CertificateWidget;
