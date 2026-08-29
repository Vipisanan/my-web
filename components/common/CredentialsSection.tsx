import React from "react";
import SectionHeading from "./SectionHeading";
import CertificateWidget from "@/components/widgets/CertificateWidget";
import SlideInText from "@/components/styleComponent/SlideInTextAnimation";
import {
  CERTIFICATES,
  EDUCATION,
  EducationDataType,
  OnlineCoursesDataType,
} from "@/data/profile";

const CredentialsSection = () => {
  return (
    <div className="w-full pt-22">
      <SectionHeading index="04" title="Credentials" />
      <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <h3 className="mb-5 font-mono text-[11px] uppercase tracking-wider text-faint">
            Education
          </h3>
          {EDUCATION.map((edu: EducationDataType, index) => (
            <SlideInText key={index}>
              <article className="border-t border-line py-5">
                <p className="mb-1.5 font-mono text-[11.5px] text-faint">{edu.year}</p>
                <h4 className="mb-1 text-[17px] font-semibold tracking-tight">
                  {edu.institution}
                </h4>
                <p className="text-[14.5px] leading-snug text-muted">{edu.degree}</p>
                {edu.details.length > 0 && (
                  <ul className="mt-1.5 list-inside list-disc text-[14px] text-faint">
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </article>
            </SlideInText>
          ))}
        </div>

        <div>
          <div className="mb-5 flex items-baseline gap-3">
            <h3 className="font-mono text-[11px] uppercase tracking-wider text-faint">
              Certifications
            </h3>
            <span className="ml-auto font-mono text-[11px] text-faint">
              {CERTIFICATES.length} verified
            </span>
          </div>
          {CERTIFICATES.map((course: OnlineCoursesDataType, index) => (
            <CertificateWidget key={index} certificateData={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CredentialsSection;
