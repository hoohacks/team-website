import React from "react";
import placementImage from "../assets/hoohacks-placement.png";
import './Archive.css';  // Keep this import for the carousel CSS
//import { sponsors } from '../modules/listOfSponsor';

const Archive = () => {
  return (
    <div className="flex flex-col items-center p-5 bg-gray-100 font-chakra-petch min-h-screen pb-36 pt-10">
      {/* History Section */}
      <div className="bg-white p-16 rounded-lg mb-5 w-full max-w-3xl shadow-md border-l-4 border-[#121A6A]">
      <h1 className="text-xl md:text-2xl font-bold text-[#121A6A] mb-4 text-center">Our History</h1>

      <p className="text-sm md:text-base text-[#000000] mb-4 pb-10">
        In the fall of 2013, a group of students founded HackUVA with the mission of fostering a culture of innovation and collaboration at the University of Virginia. They established committees for finance, sponsorship, and technology and hosted the university's first hackathon, attracting students and companies from across the nation. The event was a resounding success and has continued to grow each year. 
        Eventually renamed HooHacks, it has become one of the University of Virginia's most significant and anticipated events, embodying the spirit of creativity and technological advancement.
        </p>
        
      </div>

      {/* Placement Section */}
      <div className="bg-white p-16 rounded-lg mb-5 w-full max-w-3xl shadow-md border-l-4 border-[#2848BA] text-center">
        <h1 className="text-xl md:text-2xl font-bold text-[#121A6A] mb-4">Beyond HooHacks</h1>
        <p className="text-sm md:text-base text-[#000000] mb-4 pb-10">
          Since our inception in 2013, our members and alumni have built on their success through
          internships and full-time employment in a variety of industries.
        </p>
        <img src={placementImage} alt="Placement Companies" className="w-full h-auto max-w-4xl mx-auto rounded-md shadow-sm" />
      </div>

    




     
        

        
      </div>
  );
};

export default Archive;