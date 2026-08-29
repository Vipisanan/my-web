import React from "react";
import Chip from "@/components/common/Chip";
import { ExperienceDataType } from "@/data/profile";

interface PropsType {
  data: ExperienceDataType;
}

const ExperienceWidget: React.FC<PropsType> = ({ data }) => {
  return (
    <article className="grid grid-cols-1 gap-9 border-t border-line py-7 md:grid-cols-[170px_1fr]">
      <p className="pt-1 font-mono text-[12.5px] text-faint">{data.period}</p>
      <div>
        <header className="mb-2.5 flex flex-wrap items-baseline gap-3">
          <h3 className="text-[19px] font-semibold tracking-tight">{data.role}</h3>
          <p className="text-[15px] text-accent">{data.company}</p>
          <p className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-faint">
            {data.employment}
          </p>
        </header>
        <p className="mb-3.5 max-w-[70ch] text-[15px] leading-relaxed text-muted">
          {data.summary}
        </p>
        <ul className="flex flex-wrap gap-1.5">
          {data.skills.map((skill, i) => (
            <li key={i}>
              <Chip text={skill} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceWidget;
