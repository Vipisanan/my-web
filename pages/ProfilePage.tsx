import App from "@/pages/Index";
import Image from "next/image";

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
                Hi, I'm Vipisanan, a passionate Full Stack Developer with
                expertise in ReactJS and Spring Boot. With over 4.5 years of
                experience, I specialize in building scalable web applications.
                I’m also exploring Web3, AWS, and crypto trading while
                continuously improving my skills in software development and
                entrepreneurship.
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
                    JAVASCRIPT, TYPESCRIPT AND JAVA
                  </div>
                </div>

                {/* Career Goal */}
                <div>
                  <h4 className="text-lg font-semibold ">Career Goal</h4>
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-md mt-2">
                    SOFTWARE ARCHITECT
                  </div>
                </div>

                {/* IDEs */}
                <div>
                  <h4 className="text-lg font-semibold ">IDEs</h4>
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-md mt-2">
                    XX, XXX, SSS, RRR
                  </div>
                </div>

                {/* Career Goal Again */}
                <div>
                  <h4 className="text-lg font-semibold">Career Goal</h4>
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-md mt-2">
                    SOFTWARE ARCHITECT
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center items-center h-full">
              <img
                src="https://media.rnztools.nz/rnz/image/upload/s--7Th-33f3--/ar_16:10,c_fill,f_auto,g_auto,q_auto,w_1050/v1707879820/4KUTP9W_RNZD2782_jpg?_a=BACCd2AD"
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
