import React from "react";

export default function Intro() {
  return (
    <>
      <div className="w-full">
        <div className="p-0 grid grid-cols-1 lg:grid-cols-2 gap-6 h-screen">
          {/* Left Column with Image */}
          <div className="flex justify-center items-center h-full">
            <img
              src="assert/main1.png"
              alt="Picture of the author"
              className="h-full object-cover"
            />
          </div>

          {/* Right Column with content */}
          <div className="flex justify-center items-center h-full bg-white">
            {/* Your content goes here */}
            <div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
                Vipisanan Esvaramoorthy
              </h1>
              <h3 className="text-xl text-center sm:text-4xl md:text-xl font-bold">
                Software Engineer
              </h3>
              <div className="text-center">
                <button className="mt-4 text-black-70 text-gray-100 bg-black px-6 py-3 rounded-lg ">
                  Reach out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
