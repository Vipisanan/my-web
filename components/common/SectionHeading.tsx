import React from "react";

interface SectionHeadingProps {
  index: string;
  title: string;
  meta?: string;
}

export default function SectionHeading({ index, title, meta }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs text-accent">{index}</span>
        <h2 className="text-[34px] font-semibold tracking-tight">{title}</h2>
        {meta && <span className="ml-auto font-mono text-xs text-faint">{meta}</span>}
      </div>
      <div className="draw-rule mt-3 h-px w-20 bg-accent" />
    </div>
  );
}
