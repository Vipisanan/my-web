import React from "react";

export default function ProfilePage() {
  return (
    <>
      <section
        className="min-h-screen flex items-center justify-center
       px-6 md:px-16 
       pt-[72px] sm:pt-0
       "
      >
        <div className="max-w-6xl w-full">
          {/* Profile Heading */}
          <h2 className="text-4xl font-bold">Profile</h2>
          <div className="w-16 h-1 bg-purple-500 mt-2 mb-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-bold mb-4">About Me</h3>
              <p className="">
                Hi, I'm Vipisanan, A dedicated Full Stack Developer with over
                4.5 years of experience in building and maintaining robust
                software applications. Proficient in Java, Spring Boot, ReactJS,
                and Microservices, with a strong focus on scalability,
                performance, and user-centric design. Adept at collaborating in
                cross-functional teams, utilizing Agile methodologies, and
                ensuring timely delivery of high-quality software. Passionate
                about continuous learning and staying updated with emerging
                technologies to drive innovation and efficiency in software
                development. Proven ability to solve complex problems and
                deliver effective solutions in dynamic environments.
              </p>

              {/* Developer Details */}
              <h3 className="text-2xl font-bold mt-8 mb-4">
                Developer Details
              </h3>

              {/* Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Languages */}
                <div>
                  <h4 className="text-lg font-semibold">Languages</h4>
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-md mt-2">
                    Java, JavaScript, TypeScript
                  </div>
                </div>

                {/* Framwork Goal */}
                <div>
                  <h4 className="text-lg font-semibold ">Framework</h4>
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-md mt-2">
                    Spring Boot, ReactJs
                  </div>
                </div>

                {/* IDEs */}
                <div>
                  <h4 className="text-lg font-semibold ">IDEs</h4>
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-md mt-2">
                    intellij idea, webstorm, VS code
                  </div>
                </div>

                {/* Career Goal Again */}
                <div>
                  <h4 className="text-lg font-semibold">Career Goal</h4>
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-md mt-2">
                    Software Architect
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center items-center h-full">
              <img
                src="assert/me1.jpg"
                alt="Profile"
                className="w-64 h-64 md:w-[50%] md:h-[80%] rounded-full object-cover border-4 border-gray-500"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
