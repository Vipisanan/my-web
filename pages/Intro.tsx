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
          <div className="flex justify-center items-center h-full">
            {/* Your content goes here */}
            <div>
              <h1 className="text-2xl text-center sm:text-4xl md:text-5xl font-bold">
                Vipisanan Esvaramoorthy
              </h1>
              <h3 className="text-xl text-center sm:text-4xl md:text-xl font-bold">
                Software Engineer
              </h3>
              <h5 className="text-sm text-center">
                Java, Spring Boot, Microservices | ReactJS | Scalable &
                Innovative Solutions | B.Sc. (Hons.) in Software Engineering
              </h5>
              <h5 className="text-sm text-center">
                B.Sc. (Hons.) in Software Engineering
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
