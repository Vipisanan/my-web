import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ReachOutSection = () => {
  return (
    <section className="py-20 px-6  from-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-64 h-64 bg-purple-700 rounded-full opacity-20 -top-32 -left-32 animate-float"></div>
        <div className="absolute w-48 h-48 bg-indigo-700 rounded-full opacity-20 top-1/2 left-1/4 animate-float-delay"></div>
        <div className="absolute w-56 h-56 bg-purple-600 rounded-full opacity-20 bottom-0 right-0 animate-float"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Title Section */}
        <div className="mb-16">
          <h2 className="text-6xl font-bold text-white mb-4">Reach Out</h2>
          <div className="border-b-4 border-yellow-400 w-24 mt-2 mx-auto"></div>
        </div>

        {/* Contact Info Section */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 inline-block transform transition-all hover:scale-105 hover:shadow-2xl">
            <p className="text-3xl font-semibold text-yellow-400 mb-4">
              Ashwini Ingle
            </p>
            <div className="flex justify-center items-center space-x-2">
              <HiMail className="text-yellow-400 text-3xl" />
              <a
                href="mailto:hello@reallygreatsite.com"
                className="text-yellow-400 hover:text-yellow-300 text-2xl transition duration-300"
              >
                hello@reallygreatsite.com
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-16">
          <p className="text-3xl font-semibold text-yellow-400 mb-8">
            CONNECT WITH ME
          </p>
          <div className="flex justify-center space-x-12">
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-yellow-400 hover:text-yellow-300 text-2xl transition duration-300 transform hover:scale-110"
            >
              <FaLinkedin className="mr-2 text-4xl" />
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-yellow-400 hover:text-yellow-300 text-2xl transition duration-300 transform hover:scale-110"
            >
              <FaTwitter className="mr-2 text-4xl" />
              Twitter
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-yellow-400 hover:text-yellow-300 text-2xl transition duration-300 transform hover:scale-110"
            >
              <FaInstagram className="mr-2 text-4xl" />
              Instagram
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-8 px-8 py-4 bg-yellow-400 text-purple-900 font-bold text-xl rounded-lg hover:bg-yellow-300 transition duration-300 transform hover:scale-105 shadow-lg"
        >
          Back to Top
        </button>
      </div>
    </section>
  );
};

export default ReachOutSection;
