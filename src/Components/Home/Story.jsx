import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Div1 from "./../../assets/Home/story1.png";
import Div2 from "./../../assets/Home/story2.png";
import Div3 from "./../../assets/Home/story3.png";

export default function OurDivisions() {
  const [activeIndex, setActiveIndex] = useState(0);

  const divisions = [
    {
      id: "01",
      title: "Our Story",
      description:
        "Pixla’s Retail Media Network helps brands connect with customers through data-driven advertising, in-store activations, and digital strategies—boosting visibility, personalization, and growth.",
      img: Div1,
    },
    {
      id: "02",
      title: "Our Values & Our Impact",
      description:
        "We create and market a diverse range of consumer products that combine innovation and quality to meet everyday needs and inspire customer loyalty.",
      img: Div2,
    },
    {
      id: "03",
      title: "Mission & Vision",
      description:
        "Providing cutting-edge IT services, tech upskilling programs, and freelancing opportunities for professionals to grow and innovate globally.",
      img: Div3,
    },
  ];

  return (
    <section className="bg-[#f2f2f2] px-6 md:px-24 py-16 md:py-24 font-sans">
      {/* ===== Header ===== */}
      <div className="flex flex-col md:flex-row justify-center md:justify-end items-center md:items-end pb-8 border-b-2 border-gray-200 md:ml-85 text-center md:text-left gap-2">
        <div>
          <p className="inline-block text-sm md:text-lg text-gray-500 font-medium mb-4 cursor-pointer">
            Our Story, Values, and Impact
          </p>
          <h2 className="text-lg md:text-2xl font-semibold text-gray-800 leading-snug">
            Founded as part of the Pixla Group’s social initiatives, Pixla Kalam
            Foundation was created to bridge the gap between ambition and
            opportunity
          </h2>
        </div>

        <FaArrowUpRightFromSquare className="w-20 h-20 text-gray-700 mt-2 md:mt-0" />
      </div>

      {/* ===== Desktop View ===== */}
      <div
        className="hidden md:grid mt-0 grid-cols-[300px_1fr] gap-20"
        onMouseLeave={() => setActiveIndex(null)}
      >
        {/* Left Images */}
        <div className="flex flex-col gap-5">
          {divisions.map((item, idx) => (
            <div key={idx} className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`w-full object-cover transition-all duration-700 cursor-pointer ${
                  activeIndex === idx
                    ? "h-52 opacity-100"
                    : "h-32 opacity-80 grayscale-[30%]"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="flex flex-col">
          {divisions.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveIndex(idx)}
              className="border-b-2 border-gray-200 py-12 cursor-pointer transition-all duration-500"
            >
              <div className="grid grid-cols-[200px_1fr] items-start gap-6">
                {/* ID Section */}
                <div className="flex flex-col items-start pt-1">
                  <p className="text-3xl md:text-4xl font-medium">{item.id}.</p>
                </div>

                {/* Title + Desc only */}
                <div className="flex flex-col items-start w-full">
                  <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mt-2 text-left">
                    {item.title}
                  </h3>

                  <div
                    className={`w-full overflow-hidden transition-all duration-700 ease-in-out ${
                      activeIndex === idx
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600 mt-4 leading-relaxed max-w-lg text-left ml-auto">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Mobile View ===== */}
      <div className="md:hidden flex flex-col gap-8 mt-10">
        {divisions.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="bg-white shadow-md overflow-hidden border border-gray-100"
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="w-full h-52 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            <div className="p-5">
              <div
                onClick={() =>
                  setActiveIndex(activeIndex === idx ? null : idx)
                }
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <motion.span
                  animate={{
                    rotate: activeIndex === idx ? 45 : 0,
                  }}
                  className="text-gray-500 text-lg font-bold"
                >
                  +
                </motion.span>
              </div>

              {/* Description only */}
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
