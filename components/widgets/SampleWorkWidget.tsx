import React from "react";
import Chip from "@/components/common/Chip";
import { SampleWorkDataType } from "@/data/profile";

interface PropsType {
  data: SampleWorkDataType;
}

const SampleWorkWidget: React.FC<PropsType> = ({ data }) => {
  return (
    <a
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface !text-ink transition-colors hover:border-faint"
    >
      <div className="aspect-video overflow-hidden border-b border-line bg-raised">
        <img
          src={data.imageUrl}
          alt={`${data.name} product screenshot`}
          width={640}
          height={360}
          className="block h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2.5 px-6 pb-6 pt-5.5">
        <div className="flex items-baseline gap-3">
          <h3 className="text-xl font-semibold tracking-tight">{data.name}</h3>
          <span className="ml-auto font-mono text-[11px] text-faint">{data.year}</span>
        </div>
        <p className="text-[14.5px] leading-relaxed text-muted">{data.description}</p>
        <ul className="mt-auto flex flex-wrap items-center gap-1.5 pt-3.5">
          {data.tags.map((tag, i) => (
            <li key={i}>
              <Chip text={tag} />
            </li>
          ))}
          <li className="ml-auto font-mono text-[11.5px] text-accent">visit ↗</li>
        </ul>
      </div>
    </a>
  );
};

export default SampleWorkWidget;
