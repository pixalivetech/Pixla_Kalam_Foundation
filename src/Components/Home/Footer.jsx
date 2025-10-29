import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import ContactImg from "./../../assets/Home/donate.png"; // replace with your image path

export default function ContactSection() {
  return (
    <section className="bg-black text-white px-6 md:px-24 py-16">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-9xl font-light mb-12">GET IN TOUCH</h1>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.6fr_1fr] gap-8 md:gap-30 items-start">
        {/* Left Column */}
        <div className="mb-6 md:mb-0">
          <h2 className="font-semibold text-lg sm:text-xl mb-3">
            Pixla Kalam Foundation
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg leading-relaxed">
            We’d love to hear from you! Whether you want to volunteer, partner,
            or support our initiatives, reach out to us through any of the
            following channels
          </p>
        </div>

        {/* Middle Column */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-semibold text-lg sm:text-xl mb-3">CONTACT/</h3>
          <div className="leading-relaxed mb-4">
            <p className="text-gray-400 text-sm sm:text-lg">contact@pixlakalamfoundation.org</p>
            <p className="text-gray-400 text-sm sm:text-lg mb-4">+91 87785 84566</p>
          </div>
          <h3 className="font-semibold text-lg sm:text-xl mb-3">Address</h3>
          <p className="text-gray-400 text-sm sm:text-lg leading-snug">
            Opposite St. Joseph Polytechnic College,<br />
            Soolamalai Village Bus Stop,<br />
            Krishnagiri District,<br />
            Tamil Nadu, 635108, India
          </p>
        </div>

        {/* Right Column (Image) */}
        <div className="flex justify-center md:justify-end">
          <img
            src={ContactImg}
            alt="Contact hands"
            className="w-40 h-44 sm:w-48 sm:h-56 md:w-50 md:h-60 object-cover md:-mt-37"
          />
        </div>
      </div>

      {/* Button */}
      <div className="mt-8 md:mt-25">
        <button
  onClick={() => {
    window.open(
      "https://wa.me/918778584566?text=Hi!%20I’d%20like%20to%20know%20more%20about%20Pixalive%20Gold%20Network.",
      "_blank"
    );
  }}
  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-200 transition"
>
  Send Us a Message
  <FaArrowUpRightFromSquare className="text-xs" />
</button>

      </div>

      {/* Social Links */}
      <div className="flex flex-wrap gap-6 md:gap-30 text-sm md:text-lg text-gray-400 mt-8 md:mt-20">
        <a href="https://www.instagram.com/pixla_group/" className="hover:text-white flex items-center gap-1">
          Instagram <FaArrowUpRightFromSquare className="text-xs" />
        </a>
        <a href="https://www.linkedin.com/company/pixla-gold-network" className="hover:text-white flex items-center gap-1">
          LinkedIn <FaArrowUpRightFromSquare className="text-xs" />
        </a>
      </div>

      {/* Footer Year */}
     <div className="text-right text-2xl md:text-4xl font-semibold -mt-8 md:-mt-10">
  @2025
</div>


    </section>
  );
}
