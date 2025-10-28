import React from "react";
import { ArrowDown01, ArrowDownCircle, ArrowUpRight } from "lucide-react";
import heroBg from "./../../assets/Home/kalam_hero.png";
import Logo from "./../../assets/Home/Klogo.png";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center text-white flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroBg})`,
      }}
    >
      {/* Overlay Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-24">
        {/* Logo + Let's Talk Button */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-6 md:mb-8 gap-4 md:gap-0">
          {/* Left Section (Logo + Text + Border) */}
          <div className="flex items-center space-x-3 border-gray-600">
            {/* Logo Image */}
            <div className="pr-3 border-r-2 border-white">
              <img
                src={Logo}
                alt="Pixla Kalam Foundation Logo"
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
            </div>

            {/* Text beside logo */}
            <div className="text-xs sm:text-sm font-medium leading-tight">
              <p>PIXLA</p>
              <p>KALAM</p>
              <p>FOUNDATION</p>
            </div>
          </div>

          <button className="flex gap-2 w-full md:w-auto text-center bg-white text-black text-sm px-4 py-2 shadow hover:bg-gray-200 transition">
            Let’s talk <ArrowUpRight size={16}/>
          </button>
        </div>

        <br />
        <br />
        <br />

        {/* Main Heading */}
        <div className="max-w-full md:max-w-2xl font-semibold leading-tight mb-6 md:mb-30">
          <h1 className="text-2xl sm:text-3xl md:text-4xl">
            Inspired By Dr. A.P.J. Abdul Kalam <br /> Empowering A Better
            Tomorrow
          </h1>
          <br />
          <p className="text-gray-300 text-sm sm:text-base md:text-lg">
            Building A Brighter Future Through Education, Skill <br /> Development, And
            Environmental Action
          </p>

          {/* Join Now Button */}
          <button className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-700 text-white px-5 py-2 transition-all mt-6 w-full sm:w-auto">
            Join now <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Scroll Down Button (hidden on mobile) */}
        <div className="hidden sm:flex absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 md:left-auto md:right-1/14 md:translate-x-0">
          <button
            onClick={() => {
              const greenSection = document.getElementById("green");
              greenSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 border border-gray-400 text-gray-200 px-5 py-2 hover:bg-white hover:text-black transition-all text-sm sm:text-base"
          >
            Scroll Down <ArrowDownCircle className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
