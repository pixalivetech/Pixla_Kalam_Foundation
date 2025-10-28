import React from "react";
import { ArrowUpRight } from "lucide-react";
import GreenImg from "./../../assets/Home/green.png"; // your image path

export default function KeyInitiatives() {
  return (
    <section id="green" className="bg-[#f2f2f2] px-6 md:px-24 py-20 font-sans text-gray-800 relative">
      {/* ===== TOP SECTION ===== */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-16">
        {/* LEFT SIDE (was right) - Intro Paragraph */}
        <div className="md:w-2/3 order-1">
          <p className="text-lg md:text-2xl font-semibold text-gray-800 leading-snug">
            Pixla Green Mission promotes a sustainable future through tree plantations, 
            seed ball campaigns, and environmental awareness activities.
          </p>
        </div>

        {/* RIGHT SIDE (was left) - Title Section */}
        <div className="md:w-1/2 order-2 mt-8 md:mt-0 text-right">
        
          <h3 className="text-gray-500 text-lg font-medium">
            2. Plant Today, Protect Tomorrow
          </h3>
        </div>
      </div>

      {/* ===== MAIN CONTENT AREA ===== */}
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* LEFT SIDE (was right) - Key Focus Areas */}
        <div className="md:w-1/2 flex flex-col order-1">
          <h5 className="text-gray-500 font-semibold text-lg mb-6">
            Key Focus Areas
          </h5>

          {/* Only 2 Focus Points */}
          <div className="grid grid-cols-1 gap-y-4 text-black text-md mb-12">
            <p>• Tree Sapling Drive: Planting saplings in schools, colleges, villages, and urban areas; fostering long-term environmental responsibility</p>
            <p>• Seed Ball Campaign: Interactive workshops where participants create and disperse seed balls to restore greenery naturally; promotes biodiversity and ecological balance</p>
          </div>

          {/* Divider Line + Button same row */}
          <div className="flex items-center justify-between w-full">
            <button className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-2 text-base transition-all">
              Learn More <ArrowUpRight size={18} />
            </button>
            <div className="w-2/3 border-t-2 border-gray-300"></div>
          </div>
        </div>

        {/* RIGHT SIDE (was left) - Image */}
        <div className="md:w-1/3 md:ml-auto mt-10 md:mt-15 order-2">
          <img
            src={GreenImg}
            alt="Empowering the Next Generation"
            className="w-full h-[200px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
