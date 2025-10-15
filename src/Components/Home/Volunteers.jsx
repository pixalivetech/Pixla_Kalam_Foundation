import React from "react";
import TeamImage from "./../../assets/Home/vol.png"; // Replace with your actual image path

const GetInvolvedSection = () => {
  return (
    <section className="px-6 md:px-24 py-16 bg-[#f2f2f2]">
      <h2 className="text-lg text-gray-500 mb-12">
        Get Involved – Pixla Kalam Foundation
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Volunteer With Us */}
        <div>
          <h3 className="text-gray-500 font-medium mb-2"># Volunteer With Us</h3>
          <p className="text-lg font-semibold text-gray-900 mb-4">
            Join us to empower youth, uplift communities, and build <br /> a greener future
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Assist in Pixla Academy training sessions and workshops</li>
            <li>Participate in Pixla Green Mission tree planting and seed ball drives</li>
            <li>Support community outreach programs and events</li>
          </ul>
          <button className="bg-green-700 text-white px-5 py-2 hover:bg-green-800 transition">
            Sign Up to Volunteer ↗
          </button>
        </div>

        {/* Center Image */}
        <div className="flex justify-center mt-15">
          <img
            src={TeamImage}
            alt="Team volunteering together"
            className=" w-70 h-80 max-h-[300px] object-cover"
          />
        </div>

        {/* Partner With Us */}
        <div>
          <h3 className="text-gray-500 font-medium mb-2"># Partner With Us</h3>
          <p className="text-lg font-semibold text-gray-900 mb-4">
            We invite schools, colleges, corporates, and NGOs to partner with us in expanding our programs for greater impact.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Launch educational and skill development initiatives</li>
            <li>Organize environmental and sustainability campaigns</li>
            <li>Conduct community welfare projects</li>
          </ul>
          <button className="bg-green-700 text-white px-5 py-2 hover:bg-green-800 transition">
            Become a Partner ↗
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
