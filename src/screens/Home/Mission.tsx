import React from "react";
import groupOfPeople from "../../assets/groupOfPeople.png";

const Mission = () => {
  return (
    <div className="bg-white py-8 px-4 md:px-8 lg:px-16">
      <h2
        style={{ color: "#121A6A" }}
        className="font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-8"
      >
        Our Mission
      </h2>
      <div className="flex flex-col items-center md:flex-row-reverse md:justify-center gap-8">
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
          <img
            src={groupOfPeople}
            alt="Group of People"
            className="w-full h-auto"
          />
        </div>
        <div className="text-center md:text-left">
          <p
            style={{ color: "#000000" }}
            className="font-bold text-sm md:text-base lg:text-lg"
          >
            To foster entrepreneurship and innovation by making computer science
            more accessible and fun at UVA and beyond!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
