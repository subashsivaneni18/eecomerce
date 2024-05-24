import React from "react";
import { Linkedin, Github , Instagram,Twitter } from "lucide-react";
import Navbar from "../components/Navbar";
const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center bg-purple-100 relative top-[70px]">
        <div
          className="w-full h-72 bg-cover bg-center"
          style={{ backgroundImage: "url('./realtime-blog.webp')" }}
        ></div>
        <div className="w-full text-center mt-6 px-4">
          <h1 className="text-4xl font-bold text-purple-600">About Us</h1>
          <p className="mt-4 text-gray-700">
            Telling our inspiring story from the very beginning to our days
          </p>
        </div>
        <div className="w-full max-w-6xl mx-auto px-4 py-12 mt-10">
          <div className="md:flex md:items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-purple-600">
                Our Mission
              </h2>
              <p className="mt-4 text-gray-700">
                Established just a few years ago, we are a young and motivated
                company built on new ideas and energy. During the past years, we
                have continuously grown and gained the trust of numerous
                satisfied customers. We owe our success to our passionate and
                talented team, fueled by a desire to innovate and deliver the
                best solutions to our clients. Our journey is just beginning,
                and we look forward to creating more success stories together.
              </p>
              <hr className="border-t border-gray-400 my-4" />
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                <img
                  src="./A.jpg"
                  alt="Chris Spring"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto px-4 py-12 mt-10">
          <div className="md:flex md:items-center">
            <div className="md:w-1/2 flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                <img
                  src="./B.jpg"
                  alt="Chris Spring"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 px-4">
              <h2 className="text-3xl font-bold text-purple-600">Founder</h2>
              <h2 className="text-xl font-medium text-purple-600">
                Madam-Jury
              </h2>
              <p className="mt-4 text-gray-700">
                Chris Spring, our founder, has always been passionate about
                innovation and customer satisfaction. With a vision to create a
                company that not only delivers top-notch solutions but also
                fosters a collaborative and creative work environment, Chris has
                led our team to numerous successes. His dedication and
                leadership continue to inspire us every day.
              </p>
              <hr className="border-t border-gray-400 my-4" />
            </div>
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto px-4 py-12 mt-10">
          <div className="md:flex md:items-center">
            <div className="md:w-1/2 flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                <img
                  src="./malemploy.AVIF"
                  alt="Chris Spring"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 px-4">
              <h2 className="text-3xl font-bold text-purple-600">Co-Founder</h2>
              <h2 className="text-xl font-medium text-purple-600">Nick-Fury</h2>
              <p className="mt-4 text-gray-700">
                Chris Spring, our founder, has always been passionate about
                innovation and customer satisfaction. With a vision to create a
                company that not only delivers top-notch solutions but also
                fosters a collaborative and creative work environment, Chris has
                led our team to numerous successes. His dedication and
                leadership continue to inspire us every day.
              </p>
              <hr className="border-t border-gray-400 my-4" />
            </div>
          </div>
        </div>

        {/* Social media icons section */}
        <div className="flex items-center justify-center mt-10 mb-10">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <Twitter className="text-3xl text-purple-600 hover:text-purple-700" />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <Instagram className="text-3xl text-purple-600 hover:text-purple-700" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <Linkedin className="text-3xl text-purple-600 hover:text-purple-700" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <Github className="text-3xl text-purple-600 hover:text-purple-700" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
