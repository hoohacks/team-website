import React from "react";
import hoohacksLogo from "../../assets/hoohacks_website_logo.gif"; // Big HooHacks GIF
import circleImage from "../../assets/circleLogo.png"; // Circular image (placeholder for actual image)
import ideathonLogo from "../../assets/ideathonLogo.png"; // Ideathon logo
import hoohacksLogoSmall from "../../assets/longhoohacks.png"; // Small HooHacks logo
import teamPhoto from "../../assets/teamphoto.png"; // Team photo

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="w-4/5 mx-auto flex justify-center items-center pb-48">
          <img src={hoohacksLogo} alt="HooHacks Main Logo" className="max-w-full h-auto" />
        </div>

        <div className="w-1/2 flex justify-center items-start pb-48">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="w-3/5">
              <h1 className="text-2xl font-bold text-[#121A6A] mb-2">What is Hoohacks?</h1>
              <p className="pt-5 text-base text-gray-800 leading-relaxed">
              HooHacks is a student-run organization at the University of Virginia that fosters innovation and collaboration among students through technology. 
        Each year, we host events that bring together hundreds of students to tackle real-world challenges, encouraging creativity and hands-on problem-solving.

        We actively partner with industry leaders and student organizations to connect students with opportunities, foster collaboration, and inspire innovation.
              </p>
            </div>
            <div className="w-2/5 flex justify-center">
              <img src={circleImage} alt="Hoohacks Circular Logo" className="w-52 h-52" />
            </div>
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-start pb-32">
          <div className="w-full">
            <h1 className="text-2xl font-bold text-[#121A6A] mb-2 text-left">Our Events</h1>
          </div>
        </div>


        <div className="w-1/2 flex flex-col md:flex-row justify-center items-center pb-48 space-y-5 md:space-y-0 md:space-x-10">
          <div className="w-full md:w-2/5 text-center">
            <a href="https://ideathon.hoohacks.io/" target="_blank" rel="noopener noreferrer">
              <img src={ideathonLogo} alt="Ideathon Logo" />
            </a>
          </div>

          <div className="w-full md:w-2/5 text-center pt-4">
            <a href="https://www.hoohacks.io/" target="_blank" rel="noopener noreferrer">
              <img src={hoohacksLogoSmall} alt="HooHacks Logo" />
            </a>
          </div>
        </div>




        <div className="w-1/2 flex justify-between items-start pb-48">
          <div className="w-1/3">
            <h1 className="text-2xl font-bold text-[#121A6A] mb-4">HooHacks Team</h1>
            <ul className="space-y-2 text-lg text-[#121A6A]">
              <li>• Technology</li>
              <li>• Hacker Experience</li>
              <li>• Marketing</li>
              <li>• Finance</li>
              <li>• Sponsorship</li>
            </ul>
          </div>
          <div className="w-2/3 pl-8">
            <img src={teamPhoto} alt="HooHacks Team" className="rounded-lg shadow-md" />
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
