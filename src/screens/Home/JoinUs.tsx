import React from "react";
import groupPic from "../../assets/groupPic.png";

const JoinUs = () => {
  return (
    <div className="bg-white py-8 px-4 md:px-8 lg:px-16">
      <h2
        style={{ color: "#121A6A" }}
        className="font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-8"
      >
        Join Us!
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-center gap-8">
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
          <img src={groupPic} alt="Group of People" className="w-full h-auto" />
        </div>
        <div className="text-center md:text-left">
          <p
            style={{ color: "#000000" }}
            className="font-bold text-sm md:text-base lg:text-lg"
          >
            Powered by a passionate team of UVA students, Hoohacks organizes
            events such as Hoohacks (Virginia’s largest hackathon) and Ideathon.
            Join our team!
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
