import React from "react";

const Chip = ({ text }: { text: string }) => {
  return (
    <span className="rounded-md border border-line px-2.5 py-1 font-mono text-[10.5px] text-muted">
      {text}
    </span>
  );
};

export default Chip;
