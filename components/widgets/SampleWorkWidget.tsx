import React from "react";
import ImageView from "../common/ImageView";
import { useTheme } from "@/hooks/useTheme";

export interface SampleWorkDataType {
  name: string;
  description: string;
  year: string;
  imageUrl: string;
  url: string;
}
interface PropsType {
  data: SampleWorkDataType;
}

const SampleWorkWidget: React.FC<PropsType> = ({ data }) => {
  const theme = useTheme();
  return (
    <>
      <div
        className={`${theme === "light" ? "bg-gray-50" : "bg-gray-900"}
        flex flex-col h-full
        p-6  shadow-md rounded-lg`}
      >
        <div className="flex-1">
          <ImageView
            src={data.imageUrl}
            alt={data.name}
            cssClassName="w-full h-30 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{data.name}</h3>
          <p
            className={`${
              theme === "light" ? "  text-gray-700 " : "bg-white-700"
            } text-sm mb-2`}
          >
            {data.description}
          </p>
          <span
            className={`${
              theme === "light" ? "  text-gray-500 " : "text-gray-500"
            } text-sm block mb-2`}
          >
            {data.year}
          </span>
        </div>
        <div className="mt-auto">
          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 font-semibold hover:underline flex items-center gap-2"
          >
            <span>🔗</span>
            View Project
          </a>
        </div>
      </div>
    </>
  );
};
export default SampleWorkWidget;
