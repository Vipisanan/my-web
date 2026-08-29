import React from "react";
import SectionHeading from "./SectionHeading";
import SlideInText from "@/components/styleComponent/SlideInTextAnimation";
import { PROFILE } from "@/data/profile";

const details = [
  { label: "Languages", value: "Java, JavaScript, TypeScript" },
  { label: "Frameworks", value: "Spring Boot, ReactJS" },
  { label: "IDEs", value: "IntelliJ IDEA, WebStorm, VS Code" },
  { label: "Based in", value: `${PROFILE.location} · ${PROFILE.timezone}` },
];

export default function ProfileSection() {
  return (
    <div className="w-full pt-22">
      <SectionHeading index="00" title="Profile" />
      <SlideInText>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.2fr_1fr]">
          <p className="max-w-[62ch] text-[17px] leading-relaxed text-muted">
            {PROFILE.about}
          </p>
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {details.map((d) => (
              <div key={d.label} className="bg-surface px-5 py-4.5">
                <dt className="font-mono text-[10.5px] uppercase tracking-wider text-accent">
                  {d.label}
                </dt>
                <dd className="mt-1.5 text-[15px] text-ink">{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </SlideInText>
    </div>
  );
}
