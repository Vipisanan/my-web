import App from "@/pages/Index";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <>
      <section className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 md:px-16 pt-[72px]">
        <div className="max-w-6xl w-full">
          {/* Profile Heading */}
          <h2 className="text-4xl font-bold">Profile</h2>
          <div className="w-16 h-1 bg-purple-500 mt-2 mb-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-bold mb-4">About Me</h3>
              <p className="text-gray-300">
                I am an efficient and confident sales executive with
                demonstrated experience in the logistics and supply chain
                industry. My experience helped me develop expert knowledge of
                the sales process and supply chain. I am highly motivated to
                continue learning and improving my craft.
              </p>

              {/* Developer Details */}
              <h3 className="text-2xl font-bold mt-8 mb-4">
                Developer Details
              </h3>

              {/* Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Languages */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-300">
                    Languages
                  </h4>
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-md mt-2">
                    JAVASCRIPT, TYPESCRIPT AND JAVA
                  </div>
                </div>

                {/* Career Goal */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-300">
                    Career Goal
                  </h4>
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-md mt-2">
                    SOFTWARE ARCHITECT
                  </div>
                </div>

                {/* IDEs */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-300">IDEs</h4>
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-md mt-2">
                    XX, XXX, SSS, RRR
                  </div>
                </div>

                {/* Career Goal Again */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-300">
                    Career Goal
                  </h4>
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
