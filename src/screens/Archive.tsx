import React from "react";
import placementImage from "../assets/hoohacks-placement.png";
import './Archive.css';  // Keep this import for the carousel CSS

const Archive = () => {
  return (
    <div className="flex flex-col items-center p-5 bg-gray-100 font-chakra-petch min-h-screen">
      {/* History Section */}
      <div className="bg-white p-16 rounded-lg mb-5 w-full max-w-3xl shadow-md border-l-4 border-[#121A6A]">
      <h1 className="text-xl md:text-2xl font-bold text-[#121A6A] mb-4 text-center">Our History</h1>

        <p className="text-base md:text-md text-[#121A6A] leading-relaxed mb-4 text-justify">
        In the fall of 2013, a group of students founded HackUVA with the mission of fostering a culture of innovation and collaboration at the University of Virginia. They established committees for finance, sponsorship, and technology and hosted the university's first hackathon, attracting students and companies from across the nation. The event was a resounding success and has continued to grow each year. 
        Eventually renamed HooHacks, it has become one of the University of Virginia's most significant and anticipated events, embodying the spirit of creativity and technological advancement.


        </p>
        
      </div>

      {/* Placement Section */}
      <div className="bg-white p-16 rounded-lg mb-5 w-full max-w-3xl shadow-md border-l-4 border-[#2848BA] text-center">
        <h1 className="text-xl md:text-2xl font-bold text-[#121A6A] mb-4">Beyond HooHacks</h1>
        <p className="text-base md:text-md text-[#121A6A] leading-relaxed mb-4">
          Since our incpetion in 2013, our members and alumni have built on their success through
          internships and full-time employment in a variety of industries.
        </p>
        <img src={placementImage} alt="Placement Companies" className="w-full h-auto max-w-2xl mx-auto rounded-md shadow-sm" />
      </div>

      {/* Sponsors Section */}
      <div className="bg-white p-8 rounded-lg w-full max-w-3xl shadow-md text-center border-l-4 border-[#87A2FC]">
        <h3 className="text-lg md:text-xl font-bold text-[#121A6A] mb-3">Our Sponsors</h3>
        <p className="text-sm md:text-base text-[#121A6A] mb-4 pb-10">
        HooHacks is made possible by the incredible support of our sponsors. Their generosity and dedication enable us to promote innovation and creativity annually. We are proud to have partnered with previous sponsors such as:
        </p>

        {/* First Carousel Row */}
        <div className="sponsors-carousel">
          <div className="sponsors-track">
            {[...Array(8)].map((_, index) => (
              <div className="sponsor-logo" key={`row1-${index}`}></div>
            ))}
            {[...Array(8)].map((_, index) => (
              <div className="sponsor-logo" key={`row1-dup-${index}`}></div>
            ))}
          </div>
        </div>

        {/* Second Carousel Row */}
        <div className="sponsors-carousel">
          <div className="sponsors-track">
            {[...Array(8)].map((_, index) => (
              <div className="sponsor-logo" key={`row2-${index}`}></div>
            ))}
            {[...Array(8)].map((_, index) => (
              <div className="sponsor-logo" key={`row2-dup-${index}`}></div>
            ))}
          </div>
        </div>

        {/* Third Carousel Row */}
        <div className="sponsors-carousel">
          <div className="sponsors-track">
            {[...Array(8)].map((_, index) => (
              <div className="sponsor-logo" key={`row3-${index}`}></div>
            ))}
            {[...Array(8)].map((_, index) => (
              <div className="sponsor-logo" key={`row3-dup-${index}`}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
