import React from "react";
import ideathonLogo from "../../assets/ideathonLogo.png";
import hoohacksBlackLogo from "../../assets/hoohacksBlackLogo.png";

const Events = () => {
  return (
    <div className="bg-white py-8 px-4 md:px-8 lg:px-16">
      <h2
        style={{ color: "#121A6A" }}
        className="font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-8"
      >
        Our Events
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex justify-center items-center p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img
            src={ideathonLogo}
            alt="Ideathon"
            className="w-full h-auto max-h-32 sm:max-h-40 md:max-h-48 lg:max-h-56"
          />
        </div>
        <div className="flex justify-center items-center p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img
            src={hoohacksBlackLogo}
            alt="HooHacks"
            className="w-full h-auto max-h-32 sm:max-h-40 md:max-h-48 lg:max-h-56"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
