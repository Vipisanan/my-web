import React from "react";
import ImageView from "../common/ImageView";

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
  return (
    <>
      <div
        className="flex flex-col h-full
      p-6 bg-gray-50 shadow-md rounded-lg"
      >
        <div className="flex-1">
          <ImageView
            src={data.imageUrl}
            alt={data.name}
            cssClassName="w-full h-30 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl dark:text-black font-semibold mb-2">
            {data.name}
          </h3>
          <p className="text-gray-600 mb-2">{data.description}</p>
          <span className="text-gray-500 text-sm block mb-2">{data.year}</span>
        </div>
        <div className="mt-auto">
          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-purple-600 font-semibold hover:underline flex items-center gap-2"
          >
            View Project
          </a>
        </div>
      </div>
    </>
  );
};
export default SampleWorkWidget;
