import React from "react";

const SampleWorkSection = () => {
  const workSamples = [
    {
      name: "RMS",
      description: "A web application for managing tasks.",
      year: 2023,
      imageUrl: "https://via.placeholder.com/150",
      url: "https://example.com/project-alpha",
    },
    {
      name: "Beta App",
      description: "A mobile app for real-time communication.",
      year: 2022,
      imageUrl: "https://via.placeholder.com/150",
      url: "https://example.com/beta-app",
    },
    {
      name: "Gamma Tool",
      description: "An AI-powered analytics platform.",
      year: 2024,
      imageUrl: "https://via.placeholder.com/150",
      url: "https://example.com/gamma-tool",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workSamples.map((work, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <img
                src={work.imageUrl}
                alt={work.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{work.name}</h3>
              <p className="text-gray-600 mb-2">{work.description}</p>
              <span className="text-gray-500 text-sm block mb-2">
                {work.year}
              </span>
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SampleWorkSection;
