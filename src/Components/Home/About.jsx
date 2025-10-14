import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import LeftImg from "./../../assets/Home/kalam.png";
import RightImg from "./../../assets/Home/pcard1.png";

export default function WhoWeAreSection() {
  return (
    <section className="bg-[#f2f2f2] py-16 md:py-32 font-sans">
      <div className="mx-auto px-6 md:px-24">
        {/* ===== DESKTOP / TABLET VIEW ===== */}
        <div className="hidden md:flex items-start justify-between gap-12">
          {/* LEFT COLUMN */}
          <div className="w-1/4 flex flex-col items-start">
            <h4 className="text-md text-gray-600 mb-4 relative">
              <span className="inline-block text-sm md:text-lg text-gray-500 font-medium mb-4 cursor-pointer">
                Who We Are
              </span>
            </h4>

            <div className="bg-white overflow-hidden shadow-sm w-30 h-32 mb-4 ">
              <img
                src={LeftImg}
                alt="who we are"
                className="w-full h-full object-cover"
              />
            </div>
<br /><br />
            <p className="text-sm text-gray-500 max-w-[250px]">
              Inspired by Dr. A.P.J. Abdul Kalam, <br /> we strive to build a developed India through innovation, education, and  youth empowerment.
            </p>
          </div>

          {/* CENTER COLUMN */}
          <div className="flex-1 px-8">
            <p className="text-xl leading-relaxed max-w-xl mx-auto text-left">
              Pixla Kalam Foundation is a non-profit <br /> 
              organization dedicated to empowering <br />
               communities, nurturing youth talent, and <br /> 
               promoting sustainable development. We <br /> 
               focus on education, skill development, and <br />
                environmental initiatives to create <br /> 
                opportunities that enable individuals and <br /> 
                communities to thrive.
            </p>

            <div className="mt-10 flex items-center justify-center gap-6">
              <div className="w-72 h-[1px] bg-gray-300"></div>

              <a
                href="/about"
                className="inline-flex items-center gap-3 bg-green-600 text-white 
                           px-4 py-2 text-base font-medium shadow-sm 
                           whitespace-nowrap hover:bg-gray-800 transition duration-300"
              >
                Learn More <FaArrowUpRightFromSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-1/4 min-w-[180px] flex flex-col items-end">
            

            <div className="bg-white overflow-hidden shadow-sm w-50 h-36 mt-50">
              <img
                src={RightImg}
                alt="team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ===== MOBILE VIEW ===== */}
        <div className="md:hidden flex flex-col items-center text-center space-y-8">
          {/* Small heading */}
          <h4 className="text-base font-semibold text-gray-700 border-b border-gray-300 pb-2">
            Who We Are
          </h4>

          {/* Paragraph */}
          <p className="text-sm leading-relaxed text-gray-700 max-w-xs">
            Pixla Kalam Foundation is a non-profit
            organization dedicated to empowering
            communities, nurturing youth talent, and
            promoting sustainable development. We
            focus on education, skill development, and
            environmental initiatives to create
            opportunities that enable individuals and
            communities to thrive.
          </p>

          {/* Side-by-side images */}
          <div className="grid grid-cols-2 gap-6 w-full max-w-xs">
            <div className="flex flex-col items-center">
              <div className="bg-white overflow-hidden shadow-sm w-full h-40  mb-3">
                <img
                  src={LeftImg}
                  alt="who we are"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-gray-600">
                Inspired by Dr. A.P.J. Abdul Kalam, we strive to build a developed India through innovation, education, and youth empowerment.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white overflow-hidden shadow-sm w-full h-40  mb-3">
                <img
                  src={RightImg}
                  alt="team"
                  className="w-full h-full object-cover"
                />
              </div>
              
            </div>
          </div>

          {/* CTA button */}
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2 
                       text-sm font-medium  shadow-sm whitespace-nowrap 
                       hover:bg-gray-800 transition duration-300"
          >
            Learn More <FaArrowUpRightFromSquare className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
