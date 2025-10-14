import React from "react";
import { ArrowUpRight } from "lucide-react";
import EmpowerImg from "./../../assets/Home/embower.png"; // your image path

export default function KeyInitiatives() {
  return (
    <section className="bg-[#f2f2f2] px-6 md:px-24 py-24 font-sans text-gray-800 relative">
      {/* ===== TOP SECTION ===== */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-16">
        {/* Left Title Section */}
        <div className="md:w-1/2">
          <h4 className="text-gray-500 text-lg font-medium mb-6">
            Our Key Programs
          </h4>
          <h3 className="text-gray-500 text-xl font-semibold leading-snug">
            1. Empowering the Next Generation
          </h3>
        </div>

        {/* Right Paragraph */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <p className="text-lg md:text-2xl text-black font-semibold  leading-snug">
            Pixla Academy empowers youth with practical skills, mentorship, and
            career guidance to bridge the gap between education and employability
          </p>
        </div>
      </div>

      {/* ===== MAIN CONTENT AREA ===== */}
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* LEFT SIDE - IMAGE */}
        <div className="md:w-1/3 mt-30 md:mb-0 ">
          <img
            src={EmpowerImg}
            alt="Empowering the Next Generation"
            className="w-full h-[200px] object-cover"
          />
        </div>

        {/* RIGHT SIDE - FOCUS AREAS */}
        <div className="md:w-1/2 md:ml-auto flex flex-col">
          {/* Key Focus Areas */}
          <h5 className="text-gray-500 font-semibold text-lg mb-6">
            Key Focus Areas
          </h5>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-black text-base mb-12">
            <p>• Digital Literacy & Coding: Training in programming, IT, and digital tools</p>
            <p>• Life Skills & Leadership: Enhancing communication, confidence, and problem-solving</p>
            <p>• Entrepreneurship Development: Encouraging innovation and startup mindset</p>
            <p>• Career Readiness: Resume building, interview preparation, and job placement support</p>
          </div>

          {/* Divider Line + Button in one row */}
          <div className="flex items-center justify-between w-full">
            {/* Divider Line */}
            <div className="w-2/3 border-t-2 border-gray-300"></div>

            {/* Learn More Button */}
            <button className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-2 text-base transition-all">
              Learn More <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
