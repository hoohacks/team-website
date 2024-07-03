import React from 'react';
import hoohacksLogo from './components/hooMain.png'; 

const AnimatedText = () => {
  return (
    <div className="relative flex justify-center items-top h-screen bg-white overflow-hidden pt-48">
      <img src={hoohacksLogo} alt="HooHacks Logo" className="z-20 h-48" />
    </div>
  );
};

export default AnimatedText;