import React from "react";
import { ArrowUpRight } from "lucide-react";
import KalamImage from "./../../assets/Home/jkalam.png"; // replace with your image path

export default function PixlaKalamSection() {
  return (
    <div className="w-full flex justify-center items-center py-16 md:py-24 px-6 md:px-24 bg-[#f2f2f2]">
      <div className="relative w-[90%] md:w-[100%] overflow-hidden shadow-lg">
        {/* Background Image */}
        <img
          src={KalamImage}
          alt="Pixla Kalam Foundation"
          className="w-full h-[480px] object-cover"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 bg-opacity-40 px-6 text-center">
          <p className="text-white text-base md:text-xl font-semibold leading-relaxed max-w-4xl mt-55">
            Founded as part of the Pixla Group’s social initiatives, Pixla Kalam
            Foundation was created to bridge the gap between ambition and
            opportunity
          </p>

          <button className="mt-4 bg-green-700 hover:bg-[#0a4f34] text-white font-medium px-5 py-2 flex items-center gap-1 transition-all duration-300">
            Join Us
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
