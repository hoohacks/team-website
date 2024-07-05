import React from "react";
import hoohacksLogo from "../assets/hooMain.png";

const AnimatedText = () => {
  return (
    <div className="relative flex justify-center items-center h-screen bg-white overflow-hidden pt-24 md:pt-32 lg:pt-48 px-4 md:px-8 lg:px-16">
      <img
        src={hoohacksLogo}
        alt="HooHacks Logo"
        className="z-20 h-24 md:h-32 lg:h-48"
      />
    </div>
  );
};

export default AnimatedText;