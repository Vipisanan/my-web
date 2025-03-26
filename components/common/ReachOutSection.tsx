"use client";

import { useTheme } from "@/hooks/useTheme";
import { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FaF } from "react-icons/fa6";
import SlideInText from "../styleComponent/SlideInTextAnimation";

export default function ReachOutSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [responseMessageType, setResponseMessageType] = useState<
    "error" | "success"
  >("success");
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setResponseMessage("Email sent successfully!");
        setResponseMessageType("success");
      } else {
        setResponseMessage(`Error: ${data.error}`);
        setResponseMessageType("error");
      }
    } catch (error) {
      setResponseMessage("Failed to send email. Please try again.");
      setResponseMessageType("error");
    }
    setTimeout(() => {
      setResponseMessage("");
    }, 5000);
    setLoading(false);
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto p-8 flex flex-col md:flex-row items-center gap-8">
        {/* Left - Image */}
        <div className="w-full md:w-1/2">
          <div className="mb-10">
            <p className="text-sm uppercase font-semibold text-gray-600 dark:text-gray-400"></p>
            <h2 className="text-3xl font-bold ">Reach Out</h2>
            <div className="border-b-2 border-purple-500 w-20 mt-2"></div>
          </div>
          <img
            src="assert/rOut1.png"
            alt="Person typing on a laptop"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Right - Contact Details & Form */}

        <div className="w-full md:w-1/2">
          <SlideInText>
            <>
              <p className="mt-2 text-lg font-semibold">E.Vipisanan</p>
              <p className="mt-2 text-lg font-semibold">
                <a href="tel:+94779398779" className="text-lg font-semibold">
                  +94 77 93 98 779
                </a>
              </p>
              <p className="text-gray-400">
                <a href="mailto:vipisanan1@gmail.com" className="text-gray-400">
                  vipisanan1@gmail.com
                </a>
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/vipisanan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-xl hover:text-gray-300 cursor-pointer" />
                </a>
                <a
                  href="https://www.github.com/vipisanan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-xl hover:text-gray-300 cursor-pointer" />
                </a>
                <a
                  href="https://www.instagram.com/vipisanan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-xl hover:text-gray-300 cursor-pointer" />
                </a>
                <a
                  href="https://twitter.com/EVipisanan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-xl hover:text-gray-300 cursor-pointer" />
                </a>
                <a
                  href="https://www.facebook.com/vipisanan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-xl hover:text-gray-300 cursor-pointer" />
                </a>
                <a
                  href="https://www.fiverr.com/vipisanan/buying?source=avatar_menu_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaF className="text-xl hover:text-gray-300 cursor-pointer" />
                </a>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={` ${
                    theme === "light"
                      ? "bg-gray-100 border-gray-700 "
                      : " bg-gray-800 border-gray-600 "
                  }
              w-full p-3  rounded-lg border 
              focus:ring focus:ring-purple-500`}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`
                ${
                  theme === "light"
                    ? "bg-gray-100 border-gray-700 "
                    : " bg-gray-800 border-gray-600 "
                }
              w-full p-3 rounded-lg border
               focus:ring focus:ring-purple-500`}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={` ${
                    theme === "light"
                      ? "bg-gray-100 border-gray-700 "
                      : " bg-gray-800 border-gray-600 "
                  }
                w-full p-3 rounded-lg border
                 focus:ring
                  focus:ring-purple-500`}
                  required
                ></textarea>
                <button
                  type="submit"
                  className={`
                 disabled:bg-purple-400 disabled:cursor-default disabled:text-gray-600
                   cursor-pointer w-full
                 text-white p-3 bg-purple-600 hover:bg-purple-700 
              rounded-lg font-semibold`}
                  disabled={loading}
                >
                  Send Message
                </button>
              </form>
              {responseMessage && responseMessageType && (
                <p
                  className={` ${
                    responseMessageType === "success"
                      ? "text-green-400"
                      : " text-red-400"
                  }
            mt-4 text-center `}
                >
                  {responseMessage}
                </p>
              )}
            </>
          </SlideInText>
        </div>
      </div>
    </section>
  );
}
