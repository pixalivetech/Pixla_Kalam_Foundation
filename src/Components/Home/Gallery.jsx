// ShowcaseSection.jsx
import React from 'react';
import Gal1 from "./../../assets/Home/gal1.png";
import Gal2 from "./../../assets/Home/gal2.png";
import Gal3 from "./../../assets/Home/gal3.png";

const ShowcaseSection = () => {
  return (
    <section className="px-6 md:px-24 py-16 bg-[#f2f2f2]">
      <h2 className="inline-block text-sm md:text-lg text-gray-500 font-medium cursor-pointer mb-12">
        Showcase your initiatives visually
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left large image */}
        <div className="md:col-span-2">
          <img
            src={Gal1}
            alt="Planting initiative"
            className="w-full h-95 object-cover rounded-lg"
          />
        </div>

        {/* Right column with two stacked images */}
        <div className="flex flex-col gap-4">
          {/* Top right image */}
          <img
            src={Gal2}
            alt="Initiative banner"
            className="w-full h-45 object-cover rounded-lg"
          />

          {/* Bottom right image with overlay and Show all button */}
          <div className="relative">
            <img
              src={Gal3}
              alt="See all initiatives"
              className="w-full h-45 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <button className="text-white font-semibold hover:bg-green-700 px-4 py-2 shadow">
                Show all 
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
