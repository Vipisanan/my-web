import React from "react";
import SampleWorkWidget, {
  SampleWorkDataType,
} from "../widgets/SampleWorkWidget";
import SlideInText from "../styleComponent/SlideInTextAnimation";

const SampleWorkSection = () => {
  const workSamples: SampleWorkDataType[] = [
    {
      name: "RMS",
      description: "A web application for managing tasks.",
      year: "2023",
      imageUrl: "assert/koach.png",
      url: "https://koachhub.com/",
    },
    {
      name: "Knodify",
      description: "A mobile app for real-time communication.",
      year: "2021",
      imageUrl: "assert/knodify.png",
      url: "https://koachhub.com/",
    },
    {
      name: "Inomas",
      description: "An AI-powered analytics platform.",
      year: "2020",
      imageUrl: "assert/inomas.png",
      url: "assert/inomas.png",
    },
    {
      name: "SenzAgro",
      description:
        "SenzAgro optimizes sustainable farming with technology, enhancing yields while conserving water, land, and energy.",
      year: "2019",
      imageUrl: "assert/senz-agro.png",
      url: "https://senzagro.com/",
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-sm uppercase font-semibold text-gray-600 dark:text-gray-400"></p>
          <h2 className="text-3xl font-bold ">My Sample Work</h2>
          <div className="border-b-2 border-purple-500 w-20 mt-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workSamples.map((work, index) => (
            <React.Fragment key={index}>
              <SlideInText>
                <SampleWorkWidget data={work} />
              </SlideInText>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SampleWorkSection;
