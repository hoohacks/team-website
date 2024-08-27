import React from "react";
import hoohacksLogo from "../../assets/hoohacks_website_logo.gif"; // Big HooHacks GIF
import circleImage from "../../assets/sticker.png"; // Circular image (placeholder for actual image)
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras vehicula tortor a justo vehicula, non cursus magna consectetur. Sed aliquet massa nec urna aliquam, ac laoreet nunc tristique. Integer euismod, ligula ut aliquam fringilla, ipsum nulla viverra ligula, a bibendum nisl ante quis lacus. Nam cursus, purus vel pellentesque pharetra, purus quam fermentum lorem, a luctus orci nisl sit amet arcu. Fusce id sapien bibendum, pharetra eros id, tempus erat.
              </p>
            </div>
            <div className="w-2/5 flex justify-center">
              <img src={circleImage} alt="Hoohacks Circular Logo" className="w-52 h-52 rounded-full object-cover" />
            </div>
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-start pb-32">
          <div className="w-full">
            <h1 className="text-2xl font-bold text-[#121A6A] mb-2 text-left">Our Events</h1>
          </div>
        </div>


        <div className="w-1/2 flex justify-center items-start pb-48">
          <div className="w-2/5 text-center">
            <a href="https://ideathon.hoohacks.io/" target="_blank" rel="noopener noreferrer">
              <img src={ideathonLogo} alt="Ideathon Logo" />
            </a>
          </div>

          <div className="w-2/5 text-center pt-2 pt-5">
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
