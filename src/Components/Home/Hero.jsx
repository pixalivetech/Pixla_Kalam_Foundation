import React from "react";
import { ArrowUpRight } from "lucide-react";
import heroBg from "./../../assets/Home/kalam_hero.png";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center text-white flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroBg})`,
      }}
    >
      {/* Overlay Content */}
      <div className="container mx-auto px-6 md:px-24 ">
        {/* Logo + Let's Talk Button */}
        <div className="flex justify-between items-center mb-6 md:mb-10">
          <div className="flex items-center space-x-2 gap-y-6">
            <div className="w-6 h-6 bg-green-500 rounded-full" />
            <div className="text-sm font-medium leading-tight">
              <p>PIXLA</p>
              <p>KALAM</p>
              <p>FOUNDATION</p>
            </div>
          </div>

          <button className="bg-white text-black text-sm px-4 py-2 shadow hover:bg-gray-200 transition">
            Let’s talk
          </button>
        </div>
<br /><br /><br />
        {/* Main Heading */}
        <div className="max-w-2xl  font-semibold leading-tight mb-30">
          <h1 className="text-3xl md:text-4xl" >
            Inspired By Dr. A.P.J. Abdul Kalam <br /> Empowering A Better
            Tomorrow
          </h1><br />
          <p className="text-gray-300 text-base md:text-lg">
            Building A Brighter Future Through Education, Skill <br /> Development, And
            Environmental Action
          </p>
          {/* Join Now Button */}
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 transition-all mt-10">
            Join now <ArrowUpRight size={18} />
          </button>

        </div>

        {/* Scroll Down Button */}
        <div className="absolute bottom-8 right-1/14 transform -translate-x-1/20">
          <button className="flex items-center gap-2 border border-gray-400 text-gray-200 px-5 py-2 hover:bg-white hover:text-black transition-all">
            Scroll Down
          </button>
        </div>
      </div>
    </section>
  );
}
