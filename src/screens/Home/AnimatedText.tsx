import React from "react";
import hoohacksLogo from "../../assets/hooMain.png";

const AnimatedText = () => {
  return (
    <div className="relative flex justify-center items-start h-screen bg-white overflow-hidden px-4 md:px-8 lg:px-16">
      <img
        src={hoohacksLogo}
        alt="HooHacks Logo"
        className="z-20 h-24 md:h-32 lg:h-48 absolute top-12 md:top-8 lg:top-60"
      />
      
    </div>
  );
};

export default AnimatedText;